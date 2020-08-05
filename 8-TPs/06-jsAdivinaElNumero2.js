/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto;
var contadorIntentos = 0;
let mensaje = "";

function comenzar() {
	numeroSecreto = (Math.floor(Math.random() * 100) + 1);
	contadorIntentos = 0;
	//mensaje = "";
	document.getElementById("txtIdIntentos").value = "";
	console.log(numeroSecreto);
  }

function verificar() {
	let numeroIngresado = document.getElementById("txtIdNumero").value;
	if (isNaN(numeroIngresado)) {
		contadorIntentos++
	} else if (numeroIngresado < numeroSecreto) {
		contadorIntentos++
	} else if (numeroIngresado > numeroSecreto) {
		contadorIntentos++
	} else {
		contadorIntentos++
		console.log("¡Ganaste! y en sólo " + contadorIntentos + " intentos.");
	}
	document.getElementById("txtIdIntentos").value = contadorIntentos;
}