# Funciones de Alto Orden

Las funciones de alto orden son un concepto fundamental en la programación funcional. Este concepto también es aplicable a TypeScript.

En general, una función de alto orden es una función que cumple con al menos una de las siguientes condiciones:

Acepta una o más funciones como argumentos
Devuelve una función como resultado
La capacidad de tratar funciones como argumentos o devolverlas como resultados se debe a que, en TypeScript y JavaScript, las funciones son "ciudadanos de primera clase". Esto significa que se pueden asignar a variables, almacenar en estructuras de datos, pasar como argumentos y devolver como resultados.

### Funciones que aceptan otras funciones

Uno de los usos más comunes de las funciones de alto orden es operar con arrays. TypeScript hereda los métodos de alto orden de JavaScript para trabajar con arrays, como map, filter y reduce. Aquí se muestran ejemplos de cada uno.

Ejemplo con map:

```ts
let numeros = [1, 2, 3, 4, 5];

let numerosDuplicados = numeros.map(function (numero) {
  return numero * 2;
});
// Alternativamente, con notación de flecha:
// let numerosDuplicados = numeros.map(x => x * 2);

console.log(numerosDuplicados); // [2, 4, 6, 8, 10]
```

En este ejemplo, map es una función de alto orden que toma una función como argumento. Esta función se aplica a cada elemento del array.

Ejemplo con filter:

```ts
let numeros = [1, 2, 3, 4, 5];

let numerosFiltrados = numeros.filter(function (numero) {
  return numero % 2 === 0; // Filtrar por números pares
});
// Alternativamente, con notación de flecha:
// let numerosFiltrados = numeros.filter(x => x % 2 === 0);

console.log(numerosFiltrados); // [2, 4]
```

Aquí, filter es la función de alto orden. La función que se pasa como argumento determina si un elemento debe ser incluido en el nuevo array.

Ejemplo con reduce:

```ts
let numeros = [1, 2, 3, 4, 5];

let suma = numeros.reduce(function (acumulador, numero) {
  // A cada paso, el valor retornado se guarda en 'acumulador'
  return acumulador + numero;
}, 0);
// Alternativamente, con notación de flecha:
// let suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(suma); // 15
```

En este caso, reduce es una función de alto orden que transforma un array en un solo valor. La función que se pasa como argumento se llama para cada elemento del array, y su retorno se va acumulando.

### Funciones que devuelven otras funciones

Las funciones de alto orden también pueden devolver otras funciones.

```ts
function fabricaDeSaludos(saludo: string) {
  return function (nombre: string) {
    return `${saludo}, ${nombre}!`;
  };
}

let hola = fabricaDeSaludos("Hola");
let saludo = hola("Mundo");

console.log(saludo); // "Hola, Mundo!"
```

En este ejemplo, fabricaDeSaludos es una función de alto orden que devuelve una nueva función. Esta nueva función usa el argumento de fabricaDeSaludos para construir un saludo personalizado.

Las funciones de alto orden son una herramienta poderosa que permite abstracciones de código más ricas y reutilizables. Proporcionan la base para muchos patrones de diseño y técnicas de programación funcional en TypeScript.

### Aprendizajes de esta lección

1. Comprender el concepto de funciones de alto orden y su importancia en la programación funcional.
2. Aprender a utilizar funciones de alto orden para operar con arrays utilizando métodos como map, filter y reduce.
3. Conocer cómo se pueden pasar funciones como argumentos a otras funciones para implementar patrones como callbacks.
4. Entender cómo las funciones pueden devolver otras funciones para crear abstracciones más reutilizables y flexibles.
5. Reconocer el potencial y la utilidad de las funciones de alto orden en el diseño de programas y en el uso de técnicas de programación funcional.
