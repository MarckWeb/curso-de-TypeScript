//Importación de un componente de módulo
//import { <component name> } from '<module name>'
//Para cambiar el nombre de una importación, se usa la palabra clave "as":
//import { <component name> as <new name> } from '<module name>'
//Para importar el módulo completo en una sola variable y usarlo para acceder a las exportaciones de módulos,
//import * as <variable name> from '<module name>'
export function returnGreeting(greeting) {
    let greetingLength = getLength(greeting);
    console.log(`The message from GreetingsLength_module is ${greeting}. It is ${greetingLength} characters long.`);
}
function getLength(message) {
    return message.length;
}
