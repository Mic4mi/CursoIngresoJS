/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros. 
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	let numeroIngresado;
	let contador = 0;
	let acumuladorPositivos = 0;
	let acumuladorNegativos = 0;
	let continuar = "si";
	let contadorPositivos = 0;
	let contadorNegativos = 0;
	let contadorCeros = 0;
	let contadorDePares = 0;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;

	do {
		numeroIngresado = parseFloat(prompt("Ingrese un numero"));
		if (numeroIngresado == 0) {
			contadorCeros++
		} else if (numeroIngresado > 0) {
			acumuladorPositivos += numeroIngresado;
			contadorPositivos++
		} else {
			acumuladorNegativos += numeroIngresado;
			contadorNegativos++
		}

		if (numeroIngresado % 2 == 0) {
			contadorDePares++
		}

		promedioPositivos = acumuladorPositivos / contadorPositivos;
		promedioNegativos = acumuladorNegativos / contadorNegativos;
		diferencia = acumuladorPositivos + acumuladorNegativos; // si le "resto" los negativos, cambia el signo. Debe sumarse. 
		contador++;

		continuar = prompt("¿Desea agregar otro número").toLowerCase();
	} while (continuar == "si");

	console.log("La suma de los numeros positivos es: " + acumuladorPositivos);
	console.log("La cantidad de numeros positivos es: " + contadorPositivos);
	console.log("La suma de los numeros negativos es: " + acumuladorNegativos);
	console.log("La cantidad de numeros negativos es: " + contadorNegativos);
	console.log("La cantidad de ceros ingresada es: " + contadorCeros);
	console.log("La cantidad de numeros pares ingresados es: " + contadorDePares);
	console.log("El promedio de numeros positivos es: " + promedioPositivos);
	console.log("El promedio de numeros negativos es: " + promedioNegativos);
	console.log("La diferencia entre positivos y negativos es: " + diferencia);

}