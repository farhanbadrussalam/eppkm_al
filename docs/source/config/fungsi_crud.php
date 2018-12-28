<?php 
	require_once "koneksi.php";

	Class Crud extends koneksi
	{
		public function insert($namatable,$param,$i){
			$total = count($param);
		    $valueparam = array();
		    $query = "INSERT INTO " . $namatable . "(";
		    $loop = 0;
		    foreach ($param as $key => $value) {
		      $query = $query . $key;
		      if ($loop<$total-1) {
		        $query = $query . ', ';
		      }
		      $loop++;
		    }
		    $query = $query . ') VALUES(';
		    $loop = 0;
		    foreach ($param as $key => $value) {
		      $loop++;
		      $query = $query . '$'.$loop;
		      if ($loop<$total) {
		        $query = $query . ', ';
		      }
		      array_push($valueparam,$value);
		    }
		    $query = $query . ')';
		    // var_dump($valueparam);
		    // // var_dump($value);
		    // // die();
		    // var_dump($valueparam);die();
		    $hasil = pg_prepare(Parent::get_dbcon(),"my_insert".$i,$query);
		    $hasil = pg_execute(Parent::get_dbcon(),"my_insert".$i,$valueparam);
		    if ($hasil) {
		      return true;
		      pg_close(get_dbcon());
		    }
		}

		public function getFont(){
			$query = "select * from font_taktis order by id asc";
		    $hasil = pg_query(Parent::get_dbcon(),$query);
		    return pg_fetch_all($hasil);
		}
		public function getdokumen($id_user,$dokumen,$type,$id_skenario){
			$query = "select * from p_dokumen where id_user = ".$id_user." and nama_dokumen = '".$dokumen."' and type_login = '".$type."' and scenario = '".$id_skenario."' order by id asc";
		    $hasil = pg_query(Parent::get_dbcon(),$query);
		    return pg_fetch_all($hasil);
		    // return $query;
		}
		public function getDataPelabuhan($filter){
			$query = "select * from data_pelabuhan where kategori = '".$filter."' order by nama";
		    $hasil = pg_query(Parent::get_dbcon(),$query);
		    return pg_fetch_all($hasil);
		}
		public function getDataBandara($filter){
			$query = "select * from data_airport where kategori = '".$filter."' order by \"AERODROME\" ";
		    $hasil = pg_query(Parent::get_dbcon(),$query);
		    return pg_fetch_all($hasil);
		}
		public function getDataDokumen($id){
			$query = "select * from p_dokumen where id_user = ".$id." order by id asc";
		    $hasil = pg_query(Parent::get_dbcon(),$query);
		    return pg_fetch_all($hasil);
		}
		public function getDataKota(){
			$query = "select * from data_kota order by nama_kota asc";
		    $hasil = pg_query(Parent::get_dbcon(),$query);
		    return pg_fetch_all($hasil);
		}
        public function getIDKota(){
            $query = "SELECT MAX(id)+1 idk FROM data_kota";
            $hasil = pg_query(Parent::get_dbcon(),$query);
            return pg_fetch_all($hasil);
        }

		// AMBIL DATA SETIAP PLOTTING
		public function getDataSatuan($id,$nama){
			$query = "select * from p_data_satuan where id_user = ".$id." and dokumen = '".$nama."' order by id asc";
		    $hasil = pg_query(Parent::get_dbcon(),$query);
		    return pg_fetch_all($hasil);
		}
		public function getDataKekuatan($id,$nama){
			// $query = "select * from p_data_kekuatan where dokumen = '".$nama."' order by id asc";
			$query = "select * from p_data_kekuatan where id_user = ".$id." and dokumen = '".$nama."' order by id asc";
		    $hasil = pg_query(Parent::get_dbcon(),$query);
		    return pg_fetch_all($hasil);
		}
		public function getDataSituasi($id,$nama){
			$query = "select * from p_data_situasi where id_user = ".$id." and dokumen = '".$nama."' order by id_situasi asc";
		    $hasil = pg_query(Parent::get_dbcon(),$query);
		    return pg_fetch_all($hasil);
		}
		public function getDataObstacle($id,$nama){
			$query = "select * from p_data_obstacle where id_user = ".$id." and dokumen = '".$nama."' order by id asc";
		    $hasil = pg_query(Parent::get_dbcon(),$query);
		    return pg_fetch_all($hasil);
		}
		public function getDataManuver($id,$nama){
			$query = "select * from p_data_manuver where id_user = ".$id." and dokumen = '".$nama."' order by id asc";
		    $hasil = pg_query(Parent::get_dbcon(),$query);
		    return pg_fetch_all($hasil);
		}
		public function getDataBungus($id,$nama){
			$query = "select * from p_data_bungus where id_user = ".$id." and dokumen = '".$nama."' order by id asc";
		    $hasil = pg_query(Parent::get_dbcon(),$query);
		    return pg_fetch_all($hasil);
		}
		public function getDataPassen($id,$nama){
			$query = "select * from p_data_passen where id_user = ".$id." and dokumen = '".$nama."' order by id asc";
		    $hasil = pg_query(Parent::get_dbcon(),$query);
		    return pg_fetch_all($hasil);
		}
		public function getDataRadar($id,$nama){
			$query = "select * from p_data_radar where id_user = ".$id." and dokumen = '".$nama."' order by id asc";
		    $hasil = pg_query(Parent::get_dbcon(),$query);
		    return pg_fetch_all($hasil);
		}
		public function getDataLogis($id,$nama){
			$query = "select * from p_data_logistik where id_user = ".$id." and dokumen = '".$nama."' order by id asc";
		    $hasil = pg_query(Parent::get_dbcon(),$query);
		    return pg_fetch_all($hasil);
		}
		public function getDataFormasi($id, $nama){
			$query = "select * from p_data_formasi where id_user = ".$id." and dokumen = '".$nama."' order by id asc";
		    $hasil = pg_query(Parent::get_dbcon(),$query);
		    return pg_fetch_all($hasil);
		}
		public function getDataTool($id, $nama){
			$query = "select * from p_data_tool where id_user = ".$id." and dokumen = '".$nama."' order by id asc";
		    $hasil = pg_query(Parent::get_dbcon(),$query);
		    return pg_fetch_all($hasil);
		}
		public function getDataText($id, $nama){
			$query = "select * from p_data_text where id_user = ".$id." and dokumen = '".$nama."' order by id asc";
		    $hasil = pg_query(Parent::get_dbcon(),$query);
		    return pg_fetch_all($hasil);
		}
		public function getMasterUser(){
			$query = "SELECT * FROM master_users order by id";
		    $hasil = pg_query(Parent::get_dbcon(),$query);
		    return pg_fetch_all($hasil);
		}
		public function getasisten(){
	    	$query = "select * from master_asisten";
	    	$hasil = pg_query(Parent::get_dbcon(),$query);
	    	return pg_fetch_all($hasil);
	  	}
		public function getweapon($status){
			if($status == "torpedo"){
	    		$query = "select * from \"M_TORPEDO\" order by \"TORPEDO_NAME\" ASC";
			}else if($status == "missile"){
				$query = "select * from \"M_MISSILE\" order by \"MISSILE_NAME\" ASC";
			}else if($status == "gun"){
				$query = "select * from \"M_GUN\" order by \"GUN_NAME\" ASC";
			}else if($status == "bomb"){
				$query = "select * from \"M_BOMB\" order by \"BOMB_NAME\" ASC";
			}else if($status == "mine"){
				$query = "select * from \"M_MINES\" order by \"MINES_NAME\" ASC";
			}
	    	$hasil = pg_query(Parent::get_dbcon(),$query);
	    	return pg_fetch_all($hasil);
	  	}
	  	public function getdataawal($bagian,$jabatan,$scenario){
	  		if($jabatan == 1){
	  			$query = "select a.id,a.name,b.nama_dokumen,b.scenario from master_users a left join p_dokumen b on a.id = b.id_user where a.bagian = '".$bagian."' and b.type_login = 'menu_cb' and b.scenario = '".$scenario."'";
	  		}else{
	  			$query = "select a.id,a.name,b.nama_dokumen,b.scenario from master_users a inner join p_dokumen b on a.id = b.id_user where a.bagian = '".$bagian."' and a.jabatan = '".$jabatan."' and a.asisten = '6' and b.type_login = 'menu_cb' and b.scenario = '".$scenario."'";
	  		}
	  		$hasil = pg_query(Parent::get_dbcon(),$query);
	    	return pg_fetch_all($hasil);
	  	}
	  	public function ambil_user_asops($user,$asis){
		    $query = "select * from master_users where id = '".$user."'";
		    $hasil = pg_query(Parent::get_dbcon(),$query);
		    $a = pg_fetch_all($hasil);
		    foreach ($a as $b) {
		      $bagian = $b['bagian'];
		      $jabatan = $b['jabatan'];
		    }
		    // $query1 = "select id from master_users where bagian = '".$bagian."' and jabatan = '".$jabatan."' and asisten = '".$asis."'";
		    $query1 = "select id from master_users where bagian = '".$bagian."' and asisten = '".$asis."'";
		    $hasil1 = pg_query(Parent::get_dbcon(),$query1);
		    $c = pg_fetch_all($hasil1);
		    if($c){
		      foreach ($c as $d) {
		        $id_us = $d['id'];
		      }
		    }else{
		      $id_us = false;
		    }
		    return $id_us;
		  }
		  public function ambil_dokumen_peta($user,$status,$scenario){
		    $query = "select * from p_dokumen where type_login = '".$status."' and id_user = '".$user."' and scenario = '".$scenario."'";
		    $hasil = pg_query(Parent::get_dbcon(),$query);
		    return pg_fetch_all($hasil);
		  }
		  public function getbagian(){
		    $query = "select * from bagian order by \"ID\"";
		    $hasil = pg_query(Parent::get_dbcon(),$query);
		    
		    return pg_fetch_all($hasil);
		  }
		  public function selectscen($token,$id_bagian){
		    
		    $que = "SELECT id FROM master_users WHERE remember_token = '". $token ."'";
		    $res = pg_query(Parent::get_dbcon(),$que);
		    $res1 = pg_fetch_all($res);

		    foreach ($res1 as $re) {
		      $user_id = $re["id"];
		    }

		    // $query = "SELECT DISTINCT b.username,b.id FROM data_dokumen a inner join master_users b on a.id_user = b.id WHERE nama_dokumen IN (SELECT nama_dokumen FROM data_dokumen WHERE id_user = '". $user_id ."') and status not in ('menu')";
		    $query = "select name,id,jabatan,asisten from master_users where bagian = '".$id_bagian."' order by id";
		    $hasil = pg_query(Parent::get_dbcon(),$query);
		    
		    return pg_fetch_all($hasil);
		  }
		  public function scenario($id,$scenario_akt){
		   // $query = "SELECT DISTINCT a.judul_cb,a.create_by,b.asisten,d.status,e.nama_asisten FROM master_cb_staf a inner join master_users b on a.create_by = b.id inner join master_skenario d on a.id_skenario = d.\"ID\" inner join master_asisten e on b.asisten = e.\"ID\" WHERE a.judul_cb IN (SELECT judul_cb FROM master_cb_staf WHERE create_by = '". $id ."') and a.create_by IN (SELECT create_by FROM master_cb_staf WHERE create_by = '". $id ."') and d.\"ID\" = '".$scenario_akt."'";
		  	$query = "SELECT DISTINCT a.nama_dokumen,a.id_user,b.asisten,d.status,e.nama_asisten,d.\"ID\",b.bagian FROM p_dokumen a inner join master_users b on a.id_user = b.id inner join master_skenario d on a.scenario = d.\"ID\" inner join master_asisten e on b.asisten = e.\"ID\" WHERE a.nama_dokumen IN (SELECT nama_dokumen FROM p_dokumen WHERE id_user = ".$id." and type_login = 'menu_cb') and a.id_user IN (SELECT id_user FROM p_dokumen WHERE id_user = ".$id." and type_login = 'menu_cb') and d.\"ID\" = '".$scenario_akt."'";

		    //$query = "SELECT DISTINCT a.judul_cb,a.create_by,b.asisten,d.status FROM master_cb_staf a inner join master_users b on a.create_by = b.id inner join master_skenario d on a.id_skenario = d.\"ID\" WHERE a.judul_cb IN (SELECT judul_cb FROM master_cb_staf WHERE create_by = '".$id."') and a.create_by IN (SELECT create_by FROM master_cb_staf WHERE create_by = '".$id."') and d.\"ID\" = '".$scenario_akt."'";

		      // $query = "SELECT DISTINCT a.*,b.asisten ,c.id_skenario,d.status,c.create_by,c.judul_cb FROM data_dokumen a inner join master_users b on a.id_user = b.id inner join master_cb c on a.id_user = c.create_by and a.nama_dokumen = c.judul_cb inner join master_skenario d on c.id_skenario = d.\"ID\"  WHERE nama_dokumen IN (SELECT nama_dokumen FROM data_dokumen WHERE id_user = '". $id ."' and nama_dokumen not in('".$scennar."')) and a.id_user IN (SELECT id_user FROM data_dokumen WHERE id_user = '". $id ."' and nama_dokumen not in('".$scennar."')) and a.status not in ('menu') and d.\"ID\" = '".$scenario_akt."'";
		    $hasil = pg_query(Parent::get_dbcon(),$query);
		    
		    return pg_fetch_all($hasil);
		  }
		
		// CEK DATA DOKUMEN
		public function cek_data($id,$dokumen){
			$query = "select * from p_dokumen where id_user = ".$id." and nama_dokumen = '".$dokumen."' order by id asc";
		    $hasil = pg_query(Parent::get_dbcon(),$query);
		    return pg_fetch_all($hasil);
		}
		public function hapus_allData($id,$dokumen){
			$dimana = "where id_user = ".$id." and dokumen = '".$dokumen."'";
			$query_satuan = "DELETE FROM p_data_satuan ".$dimana;
			$query_kekuatan = "DELETE FROM p_data_kekuatan ".$dimana;
			$query_situasi = "DELETE FROM p_data_situasi ".$dimana;
			$query_obstacle = "DELETE FROM p_data_obstacle ".$dimana;
			$query_manuver = "DELETE FROM p_data_manuver ".$dimana;
			$query_bungus = "DELETE FROM p_data_bungus ".$dimana;
			$query_passen = "DELETE FROM p_data_passen ".$dimana;
			$query_radar = "DELETE FROM p_data_radar ".$dimana;
			$query_logis = "DELETE FROM p_data_logistik ".$dimana;
			$query_tool = "DELETE FROM p_data_tool ".$dimana;
			$query_text = "DELETE FROM p_data_text ".$dimana;
			$query_formasi = "DELETE FROM p_data_formasi ".$dimana;

			// $query_dokumen = "DELETE FROM p_dokumen where id_user = ".$id." and nama_dokumen = '".$dokumen."'";

			pg_query($query_satuan);
			pg_query($query_kekuatan);
			pg_query($query_situasi);
			pg_query($query_obstacle);
			pg_query($query_manuver);
			pg_query($query_bungus);
			pg_query($query_passen);
			pg_query($query_radar);
			pg_query($query_logis);
			pg_query($query_tool);
			pg_query($query_text);
			pg_query($query_formasi);
			// pg_query($query_dokumen);
		}

		public function selectloc1($id_db, $status){
	      if ($status == "bandara") {
	        $query = "SELECT \"X\", \"Y\", \"AERODROME\" FROM data_airport WHERE \"AERODROME\" = '".$id_db."';";
	        $hasil = pg_query(Parent::get_dbcon(),$query);
	        return pg_fetch_all($hasil);
	      } else if ($status == "pelabuhan") {
	        $query = "SELECT \"X\",\"Y\", nama FROM data_pelabuhan WHERE nama = '".$id_db."'";
	        $hasil = pg_query(Parent::get_dbcon(),$query);
	        return pg_fetch_all($hasil);
	        // return $hasil;
	      } else {
	        $query = "";
	      }
	  }
	  public function get_scenario_aktif(){
	      $query = "SELECT * FROM master_skenario WHERE status = '1'" ;
	      $hasil = pg_query(Parent::get_dbcon(),$query);
	      
	      if (pg_num_rows($hasil) != 1) 
	      {

	      }

	      return pg_fetch_all($hasil);
	    }
	public function login()
    {
      //var_dump($_SESSION['user']);
      $query = "SELECT * FROM master_users a left join master_asisten b on a.asisten = b.\"ID\" WHERE remember_token = '". $_SESSION['token'] ."'" ;
      $hasil = pg_query(Parent::get_dbcon(),$query);
      
      if (pg_num_rows($hasil) != 1) 
      {
        // header("Location: http://192.168.2.4/eppkm/public/master/login");
      }

      return pg_fetch_all($hasil);
    }
    public function get_services($id_){
      $query = "SELECT * FROM service_peta WHERE id = '".$id_."'  order by jenis" ;
      $hasil = pg_query(Parent::get_dbcon(),$query);
      
      if (pg_num_rows($hasil) != 1) 
      {

      }

      return pg_fetch_all($hasil);
    }
	}
	$konek = new Crud();
	$konek->set_connect('localhost','5432','eppkm_kodiklatal','postgres','admin');
	$konek->get_connect();
?>