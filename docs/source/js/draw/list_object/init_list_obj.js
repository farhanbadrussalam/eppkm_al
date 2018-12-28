 /***********************************************
 ** fungsi untuk List object
 ** By: Muhamad Farhan Badrussalam
 ***********************************************/
function daftar_list_objc (){
	$('#ket_waktu_situasi_view').fdatepicker({
		format: 'mm-dd-yyyy hh:ii',
		disableDblClickSelection: true,
		language: 'ind',
		pickTime: true
	});
	docId("view_situasi").style.display = "none";
	docId("view_satuan").style.display = "none";
	docId("view_bungus").style.display ="none";
	docId("view_pasukan").style.display = "none";
	docId("view_manuver").style.display = "none";
	docId("view_text").style.display = "none";
	docId("view_obstacle").style.display = "none";
	docId("view_logistik").style.display = "none";
	docId("view_kekuatan").style.display = "none";
	docId("view_formasi_list").style.display = "none";
	docId("view_formasi").style.display = "none";
	/***********************************************
	 ** fungsi untuk mengambil data semua layer yang sudah di plot
	 ***********************************************/
	var data_layer = drawnItemsToJSON(drawnItems).features;
	var index_layer = 0;

	var data_list_situasi_html = "";
	var data_list_satuan_html = "";
	var data_list_kekuatan_html = "";
	var data_list_passen_html = "";
	var data_list_radar_html = "";
	var data_list_bungus_html = "";
	var data_list_manuver_html = "";
	var data_list_obstacle_html = "";
	var data_list_logistik_html = "";
	var data_list_text_html = "";
	var data_list_formasi_html = "";

	var index_situasi = 1;
	var index_satuan = 1;
	var index_kekuatan = 1;
	var index_passen = 1;
	var index_radar = 1;
	var index_bungus = 1;
	var index_manuver = 1;
	var index_obstacle = 1;
	var index_logistik = 1;
	var index_text = 1;
	var index_formasi = 1;

	daftar_timelist = [];

	data_layer.forEach(function(data){
		if(data.geometry.type == "Point"){
			if(data.properties.icon){
				var properties = data.properties.icon.options;
	            var status_plot = properties.id_point.split("_");
	            if(status_plot[0] == "situasi"){
					var tmp = "<tr>"+
								"<td>"+index_situasi+"</td>"+
								"<td hidden='true'>situasi</td>"+
								"<td hidden='true'>"+index_layer+"</td>"+//index_layer
								"<td><center><img src='"+properties.iconUrl+"' width='20' height='20' ></center></td>"+
								"<td>"+properties.id_point+"</td>"+
								"<td >"+data.geometry.coordinates[1]+"</td>"+//lat
								"<td >"+data.geometry.coordinates[0]+"</td>"+//lng
								"<td hidden='true'>"+properties.iconUrl+"</td>"+//icon
								"<td hidden='true'>"+properties.iconSize[0]+"</td>"+//size
							  "</tr>";
					data_list_situasi_html = data_list_situasi_html+tmp;
					index_situasi++;
	            }else if(status_plot[0] == "satuan"){
	            	var satuan_property = data_satuan[index_satuan-1];
	            	var icon = String.fromCharCode(Number(satuan_property[1].index));
	            	var tmp = "<tr>"+
	            				"<td>"+index_satuan+"</td>"+
								"<td hidden='true'>satuan</td>"+
								"<td hidden='true'>"+index_layer+"</td>"+//index_layer
								"<td><center><span style='color: "+satuan_property[9]+"; font-family: "+satuan_property[1].nama+"; font-size: 30px; font-weight: bolder;'>"+icon+"</span></center></td>"+
								"<td>"+satuan_property[5]+"</td>"+
								"<td >"+data.geometry.coordinates[1]+"</td>"+//lat
								"<td >"+data.geometry.coordinates[0]+"</td>"+//lng
	            			  "</tr>";
	            	data_list_satuan_html = data_list_satuan_html+tmp;

	            	var object_timelist = {
	            		jenis: "satuan",
	            		index: index_satuan,
	            		index_layer: index_layer,
	            		lat: data.geometry.coordinates[1],
	            		lng: data.geometry.coordinates[0],
	            		date: satuan_property[2],
	            		status: 0
	            	};
	            	daftar_timelist.push(object_timelist);

	            	index_satuan++;
	            }else if(status_plot[0] == "kekuatan"){
	            	var kekuatan_property = arr_data_kekuatan[index_kekuatan-1];
	            	//  style='background-color: "+kekuatan_property[6]+"'
	            	var tmp = "<tr>"+
	            				"<td>"+index_kekuatan+"</td>"+
								"<td hidden='true'>kekuatan</td>"+
								"<td hidden='true'>"+index_layer+"</td>"+//index_layer
								"<td>"+kekuatan_property[1]+"</td>"+
								"<td >"+data.geometry.coordinates[1]+"</td>"+//lat
								"<td >"+data.geometry.coordinates[0]+"</td>"+//lng
	            			  "</tr>";
	            	data_list_kekuatan_html = data_list_kekuatan_html+tmp;
	            	index_kekuatan++;
	            }else if(status_plot[0] == "passen"){
	            	var passen_property = arr_data_passen[index_passen-1];
	            	var tmp = "<tr>"+
	            				"<td>"+index_passen+"</td>"+
								"<td hidden='true'>pasukan</td>"+
								"<td hidden='true'>"+index_layer+"</td>"+//index_layer
								"<td><center><img src='"+properties.iconUrl+"' width='20' height='20' ></center></td>"+
								"<td>"+passen_property[3]+"</td>"+
								"<td >"+data.geometry.coordinates[1]+"</td>"+//lat
								"<td >"+data.geometry.coordinates[0]+"</td>"+//lng
								"<td hidden='true'>"+properties.iconUrl+"</td>"+//icon
								"<td hidden='true'>"+properties.iconSize[0]+"</td>"+//size
	            			  "</tr>";
	            	data_list_passen_html = data_list_passen_html+tmp;
	            	index_passen++;
	            }else if(status_plot[0] == "radar"){
	            	var radar_property = arr_data_radar[index_radar-1];
	            	var color = "";
	            	var icon = String.fromCharCode(Number(radar_property[2].index));
	            	var tmp = "<tr>"+
	            				"<td>"+index_radar+"</td>"+
								"<td hidden='true'>radar</td>"+
								"<td hidden='true'>"+index_layer+"</td>"+//index_layer
								"<td><center><span style='color: "+radar_property[4]+"; font-family: "+radar_property[2].nama+"; font-size: 20px; font-weight: bolder;'>"+icon+"</span></center></td>"+
								"<td>"+radar_property[1]+"</td>"+
								"<td >"+data.geometry.coordinates[1]+"</td>"+//lat
								"<td >"+data.geometry.coordinates[0]+"</td>"+//lng
	            			  "</tr>";
	            	data_list_radar_html = data_list_radar_html+tmp;

	            	index_radar++;
	            }else if(status_plot[0] == "bungus"){
	            	var bungus_property = arr_data_bungus[index_bungus-1];
	            	var tmp = "<tr>"+
	            				"<td>"+index_bungus+"</td>"+
								"<td hidden='true'>bungus</td>"+
								"<td hidden='true'>"+index_layer+"</td>"+//index_layer
								"<td>"+bungus_property[2]+"</td>"+
								"<td >"+data.geometry.coordinates[1]+"</td>"+//lat
								"<td >"+data.geometry.coordinates[0]+"</td>"+//lng
	            			  "</tr>";
	            	data_list_bungus_html = data_list_bungus_html+tmp;
	            	index_bungus++;
	            }else if(status_plot[0] == "manuever"){
	            	var manuver_property = arr_data_manuever[index_manuver-1];
	            	var icon = String.fromCharCode(Number(manuver_property[2].index));

	            	var tmp = "<tr>"+
	            				"<td>"+index_manuver+"</td>"+
								"<td hidden='true'>manuver</td>"+
								"<td hidden='true'>"+index_layer+"</td>"+//index_layer
								"<td><center><span style='color: "+manuver_property[3]+"; font-family: "+manuver_property[2].nama+"; font-size: 20px; font-weight: bolder;'>"+icon+"</span></center></td>"+
								"<td>"+manuver_property[1]+"</td>"+
								"<td >"+data.geometry.coordinates[1]+"</td>"+//lat
								"<td >"+data.geometry.coordinates[0]+"</td>"+//lng
	            			  "</tr>";
	            	data_list_manuver_html = data_list_manuver_html+tmp;
	            	index_manuver++;
	            }else if(status_plot[0] == "obstacle"){
	            	var obstacle_property = arr_data_obstacle[index_obstacle-1]
	            	var tmp = "<tr>"+
	            				"<td>"+index_obstacle+"</td>"+
								"<td hidden='true'>obstacle</td>"+
								"<td hidden='true'>"+index_layer+"</td>"+//index_layer
								"<td><center><span style='color: "+obstacle_property[2]+"; font-family: "+obstacle_property[4]+"; font-size: 20px; font-weight: bolder;'>"+obstacle_property[1]+"</span></center></td>"+
								"<td>"+obstacle_property[0]+"</td>"+
								"<td >"+data.geometry.coordinates[1]+"</td>"+//lat
								"<td >"+data.geometry.coordinates[0]+"</td>"+//lng
	            			  "</tr>";
	            	data_list_obstacle_html = data_list_obstacle_html+tmp;
	            	index_obstacle++;
	            }else if(status_plot[0] == "logistik"){
	            	var logistik_property = all_logistik[index_logistik-1];
	            	var pecah = logistik_property[6].split("_");
	            	var icon = "";

	            	if(pecah[2]!="bebas"){
	            		if(pecah[2] == "bandara"){
	            			if(logistik_property[4] == "Pangkalan Udara"){
	            				icon = "U";
	            			}else if(logistik_property[4] == "Landasan Udara"){
	            				icon = "V";
	            			}else if(logistik_property[4] == "Landasan Rumput"){
	            				icon = "a";
	            			}else{
	            				icon = "b";
	            			}
	            		}else{
	            			if(logistik_property[4] == "Lantamal"){
	            				icon = "ü";
	            			}else if(logistik_property[4] == "lanal"){
	            				icon = "ý";
	            			}else{
	            				icon = "¡";
	            			}
	            		}
		            	var tmp = "<tr>"+
		            				"<td>"+index_logistik+"</td>"+
									"<td hidden='true'>logistik</td>"+
									"<td hidden='true'>"+index_layer+"</td>"+//index_layer
									"<td><center><span style='color: "+logistik_property[5]+"; font-family: TAKTIS_AL; font-size: 20px; font-weight: bolder;'>"+icon+"</span></center></td>"+
									"<td>"+logistik_property[0][1]+"</td>"+
									"<td >"+data.geometry.coordinates[1]+"</td>"+//lat
									"<td >"+data.geometry.coordinates[0]+"</td>"+//lng
		            			  "</tr>";
		            	data_list_logistik_html = data_list_logistik_html+tmp;
	            	}else{
	            		var tmp = "<tr>"+
		            				"<td>"+index_logistik+"</td>"+
									"<td hidden='true'>logistik</td>"+
									"<td hidden='true'>"+index_layer+"</td>"+//index_layer
									"<td><center><img src='image/plotting/ic_logis.png' width='20' height='20' ></center></td>"+
									"<td>"+logistik_property[0][1]+"</td>"+
									"<td >"+data.geometry.coordinates[1]+"</td>"+//lat
									"<td >"+data.geometry.coordinates[0]+"</td>"+//lng
		            			  "</tr>";
		            	data_list_logistik_html = data_list_logistik_html+tmp;
	            	}
	            	index_logistik++;
	            }else if(status_plot[0] == "text"){
	            	var text_property = arr_data_text[index_text-1];
	            	var text = text_property[1];
	            	if(text.length >= 20){
	            		text = text.substring(0, 20)+".....";
	            	}
	            	var tmp = "<tr>"+
	            				"<td>"+index_text+"</td>"+
								"<td hidden='true'>text</td>"+
								"<td hidden='true'>"+index_layer+"</td>"+//index_layer
								"<td>"+text+"</td>"+
								"<td >"+data.geometry.coordinates[1]+"</td>"+//lat
								"<td >"+data.geometry.coordinates[0]+"</td>"+//lng
	            			  "</tr>";
	            	data_list_text_html = data_list_text_html+tmp;
	            	index_text++;
	            }else if(status_plot[0] == "formasi"){
	            	var formasi_property = arr_data_formasi[index_formasi-1];
	            	var icon = "";
	            	var warna = formasi_property[6];

	            	if(warna == "red"){
	            		icon = "image/formasi/arrow_red.png";
	            	}else{
	            		icon="image/formasi/arrow_blue.png";
	            	}
	            	var tmp = "<tr>"+
								"<td>"+index_formasi+"</td>"+
								"<td hidden='true'>formasi</td>"+
								"<td hidden='true'>"+index_layer+"</td>"+//index_layer
								"<td><center><img src='"+icon+"' width='20' height='20' ></center></td>"+
								"<td>"+formasi_property[0]+"</td>"+
								"<td >"+data.geometry.coordinates[1]+"</td>"+//lat
								"<td >"+data.geometry.coordinates[0]+"</td>"+//lng
								"<td hidden='true'>"+icon+"</td>"+//icon
								"<td hidden='true'>"+formasi_property[3]+"</td>"+//size
							  "</tr>";
					data_list_formasi_html = data_list_formasi_html+tmp;
					index_formasi++;
	            }
				index_layer++;	
			}else{
				
			}
		}
	});
	docId("tbody_list_situasi").innerHTML = data_list_situasi_html;
	docId("tbody_list_satuan").innerHTML = data_list_satuan_html;
	docId("tbody_list_kekuatan").innerHTML = data_list_kekuatan_html;
	docId("tbody_list_pasukan").innerHTML = data_list_passen_html;
	docId("tbody_list_radar").innerHTML = data_list_radar_html;
	docId("tbody_list_bungus").innerHTML = data_list_bungus_html;
	docId("tbody_list_manuver").innerHTML = data_list_manuver_html;
	docId("tbody_list_obstacle").innerHTML = data_list_obstacle_html;
	docId("tbody_list_logistik").innerHTML = data_list_logistik_html;
	docId("tbody_list_text").innerHTML = data_list_text_html;
	docId("tbody_list_formasi").innerHTML = data_list_formasi_html;


}
/***********************************************
 ** fungsi untuk click dan highlight pada table
 ***********************************************/
var selected = null;
function tableHighlightRow() {
  if (document.getElementById && document.createTextNode) {
    var tables=document.getElementsByTagName('table');
    for ( var i=0; i<tables.length; i++ ) {
      if ( tables[i].className==='list_table_situasi' || tables[i].className==='list_table_satuan' || tables[i].className==='list_table_kekuatan' 
      		|| tables[i].className==='list_table_pasukan' || tables[i].className==='list_table_radar' || tables[i].className==='list_table_bungus'
      		|| tables[i].className==='list_table_manuver' || tables[i].className==='list_table_obstacle' || tables[i].className==='list_table_logistik'
      		|| tables[i].className==='list_table_text' ) {
        var trs=tables[i].getElementsByTagName('tr');
        for ( var j=0; j<trs.length; j++) {
          if (trs[j].parentNode.nodeName==='TBODY') {
            trs[j].onmouseover=function(){
                // 'highlight' color is set in tablelist.css
                if ( this.className === '') {
                    this.className='highlight';
                }
                return false
            }
            trs[j].onmouseout=function(){
                if ( this.className === 'highlight') {
                    this.className='';
                }
                return false
            }
            trs[j].onmousedown=function(){
                //
                // Toggle the selected state of this row
                // 

                // 'clicked' color is set in tablelist.css.
                if ( this.className !== 'clicked' ) {
                    // Clear previous selection
                    if ( selected !== null ) {
                        selected.className='';
                    }

                    // Mark this row as selected
                    this.className='clicked';
                    click_objc(this,"click");
                    selected = this;
                }
                else {
                    this.className='';
                    selected = null;
                    docId("view_formasi").style.display = "none";
                	daftar_list_objc();
                	tableHighlightRow();
                }

                return true
            }
          }
        }
      }
    }
  }
}
/***********************************************
 ** fungsi Ketika list di pilih
 ***********************************************/
function click_objc(data,evt){

	if(evt == "timelist_edit"){
		var index = data.index-1;
		var status = data.jenis;
		var index_layer_ = data.index_layer;
	}else{
		var index = data.getElementsByTagName("td")[0].innerHTML - 1;
		var status = data.getElementsByTagName("td")[1].innerHTML;
		var index_layer_ = data.getElementsByTagName("td")[2].innerHTML;

	}

	var latitude = 0;
	var langitud = 0;
	docId("view_situasi").style.display = "none";
	docId("view_satuan").style.display = "none";
	docId("view_bungus").style.display ="none";
	docId("view_pasukan").style.display = "none";
	docId("view_manuver").style.display = "none";
	docId("view_text").style.display = "none";
	docId("view_obstacle").style.display = "none";
	docId("view_logistik").style.display = "none";
	docId("view_kekuatan").style.display = "none";
	docId("view_formasi").style.display = "none";


	if(status == "situasi"){
		latitude = Number(data.getElementsByTagName("td")[5].innerHTML);
		langitud = Number(data.getElementsByTagName("td")[6].innerHTML);
		var icon = data.getElementsByTagName("td")[7].innerHTML;
		var size = data.getElementsByTagName("td")[8].innerHTML;
		var property = {icon: icon, size: size,index_layer_:index_layer_};
		// var daftar_data = arr_data_situasi[index];
		property_obejct(index,status,property);
		

	}else if(status == "satuan"){

		if(evt == "timelist_edit"){
			latitude = Number(data.lat);
			langitud = Number(data.lng);
		}else{
			latitude = Number(data.getElementsByTagName("td")[5].innerHTML);
			langitud = Number(data.getElementsByTagName("td")[6].innerHTML);
		}

		var satuan_property = data_satuan[index];
        var icon = String.fromCharCode(Number(satuan_property[1].index));
        var kec = satuan_property[3].split("|");
        docId("view_satuan_font").innerHTML = icon;
        docId("view_satuan_font").style.fontFamily = satuan_property[1].nama;
        docId("view_satuan_font").style.fontSize = satuan_property[10]+"px";
        docId("view_satuan_font").style.color = satuan_property[9];
        docId("index_satuan_jalur").value = index+"|"+latitude+"|"+langitud;

        docId("satuan_nama_list").value = satuan_property[5];
        docId("date_satuan_berangkat_list").value = satuan_property[2];
        docId("satuan_size_list").value = satuan_property[10];
        docId("kecepatan_satuan_list").value = kec[0];
        docId("jenis_kec_satuan_list").value = kec[1];
        docId('warna_satuan_list').value = satuan_property[9];
        docId("index_satuan_layer").value = index_layer_;

		docId("view_satuan").style.display = "block";

	}else if(status == "kekuatan"){
		latitude = Number(data.getElementsByTagName("td")[4].innerHTML);
		langitud = Number(data.getElementsByTagName("td")[5].innerHTML);
		var property = {index_layer_ : index_layer_};
		property_obejct(index,status,property);
	}else if(status == "pasukan"){
		latitude = Number(data.getElementsByTagName("td")[5].innerHTML);
		langitud = Number(data.getElementsByTagName("td")[6].innerHTML);
		var icon = data.getElementsByTagName("td")[7].innerHTML;
		var size = data.getElementsByTagName("td")[8].innerHTML;

		var property = {index_layer_: index_layer_,icon: icon,size: size};

		property_obejct(index,status,property);
	}else if(status == "radar"){
		latitude = Number(data.getElementsByTagName("td")[5].innerHTML);
		langitud = Number(data.getElementsByTagName("td")[6].innerHTML);
		var property = {index_layer_ : index_layer_, lat: latitude, lang: langitud};
		property_obejct(index,status,property);
	}else if(status == "bungus"){
		latitude = Number(data.getElementsByTagName("td")[4].innerHTML);
		langitud = Number(data.getElementsByTagName("td")[5].innerHTML);
		var property = {index_layer_ : index_layer_};
		property_obejct(index,status,property);
	}else if(status == "manuver"){
		latitude = Number(data.getElementsByTagName("td")[5].innerHTML);
		langitud = Number(data.getElementsByTagName("td")[6].innerHTML);
		var property = {index_layer_ : index_layer_};
		property_obejct(index,status,property);
	}else if(status == "obstacle"){
		latitude = Number(data.getElementsByTagName("td")[5].innerHTML);
		langitud = Number(data.getElementsByTagName("td")[6].innerHTML);
		var property = {index_layer_ : index_layer_};
		property_obejct(index,status,property);
	}else if(status == "logistik"){
		latitude = Number(data.getElementsByTagName("td")[5].innerHTML);
		langitud = Number(data.getElementsByTagName("td")[6].innerHTML);
		var property = {index_layer_ : index_layer_};
		property_obejct(index,status,property);
	}else if(status == "text"){
		latitude = Number(data.getElementsByTagName("td")[4].innerHTML);
		langitud = Number(data.getElementsByTagName("td")[5].innerHTML);
		var property = {index_layer_ : index_layer_};
		property_obejct(index,status,property);
	}else if(status == "formasi"){
		latitude = Number(data.getElementsByTagName("td")[5].innerHTML);
		langitud = Number(data.getElementsByTagName("td")[6].innerHTML);
		var property = {index_layer_ : index_layer_};
		property_obejct(index,status,property);
	}

		map.flyTo({lng:Number(langitud),lat:Number(latitude)},11);
}
var jml_name_passen = 0;
function property_obejct(index,id,data){
	if(id == "situasi"){
		var daftar_data = arr_data_situasi[index];
		docId("view_situasi_image").src = data.icon;
		docId("view_situasi_image").width = Number(data.size);
		docId("view_situasi_image").height = Number(data.size);

		docId("view_situasi").style.display = "block";
		docId("index_situasi_layer").value = data.index_layer_;
		docId("index_situasi").value = index;

		if(data.icon == "image/plotting/warning_red.png"){
			docId("warna_situasi_view").value = "red";
		}else{
			docId("warna_situasi_view").value = "blue";
		}
		docId("situasi_size_view").value = data.size;
		docId("keterangan_situasi_view").value = daftar_data[0];
		docId("time_view").value = "custome";
		docId("f_tgl_view").style.display = "block";
		
		var tanggal = daftar_data[1].substring(0,2)+"-"+daftar_data[1].substring(2,4)+"-"+daftar_data[1].substring(4,8);
		docId("ket_waktu_situasi_view").value = tanggal+" "+daftar_data[2].substring(0,2)+":"+daftar_data[2].substring(2,4);
	}else if(id == "bungus"){
		docId("view_bungus").style.display = "block";
		docId("view_bungus_image").style.height = arr_data_bungus[index][3]+"px";
		docId("view_bungus_image").style.width = arr_data_bungus[index][3]+"px";
		docId("date_bungus_list").value = arr_data_bungus[index][0]+" "+arr_data_bungus[index][1];
		docId("bungus_size_list").value = arr_data_bungus[index][3];
		docId("index_bungus_layer").value = data.index_layer_;
		docId("index_bungus").value = index;
	}else if(id == "pasukan"){
		docId("view_pasukan").style.display = "block";
		docId("view_pasukan_image").src = data.icon;
		docId("view_pasukan_image").style.width = data.size+"px";
		docId("view_pasukan_image").style.height = data.size+"px";
		docId("index_pasukan").value = index;
		docId("index_pasukan_layer").value = data.index_layer_;

		docId("nama_pasukan_list").value = arr_data_passen[index][3];
		docId("pasukan_size_list").value = arr_data_passen[index][4];
		docId("warna_pasukan_list").value = arr_data_passen[index][2];

		var pasukan_html = "";
		jml_name_passen = 0;
		for (var i = 0; i < arr_data_passen[index][1].length; i++) {
			var data = arr_data_passen[index][1][i];
			var tmp = "<tr>"+
						"<td><input type='text' id='passen_name_"+i+"' value='"+data+"'></td>"+
						"<td><a onclick='removeRecord_passen(this)'>hapus</a></td>"+
					  "</tr>";
			pasukan_html = pasukan_html+tmp;
			jml_name_passen = i;
		}
		docId("table_nm_pasukan").innerHTML = pasukan_html;
	}else if(id == "manuver"){
		var data_ = arr_data_manuever[index];
		
		var icon = String.fromCharCode(Number(data_[2].index));
		docId("view_manuver_font").innerHTML = icon;
		docId("view_manuver_font").style.fontFamily = data_[2].nama;
		docId("view_manuver_font").style.fontSize = data_[4]+"px";
		docId("view_manuver_font").style.color = data_[3];
		docId("view_manuver").style.display = "block";
		docId("index_manuver").value = index;
		docId("index_manuver_layer").value = data.index_layer_;
		docId("nama_manuver_list").value = data_[1];
		docId("manuver_size_list").value = data_[4];
		docId("warna_manuver_list").value = data_[3];
	}else if(id == "text"){
		docId("view_text_font").style.fontSize = arr_data_text[index][3];
		docId("view_text_font").style.fontWeight = arr_data_text[index][4];
		docId("view_text_font").style.color = arr_data_text[index][5];
		docId("view_text_font").style.transform = "rotate("+Number(arr_data_text[index][2])+"deg)";
		docId("index_text").value = index;
		docId("index_text_layer").value = data.index_layer_;
		docId("view_text").style.display = "block";

		docId("text_size_list").value = arr_data_text[index][3];
		docId("text_angel_list").value = arr_data_text[index][2];
		docId("text_weight_list").value = arr_data_text[index][4];
		docId("warna_text_list").value = arr_data_text[index][5];
	}else if(id == "obstacle"){
		docId("view_obstacle").style.display = "block";
		docId("view_obstacle_font").innerHTML = arr_data_obstacle[index][1];
		docId("view_obstacle_font").style.fontFamily = arr_data_obstacle[index][4];
		docId("view_obstacle_font").style.fontSize = arr_data_obstacle[index][3]+"px";
		docId("view_obstacle_font").style.color = arr_data_obstacle[index][2];

		docId("index_obstacle").value = index;
		docId("index_obstacle_layer").value = data.index_layer_;

		docId("warna_obstacle_list").value = arr_data_obstacle[index][2];
		docId("obstacle_size_list").value = arr_data_obstacle[index][3];
	}else if(id == "logistik"){
		docId("view_logistik").style.display = "block";
		var log_data = all_logistik[index];
		var color = log_data[5];
		var size = log_data[7];
		var picms,family;
		if (log_data[4] == "Pangkalan Udara") {
	      picms = "U";
	      family = "TAKTIS_AL";
	    }else if (log_data[4] == "Landasan Udara"){
	      picms = "V";
	      family = "TAKTIS_AL";
	    }else if (log_data[4] == "Landasan Rumput"){
	      picms = "a";
	      family = "TAKTIS_AU";
	    }else if(log_data[4] == "Pelandasan Helikopter"){
	      picms = "b";
	      family = "TAKTIS_AU";
	    }else if (log_data[4] == "Lantamal") {
          picms = "ü";
	      family = "TAKTIS_AL";
        }else if (log_data[4] == "lanal"){
          picms = "ý";
	      family = "TAKTIS_AL";
        }else{
          picms = "¡";
	      family = "TAKTIS_AL";
        }
        docId("view_logistik_font").innerHTML = picms;
        docId("view_logistik_font").style.fontFamily = family;
        docId("view_logistik_font").style.fontSize = size+"px";
        docId("view_logistik_font").style.color = color;

        docId("warna_logistik_list").value = log_data[5];
        docId("logistik_size_list").value = log_data[7];
        docId("index_logistik").value = index;
        docId("index_logistik_layer").value = data.index_layer_;
        input_logistik_id = 0;
        arr_logistik_ = [];
        docId("daftar_logistik").innerHTML = "";
        for (var i = 0; i < log_data[3].length; i++) {
        	addRowLogistik_edit(log_data[3][i].judul,log_data[3][i].isi);
        }
	}else if(id == "radar"){
		var icon = String.fromCharCode(Number(arr_data_radar[index][2].index));

		docId("view_radar").style.display = "block";
		docId("view_radar_font").innerHTML = icon;
		docId("view_radar_font").style.fontSize = arr_data_radar[index][5]+"px";
		docId("view_radar_font").style.fontFamily = arr_data_radar[index][2].nama;
		docId("view_radar_font").style.color = arr_data_radar[index][4];
		docId("index_radar").value = index;
		docId("index_radar_layer").value = data.index_layer_;
		docId("latitude_radar_list").value = data.lat;
		docId("langitude_radar_list").value = data.lang;

		docId("warna_radar_list").value = arr_data_radar[index][4];
		docId("radar_size_list").value = arr_data_radar[index][5];
		docId("jarak_radar_list").value =arr_data_radar[index][3]/1852;
		docId("nama_radar_list").value = arr_data_radar[index][1];
	}else if(id == "kekuatan"){
		kekuatan_font = [];

		docId("view_kekuatan").style.display = "block";
		docId("view_kekuatan_image").style.width = arr_data_kekuatan[index][5]+"px";
		docId("view_kekuatan_image").style.height = arr_data_kekuatan[index][5]+"px";
		docId("index_kekuatan").value = index;
		docId("index_kekuatan_layer").value = data.index_layer_;

		docId("nama_kekuatan_list").value = arr_data_kekuatan[index][1];
		docId("kekuatan_size_list").value = arr_data_kekuatan[index][5];
		docId("warna_kekuatan_list").value = arr_data_kekuatan[index][6];
		docId("date_kekuatan_berangkat_list").value = arr_data_kekuatan[index][3];

		var pisah = arr_data_kekuatan[index][4].split("|");
		docId("kecepatan_kekuatan_list").value = pisah[0];
		docId("jenis_kec_kekuatan_list").value = pisah[1];
		docId("keterangan_kekuatan_list").value = arr_data_kekuatan[index][7];

		kekuatan_font = arr_data_kekuatan[index][2];

		var isi_table = "";
		for(var i = 0; i<arr_data_kekuatan[index][2].length; i++){
			var res = String.fromCharCode(Number(arr_data_kekuatan[index][2][i].font.index));
			var tmp = "<tr>"+
						"<td style='font-size: 30px; font-family: "+arr_data_kekuatan[index][2][i].font.nama+";'>"+res+"</td>"+
						"<td>"+arr_data_kekuatan[index][2][i].jumlah+"</td>"+
						"<td>"+arr_data_kekuatan[index][2][i].font.keterangan+"</td>"+
						"<td><a onclick='removeitem_kekuatanList(this)'>Hapus</a></td>"
					  "</tr>";
			isi_table = isi_table+tmp;
		}
		docId("kekuatan_pilih_list").innerHTML = isi_table;
	}else if(id == "formasi"){
		var icon = "";
		if(arr_data_formasi[index][6] == "red"){
    		icon = "image/formasi/arrow_red.png";
    	}else{
    		icon="image/formasi/arrow_blue.png";
    	}

	    // console.log(arr_data_formasi[index]);
	    docId("view_formasi").style.display = "none";
	    
	    data_buat_formasi = [];
	    data_buat_formasi_table = [];
	    arr_formasi_cek = [];
	    var table_formasi_html = "";
	    jumlah_formasi = 0;
	    for (var i = 0; i < arr_data_formasi[index][4].length; i++) {
	    	var data_frm = arr_data_formasi[index][4][i];
	    	var res = String.fromCharCode(Number(data_frm.index_symbol));
	    	var b = i+1;
	    	if(arr_data_formasi[index][5] == "8"){
	    		data_buat_formasi.push({jarak: data_frm.jarak,sudut: data_frm.sudut});
	    		data_buat_formasi_table.push(data_font[data_frm.id]);
	    		arr_formasi_cek.push({id : data_frm.id});
	    		var jaraknya = (data_frm.jarak*111.319888)/1.852;
	    		var tmp = "<tr>"+
							"<td>"+b+"</td>"+
							"<td style='font-size: 30px; font-family: "+data_frm.family_symbol+";'>"+res+"</td>"+
							"<td><input style='width : 70px !important;' min='0' max='4' oninput='formasi_add(1)' type='number' id='jarak_formasi_list_"+i+"' value='"+jaraknya+"'></td>"+
							"<td><input style='width : 70px !important;' min='0' max='360' oninput='formasi_add(1)' type='number' id='arah_formasi_list_"+i+"' value='"+data_frm.sudut+"'></td>"+
							"<td></td>"+
						  "</tr>";

	    	}else{
	    		arr_formasi_cek.push({id : data_frm.id});
	    		var tmp = "<tr>"+
							"<td>"+b+"</td>"+
							"<td style='font-size: 30px; font-family: "+data_frm.family_symbol+";'>"+res+"</td>"+
							"<td>"+data_frm.keterangan_symbol+"</td>"+
							"<td></td>"+
						  "</tr>";
	    	}
	    	table_formasi_html = table_formasi_html+tmp;

	    	jumlah_formasi++;
	    }

	    if(arr_data_formasi[index][5] == "8"){
	    	docId("list_table_formasi8").style.display = "table";
	    	docId("view_formasi").style.display = "block";
	    	docId("table_list_tbody_formasi8").innerHTML = table_formasi_html;
	    	formasi_add(1);
	    }else{
	    	docId("list_table_formasi").style.display = "table";
	    	docId("table_list_tbody_formasi").innerHTML = table_formasi_html;
	    }

    	docId("view_formasi_image").src = icon;
    	docId("view_formasi_image").style.width = arr_data_formasi[index][3]+"px";
    	docId("view_formasi_image").style.height = arr_data_formasi[index][3]+"px";

    	docId("index_formasi").value = index;
    	docId("index_formasi_layer").value = data.index_layer_;

    	docId("date_formasi_berangkat_list").value = arr_data_formasi[index][1];
    	docId("formasi_size_list").value = arr_data_formasi[index][3];
    	docId("warna_formasi_list").value = arr_data_formasi[index][6];
    	docId("kecepatan_formasi_list").value = arr_data_formasi[index][2].split("|")[0]
    	docId("jenis_kec_formasi_list").value = arr_data_formasi[index][2].split("|")[1]
    	docId("view_formasi_list").style.display = "block";


	}
}

/***********************************************
 ** fungsi untuk click dan highlight pada table
 ***********************************************/
function change_list(data){

	docId("view_situasi").style.display = "none";
	docId("view_satuan").style.display = "none";
	docId("view_bungus").style.display ="none";
	docId("view_pasukan").style.display = "none";
	docId("view_manuver").style.display = "none";
	docId("view_text").style.display = "none";
	docId("view_obstacle").style.display = "none";
	docId("view_logistik").style.display = "none";
	docId("view_kekuatan").style.display = "none";
	docId("view_formasi_list").style.display = "none";
	docId("view_formasi").style.display = "none";

	docId("list_situasi").style.display = "none";
	docId("list_satuan").style.display = "none";
	docId("list_kekuatan").style.display = "none";
	docId("list_pasukan").style.display = "none";
	docId("list_radar").style.display = "none";
	docId("list_bungus").style.display = "none";
	docId("list_manuver").style.display = "none";
	docId("list_obstacle").style.display = "none";
	docId("list_logistik").style.display = "none";
	docId("list_text").style.display = "none";
	docId("list_formasi").style.display = "none";

	if(data == 1){
		docId("list_satuan").style.display = "block";
	}else if(data == 2){
		docId("list_situasi").style.display = "block";
	}else if(data == 3){
		docId("list_kekuatan").style.display = "block";
	}else if(data == 4){
		docId("list_bungus").style.display = "block";
	}else if(data == 5){
		docId("list_manuver").style.display = "block";
	}else if(data == 6){
		docId("list_pasukan").style.display = "block";
	}else if(data == 7){
		docId("list_obstacle").style.display = "block";
	}else if(data == 8){
		docId("list_logistik").style.display = "block";
	}else if(data == 9){
		docId("list_radar").style.display = "block";
	}else if(data == 10){
		docId("list_text").style.display = "block";
	}else if(data == 11){
		docId("list_formasi").style.display = "block";
	}
}
/***********************************************
 ** fungsi untuk set waktu pada plot situasi
 ***********************************************/
function ket_waktu_view(){
	if(docId("time_view").value == "now"){
 		docId("f_tgl_view").style.display = "none";
 	}else{
 		docId("f_tgl_view").style.display = "block";
 	}
}


/***********************************************
 ** fungsi untuk Menghapus
 ***********************************************/

 function delete_graph(status){
 	var result = confirm("Want to delete?");
 	var index_layer_delete;
 	if(result){
 		if(status == "situasi"){
 			index_layer_delete = Number(docId("index_situasi_layer").value);
 			var situasi_index = docId("index_situasi").value;
 			arr_data_situasi.splice(situasi_index, 1);
 		}else if(status == "satuan"){
 			index_layer_delete = Number(docId("index_satuan_layer").value);
 			var index = docId("index_satuan_jalur").value.split("|");
 			data_satuan.splice(Number(index[0]), 1);
 		}else if(status == "bungus"){
 			index_layer_delete = Number(docId("index_bungus_layer").value);
 			var index = docId("index_bungus").value;
 			arr_data_bungus.splice(Number(index), 1);
 		}else if(status == "pasukan"){
 			index_layer_delete = Number(docId("index_pasukan_layer").value);
 			var index = docId("index_pasukan").value;
 			arr_data_passen.splice(Number(index),1);
 		}else if(status == "manuver"){
 			index_layer_delete = Number(docId("index_manuver_layer").value);
 			var index = docId("index_manuver").value;
 			arr_data_manuever.splice(Number(index),1);
 		}else if(status == "text"){
 			index_layer_delete = Number(docId("index_text_layer").value);
 			var index = docId("index_text").value;
 			arr_data_text.splice(Number(index),1);
 		}else if(status == "obstacle"){
 			index_layer_delete = Number(docId("index_obstacle_layer").value);
 			var index = docId("index_obstacle").value;
 			arr_data_obstacle.splice(Number(index), 1);
 		}else if(status == "logistik"){
 			index_layer_delete = Number(docId("index_logistik_layer").value);
 			var index = docId("index_logistik").value;
 			all_logistik.splice(Number(index), 1);
 		}else if(status == "radar"){
 			index_layer_delete = Number(docId("index_radar_layer").value);
 			var index = Number(docId("index_radar").value);
 			arr_data_radar.splice(index, 1);

 			clearInterval(arr_radar_circle[index]);
	 		drawnItems.removeLayer(tmpGraph_radar[index]);
	 		drawnItems.removeLayer(circle_graph_radar[index]);
	 		tmpGraph_radar.splice(index, 1);
	 		circle_graph_radar.splice(index, 1);
	 		arr_radar_circle.splice(index, 1);
 		}else if(status == "kekuatan"){
 			index_layer_delete = Number(docId("index_kekuatan_layer").value);
 			var index = Number(docId("index_kekuatan").value);
 			arr_data_kekuatan.splice(index, 1);
 		}else if(status == "formasi"){
 			index_layer_delete = Number(docId("index_formasi_layer").value);
 			var index = Number(docId("index_formasi").value);
 			arr_data_formasi.splice(index, 1);

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
 		}
		drawnItems.removeLayer(daftar_arr_layer[index_layer_delete]);
		daftar_list_objc();
		tableHighlightRow();
        // Time list
        first_timelist();
		daftar_arr_layer.splice(index, 1);
 	}
 }

 /***********************************************
 ** fungsi untuk Ubah data
 ***********************************************/

 function ubah_graph(status){
 	if(status == "situasi"){
 		var color = docId("warna_situasi_view").value;
 		var size = Number(docId("situasi_size_view").value);
 		var keterangan = docId("keterangan_situasi_view").value;
 		var index = docId("index_situasi").value;
 		var index_layer = Number(docId("index_situasi_layer").value);
        var waktu;
        var tgl
 		if (docId('time_view').value == "now") {
 			var tgl_ = new Date();
            var hari = tgl_.getDate();
              if(hari<10){
                hari = "0"+hari;
              }
            var bulan = tgl_.getMonth()+1;
              if(bulan<10){
                bulan = "0"+bulan;
              }
            var tahun = tgl_.getYear();
            var year = (tahun < 1000) ? tahun + 1900 : tahun;
            tgl = hari.toString()+bulan.toString()+year.toString();
            // Waktu
            var hours = tgl_.getHours();
            var minute = tgl_.getMinutes();
            var second = tgl_.getSeconds();

            if(hours.toString()<10 && minute.toString()<10){
              waktu = "0"+hours.toString()+"0"+minute.toString();
            }else if(hours.toString()<10){
              waktu = "0"+hours.toString()+minute.toString();
            }else if(minute.toString()<10){
              waktu = hours.toString()+"0"+minute.toString();
            }else{
              waktu = hours.toString()+minute.toString();
            }
 		}else{
 			var tanggal = docId("ket_waktu_situasi_view").value.split(" ");

 			var cut_tahun = tanggal[0].split("-");
            var cut_waktu = tanggal[1].split(":");

            tgl = cut_tahun[0].toString()+cut_tahun[1].toString()+cut_tahun[2].toString();
            waktu = cut_waktu[0].toString()+cut_waktu[1].toString();
 		}
 		// inisialisasi
 		var iconUrl_ = "";
		if(color == "red"){
			iconUrl_ = "image/plotting/warning_red.png";
		}else if(color == "blue"){
			iconUrl_ = "image/plotting/warning_blue.png";
		}
		drawnItems.eachLayer(function(layer){
            if(layer.options.icon.options.id_point == arr_data_situasi[index][3]){
            	layer.options.icon.options.iconSize[0] = size;
            	layer.options.icon.options.iconSize[1] = size;
            	layer.options.icon.options.iconUrl = iconUrl_;
            	layer.options.icon.options.id_point = arr_data_situasi[index][3];
             	var data = getPopupContent(layer,"situasi","edit",index);
            	layer.bindPopup(data);
            }
        })
 		arr_data_situasi[index][0] = keterangan;
 		arr_data_situasi[index][1] = tgl;
 		arr_data_situasi[index][2] = waktu;
		// getPopupContent(daftar_arr_layer[index_layer],"situasi");
 	}else if(status == "satuan"){
 		var nama = docId("satuan_nama_list").value;
 		var waktu = docId("date_satuan_berangkat_list").value;
 		var ukuran = docId("satuan_size_list").value;
 		var kecepatan =docId("kecepatan_satuan_list").value;
 		var jenis_kecepatan = docId("jenis_kec_satuan_list").value;
 		var warna = docId("warna_satuan_list").value;
 		var index = docId("index_satuan_jalur").value.split("|");
 		// var myIcon = L.divIcon({className: 'my-div-icon', html:icon_satuan, iconSize: null, id_point: "satuan_"+jml_objc_sat});

 		// console.log(index);
 		data_satuan[index[0]][2] = waktu;
 		data_satuan[index[0]][5] = nama;
 		data_satuan[index[0]][3] = kecepatan+"|"+jenis_kecepatan;
 		data_satuan[index[0]][9] = warna;
 		data_satuan[index[0]][10] = Number(ukuran);
 		var icon_satuan = "<div style='font-weight: bolder; margin-top:-15px; width: 30px;color: "+warna+"; font-size: "+ukuran+"px; font-family: "+data_satuan[index[0]][1].nama+"'>"+String.fromCharCode(Number(data_satuan[index[0]][1].index))+"</div>";
 		drawnItems.eachLayer(function(layer){
 			if(layer.options.icon){
	            if(layer.options.icon.options.id_point == data_satuan[index[0]][0]){
	            	layer.options.icon.options.html = icon_satuan;
	             	var data = getPopupContent(layer,"satuan","edit",index);
	            	layer.bindPopup(data);
	            }
 				
 			}
        })
 	}else if(status == "manuver"){
 		var nama = docId("nama_manuver_list").value;
 		var size = docId("manuver_size_list").value;
 		var warna = docId("warna_manuver_list").value;
 		var index = docId("index_manuver").value;

 		arr_data_manuever[index][1] = nama;
 		arr_data_manuever[index][3] = warna;
 		arr_data_manuever[index][4] = size;
 		var icon_satuan = "<div style='font-weight: bolder; margin-top:-15px; width: 30px;color: "+warna+"; font-size: "+size+"px; font-family: "+arr_data_manuever[index][2].nama+"'>"+String.fromCharCode(Number(arr_data_manuever[index][2].index))+"</div>";
 		drawnItems.eachLayer(function(layer){
            if(layer.options.icon.options.id_point == arr_data_manuever[index][0]){
            	layer.options.icon.options.html = icon_satuan;
             	var data = getPopupContent(layer,"manuever","edit",index);
            	layer.bindPopup(data);
            }
        })
 	}else if(status == "bungus"){
 		var date = docId("date_bungus_list").value.split(" ");
 		var size = Number(docId("bungus_size_list").value);
 		var index = docId("index_bungus").value;
 		arr_data_bungus[Number(index)][0] = date[0];
 		arr_data_bungus[Number(index)][1] = date[1];
 		arr_data_bungus[Number(index)][3] = size;

		drawnItems.eachLayer(function(layer){
            if(layer.options.icon.options.id_point == arr_data_bungus[Number(index)][2]){
            	layer.options.icon.options.iconSize = [size,size];
             	var data = getPopupContent(layer,"bungus","edit",index);
            	layer.bindPopup(data);
            }
        })
 	}else if(status == "pasukan"){
 		var nama = docId("nama_pasukan_list").value;
 		var size = docId("pasukan_size_list").value;
 		var warna = docId('warna_pasukan_list').value;
 		var index = Number(docId("index_pasukan").value);

 		arr_data_passen[index][3] = nama;
 		arr_data_passen[index][4] = size;
 		arr_data_passen[index][2] = warna;
 		var icon_ = "";
 		if(warna == "red"){
			icon_ = "point_red.png";
		}else{
			icon_ = "point_blue.png";
		}
		var no = jml_name_passen+1;
		var arr_ = [];
		for (var i = 0; i < no; i++) {
			if(docId("passen_name_"+i)){
				var isi = docId("passen_name_"+i).value;
				if(isi != ""){
					arr_.push(isi);
				}
			}
		}
		arr_data_passen[index][1] = arr_;
 		drawnItems.eachLayer(function(layer){
            if(layer.options.icon.options.id_point == arr_data_passen[index][0]){
            	layer.options.icon.options.iconSize = [size,size];
            	layer.options.icon.options.iconUrl = "image/plotting/"+icon_;
             	var data = getPopupContent(layer,"passen","edit",index);
            	layer.bindPopup(data);
            }
        })
 	}else if(status == "text"){
 		var size = docId("text_size_list").value;
		var angel = docId("text_angel_list").value;
		var weight = docId("text_weight_list").value;
		var warna = docId("warna_text_list").value;
		var index = docId("index_text").value;

		arr_data_text[index][2] = angel;
		arr_data_text[index][3] = size;
		arr_data_text[index][4] = weight;
		arr_data_text[index][5] = warna;
		var icon_satuan = "<div style='margin-top:-15px;font-weight:"+weight+";transform: rotate("+angel+"deg); width: 30px;color: "+warna+"; font-size: "+size+"px; '>"+arr_data_text[index][1]+"</div>";

		drawnItems.eachLayer(function(layer){
            if(layer.options.icon.options.id_point == arr_data_text[index][0]){
            	layer.options.icon.options.html = icon_satuan;
             	var data = getPopupContent(layer,"text","edit",index);
            	layer.bindPopup(data);
            }
        })
 	}else if(status == "obstacle"){
 		var size = docId("obstacle_size_list").value;
		var warna = docId("warna_obstacle_list").value;
		var index = docId("index_obstacle").value;

		arr_data_obstacle[index][2] = warna;
		arr_data_obstacle[index][3] = size;

		var icon_obstacel = "<div style='margin-top:-15px; width: 30px;color: "+warna+"; font-size: "+size+"px; font-family: TandaTanda'>"+arr_data_obstacle[index][1]+"</div>";

		drawnItems.eachLayer(function(layer){
            if(layer.options.icon.options.id_point == arr_data_obstacle[index][0]){
            	layer.options.icon.options.html = icon_obstacel;
             	var data = getPopupContent(layer,"obstacle","edit",index);
            	layer.bindPopup(data);
            }
        })
 	}else if(status == "logistik"){
 		var size = docId("logistik_size_list").value;
 		var color = docId("warna_logistik_list").value;
 		var index = docId("index_logistik").value;
 		var arr = [];
 		for (var i = 0; i < arr_logistik_.length; i++) {
 			var nama = docId("logistik_nama_"+arr_logistik_[i]).value;
 			var nilai = docId("logistik_nilai_"+arr_logistik_[i]).value
 			var obj = {judul:nama,isi:nilai};
 			arr.push(obj);
 		}
 		all_logistik[index][5] = color;
 		all_logistik[index][7] = size;
 		all_logistik[index][3] = arr;
 		var jenisp = all_logistik[index][4];
 		var picms;
 		if (jenisp == "Pangkalan Udara") {
          picms = "<div style='margin-top:-15px; width: 30px;color: "+color+"; font-size: "+size+"px; font-family: TAKTIS_AL'>U</div>";
        }else if (jenisp == "Landasan Udara"){
          picms = "<div style='margin-top:-15px; width: 30px;color: "+color+"; font-size: "+size+"px; font-family: TAKTIS_AL'>V</div>";
        }else if (jenisp == "Landasan Rumput"){
          picms = "<div style='margin-top:-15px; width: 30px;color: "+color+"; font-size: "+size+"px; font-family: TAKTIS_AU'>a</div>";
        }else if(jenisp == "Pelandasan Helikopter"){
          picms = "<div style='margin-top:-15px; width: 30px;color: "+color+"; font-size: "+size+"px; font-family: TAKTIS_AU'>b</div>";
        }else if (jenisp == "Lantamal"){
          picms = "<div style='margin-top:-15px; width: 30px;color: "+color+"; font-size: "+size+"px; font-family: TAKTIS_AL'>ü</div>";
        }else if (jenisp == "lanal"){
          picms = "<div style='margin-top:-15px; width: 30px;color: "+color+"; font-size: "+size+"px; font-family: TAKTIS_AL'>ý</div>";
        }else{
          picms = "<div style='margin-top:-15px; width: 30px;color: "+color+"; font-size: "+size+"px; font-family: TAKTIS_AL'>¡</div>";
        }
 		drawnItems.eachLayer(function(layer){
            if(layer.options.icon.options.id_point == all_logistik[index][6]){
            	layer.options.icon.options.html = picms;
             	var data = getPopupContent(layer,"plot_bebas","edit",index);
            	layer.bindPopup(data);
            }
        })
 	}else if(status == "radar"){
 		var nama = docId("nama_radar_list").value;
 		var color = docId("warna_radar_list").value;
 		var size = docId("radar_size_list").value;
 		var jarak = docId("jarak_radar_list").value;
 		var index = docId("index_radar").value;

 		var latitude = Number(docId("latitude_radar_list").value);
 		var langitud = Number(docId("langitude_radar_list").value);

 		arr_data_radar[index][1] = nama;
 		arr_data_radar[index][3] = jarak*1852;
 		arr_data_radar[index][4] = color;
 		arr_data_radar[index][5] = size;

 		clearInterval(arr_radar_circle[index]);
 		drawnItems.removeLayer(tmpGraph_radar[index]);
 		drawnItems.removeLayer(circle_graph_radar[index]);
 		// tmpGraph_radar.splice(index, 1);
 		// circle_graph_radar.splice(index, 1);
 		// arr_radar_circle.splice(index, 1);

 		var icon_satuan = "<div style='margin-top:-15px; width: 30px;color: "+color+"; font-size: "+size+"px; font-family: "+arr_data_radar[index][2].nama+"'>"+String.fromCharCode(Number(arr_data_radar[index][2].index))+"</div>";

 		drawnItems.eachLayer(function(layer){
            if(layer.options.icon.options.id_point == arr_data_radar[index][0]){
            	layer.options.icon.options.html = icon_satuan;
             	var data = getPopupContent(layer,"radar","edit",index);
            	layer.bindPopup(data);
            }
        })

 		var circle = L.circle([latitude,langitud],{
 			color : color,
 			fillColor: color,
 			fillOpacity: 0.3,
 			radius: arr_data_radar[index][3]
 		});
 		var latlng = {lat: latitude, lng: langitud};
 		createRadar(latlng,arr_data_radar[index][3],color,circle,"edit",index)
 		drawnItems.addLayer(circle);
 	}else if(status == "kekuatan"){
 		var nama = docId("nama_kekuatan_list").value;
 		var size = docId("kekuatan_size_list").value;
 		var color = docId("warna_kekuatan_list").value;
 		var waktu_berangkat = docId('date_kekuatan_berangkat_list').value;
 		var kecepatan = docId("kecepatan_kekuatan_list").value+"|"+docId("jenis_kec_kekuatan_list").value;
 		var keterangan = docId("keterangan_kekuatan_list").value;

 		var index = docId("index_kekuatan").value;
 		arr_data_kekuatan[index][1] = nama;
 		arr_data_kekuatan[index][2] = kekuatan_font;
 		arr_data_kekuatan[index][3] = waktu_berangkat;
 		arr_data_kekuatan[index][4] = kecepatan;
 		arr_data_kekuatan[index][5] = size;
 		arr_data_kekuatan[index][6] = color;
 		arr_data_kekuatan[index][7] = keterangan;

 		drawnItems.eachLayer(function(layer){
            if(layer.options.icon.options.id_point == arr_data_kekuatan[index][0]){
            	layer.options.icon.options.iconSize = [size,size];
            	// layer.options.icon.options.iconUrl = "image/plotting/"+icon_;
             	var data = getPopupContent(layer,"kekuatan","edit",index);
            	layer.bindPopup(data);
            }
        })
 	}else if(status == "formasi"){
 		var size = docId("formasi_size_list").value;
		var warna = docId("warna_formasi_list").value;
		var waktu = docId("date_formasi_berangkat_list").value;
		var kecepatan = docId("kecepatan_formasi_list").value+"|"+docId("jenis_kec_formasi_list").value;
		var index = docId("index_formasi").value;

		arr_data_formasi[index][1] = waktu;
		arr_data_formasi[index][2] = kecepatan;
		arr_data_formasi[index][3] = size;
		arr_data_formasi[index][6] = warna;

		for (var i = 0; i < arr_data_formasi[index][4].length; i++) {
			var res = String.fromCharCode(Number(arr_data_formasi[index][4][i].index_symbol));
            var icon_formasi = "<div style='margin-top:-15px; width: 30px; color: "+warna+"; font-size: 30px; font-family: "+arr_data_formasi[index][4][i].family_symbol+"'>"+res+"</div>";
			arr_data_formasi[index][4][i].symbol.options.html = icon_formasi;
		}

		var icon = "";
		if(warna == "red"){
    		icon = "image/formasi/arrow_red.png";
    	}else{
    		icon="image/formasi/arrow_blue.png";
    	}

		drawnItems.eachLayer(function(layer){
            if(layer.options.icon.options.id_point == arr_data_formasi[index][0]){
            	layer.options.icon.options.iconSize = [size,size];
            	layer.options.icon.options.iconUrl = icon;
             	var data = getPopupContent(layer,"formasi","edit",index);
            	layer.bindPopup(data);
            }
        })

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
 	}
    drawnItems.remove();
    drawnItems.addTo(map);
 	daftar_list_objc();
	tableHighlightRow();

	// timelist
	first_timelist();
}

function tambah_passen(){
	var index = docId("index_pasukan").value;
	jml_name_passen++;
	addToform_passen(jml_name_passen);
}