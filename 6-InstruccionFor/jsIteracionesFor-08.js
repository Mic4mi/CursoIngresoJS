function mostrar() {
	let numeroIngresado = parseInt(prompt("Ingrese un número"));
	if (numeroIngresado < 2) {
		return console.log("no es primo")
	} else {
		for (let i = 2; i < numeroIngresado; i++) {
			if (numeroIngresado % i === 0) {
				return console.log("no es primo")
			}
		}
		return console.log("es primo")
	}
}

