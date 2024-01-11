"use strict";
//Uso de los métodos y las propiedades de un tipo genérico
function identity1(value, message) {
    //let result: T = value + value;    // Error porque no sabe qué valor se le pasará en tiempo de ejecución
    console.log(message);
    return value;
}
//entiende los tipo y ahora T solo podra ser de tipo string y number(ya no boolean)
function identity2(value, message) {
    //let result: T = value + value;    // Error porque no sabe qué valor se le pasará en tiempo de ejecución
    console.log(message);
    return value;
}
let returnNumber2 = identity2(100, 'Hello!'); // OK
let returnString2 = identity2('100', 'Hola!'); // OK
//let returnBoolean2 = identity2<boolean, string>(true, 'Bonjour!'); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.
