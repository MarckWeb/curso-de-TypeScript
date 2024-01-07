"use strict";
//Explicar las razones para usar una interfaz en TypeScript
// Declarar una interfaz y crear una instancia de esta
// Extender una interfaz
// Declarar una interfaz con tipos de matrices personalizados
//definimos el objeto
let empleado = {
    nombre: 'Bob',
    apellido: 'Robins',
    nombreCompleto() {
        return this.nombre + ' ' + this.apellido;
    }
};
const producto = {
    nombre: "Zapatos Read",
    precio: 120,
    disponibilidad: true,
    detalles: {
        color: 'Blnaco',
        marca: 'Zahara',
        tamano: 'XL'
    }
};
//primera forma de acceder al valor de una propiedad
console.log(producto.nombre);
//segunda forma de acceder al valor de una propiedad
console.log(producto['nombre']);
producto.nombre = 'Camizas Blancas';
console.log(producto.nombre);
console.log(producto);
console.table(producto.detalles);
