var articulo = [
    {nombre: "bici", costo: 300},
    {nombre: "tv", costo: 500},
];

/*Recorrido */
//filtrar, poner a un nuevo array los filtrado, no cambia el original
var articulosFilters = articulo.filter(function(articulo){
    return articulo.costo <= 400
});
//map, mapear ciertos articulos
var nombreArticulos = articulo.map(function(articulo){
    return articulo.nombre
});


//find, filtra el articulo  
var encuentraArti = articulo.find(function(articulo){
    return articulo.nombre ==="tv"
});
//foreach, recorre el array
articulo.forEach(function(articulo){
    console.log(articulo.nombre);
})
//some, regresa validacion(true,false) si existe en la restriccion
var articuloBarato = articulo.some(function(articulo){
    return articulo.costo <= 300;
});

let numArray = [1,7,8,6];
numArray.push(6,7); //agrega elementos 
numArray = [1,7,8,6,6,7];
numArray.shift();//eliminar el primero
numArray.pop();//eliminar el ultimo 
numArray = [7,8,6,6];
