# Funciones Flecha

Las funciones flecha son un concepto clave en TypeScript y en muchos otros lenguajes de programación modernos. Este concepto proviene de JavaScript y fue introducido con la especificación ES6. Las funciones flecha proporcionan una sintaxis más concisa para escribir funciones.

#### Sintaxis de las funciones flecha
Las funciones flecha tienen una sintaxis corta y concisa en comparación con las funciones regulares. La sintaxis básica es como sigue:

```ts
const nombreFuncion = (param1, param2, ..., paramN) => { 
  // Código de la función
}
```
Donde param1, param2, ..., paramN son los parámetros de la función. Si solo hay un parámetro, los paréntesis son opcionales. Por ejemplo:

```ts
const cuadrado = numero => {
  return numero * numero;
}

console.log(cuadrado(5)); // 25
```

Si no hay parámetros, es necesario incluir un par de paréntesis vacíos ():

```ts
const saludar = () => {
  console.log('¡Hola mundo!');
}

saludar(); // Imprime '¡Hola mundo!'
```

Si la función solo tiene una línea de código que devuelve un valor, es posible omitir la palabra clave return y las llaves {}. Por ejemplo:

```ts
const cuadrado = numero => numero * numero;

console.log(cuadrado(5)); // 25
```

Esto se llama retorno implícito.

#### this en las funciones flecha
En TypeScript y JavaScript, el valor de this dentro de una función depende de cómo se llama a la función. En las funciones tradicionales, this puede cambiar dependiendo del contexto de la función. Sin embargo, en las funciones flecha, this es léxico, lo que significa que adopta el valor de this del entorno circundante. Es una de las principales ventajas de usar funciones flecha.

Por ejemplo, si se intenta acceder a this dentro de una función anidada en un método de un objeto, el valor de this no apunta al objeto:

```ts
const miObjeto = {
  propiedad: '¡Hola Mundo!',
  miMetodo: function() {
    function funcionAnidada() {
      console.log(this.propiedad); // Imprime 'undefined'
    }
    funcionAnidada();
  }
}

miObjeto.miMetodo();
```

En este caso, el valor de this dentro de funcionAnidada es diferente al valor de this en miObjeto.

Pero si usamos una función flecha en lugar de una función regular, this toma el valor del objeto:

```ts
const miObjeto = {
  propiedad: '¡Hola Mundo!',
  miMetodo: function() {
    const funcionAnidada = () => {
      console.log(this.propiedad); // Imprime '¡Hola Mundo!'
    }
    funcionAnidada();
  }
}

miObjeto.miMetodo();
```
En este caso, el valor de this es el mismo en funcionAnidada y miObjeto.

#### Tipado en funciones flecha
En TypeScript, se pueden especificar los tipos de los parámetros y el tipo de retorno de la función.

```ts
const cuadrado: (num: number) => number = numero => numero * numero;
// |cuadrado| - Nombre de la función
// |(num: number) => number| - Tipo de la función
// |numero => numero * numero| - Función flecha

console.log(cuadrado(5)); // Imprime 25
```

En este caso, (num: number) => number es el tipo de la función. Indica que la función toma un número como parámetro y devuelve un número. En caso de que la función flecha no devuelva nada, puede usarse void como su tipo de retorno.

En resumen, las funciones flecha son una herramienta potente en TypeScript y JavaScript. Proporcionan una sintaxis concisa y manejan el valor de this de una manera más predecible, especialmente cuando se trabaja con funciones anidadas o métodos de objetos.

### Aprendizajes de esta lección
1. Comprender la sintaxis básica de las funciones flecha en TypeScript.
2. Conocer cómo se declaran y utilizan los parámetros en las funciones flecha.
3. Aprender a usar la sintaxis de retorno implícito en funciones flecha de una sola línea.
4. Entender el concepto de this en las funciones flecha y cómo difiere de las funciones regulares.
5. Saber cómo especificar los tipos de los parámetros y el tipo de retorno en funciones flecha para mayor seguridad de tipo.
6. Practicar el uso de funciones flecha para escribir código más conciso y legible.
7. Familiarizarse con las ventajas y limitaciones de las funciones flecha, y cuándo es más apropiado utilizarlas en lugar de funciones regulares.