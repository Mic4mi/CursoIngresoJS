var miIntervalo;
var contador = 0;

function inicio() {
	miIntervalo = setInterval(SegundosEnElAire, 2000);
}
//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {
	contador = contador + 1;
	console.log("Bienvenido a la UTN FRA, cantidad = " + contador);
}
//FIN DE LA FUNCIÓN SegundosEnElAire

function fin() {
	console.log("Contador = " + contador);
	clearInterval(miIntervalo);
}
//FIN DE LA FUNCIÓN fin