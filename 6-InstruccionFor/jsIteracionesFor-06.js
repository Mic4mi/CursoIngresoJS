function mostrar() {
	let numeroIngresado = parseInt(prompt("Ingrese un número"));
	let contadorPares = 0;
	for (let index = 0; index < numeroIngresado; index++) {
		if (index % 2 == 0) {
			contadorPares++
			console.log(index);
		}
	}
	console.log("La cantidad de numeros pares encontrados es: " + contadorPares)
}