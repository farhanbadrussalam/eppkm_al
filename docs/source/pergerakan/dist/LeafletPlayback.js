// UMD initialization to work with CommonJS, AMD and basic browser script include
(function (factory) {
	var L;
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['leaflet'], factory);
	} else if (typeof module === 'object' && typeof module.exports === "object") {
		// Node/CommonJS
		L = require('leaflet');
		module.exports = factory(L);
	} else {
		// Browser globals
		if (typeof window.L === 'undefined')
			throw 'Leaflet must be loaded first';
		factory(window.L);
	}
}(function (L) {

L.Playback = L.Playback || {};

L.Playback.Util = L.Class.extend({
  statics: {

    DateStr: function(time) {
      return new Date(time).toDateString();
    },

    TimeStr: function(time) {
      var d = new Date(time);
      var h = d.getHours();
      var m = d.getMinutes();
      var s = d.getSeconds();
      var tms = time / 1000;
      var dec = (tms - Math.floor(tms)).toFixed(2).slice(1);
      var mer = 'AM';
      if (h > 11) {
        h %= 12;
        mer = 'PM';
      } 
      if (h === 0) h = 12;
      if (m < 10) m = '0' + m;
      if (s < 10) s = '0' + s;
      return h + ':' + m + ':' + s + dec + ' ' + mer;
    },

    ParseGPX: function(gpx) {
      var geojson = {
        type: 'Feature',
        geometry: {
          type: 'MultiPoint',
          coordinates: []
        },
        properties: {
          time: [],
          speed: [],
          altitude: []
        },
        bbox: []
      };
      var xml = $.parseXML(gpx);
      var pts = $(xml).find('trkpt');
      for (var i=0, len=pts.length; i<len; i++) {
        var p = pts[i];
        var lat = parseFloat(p.getAttribute('lat'));
        var lng = parseFloat(p.getAttribute('lon'));
        var timeStr = $(p).find('time').text();
        var eleStr = $(p).find('ele').text();
        var t = new Date(timeStr).getTime();
        var ele = parseFloat(eleStr);

        var coords = geojson.geometry.coordinates;
        var props = geojson.properties;
        var time = props.time;
        var altitude = geojson.properties.altitude;

        coords.push([lng,lat]);
        time.push(t);
        altitude.push(ele);
      }
      return geojson;
    }
  }

});

L.Playback = L.Playback || {};

L.Playback.MoveableMarker = L.Marker.extend({    
    initialize: function (startLatLng, options, feature) {    
        var marker_options = options.marker || {};

        if (jQuery.isFunction(marker_options)){        
            marker_options = marker_options(feature);
        }
        
        L.Marker.prototype.initialize.call(this, startLatLng, marker_options);
        
        this.popupContent = '';
        this.feature = feature;
		
        if (marker_options.getPopup){
            this.popupContent = marker_options.getPopup(feature);            
        }
        
        if(options.popups)
        {
            if(feature.geometry.name){
                this.bindPopup(this.getPopupContent() + startLatLng.toString());
            }
        }
        	
        if(options.labels)
        {
            if(this.bindLabel)
            {
                this.bindLabel(this.getPopupContent());
            }
            else
            {
                console.log("Label binding requires leaflet-label (https://github.com/Leaflet/Leaflet.label)");
            }
        }
    },
    
    getPopupContent: function() {
        if (this.popupContent !== ''){
            return '<b>' + this.popupContent + '</b><br/>';
        }
        
        return '';
    },

    lineStringsIntersect: function(l1, l2){
        var intersects = [];
        for (var i = 0; i <= l1.coordinates.length - 2; ++i) {
            for (var j = 0; j <= l2.coordinates.length - 2; ++j) {
                var a1Latlon = L.latLng(l1.coordinates[i][1], l1.coordinates[i][0]),
                    a2Latlon = L.latLng(l1.coordinates[i + 1][1], l1.coordinates[i + 1][0]),
                    b1Latlon = L.latLng(l2.coordinates[j][1], l2.coordinates[j][0]),
                    b2Latlon = L.latLng(l2.coordinates[j + 1][1], l2.coordinates[j + 1][0]),
                    a1 = L.Projection.SphericalMercator.project(a1Latlon),
                    a2 = L.Projection.SphericalMercator.project(a2Latlon),
                    b1 = L.Projection.SphericalMercator.project(b1Latlon),
                    b2 = L.Projection.SphericalMercator.project(b2Latlon),
                    ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x),
                    ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x),
                    u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
                if (u_b != 0) {
                    var ua = ua_t / u_b,
                        ub = ub_t / u_b;
                    if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
                        var pt_x = a1.x + ua * (a2.x - a1.x),
                            pt_y = a1.y + ua * (a2.y - a1.y),
                            pt_xy = {
                                "x": pt_x,
                                    "y": pt_y
                            },
                            pt_latlon = L.Projection.SphericalMercator.unproject(pt_xy);
                        intersects.push({
                            'type': 'Point',
                                'coordinates': [pt_latlon.lng, pt_latlon.lat]
                        });
                    }
                }
            }
        }
        if (intersects.length == 0) intersects = false;
        return intersects;
    },

    lineify: function(inputGeom){
        var outputLines = {
            "type": "GeometryCollection",
                "geometries": []
        }
        switch (inputGeom.type) {
            case "GeometryCollection":
                for (var i in inputGeom.geometries) {
                    var geomLines = this.lineify(inputGeom.geometries[i]);
                    if (geomLines) {
                        for (var j in geomLines.geometries) {
                            outputLines.geometries.push(geomLines.geometries[j]);
                        }
                    } else {
                        outputLines = false;
                    }
                }
                break;
            case "Feature":
                var geomLines = this.lineify(inputGeom.geometry);
                if (geomLines) {
                    for (var j in geomLines.geometries) {
                        outputLines.geometries.push(geomLines.geometries[j]);
                    }
                } else {
                    outputLines = false;
                }
                break;
            case "FeatureCollection":
                for (var i in inputGeom.features) {
                    var geomLines = this.lineify(inputGeom.features[i].geometry);
                    if (geomLines) {
                        for (var j in geomLines.geometries) {
                            outputLines.geometries.push(geomLines.geometries[j]);
                        }
                    } else {
                        outputLines = false;
                    }
                }
                break;
            case "LineString":
                outputLines.geometries.push(inputGeom);
                break;
            case "MultiLineString":
            case "Polygon":
                for (var i in inputGeom.coordinates) {
                    outputLines.geometries.push({
                        "type": "LineString",
                            "coordinates": inputGeom.coordinates[i]
                    });
                }
                break;
            case "MultiPolygon":
                for (var i in inputGeom.coordinates) {
                    for (var j in inputGeom.coordinates[i]) {
                        outputLines.geometries.push({
                            "type": "LineString",
                                "coordinates": inputGeom.coordinates[i][j]
                        });
                    }
                }
                break;
            default:
                outputLines = false;
        }
        return outputLines;
    },

    crossCheck: function(baseLayer, drawLayer){
         var baseJson = baseLayer.toGeoJSON(),
            drawJson = drawLayer.toGeoJSON(),
            baseLines = this.lineify(baseJson),
            drawLines = this.lineify(drawJson),
            crossPoints = {
                type: "GeometryCollection",
                geometries: []
            };
            // console.log(baseJson);
            // console.log(drawJson);
        if (baseLines && drawLines) {
            for (var i in drawLines.geometries) {
                for (var j in baseLines.geometries) {
                    var crossTest = this.lineStringsIntersect(drawLines.geometries[i], baseLines.geometries[j]);
                    // console.log(crossTest);
                    if (crossTest) {
                        for (var k in crossTest) {
                            crossPoints.geometries.push(crossTest[k]);
                        }
                    }
                }
            }
        }
        return crossPoints;
    },

    circle_polygon: function(lat,lng,radius){
        // console.log(lat);
        // console.log(lng);
        // console.log(radius);
        // var counter = 1;
        // var cord_path = [];

        var sideA = Math.pow(radius, 2);
        var sideB = Math.pow(radius, 2);
        var sideC = Math.sqrt(sideA+sideB);

        theLen = sideC/2   // Meters 

        theLenAdjtoDegreesLat = (((theLen)/111300) *(Math.sin(Math.PI / 180)))  //Lat is a constant.
        theLenAdjtoDegreesLng = (((theLen)/111300) *(Math.cos(Math.PI / 180)))  //Lng changes with lat.

        var xMin = lng - (radius/111300);
        var yMin = lat - (radius/111300);
        var xMax = lng + (radius/111300);
        var yMax = lat + (radius/111300);

        var xMin_1 = lng - ((radius*-1)/111300);
        var yMin_1 = lat - (radius/111300);
        var xMax_1 = lng + ((radius*-1)/111300);
        var yMax_1 = lat + (radius/111300);

        var bounds = [[yMin,xMax], [yMax, xMax],[yMin_1,xMax_1], [yMax_1, xMax_1]];
        // for (var counter = 1; counter <= 360; counter++) {

        //     var tmpx  = lat+ (((radius)/111300) *(Math.sin(counter * Math.PI / 180)));
        //     var tmpy = lng+ (((radius)/111300) *(Math.cos(counter * Math.PI / 180)));

        //     var path = [tmpx,tmpy];

        //     cord_path.push(path);
            
        //     // counter++;
        // }
        // console.log(cord_path);
        return bounds;
    },

    move: function (latLng, transitionTime) {
        // Only if CSS3 transitions are supported
        if (L.DomUtil.TRANSITION) {
            if (this._icon) { 
                this._icon.style[L.DomUtil.TRANSITION] = 'all ' + transitionTime + 'ms linear'; 
                if (this._popup && this._popup._wrapper)
                    this._popup._wrapper.style[L.DomUtil.TRANSITION] = 'all ' + transitionTime + 'ms linear'; 
            }
            if (this._shadow) { 
                this._shadow.style[L.DomUtil.TRANSITION] = 'all ' + transitionTime + 'ms linear'; 
            }
        }
        this.setLatLng(latLng);
        if(this.dragging._marker.feature.geometry.name.split("_")[0] == "satuan"){
            // console.log(this.dragging._marker.feature.geometry);
            var data = this.dragging._marker.feature.geometry;
            var radius = 2000;
            if(data.visual_radar){
                radar_visual.removeLayer(data.visual_radar);
                radar_visual_musuh.removeLayer(data.visual_radar);

                radar_extent.removeLayer(data.extent_radar);
                radar_extent_musuh.removeLayer(data.extent_radar);

                

                var coord = this.circle_polygon(this._latlng.lat,this._latlng.lng,radius);

                var var_radar_point = this.circle_polygon(this._latlng.lat,this._latlng.lng,10);

                // console.log(coord);

                var polygon = L.rectangle(coord,{
                    color: data_satuan[data.index][9],
                    weight: 5,
                    fillOpacity: 0
                });

                var polygon_point = L.rectangle(var_radar_point,{
                    color: data_satuan[data.index][9],
                    weight: 5,
                    fillOpacity: 0,
                    id: this.dragging._marker.feature.geometry.name
                });

                var circle = L.circle([this._latlng.lat, this._latlng.lng],radius, {
                    color: data_satuan[data.index][9],
                    // fillColor: data_satuan[data.index][9],
                    fillOpacity: 0
                });

                if(data_satuan[data.index][9] == "red"){
                    polygon._leaflet_id = "musuh_"+this.dragging._marker.feature.geometry.name;

                    radar_point_musuh.removeLayer(data.point_radar);

                    radar_visual_musuh.addLayer(circle);
                    radar_extent_musuh.addLayer(polygon);
                    radar_point_musuh.addLayer(polygon_point);
                }else{
                    polygon._leaflet_id = "balad_"+this.dragging._marker.feature.geometry.name;

                    radar_point.removeLayer(data.point_radar);

                    radar_visual.addLayer(circle);
                    radar_extent.addLayer(polygon);
                    radar_point.addLayer(polygon_point);
                }
                
                data.visual_radar = circle;
                data.extent_radar = polygon;
                data.point_radar = polygon_point;
            }else{
                // console.log(data_satuan[data.index][9]);
                var coord = this.circle_polygon(this._latlng.lat,this._latlng.lng,radius);

                var var_radar_point = this.circle_polygon(this._latlng.lat,this._latlng.lng,10);

                // console.log(this);

                var polygon = L.rectangle(coord,{
                    color: data_satuan[data.index][9],
                    weight: 5,
                    fillOpacity: 0
                });

                var polygon_point = L.rectangle(var_radar_point,{
                    color: data_satuan[data.index][9],
                    weight: 5,
                    fillOpacity: 0,
                    id: this.dragging._marker.feature.geometry.name
                });

                var circle = L.circle([this._latlng.lat, this._latlng.lng],radius, {
                    color: data_satuan[data.index][9],
                    // fillColor: 'red',
                    fillOpacity: 0
                });

                if(data_satuan[data.index][9] == "red"){
                    polygon._leaflet_id = "musuh_"+this.dragging._marker.feature.geometry.name;

                    radar_visual_musuh.addLayer(circle);
                    radar_extent_musuh.addLayer(polygon);
                    radar_point_musuh.addLayer(polygon_point);
                }else{
                    polygon._leaflet_id = "balad_"+this.dragging._marker.feature.geometry.name;
                    radar_visual.addLayer(circle);
                    radar_extent.addLayer(polygon);
                    radar_point.addLayer(polygon_point);
                }
                data.visual_radar = circle;
                data.extent_radar = polygon;
                data.point_radar = polygon_point;   
                
            }

                radar_point_musuh.eachLayer(function(layer){
                    var name_click = document.getElementById("index_sat").value;
                    if(name_click){
                        name_click = name_click.split("|");
                        var info = data_satuan[name_click[0]];

                        if(radar_extent._layers['balad_'+info[0]]){
                            var baseJson = layer.toGeoJSON();
                            var drawJson = radar_extent._layers['balad_'+info[0]].toGeoJSON();
                            baseJson.properties.id = layer.options.id;

                            var intersection = turf.intersect(baseJson, drawJson);
                            if(intersection){
                                console.log(layer);
                            }
                        }
                    }
                });
            
        }
        if (this._popup) {
            if(this.dragging._marker.feature.geometry.name){
                var name = this.dragging._marker.feature.geometry.name;
                var icon = "<div style='width: 20px !important;padding: 10px; margin-bottom: -20px;'>"+this.options.icon.options.html+
                            "</div>";
                this._popup.setContent(this.getPopupContent() + icon);
            }
        }
        if(document.getElementById("popup_"+this.dragging._marker.feature.geometry.name+"_lng")){
            document.getElementById("popup_"+this.dragging._marker.feature.geometry.name+"_lng").value = this._latlng.lng;
            document.getElementById("popup_"+this.dragging._marker.feature.geometry.name+"_lat").value = this._latlng.lat;
        }
    },
    
    // modify leaflet markers to add our roration code
    /*
     * Based on comments by @runanet and @coomsie 
     * https://github.com/CloudMade/Leaflet/issues/386
     *
     * Wrapping function is needed to preserve L.Marker.update function
     */
    _old__setPos:L.Marker.prototype._setPos,
    
    _updateImg: function (i, a, s) {
        a = L.point(s).divideBy(2)._subtract(L.point(a));
        var transform = '';
        transform += ' translate(' + -a.x + 'px, ' + -a.y + 'px)';
        transform += ' rotate(' + this.options.iconAngle + 'deg)';
        transform += ' translate(' + a.x + 'px, ' + a.y + 'px)';
        i.style[L.DomUtil.TRANSFORM] += transform;
    },
    setIconAngle: function (iconAngle) {
        this.options.iconAngle = iconAngle;
        if (this._map)
            this.update();
    },
    _setPos: function (pos) {
        if (this._icon) {
            this._icon.style[L.DomUtil.TRANSFORM] = "";
        }
        if (this._shadow) {
            this._shadow.style[L.DomUtil.TRANSFORM] = "";
        }

        this._old__setPos.apply(this, [pos]);
        if (this.options.iconAngle) {
            var a = this.options.icon.options.iconAnchor;
            var s = this.options.icon.options.iconSize;
            var i;
            if (this._icon) {
                i = this._icon;
                this._updateImg(i, a, s);
            }

            if (this._shadow) {
                // Rotate around the icons anchor.
                s = this.options.icon.options.shadowSize;
                i = this._shadow;
                this._updateImg(i, a, s);
            }

        }
    }
});

L.Playback = L.Playback || {};


        
L.Playback.Track = L.Class.extend({

        initialize : function (geoJSON, options) {
            options = options || {};
            var tickLen = options.tickLen || 250;
            this._staleTime = options.staleTime || 60*60*1000;
            this._fadeMarkersWhenStale = options.fadeMarkersWhenStale || false;
            
            this._geoJSON = geoJSON;
            this._tickLen = tickLen;
            this._ticks = [];
            this._marker = null;
			this._orientations = [];
			
            var sampleTimes = geoJSON.properties.time;
			
            this._orientIcon = options.orientIcons;
            var previousOrientation;
			
            var samples = geoJSON.geometry.coordinates;
            var currSample = samples[0];
            var nextSample = samples[1];
			
            var currSampleTime = sampleTimes[0];
            var t = currSampleTime;  // t is used to iterate through tick times
            var nextSampleTime = sampleTimes[1];
            var tmod = t % tickLen; // ms past a tick time
            var rem,
            ratio;

            // handle edge case of only one t sample
            if (sampleTimes.length === 1) {
                if (tmod !== 0)
                    t += tickLen - tmod;
                this._ticks[t] = samples[0];
				this._orientations[t] = 0;
                this._startTime = t;
                this._endTime = t;
                return;
            }

            // interpolate first tick if t not a tick time
            if (tmod !== 0) {
                rem = tickLen - tmod;
                ratio = rem / (nextSampleTime - currSampleTime);
                t += rem;
                this._ticks[t] = this._interpolatePoint(currSample, nextSample, ratio);
				this._orientations[t] = this._directionOfPoint(currSample,nextSample);
                previousOrientation = this._orientations[t];
            } else {
                this._ticks[t] = currSample;
				this._orientations[t] = this._directionOfPoint(currSample,nextSample);
                previousOrientation = this._orientations[t];
            }

            this._startTime = t;
            t += tickLen;
            while (t < nextSampleTime) {
                ratio = (t - currSampleTime) / (nextSampleTime - currSampleTime);
                this._ticks[t] = this._interpolatePoint(currSample, nextSample, ratio);
				this._orientations[t] = this._directionOfPoint(currSample,nextSample);
                previousOrientation = this._orientations[t];
                t += tickLen;
            }

            // iterating through the rest of the samples
            for (var i = 1, len = samples.length; i < len; i++) {
                currSample = samples[i];
                nextSample = samples[i + 1];
                t = currSampleTime = sampleTimes[i];
                nextSampleTime = sampleTimes[i + 1];

                tmod = t % tickLen;
                if (tmod !== 0 && nextSampleTime) {
                    rem = tickLen - tmod;
                    ratio = rem / (nextSampleTime - currSampleTime);
                    t += rem;
                    this._ticks[t] = this._interpolatePoint(currSample, nextSample, ratio);
					if(nextSample){
                        this._orientations[t] = this._directionOfPoint(currSample,nextSample);
                        previousOrientation = this._orientations[t];
                    } else {
                        this._orientations[t] = previousOrientation;    
                    }
                } else {
                    this._ticks[t] = currSample;
                    if(nextSample){
                        this._orientations[t] = this._directionOfPoint(currSample,nextSample);
                        previousOrientation = this._orientations[t];
                    } else {
                        this._orientations[t] = previousOrientation;    
                    }
                }

                t += tickLen;
                while (t < nextSampleTime) {
                    ratio = (t - currSampleTime) / (nextSampleTime - currSampleTime);
                    
                    if (nextSampleTime - currSampleTime > options.maxInterpolationTime){
                        this._ticks[t] = currSample;
                        
						if(nextSample){
                            this._orientations[t] = this._directionOfPoint(currSample,nextSample);
                            previousOrientation = this._orientations[t];
                        } else {
                            this._orientations[t] = previousOrientation;    
                        }
                    }
                    else {
                        this._ticks[t] = this._interpolatePoint(currSample, nextSample, ratio);
						if(nextSample) {
                            this._orientations[t] = this._directionOfPoint(currSample,nextSample);
                            previousOrientation = this._orientations[t];
                        } else {
                            this._orientations[t] = previousOrientation;    
                        }
                    }
                    
                    t += tickLen;
                }
            }

            // the last t in the while would be past bounds
            this._endTime = t - tickLen;
            this._lastTick = this._ticks[this._endTime];

        },

        _interpolatePoint : function (start, end, ratio) {
            try {
                var delta = [end[0] - start[0], end[1] - start[1]];
                var offset = [delta[0] * ratio, delta[1] * ratio];
                return [start[0] + offset[0], start[1] + offset[1]];
            } catch (e) {
                console.log('err: cant interpolate a point');
                console.log(['start', start]);
                console.log(['end', end]);
                console.log(['ratio', ratio]);
            }
        },
        
        _directionOfPoint:function(start,end){
            return this._getBearing(start[1],start[0],end[1],end[0]);
        },
        
        _getBearing:function(startLat,startLong,endLat,endLong){
              startLat = this._radians(startLat);
              startLong = this._radians(startLong);
              endLat = this._radians(endLat);
              endLong = this._radians(endLong);

              var dLong = endLong - startLong;

              var dPhi = Math.log(Math.tan(endLat/2.0+Math.PI/4.0)/Math.tan(startLat/2.0+Math.PI/4.0));
              if (Math.abs(dLong) > Math.PI){
                if (dLong > 0.0)
                   dLong = -(2.0 * Math.PI - dLong);
                else
                   dLong = (2.0 * Math.PI + dLong);
              }

              return (this._degrees(Math.atan2(dLong, dPhi)) + 360.0) % 360.0;
        },
        
        _radians:function(n) {
          return n * (Math.PI / 180);
        },
        _degrees:function(n) {
          return n * (180 / Math.PI);
        },

        getFirstTick : function () {
            return this._ticks[this._startTime];
        },

        getLastTick : function () {
            return this._ticks[this._endTime];
        },

        getStartTime : function () {
            return this._startTime;
        },

        getEndTime : function () {
            return this._endTime;
        },

        getTickMultiPoint : function () {
            var t = this.getStartTime();
            var endT = this.getEndTime();
            var coordinates = [];
            var time = [];
            while (t <= endT) {
                time.push(t);
                coordinates.push(this.tick(t));
                t += this._tickLen;
            }

            return {
                type : 'Feature',
                geometry : {
                    type : 'MultiPoint',
                    coordinates : coordinates
                },
                properties : {
                    time : time
                }
            };
        },
		
        trackPresentAtTick : function(timestamp)
        {
            return (timestamp >= this._startTime);
        },
        
        trackStaleAtTick : function(timestamp)
        {
            return ((this._endTime + this._staleTime) <= timestamp);
        },

        tick : function (timestamp) {
            if (timestamp > this._endTime)
                timestamp = this._endTime;
            if (timestamp < this._startTime)
                timestamp = this._startTime;
            return this._ticks[timestamp];
        },
		
        courseAtTime: function(timestamp)
        {
            //return 90;
            if (timestamp > this._endTime)
               timestamp = this._endTime;
            if (timestamp < this._startTime)
                timestamp = this._startTime;
            return this._orientations[timestamp];
        },
        
        setMarker : function(timestamp, options){
            var lngLat = null;
            
            // if time stamp is not set, then get first tick
            if (timestamp) {
                lngLat = this.tick(timestamp);
            }
            else {
                lngLat = this.getFirstTick();
            }        
        
            if (lngLat) {
                var latLng = new L.LatLng(lngLat[1], lngLat[0]);
                this._marker = new L.Playback.MoveableMarker(latLng, options, this._geoJSON);     
				if(options.mouseOverCallback) {
                    this._marker.on('mouseover',options.mouseOverCallback);
                }
				if(options.clickCallback) {
                    this._marker.on('click',options.clickCallback);
                }
				
				//hide the marker if its not present yet and fadeMarkersWhenStale is true
				if(this._fadeMarkersWhenStale && !this.trackPresentAtTick(timestamp))
				{
					this._marker.setOpacity(0);
				}
            }
            
            return this._marker;
        },
        
        moveMarker : function(latLng, transitionTime,timestamp) {
            if (this._marker) {
                if(this._fadeMarkersWhenStale) {
                    //show the marker if its now present
                    if(this.trackPresentAtTick(timestamp)) {
                        this._marker.setOpacity(1);
                    } else {
                        this._marker.setOpacity(0);
                    }
                    
                    if(this.trackStaleAtTick(timestamp)) {
                        this._marker.setOpacity(0.25);
                    }
                }
				
                if(this._orientIcon){
                    this._marker.setIconAngle(this.courseAtTime(timestamp));
                }
				
                this._marker.move(latLng, transitionTime);
            }
        },
        
        getMarker : function() {
            return this._marker;
        }

    });

L.Playback = L.Playback || {};

L.Playback.TrackController = L.Class.extend({

    initialize : function (map, tracks, options) {
        this.options = options || {};
    
        this._map = map;

        this._tracks = [];

        // initialize tick points
        this.setTracks(tracks);
    },
    
    clearTracks: function(){
        while (this._tracks.length > 0) {
            var track = this._tracks.pop();
            var marker = track.getMarker();
            
            if (marker){
                this._map.removeLayer(marker);
            }
        }            
    },

    setTracks : function (tracks) {
        // reset current tracks
        this.clearTracks();
        
        this.addTracks(tracks);
    },
    
    addTracks : function (tracks) {
        // return if nothing is set
        if (!tracks) {
            return;
        }
        
        if (tracks instanceof Array) {            
            for (var i = 0, len = tracks.length; i < len; i++) {
                this.addTrack(tracks[i]);
            }
        } else {
            this.addTrack(tracks);
        }            
    },
    
    // add single track
    addTrack : function (track, timestamp) {
        // return if nothing is set
        if (!track) {
            return;
        }

        var marker = track.setMarker(timestamp, this.options);

        if (marker) {
            marker.addTo(this._map);
            
            this._tracks.push(track);
        }            
    },

    tock : function (timestamp, transitionTime) {
        for (var i = 0, len = this._tracks.length; i < len; i++) {
            var lngLat = this._tracks[i].tick(timestamp);
            var latLng = new L.LatLng(lngLat[1], lngLat[0]);
            this._tracks[i].moveMarker(latLng, transitionTime,timestamp);
        }
    },

    getStartTime : function () {
        var earliestTime = 0;

        if (this._tracks.length > 0) {
            earliestTime = this._tracks[0].getStartTime();
            for (var i = 1, len = this._tracks.length; i < len; i++) {
                var t = this._tracks[i].getStartTime();
                if (t < earliestTime) {
                    earliestTime = t;
                }
            }
        }
        
        return earliestTime;
    },

    getEndTime : function () {
        var latestTime = 0;
    
        if (this._tracks.length > 0){
            latestTime = this._tracks[0].getEndTime();
            for (var i = 1, len = this._tracks.length; i < len; i++) {
                var t = this._tracks[i].getEndTime();
                if (t > latestTime) {
                    latestTime = t;
                }
            }
        }
    
        return latestTime;
    },

    getTracks : function () {
        return this._tracks;
    }
});
L.Playback = L.Playback || {};

L.Playback.Clock = L.Class.extend({

  initialize: function (trackController, callback, options) {
    this._trackController = trackController;
    this._callbacksArry = [];
    if (callback) this.addCallback(callback);
    L.setOptions(this, options);
    this._speed = this.options.speed;
    this._tickLen = this.options.tickLen;
    this._cursor = trackController.getStartTime();
    this._transitionTime = this._tickLen / this._speed;
  },

  _tick: function (self) {
    if (self._cursor > self._trackController.getEndTime()) {
      clearInterval(self._intervalID);
      return;
    }
    self._trackController.tock(self._cursor, self._transitionTime);
    self._callbacks(self._cursor);
    self._cursor += self._tickLen;
  },

  _callbacks: function(cursor) {
    var arry = this._callbacksArry;
    for (var i=0, len=arry.length; i<len; i++) {
      arry[i](cursor);
    }
  },

  addCallback: function(fn) {
    this._callbacksArry.push(fn);
  },

  start: function () {
    if (this._intervalID) return;
    this._intervalID = window.setInterval(
      this._tick, 
      this._transitionTime, 
      this);
  },

  stop: function () {
    if (!this._intervalID) return;
    clearInterval(this._intervalID);
    this._intervalID = null;
  },

  getSpeed: function() {
    return this._speed;
  },

  isPlaying: function() {
    return this._intervalID ? true : false;
  },

  setSpeed: function (speed) {
    this._speed = speed;
    this._transitionTime = this._tickLen / speed;
    if (this._intervalID) {
      this.stop();
      this.start();
    }
  },

  setCursor: function (ms) {
    var time = parseInt(ms);
    if (!time) return;
    var mod = time % this._tickLen;
    if (mod !== 0) {
      time += this._tickLen - mod;
    }
    this._cursor = time;
    this._trackController.tock(this._cursor, 0);
    this._callbacks(this._cursor);
  },

  getTime: function() {
    return this._cursor;
  },

  getStartTime: function() {
    return this._trackController.getStartTime();
  },

  getEndTime: function() {
    return this._trackController.getEndTime();
  },

  getTickLen: function() {
    return this._tickLen;
  }

});

// Simply shows all of the track points as circles.
// TODO: Associate circle color with the marker color.

L.Playback = L.Playback || {};

L.Playback.TracksLayer = L.Class.extend({
    initialize : function (map, options) {
        var layer_options = options.layer || {};
        
        if (jQuery.isFunction(layer_options)){
            layer_options = layer_options(feature);
        }
        
        if (!layer_options.pointToLayer) {
            layer_options.pointToLayer = function (featureData, latlng) {
                return new L.CircleMarker(latlng, { radius : 5 });
            };
        }
    
        this.layer = new L.GeoJSON(null, layer_options);

        var overlayControl = {
            'GPS Tracks' : this.layer
        };

        L.control.layers(null, overlayControl, {
            collapsed : false
        }).addTo(map);
    },

    // clear all geoJSON layers
    clearLayer : function(){
        for (var i in this.layer._layers) {
            this.layer.removeLayer(this.layer._layers[i]);            
        }
    },

    // add new geoJSON layer
    addLayer : function(geoJSON) {
        this.layer.addData(geoJSON);
    }
});
L.Playback = L.Playback || {};

L.Playback.DateControl = L.Control.extend({
    options : {
        position : 'bottomleft',
        dateFormatFn: L.Playback.Util.DateStr,
        timeFormatFn: L.Playback.Util.TimeStr
    },

    initialize : function (playback, options) {
        L.setOptions(this, options);
        this.playback = playback;
    },

    onAdd : function (map) {
        this._container = L.DomUtil.create('div', 'leaflet-control-layers leaflet-control-layers-expanded');

        var self = this;
        var playback = this.playback;
        var time = playback.getTime();

        var datetime = L.DomUtil.create('div', 'datetimeControl', this._container);

        // date time
        this._date = L.DomUtil.create('p', '', datetime);
        this._time = L.DomUtil.create('p', '', datetime);

        this._date.innerHTML = this.options.dateFormatFn(time);
        this._time.innerHTML = this.options.timeFormatFn(time);

        // setup callback
        playback.addCallback(function (ms) {
            self._date.innerHTML = self.options.dateFormatFn(ms);
            self._time.innerHTML = self.options.timeFormatFn(ms);
        });

        return this._container;
    }
});
    
L.Playback.PlayControl = L.Control.extend({
    options : {
        position : 'bottomright'
    },

    initialize : function (playback) {
        this.playback = playback;
    },

    onAdd : function (map) {
        this._container = L.DomUtil.create('div', 'leaflet-control-layers leaflet-control-layers-expanded');

        var self = this;
        var playback = this.playback;
        playback.setSpeed(100);

        var playControl = L.DomUtil.create('div', 'playControl', this._container);


        this._button = L.DomUtil.create('button', '', playControl);
        this._button.innerHTML = 'Play';


        var stop = L.DomEvent.stopPropagation;

        L.DomEvent
        .on(this._button, 'click', stop)
        .on(this._button, 'mousedown', stop)
        .on(this._button, 'dblclick', stop)
        .on(this._button, 'click', L.DomEvent.preventDefault)
        .on(this._button, 'click', play, this);
        
        function play(){
            if (playback.isPlaying()) {
                playback.stop();
                self._button.innerHTML = 'Play';
            }
            else {
                playback.start();
                self._button.innerHTML = 'Stop';
            }                
        }

        return this._container;
    }
});    
    
L.Playback.SliderControl = L.Control.extend({
    options : {
        position : 'bottomleft'
    },

    initialize : function (playback) {
        this.playback = playback;
    },

    onAdd : function (map) {
        this._container = L.DomUtil.create('div', 'leaflet-control-layers leaflet-control-layers-expanded');

        var self = this;
        var playback = this.playback;

        // slider
        this._slider = L.DomUtil.create('input', 'slider', this._container);
        this._slider.type = 'range';
        this._slider.min = playback.getStartTime();
        this._slider.max = playback.getEndTime();
        this._slider.value = playback.getTime();

        var stop = L.DomEvent.stopPropagation;

        L.DomEvent
        .on(this._slider, 'click', stop)
        .on(this._slider, 'mousedown', stop)
        .on(this._slider, 'dblclick', stop)
        .on(this._slider, 'click', L.DomEvent.preventDefault)
        //.on(this._slider, 'mousemove', L.DomEvent.preventDefault)
        .on(this._slider, 'change', onSliderChange, this)
        .on(this._slider, 'mousemove', onSliderChange, this);           


        function onSliderChange(e) {
            var val = Number(e.target.value);
            playback.setCursor(val);
        }

        playback.addCallback(function (ms) {
            self._slider.value = ms;
        });
        
        
        map.on('playback:add_tracks', function() {
            self._slider.min = playback.getStartTime();
            self._slider.max = playback.getEndTime();
            self._slider.value = playback.getTime();
        });

        return this._container;
    }
});      

L.Playback = L.Playback.Clock.extend({
        statics : {
            MoveableMarker : L.Playback.MoveableMarker,
            Track : L.Playback.Track,
            TrackController : L.Playback.TrackController,
            Clock : L.Playback.Clock,
            Util : L.Playback.Util,
            
            TracksLayer : L.Playback.TracksLayer,
            PlayControl : L.Playback.PlayControl,
            DateControl : L.Playback.DateControl,
            SliderControl : L.Playback.SliderControl
        },

        options : {
            tickLen: 250,
            speed: 1,
            maxInterpolationTime: 5*60*1000, // 5 minutes

            tracksLayer : true,
            
            playControl: false,
            dateControl: false,
            sliderControl: false,
            
            // options
            layer: {
                // pointToLayer(featureData, latlng)
            },
            
            marker : {
                // getPopup(feature)
            }
        },

        initialize : function (map, geoJSON, callback, options) {
            L.setOptions(this, options);
            
            this._map = map;
            this._trackController = new L.Playback.TrackController(map, null, this.options);
            L.Playback.Clock.prototype.initialize.call(this, this._trackController, callback, this.options);
            
            if (this.options.tracksLayer) {
                this._tracksLayer = new L.Playback.TracksLayer(map, options);
            }

            this.setData(geoJSON);            
            

            if (this.options.playControl) {
                this.playControl = new L.Playback.PlayControl(this);
                this.playControl.addTo(map);
            }

            if (this.options.sliderControl) {
                this.sliderControl = new L.Playback.SliderControl(this);
                this.sliderControl.addTo(map);
            }

            if (this.options.dateControl) {
                this.dateControl = new L.Playback.DateControl(this, options);
                this.dateControl.addTo(map);
            }

        },
        
        clearData : function(){
            this._trackController.clearTracks();
            
            if (this._tracksLayer) {
                this._tracksLayer.clearLayer();
            }
        },
        
        setData : function (geoJSON) {
            this.clearData();
        
            this.addData(geoJSON, this.getTime());
            
            this.setCursor(this.getStartTime());
        },

        // bad implementation
        addData : function (geoJSON, ms) {
            // return if data not set
            if (!geoJSON) {
                return;
            }
        
            if (geoJSON instanceof Array) {
                for (var i = 0, len = geoJSON.length; i < len; i++) {
                    this._trackController.addTrack(new L.Playback.Track(geoJSON[i], this.options), ms);
                }
            } else {
                this._trackController.addTrack(new L.Playback.Track(geoJSON, this.options), ms);
            }

            this._map.fire('playback:set:data');
            
            if (this.options.tracksLayer) {
                this._tracksLayer.addLayer(geoJSON);
            }                  
        },

        destroy: function() {
            this.clearData();
            if (this.playControl) {
                this._map.removeControl(this.playControl);
            }
            if (this.sliderControl) {
                this._map.removeControl(this.sliderControl);
            }
            if (this.dateControl) {
                this._map.removeControl(this.dateControl);
            }
        }
    });

L.Map.addInitHook(function () {
    if (this.options.playback) {
        this.playback = new L.Playback(this);
    }
});

L.playback = function (map, geoJSON, callback, options) {
    return new L.Playback(map, geoJSON, callback, options);
};
return L.Playback;

}));
