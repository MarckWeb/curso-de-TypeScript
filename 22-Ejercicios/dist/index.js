"use strict";
function cambiarLuz(estadoActual) {
    switch (estadoActual) {
        case 'rojo':
            estadoActual = 'verde';
            break;
        case 'verde':
            estadoActual = 'amarillo';
            break;
        case 'amarillo':
            estadoActual = 'rojo';
            break;
        default:
    }
    return estadoActual;
}
function cicloDeSemaforo() {
    let estadoActual = "rojo";
    for (let i = 0; i < 3; i++) {
        if (i === 0) {
            estadoActual = cambiarLuz(estadoActual);
        }
        else if (i === 1) {
            estadoActual = cambiarLuz(estadoActual);
        }
        else if (i === 2) {
            estadoActual = cambiarLuz(estadoActual);
        }
        else {
            return 'no hay mas colores';
        }
    }
    return estadoActual;
}
console.log(cicloDeSemaforo());
