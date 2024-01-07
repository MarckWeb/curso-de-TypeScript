"use strict";
//primera forma de declarar una matriz
let lista = [1, 2, 3,];
//segundo forma de declarar
let numeros = [1, 2, 3];
//No hay ninguna ventaja a la hora de usar una u otra, por lo que tendrá que decidir qué sintaxis usar.
//Array String
const nombres = ['dvd', 'marc', 'john'];
const sem = ['lunes', 'Martes'];
//array diferentes tipos
const arrayAny = [1, 'hola', 2, true];
//ARRAYS DE ARRAYS
let semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", ["sabado", "Domingo"]];
console.log(semana[5][0]);
//ARRAYS BIDIMENCIONAL
let arrayBidimensional = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// Acceso a elementos del array bidimensional
let valor = arrayBidimensional[1][2]; // Obtiene el valor 6
console.log(valor);
//ARRAY MULTIDIMENCIONAL
let arrayMultidimensional = [
    [
        [1, 2, 3],
        [4, 5, 6]
    ],
    [
        ["a", "b", "c"],
        ["d", "e", "f"]
    ]
];
// Acceso a elementos del array multidimensional
let valorMultidimensional = arrayMultidimensional[1][0][2]; // Obtiene el valor "c"
console.log(valorMultidimensional);
/*
- El primer par de corchetes ([]) indica que estamos tratando con un array.
- El segundo par de corchetes ([]) indica que cada elemento de ese array es, a su vez, otro array.
- El tercer par de corchetes ([]) indica que cada elemento de ese último array es de tipo number o string.
*/
//TUPLAS-. deben tener un numero fijo de elementos, y se debe declarar el tipo por cada elemento de la tupla de forma ordenada. ejemplo
const arrayTuplas = ['hola', 1, true];
//En las tuplas se acceden de la misma manera que un array indicando su indice y con corchetes
let tuplaPersona = [2, "miNombre", ["marck", 'uno']];
console.log(tuplaPersona[2]);
let personas;
personas = [
    [1, 'carlos'],
    [2, 'marck'],
    [3, 'jhon']
];
console.log(personas[1]);
for (let i = 0; i < 3; i++) {
    console.log(personas[i][1]);
}
//Convertir tuplas en array para aumentar elementos
let miTupla = [42, "hola", true];
// Convertir la tupla en un array
let miArray = [...miTupla];
// Usar métodos de array
miArray.push("otro elemento");
console.log(miArray); // [42, "hola", true, "nuevo elemento"]
miArray[0] = 100; // 42 cambiara para nuevo mes
miArray[5] = "index5"; // creamos nuevo elemento en posicion 5 porque no la tenemos
console.log(miArray);
console.table(miArray);
