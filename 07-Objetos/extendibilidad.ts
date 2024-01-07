//Las interfaces pueden extender a otras interfaces utilizando la palabra clave extends

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
   readonly nombre: string;
   apellido: 'Robin' | 'Bob' | 'Street';
}

interface Persona {
   edad: number;
}

interface Persona {
   sexo?: string
}

// Resultado de la fusión
// interface Persona {
//   nombre: string;
//   edad: number;
//   sexo: string;
// }

const persona: Persona = {
   nombre: 'Marck',
   apellido: 'Street',
   edad: 20,
   //no pide el sexo de la persona pro el signo ? en la interfaz
}

//persona.nombre = 'Carlos'; no se puede cambiar pro que la interfaz esta con reaonly
console.log(persona)

function mostrarPersona(persona: Persona) {
   if (persona.edad >= 25) {
      return persona.edad + 'tiene mucha edad'
   } else {
      return 'tienes aun menos de 25'
   }
}

console.log(mostrarPersona({ nombre: 'Marck', apellido: 'Robin', edad: 22 }))


//DECLARACION DE UNA INTERFAs


interface Objeto {
   //obligatio usar la propiedad
   nombreObjeto: string;

   //no es obligatorio usar la propiedad
   tamañoObjeto?: number;

   //una vez asignado un valor no se puede cambiar mas adelante como una const de js
   readonly tipoObjeto: string;
}

