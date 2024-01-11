//Implementación de genéricos con interfaces y clases-. Los genéricos son una forma de pasar tipos a un componente, por lo que no solo se pueden aplicar tipos nativos a variables de tipo genérico, sino también a interfaces, funciones y clases.

//DECLARACION DE UNA INTERFAS GENERICA-. sabiendo que los objetos se tipan con interfaces en este caso indentificar tendra dos parametros genericos que podrian ser string y number o reversa y al momento de utilizar la interface se asigan los tipos, sabiendo que valor es T, y mensaje es U.

interface Identificar<T, U> {
   valor: T;
   mensaje: U;
}

let retornarNumero: Identificar<number, string> = {
   valor: 25,
   mensaje: 'Hola!'
}

let retornarCadena: Identificar<string, number> = {
   valor: 'Hola!',
   mensaje: 25
}

//DECLARACION DE UNA INTERFAZ GENERICA COMO UN TIPO DE FUNCION

interface IdentificarProceso<T, U> {
   (valor: T, mensaje: U): T;
}

function procesoDeIdentificacion<T, U>(valor: T, mensaje: U): T {
   console.log(mensaje);
   return valor;
}

let procesos: IdentificarProceso<number, string> = procesoDeIdentificacion;
let retornarNumero1 = procesos(100, 'hola');
//let retornarString1 = procesos('hola', 100)//error pro que valor es de tipo nnumero

//DECLARACION DE UNA INTERFAZ GENERICA COMO UN TIPO DE CLASE

interface Producto<T, U> {
   cantidad: T;
   nombre: U;
   descripcion(): T;
}

class MostrarProducto<X, Y> implements Producto<X, Y> {
   cantidad: X;
   nombre: Y;
   constructor(cant: X, msg: Y) {
      this.cantidad = cant;
      this.nombre = msg;
   }

   descripcion(): X {
      console.log(this.nombre);
      return this.cantidad
   }
}

let producto1 = new MostrarProducto<number, string>(100, 'Caramelos');
producto1.descripcion();
// producto1.cantidad = '100'; //error cantidad es de tipo number

//DEFINICION DE UNA CLASE GENERICA -. También puede declarar una clase genérica sin una interfaz. En este ejemplo se declara processIdentity como una clase genérica sin implementar la interfaz ProcessIdentity.

//se coloca T y U, para especificar el tipo
class processIdentity<T, U> {
   private _value: T;
   private _message: U;
   constructor(value: T, message: U) {
      this._value = value;
      this._message = message;
   }
   getIdentity(): T {
      console.log(this._message);
      return this._value
   }
}

//Aqui se espefica el tipo de T y U
let processor = new processIdentity<number, string>(100, 'Hello');
processor.getIdentity();      // Displays 'Hello'


//Implementación de genéricos con tipos y clases personalizados

// El uso de genéricos con tipos primitivos (como number, string o boolean) ilustra bien los conceptos de los genéricos, pero resulta más eficaz usarlos con tipos y clases personalizados.

// En este ejemplo hay una clase base denominada Car y dos subclases, ElectricCar y Truck. La función accelerate acepta una instancia genérica de Car y, después, la devuelve. Al indicar a la función accelerate que T debe extender Car, TypeScript sabe a qué funciones y propiedades se puede llamar dentro de la función. El genérico también devuelve el tipo específico del objeto "Car" (ElectricCar o Truck) que se pasa a la función, en lugar de un objeto Car no específico.

class Car {
   make: string = 'Generic Car';
   doors: number = 4;
}
class ElectricCar extends Car {
   make = 'Electric Car';
   doors = 4
}
class Truck extends Car {
   make = 'Truck';
   doors = 2
}
function accelerate<T extends Car>(car: T): T {
   console.log(`All ${car.doors} doors are closed.`);
   console.log(`The ${car.make} is now accelerating!`)
   return car
}

let myElectricCar = new ElectricCar;
accelerate<ElectricCar>(myElectricCar);
let myTruck = new Truck;
accelerate<Truck>(myTruck);

//salida de la consola

// "All 4 doors are closed."
// "The Electric Car is now accelerating!"
// "All 2 doors are closed."
// "The Truck is now accelerating!"

// Uso de restricciones genéricas con tipos y clases personalizados
// Anteriormente en el módulo, ha aprendido a usar restricciones genéricas para limitar los tipos. Las restricciones genéricas no solo se pueden aplicar a tipos nativos, sino también a clases.

// Para ello, puede definir una interfaz y usar la palabra clave extend con la variable de tipo para extenderla. En el ejemplo anterior se restringe el tipo T adjuntándole una restricción: T debe extender Car.


//https://learn.microsoft.com/es-es/training/modules/typescript-generics/5-implement-generics-custom-types-classes