# Encapsulacion

La encapsulación es uno de los principios fundamentales de la programación orientada a objetos que busca agrupar datos y los métodos que los manipulan en una sola entidad cohesiva. En el contexto de TypeScript, la encapsulación permite definir qué aspectos de una clase son accesibles desde el exterior y cuáles son privados y no pueden ser accedidos directamente.

En TypeScript, la encapsulación se logra mediante el uso de modificadores de acceso, que son palabras clave que se colocan delante de las propiedades y métodos de una clase para especificar su visibilidad. Los tres modificadores de acceso disponibles en TypeScript son: public, private y protected.

1. **public:** Esta es la visibilidad por defecto si no se especifica ningún modificador de acceso. Las propiedades y métodos públicos son accesibles desde cualquier lugar, tanto desde dentro de la propia clase como desde instancias de la clase o clases heredadas. Por ejemplo:

```ts
class Persona {
  public nombre: string;

  public constructor(nombre: string) {
    this.nombre = nombre;
  }

  public saludar(): void {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  }
}

const persona = new Persona("Juan");
persona.saludar(); // Imprime: "Hola, mi nombre es Juan"
```

2. **private:** Las propiedades y métodos marcados como private son accesibles únicamente desde dentro de la clase que los define. No se pueden acceder ni modificar desde instancias de la clase o clases heredadas. Por ejemplo:

```ts
class CuentaBancaria {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  public depositar(cantidad: number): void {
    this.saldo += cantidad;
  }

  public obtenerSaldo(): number {
    return this.saldo;
  }
}

const cuenta = new CuentaBancaria(100);
cuenta.depositar(50); // Acceso permitido
console.log(cuenta.obtenerSaldo()); // Acceso permitido: Imprime 150

console.log(cuenta.saldo); // Acceso no permitido por que saldo es private: Error de compilación
```

3. **protected**: Los miembros protected son similares a los private, ya que no pueden ser accedidos desde instancias de la clase. Sin embargo, a diferencia de los miembros privados, los miembros protegidos sí pueden ser accedidos desde clases heredadas. Por ejemplo:

```ts
class Animal {
  protected nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
}

class Perro extends Animal {
  private raza: string;

  constructor(nombre: string, raza: string) {
    super(nombre);
    this.raza = raza;
  }

  public obtenerDatos(): string {
    return `Nombre: ${this.nombre}, Raza: ${this.raza}`;
  }
}

const perro = new Perro("Max", "Labrador");
console.log(perro.obtenerDatos()); // Acceso permitido: Imprime "Nombre: Max, Raza: Labrador"
console.log(perro.nombre); // Acceso no permitido: Error de compilación
```

En resumen, la encapsulación en TypeScript permite controlar la visibilidad de los miembros de una clase, asegurando que solo sean accedidos y modificados de acuerdo con las reglas definidas por el desarrollador. Esto facilita el mantenimiento del código, ya que los detalles internos de una clase se pueden ocultar y los cambios en la implementación de una clase no afectarán el código externo que la utiliza.

### Aprendizajes de esta lección

1. Comprender el concepto de encapsulación y su importancia en la programación orientada a objetos.
2. Conocer los modificadores de acceso public, private y protected en TypeScript.
3. Aprender cómo utilizar los modificadores de acceso para controlar la visibilidad de las propiedades y métodos en una clase.
4. Entender que las propiedades y métodos public son accesibles desde cualquier lugar, mientras que las private solo desde dentro de la clase y las protected desde la clase y clases heredadas.
5. Practicar el uso de la encapsulación para ocultar los detalles internos de una clase y evitar accesos no deseados desde el exterior.
6. Familiarizarse con los beneficios de la encapsulación, como el mantenimiento del código y la prevención de errores al restringir el acceso a ciertos miembros de la clase.
