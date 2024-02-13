# Modulos

## Definición y Estructura

Los módulos en TypeScript son una forma de organizar y dividir el código en bloques lógicos reutilizables. Cada módulo puede contener cualquier combinación de funciones, clases, interfaces, tipos y otras abstracciones que pueden ser exportadas para su uso en otros módulos.

En TypeScript, un archivo de código es un módulo. No se necesita ninguna declaración explícita para convertir un archivo en un módulo. En vez de eso, cualquier declaración de export o import en el archivo lo convierte automáticamente en un módulo.

Aquí hay un ejemplo de un módulo simple en TypeScript:

```ts
// modulo.ts

export function suma(a: number, b: number): number {
  return a + b;
}

export function resta(a: number, b: number): number {
  return a - b;
}
```

En el ejemplo anterior, el archivo modulo.ts define dos funciones, suma y resta, y luego las exporta para que otros módulos las usen.

## Importación y Exportación

La importación y exportación de abstracciones entre módulos es fundamental para aprovechar la modularidad del código. TypeScript utiliza la sintaxis de import y export de ES6 para permitir la importación y exportación de abstracciones.

## Exportación

Existen dos tipos de exportaciones en TypeScript: exportaciones nombradas y exportaciones predeterminadas.

## Exportaciones nombradas

Las exportaciones nombradas son útiles cuando un módulo puede exportar varias abstracciones. Cada exportación se identifica con un nombre.

```ts
// modulo.ts

export function suma(a: number, b: number): number {
  return a + b;
}

export function resta(a: number, b: number): number {
  return a - b;
}
```

En el ejemplo anterior, suma y resta son exportaciones nombradas. También podrían omitirse los 'export' de las declaraciones y exportarse a continuación:

```ts
// modulo.ts

function suma(a: number, b: number): number {
  return a + b;
}

function resta(a: number, b: number): number {
  return a - b;
}

export { suma, resta };
```

## Exportaciones predeterminadas

Cada módulo puede tener una única exportación predeterminada. Es útil cuando un módulo se asocia principalmente con una abstracción en particular.

**¿Cuántas exportaciones predeterminadas (definidas por default) puede tener un módulo?**
Ninguna o una.

```ts
// modulo.ts

export default function (a: number, b: number): number {
  return a + b;
}
```

En este caso, la función que suma dos números es la exportación predeterminada del módulo.

## Importación

El proceso de importación se hace utilizando la palabra clave import. Para importar abstracciones nombradas, se usan sus nombres exactos. Para importar una exportación predeterminada, puede usarse cualquier nombre.

Importación de exportaciones nombradas

```ts
// app.ts

import { suma, resta } from './modulo';

console.log(suma(2, 1));  // Output: 3
console.log(resta(2, 1)); // Output: 1
Importación de exportación predeterminada
// app.ts

import suma from './modulo';

console.log(suma(1, 2));  // Output: 3
```

En el ejemplo anterior, el nombre suma se usa para importar la exportación predeterminada del módulo modulo.ts. Podría haberse usado cualquier nombre, al ser una exportación predeterminada declarada mediante default. Nótese que para importar una exportación predeterminada, no se deben usar llaves {}.

## Conclusión

Los módulos en TypeScript ofrecen una forma eficaz de organizar y encapsular el código. Facilitan la creación de componentes de código reutilizables, mejorando la legibilidad, el mantenimiento y la reutilización del código. Con el uso de import y export, los módulos pueden compartir sus abstracciones de forma controlada, permitiendo una colaboración segura entre diferentes partes del código.

### Aprendizajes de esta lección

1. Comprender el concepto de módulos en TypeScript como bloques lógicos reutilizables.
2. Aprender cómo crear un módulo en TypeScript a través de la sintaxis de export.
   Conocer los dos tipos de exportaciones en TypeScript: exportaciones nombradas y exportaciones predeterminadas.
3. Aprender a importar exportaciones nombradas y predeterminadas utilizando la sintaxis de import.
4. Entender la importancia de los módulos para la organización y encapsulación del código, mejorando la legibilidad y el mantenimiento.
5. Reconocer cómo los módulos facilitan la colaboración y la reutilización del código en diferentes partes de una aplicación.
