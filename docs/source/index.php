<!DOCTYPE html>
<html>
<head>
    <title>Cara Bertindak</title>
    <?php include "session.php" ?>
    <script src="libs/leaflet-src.js"></script>
    <link rel="stylesheet" href="libs/leaflet.css"/>
    <link rel="icon" type="image/png" href="image/favicon.ico">

    <script src="../../src/Leaflet.draw.js"></script>
    <script src="../../src/Leaflet.Draw.Event.js"></script>
    <link rel="stylesheet" href="../../src/leaflet.draw.css"/>
    <link rel="stylesheet" type="text/css" href="css/normalize.css">
    <link rel="stylesheet" type="text/css" href="css/font-face.css">
    <link rel="stylesheet" href="css/L.Control.BetterScale.css" />
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link  href="css/leaflet-control-topcenter.css" rel="stylesheet">
    <!-- <link rel="stylesheet" type="text/css" href="css/foundation.css"> -->


    <!-- Irvan Start -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="lib/leaflet/leaflet.css" rel="stylesheet"/>
    <link href="lib/leaflet.toolbar-src.css" rel="stylesheet"/>
    <!-- Irvan End -->

    <script src="../../src/Toolbar.js"></script>
    <script src="../../src/Tooltip.js"></script>

    <!-- Irvan Start -->
    <script src="leaflet-measureAction.js"></script>
    <!-- Irvan End -->

    <script src="../../src/ext/GeometryUtil.js"></script>
    <script src="../../src/ext/LatLngUtil.js"></script>
    <script src="../../src/ext/LineUtil.Intersect.js"></script>
    <script src="../../src/ext/Polygon.Intersect.js"></script>
    <script src="../../src/ext/Polyline.Intersect.js"></script>
    <script src="../../src/ext/TouchEvents.js"></script>

    <script src="../../src/draw/DrawToolbar.js"></script>
    <script src="../../src/draw/handler/Draw.Feature.js"></script>
    <script src="../../src/draw/handler/Draw.SimpleShape.js"></script>
    <script src="../../src/draw/handler/Draw.Polyline.js"></script>
    <script src="../../src/draw/handler/Draw.Marker.js"></script>
    <script src="../../src/draw/handler/Draw.Circle.js"></script>
    <script src="../../src/draw/handler/Draw.CircleMarker.js"></script>
    <script src="../../src/draw/handler/Draw.Polygon.js"></script>
    <script src="../../src/draw/handler/Draw.Rectangle.js"></script>

    <script src="js/bundle.js"></script>

    <script src="../../src/edit/EditToolbar.js"></script>
    <script src="../../src/edit/handler/EditToolbar.Edit.js"></script>
    <script src="../../src/edit/handler/EditToolbar.Delete.js"></script>

    <script src="../../src/Control.Draw.js"></script>

    <script src="../../src/edit/handler/Edit.Poly.js"></script>
    <script src="../../src/edit/handler/Edit.SimpleShape.js"></script>
    <script src="../../src/edit/handler/Edit.Rectangle.js"></script>
    <script src="../../src/edit/handler/Edit.Marker.js"></script>
    <script src="../../src/edit/handler/Edit.CircleMarker.js"></script>
    <script src="../../src/edit/handler/Edit.Circle.js"></script>

    <script src="js/leaflet.polylineDecorator.js"></script>

    <script src="js/vendor/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/arrow.js"></script>
    <script src="js/MovingMarker.js"></script>

    <script src="js/weapon/function_weapon.js"></script>
    <script type="text/javascript" src="js/coolclock/coolclock.js"></script>
    <script type="text/javascript" src="js/coolclock/moreskins.js"></script>
    <!-- <script src="../../../jPicker/jquery-1.4.4.min.js" type="text/javascript"></script> -->

    <!-- <link rel="Stylesheet" type="text/css" href="../../../jPicker/css/jpicker-1.1.6.min.css" />
    <link rel="Stylesheet" type="text/css" href="../../../jPicker/jPicker.css" />
    <script src="../../../jPicker/jpicker-1.1.6.min.js" type="text/javascript"></script> -->
    <link rel="stylesheet" href="css/main.css" type="text/css"/>
    <link rel="stylesheet" type="text/css" href="css/foundation.min.css">
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="libs/FileSaver.min.js" /></script>

    <script src="js/foundation.min.js"></script>
    <script src="js/foundation/foundation.js"></script>

    <script src="js/L.Control.BetterScale.js"></script>
    <script src="js/leaflet-control-topcenter.js"></script>

    <script src="js/foundation/foundation.topbar.js"></script>
    <script src="js/foundation/foundation.slider.js"></script>
    <script src="js/foundation/foundation.accordion.js"></script>

    <!-- foundation datepicker start -->
      <!-- DEPS -->
      <!-- <script src="foundation/js/vendor/jquery.js"></script> -->
      <!-- CDN - you can use font awesome or fonudation icon via this, or use your own version: -->
      <!-- <link href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet"> -->
      <!-- <link href="https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css" rel="stylesheet"> -->
      <!-- DATEPICKER FILES -->
      <script src="js/foundation-datepicker.js"></script>
      <script src="js/locales/foundation-datepicker.vi.js"></script>

      <script src="js/vendor/jquery.dataTables.min.js"></script>
      <script src="js/foundation/dataTables.foundation.min.js"></script>

      <link rel="stylesheet" href="css/foundation-datepicker.min.css">
      <!-- <link rel="stylesheet" href="css/jquery.dataTables.min.css"/> -->
      <link rel="stylesheet" href="css/dataTables.foundation.min.css">
    <!-- foundation datepicker end -->

    <!-- Irvan Start -->
    <script src="Leaflet.Control.Custom.js"></script>

    <link href="style.css" rel="stylesheet"/>

    <!-- Irvan End -->

    <script type="text/javascript">
      // console.log();

      var id_user = Number("<?php echo $_SESSION['id_user']; ?>");
      var asisten_user = "<?php echo $_SESSION['asisten']; ?>";
      var id_asisten_user = "<?php echo $_SESSION['id_asisten']; ?>";
      var bagian_user = "<?php echo $_SESSION['bagian']; ?>";
      var jabatan_user = "<?php echo $_SESSION['jabatan']; ?>";

      var dokumen_nama = "<?php echo $_SESSION['dokumen']; ?>";
      var name_user = "<?php echo $_SESSION['name']; ?>";
      var data_user_aktif = JSON.parse('<?php echo $_SESSION['arr_user']; ?>');
      var type_login = "<?php echo $_SESSION['type_login'] ?>";
      var skenario_aktif = JSON.parse('<?php echo $_SESSION['scenario_aktif']; ?>');
      var token_user = "<?php echo $_SESSION['token']; ?>";

      var dokument_data = [[Number("<?php echo $_SESSION['id_user']; ?>"),"<?php echo $_SESSION['dokumen']; ?>",type_login,skenario_aktif[0].ID]];

      CoolClock.findAndCreateClocks();
      zone_time('all');

      function zone_time(zone) {
          if (zone != 'all') {
              $('.zone-clock').css('display', 'none');
              $('.' + zone + '-clock').css('display', 'block');
          } else {
              $('.zone-clock').css('display', 'inline-block');
          }
      }
    </script>
    <script src="js/public.js"></script>
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script> -->

    <?php include "popup/setting_polyline.php" ?>
    <?php include "popup/menu.php" ?>
    <?php include "popup/table.php" ?>
    <?php include "popup/setting_polygon.php" ?>
    <!-- <script src='https://api.mapbox.com/mapbox.js/v3.1.1/mapbox.js'></script>
    <link href='https://api.mapbox.com/mapbox.js/v3.1.1/mapbox.css' rel='stylesheet' /> -->

    <style>
    	.star{
		  font-size: 1.5em;
		} 

		#testing{
			height: 1px; 
  			width: 1px; 
		}

		.leaflet-control-draw-measure {
		    background-image: url(images/measure-control.png);
		} 
		.spanz {
			background-color: white;
			width: 100% !important;
			height: 100% !important;
		}
		.leaflet-bar a {
			border-right: 1px solid #ccc;
			border-top: 1px solid #ccc;
			border-radius: 0px !important;
		}
		.leaflet-bar .leaflet-draw-draw-polyline {
			z-index: 100;
		}
		.hide2 {
			display: none !important;
		}
		.show2 {
			display: block !important;
		}
		.overlay:target {
			z-index: 100;
		}
    #zone-clock {
  position: absolute;
  top: 10%;
  right: 15%; 
  width: 20%;
  font-family: sans-serif; 
  font-size: 14px;
  color: red;
  z-index: 1;
}
    </style>

</head>
<body style="overflow: hidden;">
<nav class="top-bar" data-topbar role="navigation">
  <ul class="title-area">
    <li class="name">
      <h1><a style="color: black;" href="#">KODIKLATAL</a></h1>
    </li>
     <!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->
    <li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
  </ul>

 <section class="top-bar-section">
    <!-- Right Nav Section -->
    <ul class="left">
      <li>
        <a onclick="function_simpan()" href="#"style="color: black !important;">Save Data</a>
      </li>
      <li>
          <a href="#set_kalpur" onclick="open_pop();" style="color: black !important;">Kalkulasi Tempur</a>
      </li>
      <li>
          <a href="#set_layer_peta" onclick="open_pop();" style="color: black !important;">Layer Peta</a>
      </li>
      <li>
        <a  onclick="pergerakan_to()" style="color: black !important;">Pergerakan</a>
      </li>
      <li>
          <a onclick="manualPrint()" style="color: black !important;">Print</a>
      </li>
      <li>
          <a onclick="docId('menu_timelist').style.display='block';" style="color: black !important;">TimeList</a>
      </li>
      
    </ul>
    <ul style="float: right;">
      <li style="float: right;">
        <a href="#" onclick="logout()" style="color: black !important;">Log Out</a>
      </li>
      <li style="float: right;background-color: #8ABDFE !important;">
        <a style="color: black;" id="info_username">-</a>
      </li>
    </ul>

    <!-- Left Nav Section -->
    <ul class="left">
      <!-- <li><a href="#">Left Nav Button</a></li> -->
    </ul>
  </section>
</nav>
    
    <script src="js/draw/init.js"></script>
    <script src="js/draw/list_object/init_list_obj.js"></script>
    <script src="js/draw/load_scenario/init_load_scenario.js"></script>
    <script src="js/draw/convert_or_zoomto/L.LatLng.UTM.js"></script>
    <script src="js/draw/convert_or_zoomto/init_convert.js"></script>
    <?php include "popup/time_list.php" ?>
    <?php include "popup/weapon_list.php" ?>
    <div class="menu_all" id="menu_all">
      <div class="button1" onclick="click_menu()">
        <span style="">Menu</span>
      </div>
      <?php include "popup/property_draw.php" ?>
      
    </div>
<script type="text/javascript">
  var text_asisten = "";
  if(dokument_data[0][2] == "menu_cb"){
    docId("info_username").innerHTML = name_user+" - "+dokument_data[0][1];
  }else {
    docId("info_username").innerHTML = name_user;
  }
      showtime();
      pencarian_kota();

  function ganti_koor(){
    var button = document.getElementsByClassName('button_army');
    for(var i = 0; i< button.length; i++){
      button[i].addEventListener("click", function() {
        // console.log("hai");
        // console.log(this.innerHTML);
        if(this.innerHTML == "DMS"){
          document.getElementById("dms").style.display="block";
          document.getElementById("longlat").style.display="none";
        }else if(this.innerHTML == "LongLat"){
          document.getElementById("dms").style.display="none";
          document.getElementById("longlat").style.display="block";
        }
        var current = document.getElementsByClassName("button_army active");
        current[0].className = current[0].className.replace(" active", "");  
        // console.log(button[i]);
        this.className += " active";
      });
    };
  }
  var cek_menu = 0;
  function click_menu(){
    if(cek_menu == 0){
      document.getElementById("properti_draw").style.height = "90%";
      document.getElementById("isi_property").style.display = "block";
      document.getElementById("menu_all").style.height = "45%";
      change_formasi_type(document.getElementById("jenis_formasi_new").value);
      cek_menu = 1;
    }else{
      document.getElementById("properti_draw").style.height = "0";
      document.getElementById("isi_property").style.display = "none";
      document.getElementById("menu_all").style.height = "25px";
      document.getElementById("view_formasi").style.display = "none";
      cek_menu=0;
    }
  }
  var cek = 0;
  function clik_footer(){
    if(cek == 0){
      document.getElementById('footer').style.width='90%';
      document.getElementById("link_army").style.width="22%";
      var button = document.getElementsByClassName('button_army');
      var koordinate = document.getElementsByClassName("view_coordinate");
      for(var i = 0; i< button.length; i++){
        button[i].style.display = "block";
      }
      for(var i = 0; i< koordinate.length; i++){
        koordinate[i].style.display = "block";
      }
      cek = 1;
    }else{
      document.getElementById('footer').style.width='0%';
      var button = document.getElementsByClassName('button_army');
      var koordinate = document.getElementsByClassName("view_coordinate");
      for(var i = 0; i< button.length; i++){
        button[i].style.display = "none";
      }
      for(var i = 0; i< koordinate.length; i++){
        koordinate[i].style.display = "none";
      }
      document.getElementById("link_army").style.width="auto";
      cek=0;
    }
  }
</script>
<div id="map" style="width: 100%; height: 100%; border: 1px solid #ccc; z-index: 1;"></div>

<div class="link_army" id="link_army">
  <div class="footer" id="footer">
    <div class="view_footer">
      <div class="view_coordinate" style="display: none;">
        <div id="dms">
          <center><h5>Degree Minutes Second</h5></center>
          <br>
          <div class="content_koor">Latitude : <span id="lat_dms">-</span></div>
          <!-- <br> -->
          <div class="content_koor">Longitude : <span id="lang_dms">-</span></div>
        </div>
        <div id="longlat" style="display: none;">
          <center><h5>Latitude Longitude</h5></center>
          <br>
          <div class="content_koor">Latitude : <span id="lat_latlang">-</span></div>
          <!-- <br> -->
          <div class="content_koor">Longitude : <span id="lang_latlang">-</span></div>
        </div>
      </div>
    </div>
    <div style="width: 100%;height: 19%;" onclick="ganti_koor()">
      <div class="button_army active">DMS</div>
      <div class="button_army">LongLat</div>
    </div>
  </div>
  <div class="button_tex" onclick="clik_footer()">
    <span class=""><img src="image/location_coordinate.png" style="width: 20px; height: 25px;"></span>
  </div>
</div>
 <div id="zone-clock">
  <div style="float: left; width: 30%;">
    <!-- <center>Waktu sebenarnya</center>
    <canvas class="CoolClock:mySkin:40:'noSeconds':+7" style="width: 60px !important; height: 60px !important;  border-radius: 50px !important;"> 

    </canvas> -->
  </div>
    <!-- <table border="0">
        <tr>
            <td class="wib-clock zone-clock">
                <table>
                    <tr>
                        <span style="margin-left: 27px; "><strong>WIB</strong></span><br>
                        <span style="margin-left: 23px;  font-size: 10px;"><strong>GMT +7</strong></span>
                    </tr>
                    <tr>
                        <td>
                            <canvas class="CoolClock:mySkin:40:'noSeconds':+7"
                                    style="width: 60px !important; height: 60px !important;  border-radius: 50px !important;"></canvas>
                        </td>
                    </tr>
                </table>
            </td>
            <td class="wita-clock zone-clock">
                <table>
                    <tr>
                        <span style="margin-left: 27px; "><strong>WITA</strong></span><br>
                        <span style="margin-left: 23px; font-size: 10px; "><strong>GMT +8</strong></span>
                    </tr>
                    <tr>
                        <td>
                            <canvas class="CoolClock:mySkin:40:'noSeconds':+8"
                                    style="width: 60px !important; height: 60px !important; background-color: white !important; border-radius: 50px !important;"></canvas>
                        </td>
                    </tr>
                </table>
            </td>
            <td class="wit-clock zone-clock">
                <table>
                    <tr>
                        <span style="margin-left: 27px; "><strong>WIT</strong></span><br>
                        <span style="margin-left: 23px; font-size: 10px; "><strong>GMT +9</strong></span>
                    </tr>
                    <tr>
                        <td>
                            <canvas class="CoolClock:mySkin:40:'noSeconds':+9"
                                    style="width: 60px !important; height: 60px !important; background-color: white !important; border-radius: 50px !important;"></canvas>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table> -->
  </div>

<div class="koor_nav">
  
</div>
<div class='test2'><img src="image/globe.gif"></div>
<!-- <a href='#' id='export'>Export Features</a>
<a href='#' id='import'>Import Features</a> -->

<div id="playdiv" style=" 
            position:absolute; 
            width: 250px;
            height: 110px;
            right:20px; 
            bottom:120px; 
            background-color: black; 
            opacity: 0.8;
            z-index: 999;
            display: none;
            ">
<br>&nbsp; 
<a onclick="pausedong();"><img src="image/plotting/pause.png" width="64" height="64"></a>
&nbsp;
<a onclick="stopdong();"><img src="image/plotting/stop.png" width="64" height="64"></a>
&nbsp;
</div>

<div id="pausediv" style=" 
            position:absolute; 
            width: 250px;
            height: 110px;
            right:20px; 
            bottom:120px; 
            background-color: black; 
            opacity: 0.8;
            z-index: 999;
            display: none;
            ">
<br>&nbsp;       
<a onclick="lanjutdong();"><img src="image/plotting/play.png" width="64" height="64"></a>
&nbsp;
<a onclick="stopdong();"><img src="image/plotting/stop.png" width="64" height="64"></a>
&nbsp;
</div>

<div id="beresdiv" style=" 
            position:absolute; 
            width: 250px;
            height: 110px;
            right:20px; 
            bottom:120px; 
            background-color: black; 
            opacity: 0.8;
            z-index: 999;
            display: none;
            ">
<br>&nbsp;       
<a onclick="clickedan();"><img src="image/plotting/balikan.png" width="64" height="64"></a>
&nbsp;
<a onclick="tutupdong();"><img src="image/plotting/tutup.png" width="64" height="64"></a>
&nbsp;
</div>


<script>
    <?php include "js/leaflet.js" ?>
    <?php include "js/fungsi_popup.js" ?>
</script>
</body>
</html>

<script>


  
var array_item_menu = [ //item menu
	[
		['Straight Arrow', 'image/plotting/arrow0.png', 20, 2, "open_menu('arrow_panah')"],
		['Down Arrow', 'image/plotting/bawah.png', 20, 2, "open_menu('arrow_lengkung_bawah')"],
		['Up Arrow', 'image/plotting/atas.png', 20, 2, "open_menu('arrow_lengkung_atas')"],
		['Manuever Up Arrow', 'image/plotting/manuver_udara_b.png', 20, 2, "open_menu('arrow_manuver_atas')"],

	],[
		['Manuever Down Arrow', 'image/plotting/manuver_udara_a.png', 20, 1, "open_menu('arrow_manuver_bawah')"],
		['Free Polygon', 'image/plotting/freepolygon.png', 20, 0, "#"],
		['Free Hand Polyline', 'image/plotting/freepolyline.png', 20, 0, "#"],
		['Text', 'image/plotting/font.png', 20, 0, "open_menu('text')"]

	],[
		['Ellips', 'image/plotting/ellips.png', 20, 3, "#"],
		['Triangle', 'image/plotting/triangle.png', 20, 2, "#"]
	],[
		['BTN', 'image/plotting/chevron-right.png', 20, 1, "#"],
		['Pasukan Sendiri', 'image/plotting/shiparmy.png', 20, 2, "open_menu('passen')"],
		['Formasi', 'image/plotting/Groups-Military-Personnel-Light-icon.png', 20, 2, "open_menu('formasi')"],
		['Radar', 'image/plotting/radar.png', 20, 2, "open_menu('radar')"]
	],[
		['Bantuan Tembakan', 'image/plotting/bungus_red.png', 20, 1, "open_menu('bungus')"],
		['Manuever', 'image/plotting/airplane.png', 20, 0, "open_menu('manuver')"],
		['Obstacle', 'image/plotting/obstacle.png', 20, 0, "open_menu('obstacle')"]
	],[
		['Kekuatan', 'image/plotting/streng.png', 20, 1, "open_menu('kekuatan');"],
		['Satuan', 'image/plotting/satuan.png', 20, 2, "open_menu('satuan');"],
		['Situasi', 'image/plotting/situasi.png', 20, 2, "open_menu('situasi')"]
	],[
		['Logistik Pelabuhan', 'image/plotting/harbor2.png', 20, 1, "open_menu('logistik_pelabuhan')"],
		['Logistik Bandara', 'image/plotting/plane3.png', 20, 0, "open_menu('logistik_bandara')"],
		['Logistik Bebas', 'image/plotting/ic_logis2.png', 20, 0, "open_menu('logistik_bebas')"]
	]
];

if(type_login == "menu"){
  if(data_user_aktif[0].asisten == 3){
    array_item_menu[5] = [
      ['Logistik Pelabuhan', 'image/plotting/harbor2.png', 20, 1, "open_menu('logistik_pelabuhan')"],
      ['Logistik Bandara', 'image/plotting/plane3.png', 20, 2, "open_menu('logistik_bandara')"],
      ['Logistik Bebas', 'image/plotting/ic_logis2.png', 20, 2, "open_menu('logistik_bebas')"]
    ];
    array_item_menu[6] = [];
  }else{
    array_item_menu[6] = [];
  }
  console.log(data_user_aktif);
}
function create_item_menu(per, arr,z){
	var finish = ""; //initializing variable
	var c3 = ""; //initializing variable
	var mleft = per; //initializing variable
	var mbot = 0; //initializing variable
	var mtop = 0; //initializing variable
	var aborder = ""; //initializing variable
	for(var a=0; a<arr.length; a++){ //loop variable arr
		mbot = 0; //reset variable
		if(z==1){ //untuk membagi item menu
			mtop = 30 * arr[a][3];
			var x = "";
			if((a==0 || a==6 || a==12)){
				mleft += 30;
				mbot = -60;
			}
		}else if(z==2){
			mtop = 30 * arr[a][3];
			var x = 2;
			if((a==4)){
				mleft += 30;
			}
		}
		aborder = ""; //reset variable
		if(arr[a][0]=="Polygon" || arr[a][0]=="Free Hand Polyline" || arr[a][0]=="Text"){ //menambahkan css
			aborder = "border-bottom: 1px solid #ccc;";
		}
		if(z==2 && (arr[a][0]!="BTN" && arr[a][0]!="Pasukan Sendiri" && arr[a][0]!="Formasi" && arr[a][0]!="Radar")){
			x = x.toString() + " hide2";
		}
		var clasz = "";
		if(arr[a][0]=="BTN"){
			clasz = "btn-expd2";
		}
		var img = '<div class="spanz" div_sort="'+arr[a][0]+'"><img class="" src="'+arr[a][1]+'" width="'+arr[a][2]+'" height="'+arr[a][2]+'"/></div>';
		var taga = '<a style="'+aborder+' margin-left: '+mleft+'px !important; margin-top: -'+mtop+'px !important;" class="'+clasz+' customed-menu-a'+x+'" a_sort="'+arr[a][0]+'" onclick="'+arr[a][4]+'" title="'+arr[a][0]+'"><span class="sr-only">'+arr[a][0]+'</span>'+img+'</a>';
		c3 = c3 + taga;
	}
	return c3;
}
$(document).ready(function(){ //saat semua element berhasil dimuat
	if(document.getElementById("customed-menu")!==null){ //jika menu sudah berhasil dimuat

		var customed_menu = $("#customed-menu"); //element yang mau diperbaharui

		var content_1 = create_item_menu(0, array_item_menu[0],1); //membuat item menu berdasarkan array
		var content_2 = create_item_menu(30, array_item_menu[1],1); //membuat item menu berdasarkan array
		var content_3 = create_item_menu(60, array_item_menu[2],1); //membuat item menu berdasarkan array

		var img = '<div class="spanz spanz-a" div_sort="Expand"><img class="btn-expd-img" src="image/plotting/chevron-right.png" width="20px" height="20px"/></div>'; //image untuk tombol expand
		customed_menu.append('<a class="btn-expd" href="#" title="Show"><span class="btn-expd-span sr-only">Show</span>'+img+'</a>'); //menambahkan tombol expand pada menu

		customed_menu.append(content_1); //menambahkan item menu pada menu
		customed_menu.append(content_2); //menambahkan item menu pada menu
		customed_menu.append(content_3); //menambahkan item menu pada menu

		$(".customed-menu-a").hide(); //menyembunyikan item menu

		$(".btn-expd").click(function(){ //trigger untuk tombol expand
			if($('.btn-expd-img').attr('src')=='image/plotting/chevron-left.png'){ //jika image expand
				$('.btn-expd-img').attr('src','image/plotting/chevron-right.png'); //mengubah image expand
				$('.btn-expd-span').html('Show'); //mengubah title
				$('.btn-expd').attr('title','Show'); //mengubah title
				$('.leaflet-draw-section').eq(2).css('top','0px'); //css untuk section ketiga
				$('.leaflet-draw-section').eq(1).css('margin-top','130px'); //css untuk section ketiga
				$(".customed-menu-a").hide(); //menyembunyikan item menu
			}else{
				$('.btn-expd-img').attr('src','image/plotting/chevron-left.png'); //mengubah image expand
				$('.btn-expd-span').html('Hide'); //mengubah title
				$('.btn-expd').attr('title','Hide'); //mengubah title
				$('.leaflet-draw-section').eq(2).css('margin-top','10px'); //css untuk section ketiga
				$('.leaflet-draw-section').eq(1).css('margin-top','250px'); //css untuk section ketiga
				$(".customed-menu-a").show(); //menampilkan item menu
			}
		});

		$(".btn-expd").mouseover(function(){ //trigger saat cursor ada di atas tombol expand
			$(".spanz-a").attr('style', 'background-color: #f4f4f4 !important;');
		});
		$(".btn-expd").mouseleave(function(){ //trigger saat cursor tidak di atas tombol expand
			$(".spanz-a").attr('style', 'background-color: white !important;');
		});

		$(".customed-menu-a").mouseover(function(){ //trigger saat cursor ada di atas item
			$("div[div_sort='"+this.title+"']").attr('style', 'background-color: #f4f4f4 !important;');
		});
		$(".customed-menu-a").mouseleave(function(){ //trigger saat cursor tidak di atas item
			$("div[div_sort='"+this.title+"']").attr('style', 'background-color: white !important;');
		});

		var third_section = '<div class="leaflet-draw-section"><div class="leaflet-draw-toolbar leaflet-bar leaflet-draw-toolbar-top" id="customed-menu_2"></div></div>';
		$(third_section).insertAfter($('.leaflet-draw-section').eq(0));

		var customed_menu = $("#customed-menu_2"); //element yang mau diperbaharui

		var content_4 = create_item_menu(0, array_item_menu[3],2); //membuat item menu berdasarkan array
		var content_5 = create_item_menu(30, array_item_menu[4],2); //membuat item menu berdasarkan array
		var content_6 = create_item_menu(60, array_item_menu[5],2); //membuat item menu berdasarkan array
		var content_7 = create_item_menu(90, array_item_menu[6],2); //membuat item menu berdasarkan array

		customed_menu.append(content_4); //menambahkan item menu pada menu
		customed_menu.append(content_5); //menambahkan item menu pada menu
		customed_menu.append(content_6); //menambahkan item menu pada menu
		customed_menu.append(content_7); //menambahkan item menu pada menu

		$('.leaflet-draw-section').eq(1).css('margin-top','130px'); //css untuk section ketiga

		$(".customed-menu-a2").mouseover(function(){ //trigger saat cursor ada di atas item
			$("div[div_sort='"+this.title+"']").attr('style', 'background-color: #f4f4f4 !important;');
		});
		$(".customed-menu-a2").mouseleave(function(){ //trigger saat cursor tidak di atas item
			$("div[div_sort='"+this.title+"']").attr('style', 'background-color: white !important;');
		});

		$(".btn-expd2").mouseover(function(){ //trigger saat cursor ada di atas tombol expand
			$(".btn-expd2 .spanz").attr('style', 'background-color: #f4f4f4 !important;');
		});
		$(".btn-expd2").mouseleave(function(){ //trigger saat cursor tidak di atas tombol expand
			$(".btn-expd2 .spanz").attr('style', 'background-color: white !important;');
		});

		$('.btn-expd2 span').html('Show'); //mengubah title
		$('.btn-expd2').attr('title','Show'); //mengubah title

		$(".btn-expd2").click(function(){ //trigger untuk tombol expand
			if($('.btn-expd2 img').attr('src')=='image/plotting/chevron-left.png'){ //jika image expand
				$('.btn-expd2 img').attr('src','image/plotting/chevron-right.png'); //mengubah image expand
				$('.btn-expd2 span').html('Show'); //mengubah title
				$('.btn-expd2').attr('title','Show'); //mengubah title
				$(".show2").attr("class"," customed-menu-a2 hide2");
			}else{
				$('.btn-expd2 img').attr('src','image/plotting/chevron-left.png'); //mengubah image expand
				$('.btn-expd2 span').html('Hide'); //mengubah title
				$('.btn-expd2').attr('title','Hide'); //mengubah title
				$(".hide2").attr("class"," customed-menu-a2 show2");
			}
		});

		$('.leaflet-draw-section').eq(0).css('width','30px'); //css untuk section ketiga
		$('.leaflet-draw-section').eq(1).css('width','30px'); //css untuk section ketiga
		$('.leaflet-draw-section').eq(2).css('width','30px'); //css untuk section ketiga
	}
});

        function zoomTo() {
            var koord = document.getElementById("nama_kota_get").value.split(",");
            map.flyTo({lng:koord[1],lat:koord[0]},11);
        }
</script>
