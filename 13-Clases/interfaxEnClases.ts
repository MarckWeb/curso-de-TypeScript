//en Typescript, puede usar una interfaz para establecer un "contrato de código" que describa las propiedades requeridas de un objeto y sus tipos. Por lo tanto, se puede utilizar una interfaz para asegurar la forma de la instancia de la clase


//la interfaz incluye los parámetros del constructor, no las propiedades.
interface Vehicle {
   make: string;
   color: string;
   doors: number;
   accelerate(speed: number): string;
   brake(): string;
   turn(direction: 'left' | 'right'): string;

}

//Al implementar una interfaz, estás estableciendo un contrato. La clase debe proporcionar implementaciones para cada miembro de la interfaz, asegurando así que cualquier instancia de la clase también cumpla con la estructura y comportamiento definidos por la interfaz.

//Por ejemplo, si intentas crear una instancia de Car sin proporcionar un método como accelerate, TypeScript te mostrará un error, ya que accelerate es un método requerido por la interfaz Vehicle que no se ha implementado en la clase Car. lo mimso parasara con los parametros en el constructor y es logico en los manejadores get y set


class Car implements Vehicle {
   // Properties
   private static numberOfCars: number = 0;
   private _make: string;
   private _color: string;
   private _doors: number;

   // Constructor
   constructor(make: string, color: string, doors = 4) {
      this._make = make;
      this._color = color;
      if ((doors % 2) === 0) {
         this._doors = doors;
      } else {
         throw new Error('Doors must be an even number');
      }
      Car.numberOfCars++;
   }

   // Accessors
   get make() {
      return this._make;
   }

   set make(make) {
      this._make = make;
   }

   get color() {
      return 'The color of the car is ' + this._color;
   }
   set color(color) {
      this._color = color;
   }

   get doors() {
      return this._doors;
   }
   set doors(doors) {
      if ((doors % 2) === 0) {
         this._doors = doors;
      } else {
         throw new Error('Doors must be an even number');
      }
   }

   // Methods
   accelerate(speed: number): string {
      return `${this.worker()} is accelerating to ${speed} MPH.`
   }

   brake(): string {
      return `${this.worker()} is braking with the standard braking system.`
   }
   turn(direction: 'left' | 'right'): string {
      return `${this.worker()} is turning ${direction}`;
   }
   // This function performs work for the other method functions
   protected worker(): string {
      return this._make;
   }

   public static getNumberOfCars(): number {
      return Car.numberOfCars;
   }

}

class ElectricCar extends Car {
   // Properties unique to ElectricCar
   private _range: number;

   // Constructor
   constructor(make: string, color: string, range: number, doors = 2) {
      super(make, color, doors);
      this._range = range;
   }

   // Accessors
   get range() {
      return this._range;
   }
   set range(range) {
      this._range = range;
   }

   // Methods
   charge() {
      console.log(this.worker() + " is charging.")
   }

   // Overrides the brake method of the Car class
   //Tenga en cuenta que la firma del parámetro y el tipo de valor devuelto del método brake deben ser los mismos que los del método brake de la clase Car.
   brake(): string {
      return `${this.worker()}  is braking with the regenerative braking system.`
   }

}

let spark = new ElectricCar('Spark Motors', 'silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors);         // returns the default, 2
spark.charge();

console.log(spark.brake());  // returns "Spark Motors is braking with the regenerative braking system"


//Si va a crear una aplicación de pila completa con implementaciones de cliente y de servidor, normalmente deberá definir cómo se estructurarán los datos. Si los datos en cuestión fueran para almacenar información sobre un perro, por ejemplo, podría crear una interfaz con el siguiente aspecto:

interface Dog {
   id?: number;
   name: string;
   age: number;
   description: string;
}

//Esta interfaz se puede usar en un módulo compartido para el código de cliente y de servidor, asegurándose de que la estructura de datos es la misma en ambos lados. En el cliente, puede tener código para recuperar el perro de la API del servidor que defina, que se parece a lo siguiente:

// async loadDog(id: number): Dog {
//    return await (await fetch('demoUrl')).json() as Dog;
// }


//La diferencia clave entre las interfaces y las clases en cualquier lenguaje de programación es que las clases permiten definir los detalles de la implementación. Las interfaces definen únicamente cómo se estructuran los datos. Las clases permiten definir métodos, campos y propiedades. Las clases también proporcionan una forma de crear plantillas de objetos, definiendo valores predeterminados.

class DogRecord implements Dog {
   id: number;
   name: string;
   age: number;
   description: string;

   constructor({ name, age, description, id = 0 }: Dog) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.description = description;
   }

   // static load(id: number): DogRecord {
   //    // code to load dog from database
   //    return dog ;
   // }

   save() {
      // code to save dog to database
   }
}


//Mientras utilice TypeScript, encontrará muchos nuevos casos en los que las interfaces, en particular, le facilitarán la vida como desarrollador. Una característica clave de TypeScript para recordar sobre las interfaces es que no requieren una clase. Por ello, puede utilizarlas siempre que necesite la capacidad de definir una estructura de datos sin tener que crear una implementación de clase completa.

