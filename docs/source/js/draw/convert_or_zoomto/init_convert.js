function pencarian_kota(){
	var isi_option_kota = "<option value='0'>--Pilih Kota--</option>";
    for(var a = 0; a<data_kota_get.length;a++){
        var koordinat = data_kota_get[a].koorx+","+data_kota_get[a].koory;
        var tmp = "<option value='"+data_kota_get[a].koorx+"|"+data_kota_get[a].koory+"|"+data_kota_get[a].nama_kota+"'>"+data_kota_get[a].nama_kota+"</option>";
        isi_option_kota = isi_option_kota+tmp;
    }
    // console.log(docId("nama_kota_new"));
    docId("nama_kota_new").innerHTML = isi_option_kota;
}

function pilih_location(value){
	if(value!=0){
		var pisah = value.split("|");

		var hasil = convertDMS(pisah[0],pisah[1]).split("-");

		docId("nama_longlat").innerHTML = pisah[2];
		docId("long_longlat").innerHTML = pisah[1];
		docId("lat_longlat").innerHTML = pisah[0];

		docId("long_dms_").innerHTML = hasil[1];
		docId("lat_dms_").innerHTML = hasil[0];

		map.flyTo({lng:pisah[1],lat:pisah[0]},11);

	}else{
		docId("nama_longlat").innerHTML = "-";
		docId("long_longlat").innerHTML = "-";
		docId("lat_longlat").innerHTML = "-";
		docId("long_dms_").innerHTML = "-";
		docId("lat_dms_").innerHTML = "-";
	}
	// console.log(latitude);
}

function zoom_to(){
	var status = docId("type_search").value;

	var long = Number(docId("longitude_").value);
	var lat = Number(docId("latitude_").value);

	map.flyTo({lng:long,lat:lat},11);
}

function zoom_to_convert(){
	var long = Number(docId("long_utama").value);
	var lat = Number(docId("lat_utama").value);

	map.flyTo({lng:long,lat:lat},11);
}

function pilih_convert_1(value){
	docId("longlat_convert").style.display = "none";
	docId("dms_convert").style.display = "none";
	docId("utm_convert").style.display = "none";
	if(value == 1){
		docId("longlat_convert").style.display = "block";
	}else if(value == 2){
		docId("dms_convert").style.display = "block";
	}else if(value == 3){
		docId("utm_convert").style.display = "block";
	}
	clear_hasil();
}
function pilih_convert_2(value){
	docId("hasil_dms").style.display = "none";
	docId("hasil_utm").style.display = "none";
	docId("hasil_longlat").style.display = "none";
	docId("button_convert").innerHTML = "";
	if(value == 1){
		docId("hasil_utm").style.display = "block";
		docId("button_convert").innerHTML = "UTM";
	}else if(value == 2){
		docId("hasil_dms").style.display = "block";
		docId("button_convert").innerHTML = "DMS";
	}else if(value == 3){
		docId("hasil_longlat").style.display = "block";
		docId("button_convert").innerHTML = "LongLat";
	}
	clear_hasil();
}

function clear_hasil(){
	docId("eas_hasil").value = "";
	docId("nort_hasil").value = "";
	docId("zone_hasil").value = "";
	docId("convert_2_long").value = "";
	docId("convert_2_lat").value = "";
	docId("long_hasil").value = "";
	docId("lat_hasil").value = "";
}
function converting_2(lat,long,status){
	if(status == "1"){
		var hasil = toUTMBtn(lat,long);
		// console.log(hasil);
		docId("eas_hasil").value = hasil.x;
		docId("nort_hasil").value = hasil.y;
		docId("zone_hasil").value = hasil.zone+""+hasil.band;
	}else if(status == "2"){
		var hasil = convertDMS(lat,long).split("-");

		docId("convert_2_long").value = hasil[1];
		docId("convert_2_lat").value = hasil[0];
	}else if(status == "3"){
		docId("long_hasil").value = long;
		docId("lat_hasil").value = lat;
	}
}
function converting(){
	var convert_1 = docId("convert_1").value;
	var convert_2 = docId("convert_2").value;

	var long_ = "";
	var lat_ = "";

	if(convert_2 != "0"){
		if(convert_1 == "1"){
			var long = docId("longitude_convert").value;
			var lat = docId("latitude_convert").value;
			
			converting_2(lat,long,convert_2);

			long_ = long;
			lat_ = lat;
		}else if(convert_1 == "2"){
			var d_lat = docId("d_lat_convert").value;
			var m_lat = docId("m_lat_convert").value;
			var s_lat = docId("s_lat_convert").value;
			var arah_lat = docId("arah_lat_convert").value;

			var d_long = docId("d_long_convert").value;
			var m_long = docId("m_long_convert").value;
			var s_long = docId("s_long_convert").value;
			var arah_long = docId("arah_long_convert").value;

			var latitude = 0;
			var longitude = 0;

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
			latitude = Number(latitude);
			longitude = Number(longitude);

			converting_2(latitude,longitude,convert_2);

			long_ = longitude;
			lat_ = latitude;
			// alert("pilih convert ")
		}else if(convert_1 == "3"){
			var x = docId("eas_convert").value;
			var y = docId("nort_convert").value;
			var zone = docId("zone_convert").value;
			var band = docId("band_convert").value;

			// var southHemi = ['true', 'y', 'yes', '1'].indexOf(sh) > -1 ? true : false;

			var utm = L.utm(x, y, zone, band, "true");
			var longlat = utm.latLng();

			converting_2(longlat.lng,longlat.lat,convert_2);

			if(convert_2 == "1"){
				// var hasil = toUTMBtn(lat,long);
				// console.log(hasil);
				docId("eas_hasil").value = x;
				docId("nort_hasil").value = y;
				docId("zone_hasil").value = zone+""+band;
			}

			long_ = longlat.lng;
			lat_ = longlat.lat;
		}
	}else{
		// alert("");
	}
	docId("long_utama").value = long_;
	docId("lat_utama").value = lat_;

	zoom_to_convert();
}

// convert lnglt to UTM

function toUTMBtn(lat,lng) {

    var ll = L.latLng(lat, lng);
    var utm = ll.utm();

    return utm;
}