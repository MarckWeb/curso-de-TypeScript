class Operation1 {
    protected _valueOne: number;
    protected _valueTwo: number;
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
}

const xInput: string | null = prompt('Introduce un número x');
const yInput: string | null = prompt('Introduce un número y');

const x: number = xInput ? parseInt(xInput) : 0;
const y: number = yInput ? parseInt(yInput) : 0;

const primerPunto = new Punto(x, y);

//console.log(primerPunto._valueOne = 50); //error
primerPunto.meetingPoints();