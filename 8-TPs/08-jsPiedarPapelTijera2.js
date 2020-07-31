var eleccionMaquina;
var ContadorDeEmpates = 0;
var ContadorDeGanadas = 0;
var ContadorDePerdidas = 0;

var eleccionMaquina;

function comenzar() {
	eleccionMaquina = Math.round(Math.random() * 3 - 1);
}
//FIN DE LA FUNCIÓN

function piedra() {
	if (eleccionMaquina == 1) {
		ContadorDeEmpates++;
		alert("Empate: Tu adversario eligió piedra.");
	} else if (eleccionMaquina == 2) {
		ContadorDePerdidas++;
		alert("Perdiste. Tu adversario eligió papel.");
	} else {
		ContadorDeGanadas++;
		alert("Ganaste. Tu adversario eligió tijera");
	}
	mostrarResultado();
	comenzar();
}
//FIN DE LA FUNCIÓN
function papel() {
	if (eleccionMaquina == 1) {
		ContadorDeGanadas++;
		alert("Ganaste. Tu adversario eligió tijera");
	} else if (eleccionMaquina == 2) {
		ContadorDeEmpates++;
		alert("Empate. Tu adversario eligió papel.");
	} else {
		ContadorDePerdidas++;
		alert("Perdiste. Tu adversario eligió tijera")
	}
	mostrarResultado();
	comenzar();
}
//FIN DE LA FUNCIÓN
function tijera() {
	if (eleccionMaquina == 1) {
		ContadorDePerdidas++;
		alert("Perdiste. Tu adversario eligió piedra");
	} else if (eleccionMaquina == 2) {
		ContadorDeGanadas++;
		alert("Ganaste. Tu adversario eligió papel.");
	} else {
		ContadorDeEmpates++;
		alert("Empate. Tu adversario eligió tijera");
	}
	mostrarResultado();
	comenzar();
}
//FIN DE LA FUNCIÓN

function mostrarResultado() {
	document.getElementById("txtIdGanadas").value = "Partidas ganadas: " + ContadorDeGanadas;
	document.getElementById("txtIdPerdidas").value = "Partidas perdidas: " + ContadorDePerdidas;
	document.getElementById("txtIdEmpatadas").value = "Partidas empatadas: " + ContadorDeEmpates;
}