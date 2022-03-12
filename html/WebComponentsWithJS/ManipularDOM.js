/*Leer nodos*/

parent.getElementById('id')// => nos permite obtener un elemento a través de su id.

parent.getElementsByClassName('class')// => obtiene un array con todos los elementos hijos que tengan esa clase, ojo “getElementByClassName” no existe, es decir no podremos obtener solo 1 elemento con esa clase.

parent.getElementsByTagName('div') //=> con este método obtenemos una lista o “array list” con todos los elementos que tengan esa etiqueta, ejemplo todos los divs. Al igual que con el método anterior no hay posibilidad de usarlo en singular, siempre tendremos que usar getElements

parent.querySelector() //=> nos permite buscar de 3 formas, con id, clase o tagName. A diferencia de los 2 anteriores este nos devuelve 1 solo elemento, el primero que contenga el valor que se le paso. Id => ('#id'), class => ('.class'), tagName ('div')

parent.querySelectorAll() //=> este método retorna una array list con todos los elementos que tengan ese selector (id, class o tagName)

//Casi siempre el elemento “padre o parent” es document. ya que estamos haciendo referencia a todo el DOM, todo el documento y esto en ciertos casos nos permite evitar errores.
//ejemplo = const button = document.querySelector('#button)

/*Crear y Agregar*/
//crea etiqueta html
const titulo = document.createElement("h1");// => Solo se ha creado, aún no se agrega al DOM

//crea un texto, aun no se agrega al doom
const texto = document.createTextNode("¡Hola, Mundo!");

//appendChild  Agrega un hijo al final algún elemento
const parentElement = document.querySelector("selector")
parentElement.appendChild(texto)

//append 
/*Es la evolución de appendChild
Puedes agregar más de un nodo
Puedes agregar texto sin necesidad de usar createTextNode
IE 11: No soportado
 */
parentElement.append("agrego un texto", document.createElement("div"))


//insertBefore 
/* Nos permite poner un nodo antes de alguna referencia que tengamos */
// Obtengo la referencia del elemento del que quiero insertar antes:
const referencia = document.querySelector("selector")
// ¡Lo insertamos!
parentElement.insertBefore(titulo, referencia)

//InsertAdjacentElement
/*Es un método complejo pero el cual cuenta con una basta flexibilidad
Nos permite especificar donde poner el nuevo nodo con una lista de posiciones predefinidas 
Inserta nodos según las opciones que le pasemos:
beforebegin: Lo inserta antes del nodo
afterbegin: Lo inserta despues del nodo
beforeend: Lo inserta antes de donde finaliza el nodo
afterend: Lo inserta después de donde finaliza el nodo
*/
const nodo = document.createElement("span")
parentElement.insertAdjacentElement("beforebegin", nodo)

/*Eliminar nodos */
//Remove Child: Podemos eliminar un nodo según a un método que proviene del padre y pasamos la referencia a eliminar
padre.removeChild(nodoAEliminar)

//Remove: Es la evolución de remove child, No esta soportado en internet explorer
nodoAEliminar.remove()

//Replace Child:Nos permite remplazar un nodo
padre.replaceChild(nuevoNodo, aRemplazar)

//Existen otras formas de agregar nodos:
/*
node.outerHTML: Sirve para leer HTML para leer HTML
node.innerHTML: Sirve para escribir HTML
pero, tienen un problema de seguridad 
*/

/*Agregar atributos o propiedad*/
nodoImg.src= "";
nodoP.innerHtml = "";
nodoText.textContent = "xd";
/*Eventos */
button.addEventListener("click", () => {
	alert("Me has clickado 😄")
})

button.removeEventListener("click", ()=> {

})
//propagacion
/* 
<div id="div1">
    <div id="div2">
        <div id="div3">
            Hola
        </div>
    </div>
</div>
Si le ponemos un event listener a los 3 divs, y clicas dentro del div 3, también estás clicando el div2 (porque el div3 está dentro del div2), y a su vez estás clicando el div1 (porque estos 2 divs están dentro de div1), por tanto, el evento se va a propagar hacia los 3 divs
*/
//eliminar propagacion: generalmente dejarlo en default
node.addEventListener("click", evento => {
    evento.stopPropagation();
})

//delegacion 
nodoPadre.addEventListener("click", (evento) =>{
    if(evento.tarjet.nodeName== 'H2') 
        window.alert("hola");
})

/*intersection oberver
cargar imagenes cuando se vean
1.- HTML
        <button class="p-3">Agregar Imagen</button>
        <div id="images">

2.- index.js
*/
import {registerImage} from './lazy.js'
const max = 122;
const min = 1;
const addButton = document.querySelector('button');
const mountNode = document.getElementById("images");
const random = () => Math.floor(Math.random()*(max-min))+min; 

const createImageNode = () => {
    const container = document.createElement("div");
    container.className="p-4";

    const image = document.createElement("img");
    image.className="mx-auto";
    image.width = '320';
    image.src = `https://randomfox.ca/images/${random()}.jpg`;
    container.appendChild(image);

    return container;
}

addButton.addEventListener("click", ()=>{
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);

})



//archivo lazy.js
const isIntersecting= entry => {
    return entry.isIntersecting;
}

const loadImage = (entry) => {
    const container = entry.target;
    const img = container.firstChild();
    const url = img.dataset.src;
    image.src = url;
    console.log("holis");
    //deja de observar
    observer.unobserve(nodo);
}

const observer = new IntersectionObserver((entries)=> {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
});

export const registerImage = image => {
    observer.observe(image)
}

/*lazi loading */
//index.js
import {registerImage} from './lazy.js'
const max = 122;
const min = 1;
const addButton = document.querySelector('button');
const mountNode = document.getElementById("images");
const random = () => Math.floor(Math.random()*(max-min))+min; 

const createImageNode = () => {
    const container = document.createElement("div");
    container.className="p-4";

    const image = document.createElement("img");
    image.className="mx-auto";
    image.width = '320';
    image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
    container.appendChild(image);

    return container;
}

addButton.addEventListener("click", ()=>{
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);

})
//lazy.js
const isIntersecting= entry => {
    return entry.isIntersecting;
}

const accion = (entry) => {
    const nodo = entry.target
    console.log("holis");
    //deja de observar
    observer.unobserve(nodo);
}

const observer = new IntersectionObserver((entries)=> {
    entries
        .filter(isIntersecting)
        .forEach(accion)
});

export const registerImage = image => {
    observer.observe(image)
}


/*Tip*/
/*
La diferencia entre NodeList y Array, es que el NodeList carece de métodos que si están disponibles en los Arrays, pero podemos pasar esto fácilmente usando el operador de propagación.
Recomendación importante cada vez que obtengamos un NodeList pásemelo a Array ya que los motores de javascript como el motor V8 de google están mas optimizados para Arrays que para NodeList.
const nodeList = document.querySelectorAll("selector css");
const elementList = [...nodeList];

hack: Cuando en el inspector de elementos seleccionas un elemento y en la consola escribes $0, este te devolverá el elemento tal como si lo hubieses seleccionado con document.querySelector().

Operaciones en lote:
*/
//Metodo simple
for(let i=0; i < 100; i++){
    const node = document.createElement('input');
    document.body.appendChild(node);
}
//append
const nodos = []
for(let i=0; i < 100; i++){
    const node = document.createElement('input');
    nodos.push(node);
}
document.body.appendChild(nodos);
/*API de internacionalizacion */

const formatPrecio = price => {
    return new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD',
    }).format(price)
}
