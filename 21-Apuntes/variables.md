### TYPESCRIPT

instalar ts

```
npm i typescript --save-dev
```

crear archivo tsc config para iniciar un proyecto TS igual que (node --init, git --init) y podemos colocar el modo observador -w para que observe todos los archivos

```
tsc --init
```

Lomas revelante para cativar; son las mas tipicas:

outdir './dist': los ficheros que ya compilador

rootdir './src' carpeta desde dond equermeos compilar

target 'es6' version de javascript

## modon observacion-.

en modo observado para no tener que compilar cada vez

```
tsc index.ts -w
```

solo para que el archivo se encuentre en dist

```
tsc  -w
```

#### TIPOS BASICOS DE TYPESCRIPT

Number, String, Booelan, Null, Undefined, Objeto, Fuuntion

AGREGADOS POR TYPESCRIPT -.

any. unknown, never, arrays, tuplas, enums

```

//Basis types

let nombre: String = 'dvd';
let numero: Number = 10;
let bollean: boolean = true;

```

### arrays

```

//Array number
let arrayOne: number[] = [1, 2, 3]
const arrayTwo: Array<number> = [1, 2, 3]

//Array String
const nombres: String[] = ['dvd', 'marc', 'john']

//array diferentes tipos
const arrayAny: any[] = [1, 'hola', 2, true]

```

### Tuples -.

si sabemos de que tipos van a a ser los elemntos del array y en que posicion van a estar se puede utilizar tuplas

```

const arrayTuplas: [string, number, boolean] = ['hola', 1, true]

```

### tuplas array de arrays

```

let players: [number, string][];

players = [
[1, 'hello'],
[2, 'hola'],
[3, 'alo']
]

```

### unions types

llamados asi pro que no sabemos cuales sera el valor de la variable

```

let myVaribaleUnuons : string | number | null;

```

## Enums (enumeraciones):

- Los enums son una forma de definir un conjunto de valores constantes con nombres descriptivos.
- Deben utilizarse cuando deseas representar un conjunto limitado de opciones o estados posibles de una manera legible y mantenible.
- Los enums son especialmente útiles cuando necesitas definir un conjunto finito de valores que son mutuamente excluyentes.
- si no se le pasa un valor su valor sera un numer index, y tambien se puede ordenar segun la comveniecia, 2416, 123, original 0123.
  Ejemplo:

```

enum DíaSemana {
Lunes = "Lunes",
Martes = "Martes",
Miércoles = "Miércoles",
Jueves = "Jueves",
Viernes = "Viernes",
Sábado = "Sábado",
Domingo = "Domingo",
}

const díaActual: DíaSemana = DíaSemana.Miércoles;

```

### Objetos:

- Los objetos son estructuras de datos que pueden contener propiedades y métodos.
- Deben utilizarse cuando necesitas representar datos más complejos con propiedades y valores específicos. Los objetos pueden contener una variedad de datos y métodos relacionados.
- Los objetos se utilizan para representar entidades del mundo real o para organizar datos de manera más compleja.
  Ejemplo:

```

const persona = {
nombre: "Juan",
edad: 30,
dirección: {
calle: "123 Calle Principal",
ciudad: "Ejemploville",
},
saludar: () => {
console.log("¡Hola!");
},
};

```

```

```
