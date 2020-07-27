function mostrar() {
	//tomo la edad  
	let edad = parseInt(document.getElementById("txtIdEdad").value);
	if (edad < 13 || edad > 17) {
		alert("No eres adolescente");
	}

	// También se puede expresar cómo: 
	// if (!(13 <= edad && edad <= 17)) {
	// 	alert("Bien. Sos adolescente");
	// } 

}
//FIN DE LA FUNCIÓN