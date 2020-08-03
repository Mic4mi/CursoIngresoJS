function mostrar() {
	let numeroIngresado = parseInt(prompt("Ingrese un número"));
	let contadorDivisores = 0;
	for (let index = 0; index < numeroIngresado; index++) {
		if (numeroIngresado % index == 0) {
			contadorDivisores++
			console.log(index);
		}
	}
	console.log("La cantidad de numeros divisores encontrados es: " + contadorDivisores);
}