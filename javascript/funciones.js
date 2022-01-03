
//funciones
//declarativa, se les apica hoisting, este solo aplica en palabras reservadas v>
function nombreFuncion(){
    return "xd";
}
//Expresión de funcion, esperar a que sea declarado para llamarlo
var love = function(ella,el){
    return ella+el;
};
love(); //asi lo llamamos

const person = () => {
    var saveName = "name";
    return {
	getName: ()=> {return saveName;},
	setName: (name) => {saveName=name;}
    }
}
