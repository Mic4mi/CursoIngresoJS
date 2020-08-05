/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto;
let contadorIntentos = 0;
let mensaje = "";

function comenzar() {
  numeroSecreto = (Math.floor(Math.random() * 100) + 1);
  contadorIntentos = 0;
  mensaje = "";
  document.getElementById("txtIdIntentos").value = "";
  console.log(numeroSecreto);
}

function verificar() {
  let numeroIngresado = document.getElementById("txtIdNumero").value;
  if (isNaN(numeroIngresado)) {
    contadorIntentos++
    mensaje = "Eso no es un número. Intenta de nuevo. Intentos: " + contadorIntentos;
  } else if (numeroIngresado < numeroSecreto) {
    contadorIntentos++
    mensaje = "Te falta aún. Intenta de nuevo. Intentos: " + contadorIntentos;
  } else if (numeroIngresado > numeroSecreto) {
    contadorIntentos++
    mensaje = "Te pasaste. Intenta de nuevo. Intentos: " + contadorIntentos;
  } else {
    contadorIntentos++
    mensaje = "¡Ganaste! y en sólo " + contadorIntentos + " intentos.";
  }
  document.getElementById("txtIdIntentos").value = mensaje;
}