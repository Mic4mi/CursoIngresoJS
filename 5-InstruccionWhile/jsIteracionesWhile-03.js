/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar() {
	var claveIngresada = prompt("ingrese el número clave.");

	while (claveIngresada != "utn750") {
		if(claveIngresada == "utn750") {
			alert("SEEEEEEEEEEEEEEEEEEEEE");
		} else {
			alert("Por favor, ingrese la clave correcta");
			claveIngresada = prompt("ingrese el número clave.");
		}
	}
}//FIN DE LA FUNCIÓN
