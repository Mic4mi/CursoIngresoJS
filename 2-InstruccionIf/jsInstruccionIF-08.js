function mostrar() {
	//tomo la edad  
	var edad = parseInt(document.getElementById("txtIdEdad").value);
	var estadoCivil = document.getElementById("estadoCivil").value;
	if (edad < 18 && estadoCivil != "Soltero") {
		return;
	} else if (edad >= 18 && estadoCivil == "Soltero") {
		alert("Usted es soltero y no es menor");
	}
}
//FIN DE LA FUNCIÓN