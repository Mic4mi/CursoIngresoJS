function mostrar() {
	//tomo la edad  
	var edad = parseInt(document.getElementById("txtIdEdad").value);
	var estadoCivil = document.getElementById("estadoCivil").value;
	if (edad < 18 && estadoCivil == "Soltero") {
		alert("Es muy pequeño para NO ser soltero")
	}
}
//FIN DE LA FUNCIÓN