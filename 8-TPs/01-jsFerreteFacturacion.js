/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
    let numUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    let numDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let numTres = parseFloat(document.getElementById("txtIdPrecioTres").value);
    let result = numUno + numDos + numTres;
    alert("Los productos suman un total de $" + result.toFixed(2));
}

function Promedio() {
    let numUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    let numDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let numTres = parseFloat(document.getElementById("txtIdPrecioTres").value);
    let result = (numUno + numDos + numTres) / 3;
    alert("El promedio de los 3 productos es de $" + result.toFixed(2));
}

function PrecioFinal() {
    let numUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    let numDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let numTres = parseFloat(document.getElementById("txtIdPrecioTres").value);
    let result = numUno + numDos + numTres;
    result += (result * 0.21);
    alert("Los productos más IVA suman un total de $" + result.toFixed(2));
}