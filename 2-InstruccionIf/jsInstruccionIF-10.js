function mostrar() {
	//Genero el número RANDOM entre 1 y 10 
	let notaDelExamen = (Math.floor(Math.random() * 10) + 1);
	if (notaDelExamen >= 9) {
		alert("Tu nota es es " + notaDelExamen + ". Excelente");
	} else if (notaDelExamen >= 4) {
		alert("Tu nota es es " + notaDelExamen + ". Aprobó");
	} else {
		alert("Tu nota es es " + notaDelExamen + ". Vamos, la próxima se puede!");
	}

}
//FIN DE LA FUNCIÓN