// Object Methods
// "use strict"; // Correr JS en modo estricto
//Objetos
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto);

producto.precio = 'NUEVO PRECIO';

delete producto.precio;

console.log(producto);