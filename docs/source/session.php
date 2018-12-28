<?php

	session_start();
	include 'config/fungsi_crud.php';
	if(isset($_GET['token']) || isset($_GET['link'])){

		$_SESSION['token'] = $_GET['token'];
		$_SESSION['dokumen'] = $_GET['scen'];
		$_SESSION['type_login'] = $_GET['link'];
		$_SESSION['jenis_login'] = $_GET['kondisi'];

		$user_login = $konek->login();
		$scenario_akti = $konek->get_scenario_aktif();

		$_SESSION['arr_user'] = json_encode($user_login);
		$_SESSION['scenario_aktif'] = json_encode($scenario_akti);
		if(isset($user_login)){
			foreach ($user_login as $key) {
				$_SESSION['id_user'] = $key["id"];
				$_SESSION['bagian'] = $key["bagian"];
				$_SESSION['jabatan'] = $key["jabatan"];
				$_SESSION['asisten'] = $key["nama_asisten"];
				$_SESSION['id_asisten'] = $key["asisten"];
				$_SESSION['name'] = $key["name"];
				// echo($_SESSION['id_user']);
			}
			header('Location: index.php');
		}else{
			header("Location: http://192.168.0.190:81/eppkm/public/master/login");
		}
	}else{
		if(isset($_SESSION['token']) && isset($_SESSION['dokumen'])){

		}else{
			// header("Location: http://192.168.0.190:81/eppkm/public/master/login");
			header("Location: login.php");
		}
	}

?>