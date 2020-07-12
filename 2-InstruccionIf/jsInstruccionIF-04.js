function mostrar() {
	//tomo la edad  
	var edad = parseInt(document.getElementById("txtIdEdad").value);
	if (13 <= edad && edad <= 17) {
		alert("Bien. Sos adolescente");
	} else {
		return;
	}
}
//FIN DE LA FUNCIÓN