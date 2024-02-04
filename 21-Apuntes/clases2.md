# Clases

TypeScript, al ser una superconjunto de JavaScript, introdujo el concepto de Clases que sigue los estándares de ES6, para abordar la programación orientada a objetos de una manera más completa.

En TypeScript, una clase es un tipo de función que se declara con la palabra clave class. La estructura de una clase incluye constructores, propiedades, métodos y también puede incluir campos estáticos, privados y protegidos.

#### Declaración de una clase

Para declarar una clase en TypeScript, se usa la palabra clave class seguida del nombre de la clase. Los nombres de las clases, según las convenciones de codificación, generalmente comienzan con una letra mayúscula.

```ts
class MiClase {}
```

#### Propiedades de una clase

Una propiedad es una variable que se declara dentro de la clase. Las propiedades representan el estado o los datos de un objeto.

```ts
class Persona {
  nombre: string;
  edad: number;
}
```

#### Constructor de una clase

Un constructor es un método especial en una clase, llamado explicitamente constructor, que se llama automáticamente cada vez que se crea una instancia de la clase. Se utiliza generalmente para inicializar las propiedades de la clase.

```ts
class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
}
```

#### Métodos de una clase

Un método es una función asociada a la clase. Los métodos pueden ser creados para realizar ciertas operaciones.

```ts
class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  presentarse() {
    return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
  }
}
```

#### Instancia de una clase

Para crear una instancia de una clase, se usa la palabra clave new seguida del nombre de la clase y se llaman a los argumentos del constructor si existen.

```ts
let persona1 = new Persona("Juan", 30);
console.log(persona1.nombre); // Juan
console.log(persona1.presentarse());  // Hola, mi nombre es Juan y tengo 30 años.
Cada instancia de una clase creada es independiente, y los valores de una instancia pueden modificarse sin afectar a los demás.

let persona1 = new Persona("Juan", 30);
let persona2 = new Persona("Ana", 20);

console.log(persona1.edad); // 30
console.log(persona2.edad); // 20

persona1.edad++; // Incrementar edad de persona1 en 1

console.log(persona1.edad); // 31
console.log(persona2.edad); // 20, no se ha modificado
```

#### Modificadores de acceso

Un modificador de acceso en un miembro de una clase determina desde donde se puede acceder a ese miembro. En TypeScript, cada miembro de la clase tiene un modificador de acceso público por defecto. Esto significa que se pueden acceder desde cualquier lugar. Sin embargo, TypeScript soporta los modificadores de acceso private y protected para restringir el acceso a los miembros de la clase.

1. public: Este es el nivel de acceso por defecto. Significa que un miembro de la clase puede ser accedido desde cualquier lugar.

2. private: Cuando se marca un miembro de la clase como privado, no se puede acceder desde fuera de la clase.

3. protected: Similar a private, pero los miembros protegidos pueden ser accedidos desde las clases derivadas.

```ts
class Persona {
  public nombre: string;
  private edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  presentarse() {
    return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
  }
}

let persona1 = new Persona("Juan", 30);
// Es posible acceder a 'nombre' por ser public
console.log(persona1.nombre);
// No es posible acceder a 'edad' desde fuera de la clase porque es private
console.log(persona1.edad); // Error
```

### Aprendizajes de esta lección

1. Comprender la sintaxis básica para declarar una clase en TypeScript.
2. Conocer cómo definir propiedades y métodos dentro de una clase.
3. Entender el uso del constructor para inicializar objetos al crear instancias de la clase.
4. Aprender a crear y utilizar métodos para que los objetos realicen operaciones específicas.
5. Saber cómo crear instancias de una clase usando la palabra clave new.
6. Familiarizarse con los modificadores de acceso (public, private y protected) y cómo afectan la accesibilidad de los miembros de la clase.
7. Practicar la creación de clases y objetos en TypeScript para organizar y estructurar el código de manera eficiente y reutilizable.
