/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
	var numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 9."));

	while (numeroIngresado < 0 || numeroIngresado > 9 || isNaN(numeroIngresado)) {
		if (isNaN(numeroIngresado)) {
			alert("No es un número");
		} else {
			alert("Numero fuera de rango");
		}
		numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 9."));
	}

	alert("¡Genial! ese si es un número válido");
	document.getElementById("txtIdNumero").value = "El numero ingresado es: " + numeroIngresado;
}

//FIN DE LA FUNCIÓN


