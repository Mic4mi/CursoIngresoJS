
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
	let cantidad;
	let fabricante;
	let marca;
	let precio;
	let promedio;
	let tipo;
	let alcoholBandera = false;
	let alcoholBaratoCantidad = 0;
	let alcoholBaratoFabricante;
	let alcoholBaratoPrecio = 0;
	let acumAlcohol = 0;
	let acumBarbijo = 0;
	let acumJabon = 0;
	let compraAlcohol = 0;
	let compraBarbijo = 0;
	let compraJabon = 0;
	let tipoMayorCantidad = 0;

	for (let i = 0; i < 5; i++) {

		// Pedir y validar tipo.
		tipo = prompt("Ingrese el tipo de producto: Alcohol, Barbijo, Jabon.").toLowerCase();
		while (tipo != "alcohol" && tipo != "jabon" && tipo != "barbijo") {
			tipo = prompt("Incorrecto. Ingrese el tipo de producto: Alcohol, Barbijo, Jabon.").toLowerCase();
		}

		// Pedir y validar precio. 
		precio = parseFloat(prompt("Ingrese precio. Entre $100 y $300"));
		while (precio < 100 || precio > 300 || isNaN(precio)) {
			precio = parseFloat(prompt("Incorrecto. Ingrese precio. Entre 100 y 300"));
		}

		// Pedir y validar cantidad. 
		cantidad = parseInt(prompt("Ingrese cantidad. Entre 1 y 1000"));
		while (cantidad <= 0 || cantidad > 1000 || isNaN(cantidad)) {
			cantidad = parseInt(prompt("Incorrecto. Ingrese cantidad. Entre 1 y 1000"));
		}

		// Pedor marca y fabricante. 
		marca = prompt("Ingrese marca");
		fabricante = prompt("Ingrese fabricante");

		switch (tipo) {
			case "alcohol":
				acumAlcohol += cantidad;
				compraAlcohol++;
				if (!(alcoholBandera) || precio < alcoholBaratoPrecio) {
					alcoholBaratoPrecio = precio;
					alcoholBaratoCantidad = cantidad;
					alcoholBaratoFabricante = fabricante;
					alcoholBandera = true;
				}
				break;
			case "barbijo":
				acumBarbijo += cantidad
				compraBarbijo++;
				break;
			case "jabon":
				acumJabon += cantidad;
				compraJabon++;
				break;
		}

	}

	//PROMEDIO
	if (acumAlcohol > acumBarbijo && acumAlcohol > acumJabon) {
		tipoMayorCantidad = "alcoholes";
		promedio = acumAlcohol / compraAlcohol;
	} else if (acumBarbijo >= acumAlcohol && acumBarbijo > acumJabon) {
		tipoMayorCantidad = "barbijos";
		promedio = acumBarbijo / compraBarbijo;
	} else {
		tipoMayorCantidad = "jabones";
		promedio = acumJabon / compraJabon;
	}

	//Muestro datos
	if (!(alcoholBandera)) {
		console.log("A. No se compró alcohol.");
	} else {
		console.log("A. El alcohol más barato sale: $" + alcoholBaratoPrecio + ". Cantidad de unidades: " + alcoholBaratoCantidad + ". Fabricante: " + alcoholBaratoFabricante);
	}

	console.log("B. En la compra, hay mayor cantidad de " + tipoMayorCantidad + ". El promedio de compra es de " + promedio + ".");

	if (compraJabon == 0) {
		console.log("C. No se compró Jabón.");
	} else {
		console.log("C. El total de unidades de jabones es de: " + acumJabon);
	}

}
