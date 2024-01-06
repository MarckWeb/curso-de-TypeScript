"use strict";
//. Los tipos Union e Intersection ayudan a controlar situaciones en las que un tipo se compone de dos o más tipos posibles
//Tipos de unión
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
    throw new Error('El parametro debe ser un numero o cadena');
}
console.log(add('one', 'two'));
console.log(add(2, 3));
console.log(add('one', 5));
