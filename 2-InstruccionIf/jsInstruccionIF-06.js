function mostrar() {
	//tomo la edad  
	var edad = parseInt(document.getElementById("txtIdEdad").value);
	if (13 <= edad && edad <= 17) {
		alert("Eres un adolescente");
	} else if (edad <= 12) {
		alert("Eres un niño");
	} else {
		alert("Eres mayor de edad");
	}
}
//FIN DE LA FUNCIÓN