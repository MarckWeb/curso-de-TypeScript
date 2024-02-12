# Tipos de Interaccion

En TypeScript, las uniones (union) y las intersecciones (intersection) son tipos avanzados que permiten combinar de manera flexible otros tipos de datos.

## Uniones

El tipo de unión permite definir una variable que puede ser de varios tipos de datos. Es una manera de decirle al compilador que una variable puede tener más de un tipo. Para definir una unión, se utiliza el símbolo de tubería o pipe | entre los tipos que se quieren unir.

Un ejemplo básico de una unión sería:

```ts
let miVariable: string | number;
miVariable = "Hola"; // Correcto
miVariable = 10; // Correcto
miVariable = true; // Error: Type 'boolean' is not assignable to type 'string | number'
```

En el código anterior, miVariable puede ser tanto un string como un number. Sin embargo, si se intenta asignar un boolean, TypeScript lanzará un error ya que boolean no está en la unión de tipos que se definió.

Los tipos de unión también pueden usarse con tipos de datos más complejos, como objetos. Por ejemplo:

```ts
type Auto = {
  marca: string;
  modelo: string;
};

type Moto = {
  marca: string;
  tipo: string;
};

let miVehiculo: Auto | Moto;

miVehiculo = { marca: "Toyota", modelo: "Corolla" }; // Correcto
miVehiculo = { marca: "Yamaha", tipo: "Deportiva" }; // Correcto
miVehiculo = { marca: "Ford", color: "Azul" }; // Error: Property 'color' does not exist in type 'Auto | Moto'
```

En este caso, miVehiculo puede ser tanto un Auto como una Moto.

## Intersecciones

Los tipos de intersección permiten combinar múltiples tipos en uno. Esto puede ser útil para mezclar la funcionalidad de múltiples estructuras de datos. Para definir una intersección, se utiliza el símbolo & entre los tipos que se quieren intersecar.

Por ejemplo:

```ts
type Estudiante = {
  nombre: string;
  promedio: number;
};

type Trabajador = {
  empresa: string;
  salario: number;
};

type EstudianteTrabajador = Estudiante & Trabajador;

let juan: EstudianteTrabajador = {
  nombre: "Juan",
  promedio: 9.5,
  empresa: "OpenAI",
  salario: 3000,
}; // Correcto

let ana: EstudianteTrabajador = {
  nombre: "Ana",
  empresa: "OpenAI",
}; // Error: Type '{ nombre: string; empresa: string; }' is missing the following properties from type 'EstudianteTrabajador': promedio, salario
```

En el ejemplo anterior, EstudianteTrabajador es un tipo que combina las propiedades de Estudiante y Trabajador. De modo que un objeto de tipo EstudianteTrabajador debe tener todas las propiedades de ambas clases.

En resumen, las uniones y las intersecciones en TypeScript brindan mayor flexibilidad al trabajar con tipos de datos. Permiten a los desarrolladores crear estructuras de datos más complejas y específicas, mejorando la seguridad y la eficiencia del tipo.

### Aprendizajes de esta lección

1. Comprender el concepto de uniones y cómo permiten definir una variable con varios tipos posibles.
2. Aprender a utilizar el símbolo | para definir una unión entre tipos.
   Conocer cómo las uniones son útiles para mejorar la flexibilidad y la eficiencia del tipo en el código.
3. Entender cómo las uniones pueden ser aplicadas a tipos de datos complejos, como objetos.
4. Aprender a utilizar las intersecciones para combinar múltiples tipos en uno.
5. Conocer el símbolo & como el operador para definir una intersección entre tipos.
6. Reconocer cómo las intersecciones son útiles para crear estructuras de datos más específicas y mejorar la seguridad del tipo en el código.
