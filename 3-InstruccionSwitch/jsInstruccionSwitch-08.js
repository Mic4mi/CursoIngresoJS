function mostrar() {
	var destinoIngresado = txtIdDestino.value;
	switch (destinoIngresado) {
		case "Bariloche":
			alert("En esta locación, generalmente hace frío.");
			break;
		case "Cataratas":
			alert("En esta locación, generalmente hace calor.");
			break;
		case "Mar del plata":
			alert("En esta locación, generalmente hace calor-templado");
			break;
		case "Cordoba":
			alert("En esta locación, generalmente hace frío-templado");
			break;
	}

}
//FIN DE LA FUNCIÓN