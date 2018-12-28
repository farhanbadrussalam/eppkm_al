<style type="text/css">
  #font_obst{
    font-family: TandaTanda;
    font-size: 50px;
    cursor: pointer;
  }
  #font_IFMAR{
    font-family: IF-MAR;
    font-size: 50px;
    cursor: pointer;
  }
  #font_AD{
    font-family: ARHANUD;
    font-size: 50px;
    cursor: pointer;
  }
  #font_ANGMAR{
    font-family: ANG-MAR;
    font-size: 50px;
    cursor: pointer;
  }
  #font_ARDMAR{
    font-family: ARHANUD-MAR;
    font-size: 50px;
    cursor: pointer;
  }
  #font_ARMMAR{
    font-family: ARMED-MAR;
    font-size: 50px;
    cursor: pointer;
  }
  #font_HUBMAR{
    font-family: HUB-MAR;
    font-size: 50px;
    cursor: pointer;
  }
  #font_KESMAR{
    font-family: KES-MAR;
    font-size: 50px;
    cursor: pointer;
  }
  #font_PRVMAR{
    font-family: PROV-MAR;
    font-size: 50px;
    cursor: pointer;
  }
  #font_RTBMAR{
    font-family: RANRATFIB-MAR;
    font-size: 50px;
    cursor: pointer;
  }
  #font_RRFMAR{
    font-family: RRF-MAR;
    font-size: 50px;
    cursor: pointer;
  }
  #font_TFBMAR{
    font-family: TAIFIB-MAR;
    font-size: 50px;
    cursor: pointer;
  }
  #font_TABMAR{
    font-family: TANKFIB-MAR;
    font-size: 50px;
    cursor: pointer;
  }
  #font_TNKMAR{
    font-family: TANK-MAR;
    font-size: 50px;
    cursor: pointer;
  }
  #font_ZIMAR{
    font-family: ZI-MAR;
    font-size: 50px;
    cursor: pointer;
  }
  #font_TD{
    font-family: taktis-dasar;
    font-size: 50px;
    cursor: pointer;
  }
  #font_AL{
    font-family: TAKTIS-AL;
    font-size: 50px;
    cursor: pointer;
  }

    #point{
        visibility:hidden;
    }

    .testing{
        font-size: 11px;
    }
</style>

<div id="set_pencarian" class="overlay">
    <div class="popup" style="width: 35%;">
        <h2>Pencarian Kota</h2>
        <a class="close" href="#" onclick="close_pop();">&times;</a>
        <div class="content">
            <table frame="box" style="width:100%;border:none;">
                <tr>
                    <td> <label>Pilih kota : <select id="nama_kota_get"></select></label>

                        <script type="text/javascript">
                            var isi_option_kota = "<option>--Pilih Kota--</option>";
                            for(var a = 0; a<data_kota_get.length;a++){
                                var koordinat = data_kota_get[a].koorx+","+data_kota_get[a].koory;
                                var tmp = "<option value='"+data_kota_get[a].koorx+","+data_kota_get[a].koory+"'>"+data_kota_get[a].nama_kota+"</option>";
                                isi_option_kota = isi_option_kota+tmp;
                            }
                            document.getElementById("nama_kota_get").innerHTML = isi_option_kota;
                        </script>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table style="width:100%;border:none;">
                            <tr>
                                <td>
                                    <button id="btn_citys" style="float: left;" onclick="zoomTo()">Cari</button>
                                </td>
                                <td>
                                    <a href="#tambah_kota"><button id="btn_add_citys">Tambah Kota</button></a>
                                </td>
                                <td>
                                    <a href="#" onclick="close_pop();"><button id="exit_pencarian" style="float: right;">Keluar</button></a>
                                </td>
                            </tr>
                        </table>
                </tr>
            </table>
        </div>
    </div>
</div>

<div id="tambah_kota" class="overlay">
    <div class="popup" style="width: 35%;">
        <h2>Tambah Kota</h2>
        <a class="close" href="#" onclick="close_pop();">&times;</a>
        <div class="content">
            <button id="btn_tambah_kota_peta" onclick="pilih_peta()">PILIH KOORDINAT DI PETA</button>
            <a href="#tambah_kota_manual_form"><button id="btn_tambah_kota_manual">INPUT MANUAL</button> </a>
        </div>
    </div>
</div>

<div id="tambah_kota_manual_form" class="overlay">
    <div class="popup" style="width: 25%;">
        <h2>Tambah Kota</h2>
        <a class="close" href="#" onclick="close_pop();">&times;</a>
        <div class="content">
            <table frame="box" style="">
                <tr>
                    <td>
                        Nama Kota
                    </td>
                    <td>
                        <input type="text" id="nama_kota_text" >
                    </td>
                </tr>
                <tr>
                    <td>
                        Longitude
                    </td>
                    <td>
                        <input type="text" id="longitude_text" >
                    </td>
                </tr>
                <tr>
                    <td>
                        Latitude
                    </td>
                    <td>
                        <input type="text" id="latitude_text" >
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <button id="btn_simpan_kota_manual" onclick="function_simpan_kota()">Simpan</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</div>

<div id="tambah_kota_peta_form" class="overlay">
    <div class="popup" style="width: 35%;">
        <h2>Tambah Kota</h2>
        <a class="close" href="#" onclick="close_pop();">&times;</a>
        <div class="content">
            <table frame="box" style="border: none;">
                <tr>
                    <td>
                        Nama Kota
                    </td>
                    <td>
                        <input type="text" id="nama_kota_text_peta">
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <input type="button" id="btn_tambah_kota_peta" onclick="pilih_peta()" value="Pilih Peta"></input><br>
                    </td>
                </tr>
                <tr>
                    <td>
                        Longitude
                    </td>
                    <td>
                        <input type="text" id="longitude_text_peta" disabled>
                    </td>
                </tr>
                <tr>
                    <td>
                        Latitude
                    </td>
                    <td>
                        <input type="text" id="latitude_text_peta" disabled>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        Degree Minutes Second Direction <br>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <table style="border: none;">
                            <tr><td>Lintang : </td><td><input id="degree_lat" style="width: 50px" disabled></td><td> ° </td><td><input id="minute_lat" style="width: 50px" disabled></td><td> ´ </td><td><input id="second_lat" style="width: 50px" disabled></td><td> " </td><td><input id="direction_lat" style="width: 50px" disabled></td></tr>
                            <tr><td>Lintang : </td><td><input id="degree_long" style="width: 50px" disabled></td><td> ° </td><td><input id="minute_long" style="width: 50px" disabled></td><td> ´ </td><td><input id="second_long" style="width: 50px" disabled></td><td> " </td><td><input id="direction_long" style="width: 50px" disabled></td></tr>
                            <tr><td colspan="5"><button id="btn_simpan_kota_peta" onclick="function_simpan_kota_peta()">Simpan</button></td></tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</div>
<!-- POPUP LOGISTIK PELABUHAN KEKUATAN -->

<div id="set_pelabuhan" class="overlay"><!-- diubah mei logis -->
    <div class="popup" style="width: 40%;">
        <h2>Plotting Logistik</h2>
        <a class="close" href="#" onclick="close_pop();">&times;</a>
        <div class="content_popup">
            <form style="margin-top: -20px;">
                <fieldset style="padding: 7px;">
                    <legend>Logistik Pelabuhan</legend>
                    <ul class="accordion" data-accordion role="tablist" style="max-height: 300px;overflow: auto;">
                        <li class="accordion-navigation">
                            <a onclick="step_pelabuhan(1)" role="tab" id="step1_pelabuhan-heading" aria-controls="step1_pelabuhan">Step 1 - Initializing</a>
                            <div id="step1_pelabuhan" class="content active" role="tabpanel" aria-labelledby="step1_pelabuhan-heading">
                              <div class="row">
                                <div class="small-5 columns">
                                  <label>Jenis Pelabuhan
                                        <select id="jenisp" style="height: 30px; padding: 0px;margin-top: 10px; padding-left: 5px;" onchange="getjenisp()" >
                                            <option value="null">-- Pilih Jenis --</option>
                                            <option value="Umum">Umum</option>
                                            <option value="Lantamal">Lantamal</option>
                                            <option value="Lanal">Lanal</option>
                                        </select>
                                    </label>
                                </div>
                                <div class="small-5 columns">
                                  <label style="display: none;">Nama Pelabuhan
                                        <input type="radio" onclick="nm_pelabuhan('dropdown')" name="ceked" />
                                        <select name="nm2" id="nm2" style="height: 30px; padding: 0px;margin-top: 0px; padding-left: 5px;" onchange="selectloc(this.value, this.id, this.name)">
                                            <option value="null">-- Pilih Pelabuhan --</option>
                                        </select>
                                    </label>
                                    <label>Nama Pelabuhan
                                        <!-- <input type="radio" onclick="nm_pelabuhan('search')"  name="ceked" checked="checked" /> -->
                                        <input type="text" id="default" list="pelab"  style="height: 30px; padding: 0px;margin-top: 0px; padding-left: 5px;" placeholder="Pencarian Pelabuhan" >
                                        <datalist id="pelab" style="height: 100px; overflow: auto;">
                                        </datalist>
                                        <input type="button" name="scr2" id="scr2" onclick="selectloc(document.getElementById('default').value, this.id, this.name, 'pelabuhan')" value="Ok" >
                                    </label>
                                </div>
                              </div>
                                <div style="margin-top: 30px;">
                                    <label>
                                    <table style="border: 0px; font-weight: bolder;">
                                        <tr>
                                            <td width="150px">Nama Pelabuhan</td>
                                            <td width="30px"> = </td>
                                            <td width="270px"><i id="nama_pelabuhan"></i></td>
                                        </tr>
                                        <tr>
                                            <td width="150px">Koordinate X</td>
                                            <td width="30px"> = </td>
                                            <td width="270px"><i id="locationX"></i></td>
                                        </tr>
                                        <tr>
                                            <td width="150px">Koordinate Y</td>
                                            <td width="30px"> = </td>
                                            <td width="270px"><i id="locationY"></i></td>
                                        </tr>
                                    </table>
                                    </label>
                                </div>
                            </div>
                        </li>
                        <li class="accordion-navigation">
                            <a onclick="step_pelabuhan(2)" role="tab" id="step2_pelabuhan-heading" aria-controls="step2_pelabuhan">Step 2 - Data Logistik</a>
                            <div id="step2_pelabuhan" class="content" role="tabpanel" aria-labelledby="step2_pelabuhan-heading">
                                <div>
                                    <label><a id="addban" onclick="addToform('pelabuhan')">Add data</a></label>
                                </div>
                                <div style="border: 1px solid #ddd; width: auto; max-height: 200px;overflow: auto; margin-top: 5px;">
                                    <table width="100%">
                                        <thead>
                                            <tr>
                                                <th style="text-align: center;">Nama </th>
                                                <th style="text-align: center;">Nilai</th>
                                                <th style="text-align: center;">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody id="data_pelabuhan">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </li>
                        <li class="accordion-navigation">
                            <a onclick="step_pelabuhan(3)" role="tab" id="step3_pelabuhan-heading" aria-controls="step3_pelabuhan">Step 3 - Warna Logistik</a>
                            <div id="step3_pelabuhan" class="content" role="tabpanel" aria-labelledby="step3_pelabuhan-heading">
                              <!-- Tambahan untuk warna  -->
                                <div class="row">
                                  <div class="large-5 columns">
                                    <label><h3>Color</h3></label>
                                    <input type="radio" id="red" name="warna_log_pelabuhan" value="merah" /><label for="red">Red</label>
                                    <input type="radio" id="blue" name="warna_log_pelabuhan" value="biru" checked="checked"/><label for="blue">Blue</label>
                                  </div>
                                  <div class="large-7 columns">
                                    <label><h3>Size</h3></label>
                                    <input type="number" id="log_pelabuhan_size" name="log_pelabuhan_size" value="30" style="width: 80px;margin-top: 10px;" />
                                  </div>
                                </div>
                              <!-- akhir -->

                        </div>
                        </li>
                    </ul>
                </fieldset>
            </form>
        </div>
        <br>
        <div class="footer_popup" style="float: right;">
            <a role="button" onclick="setlogistic(0)" class="small button" style="border-radius: 10px;">OK</a>
        </div>
        <script type="text/javascript">
            function step_pelabuhan(id){
                document.getElementById("step1_pelabuhan").style.display = "none";
                document.getElementById("step2_pelabuhan").style.display = "none";
                document.getElementById("step3_pelabuhan").style.display = "none";
                if(id == 1){
                    document.getElementById("step1_pelabuhan").style.display = "block";
                }else if(id == 2){
                    document.getElementById("step2_pelabuhan").style.display = "block";
                }else if(id == 3){
                    document.getElementById("step3_pelabuhan").style.display = "block";
                }
            }
            function nm_pelabuhan(kondisi) {
              if(kondisi=="dropdown"){

              // alert(kondisi);
               document.getElementById("nm2").disabled = false;
               document.getElementById("default").disabled = true;
               document.getElementById("scr2").disabled = true;
               document.getElementById("locationX").innerHTML = "";
               document.getElementById("locationY").innerHTML = "";
               document.getElementById("nama_pelabuhan").innerHTML = "";
              }else{
                // alert(kondisi);
               document.getElementById("nm2").disabled = true;
               document.getElementById("default").disabled = false;
               document.getElementById("scr2").disabled = false;
               document.getElementById("locationX").innerHTML = "";
               document.getElementById("locationY").innerHTML = "";
               document.getElementById("nama_pelabuhan").innerHTML = "";
              }
              // body...
            }
        </script>
    </div>
</div>

<!-- POPUP LOGISTIK BANDARA KEKUATAN -->

<div id="set_bandara" class="overlay"><!-- diubah mei logis -->
    <div class="popup" style="width: 40%;">
        <h2>Plotting Logistik</h2>
        <a class="close" href="#" onclick="close_pop();">&times;</a>
        <div class="content_popup">
            <form style="margin-top: -20px;">
                <fieldset style="padding: 7px;">
                    <legend>Logistik Bandara</legend>
                    <ul class="accordion" data-accordion role="tablist" style="max-height: 300px;overflow: auto;">
                        <li class="accordion-navigation">
                            <a onclick="step_bandara(1)" role="tab" id="step1_bandara-heading" aria-controls="step1_bandara">Step 1 - Initializing</a>
                            <div id="step1_bandara" class="content active" role="tabpanel" aria-labelledby="step1_bandara-heading">
                              <div class="row">
                                <div class="small-5 columns">
                                  <label>Jenis Bandara
                                        <select id="jenisb" style="height: 30px; padding: 0px;margin-top: 10px; padding-left: 5px;" onchange="getjenisb()">
                                            <option value="null">-- Pilih Jenis --</option>
                                            <option value="Pangkalan Udara">Pangkalan Udara</option>
                                            <option value="Landasan Udara">Landasan Udara</option>
                                            <option value="Landasan Rumput">Landasan Rumput</option>
                                            <option value="Pelandasan Helikopter">Pelandasan Helikopter</option>
                                        </select>
                                    </label>
                                </div>
                                <div class="small-7 columns">
                                  <label style="display: none;">Nama Bandara
                                        <input type="radio" onclick="nm_bandara('dropdown')" name="ceked" />
                                        <select name="nm1" id="nm1" style="height: 30px; padding: 0px;margin-top: 0px; padding-left: 5px;" onchange="selectloc(this.value, this.id, this.name)">
                                            <option value="null">-- Pilih Bandara --</option>
                                        </select>
                                    </label>
                                    <label>Nama Bandara
                                        <input type="text" id="default_bandar" list="bandar"  style="height: 30px; padding: 0px;margin-top: 0px; padding-left: 5px;" placeholder="Pencarian Bandara" >
                                        <datalist id="bandar" style="overflow: auto; max-height: 100px;"><!--diubah mei-->
                                        </datalist>
                                        <input type="button" name="scr1" id="scr1" onclick="selectloc(document.getElementById('default_bandar').value, this.id, this.name, 'bandara')" value="Ok" >
                                    </label>
                                </div>
                              </div>
                                <div style="margin-top: 30px;">
                                    <label>
                                    <table style="border: 0px; font-weight: bolder;">
                                        <tr>
                                            <td width="150px">Nama Bandara</td>
                                            <td width="30px"> = </td>
                                            <td width="270px"><i id="nama_bandara"></i></td>
                                        </tr>
                                        <tr>
                                            <td width="150px">Koordinate X</td>
                                            <td width="30px"> = </td>
                                            <td width="270px"><i id="locationX_ban"></i></td>
                                        </tr>
                                        <tr>
                                            <td width="150px">Koordinate Y</td>
                                            <td width="30px"> = </td>
                                            <td width="270px"><i id="locationY_ban"></i></td>
                                        </tr>
                                    </table>
                                    </label>
                                </div>
                            </div>
                        </li>
                        <li class="accordion-navigation">
                            <a onclick="step_bandara(2)" role="tab" id="step2_bandara-heading" aria-controls="step2_bandara">Step 2 - Data Logistik</a>
                            <div id="step2_bandara" class="content" role="tabpanel" aria-labelledby="step2_bandara-heading">
                                <div>
                                    <label><a id="addban" onclick="addToform('bandara')">Add data</a></label>
                                </div>
                                <div style="border: 1px solid #ddd; width: auto; max-height: 200px;overflow: auto; margin-top: 5px;">
                                    <table width="100%">
                                        <thead>
                                            <tr>
                                                <th style="text-align: center;">Nama </th>
                                                <th style="text-align: center;">Nilai</th>
                                                <th style="text-align: center;">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody id="data_bandara">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </li>
                        <li class="accordion-navigation">
                            <a onclick="step_bandara(3)" role="tab" id="step3_bandara-heading" aria-controls="step3_bandara">Step 3 - Warna Logistik</a>
                            <div id="step3_bandara" class="content" role="tabpanel" aria-labelledby="step3_bandara-heading">

                              <!-- Tambahan untuk warna  -->
                                <div class="row">
                                  <div class="large-5 columns">
                                    <label><h3>Color</h3></label>
                                    <input type="radio" id="red" name="warna_log_bandara" value="merah" /><label for="red">Red</label>
                                    <input type="radio" id="blue" name="warna_log_bandara" value="biru" checked="checked"/><label for="blue">Blue</label>
                                  </div>
                                  <div class="large-7 columns">
                                    <label><h3>Size</h3></label>
                                    <input type="number" id="log_bandara_size" name="log_bandara_size" value="30" style="width: 80px;margin-top: 10px;" />
                                  </div>
                                </div>
                              <!-- akhir -->
                          <!-- Tambahan untuk warna  -->
                            <!-- <div>
                                <label>Warna
                                <table style="margin-top: 10px; padding: 5px;">
                                    <tr>
                                        <td><input type="radio" style="margin-top: 13px;" id="red" name="warna_log_bandara" value="merah" />Merah</td>
                                        <td><input type="radio" style="margin-top: 13px;" id="blue" name="warna_log_bandara" value="biru" checked="checked"/>Biru</td>
                                    </tr>
                                </table>
                                </label>
                            </div> -->
                        </div>
                        </li>
                    </ul>
                </fieldset>
            </form>
        </div>
        <br>
        <div class="footer_popup" style="float: right;">
            <a role="button" onclick="setlogistic(1)" class="small button" style="border-radius: 10px;">OK</a>
        </div>
        <script type="text/javascript">
            function step_bandara(id){
                document.getElementById("step1_bandara").style.display = "none";
                document.getElementById("step2_bandara").style.display = "none";
                document.getElementById("step3_bandara").style.display = "none";
                if(id == 1){
                    document.getElementById("step1_bandara").style.display = "block";
                }else if(id == 2){
                    document.getElementById("step2_bandara").style.display = "block";
                }else if(id == 3){
                    document.getElementById("step3_bandara").style.display = "block";
                }
            }
            function nm_bandara(kondisi) {
              if(kondisi=="dropdown"){

              // alert(kondisi);
               document.getElementById("nm1").disabled = false;
               document.getElementById("default_bandar").disabled = true;
               document.getElementById("scr1").disabled = true;
               document.getElementById("locationX_ban").innerHTML = "";
               document.getElementById("locationY_ban").innerHTML = "";
               document.getElementById("nama_bandara").innerHTML = "";
              }else{
                // alert(kondisi);
               document.getElementById("nm1").disabled = true;
               document.getElementById("default_bandar").disabled = false;
               document.getElementById("scr1").disabled = false;
               document.getElementById("locationX_ban").innerHTML = "";
               document.getElementById("locationY_ban").innerHTML = "";
               document.getElementById("nama_bandara").innerHTML = "";
              }
              // body...
            }
        </script>
    </div>
</div>
<!-- POPUP LOGISTIK BEBAS KEKUATAN -->

<div id="set_bebas" class="overlay"><!-- diubah mei logis -->
    <div class="popup" style="width: 40%;">
        <h2>Plotting Logistik</h2>
        <a class="close" href="#" onclick="close_pop();">&times;</a>
        <div class="content_popup">
            <form style="margin-top: -20px;">
                <fieldset style="padding: 7px;">
                    <legend>Logistik Bebas</legend>
                    <ul class="accordion" data-accordion role="tablist" style="max-height: 300px;overflow: auto;">
                        <li class="accordion-navigation">
                            <a onclick="step_bebas(1)" role="tab" id="step1_bebas-heading" aria-controls="step1_bebas">Step 1 - Initializing</a>
                            <div id="step1_bebas" class="content active" role="tabpanel" aria-labelledby="step1_bebas-heading">
                                <div>
                                    <label>Nama Logistik
                                        <input type="text" id="log_name" name="nama_log"  style="height: 30px; padding: 0px;margin-top: 10px; padding-left: 5px;">
                                    </label>
                                </div>
                            </div>
                        </li>
                        <li class="accordion-navigation">
                            <a onclick="step_bebas(2)" role="tab" id="step2_bebas-heading" aria-controls="step2_bebas">Step 2 - Data Logistik</a>
                            <div id="step2_bebas" class="content" role="tabpanel" aria-labelledby="step2_bebas-heading">
                                <div>
                                    <label><a id="addban" onclick="addToform('bebas')">Add data</a></label>
                                </div>
                                <div style="border: 1px solid #ddd; width: auto; max-height: 200px;overflow: auto; margin-top: 5px;">
                                    <table width="100%">
                                        <thead>
                                            <tr>
                                                <th style="text-align: center;">Nama </th>
                                                <th style="text-align: center;">Nilai</th>
                                                <th style="text-align: center;">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody id="data_logbebas">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </li>
                        <li class="accordion-navigation">
                            <a onclick="step_bebas(3)" role="tab" id="step3_bebas-heading" aria-controls="step3_bebas">Step 3 - Warna Logistik</a>
                            <div id="step3_bebas" class="content" role="tabpanel" aria-labelledby="step3_bebas-heading">
                              <!-- Tambahan untuk warna  -->
                                <div class="row">
                                  <div class="large-5 columns">
                                    <label><h3>Color</h3></label>
                                    <input type="radio" id="red" name="warna_log_bebas" value="merah" /><label for="red">Red</label>
                                    <input type="radio" id="blue" name="warna_log_bebas" value="biru" checked="checked"/><label for="blue">Blue</label>
                                  </div>
                                  <div class="large-7 columns">
                                    <label><h3>Size</h3></label>
                                    <input type="number" id="log_bebas_size" name="log_bebas_size" value="30" style="width: 80px;margin-top: 10px;" />
                                  </div>
                                </div>
                              <!-- akhir -->
                        </div>
                        </li>
                    </ul>
                </fieldset>
            </form>
        </div>
        <br>
        <div class="footer_popup" style="float: right;">
            <a role="button" onclick="simpan_log_bebas()" class="small button" style="border-radius: 10px;">OK</a>
        </div>
        <script type="text/javascript">
            function step_bebas(id){
                document.getElementById("step1_bebas").style.display = "none";
                document.getElementById("step2_bebas").style.display = "none";
                document.getElementById("step3_bebas").style.display = "none";
                if(id == 1){
                    document.getElementById("step1_bebas").style.display = "block";
                }else if(id == 2){
                    document.getElementById("step2_bebas").style.display = "block";
                }else if(id == 3){
                    document.getElementById("step3_bebas").style.display = "block";
                }
            }
        </script>
    </div>
</div>

<div id="set_kalpur" class="overlay">
    <div class="popup">
        <h2>KALKULASI TEMPUR</h2>
        <a class="close" href="#" onclick="close_pop();">&times;</a>
        <div class="content">
            <ul class="nav nav-tabs" style="font-size: 11px;">
              <li class="active"><a data-toggle="tab" href="#home">Kalkulasi Tempur</a></li>
              <li><a data-toggle="tab" href="#menu1">Kalkulasi Tempur Pasukan</a></li>
              <li><a data-toggle="tab" href="#menu2">Kalkulasi Tempur Darat</a></li>
              <li><a data-toggle="tab" href="#menu3">Kalkulasi Tempur Kasbonmu</a></li>
            </ul>

            <div class="tab-content">
              <div id="home" class="tab-pane fade in active">
                <div id="setting_p" class="jwpopup-main">
                    <center><h4 class="judul">Kalkulasi Tempur</h4></center>
                    <div style="width: auto; height: 350px;overflow: auto; margin-top: 5px; padding: 2px; font-family: Arial, Helvetica, sans-serif; font-size: 14px !important;">
                      <table cellpadding="2" cellspacing="1">
                        <tr>
                          <td>
                            <span>Jenis Senjata</span>
                          </td>
                          <td>
                            <select name="jenissenjata" id="jenissenjata" onchange="selectgun(this.value)">
                              <option value="Rudal">Rudal</option>
                              <option value="Artileri">Artileri</option>
                              <option value="TorpedoU">Torpedo Udara</option>
                              <option value="TorpedoL">Torpedo Laut</option>
                              <option value="BomL">Rocket & Bom Laut</option>
                            </select>
                          </td>
                          <td><button id="showlistkal" name="showdat">Show Data</button></td>
                        </tr>
                          <tr>
                          <td>
                            <span>Type Senjata</span>
                          </td>
                          <td id="rudalt" style="display: block">
                            <select name="typesenjata" id="typesenjata" onchange="selectguns(this.value)">
                              <option value="Harpoon">Harpoon</option>
                              <option value="Excocet">Excocet</option>
                            </select>
                          </td>
                          <td id="artilerit" style="display: none">
                            <select name="typesenjata" id="typesenjata" onchange="selectguns(this.value)">
                              <option value="120">Meriam 120 MM</option>
                              <option value="76">Meriam 76 MM</option>
                              <option value="57">Meriam 57 MM</option>
                            </select>
                          </td>
                          <td id="rockett" style="display: none">
                            <select name="typesenjata" id="typesenjata" onchange="selectguns(this.value)">
                              <option value="ASROC">ASROC</option>
                              <option value="RBU">RBU 6000</option>
                              <option value="BL">Bom Laut</option>
                            </select>
                          </td>
                          <td id="torpedot1" style="display: none">
                            <select name="typesenjata" id="typesenjata" onchange="selectguns(this.value)">
                                <option value="zero0" style="display:none;">Pilih</option>
                              <option value="TAKPA">Torpedo AKPA</option>
                              <!-- <option value="TAKS">Torpedo AKS</option> -->
                            </select>
                          </td>
                          <td id="torpedot2" style="display: none">
                            <select name="typesenjata" id="typesenjata" onchange="selectguns(this.value)">
                                <option value="zero0" style="display:none;">Pilih</option>
                              <!-- <option value="TAKPA">Torpedo AKPA</option> -->
                              <option value="TAKS">Torpedo AKS</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>Jenis Musuh</span>
                          </td>
                          <td id="jenis1" style="display: block;">
                            <select name="jenismusuh" id="jenismusuh" onchange="ceks(this.value)">
                              <option value="KPL Kecil">KPL Kecil</option>
                              <option value="KPL Sedang">KPL Sedang</option>
                              <option value="KPL Besar">KPL Besar</option>
                            </select>
                          </td>
                          <td id="jenis2" style="display: none;">
                            <select name="jenismusuh" id="jenismusuh" onchange="ceks(this.value)">
                              <option value="KS Konvensional">KS Konvensional</option>
                              <option value="KS Nuklir">KS Nuklir</option>
                            </select>
                          </td>
                          <td id="jenis3" style="display: none;">
                            <select name="jenismusuh" id="jenismusuh" onchange="ceks(this.value)">
                              <option value="KPL Kecil">KPL Kecil</option>
                              <option value="KPL Sedang">KPL Sedang</option>
                              <option value="KPL Besar">KPL Besar</option>
                              <option value="KS Konvensional">KS Konvensional</option>
                              <option value="KS Nuklir">KS Nuklir</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                          </td>
                          <td>
                            <button id="hitungkalpur" onclick="hitung()">Hitung</button>
                          </td>
                        </tr>
                        <input type="text" id="impen" hidden="hidden" style="display: none;">
                        <input type="text" id="jnmsh" hidden="hidden" style="display: none;">
                        
                        <tr>
                      <td colspan="3">
                        <fieldset>
                        <legend> Keterangan </legend>
                        <table>
                          <tr>
                            <td>Jenis Sasaran Tembak </td>
                            <td><input type="text" id="jeniskpl" name="jeniskpl" value="" readonly="readonly" style="width: 200px" /></td>
                          </tr>
                          <tr>
                            <td>Jumlah Rudal/Peluru agar sasaran Tenggelam</td>
                            <td><input type="text" id="iniw" name="iniw" value="" readonly="readonly" style="width: 200px"/></td>
                          </tr>
                          <tr>
                            <td>Anti Rudal (MO1)</td>
                            <td><input type="text" id="anr" name="anr" value="" readonly="readonly" style="width: 200px"/></td>
                          </tr>
                          <tr>
                            <td>Artileri (MO2)</td>
                            <td><input type="text" id="art" name="art" value="" readonly="readonly" style="width: 200px"/></td>
                          </tr>
                          <tr>
                            <td>Gangguan Elektronika (MO3)</td>
                            <td><input type="text" id="ge" name="ge" value="" readonly="readonly" style="width: 200px"/></td>
                          </tr>
                          <tr>
                            <td>Gangguan Teknis (MO4)</td>
                            <td><input type="text" id="gt" name="gt" value="" readonly="readonly" style="width: 200px"/></td>
                          </tr>
                        </table>
                        <div id="serangan"></div>
                        <div id="hasilnya"></div>
                        </fieldset>
                      </td>
                    </tr>
                      </table>
                      <br>
                      
                    </div> 
                  </div>
              </div>
              <div id="menu1" class="tab-pane fade">
                <div id="setting_p" class="jwpopup-main">
                    <center><h4 class="judul">Kalkulasi Tempur Terhadap Suatu Formasi</h4></center>
                    <div style="width: auto; height: 350px;overflow: auto; margin-top: 5px; padding: 2px; font-family: Arial, Helvetica, sans-serif; font-size: 14px !important;">
                      <table cellpadding="2" cellspacing="1">
                        <tr>
                          <td>
                            <span>Jumlah Musuh A</span>
                          </td>
                          <td>
                            <input type="text" name="pasA" id="pasA" placeholder="Pasukan A">
                          </td>
                          <td>
                            <span>Jumlah Musuh B</span>
                          </td>
                          <td>
                            <input type="text" name="pasB" id="pasB" placeholder="Pasukan B">
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>Kalkulasi</span>
                          </td>
                          <td>
                            <button id="hitungkalpur" onclick="hitungformasi()">Hitung</button>
                          </td>
                          
                        </tr>
                        <input type="text" id="impen" hidden="hidden" style="display: none;">
                        <input type="text" id="jnmsh" hidden="hidden" style="display: none;">
                        <tr>
                      <td colspan="4">
                        <fieldset>
                        <legend> Keterangan </legend>
                        <table>
                          <tr>
                            <td>Nilai kerusakan kpl dari satuan A yg bisa dilumpuhkan</td>
                            <td><input type="text" id="semuaA" name="semuaA" value="" readonly="readonly" style="width: 200px" /></td>
                          </tr>
                          <tr>
                            <td>Nilai kerusakan kpl dari satuan B yg bisa dilumpuhkan</td>
                            <td><input type="text" id="semuaB" name="semuaB" value="" readonly="readonly" style="width: 200px"/></td>
                          </tr>
                        </table>
                        </fieldset>
                      </td>
                    </tr>
                      </table>
                      <br>
                      <div id="serangan"></div>
                      <div id="hasilnya"></div>
                    </div> 
                  </div>
              </div>
              <div id="menu2" class="tab-pane fade">
                <div id="setting_p" class="jwpopup-main">
                    <center><h4 class="judul">Kalkulasi Tempur Di Darat</h4></center>
                    <div style="width: auto; height: 250px;overflow: auto; margin-top: 5px;  font-family: Arial, Helvetica, sans-serif; font-size: 14px !important;">
                      
                      <fieldset>
                      <table cellpadding="2" cellspacing="1" id="nyerang" style="display: block;">
                        <tr>
                          <td>
                            <a onclick="menyerang()">Menyerang</button>
                          </td>
                          <td colspan="2">
                            <a onclick="bertahan()">Bertahan</button>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="4"><b>Mode Menyerang</b></td>
                        </tr>
                        <tr>
                          <td>
                            <span>Pasukan Sendiri</span>
                          </td>
                          <td>
                            <select name="jeniskawan" id="jeniskawan" onchange="PilihKawan(this.value)">
                              <option value="1">Kelompok</option>
                              <option value="2">Regu</option>
                              <option value="3">Pleton</option>
                              <option value="4">Kompi</option>
                              <option value="5">Batalion</option>
                              <option value="6">Brigade</option>
                              <option value="7">Divisi</option>
                            </select>
                            
                          </td>
                          <td>
                            <span>Musuh</span>
                          </td>
                          <td>
                            <select name="jenislawan" id="jenislawan" onchange="PilihLawan(this.value)">
                              <option value="1">Kelompok</option>
                              <option value="2">Regu</option>
                              <option value="3">Pleton</option>
                              <option value="4">Kompi</option>
                              <option value="5">Batalion</option>
                              <option value="6">Brigade</option>
                              <option value="7">Divisi</option>
                            </select>
                            
                          </td>
                        </tr>
                        <tr>
                            <td>Jumlah</td>
                            <td><input type="text" name="kawanjum" value="1"></td>
                            <td>Jumlah</td>
                            <td><input type="text" name="lawanjum" value="1"></td>
                            
                        </tr>
                        <tr>
                          <td colspan="2"><button id="hitungdrt" onclick="hitungdrt()" style="display: block;">Hasil</button></td>
                        </tr>
                      </table>
                      <table cellpadding="2" cellspacing="1" id="bertahan" style="display: none;">
                        <tr>
                          <td>
                            <a onclick="menyerang()">Menyerang</button>
                          </td>
                          <td>
                            <a onclick="bertahan()">Bertahan</button>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="2"><b>Mode Bertahan</b></td>
                        </tr>
                        <tr>
                          <td>
                            <span>Pasukan Sendiri</span>
                          </td>
                          <td>
                            <select name="jeniskawan" id="jeniskawan" onchange="PilihLawan(this.value)">
                              <option value="1">Kelompok</option>
                              <option value="2">Regu</option>
                              <option value="3">Pleton</option>
                              <option value="4">Kompi</option>
                              <option value="5">Batalion</option>
                              <option value="6">Brigade</option>
                              <option value="7">Divisi</option>
                            </select>
                          </td>
                          <td>
                            <span>Musuh</span>
                          </td>
                          <td>
                            <select name="jenislawan" id="jenislawan" onchange="PilihLawan(this.value)">
                              <option value="1">Kelompok</option>
                              <option value="2">Regu</option>
                              <option value="3">Pleton</option>
                              <option value="4">Kompi</option>
                              <option value="5">Batalion</option>
                              <option value="6">Brigade</option>
                              <option value="7">Divisi</option>
                            </select>
                            
                          </td>
                        </tr>
                        <tr>
                            <td>Jumlah</td>
                            <td><input type="text" name="lawanjum" value="1"></td>
                            <td>Jumlah</td>
                            <td><input type="text" name="kawanjum" value="1"></td>
                        </tr>
                        <tr>
                          <td>
                            <button id="hitungdtr" onclick="hitungdtr()" style="display: block;">Hasil</button>
                          </td>
                        </tr>
                      </table>
                    </fieldset>
                      <input type="text" name="kawans" id="kawans" value="1" hidden="hidden" style="display: none;">
                      <input type="text" name="lawans" id="lawans" value="1" hidden="hidden" style="display: none;">
                    </div> 
                    <div>
                      <table>
                        <input type="text" id="impen" hidden="hidden" style="display: none;">
                        <input type="text" id="jnmsh" hidden="hidden" style="display: none;">
                      <p id="hasilnyas"></p>
                      </table>
                    </div>
                  </div>
              </div>
              <div id="menu3" class="tab-pane fade">
                <div id="setting_p" class="jwpopup-main">
                    <center><h4 class="judul">Kalkulasi Tempur KASBONMU</h4>
                    <div id="kasbonmu_popup_div" style="width: auto; height: 350px;overflow: auto; margin-top: 5px; padding: 2px; font-family: Arial, Helvetica, sans-serif; font-size: 14px !important;">
                      
                      <table>
                        <tr>
                          <td>
                      <fieldset style="border-color: blue;">
                      <table style="border: 2; column-rule-style: all;height: 765px;" id="table_popup_kasbonmu_1">
                        <tr>
                          <th colspan="1">
                            <center>Pasukan Sendiri</center>
                          </th>
                        </tr>
                        <tr>
                          <td>
                            <select id = "kekuatan_kawan">
                              <?php 
                                for($a = 1; $a <= 10; $a++){
                                  ?>
                                    <option value="<?php echo $a; ?>"><?php echo $a; ?></option>
                                  <?php
                                }
                               ?>
                            </select>
                          </td>
                        </tr>
                        <tr>
                            <td>
                            <select id = "alat_kawan">
                              <?php 
                                for($a = 1; $a <= 10; $a++){
                                  ?>
                                    <option value="<?php echo $a; ?>"><?php echo $a; ?></option>
                                  <?php
                                }
                               ?>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <select id = "susunan_kawan">
                              <?php 
                                for($a = 1; $a <= 10; $a++){
                                  ?>
                                    <option value="<?php echo $a; ?>"><?php echo $a; ?></option>
                                  <?php
                                }
                               ?>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <select id = "organisasi_kawan">
                              <?php 
                                for($a = 1; $a <= 10; $a++){
                                  ?>
                                    <option value="<?php echo $a; ?>"><?php echo $a; ?></option>
                                  <?php
                                }
                               ?>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <select id = "pemimpin_kawan">
                              <?php 
                                for($a = 1; $a <= 10; $a++){
                                  ?>
                                    <option value="<?php echo $a; ?>"><?php echo $a; ?></option>
                                  <?php
                                }
                               ?>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <select id = "moril_kawan">
                              <?php 
                                for($a = 1; $a <= 10; $a++){
                                  ?>
                                    <option value="<?php echo $a; ?>"><?php echo $a; ?></option>
                                  <?php
                                }
                               ?>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <select id = "usaha_kawan">
                              <?php 
                                for($a = 1; $a <= 10; $a++){
                                  ?>
                                    <option value="<?php echo $a; ?>"><?php echo $a; ?></option>
                                  <?php
                                }
                               ?>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <select id = "senjata_kawan">
                              <?php 
                                for($a = 1; $a <= 10; $a++){
                                  ?>
                                    <option value="<?php echo $a; ?>"><?php echo $a; ?></option>
                                  <?php
                                }
                               ?>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <select id = "medan_kawan">
                              <?php 
                                for($a = 1; $a <= 10; $a++){
                                  ?>
                                    <option value="<?php echo $a; ?>"><?php echo $a; ?></option>
                                  <?php
                                }
                               ?>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <select id = "tingkat_kawan">
                              <?php 
                                for($a = 1; $a <= 10; $a++){
                                  ?>
                                    <option value="<?php echo $a; ?>"><?php echo $a; ?></option>
                                  <?php
                                }
                               ?>
                            </select>
                          </td>
                        </tr>
                      </table>
                    </fieldset>
                    </td>
                    <td>
                      <fieldset style="border-color: black;">
                      <table style="border: 2; column-rule-style: all;height: 765px;" id="table_popup_kasbonmu_1" >
                        <tr>
                          <th colspan="1" style="padding: 3px;">
                            <center>Indikator</center>
                          </th>
                        </tr>
                        <tr>
                          <td>
                            Kekuatan
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Alat Peralatan
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Susunan Bertempur
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Organisasi
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Karakter Pemimpin
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Moril
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Usaha Yang Dilakukan
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Senjata Bantuan
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Penguasaan Medan
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Tingkat Latihan
                          </td>
                        </tr>
                      </table>
                    </fieldset>
                    </td>
                    <td>
                    <fieldset style=" border-color: red;">
                      <table style="border: 2; column-rule-style: all;height: 765px;" id="table_popup_kasbonmu_2">
                        <tr>
                          <th colspan="1">
                            <center>Pasukan Musuh</center>
                          </th>
                        </tr>
                        <center>
                        <tr>
                          <td> 
                            <select id = "kekuatan_lawan">
                              <?php 
                                for($a = 1; $a <= 10; $a++){
                                  ?>
                                    <option value="<?php echo $a; ?>"><?php echo $a; ?></option>
                                  <?php
                                }
                               ?>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <select id = "alat_lawan">
                              <?php 
                                for($a = 1; $a <= 10; $a++){
                                  ?>
                                    <option value="<?php echo $a; ?>"><?php echo $a; ?></option>
                                  <?php
                                }
                               ?>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <select id = "susunan_lawan">
                              <?php 
                                for($a = 1; $a <= 10; $a++){
                                  ?>
                                    <option value="<?php echo $a; ?>"><?php echo $a; ?></option>
                                  <?php
                                }
                               ?>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                           <select id = "organisasi_lawan">
                              <?php 
                                for($a = 1; $a <= 10; $a++){
                                  ?>
                                    <option value="<?php echo $a; ?>"><?php echo $a; ?></option>
                                  <?php
                                }
                               ?>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <select id = "pemimpin_lawan">
                              <?php 
                                for($a = 1; $a <= 10; $a++){
                                  ?>
                                    <option value="<?php echo $a; ?>"><?php echo $a; ?></option>
                                  <?php
                                }
                               ?>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <select id = "moril_lawan">
                              <?php 
                                for($a = 1; $a <= 10; $a++){
                                  ?>
                                    <option value="<?php echo $a; ?>"><?php echo $a; ?></option>
                                  <?php
                                }
                               ?>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <select id = "usaha_lawan">
                              <?php 
                                for($a = 1; $a <= 10; $a++){
                                  ?>
                                    <option value="<?php echo $a; ?>"><?php echo $a; ?></option>
                                  <?php
                                }
                               ?>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <select id = "senjata_lawan">
                              <?php 
                                for($a = 1; $a <= 10; $a++){
                                  ?>
                                    <option value="<?php echo $a; ?>"><?php echo $a; ?></option>
                                  <?php
                                }
                               ?>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <select id = "medan_lawan">
                              <?php 
                                for($a = 1; $a <= 10; $a++){
                                  ?>
                                    <option value="<?php echo $a; ?>"><?php echo $a; ?></option>
                                  <?php
                                }
                               ?>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <select id = "tingkat_lawan">
                              <?php 
                                for($a = 1; $a <= 10; $a++){
                                  ?>
                                    <option value="<?php echo $a; ?>"><?php echo $a; ?></option>
                                  <?php
                                }
                               ?>
                            </select>
                          </td>
                        </tr>
                        </center>
                      </table>
                    </fieldset>
                    </td>
                  </tr>
                <tr>
                <td colspan="3" id="kasbonmu_result_nya">
                </td>
                </tr>
                </table>
                      <div id="serangan"></div>
                      <div id="akhir"></div>
                      <button id="hasil" onclick="hasil()">Hasil</button>
                      <table>
                        <input type="text" id="impen" hidden="hidden" style="display: none;">
                        <input type="text" id="jnmsh" hidden="hidden" style="display: none;">
                        <tr>
                    </tr>
                      </table>
                      <input type="text" name="kawans" id="kawans" value="1" hidden="hidden" style="display: none;">
                      <input type="text" name="lawans" id="lawans" value="1" hidden="hidden" style="display: none;">
                      
                    </div> 
                    </center>
                  </div>
              </div>
            </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
function hasil(){
        var kekuatan_kawan = Number(document.getElementById('kekuatan_kawan').value);
        var alat_kawan = Number(document.getElementById('alat_kawan').value);
        var susunan_kawan = Number(document.getElementById('susunan_kawan').value);
        var organisasi_kawan = Number(document.getElementById('organisasi_kawan').value);
        var pemimpin_kawan = Number(document.getElementById('pemimpin_kawan').value);
        var moril_kawan = Number(document.getElementById('moril_kawan').value);
        var usaha_kawan = Number(document.getElementById('usaha_kawan').value);
        var senjata_kawan = Number(document.getElementById('senjata_kawan').value);
        var medan_kawan = Number(document.getElementById('medan_kawan').value);
        var tingkat_kawan = Number(document.getElementById('tingkat_kawan').value);

        var kekuatan_lawan = Number(document.getElementById('kekuatan_lawan').value);
        var alat_lawan = Number(document.getElementById('alat_lawan').value);
        var susunan_lawan = Number(document.getElementById('susunan_lawan').value);
        var organisasi_lawan = Number(document.getElementById('organisasi_lawan').value);
        var pemimpin_lawan = Number(document.getElementById('pemimpin_lawan').value);
        var moril_lawan = Number(document.getElementById('moril_lawan').value);
        var usaha_lawan = Number(document.getElementById('usaha_lawan').value);
        var senjata_lawan = Number(document.getElementById('senjata_lawan').value);
        var medan_lawan = Number(document.getElementById('medan_lawan').value);
        var tingkat_lawan = Number(document.getElementById('tingkat_lawan').value);
        // kawan
        var jum = kekuatan_kawan+alat_kawan+susunan_kawan+organisasi_kawan+pemimpin_kawan+moril_kawan+usaha_kawan+senjata_kawan+medan_kawan+tingkat_kawan;
        var jim = kekuatan_lawan+alat_lawan+susunan_lawan+organisasi_lawan+pemimpin_lawan+moril_lawan+usaha_lawan+senjata_lawan+medan_lawan+tingkat_lawan;
        console.log(jum);
        console.log(jim);
        // console.log(jum);
        // console.log(jim);

        if(jum > jim){
          // alert("Pasukan Lebih Unggul Dari Musuh");
          // document.getElementById("akhir").innerHTML="<span>Pasukan mempunyai Kekuatan yang mempuni untuk melawan musuh</span>"
          document.getElementById("kasbonmu_result_nya").innerHTML='<fieldset style=" border-color: blue; padding: 10px;"><span style="color:blue;"><h1 style="display:inline "><image src="image/plotting/blue.png" width="25px" height="25px"/> Unggul</h1></span></fieldset>';
        }else{
          // alert("Musuh Lebih Unggul Dari Pasukan Sendiri");
          // document.getElementById("akhir").innerHTML="<span>Pasukan belum mempunyai Kekuatan yang mempuni untuk melawan musuh</span>"
          document.getElementById("kasbonmu_result_nya").innerHTML='<fieldset style=" border-color: red; padding: 10px;"><span style="color:red;"><h1 style="display:inline "><image src="image/plotting/red.png" width="25px" height="25px"/> Kalah</h1></span></fieldset>';
        }
    }
function bertahan(){
      document.getElementById("nyerang").style.display="none";
      document.getElementById("bertahan").style.display="block";
      document.getElementById("hasilnyas").innerHTML="";
      document.getElementById("hitungdrt").style.display="none";
      document.getElementById("hitungdtr").style.display="block";
    }
    function menyerang(){
      document.getElementById("nyerang").style.display="block";
      document.getElementById("bertahan").style.display="none";
      document.getElementById("hasilnyas").innerHTML="";
      document.getElementById("hitungdtr").style.display="none";
      document.getElementById("hitungdrt").style.display="block";
    }
    
    function PilihKawan(kawan){
      // alert(kawan);
      document.getElementById("kawans").value=kawan;
      document.getElementById("hasilnyas").innerHTML="";
    }
    function PilihLawan(lawan){
      // alert(lawan);
      document.getElementById("lawans").value=lawan;
      document.getElementById("hasilnyas").innerHTML="";
    }

    function hitungdrt(){
      var kwn = document.getElementById("kawans").value;
      var lwn = document.getElementById("lawans").value;
      if(kwn > lwn){
        document.getElementById("hasilnyas").innerHTML="<fieldset><h4 style='color:blue;'>Serangan Berhasil</h4></fieldset>";
        // alert("Serangan Berhasil");
      }else{
        document.getElementById("hasilnyas").innerHTML="<fieldset><h4 style='color:red;'>Serangan Gagal</h4></fieldset>";
        // alert("Serangan Gagal");
      }

    }

    function hitungdtr(){
      var kwn = document.getElementById("kawans").value;
      var kwnn = kwn * 3;
      var lwn = document.getElementById("lawans").value;
      if(lwn < kwnn){
        document.getElementById("hasilnyas").innerHTML="<fieldset><h4 style='color:blue;'>Berhasil Bertahan</h4></fieldset>";
        // alert("Berhasil bertahan");
      }else{
        document.getElementById("hasilnyas").innerHTML="<fieldset><h4 style='color:red;'>Serangan Musuh Berhasil</h4></fieldset>";
        // alert("Gagal Bertahan");
      }

    }
function hitungformasi(){
      var pasA =  document.getElementById("pasA").value;
      var pasB =  document.getElementById("pasB").value;
      var alpha = ((pasA*4)*0.9*0.6);
      var beta = ((pasB*4)*0.9*0.6);
      var a3 = 1*pasA;
      var b3 = 1*pasB;
      var b1 = pasB*2;
      var a1 = pasA*2;
      var totalA = ((alpha*pasA)-(b3))/b1;
      var totalB = ((beta*pasB)-(a3))/a1;
      // alert("oke");
      // console.log(pasA);
      // console.log(pasB);
      // console.log(alpha);
      // console.log(beta);
      // console.log(a3);
      // console.log(b3);
      // console.log(a1);
      // console.log(b1);
      // console.log(totalA);
      // console.log(totalB);
      document.getElementById("semuaA").value=totalA;
      document.getElementById("semuaB").value=totalB;
    }
function selectguns(type){
      // alert(type);
      document.getElementById("impen").value=type;
    }
    function selectgun(jenis){
      // alert(jenis);
      if(jenis == "Rudal"){
        document.getElementById("impen").value="Harpoon";
        document.getElementById("jnmsh").value="KPL Kecil";
        document.getElementById("rudalt").style.display="block";
        document.getElementById("artilerit").style.display="none";
        document.getElementById("torpedot1").style.display="none";
        document.getElementById("torpedot2").style.display="none";
        document.getElementById("rockett").style.display="none";
        document.getElementById("jenis1").style.display="block";
        document.getElementById("jenis2").style.display="none";
        document.getElementById("jenis3").style.display="none";
      }else if (jenis == "Artileri"){
        document.getElementById("impen").value="120";
        document.getElementById("jnmsh").value="KPL Kecil";
        document.getElementById("rudalt").style.display="none";
        document.getElementById("artilerit").style.display="block";
        document.getElementById("torpedot1").style.display="none";
        document.getElementById("torpedot2").style.display="none";
        document.getElementById("rockett").style.display="none";
        document.getElementById("jenis1").style.display="block";
        document.getElementById("jenis2").style.display="none";
        document.getElementById("jenis3").style.display="none";
      }else if (jenis == "TorpedoU"){
        document.getElementById("impen").value="TAKPA";
        document.getElementById("jnmsh").value="KPL Kecil";
        document.getElementById("rudalt").style.display="none";
        document.getElementById("artilerit").style.display="none";
        document.getElementById("torpedot1").style.display="block";
        document.getElementById("torpedot2").style.display="none";
        document.getElementById("rockett").style.display="none";
        document.getElementById("jenis1").style.display="block";
        document.getElementById("jenis2").style.display="none";
        document.getElementById("jenis3").style.display="none";
      }else if (jenis == "TorpedoL"){
        document.getElementById("impen").value="TAKS";
        document.getElementById("jnmsh").value="KS Konvensional";
        document.getElementById("rudalt").style.display="none";
        document.getElementById("artilerit").style.display="none";
        document.getElementById("torpedot1").style.display="none";
        document.getElementById("torpedot2").style.display="block";
        document.getElementById("rockett").style.display="none";
        document.getElementById("jenis1").style.display="none";
        document.getElementById("jenis2").style.display="block";
        document.getElementById("jenis3").style.display="none";
      }else{
        document.getElementById("impen").value="ASROC";
        document.getElementById("jnmsh").value="KS Konvensional";
        document.getElementById("rudalt").style.display="none";
        document.getElementById("artilerit").style.display="none";
        document.getElementById("torpedot1").style.display="none";
        document.getElementById("torpedot2").style.display="none";
        document.getElementById("rockett").style.display="block";
        document.getElementById("jenis1").style.display="none";
        document.getElementById("jenis2").style.display="block";
        document.getElementById("jenis3").style.display="none";
      }
    }
    function ceks(value){
        // alert(value);
        document.getElementById("jnmsh").value=value;
    }
    function hitung(){
      var senjata = document.getElementById("impen").value;
      console.log(senjata);
      var musuh = document.getElementById("jnmsh").value;
      
        if (senjata == "Harpoon") {
          if(musuh == "KPL Kecil"){
          var W = 1;
          var P = 0.9;
          var mo1 = 0;
          var mo2 = 0.4;
          var mo3 = 0.6;
          var mo4 = 0.1; 
          var bagi = W/P;
          var jum = mo1+mo2+mo3+mo4;
          }
          if(musuh == "KPL Sedang"){
          var W = 2;
          var P = 0.9;
          var mo1 = 0.3;
          var mo2 = 0.4;
          var mo3 = 0.6;
          var mo4 = 0.1; 
          var bagi = W/P;
          var jum = mo1+mo2+mo3+mo4;
          }
          if(musuh == "KPL Besar"){
            // alert("phiw");
          var W = 3;
          var P = 0.9;
          var mo1 = 0.3;
          var mo2 = 0.4;
          var mo3 = 0.6;
          var mo4 = 0.1; 
          var bagi = W/P;
          var jum = mo1+mo2+mo3+mo4;
          }
          
          var n ="";
          var s = bagi + (jum*bagi);
          var n = parseInt(s);
          var jadi = n+1;
          

          // if(s > 2 && musuh = "Kecil" ){
          //   s = 3;
          // }
          // if(s > 5 && musuh = "Sedang" ){
          //   s = 6;
          // }
          // if(s > 7 && musuh = "Besar" ){
          //   s = 8;
          // }
          // alert(s);
          document.getElementById("serangan").innerHTML="<p>"+W+" " + $("#jenissenjata option:selected").text() + " Untuk Menenggelamkan Kapal Musuh</p>";
          // document.getElementById("hasilnya").innerHTML="<p>"+s+" Rudal Yang Dibawa</p>";
          document.getElementById("hasilnya").innerHTML="<p>"+jadi+" " + $("#jenissenjata option:selected").text() + " untuk dibawa </p>";
          document.getElementById("jeniskpl").value=musuh;
        document.getElementById("iniw").value=W+" Peluru untuk menenggelamkan";
        document.getElementById("anr").value=mo1;
        document.getElementById("art").value=mo2;
        document.getElementById("ge").value=mo3;
        document.getElementById("gt").value=mo4;
        }
        if (senjata == "Excocet") {
          if(musuh == "KPL Kecil"){
          var W = 2;
          var P = 0.9;
          var mo1 = 0;
          var mo2 = 0.1;
          var mo3 = 0.3;
          var mo4 = 0.1; 
          var bagi = W/P;
          var jum = mo1+mo2+mo3+mo4;
          }
          if(musuh == "KPL Sedang"){
          var W = 4;
          var P = 0.9;
          var mo1 = 0.3;
          var mo2 = 0.3;
          var mo3 = 0.3;
          var mo4 = 0.1; 
          var bagi = W/P;
          var jum = mo1+mo2+mo3+mo4;
          }
          if(musuh == "KPL Besar"){
          var W = 6;
          var P = 0.9;
          var mo1 = 0.3;
          var mo2 = 0.4;
          var mo3 = 0.3;
          var mo4 = 0.1; 
          var bagi = W/P;
          var jum = mo1+mo2+mo3+mo4;
          }

          var s = bagi + (jum*(bagi));
          var n = parseInt(s);
          var jadi = n+1;
          // console.log(bagi);
          // console.log(jum);
          // console.log(jum*bagi);
          // alert(s);
          // if(s > 3 ){
          //   s = 4;
          // }
          // alert(s+"Rudal");
          document.getElementById("serangan").innerHTML="<p>"+W+" " + $("#jenissenjata option:selected").text() + " Untuk Menenggelamkan Kapal Musuh</p>";
          // document.getElementById("hasilnya").innerHTML="<p>"+s+" Rudal Yang Dibawa</p>";
          document.getElementById("hasilnya").innerHTML="<p>"+jadi+" " + $("#jenissenjata option:selected").text() + " untuk dibawa </p>";
          document.getElementById("jeniskpl").value=musuh;
        document.getElementById("iniw").value=W+" Peluru untuk menenggelamkan";
        document.getElementById("anr").value=mo1;
        document.getElementById("art").value=mo2;
        document.getElementById("ge").value=mo3;
        document.getElementById("gt").value=mo4;
        }
        if (senjata == "120") {
          if(musuh == "KPL Kecil"){
          var W = 4;
          var P = 0.22;
          var mo1 = 0;
          var mo2 = 0.1;
          var mo3 = 0.3;
          var mo4 = 0.1; 
          var bagi = W/P;
          var jum = mo1+mo2+mo3+mo4;
          }
          if(musuh == "KPL Sedang"){
          var W = 10;
          var P = 0.35;
          var mo1 = 0.3;
          var mo2 = 0.3;
          var mo3 = 0.3;
          var mo4 = 0.1; 
          var bagi = W/P;
          var jum = mo1+mo2+mo3+mo4;
          }
          if(musuh == "KPL Besar"){
          var W = 15;
          var P = 0.48;
          var mo1 = 0.3;
          var mo2 = 0.4;
          var mo3 = 0.3;
          var mo4 = 0.1; 
          var bagi = W/P;
          var jum = mo1+mo2+mo3+mo4;
          }

          var s = bagi;
          var n = parseInt(s);
          var jadi = n+1;
          // console.log(bagi);
          // console.log(jum);
          // console.log(jum*bagi);
          // alert(s);
          // if(s > 18 ){
          //   s = 19;
          // }
          // alert(s+"Rudal");
          document.getElementById("serangan").innerHTML="<p>"+W+" " + $("#jenissenjata option:selected").text() + " Untuk Menenggelamkan Kapal Musuh</p>";
          // document.getElementById("hasilnya").innerHTML="<p>"+s+" Rudal Yang Dibawa</p>";
          document.getElementById("hasilnya").innerHTML="<p>"+jadi+" " + $("#jenissenjata option:selected").text() + " untuk dibawa </p>";
          document.getElementById("jeniskpl").value=musuh;
        document.getElementById("iniw").value=W+" Peluru untuk menenggelamkan";
        document.getElementById("anr").value=mo1;
        document.getElementById("art").value=mo2;
        document.getElementById("ge").value=mo3;
        document.getElementById("gt").value=mo4;
        }
        if (senjata == "76") {
          if(musuh == "KPL Kecil"){
          var W = 7;
          var P = 0.22;
          var mo1 = 0;
          var mo2 = 0.1;
          var mo3 = 0.3;
          var mo4 = 0.1; 
          var bagi = W/P;
          var jum = mo1+mo2+mo3+mo4;
          }
          if(musuh == "KPL Sedang"){
          var W = 16;
          var P = 0.35;
          var mo1 = 0.3;
          var mo2 = 0.3;
          var mo3 = 0.3;
          var mo4 = 0.1; 
          var bagi = W/P;
          var jum = mo1+mo2+mo3+mo4;
          }
          if(musuh == "KPL Besar"){
          var W = 25;
          var P = 0.48;
          var mo1 = 0.3;
          var mo2 = 0.4;
          var mo3 = 0.3;
          var mo4 = 0.1; 
          var bagi = W/P;
          var jum = mo1+mo2+mo3+mo4;
          }

          var s = bagi;
          var n = parseInt(s);
          var jadi = n+1;
          // console.log(bagi);
          // console.log(jum);
          // console.log(jum*bagi);
          // alert(s);
          if(s > 63 ){
            s = 64;
          }
          // alert(s+"Rudal");
          document.getElementById("serangan").innerHTML="<p>"+W+" " + $("#jenissenjata option:selected").text() + " Untuk Menenggelamkan Kapal Musuh</p>";
          // document.getElementById("hasilnya").innerHTML="<p>"+s+" Rudal Yang Dibawa</p>";
          document.getElementById("hasilnya").innerHTML="<p>"+jadi+" " + $("#jenissenjata option:selected").text() + " untuk dibawa </p>";
          document.getElementById("jeniskpl").value=musuh;
        document.getElementById("iniw").value=W+" Peluru untuk menenggelamkan";
        document.getElementById("anr").value=mo1;
        document.getElementById("art").value=mo2;
        document.getElementById("ge").value=mo3;
        document.getElementById("gt").value=mo4;
        }
        if (senjata == "57") {
          if(musuh == "KPL Kecil"){
          var W = 13;
          var P = 0.22;
          var mo1 = 0;
          var mo2 = 0.1;
          var mo3 = 0.3;
          var mo4 = 0.1; 
          var bagi = W/P;
          var jum = mo1+mo2+mo3+mo4;
          }
          if(musuh == "KPL Sedang"){
          var W = 21;
          var P = 0.35;
          var mo1 = 0.3;
          var mo2 = 0.3;
          var mo3 = 0.3;
          var mo4 = 0.1; 
          var bagi = W/P;
          var jum = mo1+mo2+mo3+mo4;
          }
          if(musuh == "KPL Besar"){
          var W = 32;
          var P = 0.48;
          var mo1 = 0.3;
          var mo2 = 0.4;
          var mo3 = 0.3;
          var mo4 = 0.1; 
          var bagi = W/P;
          var jum = mo1+mo2+mo3+mo4;
          }

          var s = bagi;
          var n = parseInt(s);
          var jadi = n+1;
          // console.log(bagi);
          // console.log(jum);
          // console.log(jum*bagi);
          // alert(s);
          if(s >= 700  ){
            s = 700;
          }
          // alert(s+"Rudal");
          document.getElementById("serangan").innerHTML="<p>"+W+" " + $("#jenissenjata option:selected").text() + " Untuk Menenggelamkan Kapal Musuh</p>";
          // document.getElementById("hasilnya").innerHTML="<p>"+s+" Rudal Yang Dibawa</p>";
          document.getElementById("hasilnya").innerHTML="<p>"+jadi+" " + $("#jenissenjata option:selected").text() + " untuk dibawa </p>";
          document.getElementById("jeniskpl").value=musuh;
        document.getElementById("iniw").value=W+" Peluru untuk menenggelamkan";
        document.getElementById("anr").value=mo1;
        document.getElementById("art").value=mo2;
        document.getElementById("ge").value=mo3;
        document.getElementById("gt").value=mo4;
      }
        if (senjata == "TAKPA") {
          if(musuh == "KPL Kecil" || musuh == "KPL Sedang"){
          var W = 1;
          var P = 0.9;
          var mo1 = 0.1;
          var mo2 = 0.2; 
          var mo3 = 0;
          var mo4 = 0;
          var bagi = W/P;
          var jum = mo1+mo2;
          }
          if(musuh == "KPL Besar"){
            // alert("phiw");
          var W = 2;
          var P = 0.9;
          var mo1 = 0.1;
          var mo2 = 0.2; 
          var mo3 = 0;
          var mo4 = 0;
          var bagi = W/P;
          var jum = mo1+mo2;
          }
          
          var n ="";
          var s = bagi + (jum*bagi);
          var n = parseInt(s);
          var jadi = n+1;
          

          // if(s > 2 && musuh = "Kecil" ){
          //   s = 3;
          // }
          // if(s > 5 && musuh = "Sedang" ){
          //   s = 6;
          // }
          // if(s > 7 && musuh = "Besar" ){
          //   s = 8;
          // }
          // alert(s);
          document.getElementById("serangan").innerHTML="<p>"+W+" " + $("#jenissenjata option:selected").text() + " Untuk Menenggelamkan Kapal Musuh</p>";
          // document.getElementById("hasilnya").innerHTML="<p>"+s+" Rudal Yang Dibawa</p>";
          document.getElementById("hasilnya").innerHTML="<p>"+jadi+" " + $("#jenissenjata option:selected").text() + " untuk dibawa </p>";
          document.getElementById("jeniskpl").value=musuh;
        document.getElementById("iniw").value=W+" Peluru untuk menenggelamkan";
        document.getElementById("anr").value=mo1;
        document.getElementById("art").value=mo2;
        document.getElementById("ge").value=mo3;
        document.getElementById("gt").value=mo4;
        }
        if (senjata == "TAKS") {
           if(musuh == "KS Konvensional"){
          var W = 1;
          var P = 0.6;
          var mo3 = 0.1;
          var mo4 = 0.2; 
          var mo1 = 0;
          var mo2 = 0;
          var bagi = W/P;
          var jum = mo1+mo2;
          }
          if(musuh == "KS Nuklir"){
            // alert("phiw");
          var W = 1;
          var P = 0.6;
          var mo3 = 0.1;
          var mo4 = 0.2; 
          var mo1 = 0;
          var mo2 = 0;
          var bagi = W/P;
          var jum = mo1+mo2;
          }

          var s = bagi;
          var n = parseInt(s);
          var jadi = n+1;
          // console.log(bagi);
          // console.log(jum);
          // console.log(jum*bagi);
          // alert(s);
          // if(s > 1  ){
          //   s = 2;
          // }
          // alert(s+"Rudal");
          document.getElementById("serangan").innerHTML="<p>"+W+" " + $("#jenissenjata option:selected").text() + " Untuk Menenggelamkan Kapal Musuh</p>";
          // document.getElementById("hasilnya").innerHTML="<p>"+s+" Rudal Yang Dibawa</p>";
          document.getElementById("hasilnya").innerHTML="<p>"+jadi+" " + $("#jenissenjata option:selected").text() + " untuk dibawa </p>";
          document.getElementById("jeniskpl").value=musuh;
        document.getElementById("iniw").value=W+" Peluru untuk menenggelamkan";
        document.getElementById("anr").value=mo1;
        document.getElementById("art").value=mo2;
        document.getElementById("ge").value=mo3;
        document.getElementById("gt").value=mo4;
        }
        if (senjata == "ASROC") {
          // alert(musuh);
          if(musuh == "KS Konvensional"){
            // alert("OK");
          var W = 4;
          var P = 0.3;
          var mo3 = 0.1;
          var mo4 = 0.2; 
          var mo1 = 0;
          var mo2 = 0;
          var bagi = W/P;
          var jum = mo1+mo2;
          }
          if(musuh == "KS Nuklir"){
            // alert("phiw");
          var W = 4;
          var P = 0.3;
          var mo3 = 0.1;
          var mo4 = 0.2; 
          var mo1 = 0;
          var mo2 = 0;
          var bagi = W/P;
          var jum = mo1+mo2;
          }

          var s = bagi;
          var n = parseInt(s);
          var jadi = n+1;
          // console.log(bagi);
          // console.log(jum);
          // console.log(jum*bagi);
          // alert(s);
          // if(s > 13  ){
          //   s = 14;
          // }
          // alert(s+"Rudal");
          document.getElementById("serangan").innerHTML="<p>"+W+" " + $("#jenissenjata option:selected").text() + " Untuk Menenggelamkan Kapal Musuh</p>";
          // document.getElementById("hasilnya").innerHTML="<p>"+s+" Rudal Yang Dibawa</p>";
          document.getElementById("hasilnya").innerHTML="<p>"+jadi+" " + $("#jenissenjata option:selected").text() + " untuk dibawa </p>";
          document.getElementById("jeniskpl").value=musuh;
        document.getElementById("iniw").value=W+" Peluru untuk menenggelamkan";
        document.getElementById("anr").value=mo1;
        document.getElementById("art").value=mo2;
        document.getElementById("ge").value=mo3;
        document.getElementById("gt").value=mo4;
        }
        if (senjata == "RBU") {
           if(musuh == "KS Konvensional"){
          var W = 5;
          var P = 0.3;
          var mo3 = 0.1;
          var mo4 = 0.2; 
          var mo1 = 0;
          var mo2 = 0;
          var bagi = W/P;
          var jum = mo1+mo2;
          }
          if(musuh == "KS Nuklir"){
            // alert("phiw");
          var W = 5;
          var P = 0.3;
          var mo3 = 0.1;
          var mo4 = 0.2; 
          var mo1 = 0;
          var mo2 = 0;
          var bagi = W/P;
          var jum = mo1+mo2;
          }

          var s = bagi;
          var n = parseInt(s);
          var jadi = n+1;
          // console.log(bagi);
          // console.log(jum);
          // console.log(jum*bagi);
          // alert(s);
          // if(s > 16  ){
          //   s = 17;
          // }
          // alert(s+"Rudal");
          document.getElementById("serangan").innerHTML="<p>"+W+" " + $("#jenissenjata option:selected").text() + " Untuk Menenggelamkan Kapal Musuh</p>";
          // document.getElementById("hasilnya").innerHTML="<p>"+s+" Rudal Yang Dibawa</p>";
          document.getElementById("hasilnya").innerHTML="<p>"+jadi+" " + $("#jenissenjata option:selected").text() + " untuk dibawa </p>";
          document.getElementById("jeniskpl").value=musuh;
        document.getElementById("iniw").value=W+" Peluru untuk menenggelamkan";
        document.getElementById("anr").value=mo1;
        document.getElementById("art").value=mo2;
        document.getElementById("ge").value=mo3;
        document.getElementById("gt").value=mo4;
        }
        if (senjata == "BL") {
           if(musuh == "KS Konvensional"){
          var W = 3;
          var P = 0.3;
          var mo3 = 0.1;
          var mo4 = 0.2; 
          var mo1 = 0;
          var mo2 = 0;
          var bagi = W/P;
          var jum = mo1+mo2;
          }
          if(musuh == "KS Nuklir"){
            // alert("phiw");
          var W = 3;
          var P = 0.3;
          var mo3 = 0.1;
          var mo4 = 0.2;
          var mo1 = 0;
          var mo2 = 0;
          var bagi = W/P;
          var jum = mo1+mo2;
          }

          var s = bagi;
          var n = parseInt(s);
          var jadi = n;
          // console.log(bagi);
          // console.log(jum);
          // console.log(jum*bagi);
          // alert(s);
          // if(s >=10   ){
          //   s = 10;
          // }
          // alert(s+"Rudal");
          document.getElementById("serangan").innerHTML="<p>"+W+" " + $("#jenissenjata option:selected").text() + " Untuk Menenggelamkan Kapal Musuh</p>";
          // document.getElementById("hasilnya").innerHTML="<p>"+s+" Rudal Yang Dibawa</p>";
          document.getElementById("hasilnya").innerHTML="<p>"+jadi+" " + $("#jenissenjata option:selected").text() + " untuk dibawa </p>";
          document.getElementById("jeniskpl").value=musuh;
        document.getElementById("iniw").value=W+" Peluru untuk menenggelamkan";
        document.getElementById("anr").value=mo1;
        document.getElementById("art").value=mo2;
        document.getElementById("ge").value=mo3;
        document.getElementById("gt").value=mo4;
        }

      

    }
</script>
<div id="arrow_panah" class="overlay">
    <div class="popup">
        <h2>Straight Arrow</h2>
        <a class="close" href="#" onclick="close_pop();">&times;</a>
        <div class="content">
            <hr>
            <!-- <p>Color : <input type="color" name="wrn_straight" id="wrn_straight" style="height: 30px; padding: 0px;margin-top: 10px; padding-left: 5px;"></p> -->
            <div class="row">
                <div class="small-3 columns">
                    <label>Color
                        <input type="color" name="wrn_straight" id="wrn_straight" style="height: 30px; padding: 0px;margin-top: 10px; padding-left: 5px;">
                        
                    </label>
                </div>
                <div class="small-7 columns">
                       <label>Fill Color
                            <input type="color" name="fillcolor_straight" id="fillcolor_straight" style="height: 30px;width: 40%; padding: 0px;margin-top: 10px; padding-left: 5px;">
                       </label>           
                </div> 
            </div>
            <hr>
            <div class="row">
                <div class="small-4 columns">
                    <label>Weight
                        <input type="number" name="weight_straight" id="weight_straight" value="5" style="width: 200px; height: 30px; margin-top: 10px;">
                    </label>
                </div>
                <div class="small-7 columns">
                    <label>Show Distance
                        <div class="switch" style="margin-top: 10px;">
                          <input id="straight_area" type="checkbox" checked >
                          <label for="straight_area"></label>
                        </div> 
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="small-10 columns">
                    <label>Opacity</label>
                    <label>
                      <div class="small-8 columns">
                        <div class="range-slider" data-slider data-options="display_selector: #opacity_straight;start: 0; end: 10; initial: 1;" style="margin-top: 17px;">
                          <span class="range-slider-handle" role="slider" tabindex="0"></span>
                          <span class="range-slider-active-segment"></span>
                        </div>
                      </div>
                      <div class="small-4 columns">
                        <input type="number" id="opacity_straight" value="1" style="height: 30px; margin-top: 10px;" />
                      </div>
                    </label>      
                </div>
            </div>
        </div>
        <br>
        <div class="footer_popup" style="float: right;">
            <a role="button" onclick="straightArrow()" class="small button" style="border-radius: 10px;">Mulai</a>
        </div>
    </div>
</div>
<div id="arrow_lengkung_bawah" class="overlay">
    <div class="popup">
        <h2>Down Arrow</h2>
        <a class="close" href="#" onclick="close_pop();">&times;</a>
        <div class="content">
            <hr>
            <!-- <p>Color : <input type="color" name="wrn_lengkung_bawah" id="wrn_lengkung_bawah" style="height: 30px; padding: 0px;margin-top: 10px; padding-left: 5px;"></p> -->
            <div class="row">
                <div class="small-3 columns">
                    <label>Color
                        <input type="color" name="wrn_lengkung_bawah" id="wrn_lengkung_bawah" style="height: 30px; padding: 0px;margin-top: 10px; padding-left: 5px;">
                        
                    </label>
                </div>
                <div class="small-7 columns">
                       <label>Fill Color
                            <input type="color" name="fillcolor_lengkung_bawah" id="fillcolor_lengkung_bawah" style="height: 30px;width: 40%; padding: 0px;margin-top: 10px; padding-left: 5px;">
                       </label>           
                </div> 
            </div>
            <hr>
            <div class="row">
                <div class="small-4 columns">
                    <label>Weight
                        <input type="number" name="weight_lengkung_bawah" id="weight_lengkung_bawah" value="5" style="width: 200px; height: 30px; margin-top: 10px;">
                    </label>
                </div>
                <div class="small-7 columns">
                    <label>Show Distance
                        <div class="switch" style="margin-top: 10px;">
                          <input id="lengkung_bawah_area" type="checkbox" checked >
                          <label for="lengkung_bawah_area"></label>
                        </div> 
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="small-10 columns">
                    <label>Opacity</label>
                    <label>
                      <div class="small-8 columns">
                        <div class="range-slider" data-slider data-options="display_selector: #opacity_lengkung_bawah;start: 0; end: 10; initial: 1;" style="margin-top: 17px;">
                          <span class="range-slider-handle" role="slider" tabindex="0"></span>
                          <span class="range-slider-active-segment"></span>
                        </div>
                      </div>
                      <div class="small-4 columns">
                        <input type="number" id="opacity_lengkung_bawah" value="1" style="height: 30px; margin-top: 10px;" />
                      </div>
                    </label>      
                </div>
            </div>
        </div>
        <br>
        <div class="footer_popup" style="float: right;">
            <a role="button" onclick="downarrow()" class="small button" style="border-radius: 10px;">Mulai</a>
        </div>
    </div>
</div>
<div id="arrow_lengkung_atas" class="overlay">
    <div class="popup">
        <h2>Up Arrow</h2>
        <a class="close" href="#" onclick="close_pop();">&times;</a>
        <div class="content">
            <hr>
            <!-- <p>Color : <input type="color" name="wrn_lengkung_atas" id="wrn_lengkung_atas" style="height: 30px; padding: 0px;margin-top: 10px; padding-left: 5px;"></p> -->
            <div class="row">
                <div class="small-3 columns">
                    <label>Color
                        <input type="color" name="wrn_lengkung_atas" id="wrn_lengkung_atas" style="height: 30px; padding: 0px;margin-top: 10px; padding-left: 5px;">
                        
                    </label>
                </div>
                <div class="small-7 columns">
                       <label>Fill Color
                            <input type="color" name="fillcolor_lengkung_atas" id="fillcolor_lengkung_atas" style="height: 30px;width: 40%; padding: 0px;margin-top: 10px; padding-left: 5px;">
                       </label>           
                </div> 
            </div>
            <hr>
            <div class="row">
                <div class="small-4 columns">
                    <label>Weight
                        <input type="number" name="weight_lengkung_atas" id="weight_lengkung_atas" value="5" style="width: 200px; height: 30px; margin-top: 10px;">
                    </label>
                </div>
                <div class="small-7 columns">
                    <label>Show Distance
                        <div class="switch" style="margin-top: 10px;">
                          <input id="lengkung_atas_area" type="checkbox" checked >
                          <label for="lengkung_atas_area"></label>
                        </div> 
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="small-10 columns">
                    <label>Opacity</label>
                    <label>
                      <div class="small-8 columns">
                        <div class="range-slider" data-slider data-options="display_selector: #opacity_lengkung_atas;start: 0; end: 10; initial: 1;" style="margin-top: 17px;">
                          <span class="range-slider-handle" role="slider" tabindex="0"></span>
                          <span class="range-slider-active-segment"></span>
                        </div>
                      </div>
                      <div class="small-4 columns">
                        <input type="number" id="opacity_lengkung_atas" value="1" style="height: 30px; margin-top: 10px;" />
                      </div>
                    </label>      
                </div>
            </div>
        </div>
        <br>
        <div class="footer_popup" style="float: right;">
            <a role="button" onclick="uparrow()" class="small button" style="border-radius: 10px;">Mulai</a>
        </div>
    </div>
</div>
<div id="arrow_manuver_bawah" class="overlay">
    <div class="popup">
        <h2>Down Manuver</h2>
        <a class="close" href="#" onclick="close_pop();">&times;</a>
        <div class="content">
            <hr>
            <!-- <p>Color : <input type="color" name="wrn_manuver_bawah" id="wrn_manuver_bawah" style="height: 30px; padding: 0px;margin-top: 10px; padding-left: 5px;"></p> -->
            <div class="row">
                <div class="small-3 columns">
                    <label>Color
                        <input type="color" name="wrn_manuver_bawah" id="wrn_manuver_bawah" style="height: 30px; padding: 0px;margin-top: 10px; padding-left: 5px;">
                        
                    </label>
                </div>
                <div class="small-7 columns">
                       <label>Fill Color
                            <input type="color" name="fillcolor_manuver_bawah" id="fillcolor_manuver_bawah" style="height: 30px;width: 40%; padding: 0px;margin-top: 10px; padding-left: 5px;">
                       </label>           
                </div> 
            </div>
            <hr>
            <div class="row">
                <div class="small-4 columns">
                    <label>Weight
                        <input type="number" name="weight_manuver_bawah" id="weight_manuver_bawah" value="5" style="width: 200px; height: 30px; margin-top: 10px;">
                    </label>
                </div>
                <div class="small-7 columns">
                    <label>Show Distance
                        <div class="switch" style="margin-top: 10px;">
                          <input id="manuver_bawah_area" type="checkbox" checked >
                          <label for="manuver_bawah_area"></label>
                        </div> 
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="small-10 columns">
                    <label>Opacity</label>
                    <label>
                      <div class="small-8 columns">
                        <div class="range-slider" data-slider data-options="display_selector: #opacity_manuver_bawah;start: 0; end: 10; initial: 1;" style="margin-top: 17px;">
                          <span class="range-slider-handle" role="slider" tabindex="0"></span>
                          <span class="range-slider-active-segment"></span>
                        </div>
                      </div>
                      <div class="small-4 columns">
                        <input type="number" id="opacity_manuver_bawah" value="1" style="height: 30px; margin-top: 10px;" />
                      </div>
                    </label>      
                </div>
            </div>
        </div>
        <br>
        <div class="footer_popup" style="float: right;">
            <a role="button" onclick="downmanuver()" class="small button" style="border-radius: 10px;">Mulai</a>
        </div>
    </div>
</div>
<div id="arrow_manuver_atas" class="overlay">
    <div class="popup">
        <h2>Up Manuver</h2>
        <a class="close" href="#" onclick="close_pop();">&times;</a>
        <div class="content">
            <hr>
            <!-- <p>Color : <input type="color" name="wrn_manuver_atas" id="wrn_manuver_atas" style="height: 30px; padding: 0px;margin-top: 10px; padding-left: 5px;"></p> -->
            <div class="row">
                <div class="small-3 columns">
                    <label>Color
                        <input type="color" name="wrn_manuver_atas" id="wrn_manuver_atas" style="height: 30px; padding: 0px;margin-top: 10px; padding-left: 5px;">
                        
                    </label>
                </div>
                <div class="small-7 columns">
                       <label>Fill Color
                            <input type="color" name="fillcolor_manuver_atas" id="fillcolor_manuver_atas" style="height: 30px;width: 40%; padding: 0px;margin-top: 10px; padding-left: 5px;">
                       </label>           
                </div> 
            </div>
            <hr>
            <div class="row">
                <div class="small-4 columns">
                    <label>Weight
                        <input type="number" name="weight_manuver_atas" id="weight_manuver_atas" value="5" style="width: 200px; height: 30px; margin-top: 10px;">
                    </label>
                </div>
                <div class="small-7 columns">
                    <label>Show Distance
                        <div class="switch" style="margin-top: 10px;">
                          <input id="manuver_atas_area" type="checkbox" checked >
                          <label for="manuver_atas_area"></label>
                        </div> 
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="small-10 columns">
                    <label>Opacity</label>
                    <label>
                      <div class="small-8 columns">
                        <div class="range-slider" data-slider data-options="display_selector: #opacity_manuver_atas;start: 0; end: 10; initial: 1;" style="margin-top: 17px;">
                          <span class="range-slider-handle" role="slider" tabindex="0"></span>
                          <span class="range-slider-active-segment"></span>
                        </div>
                      </div>
                      <div class="small-4 columns">
                        <input type="number" id="opacity_manuver_atas" value="1" style="height: 30px; margin-top: 10px;" />
                      </div>
                    </label>      
                </div>
            </div>
        </div>
        <br>
        <div class="footer_popup" style="float: right;">
            <a role="button" onclick="upmanuver()" class="small button" style="border-radius: 10px;">Mulai</a>
        </div>
    </div>
</div>
<div id="set_import" class="overlay">
    <div class="popup">
        <h2>IMPORT FEATURE</h2>
        <a class="close" href="#" onclick="close_pop();">&times;</a>
        <div class="content">

        </div>
    </div>
</div>

<div id="set_export" class="overlay">
    <div class="popup">
        <h2>EXPORT FEATURE</h2>
        <a class="close" href="#" onclick="close_pop();">&times;</a>
        <div class="content">

        </div>
    </div>
</div>
<!-- POPUP SAVE DATA -->
<div id="save_data" class="overlay">
    <div class="popup" style="width: 30%;">
        <h2>Save data</h2>
        <a class="close" href="#" onclick="close_pop();">&times;</a>
        <div class="content">
            <label>Nama Document : <input type="text" name="nm_document" id="nm_document"></label>
        </div>
        <br>
        <div class="footer_popup" style="float: right;">
            <a role="button" onclick="function_simpan()" class="small button" style="border-radius: 10px;">Save</a>
        </div>
    </div>
</div>
<!-- POPUP LOAD DATA -->
<div id="load_data" class="overlay">
    <div class="popup" style="width: 30%;">
        <h2>Load data</h2>
        <a class="close" href="#" onclick="close_pop();">&times;</a>
        <div class="content">
            <label>Nama Document : <select id="nama_dokumen_get"></select></label>
        </div>
        <script type="text/javascript">
          var isi_option_documen = "";
          for(var a = 0; a<data_documen_get.length;a++){
            var tmp = "<option value='"+data_documen_get[a].nama_dokumen+"'>"+data_documen_get[a].nama_dokumen+"</option>";
            isi_option_documen = isi_option_documen+tmp;
          }
          document.getElementById("nama_dokumen_get").innerHTML = isi_option_documen;
        </script>
        <br>
        <div class="footer_popup" style="float: right;">
            <a role="button" onclick="function_load_data()" class="small button" style="border-radius: 10px;">Open</a>
        </div>
    </div>
</div>
<div id="menu_utama" class="overlay">
    <div class="popup" style="width: 30%">
        <center><h2>Menu Plotting</h2></center>
        <a class="close" href="#" onclick="close_pop();" title="Cancel drawing">&times;</a>
        <div class="content">
            <input type="radio" name="type_satuan" id="satuan_costum" checked>
            <label for="satuan_costum">Symbol Costum</label>
            <input type="radio" name="type_satuan" id="satuan_default">
            <label for="satuan_default">Symbol Default</label>
            <div id="form_menu">
                <ul class="small-block-grid-3" style="padding: 5px;">
                  <li title="Plotting satuan"><center><a href="#set_satuan" style="cursor: pointer;"><img class="th" style="background-color: #aaa492; " src="image/plotting/satuan.png" width="100" height="100"></a></center></li>
                  <li title="Plotting Kekuatan"><center><a href="#set_kekuatan" style="cursor: pointer;"><img style="background-color: #aaa492;" class="th" src="image/plotting/kekuatan.png" width="100" height="100"></a></center></li>
                  <li title="Plotting Situasi"><center><a href="#set_situasi" style="cursor: pointer;"><img style="background-color: #aaa492;" class="th" src="image/plotting/situasi.png" width="100" height="100"></center></li></a>
                </ul>
                <ul class="small-block-grid-3" style="padding: 5px;">
                  <li title="Plotting Radar"><center><a href="#set_radar" style="cursor: pointer;"><img class="th" style="background-color: #aaa492; " src="image/plotting/radar.png" width="100" height="100"></a></center></li>
                  <li title="Plotting Bantuan Tembakan"><center><a href="#set_bungus" style="cursor: pointer;"><img style="background-color: #aaa492;" class="th" src="image/plotting/bungus_red.png" width="100" height="100"></center></li></a>
                  <li title="Plotting Obstacle"><center><a href="#set_obstacle" style="cursor: pointer;"><img style="background-color: #aaa492;" class="th" src="image/plotting/obstacle.png" width="100" height="100"></center></li></a>
                </ul>
                <ul class="small-block-grid-3" style="padding: 5px;">
                   <li title="Plotting Manuever"><center><a href="#set_manuever" style="cursor: pointer;"><img class="th" style="background-color: #aaa492; " src="image/plotting/airplane.png" width="100" height="100"></a></center></li>
                   <li title="Plotting Logistik Pelabuhan"><center><a href="#set_pelabuhan" style="cursor: pointer;"><img style="background-color: #aaa492;" class="th" src="image/plotting/harbor2.png" width="100" height="100"></a></center></li><!-- diubah mei logis -->
                  <li title="Plotting Logistik Bandara"><center><a href="#set_bandara" style="cursor: pointer;"><img style="background-color: #aaa492;" class="th" src="image/plotting/plane3.png" width="100" height="100"></a></center></li><!-- diubah mei logis -->
                </ul>
                <ul class="small-block-grid-3" style="padding: 5px;">
                  <li title="Plotting Logistik Bebas"><center><a href="#set_bebas" style="cursor: pointer;"><img style="background-color: #aaa492;" class="th" src="image/plotting/ic_logis.png" width="100" height="100"></a></center></li><!-- diubah mei logis -->
                </ul>
				<!--
                <ul class="small-block-grid-3" style="padding: 5px;">
                  <li title="Plotting satuan"><center><a href="#set_satuan" style="cursor: pointer;"><img class="th" style="background-color: #aaa492; " src="image/plotting/satuan.png" width="100" height="100"></a></center></li>
                  <li title="Plotting Kekuatan"><center><a href="#set_kekuatan" style="cursor: pointer;"><img style="background-color: #aaa492;" class="th" src="image/plotting/kekuatan.png" width="100" height="100"></a></center></li>
                  <li title="Plotting Situasi"><center><a href="#set_situasi" style="cursor: pointer;"><img style="background-color: #aaa492;" class="th" src="image/plotting/situasi.png" width="100" height="100"></center></li></a>
                </ul> -->
            </div>
            <div id="form_menu_default">
				<ul class="small-block-grid-3" style="padding: 5px;">
                  <li title="Plotting Text"><center><a href="#set_plot_text" style="cursor: pointer;"><img class="th" style="background-color: #aaa492; " src="image/plotting/font.png" width="100" height="100"></a></center></li>
                </ul>
            </div>
            <script type="text/javascript">
				document.getElementById("form_menu_default").style.display = "none";
                document.getElementById('satuan_default').onclick = function(){
                        document.getElementById("form_menu").style.display = "none";
                        document.getElementById("form_menu_default").style.display = "block";
                }
                document.getElementById('satuan_costum').onclick = function(){
                        document.getElementById("form_menu").style.display = "block";
                        document.getElementById("form_menu_default").style.display = "none";
                }
            </script>
        </div>
    </div>
</div>
<!-- POPUP SATUAN KEKUATAN -->

<div id="set_kekuatan" class="overlay">
    <div class="popup" style="width: 40%;">
        <h2>Plotting Kekuatan</h2>
        <a class="close" href="#" onclick="close_pop();">&times;</a>
        <div class="content_popup">
            <form style="margin-top: -20px;">
                <fieldset style="padding: 7px;">
                    <legend>kekuatan</legend>
                    <ul class="accordion" data-accordion role="tablist" style="max-height: 300px;overflow: auto;">
                        <li class="accordion-navigation">
                            <a onclick="step_kekuatan(1)" role="tab" id="step1_kekuatan-heading" aria-controls="step1_kekuatan">Step 1 - Initializing</a>
                            <div id="step1_kekuatan" class="content active" role="tabpanel" aria-labelledby="step1_kekuatan-heading">
                                <div>
                                    <label>Nama Kekuatan
                                        <input type="text" name="nama_kekuatan" id="nama_kekuatan">
                                    </label>
                                </div>
                            </div>
                        </li>
                        <li class="accordion-navigation">
                            <a onclick="step_kekuatan(2)" role="tab" id="step2_kekuatan-heading" aria-controls="step2_kekuatan">Step 2 - Form Symbol</a>
                            <div id="step2_kekuatan" class="content" role="tabpanel" aria-labelledby="step2_kekuatan-heading">
                                <div class="row">
                                    <div class="small-5 columns">
                                        <label>
                                            <select id="jenis_kekuatan" style="height: 30px; padding: 0px;margin-top: 10px; padding-left: 5px;" onchange="changejenis_kekuatan(this.value)" >
                                                <option value="0">-- Pilih Satuan --</option>
                                                    <option value="kekuatan_AD">Angkatan Darat</option>
                                                    <option value="kekuatan_AL">Angkatan Laut</option>
                                                    <option value="kekuatan_AU">Angkatan Udara</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div class="small-4 columns">
                                        <a style="cursor: not-allowed;" id="icon_kekuatan">Pilih Symbol</a>
                                    </div>
                                </div>
                                <div style="border: 1px solid black; width: auto; max-height: 300px;overflow: auto; margin-top: 5px;">
                                    <table width="100%">
                                        <thead>
                                            <td>Symbol</td>
                                            <td>Jumlah</td>
                                            <td>Keterangan</td>
                                            <td>Action</td>
                                        </thead>
                                        <tbody id="kekuatan_symbol"></tbody>
                                    </table>
                                </div>
                            </div>
                        </li>
                        <li class="accordion-navigation">
                            <a onclick="step_kekuatan(3)" role="tab" id="step3_kekuatan-heading" aria-controls="step3_kekuatan">Step 3 - Timing and speed</a>
                            <div id="step3_kekuatan" class="content" role="tabpanel" aria-labelledby="step3_kekuatan-heading">
                                <div class="row">
                                  <div class="small-5 columns">

                                      <label>Waktu Tempuh
                                          <input type="date" name="date_kekuatan" id="date_kekuatan" style="margin-top: 10px;">
                                      </label>
                                  </div>
                                  <div class="small-2 columns">
                                      <label>Jam
                                        <br>
                                        <select name="t_awal_jam_kekuatan" id="t_awal_jam_kekuatan" style="height: 30px; width: 50px; padding: 0px;margin-top: 9px; padding-left: 5px;" >
                                            <?php
                                                for($i=0; $i<24; $i++){
                                                    echo "<option>";
                                                    if($i<10){
                                                        echo "0".$i;
                                                    }else{
                                                        echo $i;
                                                    }
                                                    echo "</option>";
                                                }
                                            ?>
                                        </select>
                                      </label>
                                  </div>
                                  <div class="small-5 columns">
                                    <label>Menit <br>
                                        <select name="t_awal_menit_kekuatan" id="t_awal_menit_kekuatan" style="height: 30px; width: 50px; padding: 0px;margin-top: 9px; padding-left: 5px;">
                                        <?php
                                            for($i=0; $i<=59; $i++){
                                                echo "<option>";
                                                if($i<10){
                                                    echo "0".$i;
                                                }else{
                                                    echo $i;
                                                }
                                                echo "</option>";
                                            }
                                        ?>
                                        </select>

                                    </label>
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="small-2 columns">
                                    <label>Speed
                                      <input type="number" id="kecepatan_kekuatan" name="kecepatan_kekuatan" value="0" style="width: 80px;margin-top: 10px;" />
                                    </label>
                                  </div>
                                  <div class="small-10 columns">
                                    <label><br>
                                        <select id="jenis_kec_kekuatan" style="width: 100px;height: 30px; padding: 0px;padding-left: 5px; margin-top: 10px;">
                                            <option value="kilometer">Kilometer</option>
                                            <option value="miles">Miles</option>
                                            <option value="knot">Knot</option>
                                        </select>
                                    </label>
                                  </div>
                              </div>
                            </div>
                        </li>
                        <li class="accordion-navigation">
                          <a onclick="step_kekuatan(4)" role="tab" id="step3_kekuatan-heading" aria-controls="step3_kekuatan">Step 4 - Styling</a>
                          <div id="step4_kekuatan" class="content" role="tabpanel" aria-labelledby="step4_kekuatan-heading">
                            <!-- Tambahan untuk warna  -->
                              <div class="row">
                                <div class="large-5 columns">
                                  <label><h3>Color</h3></label>
                                  <input type="radio" id="red" name="warna_kekuatan" value="red" /><label for="red">Red</label>
                                  <input type="radio" id="blue" name="warna_kekuatan" value="blue" checked="checked"/><label for="blue">Blue</label>
                                </div>
                                <div class="large-7 columns">
                                  <label><h3>Size</h3></label>
                                  <input type="number" id="kekuatan_size" name="kekuatan_size" value="20" style="width: 80px;margin-top: 10px;" />
                                </div>
                              </div>
                            <!-- akhir -->
                          </div>
                        </li>
                    </ul>
                </fieldset>
            </form>
        </div>
        <br>
        <div class="footer_popup" style="float: right;">
            <a role="button" onclick="simpan_stng_kekuatan()" class="small button" style="border-radius: 10px;">OK</a>
        </div>
        <script type="text/javascript">
            function step_kekuatan(id){
                document.getElementById("step1_kekuatan").style.display = "none";
                document.getElementById("step2_kekuatan").style.display = "none";
                document.getElementById("step3_kekuatan").style.display = "none";
                document.getElementById("step4_kekuatan").style.display = "none";
                if(id == 1){
                  document.getElementById("step1_kekuatan").style.display = "block";
                }else if(id == 2){
                  document.getElementById("step2_kekuatan").style.display = "block";
                }else if(id == 3){
                  document.getElementById("step3_kekuatan").style.display = "block";
                }else if(id == 4){
                  document.getElementById("step4_kekuatan").style.display = "block";
                }
            }
            function changejenis_kekuatan(id){
                if(id == 0){
                    document.getElementById("icon_kekuatan").style.cursor = "not-allowed";
                    document.getElementById("icon_kekuatan").href = "#set_kekuatan";
                }else if(id == "kekuatan_AD"){
                    document.getElementById("icon_kekuatan").style.cursor = "pointer";
                    document.getElementById("icon_kekuatan").href = "#table_icon";
                }else if(id == "kekuatan_AL"){
                    document.getElementById("icon_kekuatan").style.cursor = "pointer";
                    document.getElementById("icon_kekuatan").href = "#table_icon";
                }else if(id == "kekuatan_AU"){
                    document.getElementById("icon_kekuatan").style.cursor = "pointer";
                    document.getElementById("icon_kekuatan").href = "#table_icon";
                }
            }
        </script>
    </div>
</div>

<!-- POPUP SATUAN SETTING -->
<div id="set_satuan" class="overlay">
    <div class="popup" style="width: 45%">
        <h3>Plotting Satuan</h3>
        <a class="close" href="#" id="close_satuan" onclick="close_pop();">&times;</a>
        <div class="content_popup">
            <form style="margin-top: -20px;">
                <fieldset style="padding: 7px;">
                    <legend>Satuan</legend>
                    <ul class="accordion" data-accordion role="tablist" style="max-height: 300px;overflow: auto;">
                      <li class="accordion-navigation">
                        <a onclick="step_satuan(1)" role="tab" id="step1_satuan-heading" aria-controls="step1_satuan">Step 1 - Initializing</a>
                        <div id="step1_satuan" class="content active" role="tabpanel" aria-labelledby="step1_satuan-heading">
                              <div class="row">
                                <div class="small-3 columns">
                                    <?php
                                        $nasat=rand(0,99);
                                    ?>
                                    <label>Nama
                                        <input type="text" value="<?php echo "SAT$nasat" ?>" name="nama_satuan" id="nama_satuan" style="margin-top: 10px;">
                                    </label>
                                </div>
                                <div class="small-4 columns">
                                    <label>Jenis Satuan
                                        <select id="jenis_satuan" style="height: 30px; padding: 0px;margin-top: 10px; padding-left: 5px;" onchange="changejenis_satuan(this.value)" >
                                            <option value="0">-- Pilih Satuan --</option>
                                                <option value="satuan_AD">Angkatan Darat</option>
                                                <option value="satuan_AL">Angkatan Laut</option>
                                                <option value="satuan_AU">Angkatan Udara</option>
                                        </select>
                                    </label>
                                </div>
                                <div class="small-3 columns">
                                    <label>
                                        <br><br>
                                        <a style="cursor: not-allowed;" id="icon_satuan_">Pilih Symbol</a>
                                    </label>
                                </div>
                                <div class="small-2 columns">
                                    <label>Preview
                                        <p style="font-size: 30px;" id=prev_satuan></p>
                                    </label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="small-3 columns">
                                    <label>Nomor Satuan
                                        <?php
                                            $no = rand(0,999);
                                            $ni = rand(0,999);
                                        ?>
                                        <td><input type="text" id="nosat" name="nomor_sat" value="<?php echo "NS$no" ?>" readonly="readonly" style="width: 100px;margin-top: 10px;" /></td>
                                    </label>
                                </div>
                                <div class="small-4 columns">
                                    <label>Nomor Atasan
                                        <input type="text" id="noat" name="nomor_ats" value="<?php echo "AT$ni" ?>" readonly="readonly" style="width: 100px;margin-top: 10px;"/>
                                    </label>
                                </div>
                                <div class="small-5 columns">
                                    <p id="tmp_index_sat" style="display: none;"></p>
                                </div>
                            </div>
                        </div>
                      </li>
                       <li class="accordion-navigation">
                        <a onclick="step_satuan(2)" role="tab" id="step2_satuan-heading" aria-controls="step2_satuan">Step 2 - Timing and speed</a>
                        <div id="step2_satuan" class="content" role="tabpanel" aria-labelledby="step2_satuan-heading">
                          <div class="row">
                              <div class="small-5 columns">

                                  <label>Waktu Tempuh
                                      <input type="date" name="date_satuan" id="date_satuan" style="margin-top: 10px;">
                                  </label>
                              </div>
                              <div class="small-2 columns">
                                  <label>Jam
                                    <br>
                                    <select name="t_awal_jam" id="t_awal_jam" style="height: 30px; width: 50px; padding: 0px;margin-top: 9px; padding-left: 5px;" >
                                        <?php
                                            for($i=0; $i<24; $i++){
                                                echo "<option>";
                                                if($i<10){
                                                    echo "0".$i;
                                                }else{
                                                    echo $i;
                                                }
                                                echo "</option>";
                                            }
                                        ?>
                                    </select>
                                  </label>
                              </div>
                              <div class="small-5 columns">
                                <label>Menit <br>
                                    <select name="t_awal_menit" id="t_awal_menit" style="height: 30px; width: 50px; padding: 0px;margin-top: 9px; padding-left: 5px;">
                                    <?php
                                        for($i=0; $i<=59; $i++){
                                            echo "<option>";
                                            if($i<10){
                                                echo "0".$i;
                                            }else{
                                                echo $i;
                                            }
                                            echo "</option>";
                                        }
                                    ?>
                                    </select>

                                </label>
                              </div>
                          </div>
                          <div class="row">
                              <div class="small-2 columns">
                                <label>Speed
                                  <input type="number" id="kecepatan_satuan" name="kecepatan_satuan" value="0" style="width: 80px;margin-top: 10px;" />
                                </label>
                              </div>
                              <div class="small-10 columns">
                                <label><br>
                                    <select id="jenis_kec_satuan" style="width: 100px;height: 30px; padding: 0px;padding-left: 5px; margin-top: 10px;">
                                        <option value="kilometer">Kilometer</option>
                                        <option value="miles">Miles</option>
                                        <option value="knot">Knot</option>
                                    </select>
                                </label>
                              </div>
                          </div>
                          <div class="row" style="margin-top: -20px;">
                              <div class="small-5 columns">
                                  <label>Waktu
                                      <input type="date" name="date_asumsi" id="date_asumsi" style="margin-top: 10px;">
                                  </label>
                              </div>
                              <div class="small-2 columns">
                                  <label>Jam
                                    <br>
                                    <select name="jam_asumsi" id="jam_asumsi" style="height: 30px; width: 50px; padding: 0px;margin-top: 9px; padding-left: 5px;" >
                                        <?php
                                            for($i=0; $i<24; $i++){
                                                echo "<option>";
                                                if($i<10){
                                                    echo "0".$i;
                                                }else{
                                                    echo $i;
                                                }
                                                echo "</option>";
                                            }
                                        ?>
                                    </select>
                                  </label>
                              </div>
                              <div class="small-5 columns">
                                <label>Menit <br>
                                    <select name="menit_asumsi" id="menit_asumsi" style="height: 30px; width: 50px; padding: 0px;margin-top: 9px; padding-left: 5px;">
                                    <?php
                                        for($i=0; $i<=59; $i++){
                                            echo "<option>";
                                            if($i<10){
                                                echo "0".$i;
                                            }else{
                                                echo $i;
                                            }
                                            echo "</option>";
                                        }
                                    ?>
                                    </select>

                                </label>
                              </div>
                          </div>
                            <i style="">*)Keterangan waktu bisa saja waktu sekarang atau waktu asumsi</i>

                        </div>
                      </li>
                     <li class="accordion-navigation">
                        <a onclick="step_satuan(3)" role="tab" id="step3_satuan-heading" aria-controls="step3_satuan">Step 3 - Styling</a>
                        <div id="step3_satuan" class="content" role="tabpanel" aria-labelledby="step3_satuan-heading">
                          <!-- Tambahan untuk warna  -->
                          <div class="row">
                            <div class="large-5 columns">
                              <label><h3>Color</h3></label>
                              <input type="radio" id="red" name="warna_satuan" value="merah" /><label for="red">Red</label>
                              <input type="radio" id="blue" name="warna_satuan" value="biru" checked="checked"/><label for="blue">Blue</label>
                            </div>
                            <div class="large-7 columns">
                              <label><h3>Size</h3></label>
                              <input type="number" id="satuan_size" name="satuan_size" value="30" style="width: 80px;margin-top: 10px;" />
                            </div>
                          </div>
                        <!-- akhir -->
                        </div>
                      </li>
                    </ul>

                </fieldset>
            </form>
            <script type="text/javascript">

                function changejenis_satuan(id){
                    if(id == 0){
                        document.getElementById("icon_satuan").style.cursor = "not-allowed";
                        document.getElementById("icon_satuan").href = "#set_satuan";
                    }else if(id == "satuan_AD"){
                        document.getElementById("icon_satuan").style.cursor = "pointer";
                        document.getElementById("icon_satuan").href = "#table_icon";
                    }else if(id == "satuan_AL"){
                        document.getElementById("icon_satuan").style.cursor = "pointer";
                        document.getElementById("icon_satuan").href = "#table_icon";
                    }else if(id == "satuan_AU"){
                        document.getElementById("icon_satuan").style.cursor = "pointer";
                        document.getElementById("icon_satuan").href = "#table_icon";
                    }
                }
                function step_satuan(id){
                    if(id == 1){
                        document.getElementById("step1_satuan").style.display = "block";
                        document.getElementById("step2_satuan").style.display = "none";
                        document.getElementById("step3_satuan").style.display = "none";
                    }else if(id == 2){
                        document.getElementById("step1_satuan").style.display = "none";
                        document.getElementById("step2_satuan").style.display = "block";
                        document.getElementById("step3_satuan").style.display = "none";
                    }else if(id == 3){
                        document.getElementById("step1_satuan").style.display = "none";
                        document.getElementById("step2_satuan").style.display = "none";
                        document.getElementById("step3_satuan").style.display = "block";
                    }
                }

            </script>
        </div>
        <br>
        <div class="footer_popup" style="float: right;">
            <a role="button" onclick="simpan_stng_satuan()" class="small button" style="border-radius: 10px;">OK</a>
        </div>
    </div>
</div>

<!-- POPUP SITUASI -->

<div id="set_situasi" class="overlay">
    <div class="popup" style="width: 40%;">
        <h2>Plotting Situasi</h2>
        <a class="close" href="#" onclick="close_pop();">&times;</a>
        <div class="content_popup">
            <form style="margin-top: -20px;">
                <fieldset style="padding: 7px;">
                    <legend>Situasi</legend>
                    <ul class="accordion" data-accordion role="tablist" style="max-height: 300px;overflow: auto;">
                        <li class="accordion-navigation">
                            <a onclick="step_situasi(1)" role="tab" id="step1_situasi-heading" aria-controls="step1_situasi">Step 1 - Initializing</a>
                            <div id="step1_situasi" class="content active" role="tabpanel" aria-labelledby="step1_situasi-heading">
                                <div>
                                    <label>Keterangan Situasi
                                        <textarea rows="4" cols="40" id="keterangan"></textarea>
                                    </label>
                                </div>
                            </div>
                        </li>
                        <li class="accordion-navigation">
                            <a onclick="step_situasi(2)" role="tab" id="step2_situasi-heading" aria-controls="step2_situasi">Step 2 - Date and Time</a>
                            <div id="step2_situasi" class="content" role="tabpanel" aria-labelledby="step2_situasi-heading">
                              <div class="row">
                                <div class="large-6 columns">
                                  <label>Keterangan Waktu</label>
                                      <input type="radio" name="time" id="time" value="now" checked="checked"><label for="time">sekarang</label>
                                      <input type="radio" name="time" id="time1" value="define"><label for="time1">Define</label>
                                </div>
                              </div>
                              <div id="f_tgl" style="display: none;">
                                  <label>Tanggal
                                        <input type="date" name="tahun" id="tahun">
                                  </label>
                              </div>
                              <div id="f_time" style="display: none;">
                                  <label>Waktu
                                        <input type="time" name="waktu_" id="waktu_">
                                  </label>
                              </div>
                            </div>
                        </li>
                        <li class="accordion-navigation">
                            <a onclick="step_situasi(3)" role="tab" id="step3_situasi-heading" aria-controls="step3_situasi">Step 3 - Attribute</a>
                            <div id="step3_situasi" class="content" role="tabpanel" aria-labelledby="step3_situasi-heading">
                                    <!-- Tambahan untuk warna  -->
                                    <div class="row">
                                      <div class="large-5 columns">
                                        <label><h3>Color</h3></label>
                                        <input type="radio" id="red_sit" name="warna_situasi" value="merah" /><label for="red_sit">Red</label>
                                        <input type="radio" id="blue_sit" name="warna_situasi" value="biru" checked="checked"/><label for="blue_sit">Blue</label>
                                      </div>
                                      <div class="large-7 columns">
                                        <label><h3>Size</h3></label>
                                        <input type="number" id="situasi_size" name="situasi_size" value="20" style="width: 80px;margin-top: 10px;" />
                                      </div>
                                    </div>
                                  <!-- akhir -->
                            </div>
                        </li>
                    </ul>
                </fieldset>
            </form>
        </div>
        <br>
        <div class="footer_popup" style="float: right;">
            <a role="button" onclick="simpan_stng_situasi()" class="small button" style="border-radius: 10px;">OK</a>
        </div>
        <script type="text/javascript">
            function step_situasi(id){
                document.getElementById("step1_situasi").style.display = "none";
                document.getElementById("step2_situasi").style.display = "none";
                document.getElementById("step3_situasi").style.display = "none";
                if(id == 1){
                    document.getElementById("step1_situasi").style.display = "block";
                }else if(id == 2){
                    document.getElementById("step2_situasi").style.display = "block";
                }else if(id == 3){
                    document.getElementById("step3_situasi").style.display = "block";
                }
            }
                time.onclick = function(){
                    document.getElementById("f_tgl").style.display= "none";
                    document.getElementById("f_time").style.display= "none";
                }
                time1.onclick = function(){
                    document.getElementById("f_tgl").style.display= "block";
                    document.getElementById("f_time").style.display= "block";
                }
        </script>
    </div>
</div>

<!-- POPUP BANTUAN TEMBAKAN -->

<div id="set_bungus" class="overlay">
    <div class="popup" style="width: 40%;">
        <h2>Plotting Bantuan Tembakan</h2>
        <a class="close" href="#" onclick="close_pop();">&times;</a>
        <div class="content_popup">
            <form style="margin-top: -20px;">
                <fieldset style="padding: 7px;">
                    <legend>Bantuan Tembakan</legend>
                    <ul class="accordion" data-accordion role="tablist" style="max-height: 300px;overflow: auto;">
                        <li class="accordion-navigation">
                            <a onclick="step_bungus(1)" role="tab" id="step1_bungus-heading" aria-controls="step1_bungus">Initializing</a>
                            <div id="step1_bungus" class="content active" role="tabpanel" aria-labelledby="step1_bungus-heading">
                                <div>
                                    <p><center><img src="image/plotting/bungus_red.png" width="50" height="50"></center></p>
                                    <div class="row">
                                      <div class="small-5 columns">

                                          <label>Waktu Kemunculan
                                              <input type="date" name="datetime" id="datetime" style="margin-top: 10px;">
                                          </label>
                                      </div>
                                      <div class="small-2 columns">
                                          <label>Jam
                                            <br>
                                            <select name="jamnya" id="jamnya" style="height: 30px; width: 50px; padding: 0px;margin-top: 9px; padding-left: 5px;" >
                                                <?php
                                                    for($i=0; $i<24; $i++){
                                                        echo "<option>";
                                                        if($i<10){
                                                            echo "0".$i;
                                                        }else{
                                                            echo $i;
                                                        }
                                                        echo "</option>";
                                                    }
                                                ?>
                                            </select>
                                          </label>
                                      </div>
                                      <div class="small-5 columns">
                                        <label>Menit <br>
                                            <select name="menitnya" id="menitnya" style="height: 30px; width: 50px; padding: 0px;margin-top: 9px; padding-left: 5px;">
                                            <?php
                                                for($i=0; $i<=59; $i++){
                                                    echo "<option>";
                                                    if($i<10){
                                                        echo "0".$i;
                                                    }else{
                                                        echo $i;
                                                    }
                                                    echo "</option>";
                                                }
                                            ?>
                                            </select>

                                        </label>
                                      </div>
                                  </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </fieldset>
            </form>
        </div>
        <br>
        <div class="footer_popup" style="float: right;">
            <a role="button" onclick="simpan_stng_bungus()" class="small button" style="border-radius: 10px;">OK</a>
        </div>
    </div>
</div>

<!-- POPUP OBSTACLE -->

<div id="set_obstacle" class="overlay">
    <div class="popup" style="width: 40%;">
        <h2>Plotting Obstacle</h2>
        <a class="close" href="#" onclick="close_pop();">&times;</a>
        <div class="content_popup">
            <form style="margin-top: -20px;">
                <fieldset style="padding: 7px;">
                    <legend>Obstacle</legend>
                    <ul class="accordion" data-accordion role="tablist" style="max-height: 300px;overflow: auto;">
                        <li class="accordion-navigation">
                            <a onclick="step_obstacle(1)" role="tab" id="step1_obstacle-heading" aria-controls="step1_obstacle">Step 1 - Attribute</a>
                            <div id="step1_obstacle" class="content active" role="tabpanel" aria-labelledby="step1_obstacle-heading">
                                <!-- Tambahan untuk warna  -->
                                  <div class="row">
                                    <div class="large-5 columns">
                                      <label><h3>Color</h3></label>
                                      <input type="radio" id="red_sit" name="warna_satuanob" value="merah" /><label for="red_sit">Red</label>
                                      <input type="radio" id="blue_sit" name="warna_satuanob" value="biru" checked="checked"/><label for="blue_sit">Blue</label>
                                    </div>
                                    <div class="large-7 columns">
                                      <label><h3>Size</h3></label>
                                      <input type="number" id="obst_size" name="obst_size" value="30" style="width: 80px;margin-top: 10px;" />
                                    </div>
                                  </div>
                                <!-- akhir -->
                            </div>
                        </li>
                        <li class="accordion-navigation">
                            <a onclick="step_obstacle(2)" role="tab" id="step2_obstacle-heading" aria-controls="step2_obstacle">Step 2 - Initializing</a>
                            <div id="step2_obstacle" class="content" role="tabpanel" aria-labelledby="step2_obstacle-heading">
                              <div class="row">
                                  <div class="small-4 columns">
                                      <table>
                                        <thead>
                                          <th>Symbol</th>
                                          <th>action</th>
                                        </thead>
                                        <tbody id="isi_obstacle">
                                        </tbody>

                                      </table>
                                  </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </fieldset>
            </form>
            <script type="text/javascript">
              var data_obs = ['B','C','D','E','F','G','H','I','J','K','L','M','N'];
              var string_obstacle = "";
              for(var a = 0;a<data_obs.length;a++){
                var tmp_string_obs = "<tr>"+
                                      "<td style='font-family: TandaTanda;font-size: 26px;'>"+data_obs[a]+"</td>"+
                                      "<td><a onclick='pilih_obstacle("+a+")'>Pilih</a></td>"+
                                     "</tr>";
                var string_obstacle = string_obstacle+tmp_string_obs;
              }
              document.getElementById("isi_obstacle").innerHTML = string_obstacle;
            </script>
        </div>
        <script type="text/javascript">
            function step_obstacle(id){
                document.getElementById("step1_obstacle").style.display = "none";
                document.getElementById("step2_obstacle").style.display = "none";
                if(id == 1){
                    document.getElementById("step1_obstacle").style.display = "block";
                }else if(id == 2){
                    document.getElementById("step2_obstacle").style.display = "block";
                }
            }
            function obst(jenis,index,nama,obst){ 
              if(index == "&amp;"){
                index = "&";
              }
              if(index == "&quot;"){
                index = '"';
              }
              if(index == "&#39;"){
                index = "'";
              }
              if(index == "&lt;"){
                index = "<";
              }
              if(index == "&gt;"){
                index = ">";
              }
              if(index == "&nbsp;"){
                index = String.fromCharCode(Number(160));
              }
              var wrn = document.querySelector('input[name="warna_satuanob"]:checked').value;
              console.log(wrn);
                if (wrn=="biru") {
                 var color =  "blue";
                }else if(wrn=="merah"){
                  var color = "red";
                } 
              simpan_stng_obstacle(jenis,index,nama,obst,color);
            }
                time.onclick = function(){
                    document.getElementById("f_tgl").style.display= "none";
                    document.getElementById("f_time").style.display= "none";
                }
                time1.onclick = function(){
                    document.getElementById("f_tgl").style.display= "block";
                    document.getElementById("f_time").style.display= "block";
                }
        </script>
    </div>
</div>

<!-- POPUP RADAR SETTING -->
<div id="set_radar" class="overlay">
    <div class="popup" style="width: 45%">
        <h3>Plotting Radar</h3>
        <a class="close" href="#"id="close_radar" onclick="close_pop();">&times;</a>
        <div class="content_popup">
            <form style="margin-top: -20px;">
                <fieldset style="padding: 7px;">
                    <legend>Radar</legend>
                    <ul class="accordion" data-accordion role="tablist" style="max-height: 300px;overflow: auto;">
                      <li class="accordion-navigation">
                        <a onclick="step_radar(1)" role="tab" id="step1_radar-heading" aria-controls="step1_radar">Step 1 - Initializing</a>
                        <div id="step1_radar" class="content active" role="tabpanel" aria-labelledby="step1_radar-heading">
                          <div class="row">
                              <div class="small-3 columns">
                                  <label>Nama Radar
                                      <input type="text" id="nama_radar" style="height: 30px; padding: 0px;margin-top: 10px; padding-left: 5px;"/>
                                  </label>
                              </div>
                              <div class="small-4 columns">
                                  <label>Jenis Radar
                                      <select id="jenis_radar" style="height: 30px; padding: 0px;margin-top: 10px; padding-left: 5px;" onchange="changejenis_radar(this.value)" >
                                          <option value="0">-- Pilih Radar --</option>
                                              <option value="radar_AD">Angkatan Darat</option>
                                              <option value="radar_AL">Angkatan Laut</option>
                                              <option value="radar_AU">Angkatan Udara</option>
                                              <option value="radar_GAB">Gabungan</option>
                                      </select>
                                  </label>
                              </div>
                              <div class="small-3 columns">
                                  <label>
                                      <br><br>
                                      <a style="cursor: not-allowed;" id="icon_radar">Pilih Symbol</a>
                                  </label>
                              </div>
                              <div class="small-2 columns">
                                  <label>Preview
                                      <p style="font-size: 30px;" id=prev_radar></p>
                                  </label>
                              </div>
                          </div>
                          <div class="row">
                            <div class="small-5 columns">
                                <p id="tmp_index_rad" style="display: none;"></p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="accordion-navigation">
                        <a onclick="step_radar(2)" role="tab" id="step2_radar-heading" aria-controls="step2_radar">Step 2 - Radius</a>
                        <div id="step2_radar" class="content" role="tabpanel" aria-labelledby="step2_radar-heading">
                            <div class="row">
                                <div class="small-5 columns">
                                    <label>Radius (Nautical Miles)
                                        <input type="number" id="radius_radar" value="0" style="height: 30px; padding: 0px;margin-top: 10px; padding-left: 5px;" />
                                    </label>
                                </div>
                            </div>
                        </div>
                      </li>
                      <li class="accordion-navigation">
                        <a onclick="step_radar(3)" role="tab" id="step_radar-heading" aria-controls="step_radar">Step 3 - Warna</a>
                        <div id="step3_radar" class="content" role="tabpanel" aria-labelledby="step_radar-heading">
                          <!-- Tambahan untuk warna  -->
                          <div class="row">
                            <div class="large-5 columns">
                              <label><h3>Color</h3></label>
                              <input type="radio" id="red" name="warna_radar" value="merah" /><label for="red">Red</label>
                              <input type="radio" id="blue" name="warna_radar" value="biru" checked="checked"/><label for="blue">Blue</label>
                            </div>
                            <div class="large-7 columns">
                              <label><h3>Size</h3></label>
                              <input type="number" id="radar_size" name="radar_size" value="30" style="width: 80px;margin-top: 10px;" />
                            </div>
                          </div>
                        <!-- akhir -->
                        </div>
                      </li>
                    </ul>

                </fieldset>
            </form>
            <script type="text/javascript">

                function changejenis_radar(id){
                    if(id == 0){
                        document.getElementById("icon_radar").style.cursor = "not-allowed";
                        document.getElementById("icon_radar").href = "#set_radar";
                    }else if(id == "radar_AD"){
                        document.getElementById("icon_radar").style.cursor = "pointer";
                        document.getElementById("icon_radar").href = "#table_icon";
                    }else if(id == "radar_AL"){
                        document.getElementById("icon_radar").style.cursor = "pointer";
                        document.getElementById("icon_radar").href = "#table_icon";
                    }else if(id == "radar_AU"){
                        document.getElementById("icon_radar").style.cursor = "pointer";
                        document.getElementById("icon_radar").href = "#table_icon";
                    }else if(id == "radar_GAB"){
                        document.getElementById("icon_radar").style.cursor = "pointer";
                        document.getElementById("icon_radar").href = "#table_icon";
                    }
                }
                function step_radar(id){
                    if(id == 1){
                        document.getElementById("step1_radar").style.display = "block";
                        document.getElementById("step2_radar").style.display = "none";
                        document.getElementById("step3_radar").style.display = "none";
                    }else if(id == 2){
                        document.getElementById("step1_radar").style.display = "none";
                        document.getElementById("step2_radar").style.display = "block";
                        document.getElementById("step3_radar").style.display = "none";
                    }else if(id == 3){
                        document.getElementById("step1_radar").style.display = "none";
                        document.getElementById("step2_radar").style.display = "none";
                        document.getElementById("step3_radar").style.display = "block";
                    }
                }

            </script>
        </div>
        <br>
        <div class="footer_popup" style="float: right;">
            <a role="button" onclick="simpan_stng_radar()" class="small button" style="border-radius: 10px;">OK</a>
        </div>
    </div>
</div>

<!-- POPUP MANUEVER SETTING -->
<div id="set_manuever" class="overlay">
    <div class="popup" style="width: 45%">
        <h3>Plotting Manuever</h3>
        <a class="close" href="#"id="close_manuever" onclick="close_pop();">&times;</a>
        <div class="content_popup">
            <form style="margin-top: -20px;">
                <fieldset style="padding: 7px;">
                    <legend>Manuever</legend>
                    <ul class="accordion" data-accordion role="tablist" style="max-height: 300px;overflow: auto;">
                      <li class="accordion-navigation">
                        <a onclick="step_manuever(1)" role="tab" id="step1_manuever-heading" aria-controls="step1_manuever">Step 1 - Pilih Manuever</a>
                        <div id="step1_manuever" class="content active" role="tabpanel" aria-labelledby="step1_manuever-heading">
                          <div class="row">
                            <div class="small-4 columns">
                                <label>Nama Manuever
                                    <input type="text" id="nama_manuever" style="height: 30px; padding: 0px;margin-top: 10px; padding-left: 5px;"/>
                                </label>
                            </div>
                            <div class="small-4 columns">
                                <label>
                                    <a href="#table_icon" style="cursor: pointer;" id="icon_manuever">Pilih Symbol</a>
                                </label>
                            </div>
                            <div class="small-3 columns">
                                <label>Preview
                                    <p style="font-size: 30px;" id=prev_manuever></p>
                                </label>
                            </div>
                          </div>
                          <div class="row">
                            <div class="small-5 columns">
                                <p id="tmp_index_manuever" style="display: none;"></p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="accordion-navigation">
                        <a onclick="step_manuever(2)" role="tab" id="step_manuever-heading" aria-controls="step_manuever">Step 2 - Warna</a>
                        <div id="step2_manuever" class="content" role="tabpanel" aria-labelledby="step_manuever-heading">
                          <!-- Tambahan untuk warna  -->
                            <div class="row">
                              <div class="large-5 columns">
                                <label><h3>Color</h3></label>
                                <input type="radio" id="red" name="warna_manuever" value="merah" /><label for="red">Red</label>
                                <input type="radio" id="blue" name="warna_manuever" value="biru" checked="checked"/><label for="blue">Blue</label>
                              </div>
                              <div class="large-7 columns">
                                <label><h3>Size</h3></label>
                                <input type="number" id="manuever_size" name="manuever_size" value="30" style="width: 80px;margin-top: 10px;" />
                              </div>
                            </div>
                          <!-- akhir -->
                        </div>
                      </li>
          </ul>
                </fieldset>
            </form>
            <script type="text/javascript">

                function changejenis_manuever(id){
                    if(id == 0){
                        document.getElementById("icon_manuever").style.cursor = "not-allowed";
                        document.getElementById("icon_manuever").href = "#set_manuever";
                    }else if(id == "manuever_AD"){
                        document.getElementById("icon_manuever").style.cursor = "pointer";
                        document.getElementById("icon_manuever").href = "#table_icon";
                    }else if(id == "manuever_AL"){
                        document.getElementById("icon_manuever").style.cursor = "pointer";
                        document.getElementById("icon_manuever").href = "#table_icon";
                    }else if(id == "manuever_AU"){
                        document.getElementById("icon_manuever").style.cursor = "pointer";
                        document.getElementById("icon_manuever").href = "#table_icon";
                    }else if(id == "manuever_GAB"){
                        document.getElementById("icon_manuever").style.cursor = "pointer";
                        document.getElementById("icon_manuever").href = "#table_icon";
                    }
                }
                function step_manuever(id){
                    if(id == 1){
                        document.getElementById("step1_manuever").style.display = "block";
                        document.getElementById("step2_manuever").style.display = "none";
                    }else if(id == 2){
                        document.getElementById("step1_manuever").style.display = "none";
                        document.getElementById("step2_manuever").style.display = "block";
                    }else if(id == 3){
                        document.getElementById("step1_manuever").style.display = "none";
                        document.getElementById("step2_manuever").style.display = "none";
                    }
                }

            </script>
        </div>
        <br>
        <div class="footer_popup" style="float: right;">
            <a role="button" onclick="simpan_stng_manuever()" class="small button" style="border-radius: 10px;">OK</a>
        </div>
    </div>
</div>

<!-- POPUP TEXT SETTING -->
<div id="set_plot_text" class="overlay">
    <div class="popup" style="width: 45%">
        <h3>Plotting Text</h3>
        <a class="close" href="#"id="close_plot_text" onclick="close_pop();">&times;</a>
        <div class="content_popup">
            <form style="margin-top: -20px;">
                <fieldset style="padding: 7px;">
                    <legend>Text</legend>
                    <ul class="accordion" data-accordion role="tablist" style="max-height: 300px;overflow: auto;">
                      <li class="accordion-navigation">
                        <a onclick="step_plot_text(1)" role="tab" id="step1_plot_text-heading" aria-controls="step1_plot_text">Step 1 - Tentukan Text</a>
                        <div id="step1_plot_text" class="content active" role="tabpanel" aria-labelledby="step1_plot_text-heading">
                         <div class="row">
                          <div class="small-7 columns">
                              <label><h3>Masukan Text</h3>
                                  <input type="text" id="nama_plot_text" style="height: 30px; padding: 0px;margin-top: 10px; padding-left: 5px;"/>
                              </label>
                          </div>
                         </div>
                        </div>
                      </li>
                      <li class="accordion-navigation">
                        <a onclick="step_plot_text(2)" role="tab" id="step_plot_text-heading" aria-controls="step_plot_text">Step 2 - Properties</a>
                        <div id="step2_plot_text" class="content" role="tabpanel" aria-labelledby="step_plot_text-heading">
                        <div class="row">
                          <div class="small-4 columns">
                            <label>Angle<input type="number" value="0" min="-360" max="360" id="angle_plot_text" name="angle_plot_text" style="height: 30px; padding: 0px;margin-top: 10px; padding-left: 5px;"></label>
                          </div>
                          <div class="small-4 columns">
                            <label>Size
                              <select id="size_plot_text" style="height: 30px; padding: 0px;margin-top: 10px; padding-left: 5px;">
                                <option value="10">10pt</option>
                                <option value="12">12pt</option>
                                <option value="14" selected="selected">14pt</option>
                                <option value="16">16pt</option>
                                <option value="18">18pt</option>
                                <option value="20">20pt</option>
                                <option value="22">22pt</option>
                                <option value="24">24pt</option>
                                <option value="26">26pt</option>
                                <option value="28">28pt</option>
                                <option value="30">30pt</option>
                              </select>
                            </label>
                          </div>
                          <div class="small-4 columns">
                            <label>Weight
                              <select id="weight_plot_text" style="height: 30px; padding: 0px;margin-top: 10px; padding-left: 5px;">
                                <option value="normal" selected="selected">WEIGHT_NORMAL</option>
                                <option value="bold">WEIGHT_BOLD</option>
                                <option value="bolder">WEIGHT_BOLDER</option>
                                <option value="lighter">WEIGHT_LIGHTER</option>
                              </select>
                            </label>
                          </div>
                        </div>
                        <div class="row">
                          <div class="small-4 columns">
                            <label>Warna<input type="color" id="warna_plot_text" style="height: 30px; padding: 0px;margin-top: 10px; padding-left: 5px;"></label>
                          </div>
                        </div>
                        </div>
                      </li>
                 </ul>
                </fieldset>
            </form>
            <script type="text/javascript">

                function changejenis_plot_text(id){
                    if(id == 0){
                        document.getElementById("icon_plot_text").style.cursor = "not-allowed";
                        document.getElementById("icon_plot_text").href = "#set_plot_text";
                    }else if(id == "plot_text_AD"){
                        document.getElementById("icon_plot_text").style.cursor = "pointer";
                        document.getElementById("icon_plot_text").href = "#table_icon";
                    }else if(id == "plot_text_AL"){
                        document.getElementById("icon_plot_text").style.cursor = "pointer";
                        document.getElementById("icon_plot_text").href = "#table_icon";
                    }else if(id == "plot_text_AU"){
                        document.getElementById("icon_plot_text").style.cursor = "pointer";
                        document.getElementById("icon_plot_text").href = "#table_icon";
                    }else if(id == "plot_text_GAB"){
                        document.getElementById("icon_plot_text").style.cursor = "pointer";
                        document.getElementById("icon_plot_text").href = "#table_icon";
                    }
                }
                function step_plot_text(id){
                    if(id == 1){
                        document.getElementById("step1_plot_text").style.display = "block";
                        document.getElementById("step2_plot_text").style.display = "none";
                        // document.getElementById("step3_plot_text").style.display = "none";
                    }else if(id == 2){
                        document.getElementById("step1_plot_text").style.display = "none";
                        document.getElementById("step2_plot_text").style.display = "block";
                        // document.getElementById("step3_plot_text").style.display = "none";
                    }else if(id == 3){
                        document.getElementById("step1_plot_text").style.display = "none";
                        document.getElementById("step2_plot_text").style.display = "none";
                        // document.getElementById("step3_plot_text").style.display = "block";
                    }
                }

            </script>
        </div>
        <br>
        <div class="footer_popup" style="float: right;">
            <a role="button" onclick="simpan_stng_plot_text()" class="small button" style="border-radius: 10px;">OK</a>
        </div>
    </div>
</div>

<!-- PLOTTING PASUKAN SENDIRI -->
<div id="set_passen" class="overlay">
    <div class="popup" style="width: 45%">
        <h2>pasukan sendiri</h2>
        <a class="close" href="#" onclick="close_pop();">&times;</a>
        <div class="content_popup">
            <form style="margin-top: -20px;">
                <fieldset style="padding: 7px;">
                    <legend>Pasukan Sendiri</legend>
                    <ul class="accordion" data-accordion role="tablist" style="max-height: 300px;overflow: auto;">
                      <li class="accordion-navigation">
                        <a onclick="step_passen(1)" role="tab" id="step1_passen-heading" aria-controls="step1_passen">Step 1 - Initializing</a>
                        <div id="step1_passen" class="content active" role="tabpanel" aria-labelledby="step1_pass-heading">
                          <center>
                            <div style="border: 0px solid black; width: auto; max-height: 200px;width: 70%; overflow: auto; margin-top: 5px;">
                                <table width="100%">
                                    <thead>
                                      <td colspan="2"><center><a onclick="addToform_passen()"> Add</a></center></td>
                                    </thead>
                                    <thead>
                                        <td>Nama Pasukan Sendiri</td>
                                        <td>Action</td>
                                    </thead>
                                    <tbody id="_passen">

                                    </tbody>
                                </table>
                            </div>
                          </center>
                        </div>
                      </li>
                      <li class="accordion-navigation">
                        <a onclick="step_passen(2)" role="tab" id="step2_passen-heading" aria-controls="step2_passen">Step 2 - Warna</a>
                        <div id="step2_passen" class="content" role="tabpanel" aria-labelledby="step2_passen-heading">
                          <!-- Tambahan untuk warna  -->
                            <div class="row">
                              <div class="large-5 columns">
                                <label><h3>Color</h3></label>
                                <input type="radio" id="red" name="warna_passen" value="merah" /><label for="red">Red</label>
                                <input type="radio" id="blue" name="warna_passen" value="biru" checked="checked"/><label for="blue">Blue</label>
                              </div>
                              <!-- <div class="large-7 columns">
                                <label><h3>Size</h3></label>
                                <input type="number" id="passen_size" name="passen_size" value="30" style="width: 80px;margin-top: 10px;" />
                              </div> -->
                            </div>
                          <!-- akhir -->
                        </div>
                      </li>
          </ul>
                </fieldset>
            </form>
            <script type="text/javascript">
                function step_passen(id){
                    if(id == 1){
                        document.getElementById("step1_passen").style.display = "block";
                        document.getElementById("step2_passen").style.display = "none";
                    }else if(id == 2){
                        document.getElementById("step1_passen").style.display = "none";
                        document.getElementById("step2_passen").style.display = "block";
                    }else if(id == 3){
                        document.getElementById("step1_passen").style.display = "none";
                        document.getElementById("step2_passen").style.display = "none";
                    }
                }

            </script>
        </div>
        <br>
        <div class="footer_popup" style="float: right;">
            <a role="button" onclick="simpan_stng_plot_passen()" class="small button" style="border-radius: 10px;">OK</a>
        </div>
    </div>
</div>

<!-- PLOTTING FORMASI -->
<div id="set_formasi" class="overlay">
    <div class="popup" style="width: 40%;">
        <h2>Plotting Formasi</h2>
        <a class="close" href="#" onclick="close_pop();">&times;</a>
        <div class="content_popup">
            <!-- <form style="margin-top: -20px;"> -->
                <fieldset style="padding: 7px;">
                    <legend>Formasi</legend>
                    <ul class="accordion" data-accordion role="tablist" style="max-height: 300px;overflow: auto;">
                        <li class="accordion-navigation">
                            <a onclick="step_formasi(1)" role="tab" id="step1_kekuatan-heading" aria-controls="step1_kekuatan">Step 1 - Bentuk Formasi</a>
                            <div id="step1_formasi" class="content active" role="tabpanel" aria-labelledby="step1_kekuatan-heading">
                                <div>
                                  <label>
                                      <select id="jenis_formasi" style="height: 30px; padding: 0px;margin-top: 10px; padding-left: 5px;" onchange="changejenis_formasi(this.value)" >
                                          <option value="0">-- Bentuk Formasi --</option>
                                              <option value="formasi_AL_1">Belah Ketupat</option>
                                              <option value="formasi_AL_2">Flank Kanan</option>
                                              <option value="formasi_AL_3">Flank Kiri</option>
                                              <option value="formasi_AL_4">Sejajar</option>
                                              <option value="formasi_AL_5">Serial</option>
                                              <option value="formasi_AL_6">Panah</option>
                                              <option value="formasi_AL_7">Kerucut</option>
                                              <option value="formasi_AL_8">Buat Formasi Sendiri</option>
                                      </select>
                                  </label>
                                </div>
                                <div>

                                  <canvas style=" border: 1px solid black; float: right;" width="432" height="432" id="tampilan_formasi">

                                  </canvas>

                                  <img id="image_formasi" class="th" style="background-color: #aaa492; display:none; margin-left: auto; margin-right: auto;" src="image/formasi/formasi_panah.png" width="110" height="110">
                                  <p id="status_formasi"></p>

                                  <a style="display:none;" id="icon_tambah_formasi">Tambah Data</a>
                                </div>
                                <div>
                                  <table  width="100%" style="display:none;" id="myTable">
                                    <thead style="display:block;"  width="100%">
                                      <tr>
                                        <th width="10%">No</th>
                                        <th width="20%">Simbol</th>
                                        <th width="30%">Nama</th>
                                        <th width="40%">Keterangan</th>
                                      </tr>
                                    </thead>
                                    <tbody style="display:block;" id="bodyTable"  width="100%">

                                    </tbody>
                                  </table>
                                </div>
                                <div id="form_buat_formasi" style="margin-top:10px; display:none;">
                                  <input type="text" id="jarak_formasi" value="" placeholder="Jarak">
                                  <input type="text" id="arah_formasi" value="" placeholder="Arah">
                                  <table style="width: 100%;">
                                    <thead>
                                      <tr>
                                        <td style="display: none;">No</td>
                                        <td>Satuan</td>
                                        <td>Jarak</td>
                                        <td>Sudut</td>
                                        <td>Action</td>
                                      </tr>
                                    </thead>
                                    <tbody id="formasi_kon" align="left">

                                    </tbody>
                                  </table>
                                    <button onclick="formasi_add()">Add</button>
                                </div>

                                <div>
                                  <p id="count_formasi"></p>
                                </div>
                            </div>
                        </li>
                        <li class="accordion-navigation">
                            <a onclick="step_formasi(2)" role="tab" id="step2_formasi-heading" aria-controls="step2_formasi">Step 2 - Waktu Tempuh</a>
                            <div id="step2_formasi" class="content" role="tabpanel" aria-labelledby="step2_formasi-heading">
                              <div class="row">
                                <div class="small-5 columns">

                                    <label>Waktu Tempuh
                                        <input type="date" name="date_formasi" id="date_formasi" style="margin-top: 10px;">
                                    </label>
                                </div>
                                <div class="small-2 columns">
                                    <label>Jam
                                      <br>
                                      <select name="t_awal_jam_formasi" id="t_awal_jam_formasi" style="height: 30px; width: 50px; padding: 0px;margin-top: 9px; padding-left: 5px;" >
                                          <?php
                                              for($i=0; $i<24; $i++){
                                                  echo "<option>";
                                                  if($i<10){
                                                      echo "0".$i;
                                                  }else{
                                                      echo $i;
                                                  }
                                                  echo "</option>";
                                              }
                                          ?>
                                      </select>
                                    </label>
                                </div>
                                <div class="small-5 columns">
                                  <label>Menit <br>
                                      <select name="t_awal_menit_formasi" id="t_awal_menit_formasi" style="height: 30px; width: 50px; padding: 0px;margin-top: 9px; padding-left: 5px;">
                                      <?php
                                          for($i=0; $i<=59; $i++){
                                              echo "<option>";
                                              if($i<10){
                                                  echo "0".$i;
                                              }else{
                                                  echo $i;
                                              }
                                              echo "</option>";
                                          }
                                      ?>
                                      </select>

                                  </label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="small-2 columns">
                                  <label>Kecepatan
                                    <input type="number" id="kecepatan_formasi" name="kecepatan_formasi" value="0" style="width: 80px;margin-top: 10px;" />
                                  </label>
                                </div>
                                <div class="small-10 columns">
                                  <label><br>
                                      <select id="jenis_kec_formasi" style="width: 100px;height: 30px; padding: 0px;padding-left: 5px; margin-top: 10px;">
                                          <option value="kilometer">Kilometer</option>
                                          <option value="miles">Miles</option>
                                          <option value="knot">Knot</option>
                                      </select>
                                  </label>
                                </div>
                            </div>
                            </div>
                        </li>
                        <li class="accordion-navigation">
                            <a onclick="step_formasi(3)" role="tab" id="step3_formasi-heading" aria-controls="step3_formasi">Step 3 - Warna</a>
                            <div id="step3_formasi" class="content" role="tabpanel" aria-labelledby="step3_formasi-heading">
                            <!-- Tambahan untuk warna  -->
                                <div class="row">
                                  <div class="large-5 columns">
                                    <label><h3>Color</h3></label>
                                    <input type="radio" id="red_sit" name="warna_formasi" value="merah" /><label for="red_sit">Red</label>
                                    <input type="radio" id="blue_sit" name="warna_formasi" value="biru" checked="checked"/><label for="blue_sit">Blue</label>
                                  </div>
                                  <div class="large-7 columns">
                                    <label><h3>Size</h3></label>
                                    <input type="number" id="formasi_size" name="formasi_size" value="20" style="width: 80px;margin-top: 10px;" />
                                  </div>
                                </div>
                              <!-- akhir -->
                              <!-- <table>
                                  <tr>
                                      <td><input type="radio" id="red" name="warna_formasi" value="merah" />Merah</td>
                                      <td><input type="radio" id="blue" name="warna_formasi" value="biru" checked="checked"/>Biru</td>
                                  </tr>
                              </table> -->
                            </div>
                        </li>
                    </ul>
                </fieldset>
            <!-- </form> -->
        </div>
        <br>
        <div class="footer_popup" style="float: right;">
            <a role="button" onclick="simpan_formasi()" class="small button" style="border-radius: 10px;">OK</a>
        </div>
        <script type="text/javascript">
            var count_formasi;
            var data_table_formasi = "";
            var data_formasi = "";
            var data_buat_formasi =[];
            var data_buat_formasi_table = [];
            var count_add_formasi = 0;
            create_image();
            document.getElementById("tampilan_formasi").style.display = "none";
            function step_formasi(id){
                document.getElementById("step1_formasi").style.display = "none";
                document.getElementById("step2_formasi").style.display = "none";
                document.getElementById("step3_formasi").style.display = "none";
                if(id == 1){
                    document.getElementById("step1_formasi").style.display = "block";
                }else if(id == 2){
                    document.getElementById("step2_formasi").style.display = "block";
                }else if(id == 3){
                    document.getElementById("step3_formasi").style.display = "block";
                }
            }
            function changejenis_formasi(id){
              count_add_formasi = 0;
              data_table_formasi = "";
              data_formasi ="";
              data_buat_formasi = [];
              data_buat_formasi_table = [];
              document.getElementById("bodyTable").innerHTML = "";
              document.getElementById("formasi_kon").innerHTML = "";
              cleara();
              // create_image();

                stat = id.split("_");

                if(id == 0){
                    document.getElementById("icon_tambah_formasi").style.display = "none";
                    document.getElementById("icon_tambah_formasi").href = "#set_formasi";
                }else {
                    document.getElementById("icon_tambah_formasi").style.display = "block";
                    document.getElementById("icon_tambah_formasi").href = "#table_icon";
                }

                if(stat[2] == 1) {
                    count_formasi = 4;
                    document.getElementById("tampilan_formasi").style.display = "none";
                    document.getElementById("form_buat_formasi").style.display = "none";

                    document.getElementById("myTable").style.display = "block";
                    document.getElementById("image_formasi").style.display = "block";
                    document.getElementById("image_formasi").src = "image/formasi/formasi_belah_ketupat.png";
                }else if(stat[2] == 2) {
                    count_formasi = 4;
                    document.getElementById("tampilan_formasi").style.display = "none";
                    document.getElementById("form_buat_formasi").style.display = "none";

                    document.getElementById("myTable").style.display = "block";
                    document.getElementById("image_formasi").style.display = "block";
                    document.getElementById("image_formasi").src = "image/formasi/formasi_flank_kanan.png";
                }else if(stat[2] == 3) {
                   count_formasi = 4;
                   document.getElementById("tampilan_formasi").style.display = "none";
                   document.getElementById("form_buat_formasi").style.display = "none";

                    document.getElementById("myTable").style.display = "block";
                    document.getElementById("image_formasi").style.display = "block";
                    document.getElementById("image_formasi").src = "image/formasi/formasi_flank_kiri.png";
                }else if(stat[2] == 4) {
                   count_formasi = 4;
                   document.getElementById("tampilan_formasi").style.display = "none";
                   document.getElementById("form_buat_formasi").style.display = "none";

                    document.getElementById("myTable").style.display = "block";
                    document.getElementById("image_formasi").style.display = "block";
                    document.getElementById("image_formasi").src = "image/formasi/formasi_sejajar.png";
                }else if(stat[2] == 5) {
                   count_formasi = 4;
                   document.getElementById("tampilan_formasi").style.display = "none";
                   document.getElementById("form_buat_formasi").style.display = "none";

                    document.getElementById("myTable").style.display = "block";
                    document.getElementById("image_formasi").style.display = "block";
                    document.getElementById("image_formasi").src = "image/formasi/formasi_serial.png";
                }else if(stat[2] == 6) {
                   count_formasi = 5;
                   document.getElementById("tampilan_formasi").style.display = "none";
                   document.getElementById("form_buat_formasi").style.display = "none";

                    document.getElementById("myTable").style.display = "block";
                    document.getElementById("image_formasi").style.display = "block";
                    document.getElementById("image_formasi").src = "image/formasi/formasi_panah.png";
                }else if(stat[2] == 7) {
                   count_formasi = 8;
                   document.getElementById("form_buat_formasi").style.display = "none";

                    document.getElementById("myTable").style.display = "block";
                    document.getElementById("image_formasi").style.display = "block";
                    document.getElementById("tampilan_formasi").style.display = "none";
                    document.getElementById("image_formasi").src = "image/formasi/formasi_kerucut.png";
                }else if(stat[2] == 8) {
                   count_formasi = 8;
                   document.getElementById("form_buat_formasi").style.display = "block";

                    document.getElementById("myTable").style.display = "block";
                    document.getElementById("image_formasi").style.display = "none";
                    document.getElementById("tampilan_formasi").style.display = "inline-block";
                } else {
                    document.getElementById("myTable").style.display = "none";
                    document.getElementById("image_formasi").style.display = "none";
                      document.getElementById("tampilan_formasi").style.display = "none";
                }
                if(id == 0 || stat[2]== 8){
                  jum = 0;
                  $("#count_formasi").text("");

                }else {
                  jum = 0;
                  $("#count_formasi").text(jum+" dari "+count_formasi);

                }
                create_image();


            }

            function create_image(){
              var w = document.getElementById('tampilan_formasi').offsetWidth/2;
              var h = document.getElementById('tampilan_formasi').offsetHeight/2;

              //document.getElementById("cret_image").style.display = "none";
              var canvas = document.getElementById("tampilan_formasi");
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
                var tmpx = w + (200 * Math.cos( 0 * Math.PI/180));
                var tmpy = h + (200 * Math.sin( 0 * Math.PI/180));
                var tmpPoint_X = Math.round(tmpx);
                var tmpPoint_Y = Math.round(tmpy);

                context.lineTo(tmpPoint_X, tmpPoint_Y);

                context.stroke();
                context.font = "bold 12px arial";
                context.fillText("90", tmpPoint_X, tmpPoint_Y);

                // garis bawah 180 derajat
                context.moveTo(w, h);
                var tmpx = w + (200 * Math.cos( 90 * Math.PI/180));
                var tmpy = h + (200 * Math.sin( 90 * Math.PI/180));
                var tmpPoint_X = Math.round(tmpx);
                var tmpPoint_Y = Math.round(tmpy);

                context.lineTo(tmpPoint_X, tmpPoint_Y);

                context.stroke();
                context.font = "bold 12px arial";
                context.fillText("180", tmpPoint_X, tmpPoint_Y);

                // garis bawah 270 derajat
                context.moveTo(w, h);
                var tmpx = w + (200 * Math.cos( 180 * Math.PI/180));
                var tmpy = h + (200 * Math.sin( 0 * Math.PI/180));
                var tmpPoint_X = Math.round(tmpx);
                var tmpPoint_Y = Math.round(tmpy);

                context.lineTo(tmpPoint_X, tmpPoint_Y);

                context.stroke();
                context.font = "bold 12px arial";
                context.fillText("270", tmpPoint_X, tmpPoint_Y);

                // garis bawah 0 derajat
                context.moveTo(w, h);
                var tmpx = w + (200 * Math.cos( 270 * Math.PI/180));
                var tmpy = h + (200 * Math.sin( 270 * Math.PI/180));
                var tmpPoint_X = Math.round(tmpx);
                var tmpPoint_Y = Math.round(tmpy);

                context.lineTo(tmpPoint_X, tmpPoint_Y);

                context.stroke();
                context.font = "bold 12px arial";
                context.fillText("0", tmpPoint_X, tmpPoint_Y);
            }

            function formasi_add(id){
            data_buat_formasi_table = [];
            data_buat_formasi = [];
              var w = document.getElementById('tampilan_formasi_new').offsetWidth/2;
              var h = document.getElementById('tampilan_formasi_new').offsetHeight/2;
              cleara();
              create_image_new();
              for (var i = 0; i < arr_formasi_cek.length; i++) {
                if(id == 0){
                    var jarak = docId("jarak_formasi_"+i).value;
                    var sudut = docId("arah_formasi_"+i).value;
                }else if(id == 1){
                    var jarak = docId("jarak_formasi_list_"+i).value;
                    var sudut = docId("arah_formasi_list_"+i).value;
                }
                var index = arr_formasi_cek[i].id;
                var formasi = data_font[index];
                var res = String.fromCharCode(Number(formasi.index));
                var new_jarak = (jarak*1.852)/111.319888;

                data_buat_formasi_table.push(formasi);
                data_buat_formasi.push({jarak: new_jarak, sudut: sudut});

                var tmpx = w + (Number(jarak)*40)* Math.cos((Number(sudut)-90)* Math.PI/ 180);
                var tmpy = h + (Number(jarak)*40)* Math.sin((Number(sudut)-90)* Math.PI/ 180);
                var fPoint_X = Math.round(tmpx);
                var fPoint_Y = Math.round(tmpy);
                context.font = "bold 18px "+formasi.nama;
                context.fillText(res, fPoint_X, fPoint_Y);

              }
            }

            function cleara(){
                 context.clearRect(0, 0, document.getElementById("tampilan_formasi_new").width, document.getElementById("tampilan_formasi_new").height);
             }

             function deleteRow(r) {
               count_add_formasi--;

                var i = r.parentNode.parentNode.rowIndex;
                document.getElementById("formasi_kon").deleteRow(i-1);

                var tmp_formasi_map = data_buat_formasi.split(";");
                var tmp_formasi_map_table = data_buat_formasi_table.split(";");

                //alert(tmp_formasi_map_table);
                tmp_formasi_map.splice(i-1, 1);
                tmp_formasi_map_table.splice(i-1, 1);
                // alert(tmp_formasi_map);
                data_buat_formasi = "";
                for (var j = 0; j < tmp_formasi_map.length-1; j++) {
                  var tmp_data_buat_formasi = tmp_formasi_map[j]+";";
                  data_buat_formasi = data_buat_formasi + tmp_data_buat_formasi;
                }

                data_buat_formasi_table = "";
                for (var k = 0; k < tmp_formasi_map_table.length-1; k++) {
                  var tmp_data_buat_formasi_table2 = tmp_formasi_map_table[k]+";";
                  data_buat_formasi_table = data_buat_formasi_table + tmp_data_buat_formasi_table2;
                }
                //alert(data_buat_formasi_table);
                cleara();
                create_image();

                var w = document.getElementById('tampilan_formasi').offsetWidth/2;
                var h = document.getElementById('tampilan_formasi').offsetHeight/2;

                var formasi_map_delete = "";
                var hasil_data_delete = new Array();

                formasi_map_delete = data_buat_formasi.split(";");
                var sub_map_delete = formasi_map_delete[0].split(",");

                for (var i = 0; i < formasi_map_delete.length-1; i++) {
                    var vv = formasi_map_delete[i].split(",");
                    hasil_data_delete[i]=new Array();
                    for (var j = 0; j < sub_map_delete.length; j++) {
                        hasil_data_delete[i][j] = vv[j];
                    }
                }

                for(var a = 0; a < formasi_map_delete.length-1; a++){
                  var res = String.fromCharCode(Number(hasil_data_delete[a][0]));

                  var tmpxx = w + (Number(hasil_data_delete[a][4])*40)* Math.cos((Number(hasil_data_delete[a][3])-90)* Math.PI/ 180);
                  var tmpyy = h + (Number(hasil_data_delete[a][4])*40)* Math.sin((Number(hasil_data_delete[a][3])-90)* Math.PI/ 180);
                  var fPoint_XX = Math.round(tmpxx);
                  var fPoint_YY = Math.round(tmpyy);
                  context.font = "bold 18px "+hasil_data_delete[a][1];
                  context.fillText(res, fPoint_XX, fPoint_YY)
                }


                //sub_map = formasi_map[0].split(",");
                // alert(formasi_map[i-1]);

            }
        </script>
    </div>
</div>
<!-- POPUP LAYER PETA SETTING -->
<div id="set_layer_peta" class="overlay" style="">
    <div class="popup" style="width: 70%">
        <h3>Layer Peta</h3>
        <a class="close" href="#"id="close_radar" onclick="close_pop();">&times;</a>
        <div class="content_popup" style="height: 400px;">
      <nav class="navbar navbar-default">
        <ul class="nav navbar-nav">
        <li onclick="change_layer_peta('basemap','layer')" class="active layer_peta_basemap_option"><a href="#set_layer_peta">Basemap</a></li>
        <li onclick="change_layer_peta('layer','basemap')" class="layer_peta_layer_option"><a href="#set_layer_peta">Layer</a></li>
        </ul>
      </nav>
      <div class="row">
        <div class="col-md-12 layer_peta_basemap_content">
          <div style="height: 320px;overflow-y: scroll; width: 40%;">
            <center><h3>Peta</h3></center>
            <table width="100%" style="font-size: 18px;" id="layer_peta_basemap_table_map">
              <tr>
              <td>No</td>
              <td>Nama Peta</td>
              <td colspan="2"><center>action</center></td>
              </tr>
              <tr>
              <td>1</td>
              <td>Bandara</td>
              <td><label><input type="radio" id="layer_peta_on_bandara" name="p_bandara" onchange="layer_peta_pilih_nama_peta('layer_peta_'+this.value+'_bandara')" value="on" />ON</label></td>
              <td><label><input type="radio" id="layer_peta_off_bandara" name="p_bandara" value="off" onchange="layer_peta_pilih_nama_peta('layer_peta_'+this.value+'_bandara')" checked="checked" />OFF</label></td>
              </tr>
              <tr>
              <td>2</td>
              <td>Matra TNI AL</td>
              <td><label><input type="radio" id="layer_peta_on_tnial" name="p_tni_al" onchange="layer_peta_pilih_nama_peta('layer_peta_'+this.value+'_tnial')" value="on" />ON</label></td>
              <td><label><input type="radio" id="layer_peta_off_tnial" name="p_tni_al" onchange="layer_peta_pilih_nama_peta('layer_peta_'+this.value+'_tnial')" value="off" checked="checked" />OFF</label></td>
              </tr>
              <tr>
              <td>3</td>
              <td>Matra TNI AU</td>
              <td><label><input type="radio" id="layer_peta_on_tniau" name="p_tni_au" onchange="layer_peta_pilih_nama_peta('layer_peta_'+this.value+'_tniau')" value="on" />ON</label></td>
              <td><label><input type="radio" id="layer_peta_off_tniau" name="p_tni_au" value="off" onchange="layer_peta_pilih_nama_peta('layer_peta_'+this.value+'_tniau')" checked="checked" />OFF</label></td>
              </tr>
              <tr>
              <td>4</td>
              <td>Matra TNI AD</td>
              <td><label><input type="radio" id="layer_peta_on_tniad" name="p_tni_ad" onchange="layer_peta_pilih_nama_peta('layer_peta_'+this.value+'_tniad')" value="on" />ON</label></td>
              <td><label><input type="radio" id="layer_peta_off_tniad" name="p_tni_ad" value="off" onchange="layer_peta_pilih_nama_peta('layer_peta_'+this.value+'_tniad')" checked="checked" />OFF</label></td>
              </tr>
              <tr>
              <td>5</td>
              <td>Peta Laut</td>
              <td><label><input type="radio" id="layer_peta_on_laut" name="p_laut" onchange="layer_peta_pilih_nama_peta('layer_peta_'+this.value+'_laut')" value="on" />ON</label></td>
              <td><label><input type="radio" id="layer_peta_off_laut" name="p_laut" onchange="layer_peta_pilih_nama_peta('layer_peta_'+this.value+'_laut')" value="off" checked="checked" />OFF</label></td>
              </tr>
              <tr>
              <td>6</td>
              <td>Peta Indonesia</td>
              <td><label><input type="radio" id="layer_peta_on_indonesia" name="p_indonesia" onchange="layer_peta_pilih_nama_peta('layer_peta_'+this.value+'_indonesia')" value="on" />ON</label></td>
              <td><label><input type="radio" id="layer_peta_off_indonesia" name="p_indonesia" onchange="layer_peta_pilih_nama_peta('layer_peta_'+this.value+'_indonesia')" value="off" checked="checked" />OFF</label></td>
              </tr>
              <tr>
              <td>7</td>
              <td>Peta Udara</td>
              <td><label><input type="radio" id="layer_peta_on_udara" name="p_udara" onchange="layer_peta_pilih_nama_peta('layer_peta_'+this.value+'_udara')" value="on" />ON</label></td>
              <td><label><input type="radio" id="layer_peta_off_udara" name="p_udara" onchange="layer_peta_pilih_nama_peta('layer_peta_'+this.value+'_udara')" value="off" checked="checked" />OFF</label></td>
              </tr>
              <tr>
              <td>8</td>
              <td>Peta dunia</td>
              <td><label><input type="radio" id="layer_peta_on_dunia" name="p_dunia" onchange="layer_peta_pilih_nama_peta('layer_peta_'+this.value+'_dunia')" value="on" />ON</label></td>
              <td><label><input type="radio" id="layer_peta_off_dunia" name="p_dunia" onchange="layer_peta_pilih_nama_peta('layer_peta_'+this.value+'_dunia')" value="off" checked="checked" />OFF</label></td>
              </tr>
              <tr>
              <td>9</td>
              <td>Peta Darat</td>
              <td><label><input type="radio" id="layer_peta_on_darat" name="p_darat" onchange="layer_peta_pilih_nama_peta('layer_peta_'+this.value+'_darat')" value="on" />ON</label></td>
              <td><label><input type="radio" id="layer_peta_off_darat" name="p_darat" onchange="layer_peta_pilih_nama_peta('layer_peta_'+this.value+'_darat')" value="off" checked="checked" />OFF</label></td>
              </tr>
              <tr>
              <td>10</td>
              <td>Peta Topografi</td>
              <td><label><input type="radio" id="layer_peta_on_topo" name="p_topo" onchange="layer_peta_pilih_nama_peta('layer_peta_'+this.value+'_topo')" value="on" />ON</label></td>
              <td><label><input type="radio" id="layer_peta_off_topo" name="p_topo" onchange="layer_peta_pilih_nama_peta('layer_peta_'+this.value+'_topo')" value="off" checked="checked" />OFF</label></td>
              </tr>
            </table>
          </div>
          <div style="height: 320px; overflow-y: scroll; width: 60%; float: right; margin-top: -300px;">
            <center><h3>Info Peta</h3></center>
            <table id="layer_peta_table_info_peta" width="100%" style="font-size: 18px;">
            </table>
          </div>
        </div>
        <div class="col-md-12 layer_peta_layer_content" style="display:none;">
          <table id="layer_peta_layer_data" width="100%" style="font-size: 18px;">
            
          </table>
        </div>
      </div>
        </div>
        <br>
        <br>
        <div class="footer_popup" style="float: right;">
            <!-- <a role="button" onclick="simpan_layer_peta()" class="small button" style="border-radius: 10px;">OK</a> -->
            <a role="button" class="small button" id="ok_butt" style="border-radius: 10px;">OK</a>
        </div>
    <script src="https://unpkg.com/esri-leaflet@2.1.4/dist/esri-leaflet.js"
    integrity="sha512-m+BZ3OSlzGdYLqUBZt3u6eA0sH+Txdmq7cqA1u8/B2aTXviGMMLOfrKyiIW7181jbzZAY0u+3jWoiL61iLcTKQ=="
    crossorigin=""></script>
    <script>
      var breketek;
      var dynamicMapLayer;
      var array123 = [];
      $("#layer_peta_table_info_peta").on('click', function(evt){

        if(evt.target.tagName.toLowerCase()=="input"){
          if(evt.target.value=="check"){

            $('#layer_peta_table_info_peta .layer_peta_checkbox').prop('checked', true);
            $(evt.target).attr("value","uncheck");

          }else if(evt.target.value=="uncheck"){

            $('#layer_peta_table_info_peta .layer_peta_checkbox').prop('checked', false);
            $(evt.target).attr("value","check");
          }
        }
      });

      function change_layer_peta(opt1,opt2){
        // $(".layer_peta_" + opt1 + "option li").attr("class","active layer_peta" + opt1 + "_option");
        $(".navbar-nav li.layer_peta_" + opt1 + "_option").addClass('active');

        // $(".layer_peta_" + opt2 + "option li").attr("class","layer_peta" + opt2 + "_option");
        $(".navbar-nav li.layer_peta_" + opt2 + "_option").removeClass('active');

        $(".layer_peta_" + opt1 + "_content").css("display","block");
        $(".layer_peta_" + opt2 + "_content").css("display","none");
      }
      function lptt(td1,td2){ //layer_peta_tr_td
        return "<tr><td>"+td1+"</td><td>"+td2+"</td></tr>";
      }
      function lptt2(td1,td2,td3,td4){ //layer_peta_tr_td
        return "<tr><td>"+td1+"</td><td>"+td2+"</td><td>"+td3+"</td><td>"+td4+"</td></tr>";
      }
      function lpc(name,value,c){ //layer_peta_checkbox
        if(c==1){
          c = "<input type='checkbox' class='layer_peta_checkbox' value='" + value + "'/>";
        }else{
          c = "";
        }
        return "<label>" + c + " " + name + "</label>";
      }
      function lpc2(name,text,src,id){ //layer_peta_checkbox
        return "<input type='radio' id='"+id+"' src='"+src+"' name='"+name+"' checked/>"+text;
      }
      function simpan_layer_peta(){
        var checked = $('#layer_peta_table_info_peta .layer_peta_checkbox:checked');
        var array = [];
        for(var a=0; a<checked.length; a++){
          if(checked[a].value!="uncheck" && checked[a].value!="check"){
            array.push(checked[a].value);
          }
        }        
        dynamicMapLayer.options.layers = array;
        dynamicMapLayer.addTo(map);
        close_pop();
        window.location.href = "#";
      }

      $("#ok_butt").on('click', function(){

        if ($(".navbar-nav li.layer_peta_basemap_option").hasClass('active')) {

          simpan_layer_peta();

        }else if ($(".navbar-nav li.layer_peta_layer_option").hasClass('active')){

          console.log("ini adalah layer");
          testing();

        }
      });

      function layer_peta_get_layer(url){
        if(dynamicMapLayer!=undefined || dynamicMapLayer!=null){          
          map.removeLayer(dynamicMapLayer);

        }
        dynamicMapLayer = L.esri.dynamicMapLayer({
            url: url,
            layers: [0]
          });
        var innerHTML = "";
        var first_td = "";
        var second_td = "";
        dynamicMapLayer.metadata(function(error, metadata){
          if(metadata.layers.length!=0){
            innerHTML = lptt(lpc("Semua","check",1),"");
            for(var a=0; a<metadata.layers.length; a++){
              if(a==0 || a%2==0){
                first_td = lpc(metadata.layers[a].name,metadata.layers[a].id,1);
              }else{
                second_td = lpc(metadata.layers[a].name,metadata.layers[a].id,1);
              }
              if(first_td!="" && second_td!=""){                
                innerHTML = innerHTML + lptt(first_td,second_td);
                first_td = "";
                second_td = "";
              }
              if(metadata.layers.length%2==1 && (metadata.layers.length-1)==a){
                innerHTML = innerHTML + lptt(first_td,"");
              }
            }
          }else{
            innerHTML = lptt(lpc("Layer kosong.","all",0),"");
          }
          document.getElementById("layer_peta_table_info_peta").innerHTML = innerHTML;
        });
      }

      function layer_get_layer(url){
        if(breketek!=undefined || breketek!=null){          
          map.removeLayer(breketek);

        }
        var aurl = url.substr(7, 12);
        fix = url.replace(aurl, "115.124.73.252")
        var dump_map = "http://115.124.73.252:6080/arcgis/rest/services/ePPKM_V2/Matra_TNIAL_v3/MapServer";

        // console.log(dump_map);
        // console.log(fix);
        // L.esri.basemapLayer('Gray').addTo(map);

        breketek = L.esri.dynamicMapLayer({
          url: fix,
          opacity: 0.7
        })

        breketek.addTo(map);
        window.location.href = "#";
      }

      function layer_peta_pilih_nama_peta(nama){
        document.getElementById("layer_peta_off_bandara").checked = true;
        document.getElementById("layer_peta_off_tnial").checked = true;
        document.getElementById("layer_peta_off_tniau").checked = true;
        document.getElementById("layer_peta_off_tniad").checked = true;
        document.getElementById("layer_peta_off_laut").checked = true;
        document.getElementById("layer_peta_off_indonesia").checked = true;
        document.getElementById("layer_peta_off_udara").checked = true;
        document.getElementById("layer_peta_off_dunia").checked = true;
        document.getElementById("layer_peta_off_darat").checked = true;
        document.getElementById("layer_peta_off_topo").checked = true;

        var pecah_nama = nama.split("_");
        var selected_id = document.getElementById("layer_peta_on_"+pecah_nama[3]);
        selected_id.checked = true;
        var host_argis = "115.124.73.252";
        if(selected_id.id == "layer_peta_on_bandara"){
          var url = "http://"+host_argis+":6080/arcgis/rest/services/ePPKM/bandara_pelabuhan/MapServer";
          layer_peta_get_layer(url);
        }
        if(selected_id.id === "layer_peta_on_darat"){
          var url = "http://"+host_argis+":6080/arcgis/rest/services/ePPKM_v3/timorleste_street/MapServer";
          layer_peta_get_layer(url);
        }
        if(selected_id.id === "layer_peta_on_tnial"){
          var url = "http://"+host_argis+":6080/arcgis/rest/services/ePPKM_V2/Matra_TNIAL_v3/MapServer";
          layer_peta_get_layer(url);
        }
        if(selected_id.id === "layer_peta_on_tniau"){
          var url = "http://"+host_argis+":6080/arcgis/rest/services/ePPKM_V2/Matra_TNIAU_v3/MapServer";
          layer_peta_get_layer(url);
        }
        if(selected_id.id === "layer_peta_on_tniad"){
          var url = "http://"+host_argis+":6080/arcgis/rest/services/ePPKM_V2/Matra_TNIAD_v3/MapServer";
          layer_peta_get_layer(url);
        }
        if(selected_id.id === "layer_peta_on_laut"){
          var url = "http://"+host_argis+":6080/arcgis/rest/services/ePPKM_V2/Peta_Laut/MapServer";
          layer_peta_get_layer(url);
        }
        if(selected_id.id === "layer_peta_on_indonesia"){
          var url = "http://"+host_argis+":6080/arcgis/rest/services/ePPKM/Indonesia_Map/MapServer";
          layer_peta_get_layer(url);
        }
        if(selected_id.id === "layer_peta_on_udara"){
          var url = "http://"+host_argis+":6080/arcgis/rest/services/ePPKM_V2/Petaa_udara/MapServer";
          layer_peta_get_layer(url);
        }
        if(selected_id.id === "layer_peta_on_dunia"){
          var url = "http://"+host_argis+":6080/arcgis/rest/services/ePPKM/WORLD_MAP/MapServer";
          layer_peta_get_layer(url);
        }
        if(selected_id.id === "layer_peta_on_topo"){
          var url = "http://"+host_argis+":6080/arcgis/rest/services/ePPKM_v3/Kupang/MapServer";
          layer_peta_get_layer(url);
        }
      }

      function layer_peta_get_url(url){                
        var aurl = url;
        console.log(aurl);
        layer_peta_get_layer(aurl);
      }

      var layer_peta_layer_skena = get_db("status=layer_peta_layer_get_scenario_aktif");
      var layer_peta_layer_servs = get_db("status=layer_peta_layer_get_services&serv="+layer_peta_layer_skena[0]['service']);
      // console.log(layer_peta_layer_skena);
      var layer_peta_innerHTML = "<tr><td>No</td><td>Nama Peta</td><td colspan='2'>Action</td></tr>";
      var layer_peta_count = 1;

      for(var a=0; a<layer_peta_layer_servs.length; a++){
        for(var b=0; b<layer_peta_layer_servs[a].length; b++){
          var c = layer_peta_layer_servs[a][b];
          var nama = c.nama;
          var on = lpc2(nama,'on',c.url,c.id);
          var off = lpc2(nama,'off',c.url,c.id);
          layer_peta_innerHTML = layer_peta_innerHTML + lptt2(layer_peta_count,nama,on,off);
          layer_peta_count = layer_peta_count + 1;
        }
      }
      // console.log(layer_peta_innerHTML);
      $("#layer_peta_layer_data").html(layer_peta_innerHTML);
      // document.getElementById("layer_peta_layer_data").innerHTML(layer_peta_innerHTML);              
      
      function testing(){
        // console.log(c.length);        
        for (var i = 0; i < layer_peta_layer_servs.length; i++) {
          for (var j = 0; j < layer_peta_layer_servs[i].length; j++) {
            var k = layer_peta_layer_servs[i][j];
            if ($("#"+k['id']+"").is(":checked")) {
              layer_get_layer(k['url']);
            }else{
              layer_get_layer('false');
            }
          }
        }
        // console.log(array);
          // console.log($("#"+c['id']+"").is(":checked"));
          // console.log($("#"+c['id']+"").val());
      }
    </script>
    </div>
</div>