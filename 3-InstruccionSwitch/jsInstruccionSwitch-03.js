function mostrar() {
	//tomo el mes
	let mes = document.getElementById("txtIdMes").value;
	switch (mes) {
		case "Febrero":
			alert("Este mes no tiene más de 29 días");
			break;
		default:
			alert("Este mes tiene 30 días o más.");
	}
}
//FIN DE LA FUNCIÓN

