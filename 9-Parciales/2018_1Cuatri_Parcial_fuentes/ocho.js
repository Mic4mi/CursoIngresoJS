/*Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra 
y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar 
al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
*/

function mostrar() {
    let letra;
    let numero;
    let continuar = "si";
    let cantidadPares = 0;
    let cantidadImpares = 0;
    let cantidadCeros = 0;
    let contadorPositivos = 0;
    let acumPositivos = 0;
    let acumNegativos = 0;
    let promedioPositivos;
    let numeroMaximo = 0;
    let numeroMaximoBandera = false;
    let letraNumeroMaximo;
    let numeroMinimo = 0;
    let numeroMinimoBandera = true;
    let letraNumeroMinimo;

    do {
        //validar numero
        numero = parseFloat(prompt("Ingrese un número"));
        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = parseFloat(prompt("Inválido. Ingrese un número"));
        }

        //Validar letra 
        letra = prompt("Ingrese una letra");
        while (!(isNaN(letra))) {
            letra = prompt("Inválido. Ingrese una letra");
        }

        // Cantidad de ceros, pares e impares
        if (numero === 0) {
            cantidadCeros++
        } else if (numero % 2 === 0) {
            cantidadPares++
        } else {
            cantidadImpares++
        }

        // promedio positivos, suma negativos
        if (numero > 0) {
            contadorPositivos++
            acumPositivos += numero
        } else {
            acumNegativos += numero
        }

        // Numero y letra del maximo y el mínimo
        if (!(numeroMaximoBandera) || numero > numeroMaximo) {
            numeroMaximo = numero;
            numeroMaximoBandera = true;
            letraNumeroMaximo = letra;
        } else if (!(numeroMinimoBandera) || numero < numeroMinimo) {
            numeroMinimo = numero;
            numeroMinimoBandera = true;
            letraNumeroMinimo = letra;
        }

        continuar = prompt("¿Desea ingresar más datos?").toLowerCase();
    } while (continuar === "si");

    // Ceros, pares e impares
    console.log("ceros: " + cantidadCeros);
    console.log("pares: " + cantidadPares);
    console.log("impares: " + cantidadImpares);

    // promedio positivos, suma negativos
    promedioPositivos = acumPositivos / contadorPositivos;
    console.log("Promedio positivos: " + promedioPositivos);
    console.log("Suma negativos: " + acumNegativos);

    // letra y numero del máximo y el mínimo
    console.log("Numero máximo: " + numeroMaximo + ". Letra de éste número: " + letraNumeroMaximo);
    console.log("Numero mínimo: " + numeroMinimo + ". Letra de éste número: " + letraNumeroMinimo);

}
