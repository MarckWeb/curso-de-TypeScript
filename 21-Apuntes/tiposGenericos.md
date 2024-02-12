# Tipos Genericos

Los tipos genéricos son una característica en TypeScript que permite a los usuarios crear componentes que pueden trabajar sobre una variedad de tipos en lugar de un solo tipo. Los genéricos ofrecen la forma de crear componentes reutilizables que pueden trabajar con diferentes tipos de datos.

## Tipos genéricos

Para entender mejor, se puede considerar una función simple que devuelve el argumento que se le pasa:

```ts
function identidad(arg: number): number {
  return arg;
}
```

En este caso, identidad es una función que toma un argumento de tipo number y devuelve un valor de tipo number. Ahora, si se quiere escribir la misma función para trabajar con string, se tendría que duplicar el código.

Aquí es donde los tipos genéricos son útiles. Puede escribirse la misma función utilizando tipos genéricos de la siguiente manera:

```ts
function identidad<T>(arg: T): T {
  return arg;
}
```

En este caso, T es una variable de tipo que captura el tipo que el usuario proporciona (por ejemplo, number), y así puede reutilizarse ese tipo en varias ubicaciones. Puede utilizarse cualquier nombre para definir el tipo genérico, pero por convenio suele utilizarse T. Para llamar a esta función, puede hacerse de la siguiente manera:

```ts
let resultado = identidad<string>("miCadena"); // El tipo de output será 'string'
```

El compilador ahora sabrá que T es string porque se le ha pasado un string como argumento. El sería opcional en este caso, porque el compilador puede determinar el tipo del parámetro directamente:

```ts
// Este código sería equivalente en este caso:
let resultado = identidad("miCadena");
```

## Tipos genéricos con restricciones

Supóngase que se quiere acceder a una propiedad específica del argumento, como length.

```ts
function logIdentidad<T>(arg: T): T {
  // Lanzará un error, por no existir length en T
  console.log(arg.length);
  return arg;
}
```

Esto lanzaría un error en tiempo de compilación, ya que un tipo genérico no tiene garantías de contener una propiedad length. Esto se debe a que podría pasarse como argumento un array, que si tiene length, pero también podría pasarse por ejemplo un number, que no tiene length.

Esta situación puede ser resuelta por los genéricos con restricciones. Los genéricos con restricciones son útiles cuando se quiere limitar los tipos que pueden utilizarse con los genéricos. Por ejemplo, podría quererse trabajar con un tipo genérico que tenga una serie de propiedades. Para hacer esto, puede primero definirse una interfaz con las restricciones:

```ts
interface Longitudinal {
  length: number;
}
```

Ahora, puede utilizarse esta interfaz para describir el genérico mediante extends:

```ts
function logIdentidad<T extends Longitudinal>(arg: T): T {
  // Como está garantizado que T tiene una propiedad .length, no habrá error
  console.log(arg.length);
  return arg;
}
```

En este caso, se restringe T a que sea un subtipo de Longitudinal, es decir, que debe tener una propiedad length. Si llama a logIdentidad con un número, se obtendrá un error porque los números no tienen una propiedad .length. En cambio, puede llamarse a logIdentidad con un array o un objeto que tenga una propiedad length:

```ts
logIdentidad({ length: 10, value: 3 });
```

## Múltiples tipos genéricos

TypeScript permite utilizar múltiples tipos genéricos en la misma función. Esto es especialmente útil cuando se necesita trabajar con varios tipos diferentes en la misma función.

Supóngase que se desea escribir una función que toma dos argumentos y los devuelve en un array. Esta función podría tener el siguiente aspecto:

```ts
function pareja<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}
```

En este caso, T y U son tipos genéricos, y la función pareja toma dos argumentos, uno de tipo T y otro de tipo U, y devuelve un array que contiene un elemento de tipo T y un elemento de tipo U.

Puede llamarse a esta función pasando diferentes tipos de argumentos:

```ts
let resultado1 = pareja<string, number>("hola", 123); // ["hola", 123]
let resultado2 = pareja<boolean, string>(true, "mundo"); // [true, "mundo"]
```

Aquí resultado1 es de tipo [string, number] y resultado2 es de tipo [boolean, string].

Además, al igual que se pueden aplicar restricciones a un solo genérico, también se pueden aplicar a múltiples genéricos en la misma función:

```ts
function compare<T extends string, U extends number>(a: T, b: U) {
  // función que requiere que a sea de tipo string y b sea de tipo number
}
```

En este caso, compare sólo puede ser llamada con argumentos donde a es de tipo string y b es de tipo number, proporcionando un control de tipo más estricto.

En resumen, los genéricos y los genéricos con restricciones pueden ayudar a escribir código más reutilizable y seguro, reduciendo la necesidad de duplicar código para diferentes tipos.

### Aprendizajes de esta lección

1. Comprender el concepto de tipos genéricos y su utilidad para crear componentes flexibles y reutilizables.
2. Aprender a definir funciones y componentes que utilizan tipos genéricos mediante la notación <T>.
3. Conocer cómo los tipos genéricos pueden ayudar a reducir la duplicación de código al trabajar con diferentes tipos de datos.
4. Entender cómo aplicar restricciones a los tipos genéricos para limitar los tipos que pueden utilizarse con ellos.
5. Reconocer la capacidad de usar múltiples tipos genéricos en una misma función y aplicar restricciones a múltiples genéricos para un control de tipo más estricto.
6. Aplicar el uso de tipos genéricos en situaciones donde se requiere trabajar con varios tipos diferentes en un mismo componente o función.
