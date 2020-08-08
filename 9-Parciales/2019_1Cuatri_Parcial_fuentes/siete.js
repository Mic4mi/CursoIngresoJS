function mostrar() {
    let altura = 0;
    let sexo;
    let acumAlturas = 0;
    let promedioAlturas = 0;
    let menorAlturaBandera = false;
    let menorAltura;
    let menorAlturaSexo;
    let mujeresAltas = 0;

    for (let i = 0; i < 3; i++) {
        //Validar altura
        altura = parseFloat(prompt("Ingrese la altura del jugador en cm."));
        while (altura <= 0 || altura > 250 || isNaN(altura)) {
            altura = parseFloat(prompt("Incorrecto. Ingrese la altura del jugador en cm."));
        }

        //Validar sexo
        sexo = prompt('Ingrese el sexo del jugador. "f" para femenino y "m" para másculino.').toLowerCase();
        while (sexo != "f" && sexo != "m") {
            sexo = prompt('Incorrecto. Ingrese el sexo del jugador. "f" para femenino y "m" para másculino.').toLowerCase();
        }

        //Acumular alturas
        acumAlturas += altura;

        //Obtener altura más baja
        if (!(menorAlturaBandera) || altura < menorAltura) {
            menorAltura = altura;
            menorAlturaSexo = sexo;
            menorAlturaBandera = true;
        }

        // Obtener mujeres que superen los 190cm
        if (sexo === "f" && altura >= 190) {
            mujeresAltas++
        }
    }

    // Imprimir promedio de alturas
    promedioAlturas = acumAlturas / 3;
    console.log("A. El promedio de todas las alturas es: " + promedioAlturas);

    // Imprimir altura más baja y sexo
    console.log("B. La persona más baja es del genero: " + queSexoEs(menorAlturaSexo) + " y mide " + menorAltura + "cm.");

    // Imprimir cantidad de mujeres altas
    console.log("C. La cantidad de mujeres que superan los 190cm es de: " + mujeresAltas);
}

function queSexoEs(sexo) {
    if (sexo == "f") {
        return sexo = "Femenino";
    } else if (sexo == "m") {
        return sexo = "Masculino"
    }
}