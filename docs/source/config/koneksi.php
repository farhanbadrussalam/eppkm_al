<?php

class Koneksi{
  private $host;
  private $port;
  private $dbname;
  private $username;
  private $password;
  private $pg_options = "--client_encoding=UTF8";
  protected $dbcon;

  function set_connect($host,$port,$dbname,$username,$password){
    $this->host = $host;
    $this->port = $port;
    // $this->dbname = "eppkm_kodiklatal";
    $this->dbname = $dbname;
    $this->username = $username;
    $this->password = $password;
  }

  function get_connect(){
    $this->dbcon = pg_connect("host={$this->host} port={$this->port} dbname={$this->dbname} user={$this->username} password={$this->password} options='{$this->pg_options}'");
    if (!$this->dbcon) {
      return "Koneksi Gagal";
    }
  }

  function get_dbcon(){
    return $this->dbcon;
  }

  function __destruct(){
    pg_close($this->dbcon);
  }

}
?>