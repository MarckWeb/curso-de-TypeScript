class Operation1 {
    _valueOne: number;
    _valueTwo: number;
    constructor(valueOne: number, valueTwo: number) {
        this._valueOne = valueOne;
        this._valueTwo = valueTwo;
    }

    sumar() {
        console.log(`sumados son ${this._valueOne + this._valueTwo} `)
    }

    restar() {
        console.log(`restados son ${this._valueOne - this._valueTwo} `)
    }

    multiplicar() {
        console.log(`multiplicados son ${this._valueOne * this._valueTwo} `)
    }

    dividir() {
        console.log(`divididos son ${this._valueOne / this._valueTwo} `)
    }
}

class Punto extends Operation1 {
    constructor(valueOne: number, valueTwo: number) {
        super(valueOne, valueTwo)
    }

    meetingPoints() {
        let cuadrante = 0;

        if (this._valueOne === 0 || this._valueTwo === 0) {
            cuadrante = (this._valueOne > 0)
                ? ((this._valueTwo > 0)
                    ? 1
                    : 4)
                : ((this._valueTwo > 0)
                    ? 2
                    : 3);
        }

        (cuadrante === 0)
            ? console.log("Los números introducidos no están en ninguno de los cuatro cuadrantes.")
            : console.log(`Los números introducidos están en el cuadrante ${cuadrante}.`);
    }
    // if(this.x === 0 || this.y === 0){
    //     return cuadrante = 0;
    // }else if(this.x > 0){
    //     (this.y > 0)
    //         ? cuadrante = '1er cuadrante'
    //         : cuadrante = '4to cuadrante'
    // }else{
    //     (this.y > 0)
    //         ? cuadrante = '2do cuadrante'
    //         : cuadrante = '3er cuadrante'
    // }

    // (cuadrante === 0)
    //     ? console.log('error no hay cuadrantes')
    //     : console.log(`los numeros x:${this.x} y:${this.y} estan en el cuadrante ${cuadrante}`)


    // if(this.x > 0 && this.y > 0){
    //     console.log(`Los puntos x:${this.x} y:${this.y} 1er cuadrante`)
    // }else if(this.x < 0 && this.y > 0){
    //     console.log(`Los puntos x:${this.x} y:${this.y} 2do cuadrante`)
    // }else if(this.x < 0 && this.y < 0){
    //     console.log(`Los puntos x:${this.x} y:${this.y} 3er cuadrante`)
    // }else if(this.x > 0 && this.y < 0){
    //     console.log(`Los puntos x:${this.x} y:${this.y} 4to cuadrante`)
    // }else{
    //     console.log('Los puntos no existen')
    // }
}
//}

// let primerPunto = new Punto(parseInt(prompt('Intro a number x')), parseInt(prompt('Intro a number y')))
// console.log(primerPunto)
// primerPunto.meetingPoints()

const xInput: string | null = prompt('Introduce un número x');
const yInput: string | null = prompt('Introduce un número y');

const x: number = xInput ? parseInt(xInput) : 0;
const y: number = yInput ? parseInt(yInput) : 0;

const primerPunto = new Punto(x, y);

console.log(primerPunto._valueOne = 50);
primerPunto.meetingPoints();