<?php
	require "config/fungsi_crud.php";
	header("Access-Control-Allow-Origin: *");

	$status = $_POST['status'];

	if($status == "simpan"){
		$dokumen = $_POST['document'];
		$data_satuan = $_POST['satuan'];
		$data_kekuatan = $_POST['kekuatan'];
		$data_situasi = $_POST['situasi'];
		$data_obstacle = $_POST['obstacle'];
		$data_manuver = $_POST['manuver'];
		$data_bungus = $_POST['bungus'];
		$data_passen = $_POST['passen'];
		$data_radar = $_POST['radar'];
		$data_logistik = $_POST['logistik'];
		$data_formasi = $_POST['formasi'];
		$data_tool = $_POST['tool'];
		$data_text = $_POST['text'];
		$a = 0;
		$db_dokumen = $konek->getdokumen($dokumen[0],$dokumen[1],$dokumen[2],$dokumen[3]);
		// var_dump();
		if($db_dokumen==false){
			$data_dokumen = array(
				'id_user' => $dokumen[0],
				'nama_dokumen' => $dokumen[1],
				'type_login' => $dokumen[2],
				'scenario' => $dokumen[3]
			);
			// var_dump($data_dokumen);
			$konek->insert('p_dokumen',$data_dokumen,$a);
			$db_dokumen = $konek->getdokumen($dokumen[0],$dokumen[1],$dokumen[2],$dokumen[3]);
		}else{
			$hapus_data = $konek->hapus_allData($dokumen[0],$db_dokumen[0]["id"]);
		}
		$a++;
		if(is_array($data_satuan)){
			foreach ($data_satuan as $key) {
				
				$datasavesatuan = array(
					'id_user' => $key[0],
					'id_symbol' => $key[1],
					'dokumen' => $db_dokumen[0]["id"],
					'nama' => $key[3],
					'lat_y' => $key[4],
					'lng_x' => $key[5],
					'style' => $key[7],
					'info' => $key[8],
					'symbol' => $key[6]
				);
				$hasil = $konek->insert('p_data_satuan',$datasavesatuan,$a);
				$a++;
			}
		}
		if(is_array($data_kekuatan)){
			foreach ($data_kekuatan as $key) {
				$datasavekekuatan = array(
					'id_user' => $key[0],
					'dokumen' => $db_dokumen[0]["id"],
					'nama' => $key[2],
					'lat_y' => $key[3],
					'lng_x' => $key[4],
					'info_kekuatan' => $key[5],
					'rincian' => $key[6],
					'size' => $key[7]
				);
				$hasil = $konek->insert('p_data_kekuatan',$datasavekekuatan,$a);
				$a++;
			}
		}
		if(is_array($data_situasi)){
			foreach ($data_situasi as $key) {
				$datasavesituasi = array(
					'id_user' => $key[0],
					'dokumen' => $db_dokumen[0]["id"],
					'nama' => $key[2],
					'lat_y' => $key[3],
					'lng_x' => $key[4],
					'info_situasi' => $key[6],
					'symbol_situasi' => $key[7]
				);
				$hasil = $konek->insert('p_data_situasi', $datasavesituasi,$a);
				$a++;
			}
		}
		if(is_array($data_obstacle)){
			foreach ($data_obstacle as $key) {
				$datasaveobstacle = array(
					'id_user' => $key[0],
					'dokumen' => $db_dokumen[0]["id"],
					'nama' => $key[2],
					'lat_y' => $key[3],
					'lng_x' => $key[4],
					'info_obstacle' => $key[5],
					'symbol' => $key[6]
				);
				$hasil = $konek->insert('p_data_obstacle', $datasaveobstacle,$a);
				$a++;
			}
		}
		if(is_array($data_manuver)){
			foreach ($data_manuver as $key) {
				$datasavemanuver = array(
					'id_user' => $key[0],
					'dokumen' => $db_dokumen[0]["id"],
					'nama' => $key[2],
					'lat_y' => $key[3],
					'lng_x' => $key[4],
					'nama_manuver' => $key[5],
					'info_manuver' => $key[6],
					'symbol' => $key[7],
					'warna' => $key[8],
					'size' => $key[9]
				);
				$hasil = $konek->insert('p_data_manuver', $datasavemanuver, $a);
				$a++;
			}
		}
		if(is_array($data_bungus)){
			foreach ($data_bungus as $key) {
				$datasavebungus = array(
					'id_user' => $key[0],
					'dokumen' => $db_dokumen[0]["id"],
					'nama' => $key[2],
					'lat_y' => $key[3],
					'lng_x' => $key[4],
					'info_bungus' => $key[5],
					'symbol' => $key[6]
				);
				$hasil = $konek->insert('p_data_bungus', $datasavebungus, $a);
				$a++;
			}
		}
		if(is_array($data_passen)){
			foreach ($data_passen as $key) {
				$datasavepassen = array(
					'id_user' => $key[0],
					'dokumen' => $db_dokumen[0]["id"],
					'nama' => $key[2],
					'lat_y' => $key[3],
					'lng_x' => $key[4],
					'info_passen' => $key[5],
					'symbol' => $key[6],
					'warna' => $key[7],
					'nama_passen' => $key[8],
					'size' => $key[9]
				);
				$hasil = $konek->insert('p_data_passen', $datasavepassen, $a);
				$a++;
			}
		}
		if(is_array($data_radar)){
			foreach ($data_radar as $key) {
				$datasaveradar = array(
					'id_user' => $key[0],
					'dokumen' => $db_dokumen[0]["id"],
					'nama' => $key[2],
					'lat_y' => $key[3],
					'lng_x' => $key[4],
					'info_radar' => $key[5],
					'symbol' => $key[6],
					'info_symbol' => $key[7]
				);
				$hasil = $konek->insert('p_data_radar', $datasaveradar, $a);
				$a++;
			}
		}
		if(is_array($data_logistik)){
			foreach ($data_logistik as $key) {
				$datasavelogis = array(
					'id_user' => $key[0],
					'dokumen' => $db_dokumen[0]["id"],
					'nama' => $key[2],
					'lat_y' => $key[3],
					'lng_x' => $key[4],
					'info_logistik' => $key[5],
					'isi_logistik' => $key[6],
					'jenis' => $key[7],
					'warna' => $key[8],
					'symbol' => $key[9],
					'size' => $key[10]
				);
				$hasil = $konek->insert('p_data_logistik', $datasavelogis, $a);
				$a++;
			}
		}
		if(is_array($data_formasi)){
			foreach ($data_formasi as $key) {
				$datasaveformasi = array(
					'id_user' => $key[0],
					'dokumen' => $db_dokumen[0]["id"],
					'nama' => $key[2],
					'lat_y' => $key[3],
					'lng_x' => $key[4],
					'info_formasi' => $key[5],
					'tgl_formasi' => $key[6],
					'kecepatan' => $key[7],
					'size' => $key[8],
					'jenis_formasi' => $key[9],
					'symbol' => $key[10],
					'warna' => $key[11]
				);
				$hasil = $konek->insert('p_data_formasi', $datasaveformasi, $a);
				$a++;
			}
		}
		if(is_array($data_tool)){
			foreach ($data_tool as $key) {
				$datasavetool = array(
					'id_user' => $key[0],
					'dokumen' => $db_dokumen[0]["id"],
					'nama' => $key[2],
					'geometry' => $key[3],
					'properties' => $key[4],
					'type' => $key[5]
				);
				$hasil = $konek->insert('p_data_tool', $datasavetool, $a);
				$a++;
			}
		}
		if(is_array($data_text)){
			foreach ($data_text as $key) {
				$datasavetext = array(
					'id_user' => $key[0],
					'dokumen' => $db_dokumen[0]["id"],
					'nama' => $key[2],
					'lat_y' => $key[3],
					'lng_x' => $key[4],
					'info_text' => $key[5],
					'symbol' => $key[6]
				);
				$hasil = $konek->insert('p_data_text', $datasavetext, $a);
				$a++;
			};
		}
	}else if($status == "hapus"){
		$dokumen = $_POST['document'];
		$id_user = $_POST['id_user'];
		$type = $_POST['type'];
		$skenario = $_POST['skenario'];
		$db_dokumen = $konek->getdokumen($id_user,$dokumen,$type,$skenario);
		if($db_dokumen){
			$hapus_data = $konek->hapus_allData($id_user,$db_dokumen[0]["id"]);
			
		}
		// var_dump($cek_data);
	} else  if($status == "simpan_kota"){
        $kota = $_POST['kota'];
        //    $data_satuan = $_POST['satuan'];
        //    $data_kekuatan = $_POST['kekuatan'];
        $a = 0;
            $data_kota = array(
                'id' => $kota[0],
                'index' => $kota[1],
                'nama_kota' => $kota[2],
                'koorx' => $kota[3],
                'koory' => $kota[4],
                'latdeg' => $kota[5],
                'latmin' => $kota[6],
                'latsec' => $kota[7],
                'londeg' => $kota[8],
                'lonmin' => $kota[9],
                'lonsec' => $kota[10],
                'arah' => $kota[11]

            );
            $konek->insert('data_kota',$data_kota,$a);

        $a++;
    }
?>