function mostrar() {
	//tomo la edad  
	var edad = parseInt(document.getElementById("txtIdEdad").value);
	if (13 <= edad && edad <= 17) {
		return
	} else {
		alert("No eres adolescente");
	}

}
//FIN DE LA FUNCIÓN