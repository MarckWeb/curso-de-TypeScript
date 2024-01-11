//clases sirven para organizar codigo, no deha de ser objeto

class Person {
   protected names?: string;
   age?: number;
   constructor(names: string, age: number) {
      this.names = names,
         this.age = age
      this.saludar();
   }

   saludar(): void {
      console.log(`mi nombres es ${this.names} y tengo ${this.age}`)
   }
}

const personOne = new Person('david', 30)
console.log(personOne.saludar)

class Employeess extends Person {
   // Atributos -. variables o proiedades de la clase se puede ocntrolar dentro o 

   constructor(private readonly id: number, private name: string, private dept: string) {
      super(name, 30);
      this.showInfo();
   }

   // metodos -. son acciones que podemso llevar a cabo dentro de la clase o frura dependera de la visibilidad que le demos.

   showInfo(): void {
      this.names
      console.log(this.name + this.names)
   }
}
//unainstancia de la clase employe
const employeOne = new Employeess(1, 'dvd', '15')

console.log(employeOne.saludar())