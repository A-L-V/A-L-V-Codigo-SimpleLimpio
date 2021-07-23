<?php
//esperar el button con el name="envia"
if(isset($_REQUEST["envia"])){
     //llamar e iniciar una clase
     include_once '../controlador/Negocio.php'; 
     $obj=new Negocio();

     //con el request llamamos a los imputs 
      $a= $_REQUEST["nombre"];
}

?>