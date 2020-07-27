function mostrar() {
	// let destinoIngresado = document.getElementById("txtIdDestino").value;
	// switch (destinoIngresado) {
	// 	case "Bariloche":
	// 	case "Cordoba":
	// 		alert("En esta locación hace frío.");
	// 		break;
	// 	default:
	// 		alert("En esta locación hace calor.");
	// }
	let destinoIngresado = document.getElementById("txtIdDestino").value;
	if (destinoIngresado == "Bariloche" || destinoIngresado == "Cordoba") {
		alert("En esta locación hace frío.");
	} else {
		alert("En esta locación hace calor.");
	}
}

function mostrarOtraVez() {
	let destinoIngresado = document.getElementById("txtIdDestino").value;
	if (destinoIngresado == "Bariloche" || destinoIngresado == "Cordoba") {
		alert("En esta locación hace frío.");
	} else {
		alert("En esta locación hace calor.");
	}
}





//FIN DE LA FUNCIÓN