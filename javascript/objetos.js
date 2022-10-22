//declaraciones
const anuma= 23.1;//no reclaracion o cambio de valor
var nombre = ["a",3,"a"]; //puedes volvera declararlo: var nombre ="alfredo"
let persona = {  //objeto y let: no puedes volver a declararlo con let pero si cambiar su valor, 
    nombre: "diego",
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

//objetos literales != instancias
const student = {
    'juan': 110,
    'nora': 220,
};

//clase
class Student {
    public $name = 'nombre';
}
$juanita = new Strudent;

//prototipo
function Student(){
    this.name = 'Nombre';
}

const juanita = new Student();

//metodos 
const natalia = {
    name: "Natalia",
    cursoAprobados: [
	"hmtl",
    ],
    aprobarCurso: (nuevocurso) => {
	this.cursoAprobados.push(nuevocurso);
    }
}

//funcion 
function studen(name,cursoAprobados){
    this.name = name;
    this.crusoAprobados= cursoAprobados;
    this.curso = nuevo => {
	this-cursoAprobados.push(nuevo);
    }
}
//utilizra metodos fuera de la funcinon
studen.prototype.eliminarultimo = function(nuevo)  {
   this.cursoAprobados.pop();
}

const juanita1 = new studen("a",["curso1","curso2"]);

//clase ejemplo
class studen {
    constructor(name,cursos){
	this.name=name;
	this.curso = cursos;
    }
    //o 
    constructor2({name,cursos = [] ,twiter}){
        this.name=name;
        this.curso = cursos;
        this.twiter=twiter;
    }

    aprobarCruso(cursonew){
	this.curso.push(cursonew);
    }
}

const miguel1= new studen("miguel", ["mate"]);
const miguel2 = new studen({
    name: "Miguel",
    cursos: ["mate"]
});


