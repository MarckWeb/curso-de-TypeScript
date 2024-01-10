"use strict";
class Square {
    constructor(side) {
        this._side = side;
    }
    // valueSide(){
    // parseFloat(prompt('ingresa lado del cuadrado'))
    // }
    surfacePerimeter() {
        console.log(`perimetro = ${this._side * 4}`, `superficie = ${this._side * 2}`);
    }
}
const squareOne = new Square(4);
squareOne.surfacePerimeter();
