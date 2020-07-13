function mostrar() {
	var estacionIngresada = document.getElementById("txtIdEstacion").value;
	var destinoIngresado = document.getElementById("txtIdDestino").value;
	var precioBase = 15000;
	var precioFinal = 0;
	var plusVariable = 0;

	switch (estacionIngresada) {
		case "Invierno":
			esInvierno();
			break;
		case "Verano":
			esVerano();
			break;
		case "Primavera":
		case "Otoño":
			esOtoñoPrimavera();
			break;
	}

	function esInvierno() {
		if (destinoIngresado == "Bariloche") {
			plusVariable = (precioBase * 20) / 100;
			precioFinal = precioBase + plusVariable;
			return alert("El costo por su estadía es de $" + precioFinal);
		}
		if (destinoIngresado == "Mar del plata") {
			plusVariable = (precioBase * 20) / 100;
			precioFinal = precioBase - plusVariable;
			return alert("El costo por su estadía es de $" + precioFinal);
		}
		if (destinoIngresado == "Cataratas" || destinoIngresado == "Cordoba") {
			plusVariable = (precioBase * 10) / 100;
			precioFinal = precioBase - plusVariable;
			return alert("El costo por su estadía es de $" + precioFinal);
		}
	}

	function esOtoñoPrimavera() {
		if (destinoIngresado == "Bariloche" || destinoIngresado == "Mar del plata" || destinoIngresado == "Cataratas") {
			plusVariable = (precioBase * 10) / 100;
			precioFinal = precioBase + plusVariable;
			return alert("El costo por su estadía es de $" + precioFinal);
		}
		if (destinoIngresado == "Cordoba") {
			return alert("El costo por su estadía es de $" + precioBase);
		}
	}

	function esVerano() {
		if (destinoIngresado == "Bariloche") {
			plusVariable = (precioBase * 20) / 100;
			precioFinal = precioBase - plusVariable;
			return alert("El costo por su estadía es de $" + precioFinal);
		}
		if (destinoIngresado == "Mar del plata") {
			plusVariable = (precioBase * 20) / 100;
			precioFinal = precioBase + plusVariable;
			return alert("El costo por su estadía es de $" + precioFinal);
		}
		if (destinoIngresado == "Cataratas" || destinoIngresado == "Cordoba") {
			plusVariable = (precioBase * 10) / 100;
			precioFinal = precioBase + plusVariable;
			return alert("El costo por su estadía es de $" + precioFinal);
		}
	}



	// EJERCICIO RESUELTO CON SWITCH IN SWITCH
	// switch (estacionIngresada) {
	// 	case "Invierno":
	// 		switch (destinoIngresado) {
	// 			case "Bariloche":
	// 				plusVariable = (precioBase * 20) / 100;
	// 				precioFinal = precioBase + plusVariable;
	// 				alert("El costo por su estadía es de $" + precioFinal);
	// 				break;
	// 			case "Mar del plata":
	// 				plusVariable = (precioBase * 20) / 100;
	// 				precioFinal = precioBase - plusVariable;
	// 				alert("El costo por su estadía es de $" + precioFinal);
	// 				break;
	// 			case "Cordoba":
	// 			case "Cataratas":
	// 				plusVariable = (precioBase * 10) / 100;
	// 				precioFinal = precioBase - plusVariable;
	// 				alert("El costo por su estadía es de $" + precioFinal);
	// 				break;
	// 		}
	// 		break;
	// 	case "Verano":
	// 		switch (destinoIngresado) {
	// 			case "Bariloche":
	// 				plusVariable = (precioBase * 20) / 100;
	// 				precioFinal = precioBase - plusVariable;
	// 				alert("El costo por su estadía es de $" + precioFinal);
	// 				break;
	// 			case "Mar del plata":
	// 				plusVariable = (precioBase * 20) / 100;
	// 				precioFinal = precioBase + plusVariable;
	// 				alert("El costo por su estadía es de $" + precioFinal);
	// 				break;
	// 			case "Cordoba":
	// 			case "Cataratas":
	// 				plusVariable = (precioBase * 10) / 100;
	// 				precioFinal = precioBase + plusVariable;
	// 				alert("El costo por su estadía es de $" + precioFinal);
	// 				break;
	// 		}
	// 		break;
	// 	case "Primavera":
	// 	case "Otoño":
	// 		switch (destinoIngresado) {
	// 			case "Bariloche":
	// 			case "Mar del plata":
	// 			case "Cataratas":
	// 				plusVariable = (precioBase * 10) / 100;
	// 				precioFinal = precioBase + plusVariable;
	// 				alert("El costo por su estadía es de $" + precioFinal);
	// 				break;
	// 			case "Cordoba":
	// 				alert("El costo por su estadía es de $" + precioBase);
	// 				break;
	// 		}
	// 		break;
	// }


	// EJERCICIO RESUELTO SIN FUNCIONES. 
	// switch (estacionIngresada) {
	// 	case "Invierno":
	// 		if (destinoIngresado == "Bariloche") {
	// 			plusVariable = (precioBase * 20) / 100;
	// 			precioFinal = precioBase + plusVariable;
	// 			alert("El costo por su estadía es de $" + precioFinal);
	// 		}
	// 		if (destinoIngresado == "Mar del plata") {
	// 			plusVariable = (precioBase * 20) / 100;
	// 			precioFinal = precioBase - plusVariable;
	// 			alert("El costo por su estadía es de $" + precioFinal);
	// 		}
	// 		if (destinoIngresado == "Cataratas" || destinoIngresado == "Cordoba") {
	// 			plusVariable = (precioBase * 10) / 100;
	// 			precioFinal = precioBase - plusVariable;
	// 			alert("El costo por su estadía es de $" + precioFinal);
	// 		}
	// 		break;
	// 	case "Verano":
	// 		if (destinoIngresado == "Bariloche") {
	// 			plusVariable = (precioBase * 20) / 100;
	// 			precioFinal = precioBase - plusVariable;
	// 			alert("El costo por su estadía es de $" + precioFinal);
	// 		}
	// 		if (destinoIngresado == "Mar del plata") {
	// 			plusVariable = (precioBase * 20) / 100;
	// 			precioFinal = precioBase + plusVariable;
	// 			alert("El costo por su estadía es de $" + precioFinal);
	// 		}
	// 		if (destinoIngresado == "Cataratas" || destinoIngresado == "Cordoba") {
	// 			plusVariable = (precioBase * 10) / 100;
	// 			precioFinal = precioBase + plusVariable;
	// 			alert("El costo por su estadía es de $" + precioFinal);
	// 		}
	// 		break;
	// 	case "Primavera":
	// 	case "Otoño":
	// 		if (destinoIngresado == "Bariloche" || destinoIngresado == "Mar del plata" || destinoIngresado == "Cataratas") {
	// 			plusVariable = (precioBase * 10) / 100;
	// 			precioFinal = precioBase + plusVariable;
	// 			alert("El costo por su estadía es de $" + precioFinal);
	// 		}
	// 		if (destinoIngresado == "Cordoba") {
	// 			alert("El costo por su estadía es de $" + precioBase);
	// 		}
	// 		break;
	// }

}
//FIN DE LA FUNCIÓN