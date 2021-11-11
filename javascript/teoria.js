//declaraciones
const anuma= 23.1;//no reclaracion o cambio de valor
var nombre = ["a",3,"a"]; //puedes volvera declararlo: var nombre ="alfredo"
let persona = {  //objeto y let: no puedes volver a declararlo con let pero si cambiar su valor, 
    nombre="diego",
    edad :30,
    detalle: function(){
        console.log('persona ${this.nombre} ${this.edad}')
    }
};
//constructor de objeto
function personaC(nombre,edad){
    this.nombre=nombre;
    this.edad=edad;
}
var personaNueva = new personaC("pedro", 18);


//funciones
//declarativa, se les apica hoisting, este solo aplica en palabras reservadas var y function, la cual podriamos llamarla antes de su declacion
function nombreFuncion(){
    return "xd";
}
//Expresión de funcion, esperar a que sea declarado para llamarlo
var love = function(ella,el){
    return ella+el;
};
love(); //asi lo llamamos

//scope
/*
scope global:
variables inicializados y declarados en el codigo principal
lo pueden acceder todos
scope local:
variables inicilizado y declarados en el codigo aparte como funcion:
solo lo puede acceder solo en la funcion
*/
//global
var nombre = "diego"

function fun(){
    //local
    var apellido = "de granada"
    return nombre +""+apellido;
}
console.log(apellido); //error no definido
//Coersion implicita
//4 + "7" = 47; //con el operador de mas javascript lo genera concadenacion
var a = 4 +"7"; //string
//4*"7"; 48 //en otros javascript ocupa un 7 numeero no string
//asignaciones
/*
= asignar
== comparar, 3 == "3", true;
=== validar, 3 == "3", false;
&& y, a && b, si ambos son verdad, se cumple
|| o, a || b, si una es verdad, se cumple
++, a++, incrementa + 1 
+=n, a+=n, incrementa + n;
*/