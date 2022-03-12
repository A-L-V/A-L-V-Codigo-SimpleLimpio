class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
    <section>
      <h1> 
        <slot name="title"></slot> 
      </h1>
      <p>
        <slot name="parrafo"></slot>
      </p>
      <slot></slot>
    </section>

    ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
      <style>
      /*Podremos usar la pseudo clase sloted con el selector * para seleccionar todas las etiquetas que estan por fuera.*/
        ::slotted(*){

        }
/*También podremos seleccionar exactamente a cual etiqueta esta por fuera agregarle estilos
::sloted(etiquetaFuera){estilos}*/
        ::slotted(span) {
          font-size: 30px;
          color: red;
        }
/*También podremos cambiar los estilos utilizando una clase que tenga la etiqueta*/
        ::slotted(.text) {
          color: blue;
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
