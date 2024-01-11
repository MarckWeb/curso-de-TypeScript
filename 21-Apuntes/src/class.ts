

class Alumnos {
   nombre?: string;
   apellido?: string;
   edad?: number;
   estado?: boolean;

   constructor(nombre: string, apellido: string, edad: number, estado: boolean) {
      this.nombre = nombre,
         this.apellido = apellido,
         this.edad = edad,
         this.estado = estado
   }

   getSaludar(): void {
      console.log(`hola soy ${this.nombre} y tengo ${this.edad} años de edad`)
   }
}

const alunmoUno = new Alumnos('dvd', 'marck', 30, true)
console.log(alunmoUno.getSaludar())

class Profesor extends Alumnos {
   materia?: string;

   constructor(nombre: string, apellido: string, edad: number, estado: boolean, materia: string) {
      super(nombre, apellido, edad, estado)
      this.materia = materia
   }

}

const profe = new Profesor('abel', 'open', 20, true, 'bussines')

console.log(profe)