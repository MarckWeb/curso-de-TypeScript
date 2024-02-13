# Namespaces

Los namespaces son una forma que TypeScript utiliza para organizar el código en bloques lógicos y separar las áreas de preocupación. Los namespaces pueden ser útiles para evitar conflictos de nombres en el código al agrupar entidades que trabajan juntas. En versiones anteriores de TypeScript, los namespaces se utilizaban para organizar el código en módulos, pero desde la introducción de los módulos ES6, los namespaces son menos comunes en el desarrollo de TypeScript. En general, se recomienda el uso de módulos en lugar de namespaces en código moderno.

## Definición de un namespace

Un namespace en TypeScript es un espacio que envuelve a un conjunto de funciones, clases, interfaces y otros namespaces también. Los elementos dentro de un namespace están separados del exterior, evitando así conflictos de nombres.

Aquí se presenta un ejemplo básico de un namespace en TypeScript, definido por la palabra clave namespace:

```ts
namespace MiNamespace {
  export class MiClase {
    constructor(public mensaje: string) {}

    log(): void {
      console.log(this.mensaje);
    }
  }

  export interface MiInterface {
    campo1: string;
    campo2: number;
  }

  export function miFuncion(parametro: string): string {
    return "Hola, " + parametro;
  }
}
```

En este ejemplo, MiNamespace contiene una clase MiClase, una interfaz MiInterface, y una función miFuncion. Nótese que las entidades dentro del namespace están marcadas con la palabra clave export. Esto significa que estas entidades están disponibles fuera del namespace. Si no se marcara con export, las entidades estarían disponibles únicamente dentro del namespace.

## Uso de un namespace

Para utilizar las entidades definidas dentro de un namespace, se debe anteponer el nombre del namespace a la entidad, separados por un punto. Aquí se muestra un ejemplo de cómo utilizar el namespace definido anteriormente:

```ts
let miObjeto = new MiNamespace.MiClase("Hola mundo");
miObjeto.log();

let miInterfaz: MiNamespace.MiInterface = { campo1: "Test", campo2: 10 };

console.log(MiNamespace.miFuncion("Juan"));
```

## Namespaces anidados

Un namespace puede contener otros namespaces, creando así una estructura jerárquica. Aquí se muestra un ejemplo de un namespace anidado:

```ts
namespace NamespaceExterno {
  export namespace NamespaceInterno {
    export class MiClase {
      constructor(public mensaje: string) {}

      log(): void {
        console.log(this.mensaje);
      }
    }
  }
}
```

Para acceder a las entidades dentro de un namespace anidado, se debe especificar la ruta completa:

```ts
let miObjeto = new NamespaceExterno.NamespaceInterno.MiClase("Hola mundo");
miObjeto.log();
```

Los namespaces proporcionan una forma eficaz de organizar el código y evitar conflictos de nombres. Sin embargo, con la introducción de los módulos ES6 en TypeScript, los namespaces se están volviendo menos comunes. Aun así, en ciertas circunstancias, los namespaces pueden ser útiles para agrupar de manera lógica funciones, clases, interfaces y otros namespaces.

#### Aprendizajes de esta lección

1. Comprender qué son los namespaces en TypeScript y su propósito en la organización del código.
2. Aprender cómo definir un namespace y qué entidades pueden contener.
3. Conocer cómo se marcan las entidades con export para que sean accesibles fuera del namespace.
4. Entender cómo utilizar las entidades definidas dentro de un namespace en otras partes del código.
5. Reconocer la ventaja de utilizar namespaces anidados para crear una estructura jerárquica y lógica del código.
