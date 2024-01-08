"use strict";
//La sintaxis para declarar una función con nombre en TypeScript es la misma que para definir una en JavaScript. La única diferencia con TypeScript es que puede proporcionar una anotación de tipo para los parámetros de la función y el valor devuelto.
function agregarNumeros(numero1, numero2) {
    return numero1 + numero2;
}
console.log(agregarNumeros(2, 2));
//el number fuera de los paremtises indica el tipo de retorno
let numeros = function (x, y) {
    return x + y;
};
console.log(numeros(1, 2));
//FUNCION ANONIMA -. no tiene nombre y se ejecuta si tiene codigo dentro su cuerpo o asoiciado a un avariable o cuando esta dentro de uan funcion
let sum = function (input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
console.log(sum([2, 4, 6]));
//FUNCIONES FLECHA
//Las funciones de flecha de una sola línea pueden usar una sintaxis de cuerpo concisa o una devolución implícita, que permite la omisión de llaves y la palabra clave return.
let masNumeros = (numero1, numero2) => numero1 + numero2;
console.log(masNumeros(5, 10));
//funcion fecla con return
const total2 = (arrayInput) => {
    let total = 0;
    for (let i = 0; i < arrayInput.length; i++) {
        if (isNaN(arrayInput[i])) {
            continue;
        }
        total += Number(arrayInput[i]);
    }
    return total;
};
