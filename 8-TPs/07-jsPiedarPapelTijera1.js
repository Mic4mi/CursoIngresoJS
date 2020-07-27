/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/

var eleccionMaquina;

function comenzar() {
    eleccionMaquina = Math.round(Math.random() * 3 - 1);
}
//FIN DE LA FUNCIÓN

function piedra() {
    comenzar();
    if (eleccionMaquina == 1) {
        alert("Empate: Tu adversario eligió piedra.");
    } else if (eleccionMaquina == 2) {
        alert("Perdiste. Tu adversario eligió papel.");
    } else {
        alert("Ganaste. Tu adversario eligió tijera");
    }
}
//FIN DE LA FUNCIÓN
function papel() {
    comenzar();
    if (eleccionMaquina == 1) {
        alert("Ganaste. Tu adversario eligió tijera");
    } else if (eleccionMaquina == 2) {
        alert("Empate. Tu adversario eligió papel.");
    } else {
        alert("Perdiste. Tu adversario eligió tijera")
    }

}
//FIN DE LA FUNCIÓN
function tijera() {
    comenzar();
    if (eleccionMaquina == 1) {
        alert("Perdiste. Tu adversario eligió piedra");
    } else if (eleccionMaquina == 2) {
        alert("Ganaste. Tu adversario eligió papel.");
    } else {
        alert("Empate. Tu adversario eligió tijera")
    }
}
//FIN DE LA FUNCIÓN