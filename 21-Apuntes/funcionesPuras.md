# Funciones Puras

Las funciones puras son un concepto central en la programación funcional, que es un estilo de programación en el que las operaciones se realizan principalmente a través de la evaluación de funciones matemáticas y la evitación de cambiar el estado y los datos mutables.

Una función es considerada pura si cumple con dos condiciones principales:

**Determinismo:** Para los mismos argumentos de entrada, siempre produce el mismo resultado de salida.

**No Efectos Secundarios** (no side-effects): No modifica ninguna variable de estado externo ni produce ningún efecto observable, más allá de producir un valor de retorno.

Las funciones puras tienen varias propiedades atractivas para la programación. Son predecibles, fáciles de testear, y favorecen a la programación concurrente y paralela ya que no hay riesgo de condiciones de carrera o de cambios inesperados en los datos compartidos.

```ts
// Una función pura en TypeScript
function suma(a: number, b: number): number {
  return a + b;
}
```

Esta es una función pura ya que siempre devuelve el mismo resultado cuando se le pasan los mismos valores, y no tiene efectos secundarios, no modifica ninguna variable fuera de su ámbito.

Por otro lado, esta sería una función que no es pura:

```ts
let contador = 0;

function incrementaContador(valor: number): number {
  contador += valor; // modifica una variable fuera de su ámbito
  return contador;
}

// Incluso para la misma entrada, puede devolver valores distintos
console.log(incrementaContador(5)); // 5
console.log(incrementaContador(5)); // 10
console.log(incrementaContador(5)); // 15
```

La función incrementaContador no es pura porque tiene un efecto secundario: modifica la variable contador que está fuera de su ámbito. Además, no siempre devolverá el mismo resultado para la misma entrada, luego carece de determinismo, que es otro aspecto que define a las funciones puras.

Ahora, un ejemplo más complejo. Supóngase que se tiene un array de objetos y se quiere obtener la suma total de una propiedad en particular:

```ts
type Producto = {
  id: number;
  nombre: string;
  precio: number;
};

// Función pura
function obtenerTotal(productos: Producto[]): number {
  // La función 'reduce' se utiliza aquí para sumar todos los precios
  return productos.reduce((total, producto) => total + producto.precio, 0);
}
```

La función obtenerTotal es pura porque no altera la entrada original productos, y siempre devuelve el mismo resultado para la misma entrada.

En resumen, favorecer el uso de funciones puras en el código puede ayudar a escribir programas más limpios, más predecibles y más fáciles de depurar y probar.

### Aprendizajes de esta lección

1. Comprender el concepto de funciones puras y su importancia en la programación funcional.
2. Conocer las dos condiciones principales que definen a las funciones puras: determinismo y ausencia de efectos secundarios.
3. Identificar ejemplos de funciones puras y no puras para entender la diferencia entre ellas.
4. Aprender a diseñar y escribir funciones puras en TypeScript.
5. Comprender los beneficios y ventajas de utilizar funciones puras en el desarrollo de software, incluyendo mayor predecibilidad, facilidad de testing y mejor soporte para la programación concurrente y paralela.
