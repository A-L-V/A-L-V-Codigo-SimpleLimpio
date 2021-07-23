<?php

class Conexion {
    private $cn = null; 
    function conectar() {
        if ($this->cn == null) {
            $this->cn = mysqli_connect("localhost", "root", "", "test");
        }
        return $this->cn;
    }
}



include_once 'Conexion.php';

class Negocio {

    //CRUD
    function adicion($cod, $nom, $gra, $hora) {
        $cn = new Conexion();
        $sql = "insert into docente(CodDoc, Cliente,Grado,Horas) values('$cod' ,'$nom','$gra',$hora)";
        $res = mysqli_query($cn->conecta(), $sql) or die(mysqli_error($cn->conecta()));
        if ($res)
            echo "grabacion ok";
        else {
            echo "error grabacion";
        }
    }

    //consulta
    function listado() {
        $cn = new Conexion();
        $sql = "select * horas from empleado";
        $res = mysqli_query($cn->conecta(), $sql) or die(mysqli_error($cn->conecta()));
        $vec = array();
        while ($f = mysqli_fetch_array($res)) {//leer fila x fila
            $vec[] = $f;
        }
        return $vec;
    }
}
?>