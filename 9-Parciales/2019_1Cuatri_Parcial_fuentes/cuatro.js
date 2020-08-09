function mostrar() {
    let suma = 0;
    let resta = 0;
    let numeroUno = prompt("Ingrese un número.");
    let numeroDos = prompt("Ingrese otro número.");

    // Si son iguales, los concateno.
    if (numeroUno == numeroDos) {
        console.log("A. " + numeroUno + numeroDos + ".");
    } else {
        console.log("A. No son iguales.");
    }

    if (parseFloat(numeroUno) > parseFloat(numeroDos)) {
        resta = parseFloat(numeroUno) - parseFloat(numeroDos);
        console.log("B. " + resta);
    } else {
        suma = parseFloat(numeroUno) + parseFloat(numeroDos);
        console.log("B. " + suma);
    }

    if (resta > 10) {
        console.log("C. La resta es de " + resta + " y superó 10");
    }
}
