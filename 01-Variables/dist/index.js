"use strict";
/*
Declaracion de variables en typescript
---variableNombre: tipo
---let miVariable:Sting*/
//BOLEANOS
let flag;
let yes = true;
let no = false;
flag = true;
flag = false;
let state = 2 == 2 ? true : false;
console.log(state);
//no pueden tener numerso y string cuando se declara una variable tipo string o number
//yes = 10 //error
//state = "hola a todos"; //error
//NUMEROS
let numero;
let cantidad = 0;
let numeroDecimal = 123.456;
//let big: bigint = 100n;
numero = 100;
console.log(numero + numeroDecimal);
//numero = "dos" //error
//cantidad = "123.23" //error
//TIPO DE CADENA
//se puede utilizar comillas simples o comillas dobles como en javascript
let miNombre;
let miApellido = "Connor";
let vocales = "aeiou";
miNombre = "Marck";
//miApellido = true; //error
//en typescrip tambien se puede usar cadenas de plantillas,  que pueden abarcar varias líneas y tener expresiones insertadas
let nombre = "Mateo";
let presentacion = `Mi nombre es ${nombre}. 
   Soy nuevo en TypeScript`;
console.log(presentacion);
