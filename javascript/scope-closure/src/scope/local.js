//ambito lexico concepto
var scope = 'var global';

const functionScope = () => {
    var scope = "var local";
    const func = () =>{
        return scope;
    }
    console.log(scope); //imprimelocal
}

functionScope();
console.log(scope); //imprime global