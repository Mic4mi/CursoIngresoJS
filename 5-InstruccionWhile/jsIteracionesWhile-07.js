/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let respuesta;
	let numeroIngresado;
	let contador = 0;
	let acumulador = 0;
	let sumaInput = document.getElementById("txtIdSuma");
	let promedioInput = document.getElementById("txtIdPromedio");


	while (respuesta != "no") {
		numeroIngresado = parseFloat(prompt("Ingrese un numero"));
		acumulador += numeroIngresado;
		contador++;
		respuesta = prompt("¿Quiere agregar otro número?").toLowerCase();
	}

	sumaInput.value = acumulador;
	promedioInput.value = Math.floor(acumulador / contador);

}//FIN DE LA FUNCIÓN

