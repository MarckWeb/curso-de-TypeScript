# Funciones de Primera Clase

En programación, se dice que las funciones son de "primera clase" cuando se pueden tratar de la misma manera que cualquier otro valor de una variable. Es decir, en lenguajes donde las funciones son de primera clase, estas se pueden asignar a variables, se pueden pasar como argumentos a otras funciones y pueden ser retornadas como el valor de otras funciones. TypeScript, al ser un superconjunto de JavaScript, también trata las funciones como ciudadanos de primera clase.

Asignación de funciones a variables
En TypeScript, se puede asignar una función a una variable. Luego, esa variable puede usarse para invocar la función.

```ts
let miFuncion = function () {
  console.log("¡Hola, mundo!");
};

miFuncion(); // Salida: ¡Hola, mundo!
```

Pasar funciones como argumentos
Además, las funciones en TypeScript pueden pasarse como argumentos a otras funciones. Esto es útil para los patrones de programación como los callbacks, donde una función se pasa a otra para que sea llamada en un momento posterior.

```ts
// Recibe como parámetro una función sin parámetros de tipo de retorno void
function llamarFuncion(func: () => void) {
  func();
}

// Se crea una función sin parámetros de tipo de retorno void
let miFuncion = function () {
  console.log("¡Función llamada!");
};

llamarFuncion(miFuncion); // Salida: ¡Función llamada!
```

### Retorno de funciones

Las funciones en TypeScript también pueden ser devueltas por otras funciones. Este es un patrón comúnmente visto en programación funcional.

```ts
function crearFuncion() {
  return function () {
    console.log("¡Función creada y llamada!");
  };
}

let miFuncion = crearFuncion();
miFuncion(); // Salida: ¡Función creada y llamada!
```

En resumen, TypeScript, al igual que JavaScript, trata a las funciones como ciudadanos de primera clase. Esto permite un gran nivel de flexibilidad en el diseño de programas, y permite patrones de programación más complejos y expresivos.

### Aprendizajes de esta lección

1. Comprender el concepto de funciones de "primera clase" y su importancia en la programación.
2. Aprender cómo asignar una función a una variable y cómo invocarla a través de la variable en TypeScript.
3. Conocer cómo pasar funciones como argumentos a otras funciones y utilizarlos, especialmente en el contexto de callbacks.
4. Entender cómo las funciones pueden ser retornadas como resultados de otras funciones y cómo utilizar este patrón en la programación funcional.
5. Reconocer los beneficios y la flexibilidad que ofrecen las funciones de "primera clase" en el diseño de programas.
