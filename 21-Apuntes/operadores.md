# Operadores

TypeScript es compatible con todos los operadores en JavaScript y añade algunos adicionales.

#### Operadores aritméticos
Estos operadores se utilizan para realizar operaciones matemáticas entre variables y/o valores.
```ts
let a = 10;
let b = 2;

console.log(a + b);  // 12 (suma)
console.log(a - b);  // 8 (resta)
console.log(a * b);  // 20 (multiplicación)
console.log(a / b);  // 5 (divisón)
console.log(a % b);  // 0 (módulo: resto de la división)
console.log(a ** b); // 100 (elevar a una potencia)
```

#### Operadores de asignación
Los operadores de asignación se utilizan para asignar valores a las variables.

```ts
let a = 10;
a += 2;  // es igual a a = a + 2
console.log(a);  // 12

let b = 10;
b -= 2;  // es igual a b = b - 2
console.log(b);  // 8

let c = 10;
c *= 2;  // es igual a c = c * 2
console.log(c);  // 20

let d = 10;
d /= 2;  // es igual a d = d / 2
console.log(d);  // 5
```

#### Operadores de comparación
Los operadores de comparación se utilizan para comparar dos valores.

En TypeScript, los operadores == y === se usan para la comparación de igualdad, pero hay una diferencia importante entre ellos.

El operador == verifica la igualdad de los valores, pero permite la conversión automática de tipos. Esto significa que si se comparan dos valores de diferentes tipos que pueden considerarse equivalentes, == devolverá true. Por ejemplo, 2 == "2" devolverá true, a pesar de que el primero es un número y el segundo una cadena de texto.

En contraste, el operador === verifica tanto la igualdad de los valores como el tipo. No permite la conversión de tipos, por lo que si se comparan dos valores de diferentes tipos, === devolverá false, incluso si los valores son equivalentes desde un punto de vista de la conversión de tipos. Por ejemplo, 2 === "2" devolverá false, porque uno es un número y el otro es una cadena de texto.

```ts
let a = 10;
let b = 2;

console.log(a == b);   // false
console.log(a != b);   // true
console.log(a === b);  // false
console.log(a !== b);  // true
console.log(a > b);    // true
console.log(a < b);    // false
console.log(a >= b);   // true
console.log(a <= b);   // false

```

#### Operadores lógicos
Los operadores lógicos se utilizan para combinar condiciones.

```ts
let a = true;
let b = false;

console.log(a && b);  // false (AND: true si todas las condiciones son true)
console.log(a || b);  // true (OR: true si al menos una condición es true)
console.log(!a);      // false (NOT: invierte la condición)
```

#### Operadores de bits
Los operadores de bits operan a nivel de los bits de los números.
```ts
let a = 5; // en binario 0101
let b = 3; // en binario 0011

console.log(a & b);   // 1, en binario 0001
console.log(a | b);   // 7, en binario 0111
console.log(a ^ b);   // 6, en binario 0110
console.log(~a);      // -6, es el complemento a dos
console.log(a << 1);  // 10, se desplaza a la izquierda 1 bit
console.log(a >> 1);  // 2, se desplaza a la derecha 1 bit
```

#### Operador condicional (ternario)
Este operador se utiliza para asignar un valor a una variable en función de una condición.

```ts
let a = 10;
let b = 2;

let mayor = (a > b) ? a : b;
console.log(mayor);  // 10
Operador typeof
Este operador se utiliza para obtener el tipo de una variable o un valor.

let a = 10;

console.log(typeof a);  // "number"
Operador instanceof
Este operador se utiliza para verificar si un objeto es una instancia de una clase específica.

class MiClase {
}

let obj = new MiClase();

console.log(obj instanceof MiClase);  // true

```

#### Operadores de acceso a propiedades
TypeScript soporta los operadores de acceso a propiedades . y [].

```ts
let obj = {
  propiedad: 'valor'
};

console.log(obj.propiedad);  // 'valor'
console.log(obj['propiedad']);  // 'valor'

```

#### Operador de llamada de función ()
Este operador se utiliza para llamar a una función.

```ts
function miFuncion() {
  console.log('¡Hola Mundo!');
}

miFuncion();  // '¡Hola Mundo!'

```
#### Operador de nueva instancia new
Este operador se utiliza para crear una nueva instancia de una clase.

```ts
class MiClase {
}

let obj = new MiClase();
```

Esos son los operadores más comunes en TypeScript. Como siempre, es importante practicar con ellos para entender completamente cómo funcionan.

### Aprendizajes de esta lección
1. Comprender los operadores aritméticos y cómo se utilizan para realizar operaciones matemáticas en TypeScript.
2. Conocer los operadores de asignación y cómo se usan para asignar valores a variables.
3. Entender los operadores de comparación y cómo se emplean para evaluar igualdad y desigualdad entre valores.
4. Aprender los operadores lógicos y cómo se combinan condiciones para obtener resultados booleanos.
Familiarizarse con los operadores de bits y su aplicación en operaciones a nivel de bits.
5. Conocer el operador condicional (ternario) para asignar valores en función de condiciones.
6. Aprender sobre los operadores typeof e instanceof para obtener información sobre tipos y verificaciones de instancia.