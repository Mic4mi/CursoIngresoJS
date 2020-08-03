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
	let promedioPositivos = 0;
	let promedioNegativos = 0;
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

		if (contadorPositivos != 0) {
			promedioPositivos = acumuladorPositivos / contadorPositivos;
		} else {
			promedioPositivos = "No se puede dividir por cero."
		}

		if (contadorNegativos != 0) {
			promedioNegativos = acumuladorNegativos / contadorNegativos;
		} else {
			promedioPositivos = "No se puede dividir por cero."
		}

		diferencia = contadorPositivos - contadorNegativos;
		contador++;

		continuar = prompt("¿Desea agregar otro número").toLowerCase();
	} while (continuar == "si");

	console.log("1. La suma de los numeros positivos es: " + acumuladorPositivos);
	console.log("2. La cantidad de numeros positivos es: " + contadorPositivos);
	console.log("3. La suma de los numeros negativos es: " + acumuladorNegativos);
	console.log("4. La cantidad de numeros negativos es: " + contadorNegativos);
	console.log("5. La cantidad de ceros ingresada es: " + contadorCeros);
	console.log("6. La cantidad de numeros pares ingresados es: " + contadorDePares);
	console.log("7. El promedio de numeros positivos es: " + promedioPositivos);
	console.log("8. El promedio de numeros negativos es: " + promedioNegativos);
	console.log("9. La diferencia entre la cantidad de positivos y negativos es: " + diferencia);

	// document.write("1. La suma de los numeros positivos es: " + acumuladorPositivos + "<br>");
	// document.write("2. La cantidad de numeros positivos es: " + contadorPositivos + "<br>");
	// document.write("3. La suma de los numeros negativos es: " + acumuladorNegativos + "<br>");
	// document.write("4. La cantidad de numeros negativos es: " + contadorNegativos + "<br>");
	// document.write("5. La cantidad de ceros ingresada es: " + contadorCeros + "<br>");
	// document.write("6. La cantidad de numeros pares ingresados es: " + contadorDePares + "<br>");
	// document.write("7. El promedio de numeros positivos es: " + promedioPositivos + "<br>");
	// document.write("8. El promedio de numeros negativos es: " + promedioNegativos + "<br>");
	// document.write("9. La diferencia entre la cantidad de positivos y negativos es: " + diferencia + "<br>");

}