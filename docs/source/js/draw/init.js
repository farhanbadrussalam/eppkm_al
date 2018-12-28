/***********************************************
 ** fungsi untuk datetime picker yg bisa di gunakan
 ** di semua form
 ** By: Muhamad Farhan Badrussalam
 ***********************************************/
$(function(){
	n =  new Date();
	y = n.getFullYear();
	m = n.getMonth() + 1;
	d = n.getDate();

	ii = n.getMinutes();
	hh = n.getHours();
	if(hh<10){
      hh="0"+hh;
    }
    if (ii<=9){ii="0"+ii;}
    if (m<=9){m="0"+m;}
    if (d<=9){d="0"+d;}
	document.getElementById("date_satuan_berangkat").value =m + "-" + d + "-" + y +" "+ hh + ":" + ii;
	document.getElementById("date_kekuatan_berangkat").value =m + "-" + d + "-" + y +" "+ hh + ":" + ii;
	document.getElementById("date_bungus").value =m + "-" + d + "-" + y +" "+ hh + ":" + ii;
	document.getElementById("date_formasi_new").value =m + "-" + d + "-" + y +" "+ hh + ":" + ii;
  $('#date_formasi_berangkat_list,#date_kekuatan_berangkat_list,#date_bungus_list,#date_satuan_berangkat_list,#date_satuan_berangkat , #date_satuan_sampai , #date_kekuatan_berangkat , #date_kekuatan_sampai , #ket_waktu_situasi_new , #date_bungus, #date_formasi_new').fdatepicker({
		format: 'mm-dd-yyyy hh:ii',
		disableDblClickSelection: true,
		language: 'ind',
		pickTime: true
	});
  // datatable 
  $('#table_symbol_kekuatan tbody,#table_symbol_formasi tbody').on( 'click', 'tr', function (evt) {
    	// console.log("hai");
    	if (evt.target.type !== 'checkbox') {
	      $(':checkbox', this).trigger('click');
          $(this).toggleClass('selected');
	    }
    });
  	$(document).foundation({

      slider: {
        on_change: function(){
          // console.log("hai");
        }
      }
    });
	document.getElementById("exampleCheckboxSwitch").onclick = function(){
        var check = document.getElementById("exampleCheckboxSwitch").checked;
        if(check){
            document.getElementById("satuan_pl").style.display = "block";
        }else{
            document.getElementById("satuan_pl").style.display = "none";
        }
    }

  $( "#view_formasi" ).draggable();
  $("#view_convert").draggable();
  $( "#view_cb" ).draggable();
  $("#menu_timelist").draggable();
  $("#menu_weaponlist").draggable();
});
/***********************************************
 ** Add and remove element
 ** By: Muhamad Farhan Badrussalam
 ***********************************************/
function addElement(parentId, elementTag, elementId, html) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}
function removeElement(elementId,status) {
    // Removes an element from the document
    var element
    if(status == 1){
    	element = docId("rows"+elementId);
    }else if(status == 2){
    	element = docId("rows_pel"+elementId);
    }else if(status == 3){
    	element = docId("rows_ban"+elementId);
    }else if(status == 4){
    	element = docId("rows_bebas"+elementId);
    }else if(status == 5){
    	element = docId("rows_logistik"+elementId);
    	for (var i = arr_logistik_.length - 1; i >= 0; i--) {
    		if(arr_logistik_[i] == elementId){
    			arr_logistik_.splice(i, 1);
    		}
    	}
    }
    element.parentNode.removeChild(element);
    // input_id_passen--;
}


/***********************************************
 ** Variable public
 ** By: Muhamad Farhan Badrussalam
 ***********************************************/
 var status_symbol = 0;
 var input_id_passen = 1;
 var input_id_pelabuhan = 1;
 var input_id_bandara = 1;
 var input_id_bebas = 1;
 var arr_formasi_cek = [];
 var marker_test = "";

 function docId(id){
 	return document.getElementById(id);
 }
function docClass(id){
	return document.getElementByClassName(id);
}
function docName(id){
	return document.getElementByName(id);
}
function docTagName(id){
	return document.getElementsByTagName(id);
}
/***********************************************
 ** fungsi untuk memilih satuan AD/AU/AL
 ** By: Muhamad Farhan Badrussalam
 ***********************************************/
function change_formasi_type(id){
	var pisah = id.split("_");
	docId("image_formasi_new").style.display = "none";
	docId("view_formasi").style.display = "none";
	docId("myTable_new").style.display = "none";
	docId("formasi8_new").style.display = "none";
	docId("icon_tambah_formasi_new").style.display = "none";
	count_formasi = 0;
	cleara_new();
	if(id == 0){

	}else if(pisah[2] == 1){
		count_formasi = 4;
		docId("count_formasi").value = count_formasi;
		docId("myTable_new").style.display = "table";
		docId("icon_tambah_formasi_new").style.display = "block";
		docId("image_formasi_new").style.display = "block";
		docId("image_formasi_new").src = "image/formasi/formasi_belah_ketupat.png";
	}else if(pisah[2] == 2){
		count_formasi = 4;
		docId("count_formasi").value = count_formasi;
		docId("icon_tambah_formasi_new").style.display = "block";
		docId("myTable_new").style.display = "table";
		docId("image_formasi_new").style.display = "block";
		docId("image_formasi_new").src = "image/formasi/formasi_flank_kanan.png";
	}else if(pisah[2] == 3){
		count_formasi = 4;
		docId("count_formasi").value = count_formasi;
		docId("icon_tambah_formasi_new").style.display = "block";
		docId("myTable_new").style.display = "table";
		docId("image_formasi_new").style.display = "block";
		docId("image_formasi_new").src = "image/formasi/formasi_flank_kiri.png";
	}else if(pisah[2] == 4){
		count_formasi = 4;
		docId("count_formasi").value = count_formasi;
		docId("icon_tambah_formasi_new").style.display = "block";
		docId("myTable_new").style.display = "table";
		docId("image_formasi_new").style.display = "block";
		docId("image_formasi_new").src = "image/formasi/formasi_sejajar.png";
	}else if(pisah[2] == 5){
		count_formasi = 4;
		docId("count_formasi").value = count_formasi;
		docId("icon_tambah_formasi_new").style.display = "block";
		docId("myTable_new").style.display = "table";
		docId("image_formasi_new").style.display = "block";
		docId("image_formasi_new").src = "image/formasi/formasi_serial.png";
	}else if(pisah[2] == 6){
		count_formasi = 5;
		docId("count_formasi").value = count_formasi;
		docId("icon_tambah_formasi_new").style.display = "block";
		docId("myTable_new").style.display = "table";
		docId("image_formasi_new").style.display = "block";
		docId("image_formasi_new").src = "image/formasi/formasi_panah.png";
	}else if(pisah[2] == 7){
		count_formasi = 8;
		docId("count_formasi").value = count_formasi;
		docId("icon_tambah_formasi_new").style.display = "block";
		docId("myTable_new").style.display = "table";
		docId("image_formasi_new").style.display = "block";
		docId("image_formasi_new").src = "image/formasi/formasi_kerucut.png";
	}else if(pisah[2] == 8){
		docId("view_formasi").style.display = "block";
		docId("formasi8_new").style.display = "table";
		docId("icon_tambah_formasi_new").style.display = "block";
		create_image_new();
	}
}
function change_bandara(id){
	if(id=="null"){
		docId("prev_bandara_new").innerHTML = "";
		docId("tmp_index_bandara_new").innerHTML = "";
	}else if(id=="Pangkalan Udara"){
		docId("prev_bandara_new").innerHTML = "U";
	}else if(id=="Landasan Udara"){
		docId("prev_bandara_new").innerHTML = "V";
	}else if(id=="Landasan Rumput"){
		docId("prev_bandara_new").innerHTML = "a";
	}else if(id=="Pelandasan Helikopter"){
		docId("prev_bandara_new").innerHTML = "b";
	}
	docId("bandara").innerHTML = "";
	docId("nama_bandara_new").value = "";
	var getdt = "status=data_bandara&filter="+id;
    var hasil_jenbp = get_db(getdt);
    for(var a = 0;a<hasil_jenbp.length;a++){
	      var node_jenb = document.createElement("option");
	      var textnode = document.createTextNode(hasil_jenbp[a].AERODROME);
	      node_jenb.appendChild(textnode);
	      // SEMENTARA

	      node_jenb.setAttribute("value",hasil_jenbp[a].AERODROME);
	      document.getElementById("bandara").appendChild(node_jenb);
	  }

	docId("prev_bandara_new").style.fontFamily = "TAKTIS_AL";
	docId("prev_bandara_new").style.fontSize = docId("bandara_size_new").value+"px";
	docId("prev_bandara_new").style.color = docId("warna_bandara_new").value;
}
function change_pelabuhan(id){
	if(id=="null"){
		docId("prev_pelabuhan_new").innerHTML = "";
		docId("tmp_index_pelabuhan_new").innerHTML = "";
	}else if(id=="Umum"){
		docId("prev_pelabuhan_new").innerHTML = "¡";
	}else if(id=="Lantamal"){
		docId("prev_pelabuhan_new").innerHTML = "ü";
	}else if(id=="Lanal"){
		docId("prev_pelabuhan_new").innerHTML = "ý";
	}
	docId("pelabuhan").innerHTML = "";
	docId("nama_pelabuhan_new").value = "";
	var getdt = "status=data_pel&filter="+id;
    var hasil_jenbp2 = get_db(getdt);
    // console.log(hasil_jenbp2);
    for(var p = 0;p<hasil_jenbp2.length;p++){
      var node_jenp = document.createElement("option");
      var textnode2 = document.createTextNode(hasil_jenbp2[p].nama);
      node_jenp.appendChild(textnode2);
      // SEMENTARA

      node_jenp.setAttribute("value",hasil_jenbp2[p].nama);
      node_jenp.setAttribute("id",hasil_jenbp2[p].id);
      docId("pelabuhan").appendChild(node_jenp);
  	}

	docId("prev_pelabuhan_new").style.fontFamily = "TAKTIS_AL";
	docId("prev_pelabuhan_new").style.fontSize = docId("pelabuhan_size_new").value+"px";
	docId("prev_pelabuhan_new").style.color = docId("warna_pelabuhan_new").value;
}
function change_satuan(id){
    if(id == 0){
        docId("tambah_satuan").style.cursor = "not-allowed";
        status_symbol = 0;
    }else if(id == "satuan_AD"){
        docId("tambah_satuan").style.cursor = "pointer";
        status_symbol = 1;
    }else if(id == "satuan_AL"){
        docId("tambah_satuan").style.cursor = "pointer";
        status_symbol = 2;
    }else if(id == "satuan_AU"){
        docId("tambah_satuan").style.cursor = "pointer";
        status_symbol = 3;
    }
}
function change_kekuatan(id){
	if(id == 0){
        docId("tambah_kekuatan").style.cursor = "not-allowed";
    }else if(id == "kekuatan_AD"){
        docId("tambah_kekuatan").style.cursor = "pointer";
    }else if(id == "kekuatan_AL"){
        docId("tambah_kekuatan").style.cursor = "pointer";
    }else if(id == "kekuatan_AU"){
        docId("tambah_kekuatan").style.cursor = "pointer";
    }
}
function change_kekuatan_list(id){
	if(id == 0){
        docId("tambah_kekuatan_list").style.cursor = "not-allowed";
    }else if(id == "kekuatanlist_AD"){
        docId("tambah_kekuatan_list").style.cursor = "pointer";
    }else if(id == "kekuatanlist_AL"){
        docId("tambah_kekuatan_list").style.cursor = "pointer";
    }else if(id == "kekuatanlist_AU"){
        docId("tambah_kekuatan_list").style.cursor = "pointer";
    }
}
function change_radar(id){
	if(id == 0){
        docId("tambah_radar").style.cursor = "not-allowed";
    }else if(id == "radar_AD"){
        docId("tambah_radar").style.cursor = "pointer";
    }else if(id == "radar_AL"){
        docId("tambah_radar").style.cursor = "pointer";
    }else if(id == "radar_AU"){
        docId("tambah_radar").style.cursor = "pointer";
    }
}
/***********************************************
 ** fungsi untuk memilih symbol pada table
 ** By: Muhamad Farhan Badrussalam
 ***********************************************/
 function tmp_font_func_new(z, a, res,status){
 	if(status == "satuan"){
		return "<tr>"+
			"<td width='20%'>"+z.nama+"</td>"+
			"<td id='ad"+a+"' style='font-size: 30px; font-family: "+z.nama+";'>"+res+"</<td>"+
			"<td>"+z.index+"</<td>"+
			"<td width='37%'>"+z.keterangan+"</<td>"+
			"<td><a onclick='pilih_symbol_satuan("+a+")'>Pilih</a></<td>"+
		   "</tr>";
 	}else if(status == "kekuatan"){
 		return "<tr for='chk_"+a+"'>"+
	 			"<td><input type='checkbox' id='chk_"+a+"' name='check' class='row-select' value='"+a+"'></td>"+
				"<td width='20%' class='nama'>"+z.nama+"</td>"+
				"<td id='ad"+a+"' style='font-size: 30px; font-family: "+z.nama+";'>"+res+"</<td>"+
				"<td>"+z.index+"</<td>"+
				"<td width='37%'>"+z.keterangan+"</<td>"+
				"<td><input type='number' min='0' name='jumlah_kekuatan_"+a+"' id='jumlah_kekuatan_"+a+"' class='number' value='0'></td>"+
				"<td></<td>"+
				"<td hidden='true'>"+a+"</td>"+
			   "</tr>";
 	}else if(status == "kekuatanlist"){
 		return "<tr for='chk_"+a+"'>"+
	 			"<td><input type='checkbox' id='chk_"+a+"' name='check' class='row-select' value='"+a+"'></td>"+
				"<td width='20%' class='nama'>"+z.nama+"</td>"+
				"<td id='ad"+a+"' style='font-size: 30px; font-family: "+z.nama+";'>"+res+"</<td>"+
				"<td>"+z.index+"</<td>"+
				"<td width='37%'>"+z.keterangan+"</<td>"+
				"<td><input type='number' min='0' name='jumlah_kekuatan_"+a+"' id='jumlah_kekuatan_"+a+"' class='number' value='0'></td>"+
				"<td></<td>"+
				"<td hidden='true'>"+a+"</td>"+
			   "</tr>";
 	}else if(status == "manuver"){
 		return "<tr>"+
			"<td width='20%'>"+z.nama+"</td>"+
			"<td id='ad"+a+"' style='font-size: 30px; font-family: "+z.nama+";'>"+res+"</td>"+
			"<td>"+z.index+"</td>"+
			"<td width='37%'>"+z.keterangan+"</td>"+
			"<td><a onclick='pilih_symbol_manuver("+a+")'>Pilih</a></td>"+
		   "</tr>";
 	}else if(status == "radar"){
 		return "<tr>"+
			"<td width='20%'>"+z.nama+"</td>"+
			"<td id='ad"+a+"' style='font-size: 30px; font-family: "+z.nama+";'>"+res+"</td>"+
			"<td>"+z.index+"</td>"+
			"<td width='37%'>"+z.keterangan+"</td>"+
			"<td><a onclick='pilih_symbol_radar("+a+")'>Pilih</a></td>"+
		   "</tr>";
 	}else if(status == "formasi"){
 		return "<tr>"+
 			"<td><input type='checkbox' id='formasi_chck_"+a+"' name='check_formasi' class='row-select' value='"+a+"'></td>"+
			"<td width='20%'>"+z.nama+"</td>"+
			"<td id='ad"+a+"' style='font-size: 30px; font-family: "+z.nama+";'>"+res+"</td>"+
			"<td>"+z.index+"</td>"+
			"<td width='37%'>"+z.keterangan+"</td>"+
			"<td hidden='true'>"+a+"</td>"+
		   "</tr>";
 	}else if(status == "formasilist"){
 		return "<tr id='formasi_tr_"+a+"'>"+
 			"<td><input type='checkbox' id='formasi_chck_"+a+"' name='check_formasi' class='row-select' value='"+a+"'></td>"+
			"<td width='20%'>"+z.nama+"</td>"+
			"<td id='ad"+a+"' style='font-size: 30px; font-family: "+z.nama+";'>"+res+"</td>"+
			"<td>"+z.index+"</td>"+
			"<td width='37%'>"+z.keterangan+"</td>"+
			"<td hidden='true'>"+a+"</td>"+
		   "</tr>";
 	}
}
var table_kekuatan="";
var table_formasi = "";
function create_symbol(jenis_user,menu){
		var isi_table = "";
		var pisah = jenis_user.split("_");
		var data_selected_manuever = ['6', 'e', 'f', 'g', 'h', 'i', 'j', 's', 't', '¯', '°'];
	
		for (var i = 0; i < data_font.length; i++) {
				var res = String.fromCharCode(Number(data_font[i].index));
			if(pisah[1] == "AD" && data_font[i].grup == 1){
				var font = "'"+res+"'";
				var tmp = tmp_font_func_new(data_font[i], i, res,pisah[0]);
				isi_table = isi_table + tmp;
			}else if(pisah[1] == "AL" && data_font[i].grup == 2){
				var font = "'"+res+"'";
				var tmp = tmp_font_func_new(data_font[i], i, res,pisah[0]);
				isi_table = isi_table + tmp;
			}else if(pisah[1] == "AU" && data_font[i].grup == 3){
				var font = "'"+res+"'";
				var tmp = tmp_font_func_new(data_font[i], i, res,pisah[0]);
				isi_table = isi_table + tmp;
			}else if(pisah[1] == "manuver" && data_font[i].grup == 3 && data_selected_manuever.includes(res)==true){
				var font = "'"+res+"'";
				var tmp = tmp_font_func_new(data_font[i], i, res,pisah[0]);
				isi_table = isi_table + tmp;
			}else if(pisah[1] == "formasi" && data_font[i].grup == 2){
				var font = "'"+res+"'";
				var tmp = tmp_font_func_new(data_font[i], i, res,pisah[0]);
				isi_table = isi_table + tmp;
				// console.log(isi_table);
			}
		}
	$('#table_symbol_satuan').DataTable().destroy();
	$('#table_symbol_kekuatan').DataTable().destroy();
	$('#table_symbol_obstacle').DataTable().destroy();
	$('#table_symbol_manuver').datatable().destroy();
	$('#table_symbol_formasi').DataTable().destroy();
	if(menu=="satuan"){
		docId("satuan_table").innerHTML = "";

		docId("satuan_table").innerHTML = isi_table;

		$('#table_symbol_satuan').DataTable({
	        "dom": '<"top"flp>rt<"bottom"p><"clear">'
	    });
	}else if(menu=="formasi"){
		docId("formasi_table").innerHTML = "";

		docId("formasi_table").innerHTML = isi_table;

		table_formasi = $('#table_symbol_formasi').DataTable({
	        "dom": '<"top"flp>rt<"bottom"p><"clear">'
	    });
	}else if(menu == "formasilist"){
		docId("formasi_table").innerHTML = "";

		docId("formasi_table").innerHTML = isi_table;

		table_formasi = $('#table_symbol_formasi').DataTable({
	        "dom": '<"top"flp>rt<"bottom"p><"clear">'
	    });
	}else if(menu=="kekuatan"){
		docId("kekuatan_table").innerHTML = "";

		docId("kekuatan_table").innerHTML = isi_table;

		table_kekuatan = $('#table_symbol_kekuatan').DataTable({
	        "dom": '<"top"flp>rt<"bottom"p><"clear">'
	    });
	}else if(menu=="kekuatan_list"){
		docId("kekuatan_table").innerHTML = "";

		docId("kekuatan_table").innerHTML = isi_table;

		table_kekuatan = $('#table_symbol_kekuatan').DataTable({
	        "dom": '<"top"flp>rt<"bottom"p><"clear">'
	    });
	}else if(menu=="obstacle"){
		docId("obstacle_table").innerHTML = "";
		var data_obs = ['B','C','D','E','F','G','H','I','J','K','L','M','N'];
      	var string_obstacle = "";
	      for(var a = 0;a<data_obs.length;a++){
	      	var b = a+1;
	    	var tmp_string_obs = "<tr>"+
	    						  "<td style='text-align: center;'>"+b+"</td>"+
					              "<td style='font-family: TandaTanda;font-size: 40px; text-align: center;'>"+data_obs[a]+"</td>"+
	                              "<td style='text-align: center;'><a onclick='pilih_symbol_obs("+a+")'>Pilih</a></td>"+
	                             "</tr>";
	        string_obstacle = string_obstacle+tmp_string_obs;
	      }
	    docId("obstacle_table").innerHTML = string_obstacle;

	    $('#table_symbol_obstacle').DataTable({
	        "dom": '<"top"flp>rt<"bottom"p><"clear">'
	    });
	}else if(menu=="manuver"){
		docId("manuver_table").innerHTML = "";

		docId("manuver_table").innerHTML = isi_table;

		$('#table_symbol_manuver').DataTable({
	        "dom": '<"top"flp>rt<"bottom"p><"clear">'
	    });
	}else if(menu == "radar"){
		docId("radar_table").innerHTML = "";
		var isi_table = "";
		for (var a = 0; a < data_font.length; a++) {
			if(data_font[a].keterangan!=null){
				var tmp_string_keterangan_gab = data_font[a].keterangan.toLowerCase();
				var tmp_bool_keterangan_gab = tmp_string_keterangan_gab.indexOf("radar");
				if(tmp_bool_keterangan_gab >= 0){
					if(data_font[a].grup == 1 && pisah[1] == "AD"){
						var res = String.fromCharCode(Number(data_font[a].index));
						var font = "'"+res+"'";
						var tmp_font_ad = tmp_font_func_new(data_font[a], a, res,pisah[0]);
						isi_table = isi_table + tmp_font_ad;
					}else if(data_font[a].grup == 2 && pisah[1] == "AL"){
						var res = String.fromCharCode(Number(data_font[a].index));
						var tmp_font_al = tmp_font_func_new(data_font[a], a, res,pisah[0]);
						isi_table = isi_table + tmp_font_al;
					}else if(data_font[a].grup == 3 && pisah[1] == "AU"){
						var res = String.fromCharCode(Number(data_font[a].index));
						var tmp_font_au = tmp_font_func_new(data_font[a], a, res,pisah[0]);
						isi_table = isi_table + tmp_font_au;
					}else if(data_font[a].grup == 4 && pisah[1] == "gabungan"){
						var res = String.fromCharCode(Number(data_font[a].index));
						var tmp_font_gab = tmp_font_func_new(data_font[a], a, res,pisah[0]);
						isi_table = isi_table + tmp_font_gab;
					}
				}
			}
		}
		docId("radar_table").innerHTML = isi_table;
		$('#table_symbol_radar').DataTable({
	        "dom": '<"top"flp>rt<"bottom"p><"clear">'
	    });
	}
	document.getElementById('map').style.zIndex = "1";
}
 function show_table_symbol(menu){
 	docId("table_symbol_satuan").style.display="none";
 	docId("table_symbol_kekuatan").style.display="none";
 	
 	docId("kekuatan_simpan").style.display="none";
 	docId("formasi_simpan").style.display="none";
 	docId("formasilist_simpan").style.display = "none";
 	docId("kekuatanlist_simpan").style.display = "none";

 	docId("table_symbol_obstacle").style.display="none";
 	docId("table_symbol_manuver").style.display="none";
 	docId("table_symbol_formasi").style.display="none";
 	if(menu == "satuan"){
	 	var status = docId("jenis_satuan_new").value;
	 	if(status==0){

	 	}else{
	 		window.location.href="#table_symbol";
	 		create_symbol(status,menu);
	 		docId("table_symbol_satuan").style.display="table";
	 	}
 	}else if(menu == "kekuatan"){
 		var status = docId("jenis_kekuatan_new").value;
 		if(status==0){

 		}else{
 			window.location.href="#table_symbol";
 			create_symbol(status,menu);
 			docId("kekuatan_simpan").style.display="block";
 			docId("table_symbol_kekuatan").style.display="table";
 		}
 	}else if(menu == "kekuatan_list"){
 		var status = docId("jenis_kekuatan_list").value;
 		if(status==0){

 		}else{
 			var index = docId("index_kekuatan").value;
 			window.location.href="#table_symbol";
 			create_symbol(status,menu);
 			for (var i = 0; i < kekuatan_font.length; i++) {
 				var font_ = kekuatan_font[i].font.id-1;
 				if(docId("chk_"+font_)){
	 				docId("jumlah_kekuatan_"+font_).click();
	 				docId("jumlah_kekuatan_"+font_).value = kekuatan_font[i].jumlah;
 				}
 			}
 			docId("kekuatanlist_simpan").style.display="block";
 			docId("table_symbol_kekuatan").style.display="table";
 		}
 	}else if(menu == "obstacle"){
 		create_symbol("obstacle_tanda",menu);
 		window.location.href="#table_symbol";
 		docId("table_symbol_obstacle").style.display="table";
 	}else if(menu == "manuver"){
 		create_symbol("manuver_manuver",menu);
 		window.location.href="#table_symbol";
 		docId("table_symbol_manuver").style.display="table";
 	}else if(menu == "radar"){
 		var status = docId("jenis_radar_new").value;
	 	if(status==0){

	 	}else{
	 		create_symbol(status,menu);
	 		window.location.href="#table_symbol";
	 		docId("table_symbol_radar").style.display="table";
	 	}
 	}else if(menu == "formasi"){
 		create_symbol("formasi_formasi",menu);
 		window.location.href="#table_symbol";
 		docId("table_symbol_formasi").style.display="table";
 		docId("formasi_simpan").style.display = "block";
 	}else if(menu == "formasilist"){
 		create_symbol("formasilist_formasi",menu);
 		window.location.href="#table_symbol";
 		docId("table_symbol_formasi").style.display="table";
 		var index = docId("index_formasi").value;
 		docId("formasilist_simpan").style.display = "block";

 		for (var i = 0; i < arr_formasi_cek.length; i++) {
 			var index = arr_formasi_cek[i].id-1;
 			if(docId("formasi_tr_"+index)){
 				docId("formasi_tr_"+index).click();
 			}
 		}
 	}
 	// console.log(status);
 }
 function kembali(){
 	docId('map').style.zIndex = "2";
 	window.location.href="#";
 }
 function pilih_symbol_obs(index){
 	docId("prev_obs_new").innerHTML = data_obs[index];
	docId("prev_obs_new").style.fontFamily = "TandaTanda";
	docId("prev_obs_new").style.fontSize = docId("obs_size_new").value+"px";
	docId("tmp_index_obs_new").innerHTML = index;

	window.location.href="#";
 }
 function pilih_symbol_manuver(index){
 	// console.log(data_font[index]);
 	docId("prev_manuver_new").innerHTML = String.fromCharCode(Number(data_font[index].index));
	docId("prev_manuver_new").style.fontFamily = data_font[index].nama;
	docId("prev_manuver_new").style.fontSize = docId("manuver_size_new").value+"px";
	docId("tmp_index_manuver_new").innerHTML = index;
	// document.getElementById("tmp_index_sat").innerHTML = index;

	window.location.href = "#";
 }
 function pilih_symbol_radar(index){
 	docId("prev_radar_new").innerHTML = String.fromCharCode(Number(data_font[index].index));
	docId("prev_radar_new").style.fontFamily = data_font[index].nama;
	docId("prev_radar_new").style.fontSize = docId("radar_size_new").value+"px";
	docId("tmp_index_radar_new").innerHTML = index;
	// document.getElementById("tmp_index_sat").innerHTML = index;

	window.location.href = "#";
 }
 function pilih_symbol_satuan(index){
 	console.log(data_font[index]);
 	docId("prev_satuan_new").innerHTML = String.fromCharCode(Number(data_font[index].index));
	docId("prev_satuan_new").style.fontFamily = data_font[index].nama;
	docId("tmp_index_sat_new").innerHTML = index;
	// document.getElementById("tmp_index_sat").innerHTML = index;

	window.location.href = "#";

 }
 var checkedValue = []; 
 function simpan_kekuatan_data(){
 	var table = docId("table_symbol_kekuatan");
 	var form = table_kekuatan.$("input").serialize().split("&");
	for(var i=0; table_kekuatan.rows('.selected').data()[i]; ++i){
	      var data = table_kekuatan.rows('.selected').data()[i];
	      // console.log(data);
	      var index = data[7];
	      for(var a=0; a<form.length; a++){
	      	var pecah_form = form[a].split("=");
	      	if(pecah_form[0]=="jumlah_kekuatan_"+index){
	      		checkedValue.push({font: data_font[index],jumlah: pecah_form[1]});
	      	}
	      }
	}
	var isi_table = "";
	for(var i = 0; i<checkedValue.length; i++){
		var res = String.fromCharCode(Number(checkedValue[i].font.index));
		var tmp = "<tr>"+
					"<td style='font-size: 30px; font-family: "+checkedValue[i].font.nama+";'>"+res+"</td>"+
					"<td>"+checkedValue[i].jumlah+"</td>"+
					"<td>"+checkedValue[i].font.keterangan+"</td>"+
					"<td><a onclick='removeitem_kekuatan(this)'>Hapus</a></td>"
				  "</tr>";
		isi_table = isi_table+tmp;
	}
	docId("kekuatan_pilih").innerHTML = isi_table;
	docId('map').style.zIndex = "3";
	window.location.href="#";
 }
 var kekuatan_font = [];
 function simpan_kekuatan_list(){
 	// console.log(table_kekuatan);
 	var table = docId("table_symbol_kekuatan");
 	var form = table_kekuatan.$("input").serialize().split("&");

 	var index = docId("index_kekuatan").value;
 	
 	var arr_ = [];

	for(var i=0; table_kekuatan.rows('.selected').data()[i]; ++i){
	      var data = table_kekuatan.rows('.selected').data()[i];
	      var index = data[7];
	      for(var a=0; a<form.length; a++){
	      	var pecah_form = form[a].split("=");
	      	if(pecah_form[0]=="jumlah_kekuatan_"+index){
	      		arr_.push({font: data_font[index],jumlah: pecah_form[1]});
	      	}
	      }
	}
	$.each(arr_, function(i, el){
		var uniq = [];
		var status = 0;
		for (var a = 0; a < kekuatan_font.length; a++) {
			if(el.font.id === kekuatan_font[a].font.id){
				status = 1;
				uniq.push(status);
				break;
			}else{
				status = 0;
				uniq.push(status);
			}
		}
		var cek = 0;
		for (var i = 0; i < uniq.length; i++) {
			if(uniq[i] == 1){
				cek = 1;
				break;
			}else{
				cek = 0;
			}
		}
		if(cek == 0){
			kekuatan_font.push(el);
		}
	});
	var isi_table = "";
	for(var i = 0; i<kekuatan_font.length; i++){
		var res = String.fromCharCode(Number(kekuatan_font[i].font.index));
		var tmp = "<tr>"+
					"<td style='font-size: 30px; font-family: "+kekuatan_font[i].font.nama+";'>"+res+"</td>"+
					"<td>"+kekuatan_font[i].jumlah+"</td>"+
					"<td>"+kekuatan_font[i].font.keterangan+"</td>"+
					"<td><a onclick='removeitem_kekuatanList(this)'>Hapus</a></td>"
				  "</tr>";
		isi_table = isi_table+tmp;
	}
	docId("kekuatan_pilih_list").innerHTML = isi_table;
	docId('map').style.zIndex = "3";
	window.location.href="#";
 }
 function simpan_plot_formasi(){

 }
 function removeitem_kekuatan(r) {
  var i = r.parentNode.parentNode.rowIndex;
  docId("kekuatan_pilih").deleteRow(i-1);
  checkedValue.splice(i-1, 1);
  // console.log(checkedValue);
}
function removeitem_kekuatanList(r) {
  var i = r.parentNode.parentNode.rowIndex;
  docId("kekuatan_pilih_list").deleteRow(i-1);
  kekuatan_font.splice(i-1, 1);
  // console.log(checkedValue);
}
function simpan_formasi_list(){
	jumlah_formasi = 0;
	var arr_ = [];
	for(var i=0; table_formasi.rows('.selected').data()[i]; ++i){
		var data = table_formasi.rows('.selected').data()[i];
		arr_.push({id : data[5]});
	}

	$.each(arr_, function(i, el){
		var uniq = [];
		var status = 0;
		for (var a = 0; a < arr_formasi_cek.length; a++) {
			if(el.id === arr_formasi_cek[a].id){
				status = 1;
				uniq.push(status);
				break;
			}else{
				status = 0;
				uniq.push(status);
			}
		}
		var cek = 0;
		for (var i = 0; i < uniq.length; i++) {
			if(uniq[i] == 1){
				cek = 1;
				break;
			}else{
				cek = 0;
			}
		}
		if(cek == 0){
			arr_formasi_cek.push(el);
		}
	});
	console.log(arr_formasi_cek);
}
function simpan_formasi_data(){
	arr_formasi_cek =[];
	jumlah_formasi = 0;
	for(var i=0; table_formasi.rows('.selected').data()[i]; ++i){
		var data = table_formasi.rows('.selected').data()[i];
		arr_formasi_cek.push({id : data[5]});
	}

	var count = docId("count_formasi").value;
	var jenis_formasi = docId("jenis_formasi_new").value.split("_");

	if(arr_formasi_cek.length <= count || jenis_formasi[2] == "8"){
		var table_formasi_html = "";
		for(var a = 0;a<arr_formasi_cek.length;a++){
			var b = a+1;
			var font_data = data_font[arr_formasi_cek[a].id];
			var res = String.fromCharCode(Number(font_data.index));
			if(jenis_formasi[2] != "8"){
				var tmp = "<tr>"+
							"<td>"+b+"</td>"+
							"<td style='font-size: 30px; font-family: "+font_data.nama+";'>"+res+"</td>"+
							"<td>"+font_data.keterangan+"</td>"+
							"<td></td>"+
						  "</tr>";
			}else{
				var tmp = "<tr>"+
							"<td>"+b+"</td>"+
							"<td style='font-size: 30px; font-family: "+font_data.nama+";'>"+res+"</td>"+
							"<td>"+font_data.keterangan+"</td>"+
							"<td><input style='width : 70px !important;' min='0' max='4' oninput='formasi_add(0)' type='number' id='jarak_formasi_"+a+"' value='0'></td>"+
							"<td><input style='width : 70px !important;' min='0' max='360' oninput='formasi_add(0)' type='number' id='arah_formasi_"+a+"' value='0'></td>"+
							"<td></td>"+
						  "</tr>";
			}
			table_formasi_html = table_formasi_html+tmp;

			jumlah_formasi++;
			// console.log();
		}
		if(jenis_formasi[2] == "8"){
			docId("bodyTable_formasi8").innerHTML = table_formasi_html;
			formasi_add(0);
		}else{
			docId("bodyTable_formasi").innerHTML = table_formasi_html;
		}
		// docId('map').style.zIndex = "";
		window.location.href="#";
	}else{
		alert("Maaf sudah melebihi dari "+count);
	}
}
/***********************************************
 ** fungsi untuk auto change view symbol di satuan
 ** By: Muhamad Farhan Badrussalam
 ***********************************************/
function event_view(menu){
	if(menu == "satuan"){
		var size = docId("symbol_size_new").value;
		var color = docId("warna_satuan_new").value;

		docId("prev_satuan_new").style.fontSize = Number(size)+"px";
		docId("prev_satuan_new").style.color = color;
	}else if(menu == "obstacle"){
		var size = docId("obs_size_new").value;
		var color = docId("warna_obs_new").value;

		docId("prev_obs_new").style.fontSize = Number(size)+"px";
		docId("prev_obs_new").style.color = color;
	}else if(menu == "manuver"){
		var size = docId("manuver_size_new").value;
		var color = docId("warna_manuver_new").value;

		docId("prev_manuver_new").style.fontSize = Number(size)+"px";
		docId("prev_manuver_new").style.color = color;

	}else if(menu == "bungus"){
		var size = docId("bungus_size_new").value;

		docId("prev_bungus").style.width = Number(size)+"px";
		docId("prev_bungus").style.height = Number(size)+"px";
	}else if(menu == "passen"){
		var size = docId("passen_size_new").value;
		var color = docId("warna_passen_new").value;

		docId("prev_passen").style.width = Number(size)+"px";
		docId("prev_passen").style.height = Number(size)+"px";
		if(color == "red"){
			docId("prev_passen").src = "image/plotting/point_red.png";
		}else if(color == "blue"){
			docId("prev_passen").src = "image/plotting/point_blue.png";
		}
	}else if(menu == "radar"){
		var size = docId("radar_size_new").value;
		var color = docId("warna_radar_new").value;

		docId("prev_radar_new").style.fontSize = Number(size)+"px";
		docId("prev_radar_new").style.color = color;
	}else if(menu == "logistik_p"){
		var color = docId("warna_pelabuhan_new").value;
		var size = docId("pelabuhan_size_new").value;

		docId("prev_pelabuhan_new").style.color = color;
		docId("prev_pelabuhan_new").style.fontSize = Number(size)+"px";
	}else if(menu == "logistik_ba"){
		var color = docId("warna_bandara_new").value;
		var size = docId("bandara_size_new").value;

		docId("prev_bandara_new").style.color = color;
		docId("prev_bandara_new").style.fontSize = Number(size)+"px";
	}else if(menu == "view_situasi"){
		var color = docId("warna_situasi_view").value;
		var size = docId("situasi_size_view").value;

		docId("view_situasi_image").style.width = Number(size)+"px";
		docId("view_situasi_image").style.height = Number(size)+"px";
		if(color == "red"){
			docId("view_situasi_image").src = "image/plotting/warning_red.png";
		}else if(color == "blue"){
			docId("view_situasi_image").src = "image/plotting/warning_blue.png";
		}
	}else if(menu == "text"){
		var angel = docId("angle_plot_text_new").value;
		var size = docId("size_plot_text_new").value;
		var weight = docId("weight_plot_text_new").value;
		var color = docId("warna_text_new").value;

		docId("prev_text_new").style.fontWeight = weight;
		docId("prev_text_new").style.transform = "rotate("+Number(angel)+"deg)";
		docId("prev_text_new").style.color = color;
		docId("prev_text_new").style.fontSize = Number(size)+"px";
	}else if(menu == "view_satuan"){
		var size = docId("satuan_size_list").value;
		var warna = docId("warna_satuan_list").value;

		docId("view_satuan_font").style.fontSize = Number(size)+"px";
		docId("view_satuan_font").style.color = warna;
	}else if(menu == "view_bungus"){
		var size = docId("bungus_size_list").value;

		docId("view_bungus_image").style.height = size+"px";
		docId("view_bungus_image").style.width = size+"px";
	}else if(menu == "view_pasukan"){
		var size = docId("pasukan_size_list").value;
		var warna = docId("warna_pasukan_list").value;
		var icon = "";
		if(warna == "red"){
			icon = "point_red.png";
		}else{
			icon = "point_blue.png";
		}

		docId("view_pasukan_image").style.width = size+"px";
		docId("view_pasukan_image").style.height = size+"px";
		docId("view_pasukan_image").src = "image/plotting/"+icon;
	}else if(menu == "view_manuver"){
		var size = docId("manuver_size_list").value;
		var warna = docId("warna_manuver_list").value;
		docId("view_manuver_font").style.fontSize = size+"px";
		docId("view_manuver_font").style.color = warna;
	}else if(menu == "view_text"){
		var size = docId("text_size_list").value;
		var angel = docId("text_angel_list").value;
		var weight = docId("text_weight_list").value;
		var warna = docId("warna_text_list").value;
		// console.log(size);
		docId("view_text_font").style.fontSize = size+"px";
		docId("view_text_font").style.fontWeight = weight;
		docId("view_text_font").style.color = warna;
		docId("view_text_font").style.transform = "rotate("+Number(angel)+"deg)";
	}else if(menu == "view_obstacle"){
		var size = docId("obstacle_size_list").value;
		var warna = docId("warna_obstacle_list").value;

		docId("view_obstacle_font").style.fontSize = size+"px";
		docId("view_obstacle_font").style.color = warna;
	}else if(menu == "view_logistik"){
		var size = docId("logistik_size_list").value;
		var warna = docId("warna_logistik_list").value;

		docId("view_logistik_font").style.fontSize = size+"px";
		docId("view_logistik_font").style.color = warna;

		// console.log("hai baka");
	}else if(menu == "view_radar"){
		var size = docId("radar_size_list").value;
		var warna = docId("warna_radar_list").value;

		docId("view_radar_font").style.fontSize = size+"px";
		docId("view_radar_font").style.color = warna;
	}else if(menu == "view_kekuatan"){
		var size = docId("kekuatan_size_list").value;

		docId("view_kekuatan_image").style.width = size+"px";
		docId("view_kekuatan_image").style.height = size+"px";
	}else if(menu == "view_formasi"){
		var size = docId("formasi_size_list").value;
		var warna = docId("warna_formasi_list").value;
		var icon = "";
		if(warna == "red"){
    		icon = "image/formasi/arrow_red.png";
    	}else{
    		icon="image/formasi/arrow_blue.png";
    	}

		docId("view_formasi_image").src = icon;
		docId("view_formasi_image").style.width = size+"px";
		docId("view_formasi_image").style.height = size+"px";
	}
}

/***********************************************
 ** fungsi untuk merubah menu
 ** By: Muhamad Farhan Badrussalam
 ***********************************************/
 function open_menu(jenis){
 	docId("satuan_").style.display = "none";
 	docId("default_menu").style.display = "none";
 	docId("kekuatan_menu").style.display = "none";
 	docId("situasi_menu").style.display = "none";
 	docId("obs_menu").style.display = "none";
 	docId("manuver_menu").style.display = "none";
 	docId("bungus_menu").style.display = "none";
 	docId("pasukan_menu").style.display = "none";
 	docId("radar_menu").style.display = "none";
 	docId("logistik_pelabuhan_menu").style.display = "none";
 	docId("logistik_bandara_menu").style.display = "none";
 	docId("logistik_bebas_menu").style.display = "none";
 	docId("formasi_menu").style.display = "none";
 	docId("polyline_menu").style.display = "none";
 	docId("polygon_menu").style.display = "none";
 	docId("polygon_not_arrow").style.display = "none";
 	docId("polygon_arrow").style.display = "none";
 	docId("polygon_arrow_lengkung_bawah").style.display = "none";
 	docId("polygon_arrow_lengkung_atas").style.display = "none";
 	docId("polygon_arrow_manuver_atas").style.display = "none";
 	docId("polygon_arrow_manuver_bawah").style.display = "none";
 	docId("text_menu").style.display = "none";

 	cek_menu = 0;
 	click_menu();
 	docId("tab1").click();

 	if(jenis == "satuan"){
 		docId("satuan_").style.display = "block";
 	}else if(jenis == "kekuatan"){
 		docId("kekuatan_menu").style.display = "block";
 	}else if(jenis == "situasi"){
 		docId("situasi_menu").style.display = "block";
 	}else if(jenis == "obstacle"){
 		docId("obs_menu").style.display = "block";
 	}else if(jenis == "manuver"){
 		docId("manuver_menu").style.display = "block";
 	}else if(jenis == "bungus"){
 		docId("bungus_menu").style.display = "block";
 	}else if(jenis == "passen"){
 		docId("pasukan_menu").style.display = "block";
 	}else if(jenis == "radar"){
 		docId("radar_menu").style.display = "block";
 	}else if(jenis == "logistik_pelabuhan"){
 		docId("logistik_pelabuhan_menu").style.display = "block";
 	}else if(jenis == "logistik_bandara"){
 		docId("logistik_bandara_menu").style.display = "block";
 	}else if(jenis == "logistik_bebas"){
 		docId("logistik_bebas_menu").style.display = "block";
 	}else if(jenis == "formasi"){
 		docId("formasi_menu").style.display = "block";
 	}else if(jenis == "polyline"){
 		docId("polyline_menu").style.display = "block";
 	}else if(jenis == "polygon"){
 		docId("polygon_menu").style.display = "block";
 		docId("polygon_not_arrow").style.display = "block";
 	}else if(jenis == "arrow_panah"){
 		docId("polygon_menu").style.display = "block";
 		docId("polygon_arrow").style.display = "block";
 	}else if(jenis == "arrow_lengkung_bawah"){
 		docId("polygon_menu").style.display = "block";
 		docId("polygon_arrow_lengkung_bawah").style.display = "block";
 	}else if(jenis == "arrow_lengkung_atas"){
 		docId("polygon_menu").style.display = "block";
 		docId('polygon_arrow_lengkung_atas').style.display = "block";
 	}else if(jenis == "arrow_manuver_atas"){
 		docId("polygon_menu").style.display = "block";
 		docId("polygon_arrow_manuver_atas").style.display = "block";
 	}else if(jenis == "arrow_manuver_bawah"){
 		docId("polygon_menu").style.display = "block";
 		docId("polygon_arrow_manuver_bawah").style.display = "block";
 	}else if(jenis == "text"){
 		docId("text_menu").style.display = "block";
 	}
 }
/***********************************************
 ** fungsi untuk menu situasi
 ** By: Muhamad Farhan Badrussalam
 ***********************************************/

 function ket_waktu(){
 	if(docId("time_new").value == "now"){
 		docId("f_tgl_new").style.display = "none";
 	}else{
 		docId("f_tgl_new").style.display = "block";
 	}
 }

 /***********************************************
 ** fungsi untuk menu pasukan sendiri
 ** By: Muhamad Farhan Badrussalam
 ***********************************************/

 function addRowPassen(){
 	input_id_passen++;
 	var html = '<input type="text" style="width: 200px;float: left;" name="pasukan_'+input_id_passen+'" id="pasukan_'+input_id_passen+'" placeholder="pasukan '+input_id_passen+'"  /> ' +
               '<a style="float: left; margin-left: 5px; color: black;" onclick="javascript:removeElement(' + input_id_passen + ',1); return false;">Remove</a>';
    addElement('daftar_pasukan', 'p', 'rows' + input_id_passen, html);
    arr_passen.push(input_id_passen);
 }
 function addRowPelabuhan(){
 	input_id_pelabuhan++;
 	var html = '<input type="text" name="pelabuhan_nama_'+input_id_pelabuhan+'" id="pelabuhan_nama_'+input_id_pelabuhan+'" style="width: 160px;float: left;" placeholder="Nama">'+
 			   '<input type="text" name="pelabuhan_nilai_'+input_id_pelabuhan+'" id="pelabuhan_nilai_'+input_id_pelabuhan+'" style="width: 160px;float: left;" placeholder="Nilai">'+
 			   '<a style="float: left; margin-left: 5px; color: black;" onclick="javascript:removeElement(' + input_id_pelabuhan + ',2); return false;">Remove</a>';
 	addElement('daftar_pelabuhan', 'p', 'rows_pel' + input_id_pelabuhan, html);
 	arr_ind.push(input_id_pelabuhan);
 }
 var input_logistik_id = 0;
 var arr_logistik_ = [];
 function addRowLogistik_edit(nama,nilai){
 	input_logistik_id++;
 	var html = '<input type="text" value="'+nama+'" name="logistik_nama_'+input_logistik_id+'" id="logistik_nama_'+input_logistik_id+'" style="width: 80px;float: left;" placeholder="Nama">'+
 			   '<input type="text" value="'+nilai+'" name="logistik_nilai_'+input_logistik_id+'" id="logistik_nilai_'+input_logistik_id+'" style="width: 80px;float: left;" placeholder="Nilai">'+
 			   '<a style="margin-left: 5px; color: black;" onclick="javascript:removeElement(' + input_logistik_id + ',5); return false;">Remove</a>';
 	addElement('daftar_logistik', 'p', 'rows_logistik' + input_logistik_id, html);
 	arr_logistik_.push(input_logistik_id);
 }
 function addRowBandara(){
 	input_id_bandara++;
 	var html = '<input type="text" name="bandara_nama_'+input_id_bandara+'" id="bandara_nama_'+input_id_bandara+'" style="width: 160px;float: left;" placeholder="Nama">'+
 			   '<input type="text" name="bandara_nilai_'+input_id_bandara+'" id="bandara_nilai_'+input_id_bandara+'" style="width: 160px;float: left;" placeholder="Nilai">'+
 			   '<a style="float: left; margin-left: 5px; color: black;" onclick="javascript:removeElement(' + input_id_bandara + ',3); return false;">Remove</a>';
 	addElement('daftar_bandara', 'p', 'rows_ban' + input_id_bandara, html);
 	arr_band.push(input_id_bandara);
 }
 function addRowBebas(){
 	input_id_bebas++;
 	var html = '<input type="text" name="bebas_nama_'+input_id_bebas+'" id="bebas_nama_'+input_id_bebas+'" style="width: 160px;float: left;" placeholder="Nama">'+
 			   '<input type="text" name="bebas_nilai_'+input_id_bebas+'" id="bebas_nilai_'+input_id_bebas+'" style="width: 160px;float: left;" placeholder="Nilai">'+
 			   '<a style="float: left; margin-left: 5px; color: black;" onclick="javascript:removeElement(' + input_id_bebas + ',4); return false;">Remove</a>';
 	addElement('daftar_bebas', 'p', 'rows_bebas' + input_id_bebas, html);
 	arr_beba.push(input_id_bebas);
 }
 /***********************************************
 ** fungsi untuk menu Formasi
 ** By: Muhamad Farhan Badrussalam
 ***********************************************/
 function create_image_new(){
  var w = document.getElementById('tampilan_formasi_new').offsetWidth/2;
  var h = document.getElementById('tampilan_formasi_new').offsetHeight/2;
  //document.getElementById("cret_image").style.display = "none";
  var canvas = document.getElementById("tampilan_formasi_new");
  context = canvas.getContext("2d");

  // Pembuatan Lingkaran
    context.strokeStyle = "blue";
    // Lingkaran 4NM
    context.beginPath(); // mulai menggmabar
    context.moveTo(w, h); // titik awal
    for(a=0; a<360; a++){
        var tmpx = w + (160 * Math.cos( a * Math.PI/180));
      var tmpy = h + (160 * Math.sin( a * Math.PI/180));
      context.lineTo(tmpx, tmpy); // titik ke-2
        if(a==269){
          context.font = "bold 12px arial";
          context.fillText(" 4NM", tmpx, tmpy);
        }
    }

    context.stroke();

    // Lingkaran 3NM
    context.beginPath(); // mulai menggmabar
    context.moveTo(w, h); // titik awal
    for(a=0; a<360; a++){
        var tmpx = w + (120 * Math.cos( a * Math.PI/180));
      var tmpy = h + (120 * Math.sin( a * Math.PI/180));
      context.lineTo(tmpx, tmpy); // titik ke-2
        if(a==179){
          context.font = "bold 12px arial";
          context.fillText(" 3NM", tmpx, tmpy);
        }
    }
    context.stroke();

    // Lingkaran 2NM
    context.beginPath(); // mulai menggmabar
    context.moveTo(w, h); // titik awal
    for(a=0; a<360; a++){
        var tmpx = w + (80 * Math.cos( a * Math.PI/180));
      var tmpy = h + (80 * Math.sin( a * Math.PI/180));
      context.lineTo(tmpx, tmpy); // titik ke-2
        if(a==89){
          context.font = "bold 12px arial";
          context.fillText(" 2NM", tmpx, tmpy);
        }
    }
    context.stroke();

    // Lingkaran 1NM
    context.beginPath(); // mulai menggmabar
    context.moveTo(w, h); // titik awal
    for(a=0; a<360; a++){
        var tmpx = w + (40 * Math.cos( a * Math.PI/180));
      var tmpy = h + (40 * Math.sin( a * Math.PI/180));
      context.lineTo(tmpx, tmpy); // titik ke-2
        if(a==0){
          context.font = "bold 12px arial";
          context.fillText(" 1NM", tmpx, tmpy);
        }
    }
    context.stroke();

    // Lingkaran 0NM
    context.beginPath(); // mulai menggmabar
    context.moveTo(w, h); // titik awal

    context.stroke();


    // Pembuatan Garis
    context.strokeStyle = "red";
    // garis kanan 90 derajat
    context.moveTo(w, h);
    var tmpx = w + (160 * Math.cos( 0 * Math.PI/180));
    var tmpy = h + (160 * Math.sin( 0 * Math.PI/180));
    var tmpPoint_X = Math.round(tmpx);
    var tmpPoint_Y = Math.round(tmpy);

    context.lineTo(tmpPoint_X, tmpPoint_Y);

    context.stroke();
    context.font = "bold 12px arial";
    context.fillText("90", tmpPoint_X, tmpPoint_Y);

    // garis bawah 180 derajat
    context.moveTo(w, h);
    var tmpx = w + (170 * Math.cos( 90 * Math.PI/180));
    var tmpy = h + (170 * Math.sin( 90 * Math.PI/180));
    var tmpPoint_X = Math.round(tmpx);
    var tmpPoint_Y = Math.round(tmpy);

    context.lineTo(tmpPoint_X, tmpPoint_Y);

    context.stroke();
    context.font = "bold 12px arial";
    context.fillText("180", tmpPoint_X, tmpPoint_Y);

    // garis bawah 270 derajat
    context.moveTo(w, h);
    var tmpx = w + (170 * Math.cos( 180 * Math.PI/180));
    var tmpy = h + (170 * Math.sin( 0 * Math.PI/180));
    var tmpPoint_X = Math.round(tmpx);
    var tmpPoint_Y = Math.round(tmpy);

    context.lineTo(tmpPoint_X, tmpPoint_Y);

    context.stroke();
    context.font = "bold 12px arial";
    context.fillText("270", tmpPoint_X, tmpPoint_Y);

    // garis bawah 0 derajat
    context.moveTo(w, h);
    var tmpx = w + (170 * Math.cos( 270 * Math.PI/180));
    var tmpy = h + (170 * Math.sin( 270 * Math.PI/180));
    var tmpPoint_X = Math.round(tmpx);
    var tmpPoint_Y = Math.round(tmpy);

    context.lineTo(tmpPoint_X, tmpPoint_Y);

    context.stroke();
    context.font = "bold 12px arial";
    context.fillText("0", tmpPoint_X, tmpPoint_Y);
}
function cleara_new(){
  context.clearRect(0, 0, document.getElementById("tampilan_formasi_new").width, document.getElementById("tampilan_formasi_new").height);
}

/***********************************************
 ** fungsi untuk Plot sesuai koordinate
 ** By: Muhamad Farhan Badrussalam
 ** START
 ***********************************************/

	/***********************************************
	 ** fungsi button untuk input manual plotting 
	 ** START
	 ***********************************************/
	function koordinate_change(status,value){

		if(value == "open"){
			docId("d_lat_"+status+"_koor").value = 0;
			docId("m_lat_"+status+"_koor").value = 0;
			docId("s_lat_"+status+"_koor").value = 0;

			docId("d_long_"+status+"_koor").value = 0;
			docId("m_long_"+status+"_koor").value = 0;
			docId("s_long_"+status+"_koor").value = 0;

			docId("longitude_"+status+"_koor").value = 0;
			docId("latitude_"+status+"_koor").value = 0;
		}


		if(status == "satuan"){
			docId("content_satuan").style.display = "none";
			docId("koordinate_satuan").style.display = "none";
			if(docId("tmp_index_sat_new").innerHTML != ""){
				if(value == "open"){
					docId("koordinate_satuan").style.display = "block";

					
				}else if(value == "close"){
					docId("content_satuan").style.display = "block";

					if(marker_test == ""){
					
					}else{
						marker_test_.removeLayer(marker_test);

						marker_test = "";
					}
				}
			}else{
				alert("Symbol Not Found !!!");
				docId("content_satuan").style.display = "block";
			}
		}else if(status == "situasi"){
			docId("content_situasi").style.display = "none";
			docId("koordinate_situasi").style.display = "none";
			if(docId("keterangan_situasi_new").value != ""){
				if(value == "open"){
					docId("koordinate_situasi").style.display = "block";
				}else{
					docId("content_situasi").style.display = "block";
					if(marker_test == ""){
					
					}else{
						marker_test_.removeLayer(marker_test);

						marker_test = "";
					}
				}
			}else{
				alert("Keterangan can not be empty !!!");
				docId("content_situasi").style.display = "block";
			}
		}else if(status == "bungus"){
			docId("content_bungus").style.display = "none";
			docId("koordinate_bungus").style.display = "none";

			if(value == "open"){
				docId("koordinate_bungus").style.display = "block";
			}else{
				docId("content_bungus").style.display = "block";
				if(marker_test == ""){
				
				}else{
					marker_test_.removeLayer(marker_test);

					marker_test = "";
				}
			}
		}
	}
	/***********************************************
	 ** fungsi button untuk input manual plotting 
	 ** End
	 ***********************************************/


	/***********************************************
	 ** fungsi Dropdown untuk merubah jenis koordinate
	 ** bisa DMS atau Longitude - Latitude
	 ** START
	 ***********************************************/
	function pilih_jenis_koordinate(status,value){
		docId("dms_"+status+"_koor").style.display = "none";
			docId("lnglat_"+status+"_koor").style.display = "none";
			if(value == 1){
				docId("dms_"+status+"_koor").style.display = "block";
			}else if(value == 2){
				docId("lnglat_"+status+"_koor").style.display = "block";
			}
			if(marker_test == ""){
			
			}else{
				marker_test_.removeLayer(marker_test);

				marker_test = "";
			}
	}

	/***********************************************
	 ** fungsi Dropdown untuk merubah jenis koordinate
	 ** bisa DMS atau Longitude - Latitude
	 ** END
	 ***********************************************/

	/***********************************************
	 ** fungsi button untuk test koordinate dan zoom to
	 ** START
	 ***********************************************/
	 function test_koordinate(status){
	 	var jenis = docId("koord_"+status+"_pilih").value;

	 	if(jenis == 1){
 			// DMS

 			// Inisialisasi
 			var d_lat = docId("d_lat_"+status+"_koor").value;
			var m_lat = docId("m_lat_"+status+"_koor").value;
			var s_lat = docId("s_lat_"+status+"_koor").value;
			var arah_lat = docId("arah_lat_"+status+"_koor").value;

			var d_long = docId("d_long_"+status+"_koor").value;
			var m_long = docId("m_long_"+status+"_koor").value;
			var s_long = docId("s_long_"+status+"_koor").value;
			var arah_long = docId("arah_long_"+status+"_koor").value;

			var latitude = 0;
			var longitude = 0;

			// PROSESS Converting DMS to LONGLAT
			if (arah_lat == "n" && arah_long == "e"){
				latitude = (Number (d_lat) + ((m_lat/60) + (s_lat/3600)));
				longitude = (Number (d_long) + ((m_long/60) + (s_long/3600)));
			}
			else if (arah_lat == "s" && arah_long == "e"){
				var dd = (Number (d_lat) + ((m_lat/60) + (s_lat/3600)));
				latitude = (dd*(-1));
				longitude = (Number (d_long) + ((m_long/60) + (s_long/3600)));
			}
			else if (arah_lat == "n" && arah_long == "w"){
				latitude = (Number (d_lat) + ((m_lat/60) + (s_lat/3600)));
				var de = (Number (d_long) + ((m_long/60) + (s_long/3600)));
				longitude = (de*(-1));
			}
			else if (arah_lat == "s" && arah_long == "w"){
				var dd = (Number (d_lat) + ((m_lat/60) + (s_lat/3600)));
				var de = (Number (d_long) + ((m_long/60) + (s_long/3600)));
				longitude = (de*(-1));
				latitude = (dd*(-1));
			}
			else {
				
			}
			if(marker_test == ""){
				marker_test = L.marker([latitude, longitude]);
				marker_test.addTo(marker_test_);
			}else{
				marker_test_.removeLayer(marker_test);

				marker_test = L.marker([latitude,longitude]);
				
				marker_test.addTo(marker_test_);
			}


			map.flyTo({lng:longitude,lat:latitude},11);
 		}else{
 			// LONGLAT

 			// Inisialisasi
 			var longitude = docId("longitude_"+status+"_koor").value;
 			var latitude = docId("latitude_"+status+"_koor").value;

 			// Prosess pembuatan marker dan zoom to
 			if(marker_test == ""){
				marker_test = L.marker([latitude, longitude]);
				marker_test.addTo(marker_test_);
			}else{
				marker_test_.removeLayer(marker_test);

				marker_test = L.marker([latitude,longitude]);
				
				marker_test.addTo(marker_test_);
			}

			map.flyTo({lng:longitude,lat:latitude},11);
 		}
	 }

	/***********************************************
	 ** fungsi Dropdown untuk merubah jenis koordinate
	 ** bisa DMS atau Longitude - Latitude
	 ** END
	 ***********************************************/

	/***********************************************
	 ** fungsi Button Plot sesuai dengan koordinate
	 ** START
	 ***********************************************/
	function plot_koordinate(status){
		var jenis = docId("koord_"+status+"_pilih").value;

		var latitude = 0;
		var longitude = 0;

		if(jenis == 1){
			// DMS

 			// Inisialisasi
 			var d_lat = docId("d_lat_"+status+"_koor").value;
			var m_lat = docId("m_lat_"+status+"_koor").value;
			var s_lat = docId("s_lat_"+status+"_koor").value;
			var arah_lat = docId("arah_lat_"+status+"_koor").value;

			var d_long = docId("d_long_"+status+"_koor").value;
			var m_long = docId("m_long_"+status+"_koor").value;
			var s_long = docId("s_long_"+status+"_koor").value;
			var arah_long = docId("arah_long_"+status+"_koor").value;

			// PROSESS Converting DMS to LONGLAT
			if (arah_lat == "n" && arah_long == "e"){
				latitude = (Number (d_lat) + ((m_lat/60) + (s_lat/3600)));
				longitude = (Number (d_long) + ((m_long/60) + (s_long/3600)));
			}
			else if (arah_lat == "s" && arah_long == "e"){
				var dd = (Number (d_lat) + ((m_lat/60) + (s_lat/3600)));
				latitude = (dd*(-1));
				longitude = (Number (d_long) + ((m_long/60) + (s_long/3600)));
			}
			else if (arah_lat == "n" && arah_long == "w"){
				latitude = (Number (d_lat) + ((m_lat/60) + (s_lat/3600)));
				var de = (Number (d_long) + ((m_long/60) + (s_long/3600)));
				longitude = (de*(-1));
			}
			else if (arah_lat == "s" && arah_long == "w"){
				var dd = (Number (d_lat) + ((m_lat/60) + (s_lat/3600)));
				var de = (Number (d_long) + ((m_long/60) + (s_long/3600)));
				longitude = (de*(-1));
				latitude = (dd*(-1));
			}
			else {
				
			}

			
		}else{
			// LONGLAT
			longitude = docId("longitude_"+status+"_koor").value;
 			latitude = docId("latitude_"+status+"_koor").value;

		}
		if(status == "satuan"){
			var tmp_data = [];
	        type_plotting="satuan";
	        var index = docId("tmp_index_sat_new").innerHTML;
	        var date_berangkat = docId("date_satuan_berangkat").value;
	        var kecepatan = docId("kecepatan_satuan_new").value;
	        var satuan_jarak = docId("jenis_kec_satuan_new").value;
	        var kecepatan_jarak = kecepatan+"|"+satuan_jarak;
	        var nomer_satuan = docId("nosat_new").value;
	        var nama_satuan = docId("nama_satuan_new").value;
	        var nomer_atasan = docId("noat_new").value;
	        var color = docId("warna_satuan_new").value;
	        var size = Number(docId("symbol_size_new").value);

	        var id_symbol = data_font[index].id;
	        var icon_satuan = "<div style='font-weight: bolder; margin-top:-15px; width: 30px;color: "+color+"; font-size: "+size+"px; font-family: "+data_font[index].nama+"'>"+String.fromCharCode(Number(data_font[index].index))+"</div>";
	        var myIcon = L.divIcon({className: 'my-div-icon', html:icon_satuan, iconSize: null, id_point: "satuan_"+jml_objc_sat+"_"+dokument_data[0][0]});

		   	if(marker_test == ""){
				
			}else{
				marker_test_.removeLayer(marker_test);

				marker_test = "";
			}
			// Proses Plotting to map
			var layer = L.marker([latitude,longitude],{icon: myIcon});

			tmp_data.push("satuan_"+jml_objc_sat+"_"+dokument_data[0][0]);
            tmp_data.push(data_font[index]);
            tmp_data.push(date_berangkat);
            tmp_data.push(kecepatan_jarak);
            tmp_data.push(nomer_satuan);
            tmp_data.push(nama_satuan);
            tmp_data.push(nomer_atasan);
            tmp_data.push(id_symbol);
            tmp_data.push("");
            tmp_data.push(color);
            tmp_data.push(size);
            jml_objc_sat++;

            data_satuan.push(tmp_data);

			var content = getPopupContent(layer,type_plotting,"add",0);
			if (content !== null) {
	            layer.bindPopup(content);
	        }

	        daftar_arr_layer.push(layer);
			drawnItems.addLayer(layer);

			daftar_list_objc();
    		tableHighlightRow();
    		koordinate_change('satuan','close');
		}else if(status == "situasi"){
			var array_situasi = [];
	        var icon_situasi;
	        type_plotting = "situasi";
	        var wrn = docId("warna_situasi_new").value;
	        var size = Number(docId("situasi_size_new").value);
	        var keterangan = docId("keterangan_situasi_new").value;
	        if (keterangan != "") {
	          if (docId('time_new').value == "now") {
	            // rate_value = document.getElementById('time').value;
	            var tgl = new Date();
	            var hari = tgl.getDate();
	              if(hari<10){
	                hari = "0"+hari;
	              }
	            var bulan = tgl.getMonth()+1;
	              if(bulan<10){
	                bulan = "0"+bulan;
	              }
	            var tahun = tgl.getYear();
	            var year = (tahun < 1000) ? tahun + 1900 : tahun;
	            var tgl_sekarang = hari.toString()+bulan.toString()+year.toString();
	            // Waktu
	            var hours = tgl.getHours();
	            var minute = tgl.getMinutes();
	            var second = tgl.getSeconds();

	            // var waktu_sekarang = hours.toString()+minute.toString();
	            //update
	            var waktu_sekarang;
	            if(hours.toString()<10 && minute.toString()<10){
	              waktu_sekarang = "0"+hours.toString()+"0"+minute.toString();
	            }else if(hours.toString()<10){
	              waktu_sekarang = "0"+hours.toString()+minute.toString();
	            }else if(minute.toString()<10){
	              waktu_sekarang = hours.toString()+"0"+minute.toString();
	            }else{
	              waktu_sekarang = hours.toString()+minute.toString();
	            }
	            if(wrn == "red"){
	              icon_situasi="warning_red.png";
	            }else if(wrn == "blue"){
	              icon_situasi="warning_blue.png";
	            }
	            type_graph = "point";
	            warna_satuan = wrn;
	            array_situasi.push(keterangan);
	            array_situasi.push(tgl_sekarang);
	            array_situasi.push(waktu_sekarang);
	            array_situasi.push('situasi_'+jml_objc_situasi);

	          }else if(docId("time_new").value == "custome"){
	            var tanggal = docId("ket_waktu_situasi_new").value.split(" ");
	            // var tahun = document.getElementById('tahun').value;
	            // var waktu = document.getElementById('waktu_').value;
	            var cut_tahun = tanggal[0].split("-");
	            var cut_waktu = tanggal[1].split(":");
	            tahun = cut_tahun[0].toString()+cut_tahun[1].toString()+cut_tahun[2].toString();
	            waktu = cut_waktu[0].toString()+cut_waktu[1].toString();
	            if(wrn == "red"){
	              icon_situasi="warning_red.png";
	            }else if(wrn == "blue"){
	              icon_situasi="warning_blue.png";
	            }
	            type_graph = "point";
	            warna_satuan = wrn;
	            array_situasi.push(keterangan);
	            array_situasi.push(tahun);
	            array_situasi.push(waktu);
	            array_situasi.push('situasi_'+jml_objc_situasi);

	          }
	          arr_data_situasi.push(array_situasi);

	          var icon_situasi_ = L.icon({
	              iconUrl: 'image/plotting/'+icon_situasi,
	              iconSize: [size, size],
	              id_point: 'situasi_'+jml_objc_situasi
	          });
          	  jml_objc_situasi++;

          	  var layer = L.marker([latitude,longitude],{icon: icon_situasi_});

          		var content = getPopupContent(layer,type_plotting,"add",0);
				if (content !== null) {
		            layer.bindPopup(content);
		        }

		        daftar_arr_layer.push(layer);
				drawnItems.addLayer(layer);

				daftar_list_objc();
	    		tableHighlightRow();
	    		koordinate_change('situasi','close');
	    		docId("keterangan_situasi_new").value = "";
			}
		}else if(status == "bungus"){
			var tmp_data = [];
	        type_plotting = "bungus";
	        var date = docId("date_bungus").value.split(" ");
	        var size = docId("bungus_size_new").value;

	        tmp_data.push(date[0]);
	        tmp_data.push(date[1]);
	        tmp_data.push("bungus_"+jml_objc_bungus);
	        tmp_data.push(size);

	        arr_data_bungus.push(tmp_data);

        	jml_objc_bungus++;

	        var icon_bungus = L.icon({
	            iconUrl: 'image/plotting/bungus_red.png',
	            iconSize: [Number(size), Number(size)],
	            id_point: "bungus_"+jml_objc_bungus
	        });
	        var layer = L.marker([latitude,longitude],{icon: icon_bungus});

	        var content = getPopupContent(layer,type_plotting,"add",0);
			if (content !== null) {
	            layer.bindPopup(content);
	        }

	        daftar_arr_layer.push(layer);
			drawnItems.addLayer(layer);

			daftar_list_objc();
    		tableHighlightRow();
    		koordinate_change('bungus','close');
		}
	}

	/***********************************************
	 ** fungsi Button Plot sesuai dengan koordinate
	 ** END
	 ***********************************************/

/***********************************************
 ** fungsi untuk Plot sesuai koordinate
 ** END
 ***********************************************/

/***********************************************
 ** fungsi untuk Memilih weapon
 ** START
 ***********************************************/

 function weapon_satuan(status){
 	if(status=="open"){
	 	docId("menu_weaponlist").style.display = "block";

	 	// TORPEDO
	 	var html_torpedo = "";
	 	for (var i = 0; i < data_torpedo.length; i++) {
	 		var tmp = "<tr>"+
      					"<td>"+(i+1)+"</td>"+
      					"<td>"+data_torpedo[i].TORPEDO_NAME+"</td>"+
      				"</tr>";
      		html_torpedo = html_torpedo + tmp;
	 	}
	 	docId("isi_weapon1").innerHTML = html_torpedo;
		$('#table_weapon1').DataTable({
	        "dom": '<"top left"f><"top"p>'
	    });
 	}
 }

/***********************************************
 ** fungsi untuk Memilih weapon
 ** END
 ***********************************************/