//Uso de los métodos y las propiedades de un tipo genérico

function identity1<T, U>(value: T, message: U): T {
   //let result: T = value + value;    // Error porque no sabe qué valor se le pasará en tiempo de ejecución
   console.log(message);
   return value
}


//Uso de restricciones genéricas para limitar los tipos

//Hay varias maneras de hacer esto en función de la variable de tipo. Una forma consiste en declarar un tipo (type) personalizado como una tupla y, después, extender (extend) la variable de tipo con el tipo personalizado. En el ejemplo siguiente se declara ValidTypes como una tupla con un valor string y un valor number. Después, extiende T con el nuevo tipo. De este modo, solo se pueden pasar tipos number o string a la variable de tipo.
type ValidTypes = string | number;

//entiende los tipo y ahora T solo podra ser de tipo string y number(ya no boolean)
function identity2<T extends ValidTypes, U>(value: T, message: U): T {
   //let result: T = value + value;    // Error porque no sabe qué valor se le pasará en tiempo de ejecución
   console.log(message);
   return value
}

let returnNumber2 = identity2<number, string>(100, 'Hello!');      // OK
let returnString2 = identity2<string, string>('100', 'Hola!');     // OK
//let returnBoolean2 = identity2<boolean, string>(true, 'Bonjour!'); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.


//También puede restringir un tipo a la propiedad de otro objeto. En este ejemplo se usa extends con el operador keyof, que toma un tipo de objeto y genera una unión literal de cadena o de valores numéricos de sus claves. Aquí se usa K extends keyof T para garantizar que el parámetro de clave es del tipo correcto para el tipo asignado a pet.

//es decir K debe ser una clave validad el tipo T

//FUNCION GENERICA
//pet es el objeto y K clave
function getPets<T, K extends keyof T>(pet: T, key: K): T[K] {
   //T es el tipo del objeto pet.
   //K es el tipo de la clave que se pasa como argumento.
   return pet[key];
}

let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish" }

console.log(getPets(pets1, "fish"));  // Returns 6
//console.log(getPets(pets2, "3"));     // Error
console.log(getPets(pets2, 3));     // "parrots" Correcto