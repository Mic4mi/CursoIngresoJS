function mostrar() {
	var numeroIngresado;
	var contador = 0;
	var acumulador = 0;
	var sumaInput = document.getElementById("txtIdSuma");
	var promedioInput = document.getElementById("txtIdPromedio");

	while (contador < 5) {
		numeroIngresado = parseFloat(prompt("Ingrese un numero"));
		acumulador += numeroIngresado;
		contador++;
	}

	sumaInput.value = acumulador;
	promedioInput.value = acumulador / 5;
}
//FIN DE LA FUNCIÓN

