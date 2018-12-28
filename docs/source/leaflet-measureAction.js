  L.Text = L.Layer.extend({
        includes: L.Mixin.Events,
        options: {
            autoPan: true,
            offset: new L.Point(0, 30),
            autoPanPadding: new L.Point(5, 5),
            latlng: null,
            content: "",
            className: "",
            showUnitControl : false,
            unit: 'Kilometer',
            unitControlLabel: {
               metres: 'm',
               kilometres: 'km',
               feet: 'ft',
               landmiles: 'mi',
               nauticalmiles: 'nm'
            },
        },
        layerType: 'textLayer',
        initialize: function(options) {
            L.Util.setOptions(this, options);
        },
        onAdd: function(map) {
            this._map = map;
            this._container || this._initLayout();
            map._panes.popupPane.appendChild(this._container);
            map.on("viewreset", this._updatePosition, this);
            if (L.Browser.any3d) map.on("zoomanim", this._zoomAnimation, this);
            this._update();

            if (this.options.showUnitControl) {
                if (this.options.unit == "Kilometer") {
                    var label = this.options.unitControlLabel.metres;
                    var title = this.options.unitControlTitle.text + " [" + this.options.unitControlTitle.metres  + "]";
                }  else if  (this.options.unit == "landmiles") {
                    var label = this.options.unitControlLabel.landmiles;
                    var title = this.options.unitControlTitle.text + " [" + this.options.unitControlTitle.landmiles  + "]";
                } else {
                    var label = this.options.unitControlLabel.nauticalmiles;
                    var title = this.options.unitControlTitle.text + " [" + this.options.unitControlTitle.nauticalmiles  + "]";
                }
                var classes = [];
                this._unitControl = this._createControl (label, title, classes, this._container, this._changeUnit, this);
                this._unitControl.setAttribute ('id', 'unitControlId');
            }
        },
        addTo: function(map) {
            map.addLayer(this);
            return this;
        },
        onRemove: function(map) {
            map._panes.popupPane.removeChild(this._container);
            map.off({
                    viewreset: this._updatePosition,
                    zoomanim: this._zoomAnimation
                },
                this);
            this._map = null;
        },
        setLatLng: function(latlng) {
            this.options.latlng = L.latLng(latlng);
            this._updatePosition();
            return this;
        },
        setContent: function(content) {
            this.options.content = content;
            this._updateContent();
            return this;
        },
        _initLayout: function() {
            this._container = L.DomUtil.create("lable", "imap-text " + this.options.className + " imap-zoom-animated");
            this._contentNode = L.DomUtil.create("span", "imap-text-content", this._container);
        },
        _update: function() {
            this._map && (this._updateContent(), this._updatePosition());
        },
        _updateContent: function() {
            if (this.options.content) typeof this.options.content == "string" ? this._contentNode.innerHTML = this.options.content : (this._contentNode.innerHTML = "", this._contentNode.appendChild(this.options.content));
        },
        _updatePosition: function() {
            var point = this._map.latLngToLayerPoint(this.options.latlng),
                is3D = L.Browser.any3d,
                offset = this.options.offset;
            is3D && L.DomUtil.setPosition(this._container, point);
            this._containerBottom = -offset.y - (is3D ? 0 : point.y);
            this._containerLeft = offset.x + (is3D ? 0 : point.x);
            this._container.style.bottom = this._containerBottom + "px";
            this._container.style.left = this._containerLeft + "px";
        },
        _zoomAnimation: function(a) {
            a = this._map._latLngToNewLayerPoint(this.options.latlng, a.zoom, a.center);
            L.DomUtil.setPosition(this._container, a);
        }
    });
 L.ComputeDist = L.ToolbarAction.extend({
        options: {
            toolbarIcon: { className: 'leaflet-ComputeDist' }
        },
        _rad: Math.PI / 180,
        initialize: function(map, options) {
            this._map = map;
            this._map._distControl = this;
            L.setOptions(this, options);
            L.ToolbarAction.prototype.initialize.call(this, map, options);
        },
        addHooks: function() {
            this._onMouseClick();
        },

        _onMouseClick: function() {
            this._map._areaControl._startCompute && this._map._areaControl._finishCompute();
            this._startCompute ? this._finishCompute() : this._enableCompute();
        },
        _setPath: function(event) {
            var latlng = event.latlng || this._map.mouseEventToLatLng(event);
            if (this._startPath) {
                if (!latlng.equals(this._lastPoint)) {
                    var latlngs = this._currentDist._latlngs;
                    latlngs.push(latlng);
                    var length = latlngs.length;
                    this._totalDist += this._getDistance(latlngs[length - 2], latlngs[length - 1]);
                    this._addMarker(latlng);
                    this._addLable(latlng, this._getDistanceString(this._totalDist), "dist-point");
                }
            } else this._currentDist = {
                    _layers: [],
                    _latlngs: []
                },
                this._addPath(latlng),
                this._totalDist = 0,
                this._startPath = true,
                this._addMarker(latlng),
                this._addLable(latlng, "Start Point", "dist-start"),
                this._currentDist._latlngs.push(latlng);
            this._lastPoint = latlng;
            this._startMove = false;
        },
        _onMove: function(event) {
            var latlng = event.latlng,
                point = event.containerPoint,
                tip = this._map._cursorTip;
            tip.style.left = point.x + 7 + "px";
            tip.style.top = point.y + 23 + "px";
            tip.style.display = "";
            if (this._startPath) this._startMove ? this._currentPath.setLatLngs(this._currentDist._latlngs.concat(latlng)) : (this._currentPath.addLatLng(latlng), this._startMove = true);
        },
        _finishCompute: function(event) {
            if (this._startPath) this._currentDist._latlngs.length > 1 ? ((!event || event.type === "contextmenu") && this._currentPath.setLatLngs(this._currentDist._latlngs), this._addReomveMarker(this._lastPoint), this._currentDist.lastLable._container.style.display = "none", this._addLable(this._lastPoint, this._getDistanceString(this._totalDist), "dist-end")) : this._clearLayers.call(this._currentDist);
            this._disableCompute();
        },
        _enableCompute: function() {
            var map = this._map;
            map.contextMenu && map.contextMenu.disable();
            this._startCompute = true;
            // L.DomUtil.addClass(this._container, "active");
            map.on("click", this._setPath, this);
            map.on("dblclick contextmenu", this._finishCompute, this);
            map.doubleClickZoom.disable();
            if (true) {
                var tip = map._cursorTip = L.DomUtil.create("div", "imap-cursorTip", map._container);
                tip.style.cssText = " z-index: 1000;position:absolute;background-color:#fff;border:1px solid #f00;display:none;padding:2px;white-space:nowrap;";
                tip.innerHTML = " Distance Measure";
            }
            map.on("mousemove", this._onMove, this);
        },
        _disableCompute: function() {
            var map = this._map;
            map.contextMenu && map.contextMenu.enable();
            map._cursorTip.style.display = "none";
            //L.DomUtil.removeClass(this._container, "active");
            map.off("click", this._setPath, this);
            map.off("dblclick contextmenu", this._finishCompute, this);
            map.off("mousemove", this._onMove, this);
            map.doubleClickZoom.enable();
            this._startCompute = this._startMove = this._startPath = false;
        },
        _addMarker: function(latLng) {
            var icon = new L.Icon({
                    iconUrl: "lib/leaflet/images/transparent.png",
                    iconSize: [11, 11],
                    iconAnchor: [6, 6],
                    className: "md-icon"
                }),
                marker = new L.Marker(latLng, {
                    icon: icon,
                    clickable: false
                });;
            this._map.addLayer(marker);
            this._currentDist._layers.push(marker);
        },
        _addPath: function(latLngs) {
            var path = this._currentPath = new L.Polyline([latLngs], {
                weight: 2
            });
            this._map.addLayer(path);
            this._currentDist._layers.push(path);
            this._currentDist._map = this._map;
        },
        _addLable: function(latlng, content, className) {
            var text = this._currentDist.lastLable = new L.Text({
                latlng: latlng,
                content: content,
                className: className
            });
            this._map.addLayer(text);
            this._currentDist._layers.push(text);
        },
        _addReomveMarker: function(latlng) {
            var icon = new L.Icon({
                    iconUrl: "lib/leaflet/images/transparent.png",
                    iconSize: [12, 12],
                    iconAnchor: [-10, 7],
                    className: "md-remove-icon"
                }),
                marker = new L.Marker(latlng, {
                    icon: icon
                });
            marker.on("click", this._clearLayers, this._currentDist);
            this._map.addLayer(marker);
            this._currentDist._layers.push(marker);
        },
        _clearLayers: function() {
            var i, layers = this._layers,
                length;
            i = 0;
            for (length = layers.length; i < length; i++) this._map.removeLayer(layers[i]);
        },
        _getDistanceString: function(distance) {
            if ($(".toolbar_distance").html() == 'm') {
                return distance + " Meter"
            }else if ($(".toolbar_distance").html() == 'km') {
                return (distance / 1E3).toFixed(1) + " Kilometer"
            }else if ($(".toolbar_distance").html() == 'nm'){
                return (distance / 1.852).toFixed(1) + " Nauticalmiles"
            }
            // return distance < 1E3 ? distance + " Meter" : (distance / 1E3).toFixed(1) + " Kilometer";
        },
        _getDistance: function(a, b) {
            var c = this._rad,
                d = c * a.lat,
                e = c * b.lat,
                c = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin((d - e) / 2), 2) + Math.cos(d) * Math.cos(e) * Math.pow(Math.sin((c * a.lng - c * b.lng) / 2), 2)));
            return c = Math.round(c * 6378137);
        }
    });

L.ComputeArea = L.ToolbarAction.extend({
    options: {
            toolbarIcon: { className: 'leaflet-ComputeDist' }
        },
        _rad: Math.PI / 180,
        _deg: 180 / Math.PI,
        initialize: function(map, options) {
            this._map = map;
            this._map._areaControl = this;
            L.setOptions(this, options);
            L.ToolbarAction.prototype.initialize.call(this, map, options);
        },

        addHooks: function() {
            this._onMouseClick();
        },

        _onMouseClick: function() {
            this._map._distControl._startCompute && this._map._distControl._finishCompute();
            this._startCompute ? this._finishCompute() : this._enableCompute();
        },
        _setArea: function(event) {
            var latlng = event.latlng || this._map.mouseEventToLatLng(event);
            this._startArea ? latlng.equals(this._lastPoint) || (this._addMarker(latlng), this._compute._latlngs.push(latlng)) : (this._compute = {
                    _layers: [],
                    _latlngs: []
                },
                this._addArea(latlng), this._map.on("mousemove", this._onMove, this), this._startArea = true, this._addMarker(latlng), this._compute._latlngs.push(latlng));
            this._lastPoint = latlng;
            this._startMove = false;
        },
        _onMove: function(event) {
            var latlng = event.latlng,
                point = event.containerPoint,
                tip = this._map._cursorTip;
            tip.style.left = point.x + 7 + "px";
            tip.style.top = point.y + 23 + "px";
            tip.style.display = "";
            if (this._startArea) this._startMove ? this._area.setLatLngs(this._compute._latlngs.concat(latlng)) : (this._area.addLatLng(latlng), this._startMove = true);
        },
        _finishCompute: function(event) {
            this._startArea && (this._compute._latlngs.length > 2 ? ((!event || event.type === "contextmenu") && this._area.setLatLngs(this._compute._latlngs), this._addReomveMarker(this._lastPoint), this._addLable(this._lastPoint, this._getAreaString(this._compute._latlngs), "area-result")) : this._clearLayers.call(this._compute));
            this._disableCompute();
        },
        _enableCompute: function() {
            var map = this._map;
            map.contextMenu && map.contextMenu.disable();
            this._startCompute = true;
            // L.DomUtil.addClass(this._container, "active");
            map.on("click", this._setArea, this);
            map.on("dblclick contextmenu", this._finishCompute, this);
            map.doubleClickZoom.disable();
            if (true) {
                var tip = map._cursorTip = L.DomUtil.create("div", "imap-cursorTip", map._container);
                tip.style.cssText = " z-index: 1000;position:absolute;background-color:#fff;border:1px solid #f00;display:none;padding:2px;white-space:nowrap;";
                tip.innerHTML = "Area Measure";
            }
            map.on("mousemove", this._onMove, this);
        },
        _disableCompute: function() {
            var map = this._map;
            map.contextMenu && map.contextMenu.enable();
            map._cursorTip.style.display = "none";
            //L.DomUtil.removeClass(this._container, "active");
            map.off("click", this._setArea, this);
            map.off("dblclick contextmenu", this._finishCompute, this);
            map.off("mousemove", this._onMove, this);
            map.doubleClickZoom.enable();
            this._startCompute = this._startMove = this._startArea = false;
        },
        _addMarker: function(latlng) {
            var iocn = new L.Icon({
                    iconUrl: "lib/leaflet/images/transparent.png",
                    iconSize: [11, 11],
                    iconAnchor: [6, 6],
                    className: "md-icon"
                }),
                marker = new L.Marker(latlng, {
                    icon: iocn,
                    clickable: false
                });
            this._map.addLayer(marker);
            this._compute._layers.push(marker);
        },
        _addArea: function(latlng) {
            var area = this._area = new L.Polygon([latlng], {
                weight: 2,
                clickable: false
            });
            this._map.addLayer(area);
            this._compute._layers.push(area);
            this._compute._map = this._map;
        },
        _addLable: function(latlng, content, className) {
            var label = this._compute.lastLable = new L.Text({
                latlng: latlng,
                content: content,
                className: className
            });
            this._map.addLayer(label);
            this._compute._layers.push(label);
        },
        _addReomveMarker: function(latlng) {
            var icon = new L.Icon({
                    iconUrl: "lib/leaflet/images/transparent.png",
                    iconSize: [12, 12],
                    iconAnchor: [-10, 7],
                    className: "md-remove-icon"
                }),
                marker = new L.Marker(latlng, {
                    icon: icon
                });
            marker.on("click", this._clearLayers, this._compute);
            this._map.addLayer(marker);
            this._compute._layers.push(marker);
        },
        _clearLayers: function() {
	        var layers=this._layers;
	        for (var i = 0; i < layers.length; i++) {
	            this._map.removeLayer(layers[i]);
	        }
        },
        _getAreaString: function(a) {
        a = Math.round(this._computeArea(a));

        if ($(".toolbar_area").html() == 'm²') {
            return a + " Meter²"
        }else if ($(".toolbar_area").html() == 'km²') {
            return (a / 1E6).toFixed(2) + " Kilometer²"
        }else if ($(".toolbar_area").html() == 'ha'){
            return (a / 1E4).toFixed(2) + " Hektar"
        }        
        // return a < 1E6 ? a + " Meter²" : (a / 1E6).toFixed(2) + " Kilometer²"
	    },

	    _computeArea: function(a) {
	        var b = 0,
	            c, d, e, f = a.length;
	        for (c = 0; c < f; ++c) d = (c + 1) % f,
	            e = (c + 2) % f,
	            b += this._angle(a[c], a[d], a[e]);
	        a = (f - 2) * 180;
	        c = b - a;
	        c > 420 ? c = f * 360 - b - a : c > 300 && c < 420 && (c = Math.abs(360 - c));
	        return c * this._rad * 40680631590769;
	    },
	    _angle: function(a, b, c) {
	        a = this._bearing(b, a);
	        b = this._bearing(b, c);
	        b = a - b;
	        b < 0 && (b += 360);
	        return b;
	    },
	    _bearing: function(a, b) {
	        var degToRad  = this._rad,
	            phi1 = a.lat * degToRad ,
	            lam1 = a.lng * degToRad ,
	            phi2 = b.lat * degToRad ,
	            lam2 = b.lng* degToRad;
	        angle = -Math.atan2(Math.sin(lam1 - lam2) * Math.cos(phi2), Math.cos(phi1) * Math.sin(phi2) - Math.sin(phi1) * Math.cos(phi2) * Math.cos(lam1 - lam2));
	        angle < 0 && (angle += Math.PI * 2);
	        angle *= this._deg;
	        return angle;
	    }
});

L.ChangeDistance = L.ToolbarAction.extend({
    options: {
            toolbarIcon: { className: 'leaflet-ComputeDist' }
        },

        initialize: function(map, options) {
            this._map = map;
            this._map._areaControl = this;
            L.setOptions(this, options);
            L.ToolbarAction.prototype.initialize.call(this, map, options);
        },

        addHooks: function() {
            this._onMouseClick();
        },

        _onMouseClick: function(data) {
            // this._map._distControl._startCompute && this._map._distControl._finishCompute();
            // this._startCompute ? this._finishCompute() : this._enableCompute();
            if ($(".toolbar_distance").html() == 'm') {
                $(".toolbar_distance").html('km');
            }else if ($(".toolbar_distance").html() == 'km'){
                $(".toolbar_distance").html('nm');
            }else if ($(".toolbar_distance").html() == 'nm'){
                $(".toolbar_distance").html('m');
            }
        }
});

L.ChangeArea = L.ToolbarAction.extend({
    options: {
            toolbarIcon: { className: 'leaflet-ComputeDist' }
        },

        initialize: function(map, options) {
            this._map = map;
            this._map._areaControl = this;
            L.setOptions(this, options);
            L.ToolbarAction.prototype.initialize.call(this, map, options);
        },

        addHooks: function() {
            this._onMouseClick();
        },

        _onMouseClick: function(data) {
            // this._map._distControl._startCompute && this._map._distControl._finishCompute();
            // this._startCompute ? this._finishCompute() : this._enableCompute();
            if ($(".toolbar_area").html() == 'm²') {
                $(".toolbar_area").html('km²');
            }else if ($(".toolbar_area").html() == 'km²'){
                $(".toolbar_area").html('ha');
            }else if ($(".toolbar_area").html() == 'ha'){
                $(".toolbar_area").html('m²');
            }
        }
});