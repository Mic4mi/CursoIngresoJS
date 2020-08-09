function mostrar() {
    let precio;
    let porcentaje;
    let precioFinal;

    precio = parseFloat(prompt("Ingrese el precio del producto"));
    while (precio <= 0 || isNaN(precio)) {
        precio = parseFloat(prompt("Inválido. Ingrese el precio del producto"));
    }

    porcentaje = parseInt(prompt("Ingrese el porcentaje de descuento"));
    while (porcentaje <= 0 || porcentaje >= 100 || isNaN(porcentaje)) {
        porcentaje = parseInt(prompt("Inválido. Ingrese el porcentaje de descuento"));
    }

    precioFinal = precio - (precio * porcentaje) / 100;
    document.getElementById("elPrecioFinal").value = "Precio a pagar: " + precioFinal;
}
