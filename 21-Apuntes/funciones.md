## FUNCIONES

cuando se tiene parametros hay que declarar su tipo ya sea string, number

```
function greet(name: string) {
   console.log(`hola ${name}`)
}

greet('david')
```

si sabemos que tipo de valor retornara la funcion debemos colocar su tipo ya sea string o number

```
const resultado = (): number => {
   return Math.floor(Math.random() * 100);
}

console.log(resultado())
```

#### Función sin parámetros ni tipo de retorno:

typescript
Copy code
function saludar(): void {
console.log("¡Hola!");
}
En este ejemplo, la función saludar no acepta ningún parámetro y no devuelve ningún valor (tipo void).

#### Función con parámetros y tipo de retorno:

```
function suma(a: number, b: number): number {
  return a + b;
}
```

En este caso, la función suma acepta dos parámetros de tipo number y devuelve un valor de tipo number.

#### Función con parámetros opcionales:

Puedes declarar parámetros opcionales utilizando el signo de interrogación ?:

```ts
function saludarConNombre(nombre?: string): void {
  if (nombre) {
    console.log(`¡Hola, ${nombre}!`);
  } else {
    console.log("¡Hola!");
  }
}
```

En este ejemplo, nombre es un parámetro opcional, por lo que puedes llamar a la función sin proporcionar un valor para nombre.

#### Función con parámetros con valores por defecto:

Puedes asignar valores por defecto a los parámetros de la función:

```ts
function saludarPersonalizado(nombre: string = "Usuario"): void {
  console.log(`¡Hola, ${nombre}!`);
}
```

Si no se proporciona un valor para nombre, se utilizará "Usuario" como valor por defecto.

#### Función con parámetros REST:

Puedes usar parámetros REST para capturar un número variable de argumentos en una matriz:

```
function promediar(...numeros: number[]): number {
  let total = 0;
  for (const numero of numeros) {
    total += numero;
  }
  return total / numeros.length;
}
```

En este caso, la función promediar acepta un número variable de argumentos y calcula el promedio.

### funcion con objeto

```
const position = (position: { lat: number, long: number }): void => {
   console.log(position.lat, position.long)
}

position({ lat: 10, long: 20 })

const position1 = (position: { lat: number; long: number | string } = { lat: 20, long: 'hola' }): void => {
   console.log(position.lat, position.long)
}

position1({ lat: 10, long: 20 })
```
