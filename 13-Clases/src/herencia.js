"use strict";
//herencia en clases significa entender o ampliar la primera clase base a mas propiedades o metodos con una nueva clase subclase. ej:
/*
class Car
   PROPIEDADES
      _make
      _color
      _doors
   CONSTRUCTOR (parametros)
      asignar parametros a priedades
   METODOS
      accelerate()
      brake()
      turn()
*/
/*
class ElectricCar Apliar la clase(extend) Car
 PROPIEDADES
      _make
      _color
      _doors
      _range
   CONSTRUCTOR (parametros)
      asignar parametros a priedades
   METODOS
      accelerate()
      brake()
      turn()
      charge()
*/
//Inavalidacion de metodo-. se puede invalidar un metodo de la clase base para poder colocar otro metodo que tenga diferente funcionalidad dentro de la subclase
//Por ejemplo, supongamos que los automóviles eléctricos usan un tipo diferente de sistema de frenado que los automóviles tradicionales, denominado frenos regenerativos. Por lo tanto, es posible que desee invalidar el método brake de la clase base Car con un método especializado para la subclase ElectricCar.
//EJERCICISO EXTENDEMOS DE CLIENTE
class Cliente2 {
    constructor(nombre, saldo) {
        this._nombre = nombre;
        this._saldo = saldo;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    //PROTECTED-. permite a las subclases de la clase Cliente2 utilizar la función, pero las oculta para las instancias creadas desde la clase.
    mostrarInformacion() {
        return `Cliente: ${this._nombre}, tu saldo es de ${this._saldo}`;
    }
    bienvenida() {
        return `Bienvendio al cajero`;
    }
}
// let clinete1 = new Cliente2('dvd', 500)
// console.log(clinete1.mostrarinformacion()) //error
class SubCliente extends Cliente2 {
    constructor(nombre, apellido, edad = 20) {
        // agregar la palabra clave super() para incluir los parámetros de la clase base. La palabra clave super ejecuta el elemento constructor de la clase base cuando se ejecuta
        super(nombre, edad);
        this._apellido = apellido;
    }
    //ACCESOS
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    //METODOS
    mostrarInformacionCompleta() {
        console.log(this.mostrarInformacion() + ` y tu apellido es ${this._apellido}`);
    }
    mostrarEstado() {
        return `${this.mostrarInformacion()} y esta feliz`;
    }
}
let nuevoCliente = new SubCliente('Bob', 'Esponja', 200);
let otroCliente = new SubCliente('Mike', 'Ross');
console.log(nuevoCliente.mostrarInformacionCompleta());
console.log(otroCliente.mostrarInformacionCompleta()); // informacion y apellido
console.log(otroCliente.mostrarEstado()); //resultado esta feliz..
//ver chekout
//https://learn.microsoft.com/es-es/training/modules/typescript-declare-instantiate-classes/9-exercise-use-inheritance-extend-class
