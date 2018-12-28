/***********************************************
 ** Proses untuk menampilkan daftar asisten 
 ** di semua form
 ** By: Muhamad Farhan Badrussalam
 ***********************************************/
 var featuregroup_loadpeta = [];
 var featuregroup_loadCB = [];
 var array_dokumen_cb = [];
 function asisten_load_peta(){
	var load_peta_html = "<div class='form_menu' style='width:100%;text-align:center; font-size: 20px;'>Load Peta</div>";
	for (var i = 0; i < data_asisten_.length; i++) {
		var tmp = "<div class='form_menu'>"+
		    			"<button id='loadOff_peta_"+i+"' onclick='loadPeta(this)' class='slider off' style='cursor: pointer;text-align: center; display: block;'>"+data_asisten_[i].nama_asisten+"</button>"+
		    			"<button id='loadOn_peta_"+i+"' onclick='loadPeta(this)' class='slide on' style='cursor: pointer;text-align: center; display: none;'>"+data_asisten_[i].nama_asisten+"</button>"+
		    		"</div>";
		load_peta_html = load_peta_html+tmp;
		// var fg_loadpeta = L.featureGroup().addTo(map);
		featuregroup_loadpeta.push(L.featureGroup().addTo(map));
	}
	docId("view_load_peta").innerHTML = load_peta_html;
	// console.log(featuregroup_loadpeta);
 }
/***********************************************
 ** Proses untuk Mengambil data load peta
 ***********************************************/
 function loadPeta(evt){
 	var pisah = evt.id.split("_");
 	if(pisah[0] == "loadOff"){
 		docId('loadOff_peta_'+pisah[2]).style.display = "none";
        docId('loadOn_peta_'+pisah[2]).style.display = "block";
        tampilload_peta(pisah[2]);
 	}else if(pisah[0] == "loadOn"){
 		docId('loadOff_peta_'+pisah[2]).style.display = "block";
        docId('loadOn_peta_'+pisah[2]).style.display = "none";
        removeLoad(evt.id);
 	}
 }
 function loadCB(evt){
 	var pisah = evt.id.split("_");
 	if(pisah[0] == "loadOff"){
 		docId('loadOff_cb_'+pisah[2]).style.display = "none";
        docId('loadOn_cb_'+pisah[2]).style.display = "block";
        var index = 0;
        for(var a = array_dokumen_cb.length-1; 0 <= a; a--){
    		if(array_dokumen_cb[a] == pisah[2]){
    			// array_dokumen_cb.splice(a, 1);
    			index = a;
    		}
    	}
        tampilload_cb(index);
 	}else if(pisah[0] == "loadOn"){
 		docId('loadOff_cb_'+pisah[2]).style.display = "block";
        docId('loadOn_cb_'+pisah[2]).style.display = "none";
        removeLoad(evt.id);
 	}
 }

/***********************************************
 ** Proses untuk memuncul kan hasil plotting ke map
 ***********************************************/
 function tampilload_peta(index){
 	var data_ = data_asisten_[index];
 	var text4 = "status=ambil_user_asop&user="+id_user+"&asisten="+data_.ID;
    var tmp = get_db(text4);
 	if(tmp != false){
 		var text4 = "status=ambil_dokumen_peta&user="+tmp+"&type_menu=menu&id_skenario="+skenario_aktif[0].ID;
 		var get_documen = get_db(text4);
 		if(get_documen != false){
 			var link_load_dokumen = "status=ambil_load_dokumen&id_user="+get_documen[0].id_user+"&nama_dokumen="+get_documen[0].nama_dokumen+"&type="+get_documen[0].type_login+"&skenario="+get_documen[0].scenario;
        	var get_load_dokumen = get_db(link_load_dokumen);
            var tmp = [];

            tmp.push(get_documen[0].scenario);
            tmp.push(get_documen[0].id_user);
            tmp.push(get_documen[0].nama_dokumen);
            tmp.push(get_documen[0].type_login);

            daftar_peta.push(tmp);

        	show_object_load(get_load_dokumen,index,"peta");
 		}
 	}
 }
 function tampilload_cb(index){
 	var pisah = array_dokumen_cb[index].split("|");
    console.log(pisah);
    daftar_cb.push(pisah);
 	var link_load_dokumen = "status=ambil_load_dokumen&id_user="+pisah[1]+"&nama_dokumen="+pisah[2]+"&type=menu_cb&skenario="+pisah[0];
    var get_load_dokumen = get_db(link_load_dokumen);
    // console.log(get_load_dokumen);
    show_object_load(get_load_dokumen,index,"cb");
 }
 /***********************************************
 ** Proses untuk remove layer
 ***********************************************/
function removeLoad(index){
	var pisah_id = index.split('_');
	if(pisah_id[1] == "peta"){
		featuregroup_loadpeta[pisah_id[2]].eachLayer(function (layer) {
            featuregroup_loadpeta[pisah_id[2]].removeLayer(layer);
        });
			// console.log(pisah_id[2]);
        daftar_peta.splice(pisah_id[2], 1);
		featuregroup_loadpeta[pisah_id[2]] = L.featureGroup().addTo(map);
	}else{
		var index = 0;
        for(var a = array_dokumen_cb.length-1; 0 <= a; a--){
    		if(array_dokumen_cb[a] == pisah_id[2]){
    			// array_dokumen_cb.splice(a, 1);
    			index = a;
    		}
    	}
        daftar_cb.splice(index, 1);
		featuregroup_loadCB[index].eachLayer(function (layer) {
            featuregroup_loadCB[index].removeLayer(layer);
        });
		featuregroup_loadCB[index] = L.featureGroup().addTo(map);
	}
}

/***********************************************
 ** Proses untuk Memisahkan data untuk di masukan ke map
 ***********************************************/
function show_object_load(data,index,menu){
	// ARRAY 0 SATUAN
    if(data[0]){
        var data_satuan_load = data[0];
        for(var a = 0;a<data_satuan_load.length;a++){
            var tmp = [];
            var data_ = data_satuan_load[a];
            var info_ = JSON.parse(data_.info);
            var namasatuan = data_.nama.split("_");

            // tmp.push(data_.nama);
            // tmp.push(JSON.parse(data_.style));
            // tmp.push(info_.tgl_mulai);
            // tmp.push(info_.kecepatan);
            // tmp.push(info_.nomer_satuan);
            // tmp.push(info_.nama_satuan);
            // tmp.push(info_.nomer_atasan);
            // tmp.push(data_.id_symbol);
            // tmp.push(info_.tgl_selesai);
            // tmp.push(info_.warna);

            // data_satuan.push(tmp);

            icon_load_peta(data_,"satuan",index,menu);
        }
    }
    // ARRAY 1 KEKUATAN
    if(data[1]){
        var data_kekuatan_load = data[1];
        for(var a = 0;a<data_kekuatan_load.length;a++){
            var data_ = data_kekuatan_load[a];
            var rincian = JSON.parse(data_.rincian);
            var namakekuatan = data_.nama.split("_");
            var tmp = [];

            // tmp.push(data_.nama);
            // tmp.push(rincian.nama_kekuatan);
            // tmp.push(JSON.parse(data_.info_kekuatan));
            // tmp.push(rincian.tgl_mulai);
            // tmp.push(rincian.kecepatan);
            // tmp.push(Number(data_.size));

            // arr_data_kekuatan.push(tmp);

            icon_default_load_peta(data_,"kekuatan",index,menu);

        }
    }
    // ARRAY 2 SITUASI
    if(data[2]){
        var data_situasi_load = data[2];
        for(var a = 0;a<data_situasi_load.length;a++){
            var data_ = data_situasi_load[a];
            var tmp = [];
            var info_ = JSON.parse(data_.info_situasi);
            var namasituasi = data_.nama.split("_");

            // tmp.push(info_.isi_situasi);
            // tmp.push(info_.tgl_situasi);
            // tmp.push(info_.waktu_situasi);
            // tmp.push(data_.nama);

            // arr_data_situasi.push(tmp);
            icon_default_load_peta(data_,"situasi",index,menu);
        }
    }

    // ARRAY 3 OBSTACLE
    if(data[3]){
        var data_obstacle_load = data[3];
        for(var a = 0;a<data_obstacle_load.length;a++){
            var data_ = data_obstacle_load[a];
            var info_ = JSON.parse(data_.info_obstacle);
            var namaobstacle = data_.nama.split("_");

            // arr_data_obstacle.push(info_);
            icon_load_peta(data_,"obstacle",index,menu);
        }
    }

    // ARRAY 4 MANUVER
    if(data[4]){
        var data_manuver_load = data[4];
        for(var a = 0;a<data_manuver_load.length;a++){
            var tmp = [];
            var data_ = data_manuver_load[a];
            var info_ = JSON.parse(data_.info_manuver);
            var namamanuver = data_.nama.split("_");

            // tmp.push(data_.nama);
            // tmp.push(data_.nama_manuver);
            // tmp.push(info_);
            // tmp.push(data_.warna);

            // arr_data_manuever.push(tmp);
            icon_load_peta(data_,"manuever",index,menu);
            // console.log(arr_data_manuever);
            // console.log(data_);
        }

    }
    // ARRAY 5 BUNGUS
    if(data[5]){
        var data_bungus_load = data[5];
        for(var a = 0;a<data_bungus_load.length;a++){
            var tmp = [];
            var data_ = data_bungus_load[a];
            var info_ = JSON.parse(data_.info_bungus);
            var namabungus = data_.nama.split("_");

            // arr_data_bungus.push(info_);

            icon_default_load_peta(data_,"bungus",index,menu);

        }
    }
    // ARRAY 6 PASSEN
    if(data[6]){
        var data_passen = data[6]
        for(var a = 0;a<data_passen.length;a++){
            var tmp = [];
            var data_ = data_passen[a];
            var info_ = JSON.parse(data_.info_passen);
            var symbol = JSON.parse(data_.symbol);
            var namapassen = data_.nama.split("_");

            // tmp.push(data_.nama);
            // tmp.push(info_);
            // tmp.push(data_.warna);
            // arr_data_passen.push(tmp);

            icon_default_load_peta(data_,"passen",index,menu);
        }

    }

    // ARRAY 7 RADAR
    if(data[7]){
        var data_radar_load = data[7];
        for(var a = 0;a<data_radar_load.length; a++){
            var tmp = [];
            var data_ = data_radar_load[a];
            var info_ = JSON.parse(data_.info_radar);
            var infosymbol = JSON.parse(data_.info_symbol);
            var namaradar = data_.nama.split("_");

            // tmp.push(data_.nama);
            // tmp.push(info_.nama_radar);
            // tmp.push(infosymbol);
            // tmp.push(infosymbol.radius);
            // tmp.push(infosymbol.warna);
            // tmp.push(infosymbol.size);

            // arr_data_radar.push(tmp);

            icon_load_peta(data_,"radar",index,menu);

        }
    }
    // ARRAY 8 LOGISTIK
    if(data[8]){
        var data_logis_load = data[8];
        for(var a = 0;a<data_logis_load.length; a++){
            var tmp = [];
            var data_ = data_logis_load[a];
            var infologis = JSON.parse(data_.info_logistik);
            var isilogis = JSON.parse(data_.isi_logistik);
            var namalogis = data_.nama.split("_");

            // tmp.push(infologis);
            // tmp.push(Number(data_.lng_x));
            // tmp.push(Number(data_.lat_y));
            // tmp.push(isilogis);
            // tmp.push(data_.jenis);
            // tmp.push(data_.warna);
            // tmp.push(data_.nama);

            // all_logistik.push(tmp);

            if(namalogis[2] == "bandara"){
                icon_load_peta(data_,"logistik",index,menu);
            }else if(namalogis[2] == "pelabuhan"){
                icon_load_peta(data_,"logistik",index,menu);
            }else if(namalogis[2] == "bebas"){
                icon_default_load_peta(data_, "logistik",index,menu);
            }
        }
    }
    // ARRAY 9 FORMASI
    if(data[9]){
        var data_formasi_load = data[9];
        // console.log(data_formasi_load);
        for(var a = 0;a<data_formasi_load.length;a++){
            var tmp = [];
            var data_ = data_formasi_load[a];
            var infoformasi = JSON.parse(data_.info_formasi);

            // tmp.push(data_.nama);
            // tmp.push(data_.tgl_formasi);
            // tmp.push(data_.kecepatan);
            // tmp.push(data_.size);
            // tmp.push(infoformasi);
            // tmp.push(data_.jenis_formasi);

            // arr_data_formasi.push(tmp);

            icon_default_load_peta(data_,"formasi",index,menu);
        }
    }
    // ARRAY 10 TOOLS
    if(data[10]){
        var data_tool_data = data[10];
        for(var a = 0; a< data_tool_data.length; a++){
          if(data_tool_data[a].type == "LineString"){
            var geometry = JSON.parse(data_tool_data[a].geometry); 
            var properties = JSON.parse(data_tool_data[a].properties);
            // var namaline = data_tool_data[a].nama.split("_");
            var prop;
            if(properties.properties){
              // console.log(properties.properties.properties.properties);
              prop = properties.properties.properties.properties;
            }else{
              // console.log(properties);
              prop = properties;
            }
            var namatool = data_tool_data[a].nama.split("_");
            var cord_path = [];
            for(var b = 0 ; b< geometry.coordinates.length; b++){

              var path = [geometry.coordinates[b][1],geometry.coordinates[b][0]];

              cord_path.push(path);
            }
            var pathLine = L.polyline(cord_path, {
                color: prop.color,
                weight: prop.weight,
                opacity: prop.opacity
            });
            // tmpGraph = pathLine;
            pathLine._leaflet_id = data_tool_data[a].nama;

            if(menu == "peta"){
            	featuregroup_loadpeta[index].addLayer(pathLine);
            }else{
            	featuregroup_loadCB[index].addLayer(pathLine);
            }

          }else if(data_tool_data[a].type == "Polygon"){
            var geometry = JSON.parse(data_tool_data[a].geometry);
            var properties = JSON.parse(data_tool_data[a].properties);
            var namatool = data_tool_data[a].nama.split("_");
            
            var cord_path = [];
            for(var b = 0 ; b< geometry.coordinates[0].length; b++){

              var path = [geometry.coordinates[0][b][1],geometry.coordinates[0][b][0]];

              cord_path.push(path);
            }
            var polygon = L.polygon(cord_path,{
              weight : properties.weight,
              color : properties.color,
              fillColor : properties.fillColor,
              fillOpacity : properties.fillOpacity
            });
            polygon._leaflet_id = data_tool_data[a].nama;

            if(menu=="peta"){
            	featuregroup_loadpeta[index].addLayer(polygon);
            }else{
            	featuregroup_loadCB[index].addLayer(polygon);
            }

          }else if(data_tool_data[a].type == "circle"){
            var geometry = JSON.parse(data_tool_data[a].geometry);
            var properties = JSON.parse(data_tool_data[a].properties);
            var namatool = data_tool_data[a].nama.split("_");
            var circle = L.circle([geometry.coordinates[1], geometry.coordinates[0]], {
                color: properties.color,
                fillColor: properties.fillColor,
                fillOpacity: properties.fillOpacity,
                radius: properties.radius,
                weight: properties.weight
            });
            circle._leaflet_id = data_tool_data[a].nama;

            if(menu == "peta"){
            	featuregroup_loadpeta[index].addLayer(circle);
            }else{
            	featuregroup_loadCB[index].addLayer(circle);
            }
          }
        }
    }
    //  ARRAY 11 TEXT
    if(data[11]){
      var data_text_load = data[11];
      for(var a = 0; a<data_text_load.length;a++){
        var tmp = [];
        var data_ = data_text_load[a];
        var infotext = JSON.parse(data_.info_text);
        var namatext = data_.nama.split("_");

        // tmp.push(data_.nama);
        // tmp.push(infotext.text);
        // tmp.push(infotext.angel_);
        // tmp.push(infotext.size);
        // tmp.push(infotext.weight);
        // tmp.push(infotext.warna);

        // arr_data_text.push(tmp);
        icon_load_peta(data_,"text",index,menu)
        
      }
    }
}
function icon_load_peta(data_,type_plot,index,menu){
	var icon_ = "";
	if(type_plot == "satuan"){
	    icon_ = L.divIcon({className: 'my-div-icon', html:data_.symbol, iconSize: null, id_point: data_.nama});
	}else{
	    var symbol = JSON.parse(data_.symbol);
	    icon_ = L.divIcon({className: 'my-div-icon', html:symbol.html, iconSize: symbol.iconSize, id_point: symbol.id_point});
	}
	var layer_load = L.marker([Number(data_.lat_y), Number(data_.lng_x)], {icon: icon_});

	arrlayer_satuan.push(layer_load);

	var content_load = getContentLoad(layer_load,type_plot,data_);

	layer_load.bindPopup(content_load);
	if(menu == "peta"){
		featuregroup_loadpeta[index].addLayer(layer_load);
	}else{
		featuregroup_loadCB[index].addLayer(layer_load);
        // console.log(featuregroup_loadCB[index]);
	}
	// daftar_list_objc();
}
function icon_default_load_peta(data_,type_plot,index,menu){
	var icon_ = "";
	if(type_plot == "kekuatan"){
	    icon_ = L.icon({
	        iconUrl: 'image/plotting/kek_plot.png',
	        iconSize: [Number(data_.size), Number(data_.size)],
	        id_point: data_.nama
	    });
	}else if(type_plot == "situasi"){
	    var tmp = JSON.parse(data_.symbol_situasi);
	    icon_ = L.icon({
	        iconUrl: tmp.iconUrl,
	        iconSize: tmp.iconSize,
	        id_point: tmp.id_point
	    });
	}else{
	    var tmp = JSON.parse(data_.symbol);
	    icon_ = L.icon({
	        iconUrl: tmp.iconUrl,
	        iconSize: tmp.iconSize,
	        id_point: tmp.id_point
	    });
	};
	var layer_load = L.marker([Number(data_.lat_y), Number(data_.lng_x)], {icon: icon_});

	var content_load = getContentLoad(layer_load,type_plot,data_);

	layer_load.bindPopup(content_load);

	if(menu == "peta"){
		featuregroup_loadpeta[index].addLayer(layer_load);
	}else{
		featuregroup_loadCB[index].addLayer(layer_load);
	}
	// daftar_list_objc();
}

function ambil_bagian_cb(){
	var id = docId("namajenis_cb").value
	if(id == "null"){
		docId("jenis_user_cb").innerHTML = "<option value='null' >--- PILIH ---</option>";
		docId("namauser").innerHTML = "";
		docId("load_cb_").innerHTML = "";
	}else{
		var text = "status=master_bagian";
		var master_bagian = get_db(text);

		docId("jenis_user_cb").innerHTML = "<option value='null' >--- PILIH ---</option>";
		for(var a = 0;a<master_bagian.length;a++){
		    
		      var node = document.createElement("option");
		      var textnode = document.createTextNode(master_bagian[a].nama_bagian);
		      node.appendChild(textnode);
		      // SEMENTARA
		            // option = "d_asintel";
		          
		      node.setAttribute("value",master_bagian[a].ID);
		      document.getElementById("jenis_user_cb").appendChild(node);
		    
		  }
		docId("namauser").innerHTML = "";
		docId("load_cb_").innerHTML = "";
	}
}

function jenis_cb(data){
	if(data!="null"){
		var id = docId("namajenis_cb").value
		var text = "status=master_user&id_bagian="+data+"&token="+token_user;
		var user_data = get_db(text);

		var html_user = "";
		if(id == "musuh"){
			for(var a = 0;a<user_data.length;a++){
		  		if(Number(user_data[a]["asisten"])==1){
		  			var pisah = user_data[a]["name"].split(" ");
		  			var tmp = '<div class="form_menu">'+
								'<input type="checkbox" id="label_'+a+'" onchange="user_cek()" name="user_" value="'+user_data[a]["id"]+'|'+user_data[a]["name"]+'">'+
								'<label for="label_'+a+'" style="margin-left: -0.5px;">'+pisah[0]+'</label>'+
							  '</div>';
					html_user = html_user+tmp;
		  		}
		  	}
		}else{
			for(var a = 0;a<user_data.length;a++){
		  		if(user_data[a]["jabatan"]==2 && user_data[a]["asisten"]!=1){
		  			var pisah = user_data[a]["name"].split(" ");
		  			var tmp = '<div class="form_menu">'+
								'<input type="checkbox" id="label_'+a+'" onchange="user_cek()" name="user_" value="'+user_data[a]["id"]+'|'+user_data[a]["name"]+'">'+
								'<label for="label_'+a+'" style="margin-left: -0.5px;">'+pisah[0]+'</label>'+
							  '</div>';
					html_user = html_user+tmp;
		  		}
		  	}
		}

		docId("namauser").innerHTML = html_user;
		docId("load_cb_").innerHTML = "";
	}else{
		docId("namauser").innerHTML = "";
		docId("load_cb_").innerHTML = "";
	}
}
var arr_daftar_cb = [];
function user_cek(){
	var arr_cek = [];
	$("input:checkbox[name=user_]:checked").each(function(){
		var pisah = $(this).val().split("|");
	    arr_cek.push({id : pisah[0], nama: pisah[1]});
	});
	var cb_html = "";
	for (var i = 0; i < arr_cek.length; i++) {
		var text = "status=master_skenario&id_user="+arr_cek[i].id+"&skenario_aktif="+skenario_aktif[0].ID;
		var dokumen_ = get_db(text);
		var tmp_1 = '<div class="form_menu" style="width: 95%;"><span>'+arr_cek[i].nama+'</span>';
		if(dokumen_!=false){
			for(var a = 0; a<dokumen_.length; a++){
				if(dokumen_[a].nama_dokumen!=dokumen_nama || dokumen_[a].bagian != bagian_user){
					tmp_1 = tmp_1+'<div style="margin-bottom: -12px;">'+
										'<input type="checkbox" onchange="cb_cek()" name="nama_cb" id="cb_'+dokumen_[a].id_user+'_'+a+'" value="'+dokumen_[a].ID+'|'+dokumen_[a].id_user+'|'+dokumen_[a].nama_dokumen+'|'+a+'|'+arr_cek[i].nama+'|'+dokumen_[a].id_user+'|menucb">'+
										'<label for="cb_'+dokumen_[a].id_user+'_'+a+'" class="daftar_cb">'+dokumen_[a].nama_dokumen+'</label>'+
									'</div>';
				}
			}
		}else{
			tmp_1 = tmp_1+"<div>---- Data Tidak Ada ----</div>";
		}
		tmp_1 = tmp_1+'</div>';

		cb_html = cb_html+tmp_1;
	}
	// console.log(cb_html);
	docId("load_cb_").innerHTML=cb_html;
	if(arr_daftar_cb.length!=0){
		for (var i = 0; i < arr_daftar_cb.length; i++) {
			var pisah = arr_daftar_cb[i].split("|");
			if(docId("cb_"+pisah[5]+"_"+pisah[3])){
				docId("cb_"+pisah[5]+"_"+pisah[3]).checked = "true";
			}else{
				arr_daftar_cb[i] = "";
			}
		}
	}
}

function cb_cek(){
	arr_daftar_cb = [];
	$("input:checkbox[name=nama_cb]:checked").each(function(){
	    arr_daftar_cb.push($(this).val());
	});
}
var index_akhir = 0;
function buka_cb(){
	$.each(arr_daftar_cb, function(i, el){
	    if($.inArray(el, array_dokumen_cb) === -1){
	    	array_dokumen_cb.push(el);
	    	var pisah = el.split("|");
	    	var index = i + 1;
	    	var tmp = "<div class='form_menu' style='width: 100%; margin-bottom: -18px;' id='dokumen_cb_"+el+"'>"+
	    				"<input type='checkbox' id='hapus_cb_"+i+"' name='hapus_cb' value='"+el+"' style='display: inline; float: left; width: 20px; height: 20px;''>"+
	    				" &nbsp;"+pisah[2]+" "+
	    				"<div style='float: right;''>"+
		    				"<button id='loadOff_cb_"+el+"' onclick='loadCB(this)' class='slider off' style='cursor: pointer;text-align: center; display: block; width: 100px !important;'>OFF</button>"+
			    			"<button id='loadOn_cb_"+el+"' onclick='loadCB(this)' class='slide on' style='cursor: pointer;text-align: center; display: none; width: 100px !important;'>ON</button>"+
			    		"</div>"+
		    		  "</div>";
		    $("#view_load_cb").append(tmp);
		    featuregroup_loadCB.push(L.featureGroup().addTo(map));
		    index_akhir++;
	    } 
	});
	docId("namajenis_cb").value = "null";
	docId("jenis_user_cb").value = "null";
	docId("namauser").innerHTML = "";
	docId("load_cb_").innerHTML = "";
	arr_daftar_cb = [];
	// console.log(array_dokumen_cb);
}
function cancel_cb(){
	docId("view_cb").style.display="none";

	docId("namajenis_cb").value = "null";
	docId("jenis_user_cb").value = "null";
	docId("namauser").innerHTML = "";
	docId("load_cb_").innerHTML = "";
	
	arr_daftar_cb = [];
}

function hapus_cb(){
	var hapus_cb_select = [];
	$("input:checkbox[name=hapus_cb]:checked").each(function(){
	    // hapus_cb_select.push($(this).val());
	    var element = docId("dokumen_cb_"+$(this).val());
    	element.parentNode.removeChild(element);

    	for(var a = array_dokumen_cb.length-1; 0 <= a; a--){
    		if(array_dokumen_cb[a] == $(this).val()){
    			array_dokumen_cb.splice(a, 1);
    			featuregroup_loadCB[a].eachLayer(function (layer) {
		            featuregroup_loadCB[a].removeLayer(layer);
		        });
		        featuregroup_loadCB.splice(a, 1);
                daftar_cb.splice(a, 1);
    		}
    	}
	});
}