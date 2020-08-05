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

let numeroSecreto;
let contadorIntentos = 0;
let mensaje = "";
let bandera = false;

function comenzar() {
	numeroSecreto = (Math.floor(Math.random() * 100) + 1);
	contadorIntentos = 0;
	document.getElementById("txtIdIntentos").value = "";
	document.getElementById("txtIdNumero").value = "";
	console.log(numeroSecreto);
	bandera = true;
}

function verificar() {
	let numeroIngresado;
	if (!bandera) {
		alert("Presiona 'comenzar'");
	} else {
		numeroIngresado = document.getElementById("txtIdNumero").value;

		if (isNaN(numeroIngresado)) {
			contadorIntentos++
			mensaje = "Eso no es un número. Intenta de nuevo. Intentos: " + contadorIntentos;
		} else if (numeroIngresado < numeroSecreto) {
			contadorIntentos++
			mensaje = "Te falta aún. Intenta de nuevo. Intentos: " + contadorIntentos;
		} else if (numeroIngresado > numeroSecreto) {
			contadorIntentos++
			mensaje = "Te pasaste. Intenta de nuevo. Intentos: " + contadorIntentos;
		} else {
			switch (contadorIntentos) {
				case 1:
					alert("Usted es un psiquico");
					break;
				case 2:
					alert("Excelente percepción!");
					break;
				case 3:
					alert("Esto es suerte");
					break;
				case 4:
					alert("Excelente tecnica");
					break;
				case 5:
					alert("Usted esta en la media");
					break;
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
					alert("Falta tecnica");
					break;
				default:
					alert("Afortundo en el amor...");
			}

			bandera = false;
			mensaje = "¡Ganaste! y en sólo " + contadorIntentos + " intentos.";
		}
		document.getElementById("txtIdIntentos").value = mensaje;
	}
}