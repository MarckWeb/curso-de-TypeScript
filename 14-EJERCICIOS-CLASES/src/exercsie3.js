"use strict";
class Triangle {
    constructor(x, y, z) {
        this._x = x;
        this._y = y;
        this._z = z;
    }
    ;
    get x() {
        return this._x;
    }
    set x(x) {
        this._x = x;
    }
    longSide() {
        console.log((this._x > this._y || this._x > this._z)
            ? `the longest side is: X=${this._x}`
            : (this._y > this._z)
                ? `the longest side is: Y=${this._y}`
                : `the longest side is: Z=${this._z}`);
    }
    ;
    isEquilateral() {
        console.log((this._x === this._y && this._x === this._z)
            ? `all sides are equal`
            : `the sides are not equal`);
    }
    ;
}
// class Triangle {
//     constructor(x, y, z) {
//       this.sides = [x, y, z];
//     }
//     longSide() {
//       const longest = Math.max(...this.sides);
//       console.log(`the longest side is: ${longest}`);
//     }
//     isEquilateral() {
//         console.log(
//         (this.sides.every((side) => side === this.sides[0]))
//             ? "all sides are equal" 
//             : "the sides are not equal"
//         )
//     }
//   }
const triangleOne = new Triangle(10, 20, 10);
console.log(triangleOne.x = 20);
triangleOne.longSide();
triangleOne.isEquilateral();
const triangleTwo = new Triangle(50, 40, 30);
console.log(triangleTwo);
triangleTwo.longSide();
triangleTwo.isEquilateral();
