class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  //Utilizaremos un observer, esto estara observando nuestros atributos
      //Es como indicarle al componente cuales son los atributos tendra
        //Si hay algo en otro que no esta en esta lista no es de el componente
  static get observedAttributes() {
      //Aqui le decimos al observador que atributos tendra nuestro componente
        //Si hay otro atributo que no este aqui este no sera de importancia
    return ["title", "parrafo", "img"];
  }
 //Ya teniendo los atributos que seran observados podremos utilizar el
      //attributeChangedCallback
        //Esta funcion recibe tres parametro
          // 1. valor actual
          // 2. valor viejo
          // 3. nuevo valor
  /*
  Una alternativa más eficiente que se me ocurre para no poner tantos if’s es usar directamente el attr como key para el this, de esta forma:

    attributeChangedCallback(attr, oldVal, newVal) {

        this[attr] = newVal;

    }
  */

  attributeChangedCallback(attr, oldVal, newVal) {
      //Aqui vamos a generar los cambios de acuerdo a lo que existe en los atributos

    //aqui hacemos una validacion para verificar si existe el atributo en nuestro componente
    if (attr === "title") {
      this.title = newVal;
    }
     //le asignamos a la variable title que obtenemos desde el observador de
          //nuestro componente un nuevo valor 
    //Esto quiere decir que si hay un nuvelo valor se tiene que hacer el cambio de 
      //Forma dinamica
    if (attr === "parrafo") {
      this.parrafo = newVal;
    }
    if (attr === "img") {
      this.img = newVal;
    }
  }
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section>
        <h2>${this.title}</h2>
        <div>
         <p>${this.parrafo}</p>
         <img src=${this.img}/>
        </div>
      </section>
      ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
      <style>
        h2 {
          color: red;
        }
      </style>
    `;
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}
customElements.define("my-element", myElement);
