function mostrar() {
    let precio = parseFloat(prompt("Ingrese el precio"));
    let porcentaje = parseInt(prompt("Ingrese el porcentaje de descuento"));
    let calculo = precio - (precio * porcentaje) / 100;
    document.getElementById("elPrecioFinal").value = "Precio final: " + calculo;
}
