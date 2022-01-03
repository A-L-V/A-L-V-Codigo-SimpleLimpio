
//aplanar arreglos.
let array = [1,2,3,[1,2,3,[1,2,3]]];

console.log(array.flat(2)); //2: valor de profundidad

//lo mismo que flat con el beneficio de que primero manipular la data para luego poder aplanar.
let array = [1,2,3,4,5]
console.log(array.flatMap(value => [value, value*2]))

//quitar espacio inciio final: trimStrat()-trimEnd();
let hello = '                    hello world';
console.log(hello.trimStart());

// try/catch: ahora puedes utilizarlo sin necesidad de especificaro como catch(error) sino directamente usarlo en el scope del catch.
try{

}catch {
    error;
}

//Object.fromEntries() lo inverso a Object.entries(), es decir podemos convertir un objeto en una matriz clave/valor con Object.entries(), y hace lo inverso es decir de una matriz clave/valor a un objeto con Object.fromEntries().

let entries = [["name","oscar"], ["age",32]];

console.log(Object.fromEntries(entries));

//Symbol.prototype.description: permite regresar el descripcion opcional del Symbol
let mySymbl = 'My symbol';
let symbol = Symbol(mySymbl);
console.log(symbol.description);

