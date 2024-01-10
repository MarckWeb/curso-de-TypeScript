
//creacion de un clase

//Los getters se utilizan para obtener el valor de una propiedad, mientras que los setters se utilizan para asignar un nuevo valor a una propiedad, con la posibilidad de realizar validaciones o lógica adicional antes de realizar la asignación.

/*
// Utilizar el getter para obtener el nombre
console.log(persona1.nombre); // Output: Juan

// Utilizar el setter para modificar el nombre
persona1.nombre = "Carlos";
console.log(persona1.nombre); // Output: Carlos
*/

class Vehiculo {
   _marca: string;
   _color: string;
   _puertas: number;

   constructor(marca: string, color: string, puertas: number) {
      this._marca = marca;
      this._color = color;
      if ((puertas % 2) === 0) {
         this._puertas = puertas;
      } else {
         throw new Error('Las puertas deben ser pares')
      }
   }

   get marca() {
      return this._marca;
   }

   set marca(marca) {
      this._marca = marca;
   }

   get color() {
      return 'El color del vehiculo es ' + this._color;
   }

   set color(color) {
      this._color = color;
   }

   get puertas() {
      return this._puertas;
   }

   set puertas(puertas) {
      if ((puertas % 2) === 0) {
         this._puertas = puertas;
      } else {
         throw new Error('Las puertas deben ser pares')
      }
   }

   acelerar(rapido: number): string {
      return `${this.trabajo()} acelera a ${rapido} MPH`
   }

   frenar(): string {
      return `${this.trabajo()} frena con el sistema de frenado`
   }

   girar(direccion: 'izquierda' | 'derecha'): string {
      return `${this.trabajo()} girar a la ${direccion}`
   }

   trabajo(): string {
      return this._marca;
   }
}

let miVehiculo = new Vehiculo('kia', 'Azul', 4);

//Parametro que se pasa al constructor
console.log(miVehiculo.color);

//modificando valor del color usa get
miVehiculo.color = 'Amarillo';
console.log(miVehiculo)

//Propiedad definida en la clase
console.log(miVehiculo._color);

let miVehiculo2 = new Vehiculo('Galaxy', 'Rojo', 4);

console.log(miVehiculo2.puertas)


// let miVehiculo3 = new Vehiculo('Galaxy', 'Verde')
// console.log(miVehiculo.puertas)

console.log(miVehiculo.acelerar(35));
console.log(miVehiculo.frenar());
console.log(miVehiculo.girar('derecha'));


console.log(miVehiculo2.marca)
