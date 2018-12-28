
<div id="view_formasi" class="view_formasi" style=" display: none;">
	<canvas style=" border: 1px solid black; float: right; " width="362" height="362" id="tampilan_formasi_new">

	</canvas>
</div>
<div id="view_cb" class="view_cb" style=" display: none;">
	<center style="font-size: 20px; font-weight: bolder;">Pilih CB</center>
	<div class="form_menu" style="width: 40%;">
		<span>JENIS CB</span>
		<select onchange="ambil_bagian_cb()" id="namajenis_cb">
			<option value="null">--- PILIH ---</option>
			<option value="musuh">CB Musuh</option>
			<option value="sendiri">CB Sendiri</option>
		</select>
	</div>
	<div class="form_menu" style="width: 56%;">
		<span>JENIS USER</span>
		<select id="jenis_user_cb" onchange="jenis_cb(this.value)">
			<option value="null">--- PILIH ---</option>
		</select>
	</div>
	<div class="form_menu" style="width: 97%; height: 60px; border: 1px solid black; overflow: auto;" id="namauser">

	</div>
	<div class="form_menu" style="width: 97%; height: 150px; border: 1px solid black; margin-top: 5px;overflow: auto;" id="load_cb_">

	</div>
	<div class="form_menu" style="width: 97%;">
		<div class="pure-button button-secondary" onclick="buka_cb()" style="width: 100px;height: 25px;cursor: pointer; margin-top: 5px; float: left;">Buka</div>
		<div class="pure-button button-error" onclick="cancel_cb()" style="width: 100px;height: 25px;cursor: pointer; margin-top: 5px; float: right;">Keluar</div>
	</div>
</div>

<div id="properti_draw" class="property">
	<div id="isi_property" style="display: none;">
			
		<!-- <div> -->
			<input id="tab1" type="radio" name="tabs" checked>
			<label for="tab1">Property Draw</label>
			    
			<input id="tab2" onclick="tableHighlightRow()" type="radio" name="tabs">
			<label for="tab2">List Object</label>
			    
			<input id="tab3" onclick="" type="radio" name="tabs">
			<label for="tab3">Load Scenario</label>
			    
			<input id="tab4" type="radio" name="tabs">
			<label for="tab4">Convert/zoom to Location</label>

			<input id="tab5" type="radio" name="tabs">
			<label for="tab5">Layer Peta</label>
		<!-- </div> -->

		<section id="content1">
			<div id="default_menu">
				<center><h1>Tidak ada menu yang di pilih !!</h1></center>
			</div>
			<!-- /***********************************************
			 ** Menu Satuan 
			 ** By: Muhamad Farhan Badrussalam
			 ***********************************************/ -->
			<div id="satuan_" style="float: left;padding: 10px; width: 100%; display: none;">
				<center style="font-weight: bolder; font-size: 18px;">Satuan</center>
				<div style="float: left; width: 270px; height: 152px; padding: 5px;" id="pilih_icon">
					<div style="width: 100%; height: 32.4%;">
						<select id="jenis_satuan_new" style="height: 30px; width: 70%; padding: 0px;padding-left: 5px; float: left;" onchange="change_satuan(this.value)" >
	                        <option value="0">-- Pilih Satuan --</option>
	                            <option value="satuan_AD">Angkatan Darat</option>
	                            <option value="satuan_AL">Angkatan Laut</option>
	                            <option value="satuan_AU">Angkatan Udara</option>
	                    </select>
	                    <!-- <a style="cursor: not-allowed;" id="icon_satuan">Pilih Symbol</a> -->
	                    <div style="cursor: not-allowed;" id="tambah_satuan" onclick="show_table_symbol('satuan')" class="button-secondary pure-button" >+</div>
					</div>
					<div style="width: 100%; text-align: center; height: 91px;">
						<span>Preview</span>
                            <p style="font-size: 30px; color: red;" id="prev_satuan_new"></p>
                        <span id="tmp_index_sat_new" style="display: none;"></span>
					</div>
					<div >
						<div class="form_menu">
							<span>Ukuran : </span>
							<input type="number" min="1" class="span2" value="30" oninput="event_view('satuan')" style="height: 35px;" id="symbol_size_new" placeholder="Ukuran symbol">
						</div>
						<br>
						<select id="warna_satuan_new" style="height: 35px;  width: 105px;" onchange="event_view('satuan');">
	                        <option value="red">Merah</option>
	                        <option value="blue">Biru</option>
	                    </select>
					</div>
				</div>
				<div style="float: left; display: none; width: 490px;" id="koordinate_satuan">
					<div style="float: left;width: 80%;">
						<div id="dms_satuan_koor" style="display: block; float: left;">
							<div class="form_menu">
								<label>Degrees</label>
								<input type="number" value="0" id="d_lat_satuan_koor" style="width: 80px; height: 37px;">
							</div>
							<div class="form_menu">
								<label>Minute</label>
								<input type="number" value="0" id="m_lat_satuan_koor" style="width: 80px; height: 37px;">
							</div>
							<div class="form_menu">
								<label>Seconds</label>
								<input type="number" value="0" id="s_lat_satuan_koor" style="width: 80px; height: 37px;">
							</div>
							<div class="form_menu">
								<label>Latitude</label><br>
								<select style="width: 60px; height: 37px;" id="arah_lat_satuan_koor">
									<option value="n">N</option>
									<option value="s">S</option>
								</select>
							</div>
							<br>
							<div class="form_menu">
								<label>Degrees</label>
								<input type="number" value="0" id="d_long_satuan_koor" style="width: 80px; height: 37px;">
							</div>
							<div class="form_menu">
								<label>Minute</label>
								<input type="number" value="0" id="m_long_satuan_koor" style="width: 80px; height: 37px;">
							</div>
							<div class="form_menu">
								<label>Seconds</label>
								<input type="number" value="0" id="s_long_satuan_koor" style="width: 80px; height: 37px;">
							</div>
							<div class="form_menu">
								<label>Longitude</label><br>
								<select style="width: 60px; height: 37px;" id="arah_long_satuan_koor">
									<option value="e">E</option>
									<option value="w">W</option>
								</select>
							</div>
						</div>
						<div id="lnglat_satuan_koor" style="display: none; float: left;">
							<div class="form_menu">
								<label>Latitude</label>
								<input type="number" id="latitude_satuan_koor" style="width: 150px;height: 37px;" value="0" placeholder="Latitude" title="Latitude">
							</div>
							<div class="form_menu">
								<label>Longitude</label>
								<input type="number" id="longitude_satuan_koor" style="width: 150px;height: 37px;" value="0" placeholder="Longitude" title="Longitude">
							</div>
						</div>
					</div>
					<div style="float: left; width: 20%;">
						<div class="form_menu">
							<select id="koord_satuan_pilih" onchange="pilih_jenis_koordinate('satuan',this.value)" style="width: 90px;">
								<option value="1">DMS</option>
								<option value="2">LongLat</option>
							</select>
						</div>
						<div class="form_menu">
							<div class="pure-button button-warning" style="padding: 1px; cursor: pointer; height: 35px; margin-right: 5px;width: 89px; border-radius: 0px; color: white;" title="Test koordinate" onclick="test_koordinate('satuan')">
								Test
							</div>
						</div>
						<div class="form_menu">
							<div class="pure-button button-success" style="padding: 1px; cursor: pointer; height: 35px; margin-right: 5px;width: 89px; border-radius: 0px; color: white;" title="Plot koordinate" onclick="plot_koordinate('satuan')">
								Plot
							</div>
						</div>
						<div class="form_menu">
							<div class="pure-button button-error" style="padding: 1px; cursor: pointer; height: 35px; margin-right: 5px;width: 89px; border-radius: 0px;color: white;" onclick="koordinate_change('satuan','close')" title="kembali">
								Kembali
							</div>
						</div>
					</div>
				</div>
				<div style="float: left; display: block;width: 490px;" id="content_satuan">
					<?php
						$nasat=rand(0,99);
						$no = rand(0,999);
                        $ni = rand(0,999);
					?>
					<div style="float: left; width: 80%;">
						<div class="form_menu">
							<span>Nama : </span>
							<input type="text" name="nama_satuan_new" value="<?php echo "SAT$nasat" ?>" id="nama_satuan_new">
						</div>
						<div class="form_menu">
							<span>Nomer satuan : </span>
							<input type="text" name="nomor_sat" id="nosat_new" value="<?php echo "NS$no" ?>" readonly="readonly">
						</div>
						<div class="form_menu">
							<span>Nomer atasan : </span>
							<input type="text" name="nomor_ats" id="noat_new" value="<?php echo "AT$ni" ?>" readonly="readonly">
						</div>
						<br>
						<div class="form_menu">
							<span>Waktu Berangkat : </span>
							<input type="text" class="span2" id="date_satuan_berangkat">
						</div>
						<br>
						<div class="form_menu">
							<span>Kecepatan : </span>
							<input style="height: 35px;" type="number" class="span2" id="kecepatan_satuan_new" value="40">
						</div>
						<div class="form_menu">
							<span>&nbsp;</span><br>
							<select id="jenis_kec_satuan_new" style="width: 100px;height: 35px;">
		                        <option value="kilometer">KiloMeter</option>
		                        <option value="miles">Miles</option>
		                        <option value="knot">Knot</option>
		                    </select>
						</div>
					</div>
					<div style="float: left; width: 20%;">
						<div class="form_menu">
							<div class="pure-button button-secondary" onclick="weapon_satuan('open')" style="padding: 1px; cursor: pointer; height: 35px; margin-right: 5px;width: 89px; border-radius: 0px; color: white;">Weapon</div>
						</div>
						<div class="form_menu">
							<div class="pure-button button-success" onclick="simpan_stng_satuan()" style="padding: 1px; cursor: pointer; height: 35px; margin-right: 5px;width: 89px; border-radius: 0px; color: white;">Plot</div>
						</div>
						<div class="form_menu">
							<div class="pure-button button-secondary" style="padding: 1px; cursor: pointer; height: 35px; margin-right: 5px;width: 89px; border-radius: 0px; color: white;" onclick="koordinate_change('satuan','open')">
								Manual
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /***********************************************
			 ** Menu Kekuatan
			 ** By: Muhamad Farhan Badrussalam
			 ***********************************************/ -->
			<div id="kekuatan_menu" style="float: left;padding: 10px; width: 100%; display: none;">
				<center style="font-weight: bolder; font-size: 18px;">Kekuatan</center>
				<div style="float: left; width: 43%">
					<div class="form_menu">
						<span>Nama : </span>
						<input type="text" name="nama_kekuatan_new" id="nama_kekuatan_new">
					</div>
					<div class="form_menu">
						<span>Ukuran : </span>
						<input type="number" min="1" class="span2" value="20" id="kekuatan_size_new" placeholder="Ukuran symbol">
					</div>
					<div class="form_menu">
						<span>Waktu Berangkat : </span>
						<input type="text" class="span2" id="date_kekuatan_berangkat">
					</div>
					<div class="form_menu">
						<span>Waktu Sampai : </span>
						<input type="text" class="span2" id="date_kekuatan_sampai">
					</div>
					<br>
					<div class="form_menu">
						<span>Kecepatan : </span>
						<input type="number" class="span2" id="kecepatan_kekuatan_new" value="40">
					</div>
					<div class="form_menu">
						<span>&nbsp;</span><br>
						<select id="jenis_kec_kekuatan_new" style="width: 100px;height: 30px; padding: 0px;">
	                        <option value="kilometer">KiloMeter</option>
	                        <option value="miles">Miles</option>
	                        <option value="knot">Knot</option>
	                    </select>
					</div>
					<div class="form_menu">
						<span>&nbsp;</span><br>
						<select id="warna_kekuatan_new" style="height: 30px; padding: 0px; padding-left: 37%; width: 200px;">
	                        <option value="red">Merah</option>
	                        <option value="blue">Biru</option>
	                    </select>
					</div>
				</div>
				<div style="float: left; width: 57%;">
					<div style="width: 100%; height: 32.4%; float: left;">
						<select id="jenis_kekuatan_new" style="height: 30px; width: 70%; padding: 0px;padding-left: 5px; float: left;" onchange="change_kekuatan(this.value)" >
	                        	<option value="0">-- Pilih Satuan --</option>
	                            <option value="kekuatan_AD">Angkatan Darat</option>
	                            <option value="kekuatan_AL">Angkatan Laut</option>
	                            <option value="kekuatan_AU">Angkatan Udara</option>
	                    </select>
	                    <!-- <a style="cursor: not-allowed;" id="icon_satuan">Pilih Symbol</a> -->
	                    <div style="cursor: not-allowed;" id="tambah_kekuatan" onclick="show_table_symbol('kekuatan')" class="button-secondary pure-button" >+</div>
					</div>
					<br>
					<div style="border: 1px solid black; width: 100%; float: left; height: 214px;overflow: auto; margin-top: 5px;" >
						<table width="100%">
                            <thead>
                                <td>Symbol</td>
                                <td>Jumlah</td>
                                <td>Keterangan</td>
                                <td>Action</td>
                            </thead>
                            <tbody id="kekuatan_pilih"></tbody>
                        </table>
					</div>
				</div>
				<div style="float: left; width: 100%;">
					<div class="form_menu">
						<span>Keterangan</span>
						<textarea style="margin: 0px 0px 16px; width: 752px; height: 117px;" id="keterangan_kekuatan"></textarea>
					</div>
				</div>
				<div style="float: right;">
					<div class="pure-button button-secondary" onclick="simpan_stng_kekuatan()" style="width: 190px;height: 55px;padding-top: 12px;cursor: pointer;">Plot</div>
				</div>
			</div>
			<!-- /***********************************************
			 ** Menu Situasi 
			 ** By: Muhamad Farhan Badrussalam
			 ***********************************************/ -->
			<div id="situasi_menu" style="float: left;padding: 10px; width: 100%; display: none;">
				<center style="font-weight: bolder; font-size: 18px;">Situasi</center>
				<div id="koordinate_situasi" style="display: none;">
					<div style="float: left;width: 88%;">
						<div id="dms_situasi_koor" style="display: block; float: left;">
							<div class="form_menu" style="border: 1px solid black;">
								<center><label>Latitude</label></center>
								<div class="form_menu">
									<label>Degrees</label>
									<input type="number" value="0" id="d_lat_situasi_koor" style="width: 80px; height: 37px;">
								</div>
								<div class="form_menu">
									<label>Minute</label>
									<input type="number" value="0" id="m_lat_situasi_koor" style="width: 80px; height: 37px;">
								</div>
								<div class="form_menu">
									<label>Seconds</label>
									<input type="number" value="0" id="s_lat_situasi_koor" style="width: 80px; height: 37px;">
								</div>
								<div class="form_menu" style="margin-right: 5px;">
									<label>Arah</label>
									<br>
									<select style="width: 60px; height: 37px;" id="arah_lat_situasi_koor">
										<option value="n">N</option>
										<option value="s">S</option>
									</select>
								</div>
							</div>
							<div class="form_menu" style="border: 1px solid black;">
								<center><label>Longitude</label></center>
								<div class="form_menu">
									<label>Degrees</label>
									<input type="number" value="0" id="d_long_situasi_koor" style="width: 80px; height: 37px;">
								</div>
								<div class="form_menu">
									<label>Minute</label>
									<input type="number" value="0" id="m_long_situasi_koor" style="width: 80px; height: 37px;">
								</div>
								<div class="form_menu">
									<label>Seconds</label>
									<input type="number" value="0" id="s_long_situasi_koor" style="width: 80px; height: 37px;">
								</div>
								<div class="form_menu" style="margin-right: 5px;">
									<label>Arah</label>
									<br>
									<select style="width: 60px; height: 37px;" id="arah_long_situasi_koor">
										<option value="e">E</option>
										<option value="w">W</option>
									</select>
								</div>
							</div>
						</div>
						<div id="lnglat_situasi_koor" style="display: none; float: left;">
							<div class="form_menu">
								<center><label>Latitude</label></center>
								<input type="number" id="latitude_situasi_koor" style="width: 300px;height: 37px;" value="0" placeholder="Latitude" title="Latitude">
							</div>
							<div class="form_menu">
								<center><label>Longitude</label></center>
								<input type="number" id="longitude_situasi_koor" style="width: 300px;height: 37px;" value="0" placeholder="Longitude" title="Longitude">
							</div>
						</div>
					</div>

						<div style="float: left; width: 10%;">
							<div class="form_menu">
								<select id="koord_situasi_pilih" onchange="pilih_jenis_koordinate('situasi',this.value)" style="width: 90px;">
									<option value="1">DMS</option>
									<option value="2">LongLat</option>
								</select>
							</div>
							<div class="form_menu">
								<div class="pure-button button-warning" style="padding: 1px; cursor: pointer; height: 35px; margin-right: 5px;width: 89px; border-radius: 0px; color: white;" title="Test koordinate" onclick="test_koordinate('situasi')">
									Test
								</div>
							</div>
							<div class="form_menu">
								<div class="pure-button button-success" style="padding: 1px; cursor: pointer; height: 35px; margin-right: 5px;width: 89px; border-radius: 0px; color: white;" title="Plot koordinate" onclick="plot_koordinate('situasi')">
									Plot
								</div>
							</div>
							<div class="form_menu">
								<div class="pure-button button-error" style="padding: 1px; cursor: pointer; height: 35px; margin-right: 5px;width: 89px; border-radius: 0px;color: white;" onclick="koordinate_change('situasi','close')" title="kembali">
									Kembali
								</div>
							</div>
						</div>
				</div>
				<div id="content_situasi" style="float: left; width: 100%">
					<div style="float: left; width: 42%;">
						<div class="form_menu">
							<span>Keterangan Situasi</span>
							<textarea style="margin: 0px 0px 16px; width: 314px; height: 134px;" id="keterangan_situasi_new"></textarea>
						</div>
					</div>
					<div style="float: left; width: 45%;">
						<div class="form_menu">
							<span>Keterangan Waktu</span><br>
							<select id="time_new" onchange="ket_waktu()" style="width: 150px;height: 30px; padding: 0px;padding-left: 5px;">
								<option value="now">Sekarang</option>
								<option value="custome">Pilih waktu</option>
							</select>
						</div>
	                  	<div id="f_tgl_new" style="display: none;" class="form_menu">
	                      <span>Tanggal</span>
	                      <input type="text" class="span2" id="ket_waktu_situasi_new">
	                  	</div><br><br><br>
	                  	<div class="form_menu">
							<span>Warna</span><br>
							<select id="warna_situasi_new" style="height: 30px; padding: 0px;padding-left: 5px; width: 100px;">
		                        <option value="red">Merah</option>
		                        <option value="blue">Biru</option>
		                    </select>
						</div>
						<div class="form_menu">
							<span>Ukuran : </span>
							<input type="number" min="1" max="40" class="span2" value="20" id="situasi_size_new">
						</div>
					</div>
					<div style="float:left; width: 10%;">
						<div class="form_menu">
							<br>
							<div class="pure-button button-success" onclick="simpan_stng_situasi()" style="padding: 1px; cursor: pointer; height: 35px; margin-right: 5px;width: 89px; border-radius: 0px; color: white;">Plot</div>
							<div class="pure-button button-secondary" style="padding: 1px; cursor: pointer; height: 35px; margin-right: 5px;width: 89px; border-radius: 0px; color: white;" onclick="koordinate_change('situasi','open')">
								Manual
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /***********************************************
			 ** Menu Obstacle
			 ** By: Muhamad Farhan Badrussalam
			 ***********************************************/ -->
			 <div id="obs_menu" style="float: left;padding: 10px; width: 100%; display: none;">
			 	<center style="font-weight: bolder; font-size: 18px;">Obstacle</center>
			 	<div style="width: 30%;float: left;">
			 		<div style="width: 100%;" class="form_menu">
			 			<span>Symbol</span><br>
			 			<div id="tambah_obs" style="width: 100%; cursor: pointer;" onclick="show_table_symbol('obstacle')" class="button-secondary pure-button" >+</div>
			 		</div>
				 	<div>
						<span>Preview</span>
		                    <p style="font-size: 30px; color: red; text-align: center;" id="prev_obs_new"></p>
		                <span id="tmp_index_obs_new" style="display: none;"></span>
					</div>
			 	</div>
			 	<div style="width: 35%; float: left; padding-left: 10px;">
			 		<div class="form_menu">
			 			<span>Warna</span><br>
						<select id="warna_obs_new" style="padding: 0px; padding-left: 10%; width: 200px;" onchange="event_view('obstacle');">
	                        <option value="red">Merah</option>
	                        <option value="blue">Biru</option>
	                    </select>
					</div><br><br>
					<div class="form_menu">
						<span>Ukuran : </span>
						<input type="number" min="1" class="span2" value="20" oninput="event_view('obstacle')" style="width: 200px;height: 37px;" id="obs_size_new">
					</div>
			 	</div>
			 	<div style="float: left;width: 20%;">
					<div class="pure-button button-secondary" onclick="pilih_obstacle()" style="width: 100px;height: 55px;padding-top: 12px;cursor: pointer; margin-top: 30%;">Plot</div>
				</div>
			 </div>
			 <!-- /***********************************************
			 ** Menu Manuver
			 ** By: Muhamad Farhan Badrussalam
			 ***********************************************/ -->
			 <div id="manuver_menu" style="float: left;padding: 10px; width: 100%; display: none;">
			 	<center style="font-weight: bolder; font-size: 18px;">Manuver</center>
			 	<div style="width: 30%;float: left;">
			 		<div style="width: 100%;" class="form_menu">
			 			<span>Symbol</span><br>
			 			<div id="tambah_obs" style="width: 100%; cursor: pointer;" onclick="show_table_symbol('manuver')" class="button-secondary pure-button" >+</div>
			 		</div>
				 	<div>
						<span>Preview</span>
		                    <p style="font-size: 30px; color: red; text-align: center;" id="prev_manuver_new"></p>
		                <span id="tmp_index_manuver_new" style="display: none;"></span>
					</div>
			 	</div>
			 	<div style="width: 70%; float: left; padding-left: 10px;">
			 		<div class="form_menu">
			 			<span>Nama :</span>
			 			<input type="text" name="manuver_name_new" id="manuver_name_new" style="width: 200px;height: 37px;">
			 		</div>
			 		<div class="form_menu">
			 			<span>Warna</span><br>
						<select id="warna_manuver_new" style="padding: 0px; padding-left: 10%; width: 200px;" onchange="event_view('manuver');">
	                        <option value="red">Merah</option>
	                        <option value="blue">Biru</option>
	                    </select>
					</div>
					<div class="form_menu">
						<span>Ukuran : </span>
						<input type="number" min="1" class="span2" value="20" oninput="event_view('manuver')" style="width: 200px;height: 37px;" id="manuver_size_new">
					</div>
					<div class="form_menu">
						<span>&nbsp;</span><br>
						<div class="pure-button button-secondary" onclick="simpan_stng_manuever()" style="width: 200px;height: 37px;padding-top: 3px;cursor: pointer;">Plot</div>
					</div>
			 	</div>
			 </div>
			 <!-- /***********************************************
			 ** Menu Bantuan Tembakan / Bungus
			 ** By: Muhamad Farhan Badrussalam
			 ***********************************************/ -->
			 <div id="bungus_menu" style="float: left;padding: 10px; width: 100%; display: none;">
			 	<center style="font-weight: bolder; font-size: 18px;">Bantuan Tembakan</center>
			 	<div style="float: left; display: none;width: 490px; margin-left: 100px;" id="koordinate_bungus">
			 		<div style="float: left;width: 80%;">
						<div id="dms_bungus_koor" style="display: block; float: left;">
							<div class="form_menu">
								<label>Degrees</label>
								<input type="number" value="0" id="d_lat_bungus_koor" style="width: 80px; height: 37px;">
							</div>
							<div class="form_menu">
								<label>Minute</label>
								<input type="number" value="0" id="m_lat_bungus_koor" style="width: 80px; height: 37px;">
							</div>
							<div class="form_menu">
								<label>Seconds</label>
								<input type="number" value="0" id="s_lat_bungus_koor" style="width: 80px; height: 37px;">
							</div>
							<div class="form_menu">
								<label>Latitude</label><br>
								<select style="width: 60px; height: 37px;" id="arah_lat_bungus_koor">
									<option value="n">N</option>
									<option value="s">S</option>
								</select>
							</div>
							<br>
							<div class="form_menu">
								<label>Degrees</label>
								<input type="number" value="0" id="d_long_bungus_koor" style="width: 80px; height: 37px;">
							</div>
							<div class="form_menu">
								<label>Minute</label>
								<input type="number" value="0" id="m_long_bungus_koor" style="width: 80px; height: 37px;">
							</div>
							<div class="form_menu">
								<label>Seconds</label>
								<input type="number" value="0" id="s_long_bungus_koor" style="width: 80px; height: 37px;">
							</div>
							<div class="form_menu">
								<label>Longitude</label><br>
								<select style="width: 60px; height: 37px;" id="arah_long_bungus_koor">
									<option value="e">E</option>
									<option value="w">W</option>
								</select>
							</div>
						</div>
						<div id="lnglat_bungus_koor" style="display: none; float: left;">
							<div class="form_menu">
								<label>Latitude</label>
								<input type="number" id="latitude_bungus_koor" style="width: 150px;height: 37px;" value="0" placeholder="Latitude" title="Latitude">
							</div>
							<div class="form_menu">
								<label>Longitude</label>
								<input type="number" id="longitude_bungus_koor" style="width: 150px;height: 37px;" value="0" placeholder="Longitude" title="Longitude">
							</div>
						</div>
					</div>
					<div style="float: left; width: 20%;">
						<div class="form_menu">
							<select id="koord_bungus_pilih" onchange="pilih_jenis_koordinate('bungus',this.value)" style="width: 90px;">
								<option value="1">DMS</option>
								<option value="2">LongLat</option>
							</select>
						</div>
						<div class="form_menu">
							<div class="pure-button button-warning" style="padding: 1px; cursor: pointer; height: 35px; margin-right: 5px;width: 89px; border-radius: 0px; color: white;" title="Test koordinate" onclick="test_koordinate('bungus')">
								Test
							</div>
						</div>
						<div class="form_menu">
							<div class="pure-button button-success" style="padding: 1px; cursor: pointer; height: 35px; margin-right: 5px;width: 89px; border-radius: 0px; color: white;" title="Plot koordinate" onclick="plot_koordinate('bungus')">
								Plot
							</div>
						</div>
						<div class="form_menu">
							<div class="pure-button button-error" style="padding: 1px; cursor: pointer; height: 35px; margin-right: 5px;width: 89px; border-radius: 0px;color: white;" onclick="koordinate_change('bungus','close')" title="kembali">
								Kembali
							</div>
						</div>
					</div>
			 	</div>
			 	<div style="float: left;width: 490px;margin-left: 100px;" id="content_bungus">
			 		<div style="width: 30%;float: left;">
				 		<div>
				 			<center>
								<span>Preview</span><br>
			                    <img src="image/plotting/bungus_red.png" width="50" height="50" id="prev_bungus" style="margin-top: 30px;">
			                </center>
						</div>
				 	</div>
				 	<div style="float: left; width: 50%;">
				 		<div class="form_menu">
							<span>Waktu Kemunculan : </span>
							<input type="text" class="span2" id="date_bungus" style="width: 200px;">
						</div>
						<div class="form_menu">
							<span>Ukuran : </span>
							<input type="number" min="1" class="span2" value="50" oninput="event_view('bungus')" style="width: 200px;" id="bungus_size_new">
						</div>
				 	</div>
				 	<div style="float: left;width: 20%;">
				 		<div class="form_menu">
							<div class="pure-button button-success" onclick="simpan_stng_bungus()" style="padding: 1px; cursor: pointer; height: 35px; margin-right: 5px;width: 89px; border-radius: 0px; color: white;">Plot</div>
						</div>
						<div class="form_menu">
							<div class="pure-button button-secondary" style="padding: 1px; cursor: pointer; height: 35px; margin-right: 5px;width: 89px; border-radius: 0px; color: white;" onclick="koordinate_change('bungus','open')">
								Manual
							</div>
						</div>
					</div>
			 	</div>
			 	
			 </div>
			 <!-- /***********************************************
			 ** Menu Pasukan
			 ** By: Muhamad Farhan Badrussalam
			 ***********************************************/ -->
			 <div id="pasukan_menu" style="float: left;padding: 10px; width: 100%; display: none;">
			 	<center style="font-weight: bolder; font-size: 18px;">Pasukan</center>
			 	<div style="width: 30%;float: left;">
			 		<div>
			 			<center style="height: 170px;">
							<span>Preview</span><br>
		                    <img src="image/plotting/point_blue.png" width="30" height="30" id="prev_passen" style="margin-top: 30px;">
		                </center>
		                <div class="pure-button button-secondary" onclick="simpan_stng_plot_passen()" style="width: 100%;cursor: pointer;">Plot</div>
					</div>
			 	</div>
			 	<div style="float: left; width: 30%;">
			 		<div class="form_menu">
			 			<span>Nama : </span>
			 			<input type="text" name="passen_name_new" id="passen_name_new" style="width: 200px;">
			 		</div>
			 		<div class="form_menu">
						<span>Ukuran : </span>
						<input type="number" min="1" class="span2" value="30" max="40" oninput="event_view('passen')" style="width: 200px;" id="passen_size_new">
					</div>
					<div class="form_menu">
			 			<span>Warna</span><br>
						<select id="warna_passen_new" style="padding: 0px; padding-left: 10%; width: 200px;" onchange="event_view('passen');">
	                        <option value="blue">Biru</option>
	                        <option value="red">Merah</option>
	                    </select>
					</div>
			 	</div>
			 	<div style="float: left;width: 40%;">
			 		<div class="form_menu" style="">
			 			<span style="float: left;">Nama Pasukan</span>
			 			<div id="daftar_pasukan" style="">
				 			<p>
					 			<input type="text" name="pasukan_1" id="pasukan_1" style="width: 200px;float: left;" placeholder="pasukan 1">
					 			
					 		</p>
			 			</div>
			 		</div>
			 		<p>
			 			<div id="tambah_obs" style="width: 50%; margin-left: 10px; cursor: pointer;" onclick="addRowPassen()" class="button-secondary pure-button" >+</div>
			 		</p>

			 	</div>
			 </div>
			 <!-- /***********************************************
			 ** Menu Radar
			 ** By: Muhamad Farhan Badrussalam
			 ***********************************************/ -->
			 <div id="radar_menu" style="float: left;padding: 10px; width: 100%; display: none;">
			 	<center style="font-weight: bolder; font-size: 18px;">Radar</center>
			 	<div style="float: left; width: 270px; height: 152px; padding: 5px;" id="pilih_icon">
					<div style="width: 100%; height: 32.4%;">
						<select id="jenis_radar_new" style="height: 30px; width: 70%; padding: 0px;padding-left: 5px; float: left;" onchange="change_radar(this.value)" >
	                        <option value="0">-- Pilih Satuan --</option>
	                            <option value="radar_AD">Angkatan Darat</option>
	                            <option value="radar_AL">Angkatan Laut</option>
	                            <option value="radar_AU">Angkatan Udara</option>
	                    </select>
	                    <!-- <a style="cursor: not-allowed;" id="icon_satuan">Pilih Symbol</a> -->
	                    <div style="cursor: not-allowed;" id="tambah_radar" onclick="show_table_symbol('radar')" class="button-secondary pure-button" >+</div>
					</div>
					<div style="width: 100%; text-align: center; height: 108.8px;">
						<span>Preview</span>
                            <p style="font-size: 30px; color: red;" id="prev_radar_new"></p>
                        <span id="tmp_index_radar_new" style="display: none;"></span>
					</div>
					<div >
						<select id="warna_radar_new" style="height: 35px; padding: 0px; padding-left: 40%;" onchange="event_view('radar');">
	                        <option value="red">Merah</option>
	                        <option value="blue">Biru</option>
	                    </select>
					</div>
				</div>
				<div style="float: left; width: 30%;">
					<div class="form_menu">
			 			<span>Nama Radar : </span>
			 			<input type="text" name="radar_name_new" id="radar_name_new" style="width: 200px;">
			 		</div>
			 		<div class="form_menu">
			 			<span>Radar (Nautical Miles)</span>
			 			<input type="number" name="radar_jarak" id="radar_jarak" style="width: 200px;">
			 		</div>
			 		<div class="form_menu">
						<span>Ukuran : </span>
						<input type="number" min="1" class="span2" value="30" max="40" oninput="event_view('radar')" style="width: 200px;" id="radar_size_new">
					</div>
				</div>
				<div style="float: left; width: 30%;">
					<div class="pure-button button-secondary" onclick="simpan_stng_radar()" style="width: 100px;height: 55px;padding-top: 12px;cursor: pointer; margin-top: 30%;">Plot</div>
				</div>
			 </div>
			 <!-- /***********************************************
			 ** Menu Logistik Pelabuhan
			 ** By: Muhamad Farhan Badrussalam
			 ***********************************************/ -->
			 <div id="logistik_pelabuhan_menu" style="float: left;padding: 10px; width: 100%; display: none;">
			 	<div style="float: left; width: 190px; height: 152px; padding: 5px;">
					<div style="width: 100%; height: 32.4%;">
						<select id="jenis_pelabuhan" style="height: 30px; width: 100%; padding: 0px;padding-left: 5px; float: left;" onchange="change_pelabuhan(this.value)" >
	                        <option value="null">-- Pilih Jenis --</option>
                            <option value="Umum">Umum</option>
                            <option value="Lantamal">Lantamal</option>
                            <option value="Lanal">Lanal</option>
	                    </select>
					</div>
					<div style="width: 100%; text-align: center; height: 108.8px;">
						<span>Preview</span>
                            <p style="font-size: 30px; color: red;" id="prev_pelabuhan_new"></p>
                        <span id="tmp_index_pelabuhan_new" style="display: none;"></span>
					</div>
					<div >
						<select id="warna_pelabuhan_new" style="height: 35px; padding: 0px; padding-left: 30%;" onchange="event_view('logistik_p');">
	                        <option value="red">Merah</option>
	                        <option value="blue">Biru</option>
	                    </select>
	                    <div class="pure-button button-secondary" onclick="setlogistic(0)" style="width: 100%;cursor: pointer;">Plot</div>
					</div>
				</div>
				<div style="float: left; padding-left: 10px; width: 70%;">
					<center style="font-weight: bolder; font-size: 18px;">Logistik Pelabuhan</center>
					<div class="form_menu">
						<span>Ukuran : </span>
						<input type="number" min="1" class="span2" value="20" max="40" oninput="event_view('logistik_p')" style="width: 100px;" id="pelabuhan_size_new">
					</div>
					<div class="form_menu">
						<span>Nama Pelabuhan</span>
						<input type="text" id="nama_pelabuhan_new" list="pelabuhan"  style="width: 300px; padding: 0px;margin-top: 0px; padding-left: 5px;" placeholder="Pencarian Pelabuhan" >
                        <datalist id="pelabuhan" style="height: 100px; overflow: auto;">
                        </datalist>
					</div>
					<div class="form_menu">
						<span>&nbsp;</span><br>
						<div style="cursor: pointer; width: 100px;" onclick="selectloc(docId('nama_pelabuhan_new').value,'pelabuhan')" class="button-secondary pure-button" >Tambah</div>
					</div>
					<div class="form_menu" style="width: 45%;">
						<span>Langitude : <span id="lng_view"></span></span>
					</div>
					<div class="form_menu" style="width: 45%;">
						<span>Latitude : <span id="lat_view"></span></span>
					</div>
					<div class="form_menu" style="width: 77%;">
						<center style="font-weight: bolder;">Daftar Logistik</center>
			 			<div id="daftar_pelabuhan" style="">
				 			<p>
					 			<input type="text" name="pelabuhan_nama_1" id="pelabuhan_nama_1" style="width: 160px;float: left;" placeholder="Nama">
					 			
					 			<input type="text" name="pelabuhan_nilai_1" id="pelabuhan_nilai_1" style="width: 160px;float: left;" placeholder="Nilai">
					 		</p>
			 			</div>
					</div>
					<div class="form_menu" style="width: 20%;">
						<br>
						<p>
				 			<div id="" style="width: 100%; margin-left: 10px; cursor: pointer;" onclick="addRowPelabuhan()" class="button-secondary pure-button" >+</div>
				 		</p>
					</div>
				</div>
			 </div>
			 <!-- /***********************************************
			 ** Menu Logistik bandara
			 ** By: Muhamad Farhan Badrussalam
			 ***********************************************/ -->
			 <div id="logistik_bandara_menu" style="float: left;padding: 10px; width: 100%; display: none;">
			 	<div style="float: left; width: 190px; height: 152px; padding: 5px;">
					<div style="width: 100%; height: 32.4%;">
						<select id="jenis_bandara" style="height: 30px; width: 100%; padding: 0px;padding-left: 5px; float: left;" onchange="change_bandara(this.value)" >
	                        <option value="null">-- Pilih Jenis --</option>
                            <option value="Pangkalan Udara">Pangkalan Udara</option>
                            <option value="Landasan Udara">Landasan Udara</option>
                            <option value="Landasan Rumput">Landasan Rumput</option>
                            <option value="Pelandasan Helikopter">Pelandasan Helikopter</option>
	                    </select>
					</div>
					<div style="width: 100%; text-align: center; height: 108.8px;">
						<span>Preview</span>
                            <p style="font-size: 30px; color: red;" id="prev_bandara_new"></p>
                        <span id="tmp_index_bandara_new" style="display: none;"></span>
					</div>
					<div >
						<select id="warna_bandara_new" style="height: 35px; padding: 0px; padding-left: 30%;" onchange="event_view('logistik_ba');">
	                        <option value="red">Merah</option>
	                        <option value="blue">Biru</option>
	                    </select>
	                    <div class="pure-button button-secondary" onclick="setlogistic(1)" style="width: 100%;cursor: pointer;">Plot</div>
					</div>
				</div>
				<div style="float: left; padding-left: 10px; width: 70%;">
					<center style="font-weight: bolder; font-size: 18px;">Logistik Bandara</center>
					<div class="form_menu">
						<span>Ukuran : </span>
						<input type="number" min="1" class="span2" value="20" max="40" oninput="event_view('logistik_ba')" style="width: 100px;" id="bandara_size_new">
					</div>
					<div class="form_menu">
						<span>Nama Bandara</span>
						<input type="text" id="nama_bandara_new" list="bandara"  style="width: 300px; padding: 0px;margin-top: 0px; padding-left: 5px;" placeholder="Pencarian Bandara" >
                        <datalist id="bandara" style="height: 100px; overflow: auto;">
                        </datalist>
					</div>
					<div class="form_menu">
						<span>&nbsp;</span><br>
						<div style="cursor: pointer; width: 100px;" onclick="selectloc(docId('nama_bandara_new').value,'bandara')" class="button-secondary pure-button" >Tambah</div>
					</div>
					<div class="form_menu" style="width: 45%;">
						<span>Langitude : <span id="lng_view_b"></span></span>
					</div>
					<div class="form_menu" style="width: 45%;">
						<span>Latitude : <span id="lat_view_b"></span></span>
					</div>
					<div class="form_menu" style="width: 77%;">
						<center style="font-weight: bolder;">Daftar Logistik</center>
			 			<div id="daftar_bandara" style="">
				 			<p>
					 			<input type="text" name="bandara_nama_1" id="bandara_nama_1" style="width: 160px;float: left;" placeholder="Nama">
					 			
					 			<input type="text" name="bandara_nilai_1" id="bandara_nilai_1" style="width: 160px;float: left;" placeholder="Nilai">
					 		</p>
			 			</div>
					</div>
					<div class="form_menu" style="width: 20%;">
						<br>
						<p>
				 			<div id="" style="width: 100%; margin-left: 10px; cursor: pointer;" onclick="addRowBandara()" class="button-secondary pure-button" >+</div>
				 		</p>
					</div>
				</div>
			 </div>
			 <!-- /***********************************************
			 ** Menu Logistik Bebas
			 ** By: Muhamad Farhan Badrussalam
			 ***********************************************/ -->
			 <div id="logistik_bebas_menu" style="float: left;padding: 10px; width: 100%; display: none;">
			 	<div style="float: left; padding-left: 10px; width: 30%;">
			 		<div class="form_menu">
			 			<span>Nama Logistik</span>
						<input type="text" id="nama_bebas_new"  style="width: 100%; padding: 0px;margin-top: 0px; padding-left: 5px;" >
			 		</div>
			 		<div class="form_menu">
			 			<span>Warna</span>
			 			<select id="warna_bebas_new" style="height: 35px; padding: 0px; width: 100%;" onchange="">
	                        <option value="red">Merah</option>
	                        <option value="blue">Biru</option>
	                    </select>
			 		</div>
			 		<div class="form_menu">
						<span>Ukuran : </span>
						<input type="number" min="1" class="span2" value="20" max="40" oninput="" style="width: 100px;height: 35px;" id="bebas_size_new">
					</div>
					<div class="form_menu" style="width: 100%;">
						<div class="pure-button button-secondary" onclick="simpan_log_bebas()" style="width: 100%;cursor: pointer;">Plot</div>
					</div>
			 	</div>
			 	<div style="float: left;padding-left: 10px;width: 70%;">
			 		<div class="form_menu" style="width: 77%;">
						<center style="font-weight: bolder;">Daftar Logistik</center>
			 			<div id="daftar_bebas" style="">
				 			<p>
					 			<input type="text" name="bebas_nama_1" id="bebas_nama_1" style="width: 160px;float: left;" placeholder="Nama">
					 			
					 			<input type="text" name="bebas_nilai_1" id="bebas_nilai_1" style="width: 160px;float: left;" placeholder="Nilai">
					 		</p>
			 			</div>
					</div>
					<div class="form_menu" style="width: 20%;">
						<br>
						<p>
				 			<div id="" style="width: 100%; margin-left: 10px; cursor: pointer;" onclick="addRowBebas()" class="button-secondary pure-button" >+</div>
				 		</p>
					</div>
			 	</div>
			 </div>
			 <!-- /***********************************************
			 ** Menu Text
			 ** By: Muhamad Farhan Badrussalam
			 ***********************************************/ -->
			 <div id="text_menu" style="float: left;padding: 10px; width: 100%; display: none;">
			 	<div class="form_menu" style="width: 28%;">
				 	<div style="width: 100%; text-align: center; height: 108.8px;">
						<span>Preview</span>
						<br>
	                        <p style="font-size: 12px;margin-top: 10px; color: black;" id="prev_text_new">TEXT</p>
					</div>
					<div class="form_menu" style="width: 100%;">
						<input type="color" name="warna_text_new" id="warna_text_new" onchange="event_view('text')" style="height: 35px; padding: 0px; width: 100%;">
			 		</div>
			 	</div>
			 	<div class="form_menu" style="width: 70%; padding-left: 10px;">
			 		<div class="form_menu" style="width: 100%;">
			 			<span>Masukan Text</span>
			 			<input type="text" id="nama_plot_text_new" style="height: 39px; width: 100%;"/>
			 		</div>
			 		<div class="form_menu">
			 			<span>Angel</span>
			 			<input type="number" value="0" min="-360" max="360" id="angle_plot_text_new" name="angle_plot_text_new" style="height: 39px;" oninput="event_view('text')">
			 		</div>
			 		<div class="form_menu">
			 			<span>Size</span>
			 			<input type="number" oninput="event_view('text') "value="12" min="1" max="45" name="size_plot_text_new" id="size_plot_text_new" style="height: 39px;">
			 		</div>
			 		<div class="form_menu">
			 			<span>Weight</span>
			 			<select id="weight_plot_text_new" onchange="event_view('text')" style="height: 39px; ">
                                <option value="normal" selected="selected">WEIGHT_NORMAL</option>
                                <option value="bold">WEIGHT_BOLD</option>
                                <option value="bolder">WEIGHT_BOLDER</option>
                                <option value="lighter">WEIGHT_LIGHTER</option>
                              </select>
			 		</div>
			 	</div>
			 		<div class="form_menu" style="width: 100%;">
			 			<center><div class="pure-button button-secondary" onclick="simpan_stng_plot_text()" style="width: 100%;cursor: pointer;">Plot</div></center>
			 		</div>
			 </div>
			 <!-- /***********************************************
			 ** Menu Formasi
			 ** By: Muhamad Farhan Badrussalam
			 ***********************************************/ -->
			 <div id="formasi_menu" style="float: left;padding: 10px; width: 100%; display: none;">
			 	<div style="float: left; width: 25%; padding-left: 10px;">
			 		<div class="form_menu" style="width: 100%">
			 			<select id="jenis_formasi_new" onchange="change_formasi_type(this.value)">
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
			 		</div>
			 		<div class="form_menu" style="width: 100%;">
				 		<img id="image_formasi_new" class="th" style="background-color: #aaa492; display:none; margin-left: auto; margin-right: auto;" src="image/formasi/formasi_panah.png" width="110" height="110">
			 		</div>
			 		<div style="margin-top: 10px;">
			 			<center><div class="pure-button button-secondary" onclick="simpan_formasi()" style="width: 100%;cursor: pointer;">Plot</div></center>
			 		</div>
			 	</div>
			 	<div style="float: left; width: 75%; padding-left: 10px;">
			 		<div style="width: 100%; float: left;">
			 			<div class="form_menu">
				 			<span>Waktu : </span>
							<input type="text" class="span2" id="date_formasi_new" style="width: 150px; height: 35px;">
			 			</div>
			 			<div class="form_menu">
							<span>Kecepatan : </span>
							<input type="number" class="span2" id="kecepatan_formasi_new" value="40" style="width: 70px; height: 35px;">
						</div>
			 			<div class="form_menu">
							<span>&nbsp;</span><br>
							<select id="jenis_kec_formasi_new" style="width: 90px;height: 30px; padding: 0px;height: 35px;">
		                        <option value="kilometer">KiloMeter</option>
		                        <option value="miles">Miles</option>
		                        <option value="knot">Knot</option>
		                    </select>
						</div>
			 			<div class="form_menu">
							<span>Ukuran : </span>
							<input type="number" min="1" class="span2" value="20" max="40" oninput="" style="width: 100px; height: 35px;" id="formasi_size_new">
						</div>
						<div class="form_menu">
							<span>Warna</span><br>
							<select id="warna_formasi_new" style="width: 100px;" onchange="">
		                        <option value="red">Merah</option>
		                        <option value="blue">Biru</option>
		                    </select>
						</div>
			 		</div>
			 		<div class="form_menu" id="icon_tambah_formasi_new" style="display:none; width: 100%">
			 			<a onclick="show_table_symbol('formasi')">Tambah Data</a>
			 			<span style="float: right;">0 sampai 4</span>
			 			<input type="text" name="count_formasi" id="count_formasi" style="display: none;">
			 		</div>
			 		<div class="form_menu" style="width: 100%;">
				 		<table style="display:none;" border="1" id="myTable_new" width="100%">
	                        <thead>
	                          <tr>
	                            <th>No</th>
	                            <th>Simbol</th>
	                            <th>Keterangan</th>
	                            <th>action</th>
	                          </tr>
	                        </thead>
	                        <tbody id="bodyTable_formasi">

	                        </tbody>
	                    </table>
	                    <table style="display:none;" border="1" id="formasi8_new" width="100%">
	                        <thead>
	                          <tr>
	                            <th>No</th>
	                            <th>Simbol</th>
	                            <th>Keterangan</th>
	                            <th>jarak</th>
	                            <th>arah</th>
	                            <th>action</th>
	                          </tr>
	                        </thead>
	                        <tbody id="bodyTable_formasi8">

	                        </tbody>
	                      </table>

			 		</div>
			 	</div>
			 </div>
			 <!-- /***********************************************
			 ** Menu Polyline
			 ** By: Muhamad Farhan Badrussalam
			 ***********************************************/ -->
			 <div id="polyline_menu" style="float: left;padding: 10px; width: 100%; display: none;">
			 	<div style="float: left;width: 70%;padding-left: 10px;">
			 		<div class="form_menu">
			 			<span>Weight</span>
                    	<input type="number" name="weight_poly" id="weight_poly" value="5">
			 		</div>
			 		<div class="form_menu">
			 			<span>Opacity</span>
                    	<input type="number" id="opacity_poly" value="7" max="10" min="1" style="" />
			 		</div>
			 		<div class="form_menu">
			 			<span>Color</span>
                    	<input id="color_poly" type="color" style=" padding: 0px;margin-top: 0px;" />
			 		</div>
			 		<div class="form_menu">
			 			<span>Show Distance</span>
		                <div class="switch" style="margin-top: 7px;">
		                  <center><input id="exampleCheckboxSwitch" type="checkbox" checked >
		                  <label for="exampleCheckboxSwitch"></label></center>
		                </div> 
			 		</div>
			 		<div class="form_menu" style="width: 50%;">
			 			<div style="float: left; width: 100%;" id="satuan_pl">
			                    <div class="form_menu">
			                        <span>Kilometer</span>
			                        <div class="switch small" style="padding-top: 6px;">
			                          <center><input id="kilometer" type="radio" checked name="GroupPolyline">
			                          <label for="kilometer"></label></center>
			                        </div>
			                    </div>
			                    <div class="form_menu">
			                        <span>Feet</span>
			                        <div class="switch small" style="padding-top: 6px;">
			                          <input id="feet" type="radio" name="GroupPolyline">
			                          <label for="feet"></label>
			                        </div> 
			                    </div>
			                    <div class="form_menu">
			                        <span>Nautical</span>
			                        <div class="switch small" style="padding-top: 6px;">
			                          <input id="nautical" type="radio" name="GroupPolyline">
			                          <label for="nautical"></label>
			                        </div> 
			                    </div>
			            </div>
			 		</div>
			 	</div>
			 	<div style="float: left;width: 30%;padding-left: 10px;">
			 		<div class="pure-button button-secondary" onclick="simpan_stng_poly()" style="width: 100px;height: 55px;padding-top: 12px;cursor: pointer; margin-top: 30%;">Save</div>
			 	</div>
			 </div>
			 <!-- /***********************************************
			 ** Menu Polygon
			 ** By: Muhamad Farhan Badrussalam
			 ***********************************************/ -->
			 <div id="polygon_menu" style="float: left;padding: 10px; width: 100%; display: none;">
			 	<div style="float: left;width: 70%;padding-left: 10px;">
			 		<div class="form_menu">
			 			<span>Weight</span>
			 			<input type="number" name="weight_polygon" id="weight_polygon" value="5">
			 		</div>
			 		<div class="form_menu">
			 			<span>Opacity</span>
                    	<input type="number" id="opacity_polygon" value="2" max="10" min="1" />
			 		</div>
			 		<div class="form_menu">
			 			<span>Show Distance</span>
                        <div class="switch" style="">
                          <input id="polygon_area" type="checkbox" checked >
                          <label for="polygon_area"></label>
                        </div> 
			 		</div>
			 		<div class="form_menu">
			 			<span>Color</span>
						<input type="color" name="color_polygon" id="color_polygon" style="height: 30px; padding: 0px;padding-left: 5px;">
			 		</div>
			 		<div class="form_menu">
			 			<span>Fill Color</span>
                        <input type="color" name="fillcolor_polygon" id="fillcolor_polygon" style="height: 30px; padding: 0px; padding-left: 5px;">
			 		</div>
			 	</div>
			 	<div style="float: left;width: 30%;padding-left: 10px;" id="polygon_not_arrow">
			 		<div class="pure-button button-secondary" onclick="simpan_stng_polygon()" style="width: 100px;height: 55px;padding-top: 12px;cursor: pointer; margin-top: 30%;">Plot</div>
			 	</div>
			 	<div style="float: left;width: 30%;padding-left: 10px;" id="polygon_arrow">
			 		<div class="pure-button button-secondary" onclick="straightArrow()" style="width: 100px;height: 55px;padding-top: 12px;cursor: pointer; margin-top: 30%;">Plot</div>
			 	</div>
			 	<div style="float: left;width: 30%;padding-left: 10px;" id="polygon_arrow_lengkung_bawah">
			 		<div class="pure-button button-secondary" onclick="downarrow()" style="width: 100px;height: 55px;padding-top: 12px;cursor: pointer; margin-top: 30%;">Plot</div>
			 	</div>
			 	<div style="float: left;width: 30%;padding-left: 10px;" id="polygon_arrow_lengkung_atas">
			 		<div class="pure-button button-secondary" onclick="uparrow()" style="width: 100px;height: 55px;padding-top: 12px;cursor: pointer; margin-top: 30%;">Plot</div>
			 	</div>
			 	<div style="float: left;width: 30%;padding-left: 10px;" id="polygon_arrow_manuver_atas">
			 		<div class="pure-button button-secondary" onclick="upmanuver()" style="width: 100px;height: 55px;padding-top: 12px;cursor: pointer; margin-top: 30%;">Plot</div>
			 	</div>
			 	<div style="float: left;width: 30%;padding-left: 10px;" id="polygon_arrow_manuver_bawah">
			 		<div class="pure-button button-secondary" onclick="downmanuver()" style="width: 100px;height: 55px;padding-top: 12px;cursor: pointer; margin-top: 30%;">Plot</div>
			 	</div>
			 </div>
	  	</section>
	  	<section id="content2">
	    	<div style="width: 50%; float: left;">
	    		<div class="form_menu" style="width: 100%;">
		    		<select onchange="change_list(this.value);">
		    			<option value="0">--- Pilih Menu ---</option>
		    			<option value="1">Satuan</option>
		    			<option value="2">Situasi</option>
		    			<option value="3">Kekuatan</option>
		    			<option value="4">Bantuan Tembakan</option>
		    			<option value="5">Manuver</option>
		    			<option value="6">Pasukan</option>
		    			<option value="7">Obstacle</option>
		    			<option value="8">Logistik</option>
		    			<option value="9">Radar</option>
		    			<option value="10">Text</option>
		    			<option value="11">Formasi</option>
		    		</select>
	    		</div>
	    		<div class="form_menu" style="width: 100%; height: 119px; overflow-y: auto; overflow-x: hidden;">
	    			<!-- /***********************************************
					 ** List Satuan
					 ** By: Muhamad Farhan Badrussalam
					 ***********************************************/ -->
	    			<table id="list_satuan" class="list_table_satuan" style="width: 100%; display: none;">
	    				<thead>
	    					<th width="8">No</th>
	    					<th>Symbol</th>
	    					<th style="width: 100%;">Nama Satuan</th>
	    					<th>Latitude</th>
	    					<th>Langitude</th>
	    				</thead>
	    				<tbody id="tbody_list_satuan" class="list_tbody">

	    				</tbody>
	    			</table>
	    			<!-- /***********************************************
					 ** List Situasi
					 ** By: Muhamad Farhan Badrussalam
					 ***********************************************/ -->
	    			<table id="list_situasi" class="list_table_situasi" style="width: 100%; display: none;">
	    				<thead>
	    					<th width="8">No</th>
	    					<th>Symbol</th>
	    					<th style="width: 100%">Nama Situasi</th>
	    					<th>Latitude</th>
	    					<th>langitude</th>
	    				</thead>
	    				<tbody id="tbody_list_situasi" class="list_tbody">

	    				</tbody>
	    			</table>
	    			<!-- /***********************************************
					 ** List Kekutatan
					 ** By: Muhamad Farhan Badrussalam
					 ***********************************************/ -->
	    			<table id="list_kekuatan" class="list_table_kekuatan" style="width: 100%; display: none;">
	    				<thead>
	    					<th width="8">No</th>
	    					<th style="width: 100%">Nama Kekuatan</th>
	    					<th>Latitude</th>
	    					<th>langitude</th>
	    				</thead>
	    				<tbody id="tbody_list_kekuatan" class="list_tbody">

	    				</tbody>
	    			</table>
	    			<!-- /***********************************************
					 ** List Pasukan
					 ** By: Muhamad Farhan Badrussalam
					 ***********************************************/ -->
	    			<table id="list_pasukan" class="list_table_pasukan" style="width: 100%; display: none;">
	    				<thead>
	    					<th width="8">No</th>
	    					<th>Symbol</th>
	    					<th style="width: 100%">Nama Pasukan</th>
	    					<th>Latitude</th>
	    					<th>langitude</th>
	    				</thead>
	    				<tbody id="tbody_list_pasukan" class="list_tbody">

	    				</tbody>
	    			</table>
	    			<!-- /***********************************************
					 ** List Radar
					 ** By: Muhamad Farhan Badrussalam
					 ***********************************************/ -->
	    			<table id="list_radar" class="list_table_radar" style="width: 100%; display: none;">
	    				<thead>
	    					<th width="8">No</th>
	    					<th>Symbol</th>
	    					<th style="width: 100%">Nama Radar</th>
	    					<th>Latitude</th>
	    					<th>langitude</th>
	    				</thead>
	    				<tbody id="tbody_list_radar" class="list_tbody">

	    				</tbody>
	    			</table>
	    			<!-- /***********************************************
					 ** List Bantuan Tembakan
					 ** By: Muhamad Farhan Badrussalam
					 ***********************************************/ -->
	    			<table id="list_bungus" class="list_table_bungus" style="width: 100%; display: none;">
	    				<thead>
	    					<th width="8">No</th>
	    					<th style="width: 100%">Nama Bungus</th>
	    					<th>Latitude</th>
	    					<th>langitude</th>
	    				</thead>
	    				<tbody id="tbody_list_bungus" class="list_tbody">

	    				</tbody>
	    			</table>
	    			<!-- /***********************************************
					 ** List icon manuver
					 ** By: Muhamad Farhan Badrussalam
					 ***********************************************/ -->
	    			<table id="list_manuver" class="list_table_manuver" style="width: 100%; display: none;">
	    				<thead>
	    					<th width="8">No</th>
	    					<th>symbol</th>
	    					<th style="width: 100%">Nama Manuver</th>
	    					<th>Latitude</th>
	    					<th>langitude</th>
	    				</thead>
	    				<tbody id="tbody_list_manuver" class="list_tbody">

	    				</tbody>
	    			</table>
	    			<!-- /***********************************************
					 ** List obstacle
					 ** By: Muhamad Farhan Badrussalam
					 ***********************************************/ -->
	    			<table id="list_obstacle" class="list_table_obstacle" style="width: 100%; display: none;">
	    				<thead>
	    					<th width="8">No</th>
	    					<th>symbol</th>
	    					<th style="width: 100%">Nama Obstacle</th>
	    					<th>Latitude</th>
	    					<th>langitude</th>
	    				</thead>
	    				<tbody id="tbody_list_obstacle" class="list_tbody">

	    				</tbody>
	    			</table>
	    			<!-- /***********************************************
					 ** List Logistik
					 ** By: Muhamad Farhan Badrussalam
					 ***********************************************/ -->
	    			<table id="list_logistik" class="list_table_logistik" style="width: 100%; display: none;">
	    				<thead>
	    					<th width="8">No</th>
	    					<th>symbol</th>
	    					<th style="width: 100%">Nama</th>
	    					<th>Latitude</th>
	    					<th>langitude</th>
	    				</thead>
	    				<tbody id="tbody_list_logistik" class="list_tbody">

	    				</tbody>
	    			</table>
	    			<!-- /***********************************************
					 ** List Text
					 ** By: Muhamad Farhan Badrussalam
					 ***********************************************/ -->
	    			<table id="list_text" class="list_table_text" style="width: 100%; display: none;">
	    				<thead>
	    					<th width="8">No</th>
	    					<th style="width: 100%">Text</th>
	    					<th>Latitude</th>
	    					<th>langitude</th>
	    				</thead>
	    				<tbody id="tbody_list_text" class="list_tbody">

	    				</tbody>
	    			</table>
	    			<!-- /***********************************************
					 ** List Text
					 ** By: Muhamad Farhan Badrussalam
					 ***********************************************/ -->
	    			<table id="list_formasi" class="list_table_text" style="width: 100%; display: none;">
	    				<thead>
	    					<th width="8">No</th>
	    					<th>symbol</th>
	    					<th style="width: 100%">Text</th>
	    					<th>Latitude</th>
	    					<th>langitude</th>
	    				</thead>
	    				<tbody id="tbody_list_formasi" class="list_tbody">

	    				</tbody>
	    			</table>
	    		</div>
	    	</div>
	    	<div style="float: left; width: 50%;">
	    		<!-- /***********************************************
				 ** View list formasi
				 ** By: Muhamad Farhan Badrussalam
				 ***********************************************/ -->
				 <div id="view_formasi_list" style="width: 100%; display: none;padding-left: 10px;">
				 	<div style="float: left; width: 20%; margin-top: 10px;">
				 		<div class="form_menu" style="width: 100%; height: 54px;">
	    					<!-- <center> -->
	    						<center><img src="" width="20" height="20" id="view_formasi_image"></center>
	    					<!-- </center> -->
				 		</div>
				 		<div class="form_menu">
	    					<div class="pure-button button-secondary" onclick="ubah_graph('formasi')" style="width: 75px;cursor: pointer;">Ganti</div>
	    					<input type="text" name="index_formasi" id="index_formasi" style="display: none;">
	    					<input type="text" name="index_formasi_layer" id="index_formasi_layer" style="display: none;">
	    				</div>
	    				<div class="form_menu" style="margin-top: 5px;">
	    					<div class="pure-button button-error" onclick="delete_graph('formasi')" style="width: 75px;cursor: pointer;">Hapus</div>
	    				</div>
				 	</div>
				 	<div style="float: left; width: 80%; height: 172px; overflow: auto; overflow-x: hidden;">
				 		<div class="form_menu">
							<span>Waktu : </span>
							<input type="text" class="span2" id="date_formasi_berangkat_list" style="height: 39px;">
						</div>
				 		<div class="form_menu">
							<span>Ukuran : </span>
							<input type="number" min="1" max="40" class="span2" value="20" id="formasi_size_list" style="width: 100px;height: 39px;" oninput="event_view('view_formasi')">
						</div>
						<div class="form_menu" style="">
							<span>Warna</span><br>
							<select id="warna_formasi_list" style="height: 39px; padding: 0px;padding-left: 5px; width: 90px;" onchange="event_view('view_formasi')">
		                        <option value="red">Merah</option>
		                        <option value="blue">Biru</option>
		                    </select>
						</div>
						<div class="form_menu">
							<span>Kecepatan : </span>
							<input type="number" style="width: 80px; height: 39px;" id="kecepatan_formasi_list" value="40">
						</div>
						<div class="form_menu">
							<span>&nbsp;</span><br>
							<select id="jenis_kec_formasi_list" style="width: 100px;height: 39px; padding: 0px;">
		                        <option value="kilometer">KiloMeter</option>
		                        <option value="miles">Miles</option>
		                        <option value="knot">Knot</option>
		                    </select>
						</div>
						<div class="form_menu" style="width: 100%">
				 			<a onclick="show_table_symbol('formasilist')">Tambah Data</a>
				 			<!-- <input type="text" name="count_formasi" id="count_formasi" style="display: none;"> -->
				 		</div>
				 		<div class="form_menu">
				 			<table style="display:none;" border="1" id="list_table_formasi" width="100%">
		                        <thead>
		                          <tr>
		                            <th>No</th>
		                            <th>Simbol</th>
		                            <th>action</th>
		                          </tr>
		                        </thead>
		                        <tbody id="table_list_tbody_formasi">

		                        </tbody>
		                    </table>
		                    <table style="display:none;" border="1" id="list_table_formasi8" width="100%">
		                        <thead>
		                          <tr>
		                            <th>No</th>
		                            <th>Simbol</th>
		                            <th>jarak</th>
		                            <th>arah</th>
		                            <th>action</th>
		                          </tr>
		                        </thead>
		                        <tbody id="table_list_tbody_formasi8">

		                        </tbody>
		                      </table>
				 		</div>
				 	</div>
				 </div>
	    		<!-- /***********************************************
				 ** View list kekuatan
				 ** By: Muhamad Farhan Badrussalam
				 ***********************************************/ -->
				 <div id="view_kekuatan" style="width: 100%; display: none;padding-left: 10px;">
				 	<div style="float: left; width: 20%; margin-top: 10px;">
				 		<div class="form_menu" style="width: 100%; height: 54px;">
	    					<!-- <center> -->
	    						<center><img src="image/plotting/kek_plot.png" width="20" height="20" id="view_kekuatan_image"></center>
	    					<!-- </center> -->
				 		</div>
				 		<div class="form_menu">
	    					<div class="pure-button button-secondary" onclick="ubah_graph('kekuatan')" style="width: 75px;cursor: pointer;">Ganti</div>
	    					<input type="text" name="index_kekuatan" id="index_kekuatan" style="display: none;">
	    					<input type="text" name="index_kekuatan_layer" id="index_kekuatan_layer" style="display: none;">
	    				</div>
	    				<div class="form_menu" style="margin-top: 5px;">
	    					<div class="pure-button button-error" onclick="delete_graph('kekuatan')" style="width: 75px;cursor: pointer;">Hapus</div>
	    				</div>
				 	</div>
				 	<div style="float: left; width: 80%; height: 172px; overflow: auto; overflow-x: hidden;">
				 		<div class="form_menu">
				 			<span>Nama : </span>
				 			<input type="text" name="nama_kekuatan_list" id="nama_kekuatan_list" style="height: 39px;">
				 		</div>
				 		<div class="form_menu">
							<span>Ukuran : </span>
							<input type="number" min="1" max="40" class="span2" value="20" id="kekuatan_size_list" style="width: 100px;height: 39px;" oninput="event_view('view_kekuatan')">
						</div>
				 		<div class="form_menu" style="">
							<span>Warna</span><br>
							<select id="warna_kekuatan_list" style="height: 39px; padding: 0px;padding-left: 5px; width: 100px;" onchange="event_view('view_kekuatan')">
		                        <option value="red">Merah</option>
		                        <option value="blue">Biru</option>
		                    </select>
						</div>
						<div class="form_menu">
							<span>Waktu Berangkat : </span>
							<input type="text" class="span2" id="date_kekuatan_berangkat_list" style="height: 39px;">
						</div>
						<div class="form_menu">
							<span>Kecepatan : </span>
							<input type="number" style="width: 90px;" id="kecepatan_kekuatan_list" value="40">
						</div>
						<div class="form_menu">
							<span>&nbsp;</span><br>
							<select id="jenis_kec_kekuatan_list" style="width: 100px;height: 30px; padding: 0px;">
		                        <option value="kilometer">KiloMeter</option>
		                        <option value="miles">Miles</option>
		                        <option value="knot">Knot</option>
		                    </select>
						</div>
						<div class="form_menu" style="width: 100%;">
	                  		<span>Keterangan</span>
	                  		<textarea style="margin: 0px 0px 16px; width: 290px; height: 134px;" id="keterangan_kekuatan_list"></textarea>
	                  	</div>
	                  	<div class="form_menu" style="width: 100%;">
	                  		<select id="jenis_kekuatan_list" style="height: 30px; width: 70%; padding: 0px;padding-left: 5px; float: left;" onchange="change_kekuatan_list(this.value)" >
	                        	<option value="0">-- Pilih Satuan --</option>
	                            <option value="kekuatanlist_AD">Angkatan Darat</option>
	                            <option value="kekuatanlist_AL">Angkatan Laut</option>
	                            <option value="kekuatanlist_AU">Angkatan Udara</option>
		                    </select>
		                    <div style="cursor: not-allowed;" id="tambah_kekuatan_list" onclick="show_table_symbol('kekuatan_list')" class="button-secondary pure-button" >+</div>
	                  	</div>
	                  	<div class="form_menu" style="width: 90%;">
	                  		<table width="100%">
	                            <thead>
	                                <td>Symbol</td>
	                                <td>Jumlah</td>
	                                <td>Keterangan</td>
	                                <td>Action</td>
	                            </thead>
	                            <tbody id="kekuatan_pilih_list"></tbody>
	                        </table>
	                  	</div>
				 	</div>
				 </div>
	    		<!-- /***********************************************
				 ** View list radar
				 ** By: Muhamad Farhan Badrussalam
				 ***********************************************/ -->
				 <div id="view_radar" style="width: 100%; display: none;padding-left: 10px;">
				 	<div style="float: left; width: 20%; margin-top: 10px;">
				 		<div class="form_menu" style="width: 100%; height: 54px;">
	    					<!-- <center> -->
	    						<span id="view_radar_font" style="font-weight: bolder;"></span>
	    					<!-- </center> -->
				 		</div>
				 		<div class="form_menu">
	    					<div class="pure-button button-secondary" onclick="ubah_graph('radar')" style="width: 75px;cursor: pointer;">Ganti</div>
	    					<input type="text" name="index_radar" id="index_radar" style="display: none;">
	    					<input type="text" name="index_radar_layer" id="index_radar_layer" style="display: none;">
	    				</div>
	    				<div class="form_menu" style="margin-top: 5px;">
	    					<div class="pure-button button-error" onclick="delete_graph('radar')" style="width: 75px;cursor: pointer;">Hapus</div>
	    					<input type="text" id="latitude_radar_list" style="display: none;">
	    					<input type="text" id="langitude_radar_list" style="display: none;">
	    				</div>
				 	</div>
				 	<div style="float: left; width: 80%; height: 172px; overflow: auto; overflow-x: hidden;">
				 		<div class="form_menu" style="width: 100%;">
				 			<span>Nama : </span>
				 			<input type="text" name="nama_radar_list" id="nama_radar_list">
				 		</div>
				 		<div class="form_menu" style="">
							<span>Warna</span><br>
							<select id="warna_radar_list" style="height: 39px; padding: 0px;padding-left: 5px; width: 100px;" onchange="event_view('view_radar')">
		                        <option value="red">Merah</option>
		                        <option value="blue">Biru</option>
		                    </select>
						</div>
						<div class="form_menu">
							<span>Ukuran : </span>
							<input type="number" min="1" max="40" class="span2" value="20" id="radar_size_list" style="width: 100px;height: 39px;" oninput="event_view('view_radar')">
						</div>
						<div class="form_menu">
							<span>Radar (Nautical Miles)</span>
							<input type="number" name="jarak_radar_list" id="jarak_radar_list">
						</div>
				 	</div>
				 </div>
	    		<!-- /***********************************************
				 ** View list obstacle
				 ** By: Muhamad Farhan Badrussalam
				 ***********************************************/ -->
				 <div id="view_logistik" style="width: 100%; display: none;padding-left: 10px;">
				 	<div style="float: left; width: 20%; margin-top: 10px;">
				 		<div class="form_menu" style="width: 100%; height: 54px;">
	    					<!-- <center> -->
	    						<span id="view_logistik_font" style="font-weight: bolder;"></span>
	    					<!-- </center> -->
				 		</div>
				 		<div class="form_menu">
	    					<div class="pure-button button-secondary" onclick="ubah_graph('logistik')" style="width: 75px;cursor: pointer;">Ganti</div>
	    					<input type="text" name="index_logistik" id="index_logistik" style="display: none;">
	    					<input type="text" name="index_logistik_layer" id="index_logistik_layer" style="display: none;">
	    				</div>
	    				<div class="form_menu" style="margin-top: 5px;">
	    					<div class="pure-button button-error" onclick="delete_graph('logistik')" style="width: 75px;cursor: pointer;">Hapus</div>
	    				</div>
	    				<div class="form_menu" style="margin-top: 5px;">
		    				<div id="" style="width: 75px;cursor: pointer;" onclick="addRowLogistik_edit('','')" class="button-secondary pure-button" >+</div>
		    			</div>
				 	</div>
				 	<div style="float: left; width: 80%; height: 172px; overflow: auto; overflow-x: hidden;">
				 		<div class="form_menu" style="">
							<span>Warna</span><br>
							<select id="warna_logistik_list" style="height: 39px; padding: 0px;padding-left: 5px; width: 100px;" onchange="event_view('view_logistik')">
		                        <option value="red">Merah</option>
		                        <option value="blue">Biru</option>
		                    </select>
						</div>
						<div class="form_menu">
							<span>Ukuran : </span>
							<input type="number" min="1" max="40" class="span2" value="20" id="logistik_size_list" style="width: 100px;height: 39px;" oninput="event_view('view_logistik')">
						</div>
						<div class="form_menu" style="width: 77%;">
						<center style="font-weight: bolder;">Daftar Logistik</center>
			 			<div id="daftar_logistik" style="">

			 			</div>
					</div>
				 	</div>
				 </div>
	    		<!-- /***********************************************
				 ** View list obstacle
				 ** By: Muhamad Farhan Badrussalam
				 ***********************************************/ -->
				 <div id="view_obstacle" style="width: 100%; display: none;padding-left: 10px;">
				 	<div style="float: left; width: 20%; margin-top: 10px;">
				 		<div class="form_menu" style="width: 100%; height: 54px;">
	    					<center>
	    						<span id="view_obstacle_font" style="font-weight: bolder;"></span>
	    					</center>
				 		</div>
					 	<div class="form_menu">
	    					<div class="pure-button button-secondary" onclick="ubah_graph('obstacle')" style="width: 75px;cursor: pointer;">Ganti</div>
	    					<input type="text" name="index_obstacle" id="index_obstacle" style="display: none;">
	    					<input type="text" name="index_obstacle_layer" id="index_obstacle_layer" style="display: none;">
	    				</div>
	    				<div class="form_menu" style="margin-top: 5px;">
	    					<div class="pure-button button-error" onclick="delete_graph('obstacle')" style="width: 75px;cursor: pointer;">Hapus</div>
	    				</div>
				 	</div>
    				<div style="float: left; width: 80%; height: 172px; overflow: auto; overflow-x: hidden;">
    					<div class="form_menu" style="">
							<span>Warna</span><br>
							<select id="warna_obstacle_list" style="height: 30px; padding: 0px;padding-left: 5px; width: 200px;" onchange="event_view('view_obstacle')">
		                        <option value="red">Merah</option>
		                        <option value="blue">Biru</option>
		                    </select>
						</div>
						<div class="form_menu">
							<span>Ukuran : </span>
							<input type="number" min="1" max="40" class="span2" value="20" id="obstacle_size_list" style="width: 200px;height: 39px;" oninput="event_view('view_obstacle')">
						</div>
    				</div>
				 </div>
	    		<!-- /***********************************************
				 ** View list TEXT
				 ** By: Muhamad Farhan Badrussalam
				 ***********************************************/ -->
				 <div id="view_text" style="width: 100%; display: none;padding-left: 10px;">
				 	<div style="float: left; width: 20%; margin-top: 10px;">
					 	<div style="float: left; width: 100%; margin-top: 10px;">
					 		<center>
	    						<p id="view_text_font" style="font-weight: bolder;">TEXT</p>
	    					</center>
					 	</div>
					 	<div class="form_menu">
	    					<div class="pure-button button-secondary" onclick="ubah_graph('text')" style="width: 75px;cursor: pointer;">Ganti</div>
	    					<input type="text" name="index_text" id="index_text" style="display: none;">
	    					<input type="text" name="index_text_layer" id="index_text_layer" style="display: none;">
	    				</div>
	    				<div class="form_menu" style="margin-top: 5px;">
	    					<div class="pure-button button-error" onclick="delete_graph('text')" style="width: 75px;cursor: pointer;">Hapus</div>
	    				</div>
    				</div>
    				<div style="float: left; width: 80%; height: 172px; overflow: auto; overflow-x: hidden;">
				 		<div class="form_menu">
							<span>Ukuran : </span>
							<input type="number" min="1" max="40" class="span2" value="20" id="text_size_list" style="width: 62px;height: 39px;" oninput="event_view('view_text')">
						</div>
						<div class="form_menu">
				 			<span>Angel</span>
				 			<input type="number" value="0" min="-360" max="360" id="text_angel_list" name="text_angel_list" style="width: 62px;height: 39px;" oninput="event_view('view_text')">
				 		</div>
				 		<div class="form_menu" style="">
				 			<br>
							<input type="color" name="warna_text_list" id="warna_text_list" onchange="event_view('view_text')" style="height: 35px; padding: 0px; width: 62px;height: 39px;">
				 		</div>
				 		<div class="form_menu">
				 			<span>Weight</span>
				 			<select id="text_weight_list" onchange="event_view('view_text')" style="height: 39px; ">
	                                <option value="normal" selected="selected">WEIGHT_NORMAL</option>
	                                <option value="bold">WEIGHT_BOLD</option>
	                                <option value="bolder">WEIGHT_BOLDER</option>
	                                <option value="lighter">WEIGHT_LIGHTER</option>
	                              </select>
				 		</div>
    				</div>
				 </div>
	    		<!-- /***********************************************
				 ** View list Manuver
				 ** By: Muhamad Farhan Badrussalam
				 ***********************************************/ -->
				 <div id="view_manuver" style="width: 100%; display: none;padding-left: 10px;">
				 	<div style="float: left; width: 20%; margin-top: 10px;">
				 		<div class="form_menu" style="width: 100%; height: 54px;">
	    					<center>
	    						<span id="view_manuver_font" style="font-weight: bolder;"></span>
	    					</center>
				 			
				 		</div>
				 		<div class="form_menu">
	    					<div class="pure-button button-secondary" onclick="ubah_graph('manuver')" style="width: 75px;cursor: pointer;">Ganti</div>
	    					<input type="text" name="index_bungus" id="index_manuver" style="display: none;">
	    					<input type="text" name="index_manuver_layer" id="index_manuver_layer" style="display: none;">
	    				</div>
	    				<div class="form_menu" style="margin-top: 5px;">
	    					<div class="pure-button button-error" onclick="delete_graph('manuver')" style="width: 75px;cursor: pointer;">Hapus</div>
	    				</div>
				 	</div>
				 	<div style="float: left; width: 80%; height: 172px; overflow: auto; overflow-x: hidden;">
				 		<div class="form_menu">
				 			<span>Nama</span>
				 			<input type="text" style="" name="nama_manuver_list" id="nama_manuver_list">
				 		</div>
				 		<div class="form_menu">
							<span>Ukuran : </span>
							<input type="number" min="1" max="40" class="span2" value="20" id="manuver_size_list" style="width: 62px;" oninput="event_view('view_manuver')">
						</div>
						<div class="form_menu" style="">
							<span>Warna</span><br>
							<select id="warna_manuver_list" style="height: 30px; padding: 0px;padding-left: 5px; width: 218px;" onchange="event_view('view_manuver')">
		                        <option value="red">Merah</option>
		                        <option value="blue">Biru</option>
		                    </select>
						</div>
				 	</div>
				 </div>
	    		<!-- /***********************************************
				 ** View list pasukan sendiri
				 ** By: Muhamad Farhan Badrussalam
				 ***********************************************/ -->
				 <div id="view_pasukan" style="width: 100%; display: none;padding-left: 10px;">
				 	<div style="float: left; width: 20%; margin-top: 10px;">
				 		<div class="form_menu" style="width: 100%; height: 54px;">
				 			<center><img src="" width="20" height="20" id="view_pasukan_image"></center>
				 		</div>
				 		<div class="form_menu">
	    					<div class="pure-button button-secondary" onclick="ubah_graph('pasukan')" style="width: 75px;cursor: pointer;">Ganti</div>
	    					<input type="text" name="index_bungus" id="index_pasukan" style="display: none;">
	    					<input type="text" name="index_pasukan_layer" id="index_pasukan_layer" style="display: none;">
	    				</div>
	    				<div class="form_menu" style="margin-top: 5px;">
	    					<div class="pure-button button-error" onclick="delete_graph('pasukan')" style="width: 75px;cursor: pointer;">Hapus</div>
	    				</div>
						<div class="form_menu" style="margin-top: 5px;">
							<div id="" style="width: 75px;cursor: pointer;" onclick="tambah_passen()" class="button-secondary pure-button" >+</div>
						</div>
				 	</div>
				 	<div style="float: left; width: 80%; height: 172px; overflow: auto; overflow-x: hidden;">
				 		<div class="form_menu">
				 			<span>Nama</span>
				 			<input type="text" style="" name="nama_pasukan_list" id="nama_pasukan_list">
				 		</div>
				 		<div class="form_menu">
							<span>Ukuran : </span>
							<input type="number" min="1" max="40" class="span2" value="20" id="pasukan_size_list" style="width: 62px;" oninput="event_view('view_pasukan')">
						</div>
						<div class="form_menu" style="">
							<span>Warna</span><br>
							<select id="warna_pasukan_list" style="height: 30px; padding: 0px;padding-left: 5px; width: 218px;" onchange="event_view('view_pasukan')">
		                        <option value="red">Merah</option>
		                        <option value="blue">Biru</option>
		                    </select>
						</div>
						<div class="form_menu" style="width: 300px;">
							<table style="width: 100%;">
								<thead>
									<th>Nama Pasukan</th>
									<th>Action</th>
								</thead>
								<tbody id="table_nm_pasukan">
									
								</tbody>
							</table>
						</div>
				 	</div>
				 </div>
	    		<!-- /***********************************************
				 ** View list bantuan tembakan
				 ** By: Muhamad Farhan Badrussalam
				 ***********************************************/ -->
	    		<div id="view_bungus" style="width: 100%; display: none;padding-left: 10px;">
	    			<div style="float: left; width: 20%; margin-top: 20px;">
	    				<div class="form_menu" style="width: 100%; height: 54px;">
	    					<center><img src="image/plotting/bungus_red.png" width="20" height="20" id="view_bungus_image"></center>
	    				</div>
	    				<div class="form_menu">
	    					<div class="pure-button button-secondary" onclick="ubah_graph('bungus')" style="width: 75px;cursor: pointer;">Ganti</div>
	    				</div>
	    				<div class="form_menu" style="margin-top: 10px;">
	    					<div class="pure-button button-error" onclick="delete_graph('bungus')" style="width: 75px;cursor: pointer;">Hapus</div>
	    				</div>
	    			</div>
	    			<div style="float: left; width: 70%;">
	    				<div class="form_menu">
	    					<span>Waktu kemunculan</span>
	    					<input type="text" class="span2" id="date_bungus_list">
	    					<input type="text" name="index_bungus" id="index_bungus" style="display: none;">
	    					<input type="text" name="index_bungus_layer" id="index_bungus_layer" style="display: none;">
	    				</div>
	    				<div class="form_menu">
							<span>Ukuran : </span>
							<input type="number" min="1" max="40" class="span2" value="20" id="bungus_size_list" style="width: 62px;" oninput="event_view('view_bungus')">
						</div>
	    			</div>
	    		</div>
	    		<!-- /***********************************************
				 ** View list satuan
				 ** By: Muhamad Farhan Badrussalam
				 ***********************************************/ -->
	    		<div id="view_satuan" style="width: 100%; display: none;padding-left: 10px;">
	    			<div style="float: left; width: 20%; margin-top: 20px;">
	    				<div class="form_menu" style="width: 100%; height: 54px;">
	    					<center>
	    						<span id="view_satuan_font" style="font-weight: bolder;"></span>
	    					</center>
	    				</div>
	    				<div class="form_menu">
	    					<div class="pure-button button-secondary" onclick="ubah_graph('satuan')" style="width: 75px;cursor: pointer;">Ganti</div>
	    				</div>
	    				<div class="form_menu" style="margin-top: 10px;">
	    					<div class="pure-button button-secondary" onclick="jalurnya()" style="width: 75px;cursor: pointer;">Jalur</div>
	    					<input type="text" name="index_satuan_jalur" id="index_satuan_jalur" style="display: none;">
	    					<input type="text" name="index_satuan_layer" id="index_satuan_layer" style="display: none;">
	    				</div>
	    				<div class="form_menu" style="margin-top: 10px;">
	    					<div class="pure-button button-error" onclick="delete_graph('satuan')" style="width: 75px;cursor: pointer;">Hapus</div>
	    				</div>
	    			</div>
	    			<div style="float: left; width: 70%;">
	    				<div class="form_menu">
	    					<span>Nama</span>
	    					<input type="text" name="satuan_nama_list" style="width: 107px;" id="satuan_nama_list">
	    				</div>
	    				<div class="form_menu">
	    					<span>Waktu berangkat</span>
	    					<input type="text" class="span2" id="date_satuan_berangkat_list">
	    				</div>
	    				<div class="form_menu">
							<span>Ukuran : </span>
							<input type="number" min="1" max="40" class="span2" value="20" id="satuan_size_list" style="width: 62px;" oninput="event_view('view_satuan')">
						</div>
						<div class="form_menu">
							<span>Kecepatan : </span>
							<input type="number" style="width: 90px;" class="span2" id="kecepatan_satuan_list" value="40">
						</div>
						<div class="form_menu">
							<span>&nbsp;</span><br>
							<select id="jenis_kec_satuan_list" style="width: 100px;height: 30px; padding: 0px;">
		                        <option value="kilometer">KiloMeter</option>
		                        <option value="miles">Miles</option>
		                        <option value="knot">Knot</option>
		                    </select>
						</div>
						<div class="form_menu" style="width: 263px;">
							<span>Warna</span><br>
							<select id="warna_satuan_list" style="height: 30px; padding: 0px;padding-left: 5px; width: 100px;" onchange="event_view('view_satuan')">
		                        <option value="red">Merah</option>
		                        <option value="blue">Biru</option>
		                    </select>
						</div>
	    			</div>
	    		</div>
	    		<!-- /***********************************************
				 ** View list situasi
				 ** By: Muhamad Farhan Badrussalam
				 ***********************************************/ -->
	    		<div id="view_situasi" style="width: 100%; display: none;padding-left: 10px;">
	    			<div style="float: left; width: 20%; margin-top: 20px;">
	    				<div class="form_menu" style="width: 100%; height: 54px;">
	    					<center><img src="" width="20" height="20" id="view_situasi_image"></center>
	    					<input type="text" id="index_situasi_layer" name="index_situasi_layer" style="display: none;">
	    					<input type="text" id="index_situasi" name="index_situasi" style="display: none;">
	    				</div>
	    				<div class="form_menu">
	    					<div class="pure-button button-secondary" onclick="ubah_graph('situasi')" style="width: 75px;cursor: pointer;">Ganti</div>
	    				</div>
	    				<div class="form_menu" style="margin-top: 10px;">
	    					<div class="pure-button button-error" onclick="delete_graph('situasi')" style="width: 75px;cursor: pointer;">Hapus</div>
	    				</div>
	    			</div>
	    			<div style="float: left; width: 80%; height: 172px; overflow-y: auto; overflow-x: hidden;">
	    				<div class="form_menu">
							<span>Warna</span><br>
							<select id="warna_situasi_view" style="height: 30px; padding: 0px;padding-left: 5px; width: 100px;" onchange="event_view('view_situasi')">
		                        <option value="red">Merah</option>
		                        <option value="blue">Biru</option>
		                    </select>
						</div>
						<div class="form_menu">
							<span>Ukuran : </span>
							<input type="number" min="1" max="40" class="span2" value="20" id="situasi_size_view" oninput="event_view('view_situasi')">
						</div>
	    				<div class="form_menu">
							<span>Keterangan Waktu</span><br>
							<select id="time_view" onchange="ket_waktu_view()" style="width: 100px;height: 30px; padding: 0px;padding-left: 5px;">
								<option value="custome">Pilih waktu</option>
								<option value="now">Sekarang</option>
							</select>
						</div>
	                  	<div class="form_menu" id="f_tgl_view" style="display: block;" class="form_menu">
	                      <span>Tanggal</span>
	                      <input type="text" class="span2" id="ket_waktu_situasi_view">
	                  	</div>
	                  	<div class="form_menu" style="width: 100%;">
	                  		<span>Keterangan</span>
	                  		<textarea style="margin: 0px 0px 16px; width: 290px; height: 134px;" id="keterangan_situasi_view"></textarea>
	                  	</div>
	    			</div>
	    		</div>
	    	</div>
	  	</section>
	  	<section id="content3">
	    	<div style="float: left;height: 172px; width: 38%; padding-left: 10px;overflow: auto; overflow-x: hidden;" id="view_load_peta">
	    		
	    		
	    	</div>
	    	<div style="float: left; width: 60%;height: 172px;padding-left: 10px;padding-top: 5px; overflow: auto; overflow-x: hidden;">
	    		<div class='form_menu' style=' margin-bottom: 10px;width:100%;text-align:center; font-size: 20px;'>Load Cara Bertindak</div>
	    		<div style="float: left; width: 80%; height: 122px;" id="view_load_cb">

	    		</div>
	    		<div style="float: left; width: 20%;">
	    			<div class="pure-button button-secondary" onclick="docId('view_cb').style.display='block';" style="width: 100%;cursor: pointer;">Tambah</div>
	    			<div class="pure-button button-error" onclick="hapus_cb()" style="width: 100%;cursor: pointer; margin-top: 40px;">Hapus</div>

	    		</div>
	    	</div>
	  	</section>
	  	<section id="content4">
	    	<div class="form_menu" style="width: 49%; height: 172px; border: solid black; overflow: auto; overflow-x: hidden;padding-top: 50px;padding-left: 130px;">

	    		<div style="float: left; cursor: pointer;padding: 10px; width: auto; height: auto;" onclick="docId('view_convert').style.display='block';click_menu();" class="button-secondary pure-button">
					CONVERT
				</div>
	    	</div>
	    	<div class="form_menu" style="width: 49%; height: 172px;border: solid black;padding-top: 50px;padding-left: 110px;">
	    		<div style="float: left; cursor: pointer;padding: 10px; width: auto; height: auto;" onclick="docId('view_zoomto').style.display='block';click_menu();" class="button-secondary pure-button">
					Zoom To Location
				</div>
	    	</div>
	  	</section>
	  	<section id="content5">
	  		
	  	</section>
	</div>
</div>
<div id="view_zoomto" class="view_formasi" style=" display: none;left: 650.969px; top: -508.5px; padding: 10px; ">
	<h2><b>Zoom To Location</b></h2>
	<div class="form_menu" style="width: 100%;">
		<select id="nama_kota_new" onchange="pilih_location(this.value)">
			
		</select>
	</div>

	<div id="form_pencarian">
		<div class="form_menu" style="width: 100%;">
			<p>
				<b>Nama Kota = </b>
				<span id="nama_longlat" style="font-size: 18px;">-</span>
			</p>
			<div style="overflow: auto; max-height: 120px;">
				<span><b>LongLat</b></span>
				<table style="width: 100%;">
					<tr>
						<td width="10">Longitude</td>
						<td width="5">:</td>
						<td id="long_longlat">-</td>
					</tr>
					<tr>
						<td width="10">Latitude</td>
						<td width="5">:</td>
						<td id="lat_longlat">-</td>
					</tr>
				</table>
				<span><b>Degrees Minute Seconds (DMS)</b></span>
				<table style="width: 100%;">
					<tr>
						<td width="10">Longitude</td>
						<td width="5">:</td>
						<td id="long_dms_">-</td>
					</tr>
					<tr>
						<td width="10">Latitude</td>
						<td width="5">:</td>
						<td id="lat_dms_">-</td>
					</tr>
				</table>
			</div>
			<br>
			<div style="float: right; cursor: pointer;padding: 5px; width: auto; height: auto;" onclick="docId('view_zoomto').style.display='none';click_menu();" title="convert" class="button-error pure-button">
					Close
				</div>
		</div>

	</div>
</div>
<div id="view_convert" class="view_formasi" style=" display: none;left: 650.969px; top: -508.5px; padding: 10px; overflow: auto;">
	
		<div style="width: 100%;"> 
			<div class="form_menu" style="width: 100%;">
				<h2><b>Convert</b></h2>
				<div style="width: 45%;float: left;">
	    			<select id="convert_1" onchange="pilih_convert_1(this.value)">
	    				<option value="1">LongLat</option>
	    				<option value="2">DMS</option>
	    				<option value="3">UTM</option>
	    			</select>
				</div>
				<div style="width: 10%; float: left;">
					<p>=></p>
				</div>
				<div style="width: 45%;float: left;">
					<select id="convert_2" onchange="pilih_convert_2(this.value)">
	    				<option value="0"> convert </option>
	    				<option value="1">UTM</option>
	    				<option value="2">DMS</option>
	    				<option value="3">LongLat</option>
	    			</select>
				</div>
				<div id="longlat_convert" style="display: block; width: 100%;float: left;">
					<div class="form_menu">
						<label>Longitude</label>
						<input type="number" id="longitude_convert" style="width: 150px;height: 37px;" value="0" placeholder="Longitude" title="Longitude">
					</div>
					<div class="form_menu">
						<label>Latitude</label>
						<input type="number" id="latitude_convert" style="width: 150px;height: 37px;" value="0" placeholder="Latitude" title="Latitude">
					</div>
				</div>
				<div id="dms_convert" style="display: none; width: 100%;float: left;">
					<div class="form_menu">
						<label>Degrees</label>
						<input type="number" value="0" id="d_lat_convert" style="width: 80px; height: 37px;">
					</div>
					<div class="form_menu">
						<label>Minute</label>
						<input type="number" value="0" id="m_lat_convert" style="width: 80px; height: 37px;">
					</div>
					<div class="form_menu">
						<label>Seconds</label>
						<input type="number" value="0" id="s_lat_convert" style="width: 80px; height: 37px;">
					</div>
					<div class="form_menu">
						<label>Latitude</label>
						<select style="width: 40px; height: 37px;" id="arah_lat_convert">
							<option value="n">N</option>
							<option value="s">S</option>
						</select>
					</div>
					<div class="form_menu">
						<label>Degrees</label>
						<input type="number" value="0" id="d_long_convert" style="width: 80px; height: 37px;">
					</div>
					<div class="form_menu">
						<label>Minute</label>
						<input type="number" value="0" id="m_long_convert" style="width: 80px; height: 37px;">
					</div>
					<div class="form_menu">
						<label>Seconds</label>
						<input type="number" value="0" id="s_long_convert" style="width: 80px; height: 37px;">
					</div>
					<div class="form_menu">
						<label>Longitude</label>
						<select style="width: 40px; height: 37px;" id="arah_long_convert">
							<option value="e">E</option>
							<option value="w">W</option>
						</select>
					</div>
				</div>
				<div id="utm_convert" style="display: none; width: 100%;float: left;">
					<div class="form_menu" style="margin-right: 5px;">
						<label>UTM Easting</label>
						<input type="number" value="0" id="eas_convert" style="width: 200px; height: 37px;">
					</div>
					<div class="form_menu" style="margin-right: 5px;">
						<label>UTM Zone</label>
						<input type="number" value="0" id="zone_convert" style="width: 100px; height: 37px;">
					</div>
					<div class="form_menu" style="margin-right: 5px;">
						<label>UTM Northing</label>
						<input type="number" value="0" id="nort_convert" style="width: 200px; height: 37px;">
					</div>
					<div class="form_menu" style="margin-right: 5px;">
						<label>UTM Band</label>
						<input type="text" value="M" id="band_convert" style="width: 100px; height: 37px;">
					</div>
				</div>
			</div>
			<div class="form_menu" id="menu_convert" style="width: 100%; display: block; float: left; margin-bottom: 10px;">
				<div style="float: left; cursor: pointer;padding: 10px; width: auto; height: auto;" onclick="converting()" title="convert" class="button-secondary pure-button">
					convert To <span id="button_convert"></span>
				</div>
				<div style="float: right; cursor: pointer;padding: 10px; width: auto; height: auto;" onclick="docId('view_convert').style.display='none';click_menu();" title="convert" class="button-error pure-button">
					Close
				</div>
			</div>

			
			<div style="width: 100%;float: left; font-size: 20px;">
				<input type="text" id="long_utama" style="display: none;">
				<input type="text" id="lat_utama" style="display: none;">
				<div id="hasil_dms" style="display: none;">
					<div class="form_menu">
						<label><b>DMS Longitude</b></label>
						<input type="text" id="convert_2_long" style="width: 150px;height: 37px;" placeholder="Longitude" title="Longitude" readonly>
					</div>
					<div class="form_menu">
						<label><b>DMS Latitude</b></label>
						<input type="text" id="convert_2_lat" style="width: 150px;height: 37px;" placeholder="Latitude" title="Latitude"readonly>
					</div>
				</div>
				<div id="hasil_utm" style="display: none;">
					<div class="form_menu" style="margin-right: 5px;">
						<label><b>UTM Easting</b></label>
						<input type="number" id="eas_hasil" style="width: 200px; height: 37px;" placeholder="UTM Easting" readonly>
					</div>
					<div class="form_menu" style="margin-right: 5px;">
						<label><b>UTM Zone</b></label>
						<input type="text" id="zone_hasil" style="width: 100px; height: 37px;" placeholder="UTM Zone" readonly>
					</div>
					<div class="form_menu" style="margin-right: 5px;">
						<label><b>UTM Northing</b></label>
						<input type="number" id="nort_hasil" style="width: 200px; height: 37px;" placeholder="UTM Northing" readonly>
					</div>
				</div>
				<div id="hasil_longlat" style="display: none;">
					<div class="form_menu">
						<label><b>Longitude</b></label>
						<input type="text" id="long_hasil" style="width: 150px;height: 37px;" placeholder="Longitude" title="Longitude" readonly>
					</div>
					<div class="form_menu">
						<label><b>Latitude</b></label>
						<input type="text" id="lat_hasil" style="width: 150px;height: 37px;" placeholder="Latitude" title="Latitude"readonly>
					</div>
				</div>
			</div>
		</div>
</div>