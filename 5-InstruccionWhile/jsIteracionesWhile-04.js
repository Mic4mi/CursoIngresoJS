/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
	var numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 9."));
	var inputValidacion = document.getElementById("txtIdNumero");

	while (numeroIngresado < 0 || numeroIngresado > 9) {
		alert("Numero fuera de rango");
		numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 9."));
	}
	inputValidacion.value = "El numero ingresado y validado es: " + numeroIngresado;
}

//FIN DE LA FUNCIÓN


