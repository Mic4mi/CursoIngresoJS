/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
	let numeroIngresado;
	let contador = 0;
	let continuar = "si";
	let maximo;
	let minimo;
	let bandera = 0;

	do {
		numeroIngresado = parseFloat(prompt("Ingrese un numero"));

		if (bandera == 0) {
			maximo = numeroIngresado;
			minimo = numeroIngresado;
			bandera = 1;
		}

		if (numeroIngresado > maximo) {
			maximo = numeroIngresado;
		} else if (numeroIngresado < minimo) {
			minimo = numeroIngresado;
		}

		contador++;

		continuar = prompt("¿Desea agregar otro número").toLowerCase();
	} while (continuar == "si");

	document.getElementById("txtIdMaximo").value = "El número máximo es: " + maximo;
	document.getElementById("txtIdMinimo").value = "El número mínimo es: " + minimo;
}