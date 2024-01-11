"use strict";
class Alumnos {
    constructor(nombre, apellido, edad, estado) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.edad = edad,
            this.estado = estado;
    }
    getSaludar() {
        console.log(`hola soy ${this.nombre} y tengo ${this.edad} años de edad`);
    }
}
const alunmoUno = new Alumnos('dvd', 'marck', 30, true);
console.log(alunmoUno.getSaludar());
class Profesor extends Alumnos {
    constructor(nombre, apellido, edad, estado, materia) {
        super(nombre, apellido, edad, estado);
        this.nombre = nombre,
            this.materia = materia;
    }
}
const profe = new Profesor('abel', 'open', 20, true, 'bussines');
console.log(profe);
