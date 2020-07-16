/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

function FahrenheitCentigrados() {
    let temperaturaF = parseInt(document.getElementById("txtIdTemperatura").value);
    let temperaturaC = (temperaturaF - 32) * (5 / 9);
    alert(temperaturaF + " Farenheit son " + temperaturaC + " Centígrados.");
}

function CentigradosFahrenheit() {
    let temperaturaC = parseInt(document.getElementById("txtIdTemperatura").value);
    let temperaturaF = temperaturaC * (9 / 5) + 32;
    alert(temperaturaC + " Centígrados son " + temperaturaF.toFixed(0) + " Farenheit.");
    //  alert(`${temperaturaC} Centígrados son ${temperaturaF.toFixed(0)} Farenheit.`);
}

alert`${temperaturaC} jajajaja xD`