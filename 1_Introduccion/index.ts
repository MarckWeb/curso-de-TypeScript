/*
Para declara una variable se declara de la sihueinte manera
variableNombre: tipo ==> let miVariable:Sting*/

//1-. Iniciamos la variables

//BOLEANOS
let flag: boolean;
let yes = true;
let no = false;
flag = true;
flag = false;

let state = 2 == 2 ? true : false
console.log(state)

//no pueden tener numerso y string cuando se declara una variable tipo string o number

//yes = 10 //error
//state = "hola a todos"; //error

//NUMEROS

let numero: number;
let cantidad = 0;
let numeroDecimal: number = 123.456;
//let big: bigint = 100n;
numero = 100

console.log(numero + numeroDecimal);
