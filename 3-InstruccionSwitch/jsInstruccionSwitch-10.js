function mostrar() {
	var estacionIngresada = document.getElementById("txtIdEstacion").value;
	var destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (estacionIngresada) {
		case "Invierno":
			esInvierno();
			break;
		case "Verano":
			esVerano();
			break;
		case "Primavera":
			esPrimavera();
			break;
		case "Otoño":
			esOtoño();
			break;
	}

	function esInvierno() {
		switch (destinoIngresado) {
			case "Bariloche":
				return alert("Se viaja.");
				break;
			case "Mar del plata":
			case "Cordoba":
			case "Cataratas":
				return alert("No se viaja.");
				break;
		}
	}

	function esVerano() {
		switch (destinoIngresado) {
			case "Bariloche":
			case "Cordoba":
				return alert("No se viaja.");
				break;
			case "Mar del plata":
			case "Cataratas":
				return alert("Se viaja.");
				break;
		}
	}

	function esPrimavera() {
		switch (destinoIngresado) {
			case "Bariloche":
				return alert("No se viaja.");
				break;
			case "Mar del plata":
			case "Cordoba":
			case "Cataratas":
				return alert("Se viaja.");
				break;
		}
	}

	function esOtoño() {
		return alert("Se viaja.");
	}


	// EJERCICIO RESUELTO SIN FUNCIONES
	// switch (estacionIngresada) {
	// 	case "Invierno":
	// 		switch (destinoIngresado) {
	// 			case "Bariloche":
	// 				alert("Se viaja.");
	// 				break;
	// 			case "Mar del plata":
	// 			case "Cordoba":
	// 			case "Cataratas":
	// 				alert("No se viaja.");
	// 				break;
	// 		}
	// 		break;
	// 	case "Verano":
	// 		switch (destinoIngresado) {
	// 			case "Bariloche":
	// 			case "Cordoba":
	// 				alert("No se viaja.");
	// 				break;
	// 			case "Mar del plata":
	// 			case "Cataratas":
	// 				alert("Se viaja.");
	// 				break;
	// 		}
	// 		break;
	// 	case "Otoño":
	// 		alert("Se viaja.");
	// 		break;
	// 	case "Primavera":
	// 		switch (destinoIngresado) {
	// 			case "Bariloche":
	// 				alert("No se viaja.");
	// 				break;
	// 			case "Mar del plata":
	// 			case "Cordoba":
	// 			case "Cataratas":
	// 				alert("Se viaja.");
	// 				break;
	// 		}
	// 		break;
	// }

}
//FIN DE LA FUNCIÓN