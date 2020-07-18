/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	let suma = document.getElementById("txtIdSuma");
	let multiplicacion = document.getElementById("txtIdProducto");
	let numeroIngresado;
	let respuesta;
	let contador = 0;
	let sumaPositivos = 0;
	let multiplicacionNegativos = 1;


	while (respuesta != "no") {
		numeroIngresado = parseFloat(prompt("Ingrese un numero"));
		if (numeroIngresado < 0) {
			multiplicacionNegativos *= numeroIngresado;
		} else {
			sumaPositivos += numeroIngresado;
		}
		contador++;
		respuesta = prompt("¿Quiere agregar otro número?").toLowerCase();
	}

	suma.value = sumaPositivos;
	multiplicacion.value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN