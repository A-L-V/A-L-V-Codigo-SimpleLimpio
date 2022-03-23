# Teoria JS

## Scope
Alcanze de una variable en su entorno
O
Contexto actual de la aplicacion

Tenemos 2 Scope 
### Global
var frutas = 'todos lo poseen'
### Local
- block scope: todo encerrado en {}
- function scope
function xd(){
    var anuma = 'solo lo posee todo dentro de la funcion'
    if(true){
        let anuma2 = 'no me toma nadie excepto mi contexto if'
    }
}

## Closure
Combinacnion de funcion y ambito lexico declarada la funcion
Recuerda el ambito donde lo crearon

const moneyBox = (coins) => {
    var total = 0;
    total += coins;
    console.log(total)
}
moneyBox(5)
moneyBox(10)
Imprime solo el numero que mandas y no permite guardar la suma


const moneyBox = () => {
    var total = 0;
    const count = (coins) => {
        total += coins;
        console.log(total)
    }
    return total
}

let miMoneyBox = moneyBox()
miMoneyBox(4),
miMoneyBox(10)
recuerda la asignacion en memoria

### Con ambito lexico
const build = (i) => {
    let count = i;
    const display = () => {
        console.log(count++)
    }
    return count
}
### Crear variables privadas con clousures
const person = () => {
  let name = 'Name'

  return {
    get name () {
      return name
    },

    set name (value) {
      name = value
    }
  }
}

const newPerson = person()
console.log(newPerson.name)
newPerson.name = 'Jousmo'
console.log(newPerson.name)

## Hoisting
Elevacion: 
En JavaScript, las declaraciones (por ejemplo, de variables o funciones) se mueven al principio de su scope o ámbito. Este comportamiento se conoce como hoisting y es muy importante tenerlo en cuenta a la hora de programar para prevenir posibles errores.

Las funciones siempre se mueven arriba del scope. Por lo tanto, podemos elegir donde declararlas y usarlas.
No solo las funciones tambien:
los imports
var
let y const: elevadas temporal death zone
pero las clases no se elevan

La declaración de las variables se mueven arriba del scope, pero no la asignación. Antes de usar una variable, habrá que crearla y asignarla.

## Valores Truthy & Falsy
//Ejemplos en los que Boolean devuelve Falso:
Boolean()
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false

//Ejemplos en los que Boolean devuelve verdadero:
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function(){}); //Cualquier función es verdadera también
Boolean(-1); // true

## Coersion

Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:

### Coerción implícita 
es cuando el lenguaje nos ayuda a cambiar el tipo de valor.

var a = 4 + "7"; //Convierte a 4 en un string y lo concatena con el "7", por esto regresa un string de valor "47"

4 * "7"; //Convierte al "7" en un número y realiza la operación, por esto devuelve 28

var a = 20;
var b = a + ""; //Aquí concatenamos para convertir la variable a string (coerción implícita)
console.log(b); 

### Coerción explicita
es cuando obligamos a que cambie el tipo de valor.


var c = String(a); //Aquí obligamos a la variable a convertirse en string (coerción explícita)
console.log(c);

var d = Number(c); //Aquí obligamos a la variable a convertirse en número (coerción explícita)
console.log(d);