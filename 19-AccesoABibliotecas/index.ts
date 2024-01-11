// Importación de bibliotecas
// En JavaScript, se usan bibliotecas externas en el código mediante la instrucción requires. En TypeScript, se obtiene acceso a ellas mediante la instrucción import.

//Dado que TypeScript solo usa las definiciones de tipo durante el tiempo de diseño, no es necesario que formen parte del proyecto publicado. Como resultado, se pueden instalar como devDependencies.

/*npm install --save-dev @types/<library-name>*/


//INSTALAR BIBLIOTECA DOTENV EN TYPESCRIPT-. Las definiciones de tipo se instalan mediante el prefijo @types.


//npm install --save-dev dotenv  -. instalar en JS

//npm install --save-dev @types/node @types/dotenv

import dotenv from 'dotenv';


const result = dotenv.config();

console.log(result)

if (result.error) {
   throw result.error;
}

console.log(result.parsed);

console.log(process.env.DB_HOST);
console.log(process.env.WEB_HOST);

//Ahora que ha revisado este módulo, debe ser capaz de:

// Organizar el código mediante módulos
// Importar una biblioteca de tipos externa

//https://learn.microsoft.com/es-es/training/modules/typescript-work-external-libraries/6-lab

//valido.............
//https://learn.microsoft.com/es-es/training/modules/typescript-namespaces-organize-code/
