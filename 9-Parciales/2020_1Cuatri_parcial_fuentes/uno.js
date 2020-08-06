
function mostrar() {
	// cargar 5 productos

	// Cada producto tiene:
	// tipo: Jabón, Barbijo, Alcohol. 
	// precio: Entre 100 y 300
	// cantidad: No puede ser cero o negativo ni superar las 1000 unidades
	// Marca
	// Fabricante

	//Obtener
	// A. Del alcohol más barato -> Cantidad de unidades y fabricante. 
	// B. Del tipo (barbijo, jabón o alcohol) que tenga + unidades -> El promedio por compra
	// C. Total de unidad de jabones

	let tipo;
	let precio;
	let cantidad;
	let cantidadMayor = 1;
	let cantidadDeJabones = 0;
	let tipoConMayorCantidad;
	let promedio;
	let precioCantidadMayor;
	let marca;
	let fabricante;
	let alcoholBarato;
	let alcoholBaratoPrecio = 300;
	let alcoholBaratoCantidad = 0;
	let alcoholBaratoFabricante;

	for (let i = 0; i < 5; i++) {

		// Validar tipo.
		tipo = prompt("Ingrese el tipo de producto: Alcohol, Barbijo, Jabon.").toLowerCase();
		while (tipo != "alcohol" && tipo != "jabon" && tipo != "barbijo") {
			tipo = prompt("Incorrecto. Ingrese el tipo de producto: Alcohol, Barbijo, Jabon.").toLowerCase();
		}

		// Validar precio. 
		precio = parseInt(prompt("Ingrese precio. Entre 100 y 300"));
		while (precio < 100 || precio > 300 || isNaN(precio)) {
			precio = parseInt(prompt("Incorrecto. Ingrese precio. Entre 100 y 300"));
		}

		// Validar Cantidad. 
		cantidad = parseInt(prompt("Ingrese cantidad. Entre 1 y 1000"));
		while (cantidad <= 0 || cantidad > 1000 || isNaN(cantidad)) {
			cantidad = parseInt(prompt("Incorrecto. Ingrese cantidad. Entre 1 y 1000"));
		}
		console.log("Cantidad: " + cantidad);

		// Marca y Fabricante. 
		marca = prompt("Ingrese marca");
		console.log("Marca: " + marca);
		fabricante = prompt("Ingrese fabricante");
		console.log("Fabricante: " + fabricante);

		if (tipo === "alcohol" && precio <= alcoholBaratoPrecio) {
			alcoholBarato = tipo;
			alcoholBaratoPrecio = precio;
			alcoholBaratoCantidad = cantidad;
			alcoholBaratoFabricante = fabricante;
		}

		if (cantidad >= cantidadMayor) {
			cantidadMayor = cantidad;
			precioCantidadMayor = precio;
			tipoConMayorCantidad = tipo;
			promedio = (cantidadMayor * precio) / 100;
		}

		if (tipo === "jabon") {
			cantidadDeJabones += cantidad;
		}

	}

	console.log("El alcohol más barato sale: $" + alcoholBaratoPrecio + ". Cantidad de unidades: " + alcoholBaratoCantidad + ". Fabricante: " + alcoholBaratoFabricante);
	console.log("El producto con mayores unidades es: " + tipoConMayorCantidad + ". El promedio de compra es igual a " + promedio + ".");
	console.log("El total de unidades de jabones es de: " + cantidadDeJabones);
}
