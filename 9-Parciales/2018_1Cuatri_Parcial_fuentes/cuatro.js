function mostrar() {
    let numeroUno = prompt("Ingrese un número.");
    let numeroDos = prompt("Ingrese otro número.");
    let suma;
    let resta;

    //Si son iguales, mostrarlos concatenados
    if (numeroUno == numeroDos) {
        console.log("A. " + numeroUno + numeroDos);
    } else {
        console.log("A. No son iguales.")
    }

    //Si el primero es mayor los resto, si no, los sumo
    if (parseFloat(numeroUno) > parseFloat(numeroDos)) {
        resta = (parseFloat(numeroUno) - parseFloat(numeroDos));
        console.log("B. " + resta);
    } else {
        suma = (parseFloat(numeroUno) + parseFloat(numeroDos));
        console.log("B. " + suma);
    }

    //Si suman más de diez, dar un mensaje
    if (suma > 10) {
        console.log("C. La suma es " + suma + " y superó 10.");
    }
}
