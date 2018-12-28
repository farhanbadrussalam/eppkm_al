var map = new L.map('map', { center: new L.LatLng(51.505, -0.04), zoom: 13 });
    // var map = L.Map('map');
            // .setView([51.505, -0.04], 14);
    map.createPane('labels');
    map.getPane('labels').style.zIndex = 500;
    drawnItems = L.featureGroup().addTo(map);
    formasilayer = L.featureGroup().addTo(map);
    marker_test_ = L.featureGroup().addTo(map);
    map.setView([-1,118], 5);


    var osm = L.tileLayer.wms('http://192.168.0.190:8080/geoserver/Peta/wms', {
                layers: 'Peta:states',
                format: 'image/png',
                transparent: true
            });
    var bugs = L.tileLayer.wms('http://192.168.0.190:8080/geoserver/sf/wms', {
                layers: 'sf:bugsites',
                format: 'image/png',
                transparent: true
            });
    var google = L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}', {id: 'MapID', attribution: 'google'})
    var topo = L.esri.basemapLayer('Topographic').addTo(map);
    // var topo = L.esri.basemapLayer('Topographic').addTo(map);

    var baseMaps = {
        "Topo": topo,
        "google": google
    };

    var overlayMaps = {
        "drawlayer": drawnItems,
        "OSM": osm,
        "bugs": bugs
    };

    // var layer_control = L.control.layers(baseMaps, overlayMaps).addTo(map);
    var layer_control = L.control.layers({
        "google": google,
        "topo" : topo,
        "Streets": L.esri.basemapLayer('Streets').addTo(map)
    }, {'drawlayer': drawnItems,'osm':osm,'bugs':bugs }, { position: 'topright', collapsed: false }).addTo(map);


    var drawControl = new L.Control.Draw({
        edit: {
            featureGroup: drawnItems,
            poly: {
                allowIntersection: false
            }
        },
        draw: {
            polygon: {
                shapeOptions: {
                    fillColor: "black",
                    // fillOpacity: 7/10,
                    color: "black",
                    weight: 5
                },
                allowIntersection: false, // Restricts shapes to simple polygons
                drawError: {
                    color: '#e1e100', // Color the shape will turn when intersects
                    message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
                },
                showArea: true
            },polyline: {
                symbol: L.Symbol.dash({pixelSize: 10, pathOptions: {color: '#f00', weight: 2}}),
                shapeOptions: {
                    color: 'black',
                    weight: 5,
                    opacity: 0.7,
                    dashArray: '0',
                    lineJoin: 'round'
                },
                metric: true, // Whether to use the metric measurement system or imperial
                feet: false, // When not metric, to use feet instead of yards for display.
                nautic: false,
                showLength: true
                // metric: true
            },circle: {
                shapeOptions: {
                    color: 'black',
                    weight: 5,
                    opacity: 0.7,
                    dashArray: '0',
                    lineJoin: 'round'
                },
                metric: true, // Whether to use the metric measurement system or imperial
                feet: false, // When not metric, to use feet instead of yards for display.
                nautic: false,
                showLength: true
            },
            rectangle:{
                shapeOptions: {
                    fillColor: "black",
                    fillOpacity: 7/10,
                    color: "black",
                    weight: 5
                }
            },
            easyPrint: false,
            marker: false,
            circlemarker: false
        }
    });
    // new L.Illustrate.Control({
    //         edit: { featureGroup: drawnItems }
    //     }).addTo(map);
    map.addControl(drawControl);
    
    function_load_data();
    asisten_load_peta();
    
    ambil_data_();

    function clickedan(){
        // document.getElementById("playdiv").style.display= "block";
        // document.getElementById("pausediv").style.display= "none";
        // document.getElementById("beresdiv").style.display= "none";
        var layer_marker = [];
        var layer_polyline = [];

        var arr_data_pergerakan = [];
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
            for(var a = 0 ; a<data_satuan.length; a++){
                if(data_satuan[a][0] == id_marker){
                    kecepatan = data_satuan[a][3];
                }
            }
            layer_polyline.forEach(function(polyline){
                if(id_marker == polyline._leaflet_id){
                    arr_data_pergerakan.push({html: marker.options.icon.options.html,coordinate: polyline._latlngs, kecepatan: kecepatan, id_point: id_marker});
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

        // console.log(arr_data_pergerakan);
        var arr_point_gerak = [];
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
            var myIcon = L.divIcon({ 
                html: arr_pergerakan.html
            });
            // kecepatan_laju = 3600000;
            var jarak_all = 0;
            var waktu_ = [];
            var arr_koordinate = [];
            var date = new Date();
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
                    waktu_.push(d+tdet);
                    jarak_all = jarak_all + jarak_persatu;
                }else{
                    break;
                }
            }
            var blueMountain = {
              "type": "Feature",
              "geometry": {
                "type": "MultiPoint",
                "coordinates": arr_koordinate
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
                // console.log(blueMountain);
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
                        icon: myIcon
                    };
                }        
            };
            var playback = new L.Playback(map, arr_point_gerak, null, playbackOptions);
            // var control = new L.Playback.Control(playback);
            // // docClass("leaflet-top leaflet-right")[0].style.display = "none";
            // control.addTo(map);
                // var a;
                // var d_det = jarak_all/tdet;

            // var marker5 = L.Marker.movingMarker(
            //     arr_pergerakan.coordinate,
            //     (tdet), {
            //         autostart: true,
            //         icon: myIcon
            //     });
            // drawnItems.addLayer(marker5);
            // arr_movingmarker.push(marker5);
            //     marker5.on('end', function() {
            //         document.getElementById("playdiv").style.display= "none";
            //         document.getElementById("pausediv").style.display= "block";
            //     });
            //     marker5.bindPopup("<div style='width: 200px;'>"+
            //                         "<table>"+
            //                             "<tr>"+
            //                                 "<td>Direction Angle</td>"+
            //                                 "<td>:</td>"+
            //                                 "<td><input type='number' id='angel_dir_"+gerak+"'></td>"+
            //                             "</tr>"+
            //                             "<tr>"+
            //                                 "<td>Weapon Angle</td>"+
            //                                 "<td>:</td>"+
            //                                 "<td><input type='number' id='angel_weapon_"+gerak+"'></td>"+
            //                             "</tr>"+
            //                         "</table>"+
            //                         "<button onClick='tembak("+gerak+",1)' width><img src='image/target.png' width='20' height='20'></button>"+
            //                         "</div>"
            //                         );
            //     if(marker5.isRunning()){
            //         arr_pergerakan_latlng.push([]);
            //         moveObj(gerak,marker5);
            //     }
        };
        console.log(arr_point_gerak);
        // function moveObj(jml,marker){
        //     marker.on('move', function(event) {
        //         // console.log(event.latlng);
        //         var info = event.latlng;
        //         arr_pergerakan_latlng[jml] = info;
        //     });
        // }
        function GetDistance(point1, point2){
            var x2 = (point2.lng - point1.lng)*(point2.lng - point1.lng);
            var y2 = (point2.lat - point1.lat)*(point2.lat - point1.lat);
            var dtmp = x2+y2;
            var d = Math.sqrt(dtmp)
            return d;
        }
       
    }
        function pausedong(){
            document.getElementById("playdiv").style.display= "none";
            document.getElementById("pausediv").style.display= "block";
            document.getElementById("beresdiv").style.display= "none";
            arr_movingmarker.forEach(function(moving){
                moving.pause();
            });
        }
        function lanjutdong(){
            document.getElementById("playdiv").style.display= "block";
            document.getElementById("pausediv").style.display= "none";
            document.getElementById("beresdiv").style.display= "none";
            arr_movingmarker.forEach(function(moving){
                moving.start();
            });
        }
        function stopdong (){
            document.getElementById("playdiv").style.display= "none";
            document.getElementById("pausediv").style.display= "none";
            document.getElementById("beresdiv").style.display= "block";
            var a = 0;
            arr_movingmarker.forEach(function(moving){
                drawnItems.addLayer(arr_layermove[a]);
                drawnItems.removeLayer(moving);
                a++;
            });
        }
        function tutupdong (){
            document.getElementById("playdiv").style.display= "none";
            document.getElementById("pausediv").style.display= "none";
            document.getElementById("beresdiv").style.display= "none";
        }
        function jalurnya (){
            status_jalur = true;
            var pisah = docId("index_satuan_jalur").value.split("|");

            var poly = new L.Draw.Polyline(map, {symbol: L.Symbol.dash({pixelSize: 10, pathOptions: {color: '#f00', weight: 2}}),
                shapeOptions: {
                    color: data_satuan[Number(pisah[0])][9],
                    weight: 5,
                    opacity: 0.7,
                    dashArray: '0',
                       lineJoin: 'round'
                }});
            poly.enable();
        }
        // Truncate value based on number of decimals
        var _round = function(num, len) {
            return Math.round(num*(Math.pow(10, len)))/(Math.pow(10, len));
        };
        // Helper method to format LatLng object (x.xxxxxx, y.yyyyyy)
        var strLatLng = function(latlng) {
            return "("+_round(latlng.lat, 6)+", "+_round(latlng.lng, 6)+")";
        };
        function tembak(jml,jenis){
            var latlng = arr_pergerakan_latlng[jml];
            if(jenis == 1){ //MERIAM
                var angel_dir = document.getElementById("angel_dir_"+jml).value;
                var angel_weap = document.getElementById("angel_weapon_"+jml).value;

                tembak_obj_meriam(latlng.lat,latlng.lng,angel_dir,angel_weap);
            }else if(jenis == 2){ //TORPEDO
                var angel_dir = document.getElementById("angel_dir_"+jml).value;
                var angel_weap = document.getElementById("angel_weapon_"+jml).value;
                
                tembak_obj_torpedo(latlng.lat,latlng.lng,angel_dir,angel_weap);
            }
        }
        // Generate popup content based on layer type
        // - Returns HTML string, or null if unknown object
        var getPopupContent = function(layer,type_plot,status,index_plot) {
            // Marker - add lat/long
            if (layer instanceof L.Marker) {
              // TAMBAH ZAME
                var data = "";
                var data = "";
              var isi_data ="";
                if(type_plot == "plot_text"){
                    // alert("plot_text");
                    if(status == "add"){
                        var plot_text = arr_data_text[arr_data_text.length-1];
                    }else if(status == "edit"){
                        var plot_text = arr_data_text[index_plot];
                    }

                    var status = plot_text[0].split("_");
                    if(status[0] == "text"){
                        data = "<div style='width: auto;'><center><p>Info Text</p></center><table style='width : 100%;'>"+
                                    "<thead>"+
                                        "<tr>"+
                                            "<td>Text</td>"+
                                        "</tr>"+
                                    "</thead>"+
                                    "<tbody>"+
                                        "<tr>"+
                                            "<td>"+plot_text[1]+"</td>"+
                                        "</tr>"+
                                    "</tbody>"+
                                "</table></div>";
                    }
                }else if(type_plot == "manuever"){
                    if(status == "add"){
                    var manuever = arr_data_manuever[arr_data_manuever.length-1];

                    }else if(status == "edit"){
                        var manuever = arr_data_manuever[index_plot];
                        
                    }
                    var status = manuever[0].split("_");
                    if(status[0] == "manuever"){
                        data = "<div style='width: auto;'><center><p>Info manuever</p></center><table style='width : 300px;'>"+
                                    "<thead>"+
                                        "<tr>"+
                                            "<th>Symbol</td>"+
                                            "<td>&nbsp;</td>"+
                                            "<td>Nama Manuever</td>"+
                                        "</tr>"+
                                    "</thead>"+
                                    "<tbody>"+
                                        "<tr>"+
                                            "<td style='font-family: "+manuever[2].nama+"; font-size: 30px' >"+String.fromCharCode(Number(manuever[2].index))+"</td>"+
                                            "<td>&nbsp;</td>"+
                                            "<td>"+manuever[1]+"</td>"+
                                        "</tr>"+
                                        "<tr>"+
                                            "<td>Keterangan</td>"+
                                            "<td>:</td>"+
                                            "<td colspan = '1'>"+manuever[2].keterangan+"</td>"+
                                        "</tr>"+
                                    "</tbody>"+
                                "</table></div>";
                    }
                }else if(type_plot == "radar"){
                    if(status == "add"){
                    var radar = arr_data_radar[arr_data_radar.length-1];

                    }else if(status == "edit"){
                    var radar = arr_data_radar[index_plot];
                        
                    }
                    var status = radar[0].split("_");
                    if(status[0] == "radar"){
                        data = "<div style='width: auto;'><center><p>Info Radar</p></center><table style='width : 300px;'>"+
                                    "<thead>"+
                                        "<tr>"+
                                            "<th>Symbol</td>"+
                                            "<td>&nbsp;</td>"+
                                            "<td>Nama Radar</td>"+
                                            "<td>Radius</td>"+
                                        "</tr>"+
                                    "</thead>"+
                                    "<tbody>"+
                                        "<tr>"+
                                            "<td style='font-family: "+radar[2].nama+"; font-size: 30px' >"+String.fromCharCode(Number(radar[2].index))+"</td>"+
                                            "<td>&nbsp;</td>"+
                                            "<td>"+radar[1]+"</td>"+
                                            "<td>"+radar[3]+"</td>"+
                                        "</tr>"+
                                        "<tr>"+
                                            "<td>Keterangan</td>"+
                                            "<td>:</td>"+
                                            "<td colspan = '2'>"+radar[2].keterangan+"</td>"+
                                        "</tr>"+
                                    "</tbody>"+
                                "</table></div>";
                    }
                }else if(type_plot == "satuan"){
                    arrlayer_satuan.push(layer);
                    if(status == "add"){
                        var satuan = data_satuan[data_satuan.length-1];

                    }else if(status == "edit"){
                        // console.log(index_plot);
                        var satuan = data_satuan[index_plot[0]];
                        
                    }
                    var status = satuan[0].split("_");
                    if(status[0] == "satuan"){
                    var kecepatan = satuan[3].split("|");
                    data = "<div style='width: auto;'><center><p>Info Satuan</p></center><table style='width : 100%;'>"+
                                    "<thead>"+
                                        "<tr>"+
                                            "<th>Symbol</td>"+
                                            "<td>Nama satuan</td>"+
                                            "<td>No. Satuan</td>"+
                                            "<td>No. Atasan</td>"+
                                            "<td>Kecepatan</td>"+
                                        "</tr>"+
                                    "</thead>"+
                                    "<tbody>"+
                                        "<tr>"+
                                            "<td style='font-family: "+satuan[1].nama+"; font-size: 30px' >"+String.fromCharCode(Number(satuan[1].index))+"</td>"+
                                            "<td>"+satuan[5]+"</td>"+
                                            "<td>"+satuan[4]+"</td>"+
                                            "<td>"+satuan[6]+"</td>"+
                                            "<td>"+kecepatan[0]+" "+kecepatan[1]+"</td>"+
                                        "</tr>"+
                                        "<tr>"+
                                            "<td>Keterangan</td>"+
                                            "<td colspan = '4'>: "+satuan[1].keterangan+"</td>"+
                                        "</tr>"+
                                    "</tbody>"+
                                "</table></div>"+
                                "</div>";
                    }
                    var ran = Math.floor((Math.random() * 100) + 1);
                    var rn = Math.floor((Math.random() * 1000) + 1);
                    var r = Math.floor((Math.random() * 1000) + 1);
                    docId("nama_satuan_new").value = 'SAT'+ran;
                    docId("nosat_new").value = 'NS'+rn;
                    docId("noat_new").value = 'AT'+r;

                }else if(type_plot == "situasi"){
                    if(status == "add"){
                    var situasi = arr_data_situasi[arr_data_situasi.length-1];

                    }else if(status == "edit"){
                    var situasi = arr_data_situasi[index_plot];
                        
                    }
                    var tanggal = situasi[1].substring(0, 2);
                    var bulan = situasi[1].substring(2, 4);
                    var tahun = situasi[1].substring(4, 8);
                    var jadisatu = tanggal+"-"+bulan+"-"+tahun;
                    var jam = situasi[2].substring(0, 2);
                    var menit = situasi[2].substring(2, 4);
                    data = "<div style='width: auto;'><center><p>Info Situasi</p></center><table style='width : 300px;table-layout: fixed;'>"+
                                    "<tbody>"+
                                        "<tr>"+
                                            "<td width='25%'>TW</td>"+
                                            "<td width='5%'>:</td>"+
                                            "<td width='60%'>"+situasi[1]+" "+situasi[2]+"</td>"+
                                        "</tr>"+
                                        "<tr>"+
                                            "<td>Keterangan</td>"+
                                            "<td>:</td>"+
                                            "<td style='word-wrap: break-word;'>"+situasi[0]+"</td>"+
                                        "</tr>"+
                                    "</tbody>"+
                                "</table></div>";

                }else if(type_plot == "obstacle"){
                    if(status == "add"){
                    var obstacle = arr_data_obstacle[arr_data_obstacle.length-1];

                    }else if(status == "edit"){
                    var obstacle = arr_data_obstacle[index_plot];
                        
                    }
                    data = "<div style='width: auto;'><center><p>Obstacle</p><p style='font-family: TandaTanda;color: "+obstacle[2]+"; font-size: 40px; width : 100px;'>"+obstacle[1]+"</p></center>"+                                    
                                "</div>";
                }else if(type_plot == "bungus"){
                    if(status == "add"){
                    var bungus = arr_data_bungus[arr_data_bungus.length-1];

                    }else if(status == "edit"){
                    var bungus = arr_data_bungus[index_plot];
                        
                    }
                    data = "<div style='width: auto;'><center><p>Info Bantuan Tembakan</p></center><table style='width : 320px;'>"+
                                    "<tbody>"+
                                        "<tr>"+
                                            "<td>Waktu kemunculan</td>"+
                                            "<td>:</td>"+
                                            "<td>"+bungus[0]+" "+bungus[1]+"</td>"+
                                        "</tr>"+
                                    "</tbody>"+
                                "</table></div>";

                }else if(type_plot == "kekuatan"){
                    if(status == "add"){
                    var kekuatan = arr_data_kekuatan[arr_data_kekuatan.length-1];

                    }else if(status == "edit"){
                    var kekuatan = arr_data_kekuatan[index_plot];
                        
                    }
                    var info_kekuatan = "";
                    for(var a = 0;a<kekuatan[2].length; a++){
                        var tmp_kekuatan = "<tr>"+
                                                "<td style='color: "+kekuatan[6]+";font-family: "+kekuatan[2][a].font.nama+"; font-size: 30px' >"+String.fromCharCode(Number(kekuatan[2][a].font.index))+"</td>"+
                                                "<td>"+kekuatan[2][a].jumlah+"</td>"+
                                            "</tr>";
                        info_kekuatan = info_kekuatan+tmp_kekuatan;
                    }
                    data = "<div style='width: auto;'><center><p>Info kekuatan</p></center>"+
                                "<div style='width : 400px;'>"+
                                "<label>Nama Kekuatan : "+kekuatan[1]+"</label>"+
                                "<label>Tanggal mulai : "+kekuatan[3]+"</label>"+
                                "<label>Kecepatan : "+kekuatan[4]+"</label>"+
                                "<div style='max-height: 200px;overflow: auto;'>"+
                                "<table style='width : 100%;text-align: center;'>"+
                                    "<thead>"+
                                        "<tr>"+
                                            "<td>Symbol</td>"+
                                            "<td>Jumlah</td>"+
                                        "</tr>"+
                                    "</thead>"+
                                    "<tbody>"+info_kekuatan+"</tbody>"+
                                "</table></div></div></div>";
                }else if(type_plot == "passen"){
                    if(status == "add"){
                    var passen = arr_data_passen[arr_data_passen.length-1];

                    }else if(status == "edit"){
                    var passen = arr_data_passen[index_plot];
                        
                    }
                    var info_passen = "";

                    for(var a = 0;a<passen[1].length;a++){
                        var b = a+1;
                        var tmp_passen = "<tr>"+
                                            "<td>"+b+"</td>"+
                                            "<td>"+passen[1][a]+"</td>"+
                                        "</tr>";
                        info_passen = info_passen+tmp_passen;
                    }
                    var dat = "";
                    if(passen[2] == "red"){
                        dat = "musuh"
                    }else{
                        dat = "sendiri"
                    }
                    data = "<div style='width: auto;'><center><p>Pasukan Sendiri</p></center>"+
                                "<div style='width : 400px;'>"+
                                "<span style='font-size: 18px; font-weight: bolder;'>Nama Pasukan : "+passen[3]+"</span>"+
                                "<table style='width : 100%;max-height: 300px;overflow: auto;text-align: center;'>"+
                                    "<thead>"+
                                        "<tr>"+
                                            "<td>No</td>"+
                                            "<td>Nama Pasukan "+dat+"</td>"+
                                        "</tr>"+
                                    "</thead>"+
                                    "<tbody>"+info_passen+"</tbody>"+
                                "</table></div></div>";
                }else if(type_plot == "plot_bebas"){
                    if(status == "add"){
                    var infoLogistik = all_logistik[all_logistik.length-1][3];

                    }else if(status == "edit"){
                    var infoLogistik = all_logistik[index_plot][3];
                        
                    }
                    var info_logis = "";
                    for(var a = 0;a<infoLogistik.length;a++){
                    var b = a+1;
                    var tmp_logis = "<tr>"+
                                        "<td>"+b+"</td>"+
                                        "<td>"+infoLogistik[a].judul+"</td>"+
                                        "<td>"+infoLogistik[a].isi+"</td>"+
                                    "</tr>";
                    info_logis = info_logis+tmp_logis;
                    }
                    data = "<div style='width: auto;'><center><p>Info Logistik </p></center>"+
                            "<center>"+all_logistik[all_logistik.length-1][0][1]+"</center>"+
                            "<center>"+all_logistik[all_logistik.length-1][4]+"</center>"+
                            "<table style='width : 300px;table-layout: fixed;'>"+
                                "<thead>"+
                                    "<tr>"+
                                        "<td>No</td>"+
                                        "<td>Judul</td>"+
                                        "<td>Isi</td>"+
                                    "</tr>"+
                                "</thead>"+
                                "<tbody>"+
                                    info_logis
                                "</tbody>"+
                            "</table></div>";
                }else if(type_plot == "formasi"){
                  var tmpx = new Array();
                  var tmpy = new Array();
                  var status_1 = docId("jenis_formasi_new").value.split("_");
                  switch(status_1[2]){
                    case "0": {
                      //alert("aa");
                      break;
                    }
                    case "1": {
                      //alert("bb");

                      //ketupat
                      var icon_formasi_url = "image/formasi/formasi_ketupat.png";
                      tmpx[0] = layer._latlng.lat + (0.005 * Math.cos(0 * Math.PI/180));
                      tmpy[0] = layer._latlng.lng + (0.005 * Math.sin(0 * Math.PI/180));

                      tmpx[1] = layer._latlng.lat + (0.005 * Math.cos(90 * Math.PI/180));
                      tmpy[1] = layer._latlng.lng + (0.005 * Math.sin(90 * Math.PI/180));

                      tmpx[2] = layer._latlng.lat + (0.005 * Math.cos(180 * Math.PI/180));
                      tmpy[2] = layer._latlng.lng + (0.005 * Math.sin(180 * Math.PI/180));

                      tmpx[3] = layer._latlng.lat + (0.005 * Math.cos(270 * Math.PI/180));
                      tmpy[3] = layer._latlng.lng + (0.005 * Math.sin(270 * Math.PI/180));

                      break;
                    }
                    case "2": {
                      //flank kanan
                      var icon_formasi_url = "image/formasi/formasi_flank_kanan.png";
                      tmpx[0] = layer._latlng.lat + (0.005 * Math.cos(-45 * Math.PI/180));
                     tmpy[0] = layer._latlng.lng + (0.005 * Math.sin(-45 * Math.PI/180));

                     tmpx[1] = layer._latlng.lat + (0.010 * Math.cos(-45* Math.PI/180));
                     tmpy[1] = layer._latlng.lng + (0.010 * Math.sin(-45 * Math.PI/180));

                     tmpx[2] = layer._latlng.lat + (0.005 * Math.cos(135 * Math.PI/180));
                     tmpy[2] = layer._latlng.lng + (0.005 * Math.sin(135 * Math.PI/180));

                     tmpx[3] = layer._latlng.lat + (0.010 * Math.cos(135 * Math.PI/180));
                     tmpy[3] = layer._latlng.lng + (0.010 * Math.sin(135 * Math.PI/180));

                      break;
                    }
                    case "3": {
                      //flank kiri
                      var icon_formasi_url = "image/formasi/formasi_flank_kiri.png";
                       tmpx[0] = layer._latlng.lat + (0.005 * Math.cos(45 * Math.PI/180));
                       tmpy[0] = layer._latlng.lng + (0.005 * Math.sin(45 * Math.PI/180));

                       tmpx[1] = layer._latlng.lat + (0.010 * Math.cos(45* Math.PI/180));
                       tmpy[1] = layer._latlng.lng + (0.010 * Math.sin(45 * Math.PI/180));

                       tmpx[2] = layer._latlng.lat + (0.005 * Math.cos(225 * Math.PI/180));
                       tmpy[2] = layer._latlng.lng + (0.005 * Math.sin(225 * Math.PI/180));

                       tmpx[3] = layer._latlng.lat + (0.010 * Math.cos(225 * Math.PI/180));
                       tmpy[3] = layer._latlng.lng + (0.010 * Math.sin(225 * Math.PI/180));

                      break;
                    }
                    case "5": {
                      //paralel
                      var icon_formasi_url = "image/formasi/formasi_serial.png";

                       tmpx[0] = layer._latlng.lat + (0.005 * Math.cos(0 * Math.PI/180));
                       tmpy[0] = layer._latlng.lng + (0.005 * Math.sin(0 * Math.PI/180));

                       tmpx[1] = layer._latlng.lat + (0.010 * Math.cos(0* Math.PI/180));
                       tmpy[1] = layer._latlng.lng + (0.010 * Math.sin(0 * Math.PI/180));

                       tmpx[2] = layer._latlng.lat + (0.005 * Math.cos(180 * Math.PI/180));
                       tmpy[2] = layer._latlng.lng + (0.005 * Math.sin(180 * Math.PI/180));

                       tmpx[3] = layer._latlng.lat + (0.010 * Math.cos(180 * Math.PI/180));
                       tmpy[3] = layer._latlng.lng + (0.010 * Math.sin(180 * Math.PI/180));

                      break;
                    }
                    case "4": {
                      //sejajar
                      var icon_formasi_url = "image/formasi/formasi_sejajar.png";

                       tmpx[0] = layer._latlng.lat + (0.005 * Math.cos(90 * Math.PI/180));
                       tmpy[0] = layer._latlng.lng + (0.005 * Math.sin(90 * Math.PI/180));

                       tmpx[1] = layer._latlng.lat + (0.010 * Math.cos(90* Math.PI/180));
                       tmpy[1] = layer._latlng.lng + (0.010 * Math.sin(90 * Math.PI/180));

                       tmpx[2] = layer._latlng.lat + (0.005 * Math.cos(270 * Math.PI/180));
                       tmpy[2] = layer._latlng.lng + (0.005 * Math.sin(270 * Math.PI/180));

                       tmpx[3] = layer._latlng.lat + (0.010 * Math.cos(270 * Math.PI/180));
                       tmpy[3] = layer._latlng.lng + (0.010 * Math.sin(270 * Math.PI/180));

                      break;
                    }

                    case "6": {
                      //Panah
                      var icon_formasi_url = "image/formasi/formasi_panah.png";

                       tmpx[0] = layer._latlng.lat + (0.005 * Math.cos(0 * Math.PI/180));
                       tmpy[0] = layer._latlng.lng + (0.005 * Math.sin(0 * Math.PI/180));

                       tmpx[1] = layer._latlng.lat + (0.005 * Math.cos(90 * Math.PI/180));
                       tmpy[1] = layer._latlng.lng + (0.005 * Math.sin(90 * Math.PI/180));

                       tmpx[2] = layer._latlng.lat + (0.005 * Math.cos(180 * Math.PI/180));
                       tmpy[2] = layer._latlng.lng + (0.005 * Math.sin(180 * Math.PI/180));

                       tmpx[3] = layer._latlng.lat + (0.005 * Math.cos(270 * Math.PI/180));
                       tmpy[3] = layer._latlng.lng + (0.005 * Math.sin(270 * Math.PI/180));

                       tmpx[4] = layer._latlng.lat + (0.010 * Math.cos(270 * Math.PI/180));
                       tmpy[4] = layer._latlng.lng + (0.010 * Math.sin(270 * Math.PI/180));

                      break;
                    }

                    case "7": {
                      //Panah
                      var icon_formasi_url = "image/formasi/formasi_panah.png";
                      tmpx[0] = layer._latlng.lat + (0.005 * Math.cos(0 * Math.PI/180));
                      tmpy[0] = layer._latlng.lng + (0.005 * Math.sin(0 * Math.PI/180));

                      tmpx[1] = layer._latlng.lat + (0.005 * Math.cos(90 * Math.PI/180));
                      tmpy[1] = layer._latlng.lng + (0.005 * Math.sin(90 * Math.PI/180));

                      tmpx[2] = layer._latlng.lat + (0.005 * Math.cos(180 * Math.PI/180));
                      tmpy[2] = layer._latlng.lng + (0.005 * Math.sin(180 * Math.PI/180));

                      tmpx[3] = layer._latlng.lat + (0.005 * Math.cos(270 * Math.PI/180));
                      tmpy[3] = layer._latlng.lng + (0.005 * Math.sin(270 * Math.PI/180));

                      tmpx[4] = tmpx[3] + (0.005 * Math.cos(0 * Math.PI/180));
                      tmpy[4] = tmpy[3] + (0.005 * Math.sin(0 * Math.PI/180));

                      tmpx[5] = tmpx[3] + (0.010 * Math.cos(0 * Math.PI/180));
                      tmpy[5] = tmpy[3] + (0.010 * Math.sin(0 * Math.PI/180));

                      tmpx[6] = tmpx[3] + (0.005 * Math.cos(180 * Math.PI/180));
                      tmpy[6] = tmpy[3] + (0.005 * Math.sin(180 * Math.PI/180));

                      tmpx[7] = tmpx[3] + (0.010 * Math.cos(180 * Math.PI/180));
                      tmpy[7] = tmpy[3] + (0.010 * Math.sin(180 * Math.PI/180));

                      break;
                    }
                    case "8": {

                      for(var a = 0; a < data_buat_formasi.length; a++){

                          tmpx[a] = layer._latlng.lat + (data_buat_formasi[a].jarak * Math.cos(data_buat_formasi[a].sudut * Math.PI/180));
                          tmpy[a] = layer._latlng.lng + (data_buat_formasi[a].jarak * Math.sin(data_buat_formasi[a].sudut * Math.PI/180));
                      //
                      }

                    }

                    default: {
                        //alert("Terjadi Kesalahan");
                    }
                  }

                  //ADD FORMASI
                  var formasi = "";
                  var arr_tampungformasi = [];

                  if (status_1[2] == "8") {
                      formasi = data_buat_formasi_table;
                  }else {
                    var arr = [];
                    for (var i = 0; i < arr_formasi_cek.length; i++) {
                        arr.push(data_font[arr_formasi_cek[i].id]);
                    }
                      formasi = arr;
                  }
                  var tmp_isi_data = "";
                  var icon_color = "#00a3e3";

                  if(warna_pilih == "red"){
                         icon_color = "red";
                   }else {
                     icon_color = "blue";
                   }

                  for (var i = 0; i < formasi.length; i++) {

                    var res = String.fromCharCode(Number(formasi[i].index));
                    // console.log(data_buat_formasi[i]);
                    var icon_satuan = "<div style='margin-top:-15px; width: 30px; color: "+icon_color+"; font-size: 30px; font-family: "+formasi[i].nama+"'>"+res+"</div>";
                    var myIcon = L.divIcon({className: 'my-div-icon', html:icon_satuan, iconSize: null, id_point: "symbolformasi_"+i});
                    if(status_1[2] == "8"){
                        var tampung_info_formasi = {jarak: data_buat_formasi[i].jarak, id: formasi[i].id,sudut: data_buat_formasi[i].sudut ,symbol: myIcon, index_symbol: formasi[i].index, family_symbol: formasi[i].nama, keterangan_symbol: formasi[i].keterangan,lat: tmpy[i], lng: tmpx[i]};
                    }else{
                        var tampung_info_formasi = {symbol: myIcon, index_symbol: formasi[i].index, id: formasi[i].id, family_symbol: formasi[i].nama, keterangan_symbol: formasi[i].keterangan,lat: tmpy[i], lng: tmpx[i]};
                    }
                    arr_tampungformasi.push(tampung_info_formasi);
                    if(map.getZoom() >= 10){
                                
                        marker = new L.Marker([tmpx[i],tmpy[i]], {icon : myIcon});
                        formasilayer.addLayer(marker);
                    }else{
                    }
                    tmp_isi_data = "<tr>"+
                                      "<td  width='20%' id='ad"+formasi[i].id+"' style='color: "+icon_color+";font-size: 30px; font-family: "+formasi[i].nama+";'>"+res+"</<td>"+
                                      "<td colspan = '2'>"+formasi[i].keterangan+"</td>"+
                                  "</tr>";

                    isi_data = isi_data + tmp_isi_data;

                  }

                  if(status == "add"){
                      tmp_data_formasi.push(arr_tampungformasi);
                      tmp_data_formasi.push(status_1[2]);
                      tmp_data_formasi.push(warna_pilih);

                      arr_data_formasi.push(tmp_data_formasi);
                      tmp_data_formasi = [];
                  }
                  // console.log(arr_data_formasi);
                  data = "<div style='width: auto;'><center><p>Info Formasi</p></center><table style='width : 300px;'>"+
                                  "<tbody>"+
                                      "<tr>"+
                                          "<td> Simbol </td>"+
                                          "<td> Keterangan </td>"+
                                      "</tr>"+isi_data+
                                  "</tbody>"+
                              "</table></div>";

                docId("icon_tambah_formasi_new").style.display = "none";
                docId("bodyTable_formasi").innerHTML = "";
                docId("bodyTable_formasi8").innerHTML = "";
                docId("myTable_new").style.display = "none";
                docId("formasi8_new").style.display = "none";
                docId("image_formasi_new").style.display = "none";
                docId("jenis_formasi_new").value = "0";

                cleara_new();
                create_image_new();
                }
                return data;
            // Circle - lat/long, radius
            } else if (layer instanceof L.Circle || layer instanceof L.CircleMarker) {
                var center = layer.getLatLng(),
                    radius = layer.getRadius();
                    layer._leaflet_id = "circle_"+jml_objc_circle+"_"+dokument_data[0][0];
                    jml_objc_circle++;
                return "Center: "+strLatLng(center)+"<br />"
                      +"Radius: "+_round(radius, 2)+" m";
            // Rectangle/Polygon - area
            } else if (layer instanceof L.Polygon) {
                var latlngs = layer._defaultShape ? layer._defaultShape() : layer.getLatLngs(),
                    area = L.GeometryUtil.geodesicArea(latlngs);

                layer._leaflet_id = "polygon_"+jml_objc_polygon+"_"+dokument_data[0][0];
                jml_objc_polygon++;
                return "Area: "+L.GeometryUtil.readableArea(area, true);
            // Polyline - distance
            } else if (layer instanceof L.Polyline) {
                var latlngs = layer._defaultShape ? layer._defaultShape() : layer.getLatLngs(),
                    distance = 0;
                    isiawal = layer._latlngs;
                    if(status_jalur){
                        var pisah = docId("index_satuan_jalur").value.split("|");
                        var id = Number(pisah[0]);
                        layer._latlngs[0].lat = Number(pisah[1]);
                        layer._latlngs[0].lng = Number(pisah[2]);
                        layer._leaflet_id = data_satuan[id][0];
                    }else{
                        layer._leaflet_id = "polyline_"+jml_objc_polyline+"_"+dokument_data[0][0];
                        jml_objc_polyline++;
                    }
                    // console.log(layer._leaflet_id);
                    isi_index_jalur = "kosong"
                    status_jalur = false;
                if (latlngs.length < 2) {
                    return "Distance: N/A";
                } else {
                    for (var i = 0; i < latlngs.length-1; i++) {
                        distance += latlngs[i].distanceTo(latlngs[i+1]);
                    }
                    // testing();
                    return "Distance: "+_round(distance, 2)+" m";
                }
            }
            return null;
        };

    // map.on('click', onClick);
    // function onClick(e) {
    //     // console.log(e);
    //     console.log(drawnItems.getLayers()[0]);
    // }
    var printer = L.easyPrint({
            tileLayer: layer_control,
            sizeModes: ['Current'],
            filename: 'myMap',
            exportOnly: false,
            hideControlContainer: true
        }).addTo(map);

    drawnItems.on("click", function (event) {
        var clickedMarker = event.layer;
        var index_layer = 0;
        var a = 0;
        drawnItems.eachLayer(function(data){
            if(clickedMarker._leaflet_id == data._leaflet_id){
                index_layer = a;
            }else{
                a++;
            }
        })
        // property_obejct();
        // do some stuff…
    });
    map.on('draw:deleted', function (evt) {

        daftar_list_objc();
        tableHighlightRow();
        // Time list
        first_timelist();
    });
    map.on(L.Draw.Event.CREATED, function (event) {
        var layer = event.layer;
        var type = event.layerType;
        status_draw_poly = true;
        // console.log(type);
        // MEMBUAT PANAH POLYLINE
        // if(type=="polyline"){
        //     var layer1 = L.polylineDecorator(layer, {
        //         patterns: [
        //             {offset: '100%', repeat: 0, symbol: L.Symbol.arrowHead({pixelSize: 15, polygon: false, pathOptions: {stroke: true}})}
        //         ]
        //     }).addTo(map);
        //     drawnItems.addLayer(layer1);
        //     layer = L.polylineDecorator(layer, {
        //         patterns: [
        //             // defines a pattern of 10px-wide dashes, repeated every 20px on the line
        //             {offset: 0, repeat: 20, symbol: L.Symbol.dash({pixelSize: 10})}
        //         ]
        //     })
        // }
        // console.log(layer);
        var content = getPopupContent(layer,type_plotting,"add",0);
        if (content !== null) {
            layer.bindPopup(content);
        }
				if(type_plotting=="radar"){
                    var color =  arr_data_radar[arr_data_radar.length-1][4];
                    var circle = L.circle([layer._latlng.lat, layer._latlng.lng], {
                        color: color,
                        fillColor: color,
                        fillOpacity: 0.3,
                        radius: arr_data_radar[arr_data_radar.length-1][3]
                    });
                    createRadar(layer._latlng,arr_data_radar[arr_data_radar.length-1][3],color,circle,"add",0);
                    drawnItems.addLayer(circle);
                    type_plotting = "";
                }
        daftar_arr_layer.push(layer);
        drawnItems.addLayer(layer);
        // drawnItems.on("click",onclick);
        // console.log(drawnItems._layers);

        daftar_list_objc();
        tableHighlightRow();

        // Time list
        first_timelist();

        // console.log(drawnItems);
    });
    map.on(L.Draw.Event.EDITED, function(event){
        var layers = event.layers;
        console.log(event);
        layers.eachLayer(function (layer) {
            content = getPopupContent(layer);
            if (content !== null) {
                layer.setPopupContent(content);
            }
        });
    });

    var test = new L.control.betterscale({
        position: 'bottomleft'
    }).addTo(map);

    map.on('mousemove', function(evt){
        var hasil = convertDMS(evt.latlng.lat,evt.latlng.lng);
        var pisah = hasil.split("-");
        document.getElementById("lat_dms").innerHTML = pisah[0];
        document.getElementById("lang_dms").innerHTML = pisah[1];

        document.getElementById("lat_latlang").innerHTML = evt.latlng.lat;
        document.getElementById("lang_latlang").innerHTML = evt.latlng.lng;
    });
    map.on('zoomend', function(evt){
        if(map.getZoom() >= 10){
            formasilayer.eachLayer(function (layer) {
                formasilayer.removeLayer(layer);
            });
            for(var a = 0; a<arr_data_formasi.length; a++){
                for(var b = 0;b<arr_data_formasi[a][4].length;b++){
                    var data_symb = arr_data_formasi[a][4][b];
                    var myIcon = L.divIcon({className: 'my-div-icon', html:data_symb.symbol.options.html, iconSize: null, id_point: data_symb.symbol.options.id_point});
                    marker = new L.Marker([Number(data_symb.lng),Number(data_symb.lat)], {icon : myIcon});
                    formasilayer.addLayer(marker);
                    
                }
            }
        }else{
            formasilayer.eachLayer(function (layer) {
                formasilayer.removeLayer(layer);
            });
        }
        // console.log(evt);
    });

    map.on('click',function(e){
            if(type_plotting=="arrow"){
                ar_kor.push(e.latlng.lng);
                ar_kor.push(e.latlng.lat);

                var _x = Number(ar_kor[0]);
                var _y = Number(ar_kor[1]);
                if(Ap=="kosong"){
                    Ap = [];
                    Ap.push({x : _x, y : _y});
                }else{
                    var warna = docId("color_polygon").value;
                    var fillcolor = docId("fillcolor_polygon").value;
                    var weight = docId("weight_polygon").value;
                    var opacity = Number(docId("opacity_polygon").value);
                    
                    Ap.push({x : e.latlng.lng,y: e.latlng.lat});
                    var p1 = Ap[0];
                    var p2 = Ap[1];
                    var size;
                    var ez = map.getZoom();
                    if(ez == 1){
                       size = 1.7;
                    }
                    else if (ez == 2){
                      size = 1.4;
                    }
                    else if (ez == 3){
                      size = 1.1;
                    }
                    else if (ez == 4){
                      size = 0.8;
                    }
                    else if (ez == 5){
                      size = 0.5;
                    }
                    else if (ez == 6){
                      size = 0.2;
                    }
                    else if (ez == 7){
                      size = 0.09;
                    }
                    else if (ez == 8){
                      size = 0.06;
                    }
                    else if (ez == 9){
                      size = 0.03;
                    }
                    else if (ez == 10){
                      size = 0.009;
                    }
                    else if (ez == 11){
                      size = 0.006;
                    }
                    else if (ez == 12){
                      size = 0.006;
                    }
                    else if (ez == 13){
                      size = 0.003;
                    }
                    else if (ez == 14){
                      size = 0.0009;
                    }
                    else if (ez == 15){
                      size = 0.0006;
                    }
                    else if (ez == 16){
                      size = 0.0003;
                    }
                    else if (ez == 17){
                      size = 0.00009;
                    }
                    else if (ez == 18){
                      size = 0.00006;
                    }
                    else if (ez == 19){
                      size = 0.00003;
                    }
                    else if (ez == 20){
                      size = 0.000009;
                    }
                    else if (ez == 21){
                      size = 0.000006;
                    }
                    else if (ez == 22){
                      size = 0.000003;
                    }
                    else if (ez == 23){
                      size = 0.0000009;
                    }
                    else if(ez == 24){
                      size = 0.0000006;
                    }
                    else{}
                    var arrayOfCoordinates = createSAP(p1,p2,size);
                    var currentPolygon = new L.polygon([arrayOfCoordinates],{
                        color : warna,
                        id: "Arrow_"+jml_objc_arrow_lurus,
                        fillColor: fillcolor,
                        fillOpacity: opacity/10,
                        weight: weight
                    });
                    
                    currentPolygon._leaflet_id = "arrowlurus_"+jml_objc_arrow_lurus+"_"+dokument_data[0][0];
                    drawnItems.addLayer(currentPolygon);
                    Ap = "kosong";
                    type_plotting = "";
                    jml_objc_arrow_lurus++;
                    ar_kor=[];
                    console.log(drawnItems);
                }
            }else if(type_plotting=="arrow_lengkung"){
                // console.log(Ap);
                ar_kor.push(e.latlng.lng);
                ar_kor.push(e.latlng.lat);

                var _x = Number(ar_kor[0]);
                var _y = Number(ar_kor[1]);
                if(Ap=="kosong"){
                    Ap = [];
                    Ap.push({x : _x, y : _y});
                }else{
                    var warna = docId("color_polygon").value;
                    var fillcolor = docId("fillcolor_polygon").value;
                    var weight = docId("weight_polygon").value;
                    var opacity = Number(docId("opacity_polygon").value);

                    Ap.push({x : e.latlng.lng,y: e.latlng.lat});
                    var p1 = Ap[0];
                    var p2 = Ap[1];
                    var size;
                    var kurang;
                    var ez = map.getZoom();
                    var perhitungan = cek_arrow_lengkung(ez);
                    // console.log(perhitungan);
                    size = perhitungan[0];
                    kurang = perhitungan[1];
                    var arrayOfCoordinates = createCAP(p1,p2,size,kurang);
                    var currentPolygon = new L.polygon([arrayOfCoordinates],{
                        color : warna,
                        id: "ArrowBawah_"+jml_objc_arrow_lengkung_b,
                        fillColor: fillcolor,
                        fillOpacity: opacity/10,
                        weight: weight
                    });
                    currentPolygon._leaflet_id = "ArrowBawah_"+jml_objc_arrow_lengkung_b+"_"+dokument_data[0][0];
                    drawnItems.addLayer(currentPolygon);
                    Ap = "kosong";
                    type_plotting = "";
                    jml_objc_arrow_lengkung_b++;
                    ar_kor=[];
                    console.log(drawnItems);
                }
            }else if(type_plotting == "arrow_lengkung_atas"){
                // console.log(Ap);
                ar_kor.push(e.latlng.lng);
                ar_kor.push(e.latlng.lat);

                var _x = Number(ar_kor[0]);
                var _y = Number(ar_kor[1]);
                if(Ap=="kosong"){
                    Ap = [];
                    Ap.push({x : _x, y : _y});
                }else{
                    var warna = docId("color_polygon").value;
                    var fillcolor = docId("fillcolor_polygon").value;
                    var weight = docId("weight_polygon").value;
                    var opacity = Number(docId("opacity_polygon").value);

                    Ap.push({x : e.latlng.lng,y: e.latlng.lat});
                    var p1 = Ap[0];
                    var p2 = Ap[1];
                    var size;
                    var kurang;
                    var ez = map.getZoom();
                    var perhitungan = cek_arrow_lengkung(ez);
                    // console.log(perhitungan);
                    size = perhitungan[0];
                    kurang = perhitungan[1];
                    var arrayOfCoordinates = createCAPRev(p1,p2,size,kurang);
                    var currentPolygon = new L.polygon([arrayOfCoordinates],{
                        color : warna,
                        id: "ArrowAtas_"+jml_objc_arrow_lengkung_a,
                        fillColor: fillcolor,
                        fillOpacity: opacity/10,
                        weight: weight
                    });
                    currentPolygon._leaflet_id = "ArrowAtas_"+jml_objc_arrow_lengkung_a+"_"+dokument_data[0][0];
                    drawnItems.addLayer(currentPolygon);
                    Ap = "kosong";
                    type_plotting = "";
                    jml_objc_arrow_lengkung_a++;
                    ar_kor=[];
                    console.log(drawnItems);
                }
            }else if(type_plotting == "arrow_manuver_bawah"){
                // console.log(Ap);
                ar_kor.push(e.latlng.lng);
                ar_kor.push(e.latlng.lat);

                var _x = Number(ar_kor[0]);
                var _y = Number(ar_kor[1]);
                if(Ap=="kosong"){
                    Ap = [];
                    Ap.push({x : _x, y : _y});
                }else{
                    var warna = docId("color_polygon").value;
                    var fillcolor = docId("fillcolor_polygon").value;
                    var weight = docId("weight_polygon").value;
                    var opacity = Number(docId("opacity_polygon").value);

                    Ap.push({x : e.latlng.lng,y: e.latlng.lat});
                    var p1 = Ap[0];
                    var p2 = Ap[1];
                    var size;
                    var kurang;
                    var ez = map.getZoom();
                    var perhitungan = cek_arrow_lengkung(ez);
                    // console.log(perhitungan);
                    size = perhitungan[0];
                    kurang = perhitungan[1];
                    var arrayOfCoordinates = createCAPs(p1,p2,size,kurang);
                    var currentPolygon = new L.polygon([arrayOfCoordinates],{
                        color : warna,
                        id: "ArrowBawahMan_"+jml_objc_arrow_manuver_b,
                        fillColor: fillcolor,
                        fillOpacity: opacity/10,
                        weight: weight
                    });
                    currentPolygon._leaflet_id = "ArrowbawahMan_"+jml_objc_arrow_manuver_b+"_"+dokument_data[0][0];
                    drawnItems.addLayer(currentPolygon);
                    Ap = "kosong";
                    type_plotting = "";
                    jml_objc_arrow_manuver_b++;
                    ar_kor=[];
                    // console.log(drawnItems);
                }
            }else if(type_plotting == "arrow_manuver_atas"){
                // console.log(Ap);
                ar_kor.push(e.latlng.lng);
                ar_kor.push(e.latlng.lat);

                var _x = Number(ar_kor[0]);
                var _y = Number(ar_kor[1]);
                if(Ap=="kosong"){
                    Ap = [];
                    Ap.push({x : _x, y : _y});
                }else{
                    var warna = docId("color_polygon").value;
                    var fillcolor = docId("fillcolor_polygon").value;
                    var weight = docId("weight_polygon").value;
                    var opacity = Number(docId("opacity_polygon").value);

                    Ap.push({x : e.latlng.lng,y: e.latlng.lat});
                    var p1 = Ap[0];
                    var p2 = Ap[1];
                    var size;
                    var kurang;
                    var ez = map.getZoom();
                    var perhitungan = cek_arrow_lengkung(ez);
                    // console.log(perhitungan);
                    size = perhitungan[0];
                    kurang = perhitungan[1];
                    var arrayOfCoordinates = createCAPss(p1,p2,size,kurang);
                    var currentPolygon = new L.polygon([arrayOfCoordinates],{
                        color : warna,
                        id: "ArrowAtasMan_"+jml_objc_arrow_manuver_a,
                        fillColor: fillcolor,
                        fillOpacity: opacity/10,
                        weight: weight
                    });
                    currentPolygon._leaflet_id = "ArrowAtasMan_"+jml_objc_arrow_manuver_a+"_"+dokument_data[0][0];
                    drawnItems.addLayer(currentPolygon);
                    Ap = "kosong";
                    type_plotting = "";
                    jml_objc_arrow_manuver_a++;
                    ar_kor=[];
                    console.log(drawnItems);
                }
            }else if (type_plotting == "kota"){

                window.location.href = "#tambah_kota_peta_form";
                var long = e.latlng.lng;
                var lat = e.latlng.lat;
                var lintangbujur = convertDMS(lat,long);
                var arraylintangbujur = lintangbujur.split(" ");
                document.getElementById("longitude_text_peta").value = long;
                document.getElementById("latitude_text_peta").value = lat;
                document.getElementById("degree_lat").value = arraylintangbujur[0];
                document.getElementById("minute_lat").value = arraylintangbujur[1];
                document.getElementById("second_lat").value = arraylintangbujur[2];
                document.getElementById("direction_lat").value = arraylintangbujur[3];
                document.getElementById("degree_long").value = arraylintangbujur[5];
                document.getElementById("minute_long").value = arraylintangbujur[6];
                document.getElementById("second_long").value = arraylintangbujur[7];
                document.getElementById("direction_long").value = arraylintangbujur[8];
                type_plotting = "";
            }
            // console.log(map.getZoom());
        });

function cek_arrow_lengkung(ez){
    var size;
    var kurang;
    if(ez == 1){
       size = 1.7;
    }
    else if (ez == 2){
      size = 1.4;
    }
    else if (ez == 3){
      size = 1.1;
    }
    else if (ez == 4){
      size = 0.8;
    }
    else if (ez == 5){
      size = 0.5;
      kurang = 0.2;
    }
    else if (ez == 6){
      size = 0.2;
      kurang = 0.09;
    }
    else if (ez == 7){
      size = 0.09;
      kurang = 0.02;
    }
    else if (ez == 8){
      size = 0.06;
      kurang = 0.02;
    }
    else if (ez == 9){
      size = 0.03;
      kurang = 0.009;
    }
    else if (ez == 10){
      size = 0.009;
      kurang = 0.005;
    }
    else if (ez == 11){
      size = 0.006;
      kurang = 0.002;
    }
    else if (ez == 12){
      size = 0.006;
      kurang = 0.002;
    
    }
    else if (ez == 13){
      size = 0.003;
      kurang = 0.0009;
    }
    else if (ez == 14){
      size = 0.0009;
      kurang = 0.0002;
    }
    else if (ez == 15){
      size = 0.0006;
      kurang = 0.0002;
    }
    else if (ez == 16){
      size = 0.0003;
      kurang = 0.00009;
    }
    else if (ez == 17){
      size = 0.00009;
      kurang = 0.00002;
    }
    else if (ez == 18){
      size = 0.00006;
      kurang = 0.00002;
    }
    else if (ez == 19){
      size = 0.00003;
      kurang = 0.000002;
    }
    else if (ez == 20){
      size = 0.000009;
      kurang = 0.000002;
    }
    else if (ez == 21){
      size = 0.000006;
      kurang = 0.000002;
    }
    else if (ez == 22){
      size = 0.000003;
      kurang = 0.0000002;
    }
    else if (ez == 23){
      size = 0.0000009;
      kurang = 0.000002;
    }
    else if(ez == 24){
      size = 0.0000006;
      kurang = 0.000002;
    }
    else{}
        var arr = [size,kurang];
    return arr;
};

var measureline = L.ComputeDist.extend({
    options: {
        toolbarIcon: {
            html: '<div class="toolbar_measuerline" title="Distance Measure"><i class="fa fa-arrows-h"></i></div>',
            tooltip: 'Distance Measure'
        }
    }
});

var dischange = L.ChangeDistance.extend({
    options: {
        toolbarIcon: {
            html: '<div class="toolbar_distance" title="Change Unit">m</div>',
            tooltip: 'Unit'
        }
    }
});

var measurearea = L.ComputeArea.extend({
    options: {
        toolbarIcon: {
            html: '<div class="toolbar_measuerarea" title="Area Measure"><i class="fa fa-arrows"></i></div>',
            tooltip: 'Area Measure'
        }
    }
});

var areachange = L.ChangeArea.extend({
    options: {
        toolbarIcon: {
            html: '<div class="toolbar_area" title="Change Unit">m²</div>',
            tooltip: 'Unit'
        }
    }
});

new L.Toolbar.Control({
    position: 'topright',
    actions: [measureline, dischange, measurearea, areachange],
}).addTo(map);

