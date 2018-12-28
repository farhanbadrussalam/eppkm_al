// variable public
var daftar_arr_layer = [];
var arr_layer_id = [];
var type_plotting = "";
var ar_kor = [];
var Ap = "kosong";

var data_font = [];
var data_satuan = [];
var jml_objc_sat = 0;
var count_formasi_new = 0;

// Time List Inisialisasi
var daftar_timelist = [];

var jml_objc_kek = 0;
var jml_objc_radar = 0;
var jml_objc_manuever = 0;
var jml_objc_text = 0;
var jml_objc_passen = 0;
var jml_objc_bandara = 0;
var jml_objc_pesawat = 0;
var jml_objc_bebas = 0;
var jml_objc_obstacle = 0;
var jml_objc_arrow_lurus = 0;
var jml_objc_arrow_lengkung_b = 0;
var jml_objc_arrow_lengkung_a = 0;
var jml_objc_arrow_manuver_b = 0;
var jml_objc_arrow_manuver_a = 0;
var jml_objc_situasi = 0;
var jml_objc_bungus = 0;
var jml_objc_formasi = 0;

var jml_objc_polyline = 0;
var jml_objc_polygon = 0;
var jml_objc_circle = 0;
var jml_objc_arrow = 0;

var arr_data_logistik = [];
var arr_data_passen = [];
var arr_data_text = [];
var arr_data_manuever = [];
var arr_data_radar = [];
var arr_data_kekuatan = [];
var arr_data_situasi = [];
var arr_data_bungus = [];
var arr_data_obstacle = [];
var arr_data_formasi = [];
var tmp_data_formasi = [];
var tmp_arr_info_kekuatan = [];

var arr_ind = [1];//diubah mei logis
var b_pelabuhan = 0;//diubah mei logis
var arr_band = [1];//diubah mei logis
var p = 0;//diubah mei logis
var arr_beba = [1];//diubah mei logis
var bs = 0;//diubah mei logis
var b_bandara = 0;//diubah mei logis
var b_bebas = 0;
var edit_b = 0;
var edit_b_db = 0;
var kumpl = [];
var poss = [];
var all_logistik = [];
var koord = [];
var nilai = [];
var warna_pilih = ""; //zame
var draw_polyline = "";
var status_draw_poly = false;

//Meriam
var arrRes_meriam = [];
var counter_meriam = [];
var arr_ts_meriam = [];

var arr_pergerakan_latlng = [];
var arr_movingmarker = [];
var arr_layermove = [];

var arrlayer_satuan = [];

// var ip_adress = "192.168.0.188";
var ip_adress = "192.168.0.188";
var nama_project = "eppkm_al";

var status_jalur = false;
var isi_index_jalur = "kosong";
var jumlah_formasi = 0;

var daftar_cb = [];
var daftar_peta = [];
// Function Public
// Fungsi get php data to javascript
var xhttp_text = new XMLHttpRequest();

function ambil_data_(){
  if(id_asisten_user != 1 && id_asisten_user != 6){
    if(type_login=="menu_cb"){
      var link = "status=ambil_cb_lain&bagian="+bagian_user+"&jabatan="+jabatan_user+"&scenario="+skenario_aktif[0].ID;
      var get_ = get_db(link);
      var arr_tmp = [];
      arr_daftar_cb = [];
      for (var i = 0; i < get_.length; i++) {
        var tmp = get_[i].scenario+"|"+get_[i].id+"|"+get_[i].nama_dokumen+"|"+i+"|"+get_[i].name+"|"+get_[i].id+"|menucb";
        arr_tmp.push(tmp);
        arr_daftar_cb.push(tmp);
      }
      buka_cb();
      for (var i = 0; i < arr_tmp.length; i++) {
        // console.log(get_[i]);
        docId("loadOff_cb_"+arr_tmp[i]).click();
      }
    }
  }
}

function get_db(post){
  xhttp_text.open("POST", "http://"+ip_adress+"/"+nama_project+"/docs/source/source_get.php", false);
  xhttp_text.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhttp_text.send(post);
  var hasil_t = JSON.parse(xhttp_text.responseText);
  return hasil_t ;
}
// FUNGSI MOVEOVER
function toDegreesMinutesAndSeconds(coordinate) {
    var absolute = Math.abs(coordinate);
    var degrees = Math.floor(absolute);
    var minutesNotTruncated = (absolute - degrees) * 60;
    var minutes = Math.floor(minutesNotTruncated);
    var seconds = Math.floor((minutesNotTruncated - minutes) * 60);

    return degrees + " " + minutes + " " + seconds;
}
function convertDMS(lat, lng) {
    var latitude = toDegreesMinutesAndSeconds(lat).split(" ");
    var latitudeCardinal = Math.sign(lat) >= 0 ? "N" : "S";

    var longitude = toDegreesMinutesAndSeconds(lng).split(" ");
    var longitudeCardinal = Math.sign(lng) >= 0 ? "E" : "W";

    return latitude[0] + "° "+latitude[1]+"' "+latitude[2]+"'' " + latitudeCardinal + " - "+ longitude[0] + "° "+longitude[1]+"' "+longitude[2]+"'' " + longitudeCardinal;
}
    function close_pop(){
        document.getElementById('map').style.zIndex = "4";
        // document.getElementById('test').style.zIndex = "5";
    }
    function open_pop(){
        // document.getElementById('map').style.zIndex = "1";
        // document.getElementById('test').style.zIndex = "3";
    }
// FUNGSI SHOW TIME NOW
	function dateString2Date(dateString) {
	      var dt  = dateString.split(/\-|\s/);
	      return new Date(dt.slice(0,3).reverse().join('-') + ' ' + dt[3]);
	}
	function getthedate(deltaD,TimeZone,displaySeconds){
        var clientDate = new Date();
        var serverdate = new Date(clientDate.getTime()+deltaD);
        var month=serverdate.getMonth()+1;
        var day=serverdate.getDate();
        var year=serverdate.getFullYear();
        var hours=serverdate.getHours();
        if(hours<10){
          hours="0"+hours;
        }
        var minutes=serverdate.getMinutes();
        var seconds=serverdate.getSeconds();
        if (minutes<=9){minutes="0"+minutes;}
        if (month<=9){month="0"+month;}
        if (day<=9){day="0"+day;}
        //
        var cdate = [];
        if (displaySeconds){
          if (seconds<=9){seconds="0"+seconds;}
          cdate.push(month+"/"+day+"/"+year);
          cdate.push(hours+":"+minutes+":"+seconds);
          }
        else{
          var cdate=month+"/"+day+"/"+year+" ... "+hours+":"+minutes+" "+TimeZone;
          }
        return cdate;
      }
      // FUNGSI PRINT
        function manualPrint () {
            printer.printMap('CurrentSize', 'MyManualPrint')
        }
        function removeAllLayer(){
            drawnItems.eachLayer(function (layer) {
                drawnItems.removeLayer(layer);
            });
        }
      // MENAMPILKAN WAKTU SEKARANG
	function showtime(){
		var text4 = "status=ambil_waktu";
		var tmp3 = get_db(text4);
		var servertimeOBJ = dateString2Date(tmp3[0]);
	    var dat = Date(tmp3[0]);
	    // var tz = dat.getTimeZone("America/Los_Angeles");
	    // var servertimeOBJ = new Date(dat);
	    var deltaD = (servertimeOBJ.getTime())-(new Date().getTime());
	    var TimeZone = tmp3[1];
	    var displaySeconds = true;
	    // var interval;
	    var t_awal = getthedate(deltaD,TimeZone,displaySeconds);
	    // var waktu_now = new Date(t_awal[0]+" "+t_awal[1]);
	    // var now_tim = waktu_now.getTime();
	    // timeska = t_awal;
	    var real_time = window.setInterval(function(){

	          rTime = getthedate(deltaD,TimeZone,displaySeconds);
	          var waktu_now = new Date(rTime[0]+" "+rTime[1]);
	          // document.getElementById("waktu").innerHTML="<p>"+rTime[1]+"</p>";
	          var tem = t_awal[0];
	          var array = tem.split("/");
	          var tanggal = array[2]+"-"+array[0]+"-"+array[1];
	          document.getElementById("date_satuan").value=tanggal;
	          document.getElementById("date_asumsi").value=tanggal;
              document.getElementById("date_kekuatan").value=tanggal;
              document.getElementById("datetime").value=tanggal;
	          // document.getElementById("tem2").value=t_awal[1];

	         },1000);
	}
// FUNGSI POPUP SETTING KEKUATAN
    function simpan_stng_kekuatan(){
        var tmp_data = [];
        type_plotting = "kekuatan";
        var nama = docId("nama_kekuatan_new").value;
        var dateTime_berangkat = docId("date_kekuatan_berangkat").value;
        var kecepatan = docId("kecepatan_kekuatan_new").value;
        var satuan_jarak = docId("jenis_kec_kekuatan_new").value;
        var kecepatan_jarak = kecepatan+"|"+satuan_jarak;
        var wrn = docId("warna_kekuatan_new").value;
        var size = Number(docId("kekuatan_size_new").value);
        var ket = docId("keterangan_kekuatan").value;
        // console.log(nama);
        if(nama==""){
            alert("name can not be empty !!!");
        }else if(checkedValue.length == 0){
            alert("No data !!");
        }else{
            tmp_data.push("kekuatan_"+jml_objc_kek);
            tmp_data.push(nama);
            tmp_data.push(checkedValue);
            tmp_data.push(dateTime_berangkat);
            tmp_data.push(kecepatan_jarak);
            tmp_data.push(size);
            tmp_data.push(wrn);
            tmp_data.push(ket);

            arr_data_kekuatan.push(tmp_data);

            var icon_kekuatan = L.icon({
                iconUrl: 'image/plotting/kek_plot.png',
                iconSize: [size, size],
                id_point : "kekuatan_"+jml_objc_kek,
                warna : wrn
            });
            // drawControl.setDrawingOptions({
                // marker: {
                    // icon : icon_kekuatan
                // }
            // });
      			var marker = new L.Draw.Marker(map, {icon: icon_kekuatan});
      			marker.enable();
            jml_objc_kek++;
            tmp_arr_info_kekuatan = [];
            docId("nama_kekuatan_new").value = "";
            docId("kekuatan_pilih").innerHTML = "";
            checkedValue = [];
            // step_kekuatan(1);
            // close_pop();
            // window.location.href = "#";
        }
    }

// FUNGSI POPUP SETTING FORMASI
function simpan_formasi(){
  var status = docId("jenis_formasi_new").value.split("_");
    if (jumlah_formasi < count_formasi && status[2]!="8") {
      alert("Formasi Belum Lengkap");
    }else {
      // console.log(jumlah_formasi);
      // console.log(count_formasi);
      // console.log(status[2]);
      var array_situasi = [];
      type_plotting = "formasi";
      var wrn = docId('warna_formasi_new').value;
      var dateTime = docId("date_formasi_new").value;
      var kecepatan = document.getElementById("kecepatan_formasi_new").value;
      var satuan_jarak = document.getElementById("jenis_kec_formasi_new").value;
      var kecepatan_jarak = kecepatan+"|"+satuan_jarak;
      var size = Number(docId("formasi_size_new").value);
      warna_pilih = wrn;
        if(wrn == "red"){
         icon="image/formasi/arrow_red.png";
       }else if(wrn == "blue"){
         icon="image/formasi/arrow_blue.png";
       }

      var icon_situasi = L.icon({
          iconUrl: icon,
          iconSize: [20, 20],
          id_point: "formasi_"+jml_objc_formasi
      });
      tmp_data_formasi.push("formasi_"+jml_objc_formasi);
      tmp_data_formasi.push(dateTime);
      tmp_data_formasi.push(kecepatan_jarak);
      tmp_data_formasi.push(size);

      jml_objc_formasi++;
      // drawControl.setDrawingOptions({
      //     marker: {
      //         icon : icon_situasi
      //     }
      // });

      var marker = new L.Draw.Marker(map, {icon: icon_situasi});
      marker.enable();

      
    }

  }

// FUNGSI POPUP SETTING SATUAN
    function simpan_stng_satuan(){
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

        if(index!=""){
            var id_symbol = data_font[index].id;
            var icon_satuan = "<div style='font-weight: bolder; margin-top:-15px; width: 30px;color: "+color+"; font-size: "+size+"px; font-family: "+data_font[index].nama+"'>"+String.fromCharCode(Number(data_font[index].index))+"</div>";
            var myIcon = L.divIcon({className: 'my-div-icon', html:icon_satuan, iconSize: null, id_point: "satuan_"+jml_objc_sat+"_"+dokument_data[0][0]});
            
      			var marker = new L.Draw.Marker(map, {icon: myIcon});
      			marker.enable();
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
        }else{
            alert("Symbol Not Found !!!");
        }
    }
    function straightArrow(){
        // close_pop();
        type_plotting = "arrow";
        // window.location.href = "#";
    }
    function downarrow(){
        // close_pop();
        type_plotting = "arrow_lengkung";
        // window.location.href = "#";
    }
    function uparrow(){
        // close_pop();
        type_plotting = "arrow_lengkung_atas";
        // window.location.href = "#";
    }
    function downmanuver(){
        // close_pop();
        type_plotting = "arrow_manuver_bawah";
        // window.location.href = "#";
    }
    function upmanuver(){
        // close_pop();
        type_plotting = "arrow_manuver_atas";
        // window.location.href = "#";
    }

// FUNGSI POPUP SETTING SITUASI
    function simpan_stng_situasi(){
        var array_situasi = [];
        var icon_situasi;
        type_plotting = "situasi";
        var wrn = docId("warna_situasi_new").value;
        var size = Number(docId("situasi_size_new").value);
        var keterangan = docId("keterangan_situasi_new").value;
        if (keterangan != "") {
          if (docId('time_new').value == "now") {
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
    			var marker = new L.Draw.Marker(map, {icon: icon_situasi_});
    			marker.enable();
          jml_objc_situasi++;
          document.getElementById("keterangan_situasi_new").value = "";
        }else{
          alert("Keterangan can not be empty !!!");
        }
    }

    // FUNGSI POPUP SETTING OBSTACLE
    function pilih_obstacle(){
        var tmp_data = [];
        type_plotting = "obstacle";
        var color = docId("warna_obs_new").value;
        var index = docId("tmp_index_obs_new").innerHTML;
        var size = Number(docId("obs_size_new").value);
        var font = data_obs[index];
        var icon_obstacel = "<div style='margin-top:-15px; width: 30px;color: "+color+"; font-size: "+size+"px; font-family: TandaTanda'>"+font+"</div>";
        var myIcon = L.divIcon({className: 'my-div-icon', html:icon_obstacel, iconSize: null, id_point: "obstacle_"+jml_objc_obstacle});
        var marker = new L.Draw.Marker(map, {icon: myIcon});
        marker.enable();

        tmp_data.push("obstacle_"+jml_objc_obstacle);
        tmp_data.push(font);
        tmp_data.push(color);
        tmp_data.push(size);
        tmp_data.push("TandaTanda");
        arr_data_obstacle.push(tmp_data);
        jml_objc_obstacle++;

    };

// FUNGSI POPUP SETTING BANTUAN TEMBAKAN
    function simpan_stng_bungus(){
        var tmp_data = [];
        type_plotting = "bungus";
        var date = docId("date_bungus").value.split(" ");
        var size = docId("bungus_size_new").value;

        tmp_data.push(date[0]);
        tmp_data.push(date[1]);
        tmp_data.push("bungus_"+jml_objc_bungus);
        tmp_data.push(size);

        arr_data_bungus.push(tmp_data);

        var icon_bungus = L.icon({
            iconUrl: 'image/plotting/bungus_red.png',
            iconSize: [Number(size), Number(size)],
            id_point: "bungus_"+jml_objc_bungus
        });

  			var marker = new L.Draw.Marker(map, {icon: icon_bungus});
  			marker.enable();
        jml_objc_bungus++;
    }

// FUNGSI POPUP SETTING plot_text
    function simpan_stng_plot_text(){
        var tmp_data = [];
        type_plotting = "plot_text";
        var text_ = document.getElementById("nama_plot_text_new").value;
        var angel_ = document.getElementById("angle_plot_text_new").value;
        var size_ = Number(document.getElementById("size_plot_text_new").value);
        var weight_ = document.getElementById("weight_plot_text_new").value;
        var wrn = document.getElementById("warna_text_new").value;
        var icon_satuan = "<div style='margin-top:-15px;font-weight:"+weight_+";transform: rotate("+angel_+"deg); width: 30px;color: "+wrn+"; font-size: "+size_+"px; '>"+text_+"</div>";
        var myIcon = L.divIcon({className: 'my-div-icon', html:icon_satuan, iconSize: null, id_point: "text_"+jml_objc_sat});
        var marker = new L.Draw.Marker(map, {icon: myIcon});
        
  			marker.enable();
        tmp_data.push("text_"+jml_objc_text);
        tmp_data.push(text_);
        tmp_data.push(angel_);
        tmp_data.push(size_);
        tmp_data.push(weight_)
        tmp_data.push(wrn);

        arr_data_text.push(tmp_data);
        document.getElementById("nama_plot_text_new").value = "";
        document.getElementById("angle_plot_text_new").value = 0;
        jml_objc_text++;
    }

// FUNGSI POPUP SETTING POLYLINE
    function simpan_stng_poly(){
        var weight_pl = Number(document.getElementById("weight_poly").value);
        var opacity_pl = Number(document.getElementById("opacity_poly").value);
        opacity_pl = opacity_pl/10;
        var color_pl = document.getElementById("color_poly").value;
        var showLength_pl = true;
        var nautical_pl = false;
        var feet_pl = false;
        var kilometer_pl = false;
            var check = document.getElementById("exampleCheckboxSwitch").checked;
            if(check){
                showLength_pl = true;
            }else{
                showLength_pl = false;
            }
        var GroupPolyline = document.getElementsByName('GroupPolyline');

        for (var i = 0, length = GroupPolyline.length; i < length; i++)
        {
         if (GroupPolyline[i].checked)
         {
          // do whatever you want with the checked radio
          if(GroupPolyline[i].id == "nautical"){
            nautical_pl = true;
          }else if(GroupPolyline[i].id == "feet"){
            feet_pl = true;
          }else if(GroupPolyline[i].id == "kilometer"){
            kilometer_pl = true;
          }

          // only one radio can be logically checked, don't check the rest
          break;
         }
        }
        // console.log(color_pl);
        drawControl.setDrawingOptions({
            polyline: {
                shapeOptions: {
                    color: color_pl,
                    weight: weight_pl,
                    opacity: opacity_pl
                },
                metric: kilometer_pl,
                feet: feet_pl,
                nautic: nautical_pl,
                showLength:showLength_pl
            }
        });
        if(draw_polyline){
          draw_polyline.options = {
             shapeOptions: {
                  color: color_pl,
                  weight: weight_pl,
                  opacity: opacity_pl
              },
              metric: kilometer_pl,
              feet: feet_pl,
              nautic: nautical_pl,
              showLength:showLength_pl
          };
          console.log(draw_polyline);
        }
        if(status_draw_poly == true){
          draw_polyline = new L.Draw.Polyline(map, {
                  shapeOptions: {
                      color: color_pl,
                      weight: weight_pl,
                      opacity: opacity_pl
                  },
                  metric: kilometer_pl,
                  feet: feet_pl,
                  nautic: nautical_pl,
                  showLength:showLength_pl
          });
          draw_polyline.enable();
          status_draw_poly = false;
        }else{
          draw_polyline = "";
        }
    }
    // FUNGSI POPUP SETTING POLYGON
    function simpan_stng_polygon(){
        var weight = document.getElementById("weight_polygon").value;
        var color = document.getElementById("color_polygon").value;
        var fillcolor = document.getElementById("fillcolor_polygon").value;
        var opacity = Number(document.getElementById("opacity_polygon").value);
        var showLength_pg = true;

        var check = document.getElementById("polygon_area").checked;
        if(check){
            showLength_pg = true;
        }else{
            showLength_pg = false;
        }
        drawControl.setDrawingOptions({
            polygon: {
                shapeOptions: {
                    fillColor: fillcolor,
                    fillOpacity: opacity/10,
                    color: color,
                    weight: weight
                },
                showArea: showLength_pg,
                allowIntersection: false,
                drawError: {
                  color: '#e1e100', // Color the shape will turn when intersects
                  message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
                }
            },
            rectangle:{
                shapeOptions: {
                    fillColor: fillcolor,
                    fillOpacity: opacity/10,
                    color: color,
                    weight: weight
                }
            },circle:{
              shapeOptions: {
                    fillColor: fillcolor,
                    fillOpacity: opacity/10,
                    color: color,
                    weight: weight
                },
                showArea: showLength_pg,
                allowIntersection: false
            }
        });
        // window.location.href = "#";
        // close_pop();
    };
    // FUNGSI POPUP SETTING RADAR
    var arr_radar_circle = [];
    var tmpGraph_radar = [];
    var circle_graph_radar = [];
    function createRadar(aPoint, radius,color,graph,status,edit){
          var counter = 1;
          var tmpGraph = null;
          var index;
          if(status == "add"){
            tmpGraph_radar.push("");
            index = tmpGraph_radar.length-1;
            circle_graph_radar.push(graph);
          }else{
            index = edit;
            circle_graph_radar[index] = graph;
          }
          
          var tmp = setInterval(function(){
            if (counter <= 360){

              var tmpx = aPoint.lat+ (((radius)/111300) *(Math.sin(counter * Math.PI / 180)));
              var tmpy = aPoint.lng+ (((radius)/111300) *(Math.cos(counter * Math.PI / 180)));

              var pointA = [Number(aPoint.lat), Number(aPoint.lng)];
              var pointB = [tmpx,tmpy];
              var polyline = [pointA,pointB];


              if (tmpGraph != null){
                drawnItems.removeLayer(tmpGraph);
              }
              var pathLine = L.polyline(polyline, {
                color: color
              });
              tmpGraph = pathLine;
              drawnItems.addLayer(pathLine);
              tmpGraph_radar[index] = pathLine;
              // console.log(tmpGraph_radar[index]);

              counter ++;
            }else{counter = 1;}

          }, 10);

          if(status == "add"){
            arr_radar_circle.push(tmp);
          }else{
            arr_radar_circle[index] = tmp;
          }

        };
    function simpan_stng_radar(){
        var tmp_data = [];
        type_plotting = "radar";
        var nama_radar = docId("radar_name_new").value;
        var index = Number(docId("tmp_index_radar_new").innerHTML);
        var radius = Number(docId("radar_jarak").value);
        var wrn = docId("warna_radar_new").value;
        var size = Number(docId("radar_size_new").value);
        if (wrn=="blue") {
         var color =  "blue";
        }else if(wrn=="red"){
          var color = "red";
        }
        // console.log(radius);
        if(nama_radar==""){
            alert("name can not be empty !!!");
        }else if(index == ""){
            alert("symbol can not be empty !!!");
        }else if(radius == 0){
            alert("radius can not be empty !!!");
        }else{
            var id_symbol = data_font[index].id;
            var icon_satuan = "<div style='margin-top:-15px; width: 30px;color: "+color+"; font-size: "+size+"px; font-family: "+data_font[index].nama+"'>"+String.fromCharCode(Number(data_font[index].index))+"</div>";
            var myIcon = L.divIcon({className: 'my-div-icon', html:icon_satuan, iconSize: null, id_point: "radar_"+jml_objc_sat});
            // drawControl.setDrawingOptions({
                // marker: {
                    // icon : myIcon
                // }
            // });
      			var marker = new L.Draw.Marker(map, {icon: myIcon});
      			marker.enable();

            tmp_data.push("radar_"+jml_objc_radar);
            tmp_data.push(nama_radar);
            tmp_data.push(data_font[index]);
            tmp_data.push(radius*1852);
            tmp_data.push(wrn);
            tmp_data.push(size);
            arr_data_radar.push(tmp_data);
            jml_objc_radar++;

            document.getElementById("radar_name_new").value = "";
            document.getElementById("prev_radar_new").innerHTML = "";
            document.getElementById("tmp_index_radar_new").innerHTML = "";
        }
    }
    // FUNGSI POPUP SETTING MANUVER
    function simpan_stng_manuever(){
        var tmp_data = [];
        type_plotting = "manuever";
        var nama_manuever = docId("manuver_name_new").value;
        var index = docId("tmp_index_manuver_new").innerHTML;
        var color = docId('warna_manuver_new').value;
        var size = docId("manuver_size_new").value;
        if(nama_manuever==""){
            alert("name can not be empty !!!");
        }else if(index==""){
            alert("symbol can not be empty !!!");
        }else{
            var id_symbol = data_font[index].id;
            var icon_satuan = "<div style='margin-top:-15px;font-weight:bolder; width: 30px;color: "+color+"; font-size: "+size+"px; font-family: "+data_font[index].nama+"'>"+String.fromCharCode(Number(data_font[index].index))+"</div>";
            var myIcon = L.divIcon({className: 'my-div-icon', html:icon_satuan, iconSize: null, id_point: "manuever_"+jml_objc_sat});
            // drawControl.setDrawingOptions({
                // marker: {
                    // icon : myIcon
                // }
            // });
      			var marker = new L.Draw.Marker(map, {icon: myIcon});
      			marker.enable();

            tmp_data.push("manuever_"+jml_objc_manuever);
            tmp_data.push(nama_manuever);
            tmp_data.push(data_font[index]);
            tmp_data.push(color);
            tmp_data.push(size);

            arr_data_manuever.push(tmp_data);
            console.log(arr_data_manuever);
            document.getElementById("manuver_name_new").value = "";
            document.getElementById("tmp_index_manuver_new").innerHTML = "";
            document.getElementById("prev_manuver_new").innerHTML = "";
            jml_objc_manuever++;
        }
    }
  // FUNGSI POPUP SETTING PASSEN
  var b_passen = 0;
  var arr_passen = [1];
  function addToform_passen(i) {
    var tbody = document.getElementById("table_nm_pasukan");
    var rw = tbody.insertRow(0);

    var cell1 = rw.insertCell(0);//symbol
    var cell2 = rw.insertCell(1);//jumlah

    cell1.innerHTML = "<input type='text' id='passen_name_"+i+"' value=''>";
    cell2.innerHTML = "<a onClick='removeRecord_passen(this);'>hapus</a>";
  }
  function removeRecord_passen(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table_nm_pasukan").deleteRow(i-1);
  }
    function simpan_stng_plot_passen(){
        var tmp_data = [];
        var nama = [];
        var json_passen;
        type_plotting = "passen";
        var wrn = docId("warna_passen_new").value;
        var nama_passen = docId("passen_name_new").value;
        var size = docId("passen_size_new").value;
        for(var _data=0;_data<arr_passen.length;_data++){
          if(docId("pasukan_"+arr_passen[_data])){
            var value = docId('pasukan_'+arr_passen[_data]).value;
            nama.push(value);
          }
        json_passen = JSON.stringify(nama);
        }
        var icon = "";
        if (wrn=="blue") {
         var color =  "blue";
         icon = "point_blue.png";
        }else if(wrn=="red"){
          var color = "red";
          icon = "point_red.png";
        }
        var icon_passen = L.icon({
            iconUrl: 'image/plotting/'+icon,
            iconSize: [Number(size), Number(size)],
            id_point : "passen_"+jml_objc_passen,
            warna : color
        });
        // drawControl.setDrawingOptions({
        //     marker: {
        //         icon : icon_passen
        //     }
        // });
        var marker = new L.Draw.Marker(map, {icon: icon_passen});
            marker.enable();
        tmp_data.push("passen_"+jml_objc_passen);
        tmp_data.push(nama);
        tmp_data.push(color);
        tmp_data.push(nama_passen);
        tmp_data.push(size);

        arr_data_passen.push(tmp_data);
        docId("daftar_pasukan").innerHTML = '<p>'+
                '<input type="text" name="pasukan_1" id="pasukan_1" style="width: 200px;float: left;" placeholder="pasukan 1">'+
                '</p>';
        jml_objc_passen++;
        arr_passen = [];
        // console.log(arr_data_passen);
        // console.log(json_passen);
    }
    // FUNGSI UNTUK SAVE DATA JSON TO GEOJSON
    function layerToJSON(layer){
        var j = layer.toGeoJSON();
        var feature = "";
        j.properties = layer.options;
        j.id_point = layer._leaflet_id;
        feature += JSON.stringify(j)
        return JSON.parse(feature);
    }
    function drawnItemsToJSON(ilayer) {
        var json = '{"type": "FeatureCollection","features": [';
        var features = "";
        ilayer.eachLayer(function(layer) {
             features += JSON.stringify(layerToJSON(layer)) + ",";
        });
      return  JSON.parse(json + features.slice(0,-1) + ']}');
    };

    function saveToFile(content, filename) {
      var file = filename + '.geojson';
      saveAs(new File([JSON.stringify(content)], file, {
        type: "text/plain;charset=utf-8"
      }), file);
    }
     // ======================================== FUNGSI LOAD DATA ==================================================//
    function getContentLoad(layer,type_plot,data_info){
      // console.log(layer);
      // console.log(type_plot);
      // console.log(data_info);
        if (layer instanceof L.Marker) {
            var data = "";
            if(type_plot == "satuan"){
                var info_ = JSON.parse(data_info.info);
                var style_ = JSON.parse(data_info.style);
                var kecepatan = info_.kecepatan.split("|");
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
                                        "<td style='font-family: "+style_.nama+"; font-size: 30px' >"+String.fromCharCode(Number(style_.index))+"</td>"+
                                        "<td>"+info_.nama_satuan+"</td>"+
                                        "<td>"+info_.nomer_satuan+"</td>"+
                                        "<td>"+info_.nomer_atasan+"</td>"+
                                        "<td>"+kecepatan[0]+" "+kecepatan[1]+"</td>"+
                                    "</tr>"+
                                    "<tr>"+
                                        "<td>Keterangan</td>"+
                                        "<td colspan = '4'>: "+style_.keterangan+"</td>"+
                                    "</tr>"+
                                "</tbody>"+
                            "</table></div>";
                    
                }else if(type_plot == "kekuatan"){
                    var info_kekuatan_arr = JSON.parse(data_info.info_kekuatan);
                    var rincian = JSON.parse(data_info.rincian);
                    var info_kekuatan = "";
                    for(var a = 0;a<info_kekuatan_arr.length; a++){
                        var tmp_kekuatan = "<tr>"+
                                                "<td style='color: "+rincian.warna+";font-family: "+info_kekuatan_arr[a].font.nama+"; font-size: 30px' >"+String.fromCharCode(Number(info_kekuatan_arr[a].font.index))+"</td>"+
                                                "<td>"+info_kekuatan_arr[a].jumlah+"</td>"+
                                            "</tr>";
                        info_kekuatan = info_kekuatan+tmp_kekuatan;
                    }
                    data = "<div style='width: auto;'><center><p>Info kekuatan</p></center>"+
                                "<div style='width : 400px;'>"+
                                "<label>Nama Kekuatan : "+rincian.nama_kekuatan+"</label>"+
                                "<label>Tanggal mulai : "+rincian.tgl_mulai+"</label>"+
                                "<label>Kecepatan : "+rincian.kecepatan+"</label>"+
                                "<table style='width : 100%;max-height: 300px;overflow: auto;text-align: center;'>"+
                                    "<thead>"+
                                        "<tr>"+
                                            "<td>Symbol</td>"+
                                            "<td>Jumlah</td>"+
                                        "</tr>"+
                                    "</thead>"+
                                    "<tbody>"+info_kekuatan+"</tbody>"+
                                "</table></div></div>";
                }else if(type_plot == "situasi"){
                    var info_situasi = JSON.parse(data_info.info_situasi);
                    data = "<div style='width: auto;'><center><p>Info Situasi</p></center><table style='width : 300px;table-layout: fixed;'>"+
                                    "<tbody>"+
                                        "<tr>"+
                                            "<td width='25%'>TW</td>"+
                                            "<td width='5%'>:</td>"+
                                            "<td width='60%'>"+info_situasi.tgl_situasi+" "+info_situasi.waktu_situasi+"</td>"+
                                        "</tr>"+
                                        "<tr>"+
                                            "<td>Keterangan</td>"+
                                            "<td>:</td>"+
                                            "<td style='word-wrap: break-word;'>"+info_situasi.isi_situasi+"</td>"+
                                        "</tr>"+
                                    "</tbody>"+
                                "</table></div>";  
                }else if(type_plot == "obstacle"){
                    var obstacle = JSON.parse(data_info.info_obstacle);
                    data = "<div style='width: auto;'><center><p>Obstacle</p><p style='font-family: TandaTanda;color: "+obstacle[2]+"; font-size: 40px; width : 100px;'>"+obstacle[1]+"</p></center>"+
                                "</div>";
                }else if(type_plot == "manuever"){
                    var manuever = JSON.parse(data_info.info_manuver);
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
                                        "<td style='font-family: "+manuever.nama+"; font-size: 30px' >"+String.fromCharCode(Number(manuever.index))+"</td>"+
                                        "<td>&nbsp;</td>"+
                                        "<td>"+data_info.nama_manuver+"</td>"+
                                    "</tr>"+
                                    "<tr>"+
                                        "<td>Keterangan</td>"+
                                        "<td>:</td>"+
                                        "<td colspan = '1'>"+manuever.keterangan+"</td>"+
                                    "</tr>"+
                                "</tbody>"+
                            "</table></div>";
                }else if(type_plot == "bungus"){
                    var bungus = JSON.parse(data_info.info_bungus);
                    // console.log(bungus);
                    data = "<div style='width: auto;'><center><p>Info Bantuan Tembakan</p></center><table style='width : 320px;'>"+
                                "<tbody>"+
                                    "<tr>"+
                                        "<td>Waktu kemunculan</td>"+
                                        "<td>:</td>"+
                                        "<td>"+bungus[0]+" "+bungus[1]+"</td>"+
                                    "</tr>"+
                                "</tbody>"+
                            "</table></div>";
                }else if(type_plot == "passen"){
                    var infopassen = JSON.parse(data_info.info_passen);
                    var info_passen = "";
                    for(var a = 0;a<infopassen.length;a++){
                        var b = a+1;
                        var tmp_passen = "<tr>"+
                                            "<td>"+b+"</td>"+
                                            "<td>"+infopassen[a]+"</td>"+
                                        "</tr>";
                        info_passen = info_passen+tmp_passen;
                    }
                    data = "<div style='width: auto;'><center><p>Pasukan Sendiri</p></center>"+
                                "<div style='width : 400px;'>"+
                                "<table style='width : 100%;max-height: 300px;overflow: auto;text-align: center;'>"+
                                    "<thead>"+
                                        "<tr>"+
                                            "<td>No</td>"+
                                            "<td>Nama Pasukan sendiri</td>"+
                                        "</tr>"+
                                    "</thead>"+
                                    "<tbody>"+info_passen+"</tbody>"+
                                "</table></div></div>";
                    // console.log(passen);
                }else if(type_plot == "radar"){
                    var inforadar = JSON.parse(data_info.info_radar);
                    var infosymbol = JSON.parse(data_info.info_symbol);

                    var circle = L.circle([Number(data_info.lat_y), Number(data_info.lng_x)], {
                        color: inforadar.warna,
                        fillColor: inforadar.warna,
                        fillOpacity: 0.3,
                        radius: Number(inforadar.radius)
                    }); 
                    var latlng = {lat: Number(data_info.lat_y),lng: Number(data_info.lng_x)};
                    createRadar(latlng,Number(inforadar.radius),inforadar.warna,circle,"add",0);
                    drawnItems.addLayer(circle);

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
                                            "<td style='font-family: "+infosymbol.nama+"; font-size: 30px' >"+String.fromCharCode(Number(infosymbol.index))+"</td>"+
                                            "<td>&nbsp;</td>"+
                                            "<td>"+inforadar.nama_radar+"</td>"+
                                            "<td>"+inforadar.radius+"</td>"+
                                        "</tr>"+
                                        "<tr>"+
                                            "<td>Keterangan</td>"+
                                            "<td>:</td>"+
                                            "<td colspan = '2'>"+infosymbol.keterangan+"</td>"+
                                        "</tr>"+
                                    "</tbody>"+
                                "</table></div>";

                }else if(type_plot == "logistik"){
                    var isiLogistik = JSON.parse(data_info.isi_logistik);
                    var infoLogistik = JSON.parse(data_info.info_logistik);
                    var info_logis = "";
                    for(var a = 0;a<isiLogistik.length;a++){
                    var b = a+1;
                    var tmp_logis = "<tr>"+
                                        "<td>"+b+"</td>"+
                                        "<td>"+isiLogistik[a].judul+"</td>"+
                                        "<td>"+isiLogistik[a].isi+"</td>"+
                                    "</tr>";
                    info_logis = info_logis+tmp_logis;
                    }
                    data = "<div style='width: auto;'><center><p>Info Logistik </p></center>"+
                            "<center>"+infoLogistik[1]+"</center>"+
                            "<center>"+data_info.jenis+"</center>"+
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
                    var infoformasi = JSON.parse(data_info.info_formasi);
                    var isi_data = "";
                    for(var a = 0; a< infoformasi.length; a++){
                        if(map.getZoom() >= 10){
                            var myIcon = L.divIcon({className: 'my-div-icon', html:infoformasi[a].symbol.options.html, iconSize: null, id_point: infoformasi[a].symbol.options.id_point});
                            marker = new L.Marker([Number(infoformasi[a].lng),Number(infoformasi[a].lat)], {icon : myIcon});
                            formasilayer.addLayer(marker);
                        }else{
                        }
                        var res = String.fromCharCode(Number(infoformasi[a].index_symbol));
                        var tmp_isi_data = "<tr>"+
                                          "<td  width='20%' style='font-size: 30px; font-family: "+infoformasi[a].family_symbol+";'>"+res+"</<td>"+
                                          "<td colspan = '2'>"+infoformasi[a].keterangan_symbol+"</td>"+
                                      "</tr>";

                        isi_data = isi_data + tmp_isi_data;
                    };
                    data = "<div style='width: auto;'><center><p>Info Formasi</p></center><table style='width : 300px;'>"+
                                  "<tbody>"+
                                      "<tr>"+
                                          "<td> Simbol </td>"+
                                          "<td> Keterangan </td>"+
                                      "</tr>"+isi_data+
                                  "</tbody>"+
                              "</table></div>";
                };
            return data;
        }
        return null;
    }
    function icon_load(data_,type_plot){
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
        daftar_arr_layer.push(layer_load);
        drawnItems.addLayer(layer_load);
        daftar_list_objc();
    }
    function icon_default_load(data_,type_plot){
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
        daftar_arr_layer.push(layer_load);
        drawnItems.addLayer(layer_load);
        daftar_list_objc();
    }
    function function_load_data(){
      for (var i = 0; i < dokument_data.length; i++) {
        var link_load_dokumen = "status=ambil_load_dokumen&id_user="+dokument_data[i][0]+"&nama_dokumen="+dokument_data[i][1]+"&type="+dokument_data[i][2]+"&skenario="+dokument_data[i][3];
        var get_load_dokumen = get_db(link_load_dokumen);
        var data_load_dokumen = get_load_dokumen;
        // removeAllLayer();
        jml_objc_sat = 0;
        jml_objc_kek = 0;
        jml_objc_situasi = 0;
        // ARRAY 0 SATUAN
        if(data_load_dokumen[0]){
            var data_satuan_load = data_load_dokumen[0];
            for(var a = 0;a<data_satuan_load.length;a++){
                var tmp = [];
                var data_ = data_satuan_load[a];
                var info_ = JSON.parse(data_.info);
                var namasatuan = data_.nama.split("_");

                tmp.push(data_.nama);
                tmp.push(JSON.parse(data_.style));
                tmp.push(info_.tgl_mulai);
                tmp.push(info_.kecepatan);
                tmp.push(info_.nomer_satuan);
                tmp.push(info_.nama_satuan);
                tmp.push(info_.nomer_atasan);
                tmp.push(data_.id_symbol);
                tmp.push(info_.tgl_selesai);
                tmp.push(info_.warna);
                tmp.push(info_.size);

                data_satuan.push(tmp);

                icon_load(data_,"satuan");
                jml_objc_sat = Number(namasatuan[1]) + 1;
            }
        }
        // ARRAY 1 KEKUATAN
        if(data_load_dokumen[1]){
            var data_kekuatan_load = data_load_dokumen[1];
            for(var a = 0;a<data_kekuatan_load.length;a++){
                var data_ = data_kekuatan_load[a];
                var rincian = JSON.parse(data_.rincian);
                var namakekuatan = data_.nama.split("_");
                var tmp = [];

                tmp.push(data_.nama);
                tmp.push(rincian.nama_kekuatan);
                tmp.push(JSON.parse(data_.info_kekuatan));
                tmp.push(rincian.tgl_mulai);
                tmp.push(rincian.kecepatan);
                tmp.push(Number(data_.size));
                tmp.push(rincian.warna);
                tmp.push(rincian.ket);

                arr_data_kekuatan.push(tmp);

                icon_default_load(data_,"kekuatan");
                jml_objc_kek = Number(namakekuatan[1]) + 1;

            }
        }
        // ARRAY 2 SITUASI
        if(data_load_dokumen[2]){
            var data_situasi_load = data_load_dokumen[2];
            for(var a = 0;a<data_situasi_load.length;a++){
                var data_ = data_situasi_load[a];
                var tmp = [];
                var info_ = JSON.parse(data_.info_situasi);
                var namasituasi = data_.nama.split("_");

                tmp.push(info_.isi_situasi);
                tmp.push(info_.tgl_situasi);
                tmp.push(info_.waktu_situasi);
                tmp.push(data_.nama);

                arr_data_situasi.push(tmp);
                icon_default_load(data_,"situasi");
                jml_objc_situasi = Number(namasituasi[1]) + 1;
            }
        }

        // ARRAY 3 OBSTACLE
        if(data_load_dokumen[3]){
            var data_obstacle_load = data_load_dokumen[3];
            for(var a = 0;a<data_obstacle_load.length;a++){
                var data_ = data_obstacle_load[a];
                var info_ = JSON.parse(data_.info_obstacle);
                var namaobstacle = data_.nama.split("_");

                arr_data_obstacle.push(info_);
                icon_load(data_,"obstacle");
                jml_objc_obstacle = Number(namaobstacle[1]) + 1;
            }
        }

        // ARRAY 4 MANUVER
        if(data_load_dokumen[4]){
            var data_manuver_load = data_load_dokumen[4];
            for(var a = 0;a<data_manuver_load.length;a++){
                var tmp = [];
                var data_ = data_manuver_load[a];
                var info_ = JSON.parse(data_.info_manuver);
                var namamanuver = data_.nama.split("_");

                tmp.push(data_.nama);
                tmp.push(data_.nama_manuver);
                tmp.push(info_);
                tmp.push(data_.warna);
                tmp.push(data_.size);

                arr_data_manuever.push(tmp);
                icon_load(data_,"manuever");
                jml_objc_manuever = Number(namamanuver[1] + 1);
                // console.log(arr_data_manuever);
                // console.log(data_);
            }

        }
        // ARRAY 5 BUNGUS
        if(data_load_dokumen[5]){
            var data_bungus_load = data_load_dokumen[5];
            for(var a = 0;a<data_bungus_load.length;a++){
                var tmp = [];
                var data_ = data_bungus_load[a];
                // console.log(data_);
                var info_ = JSON.parse(data_.info_bungus);
                var namabungus = data_.nama.split("_");

                arr_data_bungus.push(info_);

                icon_default_load(data_,"bungus");

                jml_objc_bungus = Number(namabungus[1]) + 1;
            }
        }
        // ARRAY 6 PASSEN
        if(data_load_dokumen[6]){
            var data_passen = data_load_dokumen[6]
            for(var a = 0;a<data_passen.length;a++){
                var tmp = [];
                var data_ = data_passen[a];
                var info_ = JSON.parse(data_.info_passen);
                var symbol = JSON.parse(data_.symbol);
                var namapassen = data_.nama.split("_");
                // console.log(data_);
                tmp.push(data_.nama);
                tmp.push(info_);
                tmp.push(data_.warna);
                tmp.push(data_.nama_passen);
                tmp.push(data_.size);
                arr_data_passen.push(tmp);

                icon_default_load(data_,"passen");
            }

        }

        // ARRAY 7 RADAR
        if(data_load_dokumen[7]){
            var data_radar_load = data_load_dokumen[7];
            for(var a = 0;a<data_radar_load.length; a++){
                var tmp = [];
                var data_ = data_radar_load[a];
                var info_ = JSON.parse(data_.info_radar);
                var infosymbol = JSON.parse(data_.info_symbol);
                var namaradar = data_.nama.split("_");

                tmp.push(data_.nama);
                tmp.push(info_.nama_radar);
                tmp.push(infosymbol);
                tmp.push(info_.radius);
                tmp.push(info_.warna);
                tmp.push(info_.size);

                arr_data_radar.push(tmp);
                // console.log(arr_data_radar);
                icon_load(data_,"radar");

                jml_objc_radar = Number(namaradar[1]) + 1;
            }
        }
        // ARRAY 8 LOGISTIK
        if(data_load_dokumen[8]){
            var data_logis_load = data_load_dokumen[8];
            for(var a = 0;a<data_logis_load.length; a++){
                var tmp = [];
                var data_ = data_logis_load[a];
                var infologis = JSON.parse(data_.info_logistik);
                var isilogis = JSON.parse(data_.isi_logistik);
                var namalogis = data_.nama.split("_");
                tmp.push(infologis);
                tmp.push(Number(data_.lng_x));
                tmp.push(Number(data_.lat_y));
                tmp.push(isilogis);
                tmp.push(data_.jenis);
                tmp.push(data_.warna);
                tmp.push(data_.nama);
                tmp.push(data_.size);

                all_logistik.push(tmp);

                if(namalogis[2] == "bandara"){
                    icon_load(data_,"logistik");
                    jml_objc_bandara = Number(namalogis[1]) + 1;
                }else if(namalogis[2] == "pelabuhan"){
                    icon_load(data_,"logistik");
                    jml_objc_pesawat = Number(namalogis[1]) + 1;
                }else if(namalogis[2] == "bebas"){
                    icon_default_load(data_, "logistik");
                    jml_objc_bebas = Number(namalogis[1]) + 1;
                }
            }
        }
        // ARRAY 9 FORMASI
        if(data_load_dokumen[9]){
            var data_formasi_load = data_load_dokumen[9];
            // console.log(data_formasi_load);
            for(var a = 0;a<data_formasi_load.length;a++){
                var tmp = [];
                var data_ = data_formasi_load[a];
                // console.log(data_);
                var infoformasi = JSON.parse(data_.info_formasi);

                tmp.push(data_.nama);
                tmp.push(data_.tgl_formasi);
                tmp.push(data_.kecepatan);
                tmp.push(data_.size);
                tmp.push(infoformasi);
                tmp.push(data_.jenis_formasi);
                tmp.push(data_.warna);

                arr_data_formasi.push(tmp);
                icon_default_load(data_,"formasi");
            }
        }
        // ARRAY 10 TOOLS
        if(data_load_dokumen[10]){
            var data_tool_data = data_load_dokumen[10];
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
                drawnItems.addLayer(pathLine);
                jml_objc_polyline = Number(namatool[1]) + 1;
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
                console.log(namatool[0]);
                if(namatool[0] == "arrowlurus"){
                  jml_objc_arrow_lurus = Number(namatool[1]) + 1;
                }else if(namatool[0] == "ArrowAtas"){
                  jml_objc_arrow_lengkung_a = Number(namatool[1]) + 1;
                }else if(namatool[0] == "ArrowBawah"){
                  jml_objc_arrow_lengkung_b = Number(namatool[1]) + 1;
                }else if(namatool[0] == "ArrowAtasMan"){
                  jml_objc_arrow_manuver_a = Number(namatool[1]) + 1;
                }else if(namatool[0] == "ArrowBawahMan"){
                  jml_objc_arrow_manuver_b = Number(namatool[1]) + 1;
                }else{
                  jml_objc_polygon = Number(namatool[1]) + 1;
                }
                drawnItems.addLayer(polygon);
              }else if(data_tool_data[a].type == "circle"){
                var geometry = JSON.parse(data_tool_data[a].geometry);
                var properties = JSON.parse(data_tool_data[a].properties);
                var namatool = data_tool_data[a].nama.split("_");
                var circle = L.circle([geometry.coordinates[1], geometry.coordinates[0]], properties.radius, {
                  color: properties.color,
                  opacity: 1,
                  fillColor: properties.fillColor,
                  fillOpacity: properties.fillOpacity,
                  weight: properties.weight
                });
                circle._leaflet_id = data_tool_data[a].nama;
                jml_objc_circle = Number(namatool[1]) + 1;
                drawnItems.addLayer(circle);
              }
            }
        }
        //  ARRAY 11 TEXT
        if(data_load_dokumen[11]){
          var data_text_load = data_load_dokumen[11];
          for(var a = 0; a<data_text_load.length;a++){
            var tmp = [];
            var data_ = data_text_load[a];
            var infotext = JSON.parse(data_.info_text);
            var namatext = data_.nama.split("_");

            tmp.push(data_.nama);
            tmp.push(infotext.text);
            tmp.push(infotext.angel_);
            tmp.push(infotext.size);
            tmp.push(infotext.weight);
            tmp.push(infotext.warna);

            arr_data_text.push(tmp);
            icon_load(data_,"text")
            jml_objc_text = Number(namatext[1]) + 1;
            
          }
        }
        
      }

  // Time list
  first_timelist();
    }
    // ======================================== FUNGSI SAVE DATA ==================================================//
    function cek_hapus_database(nama_dokumen,id_user){
        $.ajax({
            url: "source_post.php",
            type: "POST",
            data: {
                status : "hapus",
                document : nama_dokumen,
                id_user : id_user,
                type : dokument_data[0][2],
                skenario : dokument_data[0][3]
            },
            success: function(html){
                if(html){
                    alert(html);
                }else{
                    // alert("OK");
                }
            }
        });
    }
    function function_simpan(){
        var data_layer = drawnItemsToJSON(drawnItems);
        var tampung_data_satuan_l = [];
        var tampung_data_kekuatan_l = [];
        var tampung_data_situasi_l = [];
        var tampung_data_obstacle_l = [];
        var tampung_data_manuver_l = [];
        var tampung_data_bungus_l = [];
        var tampung_data_passen_l = [];
        var tampung_data_radar_l = [];
        var tampung_data_logistik_l = [];
        var tampung_data_formasi_l = [];
        var tampung_data_toolbar_l = [];
        var tampung_data_text_l = [];

        var features = data_layer.features;
        var simpan_satuan = [];
        var simpan_kekuatan = [];
        var nama_document = dokument_data[0][1];
        if(nama_document==""){
            alert("Nama Harus di isi !!");
        }else{
            cek_hapus_database(nama_document,dokument_data[0][0]);
            // dokument_data[1] = nama_document;
            features.forEach(function(data_layer){
            var arr_layer = [];

            if(data_layer.geometry.type == "LineString"){
                // arr_layer.push();
                var id = data_layer.id_point.length;
                // console.log(id);
                if(id >= 4){
                    var geometry = JSON.stringify(data_layer.geometry);
                    var proprties = JSON.stringify(data_layer.properties);

                    arr_layer.push(Number(dokument_data[0][0]));//id_user
                    arr_layer.push(nama_document);//dokument
                    arr_layer.push(data_layer.id_point);//nama
                    arr_layer.push(geometry);// geometry
                    arr_layer.push(proprties);// properti
                    arr_layer.push(data_layer.geometry.type);

                    tampung_data_toolbar_l.push(arr_layer);
                }
            }else if(data_layer.geometry.type == "Polygon"){
                var id = data_layer.id_point.length;
                // console.log(id);
                if(id >= 4){
                    var geometry = JSON.stringify(data_layer.geometry);
                    var proprties = JSON.stringify(data_layer.properties);

                    arr_layer.push(Number(dokument_data[0][0]));//id_user
                    arr_layer.push(nama_document);//dokument
                    arr_layer.push(data_layer.id_point);//nama
                    arr_layer.push(geometry);// geometry
                    arr_layer.push(proprties);// properti
                    arr_layer.push(data_layer.geometry.type);

                    tampung_data_toolbar_l.push(arr_layer);
                }
            }
            else if(data_layer.geometry.type == "Point"){
            if(data_layer.properties.icon){
                var properties = data_layer.properties.icon.options;
                var tmp_id = properties.id_point.split("_");
                // console.log(tmp_id[0]);
                if(tmp_id[0] == "satuan"){
                    data_satuan.forEach(function(arr_sat){
                        if(arr_sat[0] == properties.id_point){
                            var info = JSON.stringify(
                              {
                                kecepatan: arr_sat[3], 
                                nomer_satuan: arr_sat[4], 
                                nama_satuan: arr_sat[5], 
                                nomer_atasan: arr_sat[6],
                                tgl_mulai: arr_sat[2],
                                tgl_selesai : arr_sat[8],
                                warna : arr_sat[9],
                                size : arr_sat[10]
                              });
                            var style = JSON.stringify(arr_sat[1]);
                            
                            arr_layer.push(Number(dokument_data[0][0]));//id_user
                            arr_layer.push(Number(arr_sat[7]));//id_symbol
                            arr_layer.push(nama_document);//dokument
                            arr_layer.push(arr_sat[0]);//nama
                            arr_layer.push(data_layer.geometry.coordinates[1]);//lat
                            arr_layer.push(data_layer.geometry.coordinates[0]);//lng
                            arr_layer.push(properties.html);//symbol
                            arr_layer.push(style);//style
                            arr_layer.push(info);//info
                            tampung_data_satuan_l.push(arr_layer);

                            console.log(tampung_data_satuan_l);
                            arr_layer = [];
                        };
                    });
                }else if(tmp_id[0] == "kekuatan"){
                    arr_data_kekuatan.forEach(function(arr_kek){
                        if(arr_kek[0] == properties.id_point){
                            var info_kekuatan = JSON.stringify(arr_kek[2])
                            var rincian = JSON.stringify({
                              nama_kekuatan: arr_kek[1], 
                              tgl_mulai: arr_kek[3], 
                              kecepatan: arr_kek[4],
                              warna: arr_kek[6],
                              ket : arr_kek[7]
                            });

                            arr_layer.push(id_user);//id_user
                            arr_layer.push(nama_document);//dokumen
                            arr_layer.push(arr_kek[0]);//nama
                            arr_layer.push(data_layer.geometry.coordinates[1]);//lat
                            arr_layer.push(data_layer.geometry.coordinates[0]);//lng
                            arr_layer.push(info_kekuatan);//info_kekuatan
                            arr_layer.push(rincian);//rincian
                            arr_layer.push(arr_kek[5]);//size
                            tampung_data_kekuatan_l.push(arr_layer);
                            arr_layer = [];
                        };
                    });
                            
                }else if(tmp_id[0] == "situasi"){
                    arr_data_situasi.forEach(function(arr_sit){
                        if(arr_sit[3] == properties.id_point){
                            var info_situasi =JSON.stringify({isi_situasi: arr_sit[0], tgl_situasi: arr_sit[1], waktu_situasi: arr_sit[2]});
                            var icon = JSON.stringify(data_layer.properties.icon.options);

                            arr_layer.push(id_user);//id_user
                            arr_layer.push(nama_document);//dokumen
                            arr_layer.push(arr_sit[3]);//nama
                            arr_layer.push(data_layer.geometry.coordinates[1]);//lat
                            arr_layer.push(data_layer.geometry.coordinates[0]);//lng
                            arr_layer.push(arr_sit[4]);//size
                            arr_layer.push(info_situasi);//info_situasi
                            arr_layer.push(icon);//icon

                            tampung_data_situasi_l.push(arr_layer);
                            arr_layer = [];
                        }
                    });
                }else if(tmp_id[0] == "obstacle"){
                    // console.log(arr_data_obstacle);
                    // console.log(data_layer);
                    arr_data_obstacle.forEach(function(arr_obst){
                        if(arr_obst[0] == properties.id_point){
                            var info_obst = JSON.stringify(arr_obst);
                            var icon = JSON.stringify(data_layer.properties.icon.options);

                            arr_layer.push(id_user);//id_user
                            arr_layer.push(nama_document);//dokumen
                            arr_layer.push(arr_obst[0]);//nama
                            arr_layer.push(data_layer.geometry.coordinates[1]);//lat
                            arr_layer.push(data_layer.geometry.coordinates[0]);//lng
                            arr_layer.push(info_obst);//info Obstacle
                            arr_layer.push(icon);//icon

                            tampung_data_obstacle_l.push(arr_layer);
                            arr_layer = [];
                        }
                    });
                }else if(tmp_id[0] == "manuever"){
                    arr_data_manuever.forEach(function(arr_manuv){
                        if(arr_manuv[0] == properties.id_point){
                            var info_manuv = JSON.stringify(arr_manuv[2]);
                            var icon = JSON.stringify(data_layer.properties.icon.options);

                            arr_layer.push(id_user);//id_user
                            arr_layer.push(nama_document);//dokumen
                            arr_layer.push(arr_manuv[0]);//nama
                            arr_layer.push(data_layer.geometry.coordinates[1]);//lat
                            arr_layer.push(data_layer.geometry.coordinates[0]);//lng
                            arr_layer.push(arr_manuv[1]);//nama_manuver
                            arr_layer.push(info_manuv);//info_manuver
                            arr_layer.push(icon);//icon_manuver
                            arr_layer.push(arr_manuv[3]);//warna
                            arr_layer.push(arr_manuv[4]);//size

                            tampung_data_manuver_l.push(arr_layer);

                            console.log(tampung_data_manuver_l);
                            arr_layer = [];
                        };
                    });
                }else if(tmp_id[0] == "bungus"){
                    arr_data_bungus.forEach(function(arr_bungus){
                        if(arr_bungus[2] == properties.id_point){
                            var icon = JSON.stringify(data_layer.properties.icon.options);
                            var info_bungus = JSON.stringify(arr_bungus);

                            arr_layer.push(id_user);//id_user
                            arr_layer.push(nama_document);//dokumen
                            arr_layer.push(arr_bungus[2]);//nama
                            arr_layer.push(data_layer.geometry.coordinates[1]);//lat
                            arr_layer.push(data_layer.geometry.coordinates[0]);//lng
                            arr_layer.push(info_bungus);//info_bungus
                            arr_layer.push(icon);//icon

                            tampung_data_bungus_l.push(arr_layer);
                            arr_layer = [];
                        }
                    });
                }else if(tmp_id[0] == "passen"){
                    arr_data_passen.forEach(function(arr_passen){
                        if(arr_passen[0] == properties.id_point){
                            var icon = JSON.stringify(data_layer.properties.icon.options);
                            var info_passen = JSON.stringify(arr_passen[1]);

                            arr_layer.push(id_user);//id_user
                            arr_layer.push(nama_document);//dokumen
                            arr_layer.push(arr_passen[0]);//nama
                            arr_layer.push(data_layer.geometry.coordinates[1]);//lat
                            arr_layer.push(data_layer.geometry.coordinates[0]);//lng
                            arr_layer.push(info_passen);//info passen
                            arr_layer.push(icon);//icon
                            arr_layer.push(arr_passen[2]);// warna
                            arr_layer.push(arr_passen[3]);// name
                            arr_layer.push(arr_passen[4]);// name

                            tampung_data_passen_l.push(arr_layer);
                            arr_layer = [];
                        };
                    });
                }else if(tmp_id[0] == "radar"){
                    arr_data_radar.forEach(function(arr_radar){
                        if(arr_radar[0] == properties.id_point){
                            var info_radar = JSON.stringify({nama_radar: arr_radar[1],radius: arr_radar[3],warna: arr_radar[4],size: arr_radar[5]});
                            var icon = JSON.stringify(data_layer.properties.icon.options);
                            var info_symbol = JSON.stringify(arr_radar[2]);

                            arr_layer.push(id_user);//id_user
                            arr_layer.push(nama_document);//dokumen
                            arr_layer.push(arr_radar[0]);//nama
                            arr_layer.push(data_layer.geometry.coordinates[1]);//lat
                            arr_layer.push(data_layer.geometry.coordinates[0]);//lng
                            arr_layer.push(info_radar);// info radar
                            arr_layer.push(icon);//icon
                            arr_layer.push(info_symbol);//info symbol

                            tampung_data_radar_l.push(arr_layer);
                            arr_layer = [];
                        }
                    });
                }else if(tmp_id[0] == "logistik"){
                // console.log(all_logistik);
                all_logistik.forEach(function(arr_logis){
                    if(arr_logis[6] == properties.id_point){
                        var info_logis = JSON.stringify(arr_logis[0]);
                        var isi_logis = JSON.stringify(arr_logis[3]);
                        var icon = JSON.stringify(data_layer.properties.icon.options);

                        arr_layer.push(id_user);//id_user
                        arr_layer.push(nama_document);//dokumen
                        arr_layer.push(arr_logis[6]);//nama
                        arr_layer.push(data_layer.geometry.coordinates[1]);//lat
                        arr_layer.push(data_layer.geometry.coordinates[0]);//lng
                        arr_layer.push(info_logis);//info logistik
                        arr_layer.push(isi_logis);//isi logistik
                        arr_layer.push(arr_logis[4]);// jenis_logis
                        arr_layer.push(arr_logis[5]);// warna
                        arr_layer.push(icon);//icon
                        arr_layer.push(arr_logis[7]);

                        tampung_data_logistik_l.push(arr_layer);
                        arr_layer = [];
                    }
                });
            }else if(tmp_id[0] == "formasi"){
                    arr_data_formasi.forEach(function(arr_formasi){
                        if(arr_formasi[0] == properties.id_point){
                            var info_formasi = JSON.stringify(arr_formasi[4]);
                            var icon = JSON.stringify(data_layer.properties.icon.options);

                            arr_layer.push(id_user);//id_user
                            arr_layer.push(nama_document);//dokumen
                            arr_layer.push(arr_formasi[0]);//nama
                            arr_layer.push(data_layer.geometry.coordinates[1]);//lat
                            arr_layer.push(data_layer.geometry.coordinates[0]);//lng
                            arr_layer.push(info_formasi);
                            arr_layer.push(arr_formasi[1]);
                            arr_layer.push(arr_formasi[2]);
                            arr_layer.push(arr_formasi[3]);
                            arr_layer.push(arr_formasi[5]);
                            arr_layer.push(icon);
                            arr_layer.push(arr_formasi[6]);

                            tampung_data_formasi_l.push(arr_layer);
                        }
                    });
                }else if(tmp_id[0] == "text"){
                  arr_data_text.forEach(function(arr_text){
                    if(arr_text[0] == properties.id_point){
                      console.log(arr_text);
                      var info_text = JSON.stringify({text : arr_text[1], angel_: arr_text[2], size: arr_text[3], weight: arr_text[4], warna: arr_text[5]});
                      var icon = JSON.stringify(data_layer.properties.icon.options);

                      arr_layer.push(id_user);//id_user
                      arr_layer.push(nama_document);//dokumen
                      arr_layer.push(arr_text[0]);//nama
                      arr_layer.push(data_layer.geometry.coordinates[1]);//lat
                      arr_layer.push(data_layer.geometry.coordinates[0]);//lng
                      arr_layer.push(info_text);
                      arr_layer.push(icon);

                      tampung_data_text_l.push(arr_layer);
                    };
                  });
                };
            }else{
              var id = data_layer.id_point.length;
                // console.log(id);
                if(id >= 4){
                    var geometry = JSON.stringify(data_layer.geometry);
                    var proprties = JSON.stringify(data_layer.properties);

                    arr_layer.push(Number(dokument_data[0][0]));//id_user
                    arr_layer.push(nama_document);//dokument
                    arr_layer.push(data_layer.id_point);//nama
                    arr_layer.push(geometry);// geometry
                    arr_layer.push(proprties);// properti
                    arr_layer.push("circle");

                    tampung_data_toolbar_l.push(arr_layer);
                }else{

                }
            }
          }
        });
        $.ajax({
            url: "source_post.php",
            type: "POST",
            data: {
                status : "simpan",
                document : dokument_data[0],
                satuan : tampung_data_satuan_l,
                kekuatan : tampung_data_kekuatan_l,
                situasi : tampung_data_situasi_l,
                obstacle : tampung_data_obstacle_l,
                manuver : tampung_data_manuver_l,
                bungus : tampung_data_bungus_l,
                passen : tampung_data_passen_l,
                radar : tampung_data_radar_l,
                logistik : tampung_data_logistik_l,
                formasi : tampung_data_formasi_l,
                tool: tampung_data_toolbar_l,
                text: tampung_data_text_l
            },
            success: function(html){
              // console.log(html);
              alert("data saved");
              window.location.href = "index.php";
            }
        });
        }
    };
    // =========================
    function pilih_symbol(index){
    	var status_table = document.getElementById("status_table").value;
	    status_table = status_table.split("_");
	    if(status_table[0] == "satuan"){
	    	document.getElementById("prev_satuan").innerHTML = String.fromCharCode(Number(data_font[index].index));
	    	document.getElementById("prev_satuan").style.fontFamily = data_font[index].nama;
	    	document.getElementById("tmp_index_sat").innerHTML = index;
	    	window.location.href = "#set_satuan";
	    }else if(status_table[0] == "kekuatan"){
            var jumlah = document.getElementById("jumlah_symbol_kekuatan").value;
            var tbody = document.getElementById("kekuatan_symbol");
            var remove = "<a onclick=''>hapus</a>";
            var rw = tbody.insertRow(0);

            var cell1 = rw.insertCell(0);//symbol
            var cell2 = rw.insertCell(1);//jumlah
            var cell3 = rw.insertCell(2);//keterangan
            var cell4 = rw.insertCell(3);//action

            cell1.innerHTML = String.fromCharCode(Number(data_font[index].index));
            cell2.innerHTML = jumlah;
            cell3.innerHTML = data_font[index].keterangan;
            cell4.innerHTML = remove;
            var info_kek = [];
            info_kek.push(data_font[index]);
            info_kek.push(jumlah);
            tmp_arr_info_kekuatan.push(info_kek);

            cell1.setAttribute('style','font-family:'+data_font[index].nama+'; font-size: 20px; font-weight: bolder;');
            window.location.href = "#set_kekuatan";
        }else if(status_table[0] == "radar"){
            document.getElementById("prev_radar").innerHTML = String.fromCharCode(Number(data_font[index].index));
            document.getElementById("prev_radar").style.fontFamily = data_font[index].nama;
            document.getElementById("tmp_index_rad").innerHTML = index;
            window.location.href = "#set_radar";
        }else if(status_table[0] == "manuever"){
            document.getElementById("prev_manuever").innerHTML = String.fromCharCode(Number(data_font[index].index));
            document.getElementById("prev_manuever").style.fontFamily = data_font[index].nama;
            document.getElementById("tmp_index_manuever").innerHTML = index;
            window.location.href = "#set_manuever";
        }else if(status_table[0] == "formasi"){

          if(status_table[2] == "8"){
            var res = String.fromCharCode(Number(data_font[index].index));
            var tmp_data_formasi = index+","+data_font[index].index+","+data_font[index].nama+","+data_font[index].keterangan;
            var tmp_table_formasi = "<tr>"+
                      "<td width='10%'>1</td>"+
                      // "<td>"+data_font[index].nama+"</<td>"+
                      "<td  width='20%' id='ad"+index+"' style='font-size: 30px; font-family: "+data_font[index].nama+";'>"+res+"</<td>"+
                      "<td width='30%' >"+data_font[index].nama+"</<td>"+
                      "<td width='40%'>"+data_font[index].keterangan+"</<td>"+
                       "</tr>";

            data_table_formasi = tmp_table_formasi;
            data_formasi = tmp_data_formasi;
            document.getElementById("bodyTable").innerHTML = data_table_formasi;
            window.location.href = "#set_formasi";
            jum++;
          } else {
            if (jum >= count_formasi) {
              alert("Formasi Sudah Mencapai Batas");
            } else {
              var new_jum = jum+1;
              var res = String.fromCharCode(Number(data_font[index].index));

              var tmp_data_formasi = index+","+data_font[index].index+","+data_font[index].nama+","+data_font[index].keterangan+";";

              var tmp_table_formasi = "<tr>"+
                        "<td width='10%'>"+new_jum+"</td>"+
                        // "<td>"+data_font[index].nama+"</<td>"+
                        "<td  width='20%' id='ad"+index+"' style='font-size: 30px; font-family: "+data_font[index].nama+";'>"+res+"</<td>"+
                        "<td width='30%' >"+data_font[index].nama+"</<td>"+
                        "<td width='40%'>"+data_font[index].keterangan+"</<td>"+
                         "</tr>";


              data_table_formasi = data_table_formasi + tmp_table_formasi;
              data_formasi = data_formasi + tmp_data_formasi;

              document.getElementById("bodyTable").innerHTML = data_table_formasi;

              window.location.href = "#set_formasi";
              jum++;

              $("#count_formasi").text(jum+" dari "+count_formasi);
            }

          }




        }
    }

    //FUNGSI ADD FORM LOGISTIK
    function addToform (val) {//diubah mei logis
        if(val=='pelabuhan'){
            var tbody = document.getElementById("data_pelabuhan");
            arr_ind.push(b_pelabuhan);
            var remove = "<a onClick='removeRecord(this);' id='act_pick-"+ b_pelabuhan +"'>hapus</a>";
            var rw = tbody.insertRow(0);

            var cell1 = rw.insertCell(0);//nama
            var cell2 = rw.insertCell(1);//nilai
            var cell3 = rw.insertCell(2);//action

            cell1.innerHTML = "<br><input type='text' id='pick-"+ b_pelabuhan +"'>";
            cell2.innerHTML = "<br><input type='text' id='pickkedua-"+ b_pelabuhan +"'>";
            cell3.innerHTML = remove;
            b_pelabuhan++;
        }else if(val=='bandara'){
            var tbody = document.getElementById("data_bandara");
            arr_band.push(b_bandara);
            var remove = "<a onClick='removeRecord_bandara(this);' id='act_pick_bandara-"+ b_bandara +"'>hapus</a>";
            var rw = tbody.insertRow(0);

            var cell1 = rw.insertCell(0);//nama
            var cell2 = rw.insertCell(1);//nilai
            var cell3 = rw.insertCell(2);//action

            cell1.innerHTML = "<br><input type='text' id='pick_bandara-"+ b_bandara +"'>";
            cell2.innerHTML = "<br><input type='text' id='pickkedua_bandara-"+ b_bandara +"'>";
            cell3.innerHTML = remove;
            b_bandara++;
        }else if(val=='bebas'){
            var tbody = document.getElementById("data_logbebas");
            arr_beba.push(b_bebas);
            var remove = "<a onClick='removeRecord_bebas(this);' id='act_pick_bebas-"+ b_bebas +"'>hapus</a>";
            var rw = tbody.insertRow(0);

            var cell1 = rw.insertCell(0);//nama
            var cell2 = rw.insertCell(1);//nilai
            var cell3 = rw.insertCell(2);//action

            cell1.innerHTML = "<br><input type='text' id='pick_bebas-"+ b_bebas +"'>";
            cell2.innerHTML = "<br><input type='text' id='pickkedua_bebas-"+ b_bebas +"'>";
            cell3.innerHTML = remove;
            b_bebas++;
        }
  }
  function removeRecord(r) {//diubah mei logis
            var i = r.parentNode.parentNode.rowIndex;
            document.getElementById("data_pelabuhan").deleteRow(i-1);
    }
    function removeRecord_bandara(r) {//diubah mei logis
            var i = r.parentNode.parentNode.rowIndex;
            document.getElementById("data_bandara").deleteRow(i-1);
    }
    function removeRecord_bebas(r) {//diubah mei logis
            var i = r.parentNode.parentNode.rowIndex;
            document.getElementById("data_logbebas").deleteRow(i-1);
    }

    function getjenisp(){//diubah mei logis

          var select2 = document.getElementById("jenisp");
          var selectedString2 = select2.options[select2.selectedIndex].value;
          console.log(selectedString2);
          var getdt = "status=data_pel&filter="+selectedString2;
          var hasil_jenbp2 = get_db(getdt);
          document.getElementById("nm2").innerHTML = "<option value='null' >-- Pilih Pelabuhan --</option>";
          document.getElementById("pelab").innerHTML = "";
          // console.log(hasil_jenbp2);
          for(var p = 0;p<hasil_jenbp2.length;p++){
              var node_jenp = document.createElement("option");
              var textnode2 = document.createTextNode(hasil_jenbp2[p].nama);
              node_jenp.appendChild(textnode2);
              // SEMENTARA
                    option = "d_asintel";

              node_jenp.setAttribute("value",hasil_jenbp2[p].nama);
              document.getElementById("nm2").appendChild(node_jenp);
          }
          for(var p = 0;p<hasil_jenbp2.length;p++){
              var node_jenp = document.createElement("option");
              var textnode2 = document.createTextNode(hasil_jenbp2[p].nama);
              node_jenp.appendChild(textnode2);
              // SEMENTARA
                    option = "d_asintel";

              node_jenp.setAttribute("value",hasil_jenbp2[p].nama);
              node_jenp.setAttribute("id",hasil_jenbp2[p].id);
              document.getElementById("pelab").appendChild(node_jenp);
          }
        }
        function getjenisb(){
              var select = document.getElementById("jenisb");
              var selectedString = select.options[select.selectedIndex].value;
              var getdtb = "status=data_bandara&filter="+selectedString;
              var hasil_jenbp = get_db(getdtb);
              document.getElementById("nm1").innerHTML = "<option value='null' >-- Pilih Bandara --</option>";
              document.getElementById("bandar").innerHTML = "";
              // console.log(hasil_jenbp);
              for(var a = 0;a<hasil_jenbp.length;a++){
                  var node_jenb = document.createElement("option");
                  var textnode = document.createTextNode(hasil_jenbp[a].AERODROME);
                  node_jenb.appendChild(textnode);
                  // SEMENTARA
                        option = "d_asintel";

                  node_jenb.setAttribute("value",hasil_jenbp[a].AERODROME);
                  document.getElementById("nm1").appendChild(node_jenb);
              }
              for(var a = 0;a<hasil_jenbp.length;a++){
                  var node_jenb = document.createElement("option");
                  var textnode = document.createTextNode(hasil_jenbp[a].AERODROME);
                  node_jenb.appendChild(textnode);
                  // SEMENTARA
                        option = "d_asintel";

                  node_jenb.setAttribute("value",hasil_jenbp[a].AERODROME);
                  document.getElementById("bandar").appendChild(node_jenb);
              }
          // console.log(hasil_jenbp);
        }

    function selectloc(idd, jenis) {
          // console.log('hahahaa');
          if(idd == ""){
            alert("Nama tidak boleh kosong !!");
          }else{
            if(jenis=='pelabuhan'){
                $.ajax({
                  url:"getxy.php",
                  type:'POST',
                  data: {id_db:idd,status:jenis},
                  success:function(result) {
                    var re = result.split(',');
                      document.getElementById('lng_view').innerHTML= re[0];
                      document.getElementById('lat_view').innerHTML= re[1];
                      map.flyTo({lng:Number(re[0]),lat:Number(re[1])},11);
                    }
                 });
              }else if(jenis=='bandara'){
                  $.ajax({
                  url:"getxy.php",
                  type:'POST',
                  data: {id_db:idd,status:jenis},
                  success:function(result) {
                    var re = result.split(',');
                      document.getElementById('lng_view_b').innerHTML= re[0];
                      document.getElementById('lat_view_b').innerHTML= re[1];
                      map.flyTo({lng:Number(re[0]),lat:Number(re[1])},11);
                  }
                 });
              }
          }
       }

    function setlogistic(logis) {
        var ids, bhn_bakar, ml, at, rs, hk, lokx, loky, namanya, kond, jenisp, warna_logistik, icon_,color, id_,size;
        if (logis == 1) {
            ids = docId('nama_bandara_new').value;
            namanya = docId('nama_bandara_new').value;
            kond = "pesawat";
            jenisp = docId('jenis_bandara').value;


            lokx = docId('lng_view_b').innerHTML;
            loky = docId('lat_view_b').innerHTML;

            wrn = docId('warna_bandara_new').value;
            if (wrn=="blue") {
             color =  "blue";
            }else if(wrn=="red"){
              color = "red";
            }
            jenisp = document.getElementById('jenis_bandara').value;
            size = document.getElementById("bandara_size_new").value;
            if (jenisp == "Pangkalan Udara") {
              // picms = new esri.symbol.TextSymbol("U").setColor(new esri.Color(warna));
              picms = "<div style='margin-top:-15px; width: 30px;color: "+color+"; font-size: "+size+"px; font-family: TAKTIS_AL'>U</div>";
            }else if (jenisp == "Landasan Udara"){
              // picms = new esri.symbol.TextSymbol("V").setColor(new esri.Color(warna));
              picms = "<div style='margin-top:-15px; width: 30px;color: "+color+"; font-size: "+size+"px; font-family: TAKTIS_AL'>V</div>";
            }else if (jenisp == "Landasan Rumput"){
              // picms = new esri.symbol.TextSymbol("a").setColor(new esri.Color(warna));
              picms = "<div style='margin-top:-15px; width: 30px;color: "+color+"; font-size: "+size+"px; font-family: TAKTIS_AU'>a</div>";
            }else{
              // picms = new esri.symbol.TextSymbol("b").setColor(new esri.Color(warna));
              picms = "<div style='margin-top:-15px; width: 30px;color: "+color+"; font-size: "+size+"px; font-family: TAKTIS_AU'>b</div>";
            }
            icon_ = L.divIcon({className: 'my-div-icon', html:picms, iconSize: null, id_point: "logistik_"+jml_objc_bandara+"_bandara"});

            id_ = "logistik_"+jml_objc_bandara+"_bandara";
            jml_objc_bandara++;
            
        } else if (logis == 0) {
            ids = "";
            jenisp = docId('jenis_pelabuhan').value;
            namanya = docId('nama_pelabuhan_new').value;
            kond = "pelabuhan";

            lokx = docId('lng_view').innerHTML;
            loky = docId('lat_view').innerHTML;

            wrn = docId("warna_pelabuhan_new").value;

            size = docId("pelabuhan_size_new").value;
            
            if (wrn=="blue") {
             color =  "blue";
            }else if(wrn=="red"){
             color = "red";
            }
            jenisp = document.getElementById('jenis_pelabuhan').value;
             if (jenisp == "Lantamal") {
              // picms = new esri.symbol.TextSymbol("ü").setColor(new esri.Color(warna));
              picms = "<div style='margin-top:-15px; width: 30px;color: "+color+"; font-size: "+size+"px; font-family: TAKTIS_AL'>ü</div>";
            }else if (jenisp == "lanal"){
              // picms = new esri.symbol.TextSymbol("ý").setColor(new esri.Color(warna));
              picms = "<div style='margin-top:-15px; width: 30px;color: "+color+"; font-size: "+size+"px; font-family: TAKTIS_AL'>ý</div>";
            }else{
              // picms = new esri.symbol.TextSymbol("¡").setColor(new esri.Color(warna));
              picms = "<div style='margin-top:-15px; width: 30px;color: "+color+"; font-size: "+size+"px; font-family: TAKTIS_AL'>¡</div>";
            }
            icon_ = L.divIcon({className: 'my-div-icon', html:picms, iconSize: null, id_point: "logistik_"+jml_objc_pesawat+"_pelabuhan"});
            id_ = "logistik_"+jml_objc_pesawat+"_pelabuhan";
            // icon = 161;
            //icon="harbor.png";
            jml_objc_pesawat++;
            
        } else {}
        kumpl.push(namanya);
        kumpl.push(namanya);
        kumpl.push(kond);

        poss.push(kumpl);
        poss.push(Number(lokx));
        poss.push(Number(loky));

        if (logis == 1) {get_data_airport_bandara();} else if (logis == 0) {get_data_airport();}
        poss.push(jenisp);
        poss.push(color);
        poss.push(id_);
        poss.push(size);

        all_logistik.push(poss);
        poss = [];

        koord.push(lokx);
        koord.push(loky);
        s_plot = 7;
        type_graph = "point";

         map.flyTo({lng:Number(lokx),lat:Number(loky)},11);

        // var icon_log = "<div style='margin-top:-15px; width: 30px;color: red; font-size: 30px; font-family: "+data_font[icon].nama+"'>"+String.fromCharCode(Number(data_font[icon].icon))+"</div>";
        // var icon_logis = L.divIcon({className: 'my-div-icon', html:icon_log, iconSize: null});
        // var icon_logis = L.icon({
        //     iconUrl: icon_,
        //     iconSize: [20, 20]
        // });
        var kx_log = Number(lokx);
        var ky_log = Number(loky);

        var logis_bandara = L.marker([ky_log, kx_log], {icon: icon_});
        var info_logis = "";
        var infoLogistik = all_logistik[all_logistik.length-1][3];
        for(var a = 0;a<infoLogistik.length;a++){
            var b = a+1;
            var tmp_logis = "<tr>"+
                                "<td>"+b+"</td>"+
                                "<td>"+infoLogistik[a].judul+"</td>"+
                                "<td>"+infoLogistik[a].isi+"</td>"+
                            "</tr>";
            info_logis = info_logis+tmp_logis;
        }
        var content = "<div style='width: auto;'><center><p>Info Logistik </p></center>"+
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
        logis_bandara.bindPopup(content);
        drawnItems.addLayer(logis_bandara);
        kumpl = [];
        b = 0;
        p = 0;
        bs = 0;
        b_bandara = 0;
        b_bebas = 0;
        edit_b = 0;
        edit_b_db = 0;
        document.getElementById("nama_bandara_new").value = "";
        document.getElementById("lng_view_b").innerHTML = "";
        document.getElementById("lat_view_b").innerHTML = "";
        document.getElementById("daftar_bandara").innerHTML = '<p>'+
                '<input type="text" name="bandara_nama_1" id="bandara_nama_1" style="width: 160px;float: left;" placeholder="Nama">'+
                '<input type="text" name="bandara_nilai_1" id="bandara_nilai_1" style="width: 160px;float: left;" placeholder="Nilai">'+
              '</p>';

        document.getElementById("nama_pelabuhan_new").value = "";
        document.getElementById("lng_view").innerHTML = "";
        document.getElementById("lat_view").innerHTML = "";
        document.getElementById("daftar_pelabuhan").innerHTML = '<p>'+
                '<input type="text" name="pelabuhan_nama_1" id="pelabuhan_nama_1" style="width: 160px;float: left;" placeholder="Nama">'+
                '<input type="text" name="pelabuhan_nilai_1" id="pelabuhan_nilai_1" style="width: 160px;float: left;" placeholder="Nilai">'+
              '</p>';
      daftar_list_objc();
    }
    function get_data_airport(){
        var nama = [];
        for(var _data=0;_data<arr_ind.length;_data++){
          if(docId('pelabuhan_nama_'+arr_ind[_data]) || docId('pelabuhan_nilai_'+arr_ind[_data])){
            // if(docId('pelabuhan_nama_'+arr_ind[_data]).value || docId('pelabuhan_nilai_'+arr_ind[_data]).value){
              var value = docId('pelabuhan_nama_'+arr_ind[_data]).value;
              var value2 = docId('pelabuhan_nilai_'+arr_ind[_data]).value;
              var obj = {judul:value,isi:value2};
              nama.push(obj);
            // }
          }
        }
        // console.log(json);
        nilai.push(nama);
        poss.push(nama);
        nama=[];
        arr_ind=[];
      }
    function get_data_airport_bandara(){
        var nama = [];
        console.log(arr_band);
        for(var _data=0;_data<arr_band.length;_data++){
          if(docId('bandara_nama_'+arr_band[_data]) || docId('bandara_nilai_'+arr_band[_data])){
            var value = document.getElementById('bandara_nama_'+arr_band[_data]).value;
            var value2 = document.getElementById('bandara_nilai_'+arr_band[_data]).value;
            var obj = {judul:value,isi:value2};
            nama.push(obj);
          }
        // var json = JSON.stringify(nama);
        }
        // nilai.push(nama);
        poss.push(nama);
        nama=[];
        arr_band=[];
    }
    function get_data_airport_bebas(){
        var nama = [];
        for(var _data=0;_data<arr_beba.length;_data++){
          if(docId('bebas_nama_'+arr_beba[_data]) || docId('bebas_nilai_'+arr_beba[_data])){
            var value = document.getElementById('bebas_nama_'+arr_beba[_data]).value;
            var value2 = document.getElementById('bebas_nilai_'+arr_beba[_data]).value;
            var obj = {judul:value,isi:value2};
            nama.push(obj);
          }
        }
        // nilai.push(nama);
        poss.push(nama);
        nama=[];
        arr_beba=[];
    }

    function simpan_log_bebas(){
        var ids, namanya, kond, jenisp, warna_logis_bebas, lokx, loky;
        ids = null;
        type_plotting = "plot_bebas";
        namanya = docId('nama_bebas_new').value;
        kond = "Bebas";
        jenisp = "Bebas";
        loky = null;
        lokx = null;
        warna_logis_bebas = docId("warna_bebas_new").value;
        var size = Number(docId("bebas_size_new").value);
        kumpl.push(ids);
        kumpl.push(namanya);
        kumpl.push(kond);

        poss.push(kumpl);
        poss.push(lokx);
        poss.push(loky);
        get_data_airport_bebas();
        poss.push(jenisp);
        poss.push(warna_logis_bebas);
        poss.push("logistik_"+jml_objc_bebas+"_bebas");
        poss.push(size);

        all_logistik.push(poss);
        poss = [];
        
        koord.push(lokx);
        koord.push(loky);

        kumpl = [];
        b = 0;
        p = 0;
        bs = 0;
        b_bandara = 0;
        b_bebas = 0;
        edit_b = 0;
        edit_b_db = 0;
        var icon_bebas = L.icon({
            iconUrl: 'image/plotting/ic_logis.png',
            iconSize: [size, size],
            id_point: "logistik_"+jml_objc_bebas+"_bebas"
        });
        // drawControl.setDrawingOptions({
            // marker: {
                // icon : icon_bebas
            // }
        // });
        jml_objc_bebas++;
        var marker = new L.Draw.Marker(map, {icon: icon_bebas});
        marker.enable();
        document.getElementById("nama_bebas_new").value = "";
        document.getElementById("daftar_bebas").innerHTML = '<p>'+
                '<input type="text" name="bebas_nama_1" id="bebas_nama_1" style="width: 160px;float: left;" placeholder="Nama">'+
                '<input type="text" name="bebas_nilai_1" id="bebas_nilai_1" style="width: 160px;float: left;" placeholder="Nilai">'+
              '</p>';
    }

    function tabs_info_sat(id,info){
    	if(info.innerHTML == "Symbol"){
    		document.getElementById("Symbol_satuan_"+id).style.display = "block";
    		document.getElementById("Info_satuan_"+id).style.display = "none";
    	}else{
    		document.getElementById("Symbol_satuan_"+id).style.display = "none";
    		document.getElementById("Info_satuan_"+id).style.display = "block";
    	}
    }

    //SIMPAN KOTA
    function function_simpan_kota() {
        var tmp3 = document.getElementById("nama_kota_text").value;
        var tmp4 = document.getElementById("longitude_text").value;
        var tmp5 = document.getElementById("latitude_text").value;
        if(tmp3=="" || tmp4=="" || tmp5==""){
            alert("Data belum lengkap");
        } else {
            for(var a = 0; a<data_idkota_get.length;a++){
                var tmp = data_idkota_get[a].idk;
                var tmp2 = tmp*10;
            }
            var dmstmp = convertDMS(tmp5,tmp4);
            var arraydmstmp = dmstmp.split(" ");
            var data_kota = [tmp, tmp2, tmp3, tmp4, tmp5, arraydmstmp[0], arraydmstmp[1], arraydmstmp[2], arraydmstmp[5], arraydmstmp[6], arraydmstmp[7], arraydmstmp[3]];
            console.log(data_kota);
            var data_array = {
                status: "simpan_kota",
                kota: data_kota,
            };
            console.log(data_array);
            $.ajax({
                url: "http://192.168.0.188/"+nama_project+"/docs/source/source_post.php",
                type: "POST",
                data: data_array,
                success: function (html) {
                    if (html) {
                        console.log(html)
                    } else {
                        close_pop();
                        window.location.href = "http://"+ip_adress+"/"+nama_project+"/docs/source/";
                        alert("data saved");
                    }
                }
            });
        }
    }

    function function_simpan_kota_peta() {
        var tmp3 = document.getElementById("nama_kota_text_peta").value;
        var tmp4 = document.getElementById("longitude_text_peta").value;
        var tmp5 = document.getElementById("latitude_text_peta").value;
        if(tmp3==""){
            alert("Nama Kota harus diisi");
        } else {
            for(var a = 0; a<data_idkota_get.length;a++){
                var tmp = data_idkota_get[a].idk;
                var tmp2 = tmp*10;
            }
            var dmstmp = convertDMS(tmp5,tmp4);
            var arraydmstmp = dmstmp.split(" ");
            var data_kota = [tmp, tmp2, tmp3, tmp4, tmp5, arraydmstmp[0], arraydmstmp[1], arraydmstmp[2], arraydmstmp[5], arraydmstmp[6], arraydmstmp[7], arraydmstmp[3]];
            // console.log(data_kota);
            var data_array = {
                status: "simpan_kota",
                kota: data_kota,
            };
            $.ajax({
                url: "http://192.168.0.188/"+nama_project+"/docs/source/source_post.php",
                type: "POST",
                data: data_array,
                success: function (html) {
                    if (html) {
                        console.log(html)
                    } else {
                        close_pop();
                        window.location.href =  "http://"+ip_adress+"/"+nama_project+"/docs/source/";
                        // alert("data saved");
                    }
                }
            });
        }
    }

    function pilih_peta() {
        type_plotting = "kota";
        close_pop();
        window.location.href = "#";
    }

    // LOAD DATA DARI DATABASE
    // FONT
    var link_font = "status=ambil_font";
    var get_font = get_db(link_font);
    data_font = get_font;

    // DOCUMENT
    var link_doc = "status=ambil_dokumen&id_user="+dokument_data[0][0];
    var get_doc = get_db(link_doc);
    var data_documen_get = get_doc;

    // KOTA
    var link_kota = "status=ambil_kota";
    var get_kota = get_db(link_kota);
    var data_kota_get = get_kota;

    // ID KOTA
    var link_idkota = "status=ambil_idkota";
    var get_idkota = get_db(link_idkota);
    data_idkota_get = get_idkota;

    // Asisten
    var link_t = "status=ambil_asisten";
    var g_asisten = get_db(link_t);
    var data_asisten_ = g_asisten;

    // Weapon Torpedo
    var link_torpedo = "status=ambil_weapon_torpedo";
    var g_torpedo = get_db(link_torpedo);
    var data_torpedo = g_torpedo;

    // Weapon Missile
    var link_missile = "status=ambil_weapon_missile";
    var g_missile = get_db(link_missile);
    var data_missile = g_missile;

    // Weapon Gun
    var link_gun = "status=ambil_weapon_gun";
    var g_gun = get_db(link_gun);
    var data_gun = g_gun;

    // Weapon Bomb
    var link_bomb = "status=ambil_weapon_bomb";
    var g_bomb = get_db(link_bomb);
    var data_bomb = g_bomb;

    // Weapon Mine
    var link_mine = "status=ambil_weapon_bomb";
    var g_mine = get_db(link_mine);
    var data_mine = g_mine;

    $(function () {
      $(".toggle").click(function(){
        //クリックしたボタンの「toggle-target」属性をID名として取得
        var target = "#" + $(this).attr("toggle-target");
        //取得したIDを対象にトグルする
        $(target).slideToggle(0);
        $(this).find('span').html(function(i, text){
          return text === 'Show coordinate' ? 'Hide coordinate' : 'Show coordinate';
        });

      });
      return false;
    });

// =============================== LOG OUT =============================
function logout(){
  $.ajax({
  url: "logout.php",
  type: 'POST',
  success: function(msg)
  {
    window.location = "http://"+ip_adress+"/"+nama_project;
  }
  });
}

/***********************************************
 ** Pergerakan link 
 ** Muhamad Farhan Badrussalam
 ***********************************************/

function pergerakan_to(){
  if (typeof(Storage) !== "undefined") {
    // Store
    sessionStorage.setItem("cara_bertindak", JSON.stringify(daftar_cb));
    sessionStorage.setItem("peta_sendiri", JSON.stringify(daftar_peta));

    window.open("pergerakan/pergerakan.php","_blank");
  }


  // console.log();
}