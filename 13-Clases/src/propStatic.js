"use strict";
//Definicion de propiedades estaticas
class Persona {
    //constructor
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
        //se usa la sintaxis className.propertyName en lugar de this. cuando se obtiene acceso a la propiedad estática.
        Persona.numeroDePersonas++; //incrementa el valor de la propiedad estatica
    }
    static obtenerNumeroDePersonas() {
        return Persona.numeroDePersonas;
    }
}
//propiedades
Persona.numeroDePersonas = 0; //nueva porpiedad statica
//instancia de peronas con todos los parametros
let personas3 = new Persona('carlos', 30); //1ra instancia
let personas4 = new Persona('martin', 40); //2da instancia
console.log(Persona.obtenerNumeroDePersonas()); //retorna 2 instancias
console.log(`la propieda obtener numero de personas tiene ${Persona.obtenerNumeroDePersonas()} por que se llamo a dos instancias personas3 y personas4`);
