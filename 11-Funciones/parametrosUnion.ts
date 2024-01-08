
//en la funcion no sabemos si daremos un mensaje de numeros o estring por lo tanto, usaremos union para controlar los distintos valores.
function mostrarAlerta(mensaje: string | number) {
   alert('El mensaje es ' + mensaje)
}

console.log(mostrarAlerta('grandioso'))


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
function sum2(input: number[]): number {
   let total: number = 0;
   for (let count = 0; count < input.length; count++) {
      if (isNaN(input[count])) {
         continue;
      }
      total += Number(input[count]);
   }
   return total;
}

//FUNCIONES CON PARAMETROS OPCIONALES
//Los parámetros de ruta se pueden convertir en opcionales si se anexa un signo de interrogación (?) al final del nombre del parámetro.

function sumarNumeros(x: number, y: number, z?: number): number {
   if (z === undefined) {
      return x + y;
   } else {
      return x + y + z;
   }
}

console.log(sumarNumeros(2, 2, 2)) //6
console.log(sumarNumeros(2, 2)) //4


//FUNCIONES CON PARAMETROS PREDETERMINADOS
//al igual que con los parámetros opcionales, los parámetros predeterminados deben aparecer después de los parámetros necesarios en la lista de parámetros.


function restarNumeros(x: number, y = 20): number {
   return x - y;
}

console.log(restarNumeros(5, 10)) // -5
console.log(restarNumeros(5)) // -15


//FUNCIONES CON PARAMETROS REST
//se usan parametros rest cuando no se sabe la cantidad de parametros que pueda tener la funcion, 

//Los parámetros de REST se tratan como un número sin límite de parámetros opcionales.

//un parametro rest debe ser de un tipo u no ser de tipo union

let agregarVariosNumeros = (numero1: number, ...restoDeNumeros: number[]): number => {
   let total: number = numero1;
   for (let contador = 0; contador < restoDeNumeros.length; contador++) {
      if (isNaN(restoDeNumeros[contador])) {
         continue;
      }

      total += Number(restoDeNumeros[contador]);
   }

   return total
}

//La función ahora puede aceptar uno o más valores y devolver el resultado.


console.log(agregarVariosNumeros(1, 2, 3, 4, 5))
console.log(agregarVariosNumeros(10))
console.log(agregarVariosNumeros(10))

//Parámetros de objeto desconstruido
//Esta técnica permite usar una interfaz para definir parámetros con nombre, en lugar de posicionales(asar parametro segun orden y posicion), en las funciones.

interface Mensaje {
   texto: string;
   remitente: string
}

function verMensaje({ texto, remitente }: Mensaje) {
   console.log(`Mensaje de ${remitente}: ${texto}`)
}

//se define parametro desordenado, pero asignando el nombre
console.log(verMensaje({ remitente: 'Marck', texto: 'Muchas felicidades pro el logro hasta ahora' }))