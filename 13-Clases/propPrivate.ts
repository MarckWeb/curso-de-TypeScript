//Asiganando propiedades privadas

//get => obtener
// set => asignar

class Cliente {
   private _nombre: string;
   private _saldo: number;

   constructor(nombre: string, saldo: number) {
      this._nombre = nombre;
      this._saldo = saldo;
   }

   get nombre() {
      return this._nombre;
   }

   set nombre(nombre) {
      this._nombre = nombre;
   }

   private mostrarInformacion() {
      return `Cliente: ${this._nombre}, tu saldo es de ${this._saldo}`;
   }

   static bienvenida() {
      return `Bienvendio al cajero`
   }

}

//no se puede acceder a ninguan propiedad de la clase por que todos son privados

let cliente1 = new Cliente('David', 500);


//console.log(cliente1.bienvenida())
console.log(Cliente.bienvenida())







//DIFERENCIA CON STATIC Y NO 

// Método de Instancia:
// Un método de instancia está asociado a instancias particulares de una clase. Esto significa que el método opera en los datos específicos de esa instancia y puede acceder a las propiedades y otros métodos de la instancia mediante la palabra clave this.

class Cajero {
   _name: string
   constructor(name: string) {
      this._name = name;
   }

   //bienvenida es un método de instancia porque usa this para acceder a la propiedad nombre de la instancia particular.
   bienvenida() {
      return `Bienvenido al cajero, ${this._name}!`;
   }
}

const miCajero = new Cajero("Juan");
console.log(miCajero.bienvenida()); // Output: Bienvenido al cajero, Juan!


//Método Estático:
//Un método estático está asociado a la clase en sí misma y no a instancias particulares. Esto significa que no tiene acceso a las propiedades específicas de una instancia usando this. En lugar de eso, se llama directamente en la clase.

class Cajero1 {
   static bienvenida() {
      return `Bienvenido al cajero`;
   }
}

console.log(Cajero1.bienvenida()); // Output: Bienvenido al cajero
// bienvenida es un método estático. No tiene acceso a ninguna instancia específica de Cajero porque no utiliza this. Puedes llamarlo directamente en la clase Cajero.