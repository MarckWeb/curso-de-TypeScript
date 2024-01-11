"use strict";
// Importación de bibliotecas
// En JavaScript, se usan bibliotecas externas en el código mediante la instrucción requires. En TypeScript, se obtiene acceso a ellas mediante la instrucción import.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Dado que TypeScript solo usa las definiciones de tipo durante el tiempo de diseño, no es necesario que formen parte del proyecto publicado. Como resultado, se pueden instalar como devDependencies.
/*npm install --save-dev @types/<library-name>*/
//INSTALAR BIBLIOTECA DOTENV EN TYPESCRIPT-. Las definiciones de tipo se instalan mediante el prefijo @types.
//npm install --save-dev dotenv  -. instalar en JS
//npm install --save-dev @types/node @types/dotenv
const dotenv_1 = __importDefault(require("dotenv"));
const result = dotenv_1.default.config();
console.log(result);
if (result.error) {
    throw result.error;
}
console.log(result.parsed);
console.log(process.env.DB_HOST);
console.log(process.env.WEB_HOST);
