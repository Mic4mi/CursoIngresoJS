/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
	let sexoIngresado = prompt("ingrese f ó m.").toLowerCase();

	while (sexoIngresado != "f" && sexoIngresado != "m") {
		sexoIngresado = prompt("Incorrecto. Ingrese f ó m .");
	}

	document.getElementById("txtIdSexo").value = "El sexo ingresado es: " + queSexoEs();

	function queSexoEs() {
		if (sexoIngresado == "f") {
			return sexoIngresado = "Femenino";
		} else if (sexoIngresado == "m") {
			return sexoIngresado = "Masculino"
		}
	}
}
