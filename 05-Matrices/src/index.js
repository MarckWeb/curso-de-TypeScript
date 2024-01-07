"use strict";
//. Los tipos Union e Intersection ayudan a controlar situaciones en las que un tipo se compone de dos o más tipos posibles
//Tipos de unión -- no se sabe el tipo de dato que tendra, Un tipo de unión describe un valor que puede ser uno de entre varios tipos
let multiplesTipos;
multiplesTipos = 20; //valido
multiplesTipos = true; //valido
//multiplesTipos = "hola" //invalido
function add(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    //throw new Error('El parametro debe ser un numero o cadena')
}
console.log(add('one', 'two'));
console.log(add(2, 3));
console.log(add('one', 5));
let nuevoGerente = {
    empleadoID: 12345,
    edad: 34,
    accion: true
};
console.log(nuevoGerente);
let miResultado;
miResultado = "completo";
//miResultado = "completar"; //error invalido
miResultado = "incompleto";
console.log(miResultado);
let numero;
numero = 5;
console.log(numero);
//https://learn.microsoft.com/es-es/training/modules/typescript-declare-variable-types/7-collection-types
