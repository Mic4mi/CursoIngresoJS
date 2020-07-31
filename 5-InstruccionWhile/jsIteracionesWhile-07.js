/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let numeroIngresado;
	let contador = 0;
	let acumulador = 0;
	let continuar = "si";

	do {
		numeroIngresado = parseFloat(prompt("Ingrese un numero"));
		acumulador += numeroIngresado;
		contador++;

		continuar = prompt("¿Desea agregar otro número").toLowerCase();
	} while (continuar == "si");

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;

}

