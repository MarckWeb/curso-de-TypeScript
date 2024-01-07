"use strict";
//Las interfaces pueden extender otras interfaces utilizando la palabra clave extends
const perro = {
    nombre: 'Achico',
    raza: 'Alaska',
};
// Resultado de la fusión
// interface Persona {
//   nombre: string;
//   edad: number;
//   sexo: string;
// }
const persona = {
    nombre: 'Marck',
    edad: 20,
    //no pide el sexo de la persona pro el signo ? en la interfaz
};
//persona.nombre = 'Carlos'; no se puede cambiar pro que la interfaz esta con reaonly
console.log(persona);
function mostrarPersona(persona) {
    if (persona.edad >= 25) {
        return persona.edad + 'tiene mucha edad';
    }
    else {
        return 'tienes aun menos de 25';
    }
}
console.log(mostrarPersona({ nombre: 'Marck', edad: 22 }));
