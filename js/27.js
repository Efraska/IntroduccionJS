// POO Object Constructor y Object Literal

/* Object Literal */
const producto = {
    nombre: 'Tablet',
    precio: 500,
    disponible: false
}

// Object Constructor

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} ${this.apellido}`;
}

function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

// Crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}

const producto2 = new Producto('Monitor Curvo de 49"', 800, true);
const producto3 = new Producto('Laptop', 300, false);
const producto4 = new Producto('Audifonos', 150, );
const producto5 = new Producto('Mouse', 100, );

const cliente = new Cliente('Efrain', 'Arevalo');

console.log(cliente);


function formatearProducto(producto) {
    return `El Producto ${producto.nombre} tienen un precio de: $ ${producto.precio} y su disponibilidad es: ${producto.disponible}`;
}

console.log(producto2);
console.log(producto2.formatearProducto() );
console.log(producto3.formatearProducto() );
