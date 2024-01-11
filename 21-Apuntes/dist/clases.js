"use strict";
//clases sirven para organizar codigo, no deha de ser objeto
class Person {
    constructor(names, age) {
        this.names = names,
            this.age = age;
        this.saludar();
    }
    saludar() {
        console.log(`mi nombres es ${this.names} y tengo ${this.age}`);
    }
}
const personOne = new Person('david', 30);
console.log(personOne.saludar);
class Employeess extends Person {
    // Atributos -. variables o proiedades de la clase se puede ocntrolar dentro o 
    constructor(id, name, dept) {
        super(name, 30);
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.showInfo();
    }
    // metodos -. son acciones que podemso llevar a cabo dentro de la clase o frura dependera de la visibilidad que le demos.
    showInfo() {
        this.names;
        console.log(this.name + this.names);
    }
}
//unainstancia de la clase employe
const employeOne = new Employeess(1, 'dvd', '15');
console.log(employeOne.saludar());
