
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

//argumentos indeterminados
function sumar(...args){
    for(let i of args){
    }
}
sumar(40,50,20,15)

//bucle- continue - break
while("1" == uno){
    if( 2 == "2"){
        console.log("xd");
        continue;
    }
    if( 3 == "2"){
        break;
    }
}
let array = [];
for(let n of array){

}