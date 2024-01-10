class Operation {
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

const suma = new Operation(5, 5)
suma.sumar()
suma.restar()
suma.multiplicar()
suma.dividir()