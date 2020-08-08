/*Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros
(validar entre 0 y 250) , el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, 
informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.
*/

function mostrar() {
    let altura = 0;
    let sexo;

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
        console.log("Sexo: " + queSexoEs(sexo));
    }


}

function queSexoEs(sexo) {
    if (sexo == "f") {
        return sexo = "Femenino";
    } else if (sexo == "m") {
        return sexo = "Masculino"
    }
}