/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
	var sexoIngresado = prompt("ingrese f ó m .").toLowerCase();
	var inputSexo = document.getElementById("txtIdSexo");

	while (sexoIngresado != "f" && sexoIngresado != "m") {
		sexoIngresado = prompt("Incorrecto. Ingrese f ó m .");
	}

	inputSexo.value = "El sexo ingresado es: " + queSexoEs();

	function queSexoEs() {
		if (sexoIngresado == "f") {
			return sexoIngresado = "Femenino";
		} else if (sexoIngresado == "m") {
			return sexoIngresado = "Masculino"
		}
	}
}

//FIN DE LA FUNCIÓN