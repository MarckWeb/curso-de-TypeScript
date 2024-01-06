"use strict";
//Un elemento enum es un nombre simbólico para un conjunto de valores
/*
Puedes pensar en un enum como un listado especial de variables que tienen un conjunto específico de valores posibles
*/
//los enums comienzan de 0 a n, como un index, cada variable tiene un index predeternimado
//si queremos que empiecen po rotro valor debemos especificar en la propiedad
var ContratoActual;
(function (ContratoActual) {
    ContratoActual[ContratoActual["Permanente"] = 1] = "Permanente";
    ContratoActual[ContratoActual["Temporal"] = 2] = "Temporal";
    ContratoActual[ContratoActual["Practica"] = 3] = "Practica"; //2
})(ContratoActual || (ContratoActual = {}));
let estadoEmpleado = ContratoActual.Temporal;
//de esta manera se muestra el nombre asociado al valor... recordemos que estadoEmpelado es un numero
console.log(ContratoActual[estadoEmpleado]);
//Enums Numerico
var Dia;
(function (Dia) {
    Dia[Dia["Lunes"] = 0] = "Lunes";
    Dia[Dia["Martes"] = 1] = "Martes";
    Dia[Dia["Miercoles"] = 2] = "Miercoles";
    Dia[Dia["Jueves"] = 3] = "Jueves";
    Dia[Dia["Viernes"] = 4] = "Viernes";
})(Dia || (Dia = {}));
console.log(Dia.Martes); //1
let dia = Dia.Jueves;
console.log(Dia[dia]); //accedemos a su nombre jueves (no valor)
//Enums Cadena
var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["Verde"] = "Verde";
    Color["Azul"] = "Azul";
})(Color || (Color = {}));
console.log(Color.Verde);
let color = Color.Rojo;
console.log(color);
//Enums Especificos
var Talla;
(function (Talla) {
    Talla[Talla["Pequeno"] = 1] = "Pequeno";
    Talla[Talla["Mediano"] = 2] = "Mediano";
    Talla[Talla["Grande"] = 3] = "Grande";
})(Talla || (Talla = {}));
