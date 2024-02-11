##Funciones en typescript

Las funciones en TypeScript permiten agrupar conjuntos de declaraciones que realizan tareas específicas en bloques reutilizables de código. TypeScript también incorpora características adicionales para las funciones que proporcionan más flexibilidad y seguridad de tipo en comparación con JavaScript.

Declaración de funciones
En TypeScript, las funciones pueden declararse de la misma forma que en JavaScript. A continuación, se muestra un ejemplo de una función simple que suma dos números:

```ts
function suma(a: number, b: number): number {
  return a + b;
}

let resultado = suma(1, 2); // resultado es 3
```

Aquí, suma es una función que toma dos argumentos, a y b, que son de tipo number, y devuelve un valor que también es de tipo number. La palabra clave function se utiliza para declarar una función. Los argumentos de la función están entre paréntesis, y los tipos de los argumentos y el tipo de retorno se especifican después de los argumentos.

Funciones de flecha
Las funciones de flecha son una forma alternativa de declarar funciones en TypeScript. Tienen una sintaxis más concisa que las funciones normales y no redefinen el valor de this cuando se utilizan en un contexto de objeto. Aquí hay un ejemplo de una función de flecha en TypeScript:

```ts
let suma = (a: number, b: number): number => {
  return a + b;
};

let resultado = suma(1, 2); // resultado es 3
```

En este caso, suma es una variable que se asigna a una función de flecha que toma dos argumentos, a y b, y devuelve un valor. La función de flecha se indica con el símbolo =>.

Funciones como tipos
TypeScript permite especificar tipos de funciones al declarar variables. Esto significa que puede especificar el tipo de argumentos que una función debe tomar y el tipo de valor que debe devolver.

```ts
let suma: (x: number, y: number) => number;

suma = (a, b) => {
  return a + b;
};

let resultado = suma(1, 2); // resultado es 3
```

Aquí, suma se declara como una variable de tipo función que toma dos argumentos de tipo number (indicados entre paréntesis a la izquierda de =>) y devuelve un valor de tipo number (indicado a la derecha de =>).

Parámetros opcionales
En TypeScript, los parámetros de las funciones pueden ser opcionales. Esto se indica con el símbolo ? después del nombre del parámetro. Si un parámetro es opcional, puede omitirse al llamar a la función. Si se omite un parámetro opcional, su valor será undefined.

```ts
function saluda(nombre: string, esFormal?: boolean): string {
  if (esFormal) {
    return `Buenos días, ${nombre}.`;
  } else {
    return `¡Hola, ${nombre}!`;
  }
}

let saludo1 = saluda("Ana", true); // esFormal es true, luego se cumple la condición y saludo1 es "Buenos días, Ana."
let saludo2 = saluda("Ana"); // esFormal es undefined, luego no se cumple la condición y saludo2 es "¡Hola, Ana!"
Los parámetros requeridos (sin ?) no pueden ir a continuación de un parámetro opcional.

// Declaración de función no válida: un parámetro opcional (b?) no puede preceder a uno requerido (c)
function multiplicar(a: number, b?: number, c: number): number {
  /* ... */
}
```

Parámetros por defecto
Los parámetros de las funciones también pueden tener valores por defecto en TypeScript, indicados tras un =. Si un parámetro tiene un valor por defecto, este valor se utilizará si no se proporciona un argumento para ese parámetro al llamar a la función.

```ts
function sumar(a: number, b: number = 1): number {
  return a + b;
}

let suma5 = sumar(10, 5); // 15
let suma1 = sumar(10); // 11
```

Al llamar a la función sumar sin un segundo parámetro, b toma el valor por defecto 1.

Parámetros Rest
Los parámetros Rest permiten aceptar un número variable de argumentos en una función. Se indican con el símbolo ... antes del nombre del parámetro.

```ts
function sumaTodos(...numeros: number[]): number {
  let suma = 0;
  for (let num of numeros) {
    suma += num;
  }
  return suma;
}

let resultado1 = sumaTodos(1, 2); // 3
let resultado2 = sumaTodos(1, 2, 3, 4, 5); // 15
let resultado3 = sumaTodos(1); // 1
let resultado4 = sumaTodos(); // 0
```

En este caso, sumaTodos es una función que puede tomar cualquier número de argumentos, todos los cuales deben ser de tipo number.

### Aprendizajes de esta lección

1. Comprender cómo declarar y usar funciones en TypeScript.
2. Aprender a especificar los tipos de los parámetros y del valor de retorno en funciones.
3. Familiarizarse con las funciones de flecha y su sintaxis más concisa.
4. Saber cómo declarar parámetros opcionales utilizando ? y parámetros con valores por defecto utilizando =.
5. Conocer cómo especificar el tipo de función al declarar variables.
6. Entender cómo utilizar parámetros rest para aceptar un número variable de argumentos en una función.
