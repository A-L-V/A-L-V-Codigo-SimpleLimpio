//instalar typescript: npm i -g typescript  & tsc -v
//ejecutar tsc archivo.ts
//ejecutar el compilador: tsc --watch
/*tipos de datos:
Explicito: Define una sintaxis para la creación de variables con tipo de dato
nomVariable : Tipo de dato
:(permite especificar el tipo de dato)

Inferido: TypeScript tiene la habilidad de deducir el tipo en funcion de un valor.
nomVariable = valorInit
nomVariable(deduce el tipo de datos)
valorINit(variable debeestar inicializada)
*/
let phone;
phone = 1;
//phone = 'sdf'; error
let number = 48494;
//number = "dasf"; error;
let hexadecimal = 0xf00d;
let binario = 0b1010;
let octal = 0o744;
let esPro;
esPro = true;
let username = 'adfa';
//remplate string, uso de back-tick `
let userInfo;
userInfo = `texto libre
sfdsf ${username}`;
/*#Tipo de datos primitivos
Number > Boolean > String > Array
Tuple > Enum > Any > Void
Null > Undefined > Never >Object
*/
/*any*/
let idUser;
idUser = 21;
idUser = 'fdsad';
let otherId; //topo inferido
otherId = 1;
otherId = '1';
console.log("hello");
/*tipo void opuesto de any, utilizado en funciones sin retorno de valor*/
//explicito
const mostrarInfo = (user) => {
    console.log('user info', user.id);
};
//inferido
const mostrarInfo2 = (user) => {
    console.log('user info', user.id);
};
//tipo void como variable
let unusable;
unusable = null || undefined; //error por tsconfig, strict: true;
/* Tipo never para funciones que lanzan excepciones | nunca retornan un valor */
const provocarError = (code, message) => {
    throw new Error(`${number} ${message}`);
};
try {
    provocarError(404, 'Not Found');
}
catch (_a) {
}
const sum = (limit) => {
    let suma = 0;
    while (true) {
        suma++;
    }
};
sum(3);
/*null */
//explicita
let nullVar;
nullVar = null;
//al pasarlo asi la variable lo toma como any
let otherVeriable = null;
otherVeriable = 'test';
/*undefined*/
let undefinedVar = undefined;
let otherUndefined = undefined; //lo toma como any 
//--strictNullChecks //evitar null-undefined
//habilitar en json, default: false 
let alumbName;
//Object
let user;
user = {};
user = {
    id: 1,
    nombre: 'pablo'
};
// Object vs object(clase js, tipo ts)
let user2 = {
    id: 1,
    nombre: 'pablo'
};
const isInstancia = user2 instanceof Object; //clase Object de JS
/*array*/
let userName;
userName = ['dasf', 'fdsaf'];
//userName=['dasf','fdsaf', 21]; error
let otherUser = ['sdf,', 'sdf'];
//array<TIPO>
let title;
/*Tuplas */
let userN;
user = [1, 'asdf'];
//arreglo de tuplas
let array = [];
array.push([1, 'dasf']);
//enum
var PhotoOrientacion;
(function (PhotoOrientacion) {
    PhotoOrientacion[PhotoOrientacion["landscape"] = 0] = "landscape";
    PhotoOrientacion[PhotoOrientacion["portrait"] = 1] = "portrait";
    PhotoOrientacion[PhotoOrientacion["square"] = 2] = "square";
    PhotoOrientacion[PhotoOrientacion["panorama"] = 3] = "panorama"; //3
})(PhotoOrientacion || (PhotoOrientacion = {}));
const Landscape = PhotoOrientacion.landscape;
console.log(Landscape);
console.log(PhotoOrientacion[Landscape]);
var PictureOrientacion;
(function (PictureOrientacion) {
    PictureOrientacion[PictureOrientacion["landscape"] = 10] = "landscape";
    PictureOrientacion[PictureOrientacion["portrait"] = 11] = "portrait";
    PictureOrientacion[PictureOrientacion["square"] = 12] = "square";
    PictureOrientacion[PictureOrientacion["panorama"] = 13] = "panorama"; //13
})(PictureOrientacion || (PictureOrientacion = {}));
console.log(PictureOrientacion.landscape);
var Country;
(function (Country) {
    Country["Bolivida"] = "bol";
    Country["Colombia"] = "col";
    Country["EEUU"] = "usa";
    Country["Espa\u00F1a"] = "esp";
})(Country || (Country = {}));
const country = Country.Colombia;
console.log(country);
/* Alias de Tipos */
// 10 , '10'
let idUser1;
idUser1 = 10;
idUser1 = '10';
function getId(idi) {
    return 'cxv';
}
function getId2(idi) {
    return 'cxv';
}
let smallPicture = '100x100'; //200x200' error
/*Asercion de Tipo */
//  <tipo> Angel Bracket syntax
let userNombre;
let mensage = userNombre.length > 5 ?
    `Welcome {${userNombre}}` :
    `Username is too short`;
let userNameWithId = 'luixaviles 1';
username = userNameWithId.substring(0, 10);
//syntax "as"
let mensage2 = userNombre.length > 5 ?
    `Welcome {${userNombre}}` :
    `Username is too short`;
let helloUser = 'hello user';
username = helloUser.substring(6);
/*Funciones */
function crearPicture(title, date, size) {
    console.log('creado picture');
}
//parametros opcionales
function crearPicture2(title, date, size) {
    console.log('creado picture');
}
;
//flat array function
let createPicture3 = (title, date, size) => {
    return {
        title,
        date,
        size
    };
};
function showPicture(picture) {
    console.log(`[title: ${picture.title}`);
}
function showPicture2(picture) {
    console.log(`[title: ${picture.title}`);
}
let myPic = {
    title: 'test title',
    date: '2020-01',
    orientacion: PhotoOrientacion.landscape
};
showPicture(myPic);
showPicture({
    title: 'test title',
    date: '2020-10-21',
    orientacion: PhotoOrientacion.portrait
    //extra: 'text'  error
});
function generarPicture(config) {
    const pic = { title: 'DEFAULT', date: '2020-02' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
let pintura = generarPicture({});
console.log(pintura);
let usuario = { id: 10, name: 'zd', ispro: true };
usuario.name = 'dfasf';
const album = {
    id: 1,
    title: 'Meetups',
    descripcion: 'events arund the world'
};
let picture = {};
;
picture.id = 2;
picture.title = 'moon';
picture.orientacion = PhotoOrientacion.landscape;
