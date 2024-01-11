//Organización del código con módulos-.  Los módulos proporcionan una forma de organizar y clasificar el código, lo que le permite agrupar el código relacionado.
//Cualquier archivo que contenga una instrucción import o export de nivel superior se considera un módulo.
//La instrucción export hace que un componente de un módulo esté disponible para otros módulos de forma explícita, mientras que la instrucción import permite consumir ese componente desde otro módulo. 
export function returnGreeting(greeting) {
    console.log(`The message from Greetings_module is ${greeting}.`);
}
