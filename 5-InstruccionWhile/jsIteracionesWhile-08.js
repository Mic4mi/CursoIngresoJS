/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	let numeroIngresado;
	let contador = 0;
	let acumuladorPositivo = 0;
	let acumuladorNegativo = 1;
	let continuar = "si";

	do {
		numeroIngresado = parseFloat(prompt("Ingrese un numero"));
		if (numeroIngresado >= 0) {
			acumuladorPositivo += numeroIngresado;
		} else {
			acumuladorNegativo *= numeroIngresado;
		}

		contador++;

		continuar = prompt("¿Desea agregar otro número").toLowerCase();
	} while (continuar == "si");

	document.getElementById("txtIdSuma").value = acumuladorPositivo;
	document.getElementById("txtIdProducto").value = acumuladorNegativo;
}