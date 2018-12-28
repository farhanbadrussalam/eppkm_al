<!DOCTYPE html>
<html>

<head>
    <title>Pergerakan</title>
    <?php include "../session.php" ?>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" rel="stylesheet" type="text/css" /> -->
    <link href="../js/pergerakan/leaflet.css" rel="stylesheet" type="text/css" />
    
    <link href="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet" type="text/css" />   
    <link href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" rel="stylesheet" type="text/css" />    
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />    
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-timepicker/0.5.2/css/bootstrap-timepicker.min.css" rel="stylesheet" type="text/css" />
    <link href="http://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.0/leaflet.awesome-markers.css" rel="stylesheet" type="text/css" />
    
    <link href="pergerakan.css" rel="stylesheet" type="text/css" />

    <style>
    #title_container {
        z-index: 10000;
        position: fixed;
        left: 100px;
    }

    body {
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }

    h1 {
        font-size: 36px;
        font-weight: 300;
        line-height: 1.1;
    }
    .menu{
      position: absolute;
      z-index: 3;
      width: 300px; height: auto;
      left: 0px;
      bottom: 0px;
    }
    .property_attack{
      position: absolute;
      z-index: 3;
      width: 300px;
      height: auto;
      right: 1px;
      top: 15%;
      display: none;
    }
    .button_attack{
      display: none;
      position: absolute;
      z-index: 3;
      width: 100px;
      height: 100px;
      border-top-left-radius: 100%;
      bottom: 1px;
      right: 1px;
    }
    .datetimeControl p {
        margin: 0;
        font-size: 16px;
    }
    .accordion-group{
      background-color: #8ABDFE !important; 
    }
    .informasi_symbol{
      width: 48.9%;
      height: 50px;
      float: left;
      padding-left: 2px;
      border-right: 1px solid black;
      border-bottom: 1px solid black;
    }
    .informasi_symbol span{
      font-weight: lighter;
      font-size: 20px;
      text-align: center;
      /*width: 100%;*/
    }
    .weapon_option{
      display: none;
      width: 100%;
    }
    .thumbnails>li{
      margin-bottom: 0px;
    }
    </style>
</head>

<body>
    <div id="title_container">
       <!--  <h1>Example 2</h1>
        <p>LeafletPlayback with custom interface</p> -->
    </div>

    <div id="map"></div>
    <div class="menu">
      <div class="accordion" id="accordion2" style="margin-bottom: 0px;">
        <div class="accordion-group">
          <div class="accordion-heading">
            <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne" id="menu_pergerakan" style="font-size: 20px; font-weight: bolder;height: 24px;">
              Menu 
            </a>
          </div>
          <div id="collapseOne" class="accordion-body collapse in">
            <div class="accordion-inner" style="padding: 0px; padding-top: 10px;">
              <div class="row-fluid">
                <div class="span12" style="text-align: center; height: auto; font-size: 40px;padding-top: 10px;" id="priview_symbol">....</div>
                <div class="span12" style="margin-top: 20px;margin-left: 0px;">
                  <ul class="nav nav-tabs" style="margin-bottom: 0px;">
                    <li class="active"><a href="#info" data-toggle="tab">Informasi</a></li>
                    <li><a href="#weapon" data-toggle="tab">Weapon</a></li>
                  </ul>
                  <div class="tab-content" style="height: 300px;">
                    <div class="tab-pane active" id="info">
                      <div id="info_satuan" style="display: none;">
                        <div class="informasi_symbol">
                            <label>NAME :</label>
                            <center><span id="name_satuan">-</span></center>
                            <input type="hidden" id="default_lat_sat">
                            <input type="hidden" id="default_lng_sat">
                            <input type="hidden" id="index_sat">
                        </div>
                        <div class="informasi_symbol">
                            <label>Nomer Satuan :</label>
                            <center><span id="no_sat">-</span></center>
                            <div id="lnglat_move"></div>
                        </div>
                        <div class="informasi_symbol">
                            <label>Nomer Atasan :</label>
                            <center><span id="no_atasan">-</span></center>
                        </div>
                        <div class="informasi_symbol">
                            <label>Ukuran :</label>
                            <center><span id="ukuran_satuan">-</span></center>
                        </div>
                        <div class="informasi_symbol" style="width: 98.8%;">
                            <label>Waktu Berangkat :</label>
                            <center><span style="font-family: 'Engravers MT' ;" id="start_satuan">---</span></center>
                        </div>
                        <div class="informasi_symbol" style="width: 98.8%;">
                            <label>Kecepatan :</label>
                            <center><span style="font-family: 'Engravers MT' ;" id="speed_satuan">-- --</span></center>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane" id="weapon">
                      <div id="option_weapon" class="weapon_option">
                          <div class="btn-group" data-toggle="buttons-radio" style="width: 100%">
                            <button type="button" class="btn btn-primary" style="font-size: 16.5px;">Meriam</button>
                            <button type="button" class="btn btn-primary" style="font-size: 16.5px;">Gun</button>
                            <button type="button" class="btn btn-primary" style="font-size: 16.5px;">missile</button>
                            <button type="button" class="btn btn-primary" style="font-size: 16.5px;">Torpedo</button>
                          </div>
                          <div style="padding: 2px; border: 1px solid black; height: 200px; border-top: 0px;">
                            <ul class="thumbnails">
                              <li class="span1" style="width: 100%;">
                                <div class="thumbnail" style="cursor: pointer;height: 20px;" >
                                  <label for="weapon_1">PISTOL P7 K3  <input type="radio" name="weapon" id="weapon_1" style="float: right;"></label>
                                </div>
                              </li>
                            </ul>
                            <ul class="thumbnails">
                              <li class="span6" style="width: 100%;" title="SENAPAN-OTOMATIS MINIMI KAL 5.56 MM">
                                <div class="thumbnail" style="cursor: pointer;height: 20px;">
                                  <label for="weapon_2"><span>SENAPAN-OTOMATIS MINIMI...</span><input type="radio" name="weapon" id="weapon_2" style="float: right;"></label>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div style="margin-top: 5px;">
                            <button class="btn btn-large btn-block btn-success" type="button" onclick="select_weapon()">Used Weapon</button>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="property_attack" id="property_attack" style="display: none;">
      <div class="accordion" id="accordion2" >
        <div class="accordion-group">
          <div class="accordion-heading">
            <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseattack" style="font-size: 20px; font-weight: bolder;height: 24px;" id="attack_prop">
              Property Attack
            </a>
          </div>
          <div id="collapseattack" class="accordion-body collapse">
            <div class="accordion-inner" style="padding: 0px; padding-top: 10px;">
              <div class="row-fluid">
                <!-- /***********************************************
                     ** START
                     ** Meriam Property
                     ** By: Muhamad Farhan Badrussalam
                     ***********************************************/ -->
                <div id="meriam_property">
                  <div style="width: 100%; height: 100px; ">
                    <div style="width: 49%; border-right: 1px solid black; height: 100%; float: left;">
                      <center>
                        <label>Direction Angle</label>
                        <!-- CANVAS -->
                        <div>
                          
                        </div>
                        <input type="number" min="0" value="0" max="360" id="dir_angle_prop_sat" style="width: 50px;">
                      </center>
                    </div>
                    <div style="width: 49%; height: 100%;float: left;">
                      <center>
                        <label>Weapon Angle</label>
                        <!-- CANVAS -->
                        <div>
                          
                        </div>
                        <input type="number" min="0" value="40" max="360" id="weap_angle_prop_sat" style="width: 50px;">
                      </center>
                    </div>
                  </div>
                </div>
                <!-- /***********************************************
                     ** END Meriam Property
                     ***********************************************/ -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="button_attack" id="button_attack">
      <button class="btn btn-danger" type="button" style="width: 100%;height: 100%;border-top-left-radius: 100%;" id="attack_" onclick="attack_object()"><img src="../image/Icon_attack.png" width="50" height="50"></button>
    </div>
    <!-- <script src="../../js/public_pergerakan.js"></script> -->
    <script src="jquery-1.11.0.js"></script>
    <script src="jquery-ui.min.js"></script>

    <!-- <script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet-src.js"></script> -->
    <script src="../js/pergerakan/leaflet-src.js"></script>
    <!-- <script src="../libs/leaflet-src.js"></script> -->
    <script src="../js/MovingMarker.js"></script>
    <script src="../js/leaflet.rotatedMarker.js"></script>
    <!-- <script src="../libs/leaflet-src.js"></script> -->
    <script src="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js"></script>    
    <script src="bootstrap-timepicker.js"></script>    
    <script src="http://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.0/leaflet.awesome-markers.js"></script>

    <script type="text/javascript">
      // console.log();
    $('#myTab a').click(function (e) {
      e.preventDefault();
      $(this).tab('show');
    })
      $(".collapse").collapse();

      var id_user = Number("<?php echo $_SESSION['id_user']; ?>");
      var dokumen_nama = "<?php echo $_SESSION['dokumen']; ?>";
      var data_user_aktif = JSON.parse('<?php echo $_SESSION['arr_user']; ?>');
      var type_login = "<?php echo $_SESSION['type_login'] ?>";
      var skenario_aktif = JSON.parse('<?php echo $_SESSION['scenario_aktif']; ?>');
      var token_user = "<?php echo $_SESSION['token']; ?>";
      var bagian_user = "<?php echo $_SESSION['bagian']; ?>";

      var load_cb_lain = JSON.parse(sessionStorage.getItem("cara_bertindak"));
      var load_peta_lain = JSON.parse(sessionStorage.getItem("peta_sendiri"));

      var dokument_data = [[Number("<?php echo $_SESSION['id_user']; ?>"),"<?php echo $_SESSION['dokumen']; ?>",type_login,skenario_aktif[0].ID]];

      for (var i = 0; i < load_cb_lain.length; i++) {
        var tmp = [];
        var tmp_type_login = "";
        if(load_cb_lain[i][6] == "menucb"){
          tmp_type_login = "menu_cb";
        }else{
          tmp_type_login = "menu";
        }

        tmp.push(load_cb_lain[i][1]);
        tmp.push(load_cb_lain[i][2]);
        tmp.push(tmp_type_login);
        tmp.push(load_cb_lain[i][0]);

        dokument_data.push(tmp);
      }

      for (var i = 0; i < load_peta_lain.length; i++) {
        var tmp = [];

        tmp.push(load_peta_lain[i][1]);
        tmp.push(load_peta_lain[i][2]);
        tmp.push(load_peta_lain[i][3]);
        tmp.push(load_peta_lain[i][0]);

        dokument_data.push(tmp);
      }
      // console.log(dokument_data);
    </script>
    <script src="https://unpkg.com/@turf/turf@5.1.6/turf.min.js"></script>
    <script src="../js/public.js"></script>
    <script src="pergerakan.js"></script>
    <script src="dist/LeafletPlayback.js"></script>
    <script src="data/demo/demo-tracks.js"></script>
    
    <script src="pergerakan_control.js"></script>
    <script src="../js/weapon/function_weapon.js"></script>
    <script type="text/javascript">

      function_load_data();
      clickedan();
      function daftar_list_objc(){

      }
    </script>
</body>
</html>