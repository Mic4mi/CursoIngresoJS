function mostrar() {
	var numeroIngresado;
	var contador = 0;
	var acumulador = 0;

	while (contador < 5) {
		numeroIngresado = parseFloat(prompt("Ingrese un numero"));
		acumulador += numeroIngresado;
		contador++;
	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / 5;
}
//FIN DE LA FUNCIÓN

