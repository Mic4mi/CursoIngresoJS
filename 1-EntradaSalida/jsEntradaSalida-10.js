/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
	var resultInput = document.getElementById("txtIdResultado");
	var importe = parseFloat(document.getElementById("txtIdImporte").value);
	var descuento = (importe * 25) / 100;
	var total = importe - descuento;
	resultInput.value = total.toFixed(2);
}
