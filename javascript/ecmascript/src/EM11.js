//dinamic import
const button = document.getElementById("btn");

button.addEventListener("click", async () =>{
    const modulo = await import("./fileEM11.js");
    modulo.hello();
}); 

//Big INT: permite trabajar con numeros mayores a 2^53
const abignumber = 65168549498494616166n;
const anotherbigNumber = BigInt(65168549498494616166);

//Promise All Settled
const promise1 = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve"));
const promise3 = new Promise((resolve,reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

// Global This


console.log(window);
console.log(globalThis);
// Nuevo operador lógico: null operator

const fooo = null ?? 'default string';
console.log(fooo);

const fooo2 = 'not null' ?? 'default string';
console.log(fooo2)

//Optional chaining

const user = {};
console.log(user.profile.email); // no existe

console.log(user?.profile?.email); //leer hasta cierto nivel sin romper la aplicacion

if(user?.profile?.email) {
    console.log('email')
} else{
    console.log('fail')
}