"use strict";
//creacion de un clase
class Vehiculo {
    constructor(marca, color, puertas) {
        this._marca = marca;
        this._color = color;
        if ((puertas % 2) === 0) {
            this._puertas = puertas;
        }
        else {
            throw new Error('Las puertas deben ser pares');
        }
    }
    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }
    get color() {
        return 'El color del vehiculo es ' + this._color;
    }
    set color(color) {
        this._color = color;
    }
    get puertas() {
        return this._puertas;
    }
    set puertas(puertas) {
        if ((puertas % 2) === 0) {
            this._puertas = puertas;
        }
        else {
            throw new Error('Las puertas deben ser pares');
        }
    }
    acelerar(rapido) {
        return `${this.trabajo()} acelera a ${rapido} MPH`;
    }
    frenar() {
        return `${this.trabajo()} frena con el sistema de frenado`;
    }
    girar(direccion) {
        return `${this.trabajo()} girar a la ${direccion}`;
    }
    trabajo() {
        return this._marca;
    }
}
let miVehiculo = new Vehiculo('kia', 'Azul', 4);
//Parametro que se pasa al constructor
console.log(miVehiculo.color);
//Propiedad definida en la clase
console.log(miVehiculo._color);
let miVehiculo2 = new Vehiculo('Galaxy', 'Rojo', 4);
console.log(miVehiculo2.puertas);
// let miVehiculo3 = new Vehiculo('Galaxy', 'Verde')
// console.log(miVehiculo.puertas)
console.log(miVehiculo.acelerar(35));
console.log(miVehiculo.frenar());
console.log(miVehiculo.girar('derecha'));
//https://learn.microsoft.com/es-es/training/modules/typescript-declare-instantiate-classes/5-access-modifiers
