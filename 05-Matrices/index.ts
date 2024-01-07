//. Los tipos Union e Intersection ayudan a controlar situaciones en las que un tipo se compone de dos o más tipos posibles


//Tipos de unión -- no se sabe el tipo de dato que tendra, Un tipo de unión describe un valor que puede ser uno de entre varios tipos

let multiplesTipos: number | boolean;
multiplesTipos = 20; //valido
multiplesTipos = true //valido
//multiplesTipos = "hola" //invalido

function add(x: number | string, y: number | string) {
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


//Tipos de intersección --Los tipos de intersección están estrechamente relacionados con los tipos de unión, pero se usan de manera muy diferente. Un tipo de intersección combina dos o más tipos para crear uno que tiene todas las propiedades de los tipos existentes

interface Empleado {
   empleadoID: number;
   edad: number;
}

interface Gerente {
   accion: boolean;
}

type GerenteEmpleado = Empleado & Gerente;
let nuevoGerente: GerenteEmpleado = {
   empleadoID: 12345,
   edad: 34,
   accion: true
};

console.log(nuevoGerente)

//Tipos literales -- se denomina asi por que podria contener variso valores

type resultado = "completo" | 'incompleto' | 'medio';
let miResultado: resultado;
miResultado = "completo";
//miResultado = "completar"; //error invalido
miResultado = "incompleto"

console.log(miResultado)

//tipos literales numericos
type numeros = 1 | 2 | 3 | 4 | 5 | 6;
let numero: numeros;
numero = 5

console.log(numero)

//https://learn.microsoft.com/es-es/training/modules/typescript-declare-variable-types/7-collection-types