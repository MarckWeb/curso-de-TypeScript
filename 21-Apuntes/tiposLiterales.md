# Tipos Literales

Los tipos literales en TypeScript son una forma de definir tipos que sólo admiten un conjunto específico de valores literales. Estos son extremadamente útiles para definir y limitar la gama de posibles valores que una variable puede tener, aumentando así la seguridad del tipo en el código.

Un tipo literal puede ser un literal de cadena (string), un literal numérico (number), o un literal booleano (boolean).

### Literales de cadena

Un literal de cadena se define utilizando comillas simples ('') o comillas dobles (""). Por ejemplo, puede tenerse una variable que sólo puede contener ciertos valores específicos. En el siguiente código, se define un tipo llamado EstadoCivil que puede ser 'Soltero', 'Casado' o 'Divorciado':

```ts
type EstadoCivil = "Soltero" | "Casado" | "Divorciado";

let estadoCivilPersona: EstadoCivil;

estadoCivilPersona = "Casado"; // Esto es válido
estadoCivilPersona = "Viudo"; // Error de compilación, el valor no está en la lista de valores posibles
```

### Literales numéricos

De forma similar, los literales numéricos permiten definir tipos que sólo pueden tomar ciertos números específicos. A continuación se presenta un ejemplo en el que se define un tipo que puede ser 1, 2 o 3:

```ts
type NumeroMagico = 1 | 2 | 3;

let numero: NumeroMagico;

numero = 1; // Esto es válido
numero = 4; // Error de compilación, el valor no está en la lista de valores posibles
```

### Literales booleanos

Finalmente, los literales booleanos son quizás los más simples, ya que sólo pueden ser true o false. Aquí un ejemplo:

```ts
type Verdadero = true;

let esVerdadero: Verdadero;

esVerdadero = true; // Esto es válido
esVerdadero = false; // Error de compilación, el valor no está en la lista de valores posibles
```

Es importante destacar que los tipos literales en TypeScript se pueden utilizar en combinación con otros tipos para formar tipos más complejos. Esto es especialmente útil en situaciones donde se desea que una variable o función acepte un conjunto específico de valores.

Por ejemplo, en el siguiente caso, se define un tipo Resultado que puede ser 'exito', 'fracaso' o null:

```ts
type Resultado = "exito" | "fracaso" | null;

let resultadoOperacion: Resultado;

resultadoOperacion = "exito"; // Esto es válido
resultadoOperacion = "error"; // Error de compilación, el valor no está en la lista de valores posibles
resultadoOperacion = null; // Esto es válido
```

El uso de tipos literales mejora la seguridad del tipo, proporciona documentación y puede ayudar a evitar errores al escribir código.

## Aprendizajes de esta lección

1. Comprender el concepto de tipos literales y su utilidad para limitar los valores que una variable puede contener.
2. Aprender a definir tipos literales utilizando cadenas, números y booleanos.
3. Conocer cómo se pueden combinar tipos literales con otros tipos para formar tipos más complejos y específicos.
4. Entender cómo el uso de tipos literales mejora la seguridad del tipo, proporciona documentación y evita errores en el código.
5. Reconocer situaciones en las que el uso de tipos literales puede ser beneficioso y aplicarlos de manera efectiva en el diseño del código.
