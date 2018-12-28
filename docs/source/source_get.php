<?php 
	require "config/fungsi_crud.php";
	header("Access-Control-Allow-Origin: *");

	$status = $_POST['status'];

	if($status=="layer_peta_layer_get_services"){
		$services = $_POST['serv'];
		$id_service = explode(",", $services);
		$arr_service = array();
		foreach ($id_service as $key) {
			$data_2 = $konek->get_services($key);
			array_push($arr_service , $data_2);
			# code...
		}
		
		echo json_encode($arr_service);
	}
	if($status=="layer_peta_layer_get_scenario_aktif"){
		echo json_encode($konek->get_scenario_aktif());
	}
	if($status=="ambil_font"){
		$ambil_font = $konek->getFont();
		echo json_encode($ambil_font);
		// echo "string";
	}
	if($status == "ambil_waktu"){
		$alldata = array();
        // array_push($alldata, "haii");
        date_default_timezone_set('Asia/jakarta');
        $serverdate = date('d-m-Y H:i:s');
        // $serverdate = $current_date->format('Y,m-1,d,H,i,s');
        $zone = "WIB";
        array_push($alldata, $serverdate,$zone);
        echo json_encode($alldata);
	}
	if($status == "data_pel"){
		$data_pel = $konek->getDataPelabuhan($_POST['filter']);
		echo json_encode($data_pel);
	}
	if($status == "data_bandara"){
		$data_bandara = $konek->getDataBandara($_POST['filter']);
		echo json_encode($data_bandara);
	}
	if($status == "ambil_dokumen"){
		$id_user = $_POST['id_user'];
		$data_dokumen = $konek->getDataDokumen($id_user);
		echo json_encode($data_dokumen);
	}
	if($status == "ambil_kota"){
		$data_kota = $konek->getDataKota();
		echo json_encode($data_kota);
	}
	if ($status == "ambil_idkota"){
		$data_idkota = $konek->getIDKota();
		echo json_encode($data_idkota);
	}

	if($status == "ambil_asisten"){
		$data_asisten = $konek->getasisten();
		echo json_encode($data_asisten);
	}

	if($status == "ambil_user_asop"){
		$user = $_POST['user'];
		$asis = $_POST['asisten'];
		$data_asop = $konek->ambil_user_asops($user,$asis);
		echo json_encode($data_asop);
	}

	if($status == "ambil_dokumen_peta"){
		$user = $_POST['user'];
		$type = $_POST['type_menu'];
		$id_skenario = $_POST['id_skenario'];
		$data_3 = $konek->ambil_dokumen_peta($user,$type,$id_skenario);
		echo json_encode($data_3);
	}

	if($status == "master_bagian"){
		$data = $konek->getbagian();
		echo json_encode($data);
	}

	if($status == "master_user"){
		$selectscen = $konek->selectscen($_POST['token'],$_POST['id_bagian']);
		echo json_encode($selectscen);
	}

	if($status == "master_skenario"){
		$id = $_POST['id_user'];
		$sken = $_POST['skenario_aktif'];
		$scenario_ = $konek->scenario($id,$sken);
		echo json_encode($scenario_);
	}

	if($status == "ambil_cb_lain"){
		$bagian = $_POST['bagian'];
		$jabatan = $_POST['jabatan'];
		$scenario = $_POST['scenario'];

		$data = $konek->getdataawal($bagian,$jabatan,$scenario);
		echo json_encode($data);
	}

	if($status == "ambil_weapon_torpedo"){
		$data = $konek->getweapon("torpedo");

		echo json_encode($data);
	}

	if($status == "ambil_weapon_missile"){
		$data = $konek->getweapon("missile");

		echo json_encode($data);
	}

	if($status == "ambil_weapon_gun"){
		$data = $konek->getweapon("gun");

		echo json_encode($data);
	}

	if($status == "ambil_weapon_bomb"){
		$data = $konek->getweapon("bomb");

		echo json_encode($data);
	}

	if($status == "ambil_weapon_mine"){
		$data = $konek->getweapon("mine");

		echo json_encode($data);
	}

if($status == "ambil_load_dokumen"){
		$id_user = $_POST['id_user'];
		$nama = $_POST['nama_dokumen'];
		$type = $_POST['type'];
		$skenario = $_POST['skenario'];

		$db_dokumen = $konek->getdokumen($id_user,$nama,$type,$skenario);
		$data_load_all = array();
		// AMBIL DATA SETIAP PLOTTING
		$data_load_satuan = $konek->getDataSatuan($id_user,$db_dokumen[0]["id"]);
		$data_load_kekuatan = $konek->getDataKekuatan($id_user,$db_dokumen[0]["id"]);
		$data_load_situasi = $konek->getDataSituasi($id_user,$db_dokumen[0]["id"]);
		$data_load_obstacle = $konek->getDataObstacle($id_user,$db_dokumen[0]["id"]);
		$data_load_manuver = $konek->getDataManuver($id_user,$db_dokumen[0]["id"]);
		$data_load_bungus = $konek->getDataBungus($id_user,$db_dokumen[0]["id"]);
		$data_load_passen = $konek->getDataPassen($id_user,$db_dokumen[0]["id"]);
		$data_load_radar = $konek->getDataRadar($id_user,$db_dokumen[0]["id"]);
		$data_load_logis = $konek->getDataLogis($id_user,$db_dokumen[0]["id"]);
		$data_load_formasi = $konek->getDataFormasi($id_user,$db_dokumen[0]["id"]);
		$data_load_tool = $konek->getDataTool($id_user,$db_dokumen[0]["id"]);
		$data_load_text = $konek->getDataText($id_user,$db_dokumen[0]["id"]);

		array_push($data_load_all, 
					$data_load_satuan,
					$data_load_kekuatan,
					$data_load_situasi,
					$data_load_obstacle,
					$data_load_manuver,
					$data_load_bungus,
					$data_load_passen,
					$data_load_radar,
					$data_load_logis,
					$data_load_formasi,
					$data_load_tool,
					$data_load_text
				);

		echo json_encode($data_load_all);
	}
?>	