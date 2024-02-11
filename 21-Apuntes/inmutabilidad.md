# Inmutabilidad

La inmutabilidad es un principio fundamental en programación funcional. Un objeto inmutable es un objeto cuyo estado no puede ser modificado después de que se ha creado.

## Concepto de inmutabilidad

Imagínese que se tiene un objeto en código, y varias partes del programa pueden acceder y cambiar este objeto. En tal escenario, es complicado seguir la lógica del programa y predecir su comportamiento, porque el estado del objeto puede cambiar en cualquier momento desde cualquier lugar. Aquí es donde entra en juego el principio de inmutabilidad.

Cuando se trabaja con objetos inmutables, el objeto no se modifica. En su lugar, si se necesita hacer cambios, se puede crear una copia del objeto con los cambios aplicados. Esto facilita el rastreo del estado de los objetos y reduce el riesgo de efectos secundarios inesperados.

## Estructuras de datos inmutables

En TypeScript, los tipos primitivos son inmutables por defecto. Estos incluyen boolean, number, string, null, undefined y symbol.

```ts
let a = "hola";
a = "adios"; // Esto no modifica la cadena original, sino que reasigna a a una nueva cadena
Sin embargo, los tipos de datos complejos, como los objetos y los arrays, no son inmutables.

let a = { saludo: "hola" };
a.saludo = "adios"; // Esto modifica el objeto original
```

Si se quiere hacer que estos tipos sean inmutables, se deben utilizar técnicas especiales.

### Objetos inmutables

Se puede hacer que un objeto sea inmutable utilizando Object.freeze.

```ts
let a = { saludo: "hola" };
Object.freeze(a);
a.saludo = "adios"; // Esto lanza un error
Se debe tener en cuenta que Object.freeze solo es superficial, lo que significa que no hace que los objetos anidados sean inmutables.

let a = { saludo: { palabra: "hola" } };
Object.freeze(a);
a.saludo.palabra = "adios"; // Esto no lanza un error
```

En el ejemplo anterior, se ha hecho Object.freeze de a, pero no de a.saludo, de forma que no se podría modificar el primero pero sí el segundo.

### Arrays inmutables

Pueden tratarse a los arrays como inmutables utilizando métodos que no modifican el array original, sino que devuelven un nuevo array con los cambios aplicados. Estos métodos incluyen map, filter, slice, concat, etc. Por ejemplo, el método map devuelve un nuevo array al que se le aplica una transformación, pero sin modificar el array original.

```ts
let a = [1, 2, 3];
let b = a.map((x) => x * 2);
// b es [2, 4, 6], a todavía es [1, 2, 3]
```

### Readonly en TypeScript

TypeScript proporciona una manera de asegurar que una variable no se modifique: el modificador readonly.

```ts
interface Persona {
  readonly nombre: string;
  readonly edad: number;
}

let persona: Persona = { nombre: "Juan", edad: 30 };
persona.nombre = "Pedro"; // Esto arroja un error
```

En este ejemplo, nombre y edad son solo de lectura, por lo que no pueden ser modificados después de la asignación inicial.

En resumen, la inmutabilidad es un principio poderoso que puede hacer que el código sea más predecible y más fácil de entender. En TypeScript, se pueden usar varias técnicas para asegurar la inmutabilidad, incluyendo Object.freeze, métodos inmutables de arrays y el modificador readonly.

#### Aprendizajes de esta lección

1. Comprender el concepto de inmutabilidad y su importancia en programación funcional.
2. Conocer las ventajas de trabajar con objetos inmutables para facilitar el rastreo del estado de los objetos y reducir los efectos secundarios inesperados.
3. Aprender a hacer objetos inmutables utilizando Object.freeze.
4. Entender cómo los métodos inmutables de arrays, como map, filter, slice y concat, permiten trabajar con arrays sin modificar el array original.
5. Saber cómo utilizar el modificador readonly en TypeScript para asegurar que una variable no se modifique después de su asignación inicial.
