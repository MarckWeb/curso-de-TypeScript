## Existen dos formas principales de declarar "type assertions" en TypeScript:

Usando el operador as:
Puedes utilizar el operador as para realizar una "type assertion". Aquí tienes un ejemplo:

```
let valor: any = "Hola";
let longitud: number = (valor as string).length;
```

En este caso, estamos afirmando que valor es una cadena y, por lo tanto, podemos acceder a su propiedad length sin generar errores en tiempo de compilación.

Usando ángulos angulares <> (menos común):
También puedes utilizar ángulos angulares para realizar "type assertions". Aquí tienes un ejemplo:

```
let valor: any = "Hola";
let longitud: number = (<string>valor).length;

```

Aunque esta forma es válida, se considera menos legible y menos utilizada en el código TypeScript moderno.

### assetion acceder a html

```
// Acceder al elemento div con el id "miDiv"
const divElement: HTMLElement | null = document.getElementById("miDiv");

// Acceder al elemento botón con el id "miBoton"
const buttonElement: HTMLButtonElement | null = document.getElementById("miBoton");

// Verificar si los elementos existen antes de usarlos
if (divElement && buttonElement) {
  // Manipular los elementos
  divElement.textContent = "Este div ha sido modificado.";
  buttonElement.addEventListener("click", () => {
    alert("Botón clicado");
  });
}
```
