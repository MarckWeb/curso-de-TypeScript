//Realizar un semaforo utilizando funciones if else, switch y bucles for


function cambiarLuz(estadoActual: string): string {

   switch (estadoActual) {
      case 'rojo':
         estadoActual = 'verde'
         break;
      case 'verde':
         estadoActual = 'amarillo'
         break;
      case 'amarillo':
         estadoActual = 'rojo'
         break;
      default:
         console.log('el color no existe en el semaforo')
         break;
   }

   return estadoActual
}

function cicloDeSemaforo() {
   let estadoActual = "rojo";
   for (let i = 0; i <= 3; i++) {
      estadoActual = cambiarLuz(estadoActual)
   }
}

cicloDeSemaforo()