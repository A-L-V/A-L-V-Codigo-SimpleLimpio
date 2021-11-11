var hello = "xd";
var hello = "mala practica redeclararlo"
let wokrd = "hello world";
const helloWordls = 'Hello world!';

const anotherFunction = () => {
    console.log(hello)
    console.log(wokrd)
    console.log(helloWordls)
}

const helloword = () => {
    global = 'soy global';
}
//mala practica, ya que esa variable es global
helloword();
console.log(global);


anotherFunction();