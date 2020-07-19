var miIntervalo;
var contador = 0;

function inicio() {
	miIntervalo = setInterval(SegundosEnElAire, 2000);
}
//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {
	contador = contador + 1;
	console.log("Bienvenido a la UTN FRA, cantidad = " + contador);
	if (contador == 5) {
		console.log("Fin.");
		contador = 0;
		clearInterval(miIntervalo);
	}
}
//FIN DE LA FUNCIÓN SegundosEnElAire

function fin() {
	console.log("Fin.");
	clearInterval(miIntervalo);
}
//FIN DE LA FUNCIÓN fin