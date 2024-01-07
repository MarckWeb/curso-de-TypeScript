//Las interfaces pueden extender otras interfaces utilizando la palabra clave extends

interface Animal {
   nombre: string;
}

interface Perro extends Animal {
   raza: string;
}

const perro: Perro = {
   nombre: 'Achico',
   raza: 'Alaska',
}

//Declaración de Merging: TypeScript permite declarar varias interfaces con el mismo nombre, y se fusionarán en una sola interfaz.

interface Persona {
   nombre: string;
}

interface Persona {
   edad: number;
}

interface Persona {
   sexo: string
}

// Resultado de la fusión
// interface Persona {
//   nombre: string;
//   edad: number;
//   sexo: string;
// }

const persona: Persona = {
   nombre: 'Marck',
   edad: 20,
   sexo: 'masculino'
}

console.log(persona)

