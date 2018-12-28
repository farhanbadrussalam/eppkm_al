
    // Setup leaflet map
    var map = new L.Map('map');

    var basemapLayer = new L.TileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}');
    var drawnItems = L.featureGroup().addTo(map);

    var weapon_layer = L.featureGroup().addTo(map);

    var radar_visual = L.geoJson().addTo(map);
    var radar_visual_musuh = L.geoJson().addTo(map);

    var radar_extent = L.geoJson();
    var radar_extent_musuh = L.geoJson();

    var radar_point_musuh = L.geoJson().addTo(map);
    var radar_point = L.geoJson().addTo(map);

    // Center map and default zoom level
    map.setView([-1,118], 5);

    // Adds the background layer to the map
    map.addLayer(basemapLayer);
    // drawnItems = L.featureGroup().addTo(map);
    // Colors for AwesomeMarkers
    var _colorIdx = 0,
        _colors = [
          'orange',
          'green',
          'blue',
          'purple',
          'darkred',
          'cadetblue',
          'red',
          'darkgreen',
          'darkblue',
          'darkpurple'
        ];
        
    function _assignColor() {
        return _colors[_colorIdx++%10];
    }
   
    // =====================================================
    // =============== Playback ============================
    // =====================================================
    function clickedan(){
        var layer_marker = [];
        var layer_polyline = [];
        var arr_data_pergerakan = [];
        console.log(drawnItems);
        drawnItems.eachLayer(function (layer) {
            // console.log(layer);s
            if(layer instanceof L.Marker){
                layer_marker.push(layer)
            }else if(layer instanceof L.Polyline){
                layer_polyline.push(layer);
            }
            
        });
        layer_marker.forEach(function(marker){
            var id_marker = marker.options.icon.options.id_point;
            var kecepatan = "";
            var tgl = "";
            var index_ = "";
            for(var a = 0 ; a<data_satuan.length; a++){
                if(data_satuan[a][0] == id_marker){
                    kecepatan = data_satuan[a][3];
                    tgl = data_satuan[a][2];
                    index_ = a;
                    // console.log();
                }
            }
            layer_polyline.forEach(function(polyline){
                if(id_marker == polyline._leaflet_id){
                    arr_data_pergerakan.push({html: marker.options.icon.options.html,
                                                coordinate: polyline._latlngs, 
                                                kecepatan: kecepatan, 
                                                id_point: id_marker, 
                                                tgl_mulai: tgl,
                                                index: index_
                                                });
                }
            });
        });
        arr_data_pergerakan.forEach(function(layer_sat){
            for(var a = 0; a < arrlayer_satuan.length; a++){
                if(arrlayer_satuan[a].options.icon){
                    if(layer_sat.id_point == arrlayer_satuan[a].options.icon.options.id_point){
                        drawnItems.removeLayer(arrlayer_satuan[a]);
                        arr_layermove.push(arrlayer_satuan[a]);
                    }
                }
            }
        });
        var arr_point_gerak = [];
        var icon = [];
        var iconindex = 0;
        for(var gerak = 0;gerak<arr_data_pergerakan.length;gerak++){
            var arr_pergerakan = arr_data_pergerakan[gerak];
            var laju = arr_pergerakan.kecepatan.split("|");
            var kecepatan_laju = 0;

            if(laju[1] == "kilometer"){
                kecepatan_laju = Number(laju[0]);
            }else if(laju[1] == "miles"){
                kecepatan_laju = (Number(laju[0]) * 1.60934);
            }else if(laju[1] == "knot"){
                kecepatan_laju = (Number(laju[0]) * 1.852);
            } 
            // console.log(arr_pergerakan);
            // var width = 100;
            // var height = 100;
            // var margin = (width/2)*-1;
            // var visual = L.divIcon({ 
            //     html: "<div style='border: 1px solid "+data_satuan[arr_pergerakan.index][9]+"; width: "+width+"px; height: "+height+"px; border-radius: 50%; margin-left: "+margin+"px; margin-top: "+margin+"px;'></div>"
            // });
            var myIcon = L.divIcon({ 
                html: arr_pergerakan.html
            });
            // icon.push(visual);
            icon.push(myIcon);
            // kecepatan_laju = 3600000;
            var jarak_all = 0;
            var waktu_ = [];
            var arr_koordinate = [];
            var date = new Date(arr_pergerakan.tgl_mulai);
            var d = Date.parse(date);
            waktu_.push(d);
            for(var b = 0; b<arr_pergerakan.coordinate.length;b++){
                var c = b;
                var tmp = [];
                tmp.push(arr_pergerakan.coordinate[b].lng,arr_pergerakan.coordinate[b].lat)
                arr_koordinate.push(tmp);
                if(arr_pergerakan.coordinate[c+1]){
                    var jarak_persatu = GetDistance(arr_pergerakan.coordinate[b],arr_pergerakan.coordinate[c+1]);
                    // console.log(arr_pergerakan.coordinate[b])
                    // console.log(arr_pergerakan.coordinate[b].lng);
                    var t = ((jarak_persatu * 111)) / kecepatan_laju;
                    var tdet = (t * 3600)*1000;
                    d = d+tdet;
                    waktu_.push(d);
                    jarak_all = jarak_all + jarak_persatu;
                }else{
                    break;
                }
            }
            // console.log();
            var blueMountain = {
              "type": "Feature",
              "geometry": {
                "type": "MultiPoint",
                "coordinates": arr_koordinate,
                "name": arr_pergerakan.id_point,
                "index": arr_pergerakan.index,
                "visual_radar": "",
                "extent_radar": "",
                "point_radar": ""
              },
              "properties": {
                "time": waktu_
              },
              "bbox": [
                [
                  -123.53612491,
                  44.44482961
                ],
                [
                  -123.53612491,
                  44.55695542
                ],
                [
                  -123.2628745,
                  44.55695542
                ],
                [
                  -123.2628745,
                  44.44482961
                ]
              ]
            };
            // var visual_radar = {
            //   "type": "Feature",
            //   "geometry": {
            //     "type": "MultiPoint",
            //     "coordinates": arr_koordinate
            //   },
            //   "properties": {
            //     "time": waktu_
            //   },
            //   "bbox": [
            //     [
            //       -123.53612491,
            //       44.44482961
            //     ],
            //     [
            //       -123.53612491,
            //       44.55695542
            //     ],
            //     [
            //       -123.2628745,
            //       44.55695542
            //     ],
            //     [
            //       -123.2628745,
            //       44.44482961
            //     ]
            //   ]
            // };
            function _assignColor() {
                return icon[iconindex++];
            }
                // console.log(blueMountain);
            // arr_point_gerak.push(visual_radar);
            arr_point_gerak.push(blueMountain);
            // Playback options
            var playbackOptions = {
                    layer: {
                pointToLayer : function(featureData, latlng){
                    var result = {};
                    
                    if (featureData && featureData.properties && featureData.properties.path_options){
                        result = featureData.properties.path_options;
                    }
                    
                    if (!result.radius){
                        result.radius = 5;
                    }
                    
                    return new L.CircleMarker(latlng, result);
                }
            },
            
                marker: function(){
                    return {
                        icon: _assignColor()
                    };
                },
                clickCallback: function(evt){
                    informasi_marker(evt);
                },
                popups: true
            };
        };
        var playback = new L.Playback(map, arr_point_gerak, null, playbackOptions);
        var control = new L.Playback.Control(playback);
        // console.log();
        // var a = control.clickCallback();
        drawnItems.addLayer(control);
        // playback.bindPopup("<div style='width: 200px;'>"+
        //                 "hai"+
        //                 "</div>"
        //                 );
        // control.addTo(map);
        function GetDistance(point1, point2){
            var x2 = (point2.lng - point1.lng)*(point2.lng - point1.lng);
            var y2 = (point2.lat - point1.lat)*(point2.lat - point1.lat);
            var dtmp = x2+y2;
            var d = Math.sqrt(dtmp)
            return d;
        }
    }



    function informasi_marker(evt){
        var nama = evt.target.feature.geometry.name.split("_");
        if(nama[0]=="satuan"){
            var index = evt.target.feature.geometry.index;
            var font = String.fromCharCode(Number(data_satuan[index][1].index));

            document.getElementById("info_satuan").style.display = "block";
            document.getElementById("option_weapon").style.display = "block";

            document.getElementById("name_satuan").innerHTML = data_satuan[index][5]||"-";
            document.getElementById("no_sat").innerHTML = data_satuan[index][4]||"-";
            document.getElementById("no_atasan").innerHTML = data_satuan[index][6]||"-";
            document.getElementById("ukuran_satuan").innerHTML = data_satuan[index][10]||"-";
            document.getElementById("start_satuan").innerHTML = data_satuan[index][2]||"---";
            var kec = data_satuan[index][3].split("|");
            document.getElementById("speed_satuan").innerHTML = kec[0]+" "+kec[1]||"-- --";

            document.getElementById("default_lat_sat").value = evt.latlng.lat;
            document.getElementById("default_lng_sat").value = evt.latlng.lng;
            document.getElementById("index_sat").value = index+"|"+nama[0];

            document.getElementById("lnglat_move").innerHTML = "<input type='text' id='popup_"+evt.target.feature.geometry.name+"_lng' value='"+evt.latlng.lat+"' style='display: none;'>"+
                            "<input type='text' id='popup_"+evt.target.feature.geometry.name+"_lat' value='"+evt.latlng.lng+"' style='display: none;'>";

            document.getElementById("priview_symbol").innerHTML = font;
            document.getElementById("priview_symbol").style.fontFamily = data_satuan[index][1].nama;
            document.getElementById("priview_symbol").style.color = data_satuan[index][9];
        }

        // var lng = document.getElementById("popup_"+data_satuan[index][0]+"_lng").value;
        // var lat = document.getElementById("popup_"+data_satuan[index][0]+"_lat").value;
        // map.flyTo({lng:evt.latlng.lng,lat:evt.latlng.lat},11);
        // map.setView([evt.latlng.lat,evt.latlng.lng], 11);
    }

    function select_weapon(){
        document.getElementById("property_attack").style.display = "block";
        document.getElementById("button_attack").style.display = "block";

        $(document).keyup(function(evt){
            evt.preventDefault();
            if(evt.which == 32){
                document.getElementById("attack_").click();
            }
        });
        $(document).keypress(function(evt){
            evt.preventDefault();
            if(evt.which == 97 || evt.which == 65){
                var dir = Number(document.getElementById("dir_angle_prop_sat").value);
                dir = dir-1;
                if(dir<0){
                    document.getElementById("dir_angle_prop_sat").value = 360;
                }else{
                    document.getElementById("dir_angle_prop_sat").value = dir;
                }
            }else if(evt.which == 100 || evt.which == 68){
                var dir = Number(document.getElementById("dir_angle_prop_sat").value);
                dir = dir+1;
                if(dir>360){
                    document.getElementById("dir_angle_prop_sat").value = 0;
                }else{
                    document.getElementById("dir_angle_prop_sat").value = dir;
                }
                
            }else if(evt.which == 119 || evt.which == 87){
                var dir = Number(document.getElementById("weap_angle_prop_sat").value);
                dir = dir+1;
                if(dir>360){
                    document.getElementById("weap_angle_prop_sat").value = 0;
                }else{
                    document.getElementById("weap_angle_prop_sat").value = dir;
                }
            }else if(evt.which == 115 || evt.which == 83){
                var dir = Number(document.getElementById("weap_angle_prop_sat").value);
                dir = dir-1;
                if(dir<0){
                    document.getElementById("weap_angle_prop_sat").value = 360;
                }else{
                    document.getElementById("weap_angle_prop_sat").value = dir;
                }
            }
        })
    }

    function attack_object(){
        var lat = 0;
        var lng = 0;
        var index = document.getElementById("index_sat").value.split("|");

        if(index[1] == "satuan"){
            var data = data_satuan[index[0]];

            lat = Number(document.getElementById("popup_"+data[0]+"_lat").value);
            lng = Number(document.getElementById("popup_"+data[0]+"_lng").value);

            var direction = document.getElementById("dir_angle_prop_sat").value;
            var ang_weap = document.getElementById("weap_angle_prop_sat").value;

            tembak_obj_meriam(lat,lng,direction,ang_weap);  
            // console.log(data);
            
        }
    }

    $(document).keyup(function(evt){
        evt.preventDefault();
        if(evt.which == 77){
            document.getElementById("menu_pergerakan").click();
        }
    });