# Tipos de Utilidad

TypeScript es conocido por su sólido sistema de tipos. Este sistema permite una gran variedad de utilidades para trabajar con tipos de forma segura y eficiente. Algunos de estos tipos de utilidad incluyen Partial, Readonly, Record, Pick, Omit, Exclude, Extract, NonNullable, ReturnType, InstanceType y más.

## Partial

Partial es una utilidad de TypeScript que hace que todos los campos de un tipo sean opcionales.

```ts
interface Usuario {
  nombre: string;
  edad: number;
}

function actualizarUsuario(usuario: Partial<Usuario>) {
  // ...
}

actualizarUsuario({ nombre: "John", edad: 30 }); // válido
actualizarUsuario({ nombre: "John" }); // válido
actualizarUsuario({ edad: 30 }); // válido
actualizarUsuario({}); // también válido
```

En el ejemplo anterior, la función actualizarUsuario toma un objeto de tipo Partial<Usuario>, lo que significa que se puede pasar un objeto que tenga cualquier subconjunto de los campos de Usuario.

## Readonly

Readonly hace que todos los campos de un tipo sean de solo lectura.

```ts
interface Usuario {
  nombre: string;
  edad: number;
}

let john: Readonly<Usuario> = {
  nombre: "John",
  edad: 30,
};

john.edad = 31; // Error: No se puede asignar a 'edad' porque es una propiedad de lectura.
```

## Record

Record es una utilidad que crea un tipo cuyas propiedades son del tipo proporcionado.

```ts
type Animales = 'gato' | 'perro';
type Sonidos = 'miau' | 'guau';

const sonidos: Record<Animales, Sonidos> = {
  gato: 'miau',
  perro: 'guau',
};
Pick
Pick permite seleccionar subconjuntos de propiedades de un tipo.

interface Usuario {
  nombre: string;
  edad: number;
  email: string;
}

type UsuarioConEmail = Pick<Usuario, "email">;

const john: UsuarioConEmail = {
  email: "john@example.com",
};
```

## Omit

Omit permite excluir subconjuntos de propiedades de un tipo.

```ts
interface Usuario {
  nombre: string;
  edad: number;
  email: string;
}

type UsuarioSinEmail = Omit<Usuario, "email">;

const john: UsuarioSinEmail = {
  nombre: "John",
  edad: 30,
};
```

## Exclude y Extract

Exclude y Extract permiten respectivamente excluir o extraer tipos de un tipo de unión.

```ts
type Animales = 'gato' | 'perro' | 'pez';
type Mascotas = Exclude<Animales, 'pez'>; // 'gato' | 'perro'
type AnimalesAcuaticos = Extract<Animales, 'pez'>; // 'pez'
NonNullable
NonNullable excluye null y undefined de un tipo.

type Animales = 'gato' | 'perro' | null | undefined;
type Mascotas = NonNullable<Animales>; // 'gato' | 'perro'
```

## ReturnType y InstanceType

ReturnType y InstanceType permiten obtener el tipo de retorno de una función y el tipo de una instancia de clase, respectivamente.

```ts
function saludo(nombre: string): string {
  return `Hola, ${nombre}`;
}

type Saludo = ReturnType<typeof saludo>; // type Saludo = string

class Usuario {
  constructor(public nombre: string, public edad: number) {}
}

type InstanciaUsuario = InstanceType<typeof Usuario>; // type InstanciaUsuario = Usuario
```

Estos son solo algunos de los tipos de utilidad que TypeScript proporciona. Al combinarlos y usarlos en las situaciones correctas, pueden proporcionar una gran cantidad de seguridad y flexibilidad de tipo en código TypeScript.

#### Aprendizajes de esta lección

1. Comprender las utilidades Partial, Readonly, Record, Pick, Omit, Exclude, Extract, NonNullable, ReturnType y InstanceType.
2. Aprender a usar Partial para hacer campos opcionales en un tipo.
3. Conocer cómo Readonly hace que los campos de un tipo sean de solo lectura.
4. Entender cómo Record crea un tipo con propiedades del tipo proporcionado.
5. Aprender a utilizar Pick para seleccionar subconjuntos de propiedades de un tipo.
6. Conocer cómo Omit permite excluir subconjuntos de propiedades de un tipo.
7. Reconocer cómo Exclude y Extract trabajan con tipos de unión para excluir o extraer tipos específicos.
8. Aprender a utilizar NonNullable para excluir null y undefined de un tipo.
9. Comprender cómo ReturnType y InstanceType obtienen el tipo de retorno de una función y el tipo de una instancia de clase, respectivamente.
