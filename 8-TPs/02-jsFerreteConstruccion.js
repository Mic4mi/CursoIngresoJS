/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    let largo = parseFloat(document.getElementById("txtIdLargo").value);
    let ancho = parseFloat(document.getElementById("txtIdAncho").value);
    let perim = (largo + ancho) * 2;
    let alambre = perim * 3;
    alert("Se requieren " + alambre + " metros de alambre.");
}
function Circulo() {
    let radio = parseFloat(document.getElementById("txtIdRadio").value);
    let perim = Math.floor(Math.PI * radio * 2);
    let alambre = perim * 3;
    alert("Se requieren " + alambre + " metros de alambre.");
}
function Materiales() {
    let largo = parseFloat(document.getElementById("txtIdLargo").value);
    let ancho = parseFloat(document.getElementById("txtIdAncho").value);
    let area = largo * ancho;
    let cantidadCemento = area * 2;
    let cantidadCal = area * 3;
    alert("Para hacer un contrapiso de " + area + "m2 se necesitan " + cantidadCemento + " bolsas de cemento y " + cantidadCal + " bolsas de cal.");
}