# Herencia

La herencia en TypeScript es un mecanismo que permite que una clase adquiera propiedades y métodos de otra clase llamada clase base o superclase. Esto significa que una clase puede heredar características de otra clase y también puede agregar su propia funcionalidad adicional. La herencia es una parte fundamental de la programación orientada a objetos y proporciona una forma eficiente de reutilizar y organizar el código.

En TypeScript, la herencia se logra mediante la palabra clave **extends**. Una clase hija o subclase puede heredar de una clase padre o superclase utilizando esta palabra clave. La clase hija adquiere todos los miembros (propiedades y métodos) de la clase padre y puede agregar o modificar estos miembros según sea necesario.

A continuación, se presenta un ejemplo de cómo se define una clase base en TypeScript:

```ts
// Definición de la clase base
class Vehiculo {
  marca: string;
  modelo: string;

  constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
  }

  acelerar() {
    console.log("El vehículo está acelerando.");
  }

  frenar() {
    console.log("El vehículo está frenando.");
  }
}
```

En este ejemplo, la clase Vehiculo es la clase base que tiene dos propiedades, marca y modelo, y dos métodos, acelerar y frenar.

Ahora, puede definirse una clase hija que herede de la clase base utilizando la palabra clave extends. La clase hija puede agregar su propia funcionalidad adicional o modificar el comportamiento heredado de la clase base.

```ts
// Definición de la clase hija
class Coche extends Vehiculo {
  puertas: number;

  constructor(marca: string, modelo: string, puertas: number) {
    super(marca, modelo); // super() es la llamada al constructor de la clase base
    this.puertas = puertas;
  }

  abrirPuertas() {
    console.log(`Abriendo las ${this.puertas} puertas del coche.`);
  }

  // Override del método acelerar
  // Un objeto Coche que llame a acelerar() llamará a este método, y no al de Vehiculo
  // Podría llamarse al acelerar() de la clase padre dentro de este método mediante super.acelerar()
  acelerar() {
    // super.acelerar(); // Si se quisiera llamar al acelerar() de Vehiculo primero
    console.log("El coche está acelerando rápidamente.");
  }
}
```

En este ejemplo, la clase Coche es una subclase de la clase **Vehiculo**. Además de heredar las propiedades **marca**, **modelo** y los métodos acelerar y frenar de la clase base, la clase Coche tiene una propiedad adicional puertas y un método adicional abrirPuertas. También se ha sobrescrito el método acelerar para que imprima un mensaje específico para los coches.

Ahora pueden crearse instancias de la clase Coche y utilizar sus propiedades y métodos heredados, así como los adicionales que se han definido en la clase hija:

```ts
// Crear una instancia de la clase Coche
const miCoche = new Coche('Toyota', 'Camry', 4);

// Acceder a las propiedades heredadas de la clase base
console.log(miCoche.marca); // "Toyota"
console.log(miCoche.modelo); // "Camry"

// Utilizar los métodos heredados de la clase base
miCoche.acelerar(); // "El coche está acelerando rápidamente."
miCoche.frenar(); // "El vehículo está frenando."

// Utilizar la propiedad y el método adicionales de la clase hija
console.log(miCoche.puertas); // 4
miCoche.abrirPuertas(); // "Abriendo las 4 puertas del coche."
En TypeScript, una clase no puede extender a varias clases, pero una clase sí que puede ser extendida por cualquier número de clases.

// NO permitido: Una clase no puede extender a varias clases
class ParentA { }
class ParentB { }
class Child extends ParentA, ParentB { } // Error de compilación

// SÍ permitido: Varias clases pueden extender a la misma clase
class Parent { }
class ChildA extends Parent { }
class ChildB extends Parent { }
```

En este ejercicio esta forma es la que si se puede:

```ts
// En el siguiente código, si se instancia un objeto de clase Loro, ¿a qué métodos tendría acceso?

class Animal {
  comer(): void {
    console.log("Comer");
  }
}

class Ave extends Animal {
  volar(): void {
    console.log("Volar");
  }
}

class Loro extends Ave {
  hablar(): void {
    console.log("Hablar");
  }
}
```

En resumen, la herencia en TypeScript permite que una clase adquiera las propiedades y métodos de otra clase, lo que facilita la reutilización del código y la creación de jerarquías de clases. Mediante el uso de la palabra clave extends, una clase hija puede heredar de una clase padre y agregar o modificar su comportamiento según sea necesario. Esto promueve la modularidad, el mantenimiento del código y la organización eficiente de las funcionalidades relacionadas.

### Aprendizajes de esta lección

1. Comprender el concepto de herencia en la programación orientada a objetos.
2. Conocer el uso de la palabra clave extends para establecer una relación de herencia entre clases en TypeScript.
3. Aprender cómo una clase hija puede heredar propiedades y métodos de una clase padre.
4. Entender que las subclases pueden agregar propiedades y métodos adicionales o modificar el comportamiento heredado de la clase base.
5. Practicar la creación de clases base y subclases en TypeScript y su utilización para reutilizar y organizar el código de manera eficiente.
6. Familiarizarse con los beneficios de la herencia, como la creación de jerarquías de clases y la simplificación de la estructura de código.
