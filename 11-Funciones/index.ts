//La sintaxis para declarar una función con nombre en TypeScript es la misma que para definir una en JavaScript. La única diferencia con TypeScript es que puede proporcionar una anotación de tipo para los parámetros de la función y el valor devuelto.

function agregarNumeros(numero1: number, numero2: number): number {
   return numero1 + numero2;
}

console.log(agregarNumeros(2, 2))


//el number fuera de los paremtises indica el tipo de retorno
let numeros = function (x: number, y: number): number {
   return x + y;
}
console.log(numeros(1, 2));

//FUNCION ANONIMA -. no tiene nombre y se ejecuta si tiene codigo dentro su cuerpo o asoiciado a un avariable o cuando esta dentro de uan funcion

let sum = function (input: number[]): number {
   let total: number = 0;
   for (let i = 0; i < input.length; i++) {
      if (isNaN(input[i])) {
         continue;
      }
      total += Number(input[i]);
   }
   return total;
}

console.log(sum([2, 4, 6]))

//FUNCIONES FLECHA
//Las funciones de flecha de una sola línea pueden usar una sintaxis de cuerpo concisa o una devolución implícita, que permite la omisión de llaves y la palabra clave return.
let masNumeros = (numero1: number, numero2: number): number => numero1 + numero2;

console.log(masNumeros(5, 10))


//funcion fecla con return
const total2 = (arrayInput: number[]): number => {
   let total: number = 0;
   for (let i = 0; i < arrayInput.length; i++) {
      if (isNaN(arrayInput[i])) {
         continue;
      }
      total += Number(arrayInput[i]);
   }
   return total;
}


//------------------
const aprendiendo = function (tecnologia: string, tecnologia2: string) {
   console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}

aprendiendo('TypeScript', 'Node.js')
// arrow function

const aprendiendo2 = (tecnologia: string, tecnologia2: string) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;
console.log(aprendiendo2('TypeScript', 'Node.js'));


//----------

interface Carrito {
   Nombre: string;
   precio: number;
}
const carrito: Carrito[] = [
   { Nombre: "Monitor 30 pul", precio: 500 },
   { Nombre: "Tablet", precio: 400 },
   { Nombre: "Nevera", precio: 550 },
   { Nombre: "Televisor", precio: 700 },
   { Nombre: "Celular", precio: 900 },
]

const nuevoArray = carrito.map(p => `${p.Nombre} - Precio: ${p.precio}`)

carrito.forEach(p => console.log(`${p.Nombre} - Precio: ${p.precio} `));


console.log(nuevoArray);