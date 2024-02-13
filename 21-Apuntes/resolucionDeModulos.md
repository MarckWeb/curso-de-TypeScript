# Resolucion de Modulos

TypeScript permite trabajar con módulos para organizar el código en unidades lógicas, haciendo el desarrollo de aplicaciones complejas más manejable y escalable. Cuando se trabaja con módulos, TypeScript tiene dos sistemas principales de resolución de módulos: Node y Classic.

## Resolución de módulos

### Resolución de Módulos Node

Este es el sistema de resolución de módulos que TypeScript utiliza por defecto. En este sistema de resolución, TypeScript trata de imitar el comportamiento del módulo de resolución de Node.js. Cuando se intenta importar un módulo utilizando una ruta relativa, TypeScript buscará ese módulo en el mismo directorio. Si la ruta del módulo es absoluta, TypeScript buscará el módulo en el directorio especificado en la ruta.

Por ejemplo:

```ts
// archivo en la ruta 'src/models/user.ts'
export class User {
  constructor(public name: string) {}
}

// archivo en la ruta 'src/controllers/userController.ts'
import { User } from "../models/user";

let user = new User("John Doe");
```

En este ejemplo, TypeScript buscará el módulo 'User' en el archivo 'user.ts' que se encuentra en el directorio 'models' que está al mismo nivel que el directorio 'controllers'.

Si el módulo que se intenta importar no es relativo ni absoluto, TypeScript buscará el módulo en 'node_modules', que es el comportamiento estándar en Node.js. Por ejemplo:

```ts
// en un archivo cualquiera
import * as _ from "lodash";

_.isEmpty({}); // true
```

En este ejemplo, TypeScript buscará el módulo 'lodash' en el directorio 'node_modules'.

## Resolución de Módulos Classic

Este sistema de resolución es el método original de TypeScript. Cuando se intenta importar un módulo con una ruta relativa, TypeScript buscará ese módulo en el mismo directorio. Si la ruta del módulo es absoluta, TypeScript buscará en la raíz del proyecto y luego en el directorio especificado en la ruta.

```ts
// archivo en la ruta 'src/models/user.ts'
export class User {
  constructor(public name: string) {}
}

// archivo en la ruta 'src/controllers/userController.ts'
import { User } from "models/user";

let user = new User("John Doe");
```

En este ejemplo, TypeScript buscará el módulo 'User' en el archivo 'user.ts' que se encuentra en el directorio 'models' ubicado en la raíz del proyecto.

## Configuración del compilador para módulos

La configuración del compilador para módulos se realiza en el archivo 'tsconfig.json', donde se pueden establecer diferentes opciones.

Para establecer el sistema de resolución de módulos, se utiliza la opción 'moduleResolution':

```ts
{
  "compilerOptions": {
    "moduleResolution": "node"
  }
}
```

En este ejemplo, se está configurando TypeScript para usar el sistema de resolución de módulos de Node.

Para definir el objetivo del módulo de JavaScript al que se debe compilar, se utiliza la opción 'module':

```ts
{
  "compilerOptions": {
    "module": "commonjs"
  }
}
```

En este ejemplo, se está configurando TypeScript para compilar a módulos CommonJS. Otros valores posibles incluyen 'amd', 'umd', 'system', 'es2015', 'es2020', 'esnext', etc.

Para establecer rutas base para la resolución de módulos, se puede usar la opción 'baseUrl':

```ts
{
  "compilerOptions": {
    "baseUrl": "./src"
  }
}
```

En este ejemplo, TypeScript tratará './src' como la raíz del proyecto para la resolución de módulos.

Además, se pueden configurar alias para rutas de módulos usando la opción 'paths':

```ts
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@models/*": ["models/*"]
    }
  }
}
```

En este ejemplo, '@models' puede usarse como alias para referirse al directorio 'models' en la raíz del proyecto.

### Aprendizajes de esta lección

1. Comprender los sistemas de resolución de módulos Node y Classic en TypeScript.
2. Conocer cómo se importan módulos utilizando rutas relativas y absolutas.
3. Entender cómo TypeScript busca módulos en el directorio actual y en 'node_modules'.
4. Aprender a configurar el compilador TypeScript para utilizar el sistema de resolución de módulos deseado.
5. Familiarizarse con la configuración de rutas base y alias para mejorar la resolución de módulos.
