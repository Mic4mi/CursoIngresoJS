
function mostrar() {
	let nombre = prompt("Ingrese nombre").toLowerCase();
	while (!(isNaN(nombre))) {
		nombre = prompt("Incorrecto. Ingrese nombre").toLowerCase();
	}
	console.log(nombre);

}
