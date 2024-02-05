//Realizar un semaforo utilizando funciones if else, switch y bucles for


function cambiarLuz(estadoActual: string): string {

   switch (estadoActual) {
      case 'rojo':
         estadoActual = 'verde'
         break;
      case 'verde':
         estadoActual = 'amarillo'
         break;
      case 'amarillo':
         estadoActual = 'rojo'
         break;
      default:
         console.log('el color no existe en el semaforo')
         break;
   }

   return estadoActual
}

function cicloDeSemaforo() {
   let estadoActual = "rojo";
   for (let i = 0; i <= 3; i++) {
      estadoActual = cambiarLuz(estadoActual)
   }
}

cicloDeSemaforo()

//1-. Función Regular: Declara una función llamada restar que tome dos argumentos a y b de tipo number y devuelva el resultado de restar b a a.

function restar(a: number, b: number): number {
   return a - b
}

//2-.Función de Flecha: Crea una función de flecha llamada multiplicar que tome dos argumentos a y b de tipo number y devuelva la multiplicación de a por b.
const multiplicar = (a: number, b: number) => {
   return a * b
}

//3-.Tipos de Funciones: Declara una variable de tipo función llamada division que tome dos argumentos de tipo number y devuelva un number. Asigna una función que realice la operación de división a esta variable.

const division = (a: number, b: number) => {
   return a / b
}

//4-.Parámetros Opcionales: Declara una función saludar que tome un parámetro nombre de tipo string y un parámetro opcional saludo de tipo string. Si se proporciona saludo, devolverá ${saludo}, ${nombre}. De lo contrario, devolverá ¡Hola, ${nombre}!.


const saludar = (nombre: string, saludo?: string) => {
   if (saludo) {
      return `${saludo}, ${nombre}`
   }
   return `¡Hola, ${nombre}!`

}

//5-. Parámetros por Defecto: Declara una función potencia que tome un argumento base de tipo number y otro argumento exponente de tipo number con un valor por defecto de 2. La función debe devolver el resultado de elevar base al exponente.
const potencia = (base: number, exponente: number = 2) => {
   return base ** exponente
}

//6-. Parámetros Rest: Declara una función calcularMedia que tome un número variable de argumentos de tipo number y devuelva la media aritmética de esos números.

const calcularMedia = (...numeros: Array<number>): number => {
   let suma = 0;
   for (let num of numeros) {
      suma += num;
   }
   return suma / numeros.length;
}

console.assert(restar(10, 5) === 5);
console.assert(multiplicar(2, 3) === 6);
console.assert(division(10, 2) === 5);
console.assert(saludar("Ana", "Buenos días") === "Buenos días, Ana");
console.assert(saludar("Ana") === "¡Hola, Ana!");
console.assert(potencia(2, 3) === 8);
console.assert(potencia(2) === 4);
console.assert(calcularMedia(1, 2, 3, 4) === 2.5);

//https://app.certidevs.com/roadmap/a54c6d62-128d-7cb3-a1c6-8d05a9c4a05a

/*
1. La clase debe llamarse "Employee".
2. La clase debe tener cuatro atributos tipados:
firstName: string
lastName: string
position: string
salary: number
3. Debes crear métodos "getters" y "setters" para cada uno de los atributos.
*/

class Employee {
   _firstName: string;
   _lastName: string;
   _position: string;
   _salary: number;

   constructor(firstName: string, lastName: string, position: string, salary: number) {
      this._firstName = firstName,
         this._lastName = lastName,
         this._position = position,
         this._salary = salary

   }


   setFirstName(firstName: string) {
      this._firstName = firstName
   }

   setLastName(lastName: string) {
      this._lastName = lastName
   }

   setPosition(position: string) {
      this._position = position
   }

   setSalary(salary: number) {
      this._salary = salary
   }

   getFirstName() {
      return this._firstName
   }

   getLastName() {
      return this._lastName
   }
   getPosition() {
      return this._position
   }
   getSalary() {
      return this._salary
   }
}

const empleado = new Employee("Carlos", "González", "Desarrollador", 50000);
console.log(empleado.getFirstName());  // Debe imprimir "Carlos"
console.log(empleado.getLastName());   // Debe imprimir "González"
console.log(empleado.getPosition());   // Debe imprimir "Desarrollador"
console.log(empleado.getSalary());     // Debe imprimir 50000

empleado.setFirstName("María");
console.log(empleado.getFirstName());  // Debe imprimir "María"