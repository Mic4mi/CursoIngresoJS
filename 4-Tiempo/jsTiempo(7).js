var miTemporizador;

function inicio() {
	miTemporizador = setTimeout(SegundosEnElAire, 1000);
}
//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {
	document.getElementById("secreto").style.visibility = "visible";
	console.log("Ha aparecido un botón.");
}
//FIN DE LA FUNCIÓN SegundosEnElAire

function fin() {
	document.getElementById("secreto").style.visibility = "hidden";
	console.log("Ha desaparecido un botón.");
}
//FIN DE LA FUNCIÓN fin