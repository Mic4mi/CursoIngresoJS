function mostrar() {
	//tomo el mes
	var mesDelAño = txtIdMes.value;
	switch (mesDelAño) {
		case "Febrero":
			alert("Este mes tiene 28 días, salvo que sea año bisiesto, en ese caso, tiene 29.");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembte":
			alert("Este mes tiene 30 días.");
			break;
		default:
			alert("Este mes tiene 31 días.");
	}
}
//FIN DE LA FUNCIÓN