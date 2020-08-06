/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() {
	//definicion de letiables
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let sueldoBruto;
	let numLegajo;
	let nacionalidad;

	// VALIDAR EDAD
	// edadIngresada = parseInt(prompt("Ingrese su edad"));
	// while (edadIngresada < 18 || edadIngresada > 90 || isNaN(edadIngresada)) {
	// 	edadIngresada = parseInt(prompt("Error. Ingrese una edad válida"));
	// }
	// document.getElementById("txtIdEdad").value = "Edad: " + edadIngresada;

	// VALIDAR SEXO
	// sexoIngresado = prompt("ingrese f ó m.").toLowerCase();
	// while (sexoIngresado != "f" && sexoIngresado != "m") {
	// 	sexoIngresado = prompt("Incorrecto. Ingrese f ó m .");
	// }
	// document.getElementById("txtIdSexo").value = "El sexo ingresado es: " + queSexoEs();
	// function queSexoEs() {
	// 	if (sexoIngresado == "f") {
	// 		return sexoIngresado = "Femenino";
	// 	} else if (sexoIngresado == "m") {
	// 		return sexoIngresado = "Masculino"
	// 	}
	// }

	// VALIDACIÓN ESTADO CIVIL
	// estadoCivilIngresado = parseInt(prompt("Ingrese su estado civil. 1 para soltero, 2 para casado, 3 para divorciado o 4 para viudo."));
	// while (estadoCivilIngresado < 0 || estadoCivilIngresado > 4 || isNaN(estadoCivilIngresado)) {
	// 	estadoCivilIngresado = parseInt(prompt("Error. Ingrese 1 para soltero, 2 para casado, 3 para divorciado o 4 para viudo."));
	// }
	// document.getElementById("txtIdSexo").value = "Estado civil: " + queEstadoCivilEs(estadoCivilIngresado);
	// function queEstadoCivilEs(n) {
	// 	switch (n) {
	// 		case 1:
	// 			return "Soltero/a"
	// 			break;
	// 		case 2:
	// 			return "Casado/a"
	// 			break;
	// 		case 3:
	// 			return "Divorciado/a"
	// 			break;
	// 		case 4:
	// 			return "Viudo/a"
	// 			break;
	// 	}
	// }

}

