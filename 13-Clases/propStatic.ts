
//Definicion de propiedades estaticas

class Persona {
   //propiedades
   private static numeroDePersonas: number = 0 //nueva porpiedad statica
   private _nombre: string;
   private _edad: number;

   //constructor
   constructor(nombre: string, edad: number) {
      this._nombre = nombre;
      this._edad = edad
      //se usa la sintaxis className.propertyName en lugar de this. cuando se obtiene acceso a la propiedad estática.
      Persona.numeroDePersonas++; //incrementa el valor de la propiedad estatica
   }

   public static obtenerNumeroDePersonas(): number {
      return Persona.numeroDePersonas;
   }
}

//instancia de peronas con todos los parametros
let personas3 = new Persona('carlos', 30); //1ra instancia
let personas4 = new Persona('martin', 40); //2da instancia

console.log(Persona.obtenerNumeroDePersonas()); //retorna 2 instancias

console.log(`la propieda obtener numero de personas tiene ${Persona.obtenerNumeroDePersonas()} por que se llamo a dos instancias personas3 y personas4`)