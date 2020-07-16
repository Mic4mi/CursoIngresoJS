function mostrar() {
	var destinoIngresado = document.getElementById("txtIdDestino").value;
	switch (destinoIngresado) {
		case "Bariloche":
			alert("Esta locación esta en el sur de Argentina.");
			break;
		case "Cataratas":
			alert("Esta locación esta en el norte de Argentina.");
			break;
		case "Mar del plata":
			alert("Esta locación esta en el este de Argentina.");
			break;
		case "Cordoba":
			alert("Esta locación esta en el oeste de Argentina.");
			break;
	}

}
//FIN DE LA FUNCIÓN