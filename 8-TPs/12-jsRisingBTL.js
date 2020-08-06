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
	edadIngresada = parseInt(prompt("Ingrese su edad"));
	while (edadIngresada < 18 || edadIngresada > 90 || isNaN(edadIngresada)) {
		edadIngresada = parseInt(prompt("Error. Ingrese una edad válida. Debe ser mayor a 18 y menor a 90."));
	}
	document.getElementById("txtIdEdad").value = "Edad: " + edadIngresada;

	//VALIDAR SEXO
	sexoIngresado = prompt("Sexo: Ingrese F para 'Femenino' ó M para 'Masculino'.").toLowerCase();
	while (sexoIngresado != "f" && sexoIngresado != "m") {
		sexoIngresado = prompt("Incorrecto. F para 'Femenino' ó M para 'Masculino'.");
	}
	document.getElementById("txtIdSexo").value = "Sexo: " + queSexoEs(sexoIngresado);

	// VALIDACIÓN ESTADO CIVIL
	estadoCivilIngresado = parseInt(prompt("Estado civil: Ingrese su estado civil. 1 para soltero, 2 para casado, 3 para divorciado o 4 para viudo."));
	while (estadoCivilIngresado < 0 || estadoCivilIngresado > 4 || isNaN(estadoCivilIngresado)) {
		estadoCivilIngresado = parseInt(prompt("Error. Ingrese 1 para soltero, 2 para casado, 3 para divorciado o 4 para viudo."));
	}
	document.getElementById("txtIdEstadoCivil").value = "Estado civil: " + queEstadoCivilEs(estadoCivilIngresado);

	// VALIDACIÓN SUELO BRUTO
	sueldoBruto = parseFloat(prompt("Sueldo bruto: Ingrese su sueldo bruto"));
	while (sueldoBruto < 8000 || isNaN(sueldoBruto)) {
		sueldoBruto = parseFloat(prompt("Error. Ingrese un sueldo bruto válido mayor a $8000"));
	}
	document.getElementById("txtIdSueldo").value = "Sueldo bruto: $" + sueldoBruto;

	// VALIDACIÓN NÚMERO DE LEGAJO
	numLegajo = parseInt(prompt("Número de legajo: Ingrese un número de legajo"));
	while (numLegajo < 1000 || numLegajo > 9999 || isNaN(numLegajo)) {
		numLegajo = parseInt(prompt("Error. Ingrese un número de legajo válido, de 4 cifras cin ceros a la izquierda."));
	}
	document.getElementById("txtIdLegajo").value = "Número de legajo: " + numLegajo;

	// VALIDACIÓN NACIONALIDAD
	nacionalidad = prompt("Nacionaliad: Ingrese A para 'Argentino/a', E para 'Extranjero/a' ó N para 'Nacionalizado/a'").toLowerCase();
	while (nacionalidad != "a" && nacionalidad != "e" && nacionalidad != "n") {
		nacionalidad = prompt("Incorrecto. Ingrese A para 'Argentino/a', E para 'Extranjero/a' ó N para 'Nacionalizado/a'");
	}
	document.getElementById("txtIdNacionalidad").value = "Nacionalidad: " + queNacionalidadEs(nacionalidad);

}

function queSexoEs(sexo) {
	if (sexo == "f") {
		return sexo = "Femenino";
	} else if (sexo == "m") {
		return sexo = "Masculino"
	}
}

function queEstadoCivilEs(estadoCivil) {
	switch (estadoCivil) {
		case 1:
			return "Soltero/a"
			break;
		case 2:
			return "Casado/a"
			break;
		case 3:
			return "Divorciado/a"
			break;
		case 4:
			return "Viudo/a"
			break;
	}
}

function queNacionalidadEs(nacionalidad) {
	switch (nacionalidad) {
		case "a":
			return "Argentino/a";
			break;
		case "e":
			return "Extranjero/a";
			break;
		case "n":
			return "Nacionalizado/a";
			break;
	}
}
