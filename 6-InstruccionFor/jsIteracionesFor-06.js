function mostrar() {
	let numeroIngresado = parseInt(prompt("Ingrese un número"));
	let contadorPares = 0;
	for (let i = 0; i <= numeroIngresado; i++) {
		if (i % 2 == 0) {
			contadorPares++
			console.log(i);
		}
	}
	console.log("La cantidad de numeros pares encontrados es: " + contadorPares)
}