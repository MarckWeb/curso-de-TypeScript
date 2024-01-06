"use strict";
const saludar = "Hola saludos soy Marck";
console.log(saludar);
//cuentas la catidad de letras que hay en el texto
console.log(`cantidad de letras mas espacio ${saludar.length}`);
//encuentra la posicion del primer caracter del texto dado como parametro 
console.log(saludar.indexOf("saludos"));
//indica si existe un caracter o texto en la cadena
console.log(saludar.includes("soy"));
console.log(saludar.includes("oy"));
console.log(saludar.includes("Saludos"));
//une o concatena dos cadenas de texto
console.log(saludar.concat("y estoy empezando con TypeScript"));
