import React from 'react';
import ReactDOM from 'react-dom';


function prop(props) {
	return(
		//recibimos el atributo saludo que se ejecuta el props
		<p>{props.saludo}</p>
	)
}
function prop(props) {
	return(
		//recibimos el contenido dentro del componente props
		<p>{props.children}</p>
	)
}
export default prop;