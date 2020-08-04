function mostrar() {
	let num = parseInt(prompt("Ingrese un número"));
	for (let i = 0; i < num; i++) {
		if (num == 9) {
			console.log("Se terminó el bucle");
			break;
		} else {
			num = parseInt(prompt("Ingrese un número"));
		}
	}
}