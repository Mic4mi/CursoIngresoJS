function mostrar() {
	//tomo la edad  
	var edad = parseInt(document.getElementById("txtIdEdad").value);
	if (edad >= 18) {
		alert("Bien. Sos Mayor de edad");
	} else {
		alert("Lo siento, aun eres menor de edad");
	}
}//FIN DE LA FUNCIÓN