"use strict";
//en la funcion no sabemos si daremos un mensaje de numeros o estring por lo tanto, usaremos union para controlar los distintos valores.
function mostrarAlerta(mensaje) {
    alert('El mensaje es ' + mensaje);
}
console.log(mostrarAlerta('grandioso'));
//los tipados en typescript son importantes ya que si en una funcion que tiene como parametro un array y le enviamos un numero, javascript lo procesara pero no enviara un resultado valido o correcto, por lo tanto typescrip antes de procesar alertara del error.
//funcion javascript
// function sum1(input) {
//    let total = 0;
//    for (let count = 0; count < input.length; count++) {
//       if (isNaN(input[count])) {
//          continue;
//       }
//       total += Number(input[count]);
//    }
//    return total;
// }
//funcion typescript
function sum2(input) {
    let total = 0;
    for (let count = 0; count < input.length; count++) {
        if (isNaN(input[count])) {
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}
