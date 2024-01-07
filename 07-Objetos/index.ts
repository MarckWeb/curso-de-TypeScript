

//Explicar las razones para usar una interfaz en TypeScript
// Declarar una interfaz y crear una instancia de esta
// Extender una interfaz
// Declarar una interfaz con tipos de matrices personalizados

// En typescript para declarar objetos, primero se debe declarar una interfaz para tipar los datos que contendra el objeto

//el unico trabajo de una interfaz es describir el tipo
interface Empleado {
   nombre: string;
   apellido: string;
   nombreCompleto(): string;
}

//definimos el objeto
let empleado: Empleado = {
   nombre: 'Bob',
   apellido: 'Robins',
   nombreCompleto(): string {
      return this.nombre + ' ' + this.apellido;
   }
}

//empleado.nombre = 10; //error

//las interfacez no tiene niguna representacion, son esenciales para documentar y validar las propiedades del objeto, ya que permite detectar errores en tiempo de compilacion.
interface Detalles {
   color: string;
   marca: string;
   tamano: string;
}
interface Producto {
   nombre: string;
   precio: number;
   disponibilidad: boolean;
   detalles: Detalles;
}

const producto: Producto = {
   nombre: "Zapatos Read",
   precio: 120,
   disponibilidad: true,
   detalles: {
      color: 'Blnaco',
      marca: 'Zahara',
      tamano: 'XL'
   }

}
//primera forma de acceder al valor de una propiedad
console.log(producto.nombre)
//segunda forma de acceder al valor de una propiedad
console.log(producto['nombre'])

producto.nombre = 'Camizas Blancas'
console.log(producto.nombre)
console.log(producto)
console.table(producto.detalles)