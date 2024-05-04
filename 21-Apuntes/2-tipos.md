En TypeScript, type se utiliza para definir tipos de datos personalizados. Los tipos personalizados permiten especificar la estructura y forma de los datos que se pueden utilizar en una aplicación. Puedes usar type para crear alias de tipos, lo que facilita la reutilización y la creación de código más legible y mantenible.

```ts
type Coordenada = {
  x: number;
  y: number;
};

function calcularDistancia(puntoA: Coordenada, puntoB: Coordenada): number {
  const diferenciaX = puntoA.x - puntoB.x;
  const diferenciaY = puntoA.y - puntoB.y;
  return Math.sqrt(diferenciaX ** 2 + diferenciaY ** 2);
}

const punto1: Coordenada = { x: 0, y: 0 };
const punto2: Coordenada = { x: 3, y: 4 };

const distancia = calcularDistancia(punto1, punto2);
console.log(`La distancia entre los puntos es ${distancia}`);
```

```ts
// Definimos un tipo para representar una persona
type Persona = {
  nombre: string;
  edad: number;
  direccion: {
    calle: string;
    ciudad: string;
  };
};

// Función que toma una persona y muestra su información
function mostrarInformacionPersona(persona: Persona): void {
  console.log(`Nombre: ${persona.nombre}`);
  console.log(`Edad: ${persona.edad}`);
  console.log(
    `Dirección: ${persona.direccion.calle}, ${persona.direccion.ciudad}`
  );
}

// Creamos una instancia de Persona
const persona1: Persona = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    calle: "Calle Principal",
    ciudad: "Ciudad Ejemplo",
  },
};

// Mostramos la información de la persona
mostrarInformacionPersona(persona1);
```
