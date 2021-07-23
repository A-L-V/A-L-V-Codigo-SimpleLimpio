<?php 
//recorrer un arreglo
      foreach($data as $k=>$d){
           echo "<tr><td>$d[0]<td>$d[1]<td>$d[2]<td>$d[3]<td>$pago";
      }

#-------------------------------------------

// crear un link a otra pagina y enviar valor
<a href="pagCambia.php?cod=<?=$d[0]?>">Edit</a>
//debe llevar
$_REQUEST["cod"]

#---------------------------------------------
//cargar a otra pagina
header("location:pagLista.php"); 

?>