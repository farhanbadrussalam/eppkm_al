/***********************************************
 ** fungsi untuk menampilkan timelist pada tampilan menu_timelist
 ** By: Muhamad Farhan Badrussalam
 ***********************************************/

function first_timelist(){
	daftar_timelist.sort(function(a,b){
	  // Turn your strings into dates, and then subtract them
	  // to get a value that is either negative, positive, or zero.
	  return new Date(a.date) - new Date(b.date);
	});
	cek_pergerakan();
	var tmp_date = [];
	var arr_date = [];
	for (var i = 0; i < daftar_timelist.length; i++) {
		var data_time = daftar_timelist[i];
		var tgl = data_time.date.split(" ");
		tmp_date.push(tgl[0]);
	}

	/***********************************************
	 ** fungsi untuk memisahkan tanggal yg sama 
	 ***********************************************/
	$.each(tmp_date, function(i, el){
		if($.inArray(el, arr_date) === -1){
			arr_date.push(el);
		}
	});

	/***********************************************
	 ** fungsi untuk membuat menu panel pada timelist
	 ***********************************************/
	var a = 0;
	var html = "";
	arr_date.forEach(function(data){
		var tmp = '<li class="accordion-navigation" style="margin-bottom: 2px !important;">'+
				    '<a href="#panel'+a+'">'+data+'</a>'+
				    '<div id="panel'+a+'" class="content" style="padding: 0px !important;">'+
				      
				    '</div>'+
				  '</li>';
		html = html + tmp;
		a++;
	});
	docId("data_list_time").innerHTML = html;

	/***********************************************
	 ** fungsi untuk membuat daftar panel pada timelist berdasarkan tanggal
	 ***********************************************/
	 var index_panel;
	 for (var i = 0; i < arr_date.length; i++) {
	 	var panel = "";
	 	for (var b = daftar_timelist.length-1; b >= 0 ; b--) {
	 		var data = daftar_timelist[b];
	 		var tgl = data.date.split(" ");
	 		if(arr_date[i] == tgl[0]){
	 			var arr_satuan = data_satuan[data.index-1];
	 			var color = "";
	 			var title = "";
	 			if(data.status == 1){
	 				color = "blue";
	 				title = "Ada Jalur";
	 			}else{
	 				color = "red";
	 				title = "Tidak Ada Jalur"
	 			}
	 			var icon = String.fromCharCode(Number(arr_satuan[1].index));
	 			var tmp = "<div style='padding: 5px; height: 50px; width: 100%;background-color: gray; margin-bottom: 3px; color: white;'>"+
	 						"<span style='color: "+arr_satuan[9]+"; width: 40px; font-size: 30px;float: left; font-family: "+arr_satuan[1].nama+"'>"+icon+"</span>"+
	 						"<span style='float: left;margin-top: 8px; width: 70px;'>"+arr_satuan[5]+"</span>"+
	 						"<span style='float: left;margin-top: 8px; width: 100px;'>Jam: "+arr_satuan[2].split(" ")[1]+"</span>"+
	 						"<span style='float: left;margin-top: 8px; cursor: pointer;width: 30px;' title='Edit data' onclick='edit_timelist("+b+")'><i class='fa fa-pencil-square-o' aria-hidden='true'></i></span>"+
	 						"<span style='float: left;margin-top: 10px; border-radius: 50%; width: 20px; height: 20px; background-color: "+color+";' title='"+title+"'></span>"+
	 					  "</div>";

	 			panel = panel + tmp;
	 		}
	 	}
	 	docId("panel"+i).innerHTML = panel;
	 }
}

function cek_pergerakan(){
	var layer_marker = [];
    var layer_polyline = [];
    drawnItems.eachLayer(function (layer) {
	    if(layer instanceof L.Marker){
	        layer_marker.push(layer);
	    }else if(layer instanceof L.Polyline){
	        layer_polyline.push(layer);
	    }
    });
    var tmp_timelist = daftar_timelist;
    daftar_timelist = [];
    layer_marker.forEach(function(layer){
	    for(var a = tmp_timelist.length-1; a >= 0; a--){
		    	var marker = tmp_timelist[a];
		    	var id_marker = data_satuan[marker.index-1][0];
	    	if(layer.options.icon.options.id_point == id_marker){
				tmp_timelist[a].status = 0;
			    layer_polyline.forEach(function(polyline){
			        if(id_marker == polyline._leaflet_id){
			            tmp_timelist[a].status = 1;
			        }
			    });
			    daftar_timelist.push(tmp_timelist[a]);
	    	}else{

	    	}
	    }
    });
}

function edit_timelist(index){
	cek_menu = 0;
 	click_menu();
 	docId("tab2").click();

	click_objc(daftar_timelist[index],"timelist_edit");

}