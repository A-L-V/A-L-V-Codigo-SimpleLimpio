class myElement extends HTMLElement {
  constructor() {
    super();
     //Venimos al constructor que es donde generamos la instancia de esta api
      //Agregamos shadow down (API) y lo ponemos en modo open
    this.attachShadow({ mode: "open" });
  }
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section>
        <h2 class="title">Hola Shadow DOM!</h2>
        <div>
          <p>Shadow DOM

          Con esta implementación podremos solucionar los problemas con los estilos css que se rescriben por temas de especificidad.
          
          Generando como un encapsulado, un dom independiente dentro de nuestro dom global, esto que quiere decir que todo lo que coexista en nuestro dom independiente no va existir dentro de nuestro dom global.</p>
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
    //Ahora poder renderizar nuestros templates tenemos que cambiar el contexto
     //Donde agregamos nuestro template ya que lo estabamos agregando al dom global
      //Ahora debemos agregarlo en nuestro shadow dom que es otro contexto diferene
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}
customElements.define("my-element", myElement);
