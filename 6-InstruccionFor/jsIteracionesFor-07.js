function mostrar() {
	let numeroIngresado = parseInt(prompt("Ingrese un número"));
	let contadorDivisores = 0;
	for (let i = 0; i <= numeroIngresado; i++) {
		if (numeroIngresado % i == 0) {
			contadorDivisores++
			console.log(i);
		}
	}
	console.log("La cantidad de numeros divisores encontrados es: " + contadorDivisores);
}