/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
	var resultInput = document.getElementById("txtIdResultado");
	var importe = parseInt(document.getElementById("txtIdImporte").value);
	var descuento = (importe * 25) / 100;
	resultInput.value = importe - descuento;
}
