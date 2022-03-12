class myElement extends HTMLElement {
  constructor() {
    super();
  }
    //Generamos una funcion en cual tendremos nuestro template html y esta
    //Funcion retornara este template
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section>
        <h2 class="title">Hola mundo!</h2>
        <div>
          <p>
          Basicamente la API Template nos permite conectar un web component de forma más profesional y organizada. También nos ayuda a clonar los elementos facilmente (Ya que como lo hicimos en la clase anterior el elemento no se clonaba, sino que se pasaba de etiqueta en etiqueta hasta la ultima en ser renderizada)
          La etiqueta template
            Es una etiqueta que nos sirve como contenedor de código. Todo lo que escribamos adentro de esta etiqueta no se va a renderizar , sino que hay que activarlo mediante Javascript. El profesor sin embargo no muestra cual es dicho proceso y procede a utilizar una forma distinta. En el siguiente enlace vas a ver cómo se activa desde JS:
          </p>
        </div>
      </section>
      ${this.getStyles()}
    `;
    return template;
  }

   //Podremos generar otro metodo para poner los estilos, pero esto mas que todo se hace por simples
    //Buenas practicas pero se puede hacer de otras maneras.
  getStyles() {
    return `
      <style>
        h2 {
          color: red;
        }
      </style>
    `;
  }

    //Generamos otro metodo para que el contenido de nuestra etiqueta template se pueda clonar
    //Para poderlo agregar al dom
  render() {
      //Agregamos el elemento al dom por dentro utilzamos la funcion que genera el template
      //y utilizamos el content.clone(true) para clonar el elemento
        //Le ponemos true porque si este fuera false solo tomaria las etiquetas padre y no
          //Todo lo que tienen por dentro las etiquetas

    this.appendChild(this.getTemplate().content.cloneNode(true));
  }
  
  connectedCallback() {
    //Inicializamos en el dom el metodo de render
    this.render();
  }
}
customElements.define("my-element", myElement);
