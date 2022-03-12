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
let phone: number;
phone = 1;
//phone = 'sdf'; error

let number = 48494;
//number = "dasf"; error;

let hexadecimal: number = 0xf00d;
let binario: number= 0b1010;
let octal: number=0o744;

let esPro: boolean;
esPro = true;
let username: string='adfa';

//remplate string, uso de back-tick `
let userInfo: string;
userInfo = `texto libre
sfdsf ${username}`;

/*#Tipo de datos primitivos
Number > Boolean > String > Array
Tuple > Enum > Any > Void
Null > Undefined > Never >Object
*/

/*any*/
let idUser: any;
idUser= 21;
idUser= 'fdsad';

let otherId; //topo inferido
otherId =1;
otherId ='1';
console.log("hello");

/*tipo void opuesto de any, utilizado en funciones sin retorno de valor*/
//explicito
const mostrarInfo = (user:any):any => {
    console.log('user info', user.id);
}
//inferido
const mostrarInfo2 = (user:any) => {
    console.log('user info', user.id);
}

//tipo void como variable
let unusable: void;
unusable = null || undefined; //error por tsconfig, strict: true;

/* Tipo never para funciones que lanzan excepciones | nunca retornan un valor */ 
const provocarError = (code: number, message: string):never  => {
    throw new Error(`${number} ${message}`);
}

try {
    provocarError(404, 'Not Found')
} catch {    
}
const sum = (limit: number):never => {
    let suma = 0;
    while(true){
        suma++;
    }
}

sum(3);

/*null */
//explicita
let nullVar: null;
nullVar = null;

//al pasarlo asi la variable lo toma como any
let otherVeriable = null;
otherVeriable = 'test'

/*undefined*/
let undefinedVar: undefined =  undefined;
let otherUndefined = undefined; //lo toma como any 

//--strictNullChecks //evitar null-undefined
//habilitar en json, default: false 
let alumbName: string;


//Object
let user: object;
user = {};
user = {
    id:1,
    nombre: 'pablo'
}
// Object vs object(clase js, tipo ts)
let user2 = {
    id:1,
    nombre: 'pablo'
}
const isInstancia = user2 instanceof Object; //clase Object de JS

/*array*/
let userName: string[];
userName=['dasf','fdsaf'];
//userName=['dasf','fdsaf', 21]; error

let otherUser = ['sdf,','sdf'];

//array<TIPO>
let title: Array<string>;

/*Tuplas */
let userN: [number,string];
user=[1,'asdf'];

//arreglo de tuplas
let array: [number, string][] = [];
array.push([1,'dasf']);

//enum

enum PhotoOrientacion{
    landscape, //0
    portrait,   //1
    square, //2
    panorama  //3
}
const Landscape: PhotoOrientacion = PhotoOrientacion.landscape;
console.log(Landscape);
console.log(PhotoOrientacion[Landscape]);


enum PictureOrientacion{
    landscape = 10,
    portrait,   //11
    square, //12
    panorama  //13
}
console.log(PictureOrientacion.landscape);

enum Country {
    Bolivida = 'bol',
    Colombia = 'col',
    EEUU = 'usa',
    España = 'esp'
}
const country: Country = Country.Colombia;
console.log(country);

/* Alias de Tipos */
// 10 , '10'
let idUser1: number | string;
type id = number | string; //crear tipo de datos
idUser1 = 10;
idUser1 = '10';
function getId(idi: number | string){
    return 'cxv';
}
function getId2(idi: id){
    return 'cxv';
}

/*Tipos literales */
// 100x100, 500x500, 1000x1000
type squareSize = '100x100' | '500x500' | '1000x1000';
let smallPicture: squareSize =  '100x100' //200x200' error

/*Asercion de Tipo */
//  <tipo> Angel Bracket syntax
let userNombre: any;
let mensage: string = (<string>userNombre).length > 5 ? 
                        `Welcome {${userNombre}}`:
                        `Username is too short`;
let userNameWithId: any = 'luixaviles 1';
username = (<string>userNameWithId).substring(0,10);
//syntax "as"
let mensage2: string = (userNombre as string).length > 5 ? 
                        `Welcome {${userNombre}}`:
                        `Username is too short`;
let helloUser: any = 'hello user';
username = (helloUser as string).substring(6);

/*Funciones */
function crearPicture(title: string, date: string, size: squareSize){
    console.log('creado picture')
}
//parametros opcionales

function crearPicture2(title?: string, date?: string, size?: squareSize){
    console.log('creado picture')
};
//flat array function
let createPicture3 = (title: string, date: string, size: squareSize): object => {
    return {
        title,
        date,
        size
    }
};

/*Interfaces */
interface Picture {
    title: string;
    date: string;
    orientacion: PhotoOrientacion
}

function showPicture(picture: {title: string, date:string, orientacion: PhotoOrientacion}){
    console.log(`[title: ${picture.title}`);
}

function showPicture2(picture: Picture){
    console.log(`[title: ${picture.title}`);
}
let myPic = {
    title: 'test title',
    date: '2020-01',
    orientacion: PhotoOrientacion.landscape
}

showPicture(myPic);
showPicture({
    title: 'test title',
    date: '2020-10-21',
    orientacion: PhotoOrientacion.portrait
    //extra: 'text'  error
})

//interfaz opcional
interface PictureConfig {
    title?: string;
    date?: string;
    orientacion?: PhotoOrientacion
}

function generarPicture(config: PictureConfig){
    const pic = {title: 'DEFAULT', date: '2020-02'};
    if(config.title){
        pic.title = config.title;
    }
    if(config.date){
        pic.date = config.date;
    }
    return pic;
}
let pintura = generarPicture({});
console.log(pintura);

//readonly, atributos solo lectura
interface User {
    readonly id: number;
    name: string;
    ispro: boolean;
}
let usuario: User = {id: 10, name:'zd', ispro: true};
usuario.name='dfasf';
//usario.id= 20; //error;

//extension de interfaces

interface Entity {
    id: number;
    title: string;
}
interface Album extends Entity {
    descripcion: string;
    
}

interface Picture extends Entity{
    orientacion: PhotoOrientacion;
}

const album: Album = {
    id: 1,
    title: 'Meetups',
    descripcion: 'events arund the world'
}

let picture = {} as Picture;;
picture.id = 2;
picture.title = 'moon'
picture.orientacion = PhotoOrientacion.landscape;
/*Clases */
//clase publicas y privadas
//getters and setters
class Picture2 {
    private _id: number;
    #title: string; //privado, error descargar extension Javascript and TypeScrit Nightly
    orientacion: PhotoOrientacion;
    constructor(id: number, title:string, orientacion: PhotoOrientacion){
        this._id=id;
        this.#title=title;
        this.orientacion=orientacion;
    }
    toString(){
        return `${this._id} ${this.#title} ${this.orientacion}`;
    }
    //El nombre de una funcion accesora o getter, no debe coincider con el nombre de un atributo, añadir _
    get id(){
        return this._id;
    }
    set id(id:number){
        this._id=id;
    }
}

class Album2{
    id: number;
    public title: string;
    public pictures: Picture2[];
    constructor(id:number, title: string){
        this.id = id;
        this.title=title;
    }
    addPicture(picture: Picture2){
        this.pictures.push(picture);
    }
}

const album1: Album2 = new Album2(1,'sfasdf');
const picture1: Picture2 = new Picture2(1,"sdafasdf",PhotoOrientacion.landscape);
album1.addPicture(picture1);    
picture1.id=100; //public
picture1.id; //get id()

//herencia
//abstract
abstract class Item {
    protected readonly id: number; //readonly: modo lectura
    protected title: string;

    constructor(id:number, title: string){
        this.id = id;
        this.title=title;
    }
}

class Picture3 extends Item{
    static PhotoOrientacion: PhotoOrientacion; //atributo accesible a nivel de clase
    constructor(id: number, title:string){
        super(id,title);
    }
    toString(){
        return `${super.id} ${super.title}`;
    }
}
/*Export - Import 
export class Item3{

}

import moduleName from 'direccion'
*/

/*Principio de responsabilidad unica */
//definir un archivo por cada clase, enum, interfaz
//acceder a otro proyecto con el nombrede la carpeta
//tsc --project myFolder --watch

/*Resolviendo Modulos */
//tsc --moduleResolution (node | classic)
//clasic: modulo AMD, system, ES2015, poco configurable
//node: modulos commonjs o UMD, mas opciones de configuracion 
//"module": "valor"(tsconfig.json);
