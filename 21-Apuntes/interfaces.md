# Interfaces

Las interfaces en TypeScript son una herramienta fundamental para definir la estructura y el contrato que deben seguir los objetos en un sistema de tipos estático. Una interfaz define un conjunto de propiedades y métodos que un objeto debe tener para cumplir con esa interfaz. En otras palabras, una interfaz establece un contrato que un objeto debe cumplir para considerarse compatible con esa interfaz.

Una interfaz se define utilizando la palabra clave interface seguida del nombre de la interfaz y las propiedades y métodos que debe tener. Por ejemplo, si se quiere definir una interfaz para representar un objeto Persona con propiedades como nombre, edad y dirección, puede hacerse de la siguiente manera:

```ts
interface Persona {
  nombre: string;
  edad: number;
  direccion: string;
}
```

En este ejemplo, la interfaz Persona define tres propiedades: nombre, edad y direccion. La propiedad nombre debe ser de tipo string, la propiedad edad debe ser de tipo number y la propiedad direccion debe ser de tipo string. Ahora, puede utilizarse esta interfaz para crear objetos que cumplan con esta estructura:

```ts
let persona1: Persona = {
  nombre: "Juan",
  edad: 30,
  direccion: "Calle Principal 123",
};
```

Aquí se ha creado un objeto persona1 que cumple con la interfaz Persona porque tiene las propiedades nombre, edad y direccion con los tipos correctos. Si se intentara asignar un objeto que no cumpla con la interfaz, TypeScript mostraría un error en tiempo de compilación.

Las interfaces también pueden incluir métodos no implementados, indicando sus parámetros de entrada y tipo de salida. Por ejemplo, si se quiere agregar un método saludar a la interfaz Persona, puede lograrse de la siguiente manera:

```ts
interface Persona {
  nombre: string;
  edad: number;
  direccion: string;
  saludar: () => void;
}
```

Aquí se ha agregado el método saludar que no recibe ningún argumento y no devuelve ningún valor (void). Ahora, al crear un objeto que cumple con la interfaz Persona, también debe incluir una implementación para el método saludar:

```ts
let persona1: Persona = {
  nombre: "Juan",
  edad: 30,
  direccion: "Calle Principal 123",
  saludar: () => {
    console.log("¡Hola! Mi nombre es " + persona1.nombre);
  },
};
```

En este ejemplo, se implementa el método saludar en el objeto persona1. Al llamar a persona1.saludar(), imprimirá "¡Hola! Mi nombre es Juan" en la consola.

Las interfaces también pueden ser extendidas para crear nuevas interfaces que heredan las propiedades y métodos de otras interfaces. Esto es útil cuando se quiere definir interfaces más específicas basadas en una interfaz base. Por ejemplo:

```ts
interface Empleado extends Persona {
  id: number;
  cargo: string;
}
```

Aquí, se ha creado la interfaz Empleado que extiende la interfaz Persona. La interfaz Empleado tiene las mismas propiedades y métodos que la interfaz Persona, pero también agrega dos nuevas propiedades: id de tipo number y cargo de tipo string. De esta manera, un objeto Empleado debe tener todas las propiedades y métodos de la interfaz Persona, además de las propiedades adicionales definidas en la interfaz Empleado.

### inteface

se refieran a declaran variables con sus tipos las cuales se utilizaran ya sea en objetos o array, el cual un interface se puede extender sus datos a otro interface.

```ts
//interface extends
interface Person {
  id: number;
  name: string;
}

interface Employes extends Person {
  dept: string;
}

interface Customer extends Person {
  country: string;
}

const customer: Customer = {
  country: "city",
  id: 1,
  name: "vs",
};
```

En resumen, las interfaces en TypeScript son una forma poderosa de definir la estructura y el contrato que deben seguir los objetos en un sistema de tipos estático. Permiten establecer un conjunto de propiedades y métodos que los objetos deben tener para cumplir con una interfaz específica. Esto proporciona una verificación estática y ayuda a prevenir errores comunes al trabajar con objetos en TypeScript.

### Aprendizajes de esta lección

1. Comprender qué son las interfaces y su importancia en TypeScript.
2. Aprender a definir una interfaz utilizando la palabra clave interface.
3. Conocer cómo especificar las propiedades y métodos requeridos en una interfaz.
4. Saber cómo utilizar una interfaz para crear objetos que cumplan con su estructura.
5. Familiarizarse con el concepto de implementación de métodos en interfaces y cómo utilizarlos en objetos. 6. Entender la herencia de interfaces y cómo extender una interfaz para crear nuevas interfaces más específicas.
