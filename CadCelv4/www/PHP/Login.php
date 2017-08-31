<?php
include ('checkLogin.php');
 $meuobjeto = json_decode(file_get_contents('php://input'));
  $login = new CheckLogin();
  if($login->Check($meuobjeto->matricula, $criptografia) == true)
  {
    echo true;
  }
  else
  {
    echo false;
  }
?>
