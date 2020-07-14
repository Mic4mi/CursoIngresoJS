/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

// num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
// num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

function sumar() {
	let num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	let num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	let resultado = num1 + num2;
	alert("La suma es " + resultado);
}

function restar() {
	let num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	let num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	let resultado = num1 - num2;
	alert("La resta es " + resultado);
}

function multiplicar() {
	let num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	let num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	let resultado = num1 * num2;
	alert("La multiplicación es " + resultado);
}

function dividir() {
	let num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	let num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	let resultado = num1 / num2;
	alert("La división es " + resultado);
}

