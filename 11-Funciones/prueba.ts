
//FUNCIONES DECLARADAS CON TIPOS E INTERFACES

type calculator = (x: number, y: number) => number;


//creamos dos varaibles usando calculator
let addNumbers: calculator = (x: number, y: number): number => x + y;
let subtractNumbers: calculator = (x: number, y: number): number => x - y;

console.log(addNumbers(1, 2));
console.log(subtractNumbers(1, 2));


//También puede utilizar el tipo de función calculator para pasar valores de otra función
let doCalculation = (operation: 'add' | 'subtract'): calculator => {
   if (operation === 'add') {
      return addNumbers;
   } else {
      return subtractNumbers;
   }
}

console.log(doCalculation('add')(1, 2))
console.log(doCalculation('subtract')(1, 2))


//probando declarar funciones con interface

// interface Calculator {
//    (x: number, y: number): number;


//sobre todo las intefaces en un funciones son muy inprotantes en clases.


// }
//al llamar  a la funcion no es necesario que los nombres de los parametros sean iguales

// let addNumbers: Calculator = (x: number, y: number): number => x + y;
// let addNumbers: Calculator = (number1: number, number2: number): number => number1 + number2;

// let addNumbers: Calculator = (num1, num2) => num1 + num2;