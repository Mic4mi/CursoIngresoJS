
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
	let marca;
	let fabricante;

	tipo = prompt("Ingrese el tipo de producto: Alcohol, Barbijo, Jabon.").toLowerCase();
	precio = parseInt(prompt("Ingrese precio. Entre 100 y 300"));
	cantidad = parseInt(prompt("Ingrese cantidad. Entre 1 y 1000"));
	marca = prompt("Ingrese marca");
	fabricante = prompt("Ingrese fabricante");

}
