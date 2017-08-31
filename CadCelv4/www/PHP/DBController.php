<?php
include ('ConnectDB.php');
Class Controller{
  function login($cpf, $senha){
    $myConnect = new ConnectDB();
    $myConnect->Connect();
    $conn = $myConnect->conn;
    $criptografia = hash('sha256',$senha);
     if($_SERVER["REQUEST_METHOD"] == "POST") {
        $sql = "SELECT id,cpf FROM usuarios_pm WHERE cpf = '$cpf' and hash = '$criptografia'";
        $result = mysqli_query($conn,$sql);
        $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
        $count = mysqli_num_rows($result);
        if($count == 1){
          return true;
        }
        else{
          return false;
        }
      }
  }

  function registrar($nome, $rg, $cpf, $opcao, $senha){
    $myConnect = new ConnectDB();
    $myConnect->Connect();
    $conn = $myConnect->conn;
    $criptografia = hash('sha256',$senha);
    if($opcao=='1'){
      $sql = "INSERT INTO usuarios_cm (nome, cpf, rg, hash) VALUES ('$nome', '$cpf', '$rg', '$criptografia')";
      if(mysqli_query($conn, $sql)){
        echo "Records inserted successfully.";
      }
      else{
        echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
      }
    }
    elseif($opcao=='2'){
      $sql = "INSERT INTO usuarios_pm (nome, cpf, rg, hash) VALUES ('$nome', '$cpf', '$rg', '$criptografia')";
      if(mysqli_query($conn, $sql)){
        echo "Records inserted successfully.";
      }
      else{
        echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
      }
    }
  }

  function registrardispositivo($proprietario, $email, $telefone, $imei, $nbo, $databo, $categoria, $status){
    $myConnect = new ConnectDB();
    $myConnect->Connect();
    $conn = $myConnect->conn;
    $sql = "INSERT INTO dispositivos (nome, imei, telefone, numero_bo, data_bo, categoria, status, email) VALUES ('$proprietario', '$imei', '$telefone', '$nbo', '$databo', '$categoria', '$status', '$email')";
      if(mysqli_query($conn, $sql)){
        echo "Records inserted successfully.";
      }
      else{
        echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
      }
  }

}
