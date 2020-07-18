/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	let suma = document.getElementById("txtIdSuma");
	let multiplicacion = document.getElementById("txtIdProducto");
	let numeroIngresado;
	let respuesta = "si";
	let contador = 0;
	let sumaPositivos = 0;
	let multiplicacionNegativos = 1;


	while (respuesta != "no") {
		while (respuesta == "si") {
			numeroIngresado = parseFloat(prompt("Ingrese un numero"));
			if (numeroIngresado < 0) {
				multiplicacionNegativos *= numeroIngresado;
			} else {
				sumaPositivos += numeroIngresado;
			}
			respuesta = prompt("¿Quiere agregar otro número?").toLowerCase();

			if (respuesta != "si" || respuesta != "no") {
				alert("mal");
				break;
			}
		}

		contador++;
	}

	suma.value = sumaPositivos;
	multiplicacion.value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN