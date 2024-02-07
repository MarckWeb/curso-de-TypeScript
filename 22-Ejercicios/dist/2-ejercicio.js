"use strict";
const miCoche = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2020,
    info: () => "Es un Toyota Corolla del año 2020."
};
console.log(miCoche.marca === "Toyota");
console.log(miCoche.modelo === "Corolla");
console.log(miCoche.anio === 2020);
console.log(miCoche.info() === "Es un Toyota Corolla del año 2020.");
