function mostrar() {
    let notas;
    let sexo;
    let acumNotas = 0;
    let promedioNotas;
    let notaMasBajaBandera = false;
    let notaMasBaja;
    let notaMasBajaSexo;
    let varonesAprobados = 0;

    for (var i = 0; i < 5; i++) {
        // Validar notas
        notas = parseInt(prompt("Ingrese una nota"));
        while (notas < 0 || notas > 10 || isNaN(notas)) {
            notas = parseInt(prompt("Incorrecto. Ingrese una nota válida"));
        }
        acumNotas += notas;

        // Validar sexo
        sexo = prompt('Ingrese el sexo: Ingrese "f" para fémenino o "m" para masculino.').toLowerCase();
        while (sexo != "f" && sexo != "m") {
            sexo = prompt('Incorrecto: Ingrese "f" para fémenino o "m" para masculino.').toLowerCase();
        }

        //Nota + baja
        if (!(notaMasBajaBandera) || notas < notaMasBaja) {
            notaMasBaja = notas;
            notaMasBajaSexo = sexo;
            notaMasBajaBandera = true;
        }

        if (sexo === "m" && notas >= 6) {
            varonesAprobados++
        }

    }

    // Imprimir promedio
    promedioNotas = acumNotas / 5;
    console.log("A. El promedio de todas las notas es: " + promedioNotas);

    // Imprimir persona con nota más baja
    console.log("B. Nota más baja: " + notaMasBaja + ". Sexo de la persona: " + queSexoEs(notaMasBajaSexo));

    // Imprimir varones aprobados
    console.log("C. El total de varones aprobados con 6 o más es de: " + varonesAprobados);

}


function queSexoEs(sexo) {
    if (sexo == "f") {
        return sexo = "Femenino";
    } else if (sexo == "m") {
        return sexo = "Masculino"
    }
}