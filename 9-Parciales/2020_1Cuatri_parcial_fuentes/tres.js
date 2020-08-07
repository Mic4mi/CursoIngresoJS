function mostrar() {
	let edad;
	let estadoCivil;
	let nombre;
	let sexo;
	let temperatura;
	let mensajeEstadoCivil;
	let mensajeSexo;
	let continuar = "si";
	let banderapersonaConFiebre = false;
	let temperaturaPersonaConFiebre = 0;
	let nombrePersonaConFiebre;
	let mayoresDeEdadViudos = 0;
	let hombresSolterosOViudos = 0;
	let personasTerceraEdad = 0;
	let hombresSolteros = 0;
	let acumEdadHombresSolteros = 0;
	let promedio;

	do {
		nombre = prompt("Nombre: Ingrese su nombre");

		// Validar edad
		edad = parseInt(prompt("Edad: Ingrese su edad"));
		while (edad <= 0 || edad > 117 || isNaN(edad)) {
			edad = parseInt(prompt("Incorrecto. Ingrese una edad válida."));
		}

		// Validar sexo 
		sexo = prompt('Sexo: Ingrese "f" para femenino o "m" para masculino.').toLowerCase();
		while (sexo != "f" && sexo != "m") {
			sexo = prompt("Incorrecto. F para 'Femenino' ó M para 'Masculino'.").toLowerCase();
		}
		mensajeSexo = "Sexo: " + queSexoEs(sexo);

		// Validar estado civil 
		estadoCivil = prompt('Estado Civil: Ingrese "soltero", "casado" o "viudo".').toLowerCase();
		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") {
			estadoCivil = prompt('Incorrecto. Ingrese "soltero", "casado" o "viudo".').toLowerCase();
		}
		mensajeEstadoCivil = "Estado civil: " + queEstadoCivilEs(estadoCivil);

		// Validar temperatura
		temperatura = parseFloat(prompt("Temperatura corporal: Ingrese temperatura corporal en °C"));
		while (temperatura < 35 || temperatura > 42 || isNaN(temperatura)) {
			temperatura = parseFloat(prompt("Incorrecto: Ingrese una temperatura corporal en °C válida."));
		}

		// Persona con mayor temperatura
		if (!(banderapersonaConFiebre) || temperatura > temperaturaPersonaConFiebre) {
			temperaturaPersonaConFiebre = temperatura;
			nombrePersonaConFiebre = nombre;
			banderapersonaConFiebre = true;
		}

		// Mayores de edad viudos
		if (edad >= 18 && estadoCivil == "viudo") {
			mayoresDeEdadViudos++
		}

		//Hombres solteros o viudos
		if (sexo == "m" && estadoCivil == "soltero" || estadoCivil == "viudo") {
			hombresSolterosOViudos++
		}

		// Personas de la tercera edad con más de 38 de fiebre
		if (edad >= 60 && temperatura >= 38) {
			personasTerceraEdad++
		}

		// Promedio de edad hombres solteros
		if (sexo == "m" && estadoCivil == "soltero") {
			hombresSolteros++
			acumEdadHombresSolteros += edad;
		}

		continuar = prompt("¿Desea ingresar a otra persona?").toLowerCase();
	} while (continuar == "si");

	// promedio
	promedio = acumEdadHombresSolteros / hombresSolteros;

	// Imprimir cosas
	console.log("A. La persona con mayor temperatura se llama: " + nombrePersonaConFiebre);
	console.log("B. Total de mayores de edad viudos: " + mayoresDeEdadViudos);
	console.log("C. Total de hombres solteros o viudos: " + hombresSolterosOViudos);
	console.log("D. Total de personas mayores de 60 y con más de 38 °C: " + personasTerceraEdad);
	console.log("E. Promedio de edad de hombres solteros: " + promedio);

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
		case "soltero":
			return "Soltero/a"
			break;
		case "casado":
			return "Casado/a"
			break;
		case "viudo":
			return "Viudo/a"
			break;
	}
}
