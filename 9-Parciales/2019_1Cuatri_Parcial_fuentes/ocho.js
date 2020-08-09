function mostrar() {
    let letra;
    let numero;
    let continuar = "si";
    let contadorPares = 0;
    let contadorImpares = 0;
    let contadorCeros = 0;
    let acumPositivos = 0;
    let contadorPositivos = 0;
    let acumNegativos = 0;
    let promedio;
    let numeroMaximo;
    let numeroMaximoBandera = false;
    let numeroMaximoLetra;
    let numeroMinimo;
    let numeroMinimoBandera = false;
    let numeroMinimoLetra;

    do {
        letra = prompt("Ingrese una letra");
        while (!(isNaN(letra))) {
            letra = prompt("Inválido. Ingrese una letra");
        }

        numero = parseFloat(prompt("Ingrese un número entre -100 y 100 para la letra"));
        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = parseFloat(prompt("Inválido. Ingrese un número entre -100 y 100"));
        }

        // contar ceros, pares e impares
        if (numero === 0) {
            contadorCeros++
        } else if (numero % 2 === 0) {
            contadorPares++
        } else {
            contadorImpares++
        }

        //Promedio positivos y suma negativos
        if (numero > 0) {
            contadorPositivos++
            acumPositivos += numero;
        } else {
            acumNegativos += numero;
        }

        //Número máximo y número mínimo
        if (!(numeroMaximoBandera) || numero > numeroMaximo) {
            numeroMaximo = numero;
            numeroMaximoBandera = true;
            numeroMaximoLetra = letra;
        }
        if (!(numeroMinimoBandera) || numero < numeroMinimo) {
            numeroMinimo = numero;
            numeroMinimoBandera = true;
            numeroMinimoLetra = letra;
        }

        continuar = prompt("¿Desea agregar otro dato?");
    } while (continuar === "si");

    //Promedio positivos
    promedio = acumPositivos / contadorPositivos;

    //Imprimir
    console.log("A. La cantidad de numeros pares es de " + contadorPares);
    console.log("B. La cantidad de numeros impares es de " + contadorImpares);
    console.log("B. La cantidad de ceros es de " + contadorCeros);
    console.log("C. El promedio de números positivos es de " + promedio);
    console.log("D. La suma de los números negativos es de " + acumNegativos);
    console.log("C. El número máximo es " + numeroMaximo + " y le corresponde la letra " + numeroMaximoLetra + ", mientras que el número mínimo es " + numeroMinimo + " y le corresponde la letra " + numeroMinimoLetra + ".");
}
