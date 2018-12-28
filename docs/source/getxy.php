<?php 
  require "config/fungsi_crud.php";
  header("Access-Control-Allow-Origin: *");
  if (isset($_POST['id_db'])) {
      $id_db = $_POST['id_db'];
      $status = $_POST['status'];

      if ($status == "bandara") {
      	  $koor = $konek->selectloc1($id_db, $status);
      	  $x = $koor[0]["X"];
	      $y = $koor[0]["Y"];
	      $naa = $koor[0]["AERODROME"];
	      $jsn = json_encode(array('data' => $koor));
	      echo $x.",".$y.",".$naa;
      }elseif ($status == "pelabuhan") {
      	  $koor = $konek->selectloc1($id_db, $status);
      	  $x = $koor[0]["X"];
	      $y = $koor[0]["Y"];
	      $naa = $koor[0]["nama"];
	      $jsn = json_encode(array('data' => $koor));
	      echo $x.",".$y.",".$naa;
      }else{}
  }
?>