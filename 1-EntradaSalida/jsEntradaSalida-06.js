/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
	var num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	var num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	var result = num1 + num2;
	alert("La suma es de " + result);
}

