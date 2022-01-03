//crear el proyecto con npm init

//opciones por default
function newFuncion(name,age,country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country  || 'PE';
    console.log(name,age,country);
}

function newFuncion2(name='oscar', age='32', country='PE'){
    console.log(name,age,country);
}

//unir varios elementos
let hello = "hello";
let world = "wordl";
let epic = hello + ' ' + world;
console.log(epic)

let epic2 = `${hello} ${world}`;
console.log(epic2)

//multilineas
let lorem = "qui consequtur. commodi. ipsum vel duis yet minima \n"
+ "continuidad";

let loremEC6 = `otra frase mas epica
ahora otro parrafo`;
console.log(loremEC6);

//deesctructuracion de elementos
let person = {
    'name': 'oscar',
    'edad': 32,
    'ciudad': 'PE'
}

console.log(person.name, person.edad);

let {name, edad, ciudad} = person;
console.log(name,edad,ciudad);

//spread operator-uniones
let team1 = [1,2,3];
let team2 = [4,5,6];
let unidos = [...team1,...team2, 7];

console.log(unidos);

let education2 = [...new Set([ ...team1, ...team2])] //quitar repetidos en el team1 y 2;

//var, let.
{
    var global = "variable global",
}

{
    let private = "variable privada"
    console.log(private); //funciona dentro del scope
}
console.log(global);//funciona es global
console.log(private); //no funciona fuera del scope

//parametros en objetos
let name = 'oscar';
let edad = 32;

let objetoEM5= {name: name, edad:edad};

let objetoEM6= {name, edad};
console.log(objetoEM6);

//arrow functions 
const names = [
    {name:'oscar', age:32},
    {name:'yessica', age:27}
]

let listaDeNombres = names.map((function (item){
    console.log(item.name);
}));

let listaDeNombresEM6 = names.map( (item)=> { console.log(item.name); })

const listadeNombres3 = (name, age) => {
    //...
} 

const listadeNombres4 = name => {
    //...
}

const square = num => {num*num;}

//promesas EM6

const helloPomise = () => {
    return new Promise((resolve,reject) => {
        if(true){
            resolve('hey');
        }else {
            reject('ups!!');
        }
    });
}

helloPomise()
    .then(response => console.log(response))
    .then(() => console.log('aver'))
    .catch(error => console.log(error));
//clases
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB){
        this.valueA = valueA;
        this.valueB;
        return this.valueA+valueB;
    }
}
const calc = new calculator();
console.log(calc.sum(2,2));

//modulos- import extport
import {hello} from './modulo'

hello();
//generadores
function* helloWorld() {
    if(true){
        yield 'hello';
    }
    if(true){
        yield 'World';
    }
}
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);


