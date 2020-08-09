function mostrar() {
    let personaUno;
    let personaDos;
    let pesoUno;
    let pesoDos;
    let promedioPeso;
    let sumaPeso;

    personaUno = prompt("Ingrese su nombre");
    while (!(isNaN(personaUno))) {
        personaUno = prompt("Inválido. Ingrese su nombre");
    }

    pesoUno = parseFloat(prompt("Ingrese su peso"));
    while (pesoUno <= 20 || pesoUno >= 636 || isNaN(pesoUno)) {
        pesoUno = parseFloat(prompt("Inválido. Ingrese su peso"));
    }

    personaDos = prompt("Ingrese su nombre");
    while (!(isNaN(personaDos))) {
        personaDos = prompt("Inválido. Ingrese su nombre");
    }

    pesoDos = parseFloat(prompt("Ingrese su peso"));
    while (pesoDos <= 20 || pesoDos >= 636 || isNaN(pesoDos)) {
        pesoDos = parseFloat(prompt("Inválido. Ingrese su peso"));
    }

    sumaPeso = pesoUno + pesoDos;
    promedioPeso = sumaPeso / 2;

    alert("Ustedes se llaman " + personaUno + " y " + personaDos + ", pesan " + pesoUno + "kg y " + pesoDos + "kg respectivamente. La suma de sus dos pesos es de " + sumaPeso + "kg y el promedio es de " + promedioPeso + "kg.");
}
