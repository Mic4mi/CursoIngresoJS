var miTemporizador;
var contador = 0;

function inicio() {
	document.getElementById("secreto").style.visibility = "hidden";
	miTemporizador = setTimeout(SegundosEnElAire, 3000);
}
//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {
	document.getElementById("secreto").style.visibility = "visible";
	console.log("Se ha ocultado un botón.");
}
//FIN DE LA FUNCIÓN SegundosEnElAire

function fin() {
	document.getElementById("secreto").style.visibility = "hidden";
}
//FIN DE LA FUNCIÓN fin