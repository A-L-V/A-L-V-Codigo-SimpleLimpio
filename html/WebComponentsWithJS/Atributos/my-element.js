class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    //inicializamos unas variable para generar el match y  obtener
      //El atributo de la etiqueta
    this.title = this.getAttribute("title");
    this.parrafo = this.getAttribute("parrafo");
    this.img = this.getAttribute("img");
  }
  getTemplate() {
    const template = document.createElement("template");
     //Quitamos los slots para probar los otros metodos de datos dinamicos
      //Utilizamos las variables que inicializamos para obtener los atributos
        //De las etiquetas dentro del template
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
