#VARIABLES Y CONSTANTES

En TypeScript, como en muchos otros lenguajes de programación, las variables y las constantes son espacios de almacenamiento en la memoria del ordenador que se utilizan para guardar y manipular datos durante la ejecución de un programa. Las variables y las constantes se diferencian principalmente en el hecho de que una vez que se asigna un valor a una constante, no puede ser cambiado, mientras que el valor de una variable puede modificarse a lo largo del tiempo.

####Variables
Una variable es básicamente un nombre que se le da a un espacio de almacenamiento en la memoria. El valor almacenado en una variable puede cambiar a lo largo del tiempo, lo que significa que puede ser asignado y reasignado. En TypeScript, se declara una variable usando la palabra clave let. Aquí hay un ejemplo de cómo se declara y asigna una variable en TypeScript:
```ts
let nombre: string;
nombre = "Juan";
```
En este ejemplo, se declara una variable llamada nombre de tipo string. A continuación, se asigna el valor "Juan" a la variable nombre. También es posible declarar una variable y asignarle un valor en la misma línea:
```ts
let edad: number = 30;
```

Aquí, se declara una variable llamada edad de tipo number y se le asigna el valor 30.

####Constantes
Por otro lado, una constante es similar a una variable en el sentido de que también es un espacio de almacenamiento en la memoria. Sin embargo, a diferencia de una variable, una vez que se asigna un valor a una constante, no puede ser cambiado. En TypeScript, se declara una constante utilizando la palabra clave const. Aquí hay un ejemplo de cómo se declara y asigna una constante en TypeScript:
```ts
const PI: number = 3.14159;
```
En este ejemplo, se declara una constante llamada PI de tipo number y se le asigna el valor 3.14159. Una vez asignado, el valor de PI no puede ser cambiado. Si se intenta hacerlo, TypeScript producirá un error en tiempo de compilación.

####Tipos de datos
TypeScript ofrece varios tipos de datos incorporados que pueden ser usados para construir y describir las estructuras de datos, tanto en variables como constantes.

1. Boolean: Un tipo de dato simple que puede tomar dos valores, verdadero (true) o falso (false).
```ts
let isDone: boolean = false;
```

2. Number: Todos los números en TypeScript son valores de punto flotante. Estos números también pueden ser expresados en decimal (base 10), hexadecimal (base 16), binario (base 2) y octal (base 8).

```ts
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```
3. String: Un tipo de dato que representa una secuencia de caracteres. Puede ir rodeado de comillas dobles '' o simples '.
```ts
let color: string = "blue";
color = 'red';
```

4. Array: TypeScript permite definir arrays de dos formas. La primera es usar el tipo de los elementos seguido de [] para denotar un array de ese tipo de elemento. La segunda es usar un arreglo genérico, Array<elemType>.
```ts
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
```

5. Tuple: Una tupla permite expresar un array con un número fijo de elementos inmutables cuyos tipos son conocidos, pero no necesariamente los mismos.
```ts
let x: [string, number];
x = ["hello", 10];
```
6. Enum: Una forma de dar nombres más legibles a un conjunto de valores numéricos.
```ts
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```
7. Any: Para aquellos valores que podrían venir de cualquier parte y podrían ser de cualquier tipo, TypeScript proporciona el tipo any.
```ts
let notSure: any = 4;
```

8. Void: Utilizado para funciones que no devuelven un valor.
```ts
function warnUser(): void {
    console.log("This is my warning message");
}
```
9. Null y Undefined: Ambos null y undefined son subtipos de todos los otros tipos. Eso significa que se puede asignar null y undefined a algo como number.

10. Never: Representa el tipo de valores que nunca ocurren. Por ejemplo, never es el tipo de retorno para una función o método que siempre lanza una excepción o una que nunca retorna.

11. Object: Representa el tipo no primitivo. Es decir, cualquier cosa que no sea number, string, boolean, symbol, null, o undefined.

Además, TypeScript soporta la definición de tipos personalizados a través de interfaces y clases, así como tipos genéricos.

En resumen, las variables y las constantes en TypeScript proporcionan una forma de etiquetar los espacios de almacenamiento en la memoria con nombres significativos, facilitando así la programación. Mientras que las variables se pueden reasignar con nuevos valores, las constantes mantienen su valor inicial durante toda la ejecución del programa.

###Aprendizajes de esta lección
1. Comprender el uso de variables y constantes en TypeScript para almacenar y manipular datos.
2. Aprender a declarar variables utilizando la palabra clave let y constantes utilizando la palabra clave const.
3. Conocer los tipos de datos incorporados en TypeScript, como boolean, number, string, array, tuple, enum, any, void, null, undefined, never y object.
4. Entender cómo asignar valores a variables y constantes y cómo TypeScript infiere los tipos de datos.
5. Familiarizarse con la creación de tipos personalizados mediante interfaces y clases en TypeScript.
6. Aprender sobre los tipos genéricos y su uso en funciones y clases.