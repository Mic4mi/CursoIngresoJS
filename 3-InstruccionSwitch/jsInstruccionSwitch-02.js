function mostrar() {
	//tomo el mes
	let mes = document.getElementById("txtIdMes").value;
	switch (mes) {
		case "Julio":
		case "Agosto":
			alert("¡Abrigate! Que hace frío.");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!");
			break;
		default:
			alert("Falta para el invierno.");
	}
}
//FIN DE LA FUNCIÓN