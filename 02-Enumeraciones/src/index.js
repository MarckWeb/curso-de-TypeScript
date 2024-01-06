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
