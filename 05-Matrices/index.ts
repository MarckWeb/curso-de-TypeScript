
//primera forma de declarar una matriz
let lista: number[] = [1, 2, 3,];

//segundo forma de declarar
let numeros: Array<number> = [1, 2, 3];

//No hay ninguna ventaja a la hora de usar una u otra, por lo que tendrá que decidir qué sintaxis usar.


//Array String
const nombres: String[] = ['dvd', 'marc', 'john']
const sem: Array<string> = ['lunes', 'Martes']

//array diferentes tipos
const arrayAny: any[] = [1, 'hola', 2, true]

//ARRAYS DE ARRAYS
let semana: (string | string[])[] = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", ["sabado", "Domingo"]];

console.log(semana[5][0])

//ARRAYS BIDIMENCIONAL
let arrayBidimensional: number[][] = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]
];

// Acceso a elementos del array bidimensional
let valor: number = arrayBidimensional[1][2]; // Obtiene el valor 6
console.log(valor)

//ARRAY MULTIDIMENCIONAL
let arrayMultidimensional: (number | string)[][][] = [
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
let valorMultidimensional: number | string = arrayMultidimensional[1][0][2]; // Obtiene el valor "c"
console.log(valorMultidimensional);

/* 
- El primer par de corchetes ([]) indica que estamos tratando con un array.
- El segundo par de corchetes ([]) indica que cada elemento de ese array es, a su vez, otro array.
- El tercer par de corchetes ([]) indica que cada elemento de ese último array es de tipo number o string.
*/


//TUPLAS-. deben tener un numero fijo de elementos, y se debe declarar el tipo por cada elemento de la tupla de forma ordenada. ejemplo

const arrayTuplas: [string, number, boolean] = ['hola', 1, true]

//En las tuplas se acceden de la misma manera que un array indicando su indice y con corchetes
let tuplaPersona: [number, string, string[]] = [2, "miNombre", ["marck", 'uno']]
console.log(tuplaPersona[2])

let personas: [number, string][];
personas = [
   [1, 'carlos'],
   [2, 'marck'],
   [3, 'jhon']
]

console.log(personas[1])

for (let i: number = 0; i < 3; i++) {
   console.log(personas[i][1])

}


//Convertir tuplas en array para aumentar elementos
let miTupla: [number, string, boolean] = [42, "hola", true];

// Convertir la tupla en un array
let miArray: (number | string | boolean)[] = [...miTupla];

// Usar métodos de array
miArray.push("otro elemento");
console.log(miArray); // [42, "hola", true, "nuevo elemento"]

miArray[0] = 100; // 42 cambiara para nuevo mes
miArray[5] = "index5"; // creamos nuevo elemento en posicion 5 porque no la tenemos
console.log(miArray)
console.table(miArray);
