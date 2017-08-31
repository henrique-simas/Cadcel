<?php
include ('DBController.php');
$meuobjeto = json_decode(file_get_contents('php://input'));
$myController = new Controller();
echo("oi");
$myController->registrardispositivo($meuobjeto->proprietario, $meuobjeto->email, $meuobjeto->telefone, $meuobjeto->imei, $meuobjeto->numeroBO, $meuobjeto->dataBO, $meuobjeto->categoria, $meuobjeto->status);
?>
