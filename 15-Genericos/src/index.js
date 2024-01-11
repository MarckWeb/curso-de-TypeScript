"use strict";
//FUNCION SIN GENERICOS -. y con any pierde la esencia de typescript
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(['Cats', 'Dogs', 'Birds']);
numberArray.push(25); // OK
stringArray.push('Rabbits'); // OK
numberArray.push('This is not a number'); // OK
stringArray.push(30); // OK
console.log(numberArray); // [5, 10, 15, 20, 25, "This is not a number"]
console.log(stringArray); // ["Cats", "Dogs", "Birds", "Rabbits", 30]
//En este ejemplo se vuelve a escribir la función getArray mediante genéricos. De este modo, la matriz puede aceptar cualquier tipo que se especifique al llamar a la función.
//////////se pasa aqui el tipo//
function obtenerArray(elementos) {
    return new Array().concat(elementos);
} /////////////y se rellena en los parametro y cuerpo///
//GENERICOS (T) -. llamados parametro de tipo o parametro generico, T es un nombre común para un genérico, pero puede asignarle el nombre que quiera.
let listaDeNumeros = obtenerArray([5, 10, 15, 20]);
listaDeNumeros.push(25);
//listaDeNumeros.push('este no acepta el array de numero pro string')
let listaDeCadena = obtenerArray(['cats', 'dogs']);
listaDeCadena.push('rabbits');
//listaDeCadena.push(25) //error por que el tipo es string
//Uso de varias variables de tipO
//la función identity permite trabajar con diferentes tipos de datos y devuelve el mismo tipo que el valor pasado como primer argumento.
function identity(value, message) {
    //IMPRIME MENSAJE y DEVULEVE value.
    console.log(message);
    return value;
}
let returnNumber = identity(100, 'Hello!');
let returnString = identity('100', 'Hola!');
let returnBoolean = identity(true, 'Bonjour!');
returnNumber = returnNumber * 100; // OK
console.log(returnNumber);
console.log(returnString);
console.log(returnBoolean);
//returnString = returnString * 100;   // Error: Type 'number' not assignable to type 'string'
//returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'
