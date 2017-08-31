<?php
  include("DBController.php");
  $meuobjeto = json_decode(file_get_contents('php://input'));
  $myRegister = new Controller();
  $myRegister->registrar($meuobjeto->nome, $meuobjeto->rg, $meuobjeto->cpf, $meuobjeto->opcao, $meuobjeto->senha);
?>
