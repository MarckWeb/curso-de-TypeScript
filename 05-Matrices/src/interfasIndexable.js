"use strict";
//se puede usar interfaces que describan los tipos de matriz en los que se puede indexar.
let miHelado;
miHelado = ['chocolate', 'vainilla', 'extraberry'];
let miElemento = miHelado[0];
console.log(miElemento);
for (let indice in miHelado) {
    console.log(miHelado[indice]);
}
