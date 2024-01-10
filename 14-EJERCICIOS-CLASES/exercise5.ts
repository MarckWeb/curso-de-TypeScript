class Square {
    protected _side: number;
    constructor(side: number) {
        this._side = side;
    }

    // valueSide(){
    // parseFloat(prompt('ingresa lado del cuadrado'))
    // }

    surfacePerimeter() {
        console.log(`perimetro = ${this._side * 4}`, `superficie = ${this._side * 2}`)
    }
}

const squareOne = new Square(4)
squareOne.surfacePerimeter()