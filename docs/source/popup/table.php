<div id="table_symbol" class="overlay">
	<div class="popup">
		<h2>Daftar Symbol</h2>
		<a class="close" onclick="kembali();">&times;</a>
		<div class="content" style="max-height: 360px; overflow: auto;">
			<table id="table_symbol_satuan" style="display: none; width: 100%;">
				<thead>
		            <tr>
		                <th>Nama</th>
		                <th>Symbol</th>
		                <th>Kode</th>
		                <th>Keterangan</th>
		                <th>action</th>
		            </tr>
		        </thead>
		        <tbody id="satuan_table">
		            
		        </tbody>
		        <tfoot>

		        </tfoot>
			</table>
			<table id="table_symbol_kekuatan" style="display: none; width: 100%;">
				<thead>
		            <tr>
		            	<th></th>
		                <th>Nama</th>
		                <th>Symbol</th>
		                <th>Kode</th>
		                <th>Keterangan</th>
		                <th>Jumlah</th>
		                <th>action</th>
		                <th></th>
		            </tr>
		        </thead>
		        <tbody id="kekuatan_table">
		            
		        </tbody>
			</table>
			<table id="table_symbol_obstacle" style="display: none; width: 100%;">
				<thead>
					<tr>
						<th style="text-align: center;">No</th>
						<th style="text-align: center;">Symbol</th>
						<th style="text-align: center;">Action</th>
					</tr>
				</thead>
				<tbody id="obstacle_table">
					
				</tbody>
			</table>
			<table id="table_symbol_manuver" style="display: none; width: 100%;">
				<thead>
					<tr>
						<th>Nama</th>
		                <th>Symbol</th>
		                <th>Kode</th>
		                <th>Keterangan</th>
		                <th>action</th>
					</tr>
				</thead>
				<tbody id="manuver_table">
					
				</tbody>
			</table>
			<table id="table_symbol_radar" style="display: none; width: 100%;">
				<thead>
					<tr>
						<th>Nama</th>
		                <th>Symbol</th>
		                <th>Kode</th>
		                <th>Keterangan</th>
		                <th>action</th>
					</tr>
				</thead>
				<tbody id="radar_table">
					
				</tbody>
			</table>
			<table id="table_symbol_formasi" style="display: none; width: 100%;">
				<thead>
					<tr>
		            	<th></th>
						<th>Nama</th>
		                <th>Symbol</th>
		                <th>Kode</th>
		                <th>Keterangan</th>
		                <th>action</th>
					</tr>
				</thead>
				<tbody id="formasi_table">
					
				</tbody>
			</table>
		</div>
		<div id="kekuatan_simpan" style="display: none;">
			<br>
			<div class="button-secondary pure-button" style="cursor: pointer;" onclick="simpan_kekuatan_data()">Simpan</div>
			<br>
		</div>
		<div id="kekuatanlist_simpan" style="display: none;">
			<br>
			<div class="button-secondary pure-button" style="cursor: pointer;" onclick="simpan_kekuatan_list()">Simpan</div>
			<br>
		</div>
		<div id="formasi_simpan" style="display: none;">
			<br>
			<div class="button-secondary pure-button" style="cursor: pointer;" onclick="simpan_formasi_data()">Simpan</div>
			<br>
		</div>
		<div id="formasilist_simpan" style="display: none;">
			<br>
			<div class="button-secondary pure-button" style="cursor: pointer;" onclick="simpan_formasi_list()">Simpan</div>
			<br>
		</div>
	</div>
</div>

<div id="table_icon" class="overlay">
    <div class="popup">
        <h2>Daftar Symbol</h2>
        <a class="close" href="#" id="close_table" onclick="close_pop();">&times;</a>
        <div class="content">
            <input type="text" id="status_table" style="display: none;">
            <div id="plot_kekuatan" style="float: right;">
            	<label>
            		Jumlah
            		<input type="Number" name="jumlah_symbol_kekuatan" id="jumlah_symbol_kekuatan">
            	</label>
            </div>
            <div id="atas_table">
	            <table width="100%" >
	            	<thead>
		            	<tr>
		            		<td>Nama</td>
		            		<td>Symbol</td>
		            		<td>Kode</td>
		            		<td>Keterangan</td>
		            		<td>Action</td>
		            	</tr>
	            	</thead>
	            </table>
            </div>
            <div style="max-height: 350px;overflow: auto;" for="atas_table" id="isi_table">
            	<table width="100%" >
	            	<!-- <tbody id="isi_symbol">

	            	</tbody> -->
	            </table>
            </div>


            <script type="text/javascript">

            //TAMBAH ZAME
            document.getElementById("icon_tambah_formasi").onclick = function() {
              document.getElementById("status_table").value = document.getElementById("jenis_formasi").value;
              var status_table = document.getElementById("status_table").value;
              status_table = status_table.split("_");
              document.getElementById("isi_table").style.maxHeight = "350px";
              document.getElementById("close_table").href = "#set_formasi";
              document.getElementById("plot_kekuatan").style.display = "none";
              tmp_string_feature = "";
              create_table_symbol(status_table);

            }
            	document.getElementById("icon_manuever").onclick = function() {
            		document.getElementById("status_table").value = "manuever_AU";
	            	var status_table = document.getElementById("status_table").value;
	            	status_table = status_table.split("_");
	            	document.getElementById("isi_table").style.maxHeight = "350px";
	            	document.getElementById("close_table").href = "#set_manuever";
	            	document.getElementById("plot_kekuatan").style.display = "none";
					tmp_string_feature = "manuever";
	            	create_table_symbol(status_table);
            	}
            	document.getElementById("icon_radar").onclick = function() {
            		document.getElementById("status_table").value = document.getElementById("jenis_radar").value;
	            	var status_table = document.getElementById("status_table").value;
	            	status_table = status_table.split("_");
	            	document.getElementById("isi_table").style.maxHeight = "350px";
	            	document.getElementById("close_table").href = "#set_radar";
	            	document.getElementById("plot_kekuatan").style.display = "none";
					tmp_string_feature = "radar";
	            	create_table_symbol(status_table);
            	}
            	
            	document.getElementById("icon_kekuatan").onclick = function(){
                    document.getElementById("status_table").value = document.getElementById("jenis_kekuatan").value;
            		var status_table = document.getElementById("status_table").value;
	            	status_table = status_table.split("_");
	            	document.getElementById("plot_kekuatan").style.display = "block";
	            	document.getElementById("isi_table").style.maxHeight = "280px";
	            	document.getElementById("jumlah_symbol_kekuatan").value = "0";
	            	document.getElementById("close_table").href = "#set_kekuatan";
					tmp_string_feature = "";
	            	create_table_symbol(status_table);
            	}
				function tmp_font_func(z, a, res){
					return "<tr>"+
						"<td width='20%'>"+z.nama+"</td>"+
						"<td id='ad"+a+"' style='font-size: 30px; font-family: "+z.nama+";'>"+res+"</<td>"+
						"<td>"+z.index+"</<td>"+
						"<td width='37%'>"+z.keterangan+"</<td>"+
						"<td><a onclick='pilih_symbol("+a+")'>Pilih</a></<td>"+
					   "</tr>";
				}
            	function create_table_symbol(status_table){
            		var data_table_font_ad = "";
            		var data_table_font_al = "";
            		var data_table_font_au = "";
            		var data_table_font_gab = "";
					var data_selected_manuever = ['6', 'e', 'f', 'g', 'h', 'i', 'j', 's', 't', '¯', '°'];
				    for(var a =0; a<data_font.length;a++){
				    	if(tmp_string_feature=="manuever" && data_font[a].nama=="TAKTIS_AU"){
							// console.log("manuever");
							var res = String.fromCharCode(Number(data_font[a].index));
							if(data_font[a].grup == 3 && data_selected_manuever.includes(res)==true){
								// console.log("if");
								var font = "'"+res+"'";
								var tmp_font_au = tmp_font_func(data_font[a], a, res);
								data_table_font_au = data_table_font_au + tmp_font_au;
							}else{
								// console.log("else");
							}
						}else if(tmp_string_feature=="radar" && data_font[a].keterangan!=null){
							// console.log("radar");
							var tmp_string_keterangan_gab = data_font[a].keterangan.toLowerCase();
							var tmp_bool_keterangan_gab = tmp_string_keterangan_gab.indexOf("radar");
							if(tmp_bool_keterangan_gab >= 0){
								if(data_font[a].grup == 1){
									var res = String.fromCharCode(Number(data_font[a].index));
									var font = "'"+res+"'";
									var tmp_font_ad = tmp_font_func(data_font[a], a, res);
									data_table_font_ad = data_table_font_ad + tmp_font_ad;
								}else if(data_font[a].grup == 2){
									var res = String.fromCharCode(Number(data_font[a].index));
									var tmp_font_al = tmp_font_func(data_font[a], a, res);
									data_table_font_al = data_table_font_al + tmp_font_al;
								}else if(data_font[a].grup == 3){
									var res = String.fromCharCode(Number(data_font[a].index));
									var tmp_font_au = tmp_font_func(data_font[a], a, res);
									data_table_font_au = data_table_font_au + tmp_font_au;
								}else if(data_font[a].grup == 4){
									var res = String.fromCharCode(Number(data_font[a].index));
									var tmp_font_gab = tmp_font_func(data_font[a], a, res);
									data_table_font_gab = data_table_font_gab + tmp_font_gab;
								}
							}
						}else if(tmp_string_feature!="radar" && tmp_string_feature!="manuever"){
							// console.log("else");
							if(data_font[a].grup == 1){
								var res = String.fromCharCode(Number(data_font[a].index));
								var font = "'"+res+"'";
								var tmp_font_ad = tmp_font_func(data_font[a], a, res);
								data_table_font_ad = data_table_font_ad + tmp_font_ad;
							}else if(data_font[a].grup == 2){
								var res = String.fromCharCode(Number(data_font[a].index));
								var tmp_font_al = tmp_font_func(data_font[a], a, res);
								data_table_font_al = data_table_font_al + tmp_font_al;
							}else if(data_font[a].grup == 3){
								var res = String.fromCharCode(Number(data_font[a].index));
								var tmp_font_au = tmp_font_func(data_font[a], a, res);
								data_table_font_au = data_table_font_au + tmp_font_au;
							}
						}
				    }
				    if(status_table[1] == "AD"){
				    	document.getElementById("isi_symbol").innerHTML = data_table_font_ad;
				    }else if(status_table[1] == "AL"){
				    	document.getElementById("isi_symbol").innerHTML = data_table_font_al;
				    }else if(status_table[1] == "AU"){
				    	document.getElementById("isi_symbol").innerHTML = data_table_font_au;
				    }else if(status_table[1] == "GAB"){
				    	document.getElementById("isi_symbol").innerHTML = data_table_font_gab;
				    }
            	}
            </script>
        </div>
    </div>
</div>
