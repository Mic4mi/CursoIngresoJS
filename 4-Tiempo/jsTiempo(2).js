var miIntervalo;

function inicio() {
	miIntervalo = setInterval(SegundosEnElAire, 3000);
}
//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {
	console.log("Bienvenido a la UTN FRA");
}
//FIN DE LA FUNCIÓN SegundosEnElAire

function fin() {
	clearTimeout(miIntervalo);
}
//FIN DE LA FUNCIÓN fin