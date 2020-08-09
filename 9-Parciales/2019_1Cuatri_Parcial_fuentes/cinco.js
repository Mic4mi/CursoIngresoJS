function mostrar() {
    const precioXDia = 100;
    let continente = document.getElementById("Marca").value;
    let medioDePago;
    let cantidadDias;
    let precioBase;
    let precioFinal;

    //validar medio de pago
    medioDePago = prompt('Ingrese medio de pago: "efectivo", "debito", "mercadopago" u "otro".').toLowerCase();
    while (!(medioDePago === "efectivo" || medioDePago === "debito" || medioDePago === "mercadopago" || medioDePago === "otro")) {
        medioDePago = prompt('Inválido. Por favor ingrese medio de pago: "efectivo", "debito", "mercadopago" u "otro".').toLowerCase();
    }

    // validar cantidad de dias 
    cantidadDias = parseInt(prompt("¿Cuántos días planea quedarse?"));
    while (cantidadDias <= 0 || isNaN(cantidadDias)) {
        cantidadDias = parseInt(prompt("Inválido. Ingrese valor numérico mayor a cero"));
    }

    precioBase = cantidadDias * precioXDia;

    // Evaluar casos
    switch (continente) {
        case "América":
            if (medioDePago === "debito") {
                precioFinal = precioBase - (precioBase * 60) / 100;
            } else {
                precioFinal = precioBase - (precioBase * 50) / 100;
            }
            break;
        case "África":
            if (medioDePago === "mercadopago" || medioDePago === "efectivo") {
                precioFinal = precioBase - (precioBase * 75) / 100;
            } else {
                precioFinal = precioBase - (precioBase * 60) / 100;
            }
            break;
        case "Europa":
            if (medioDePago === "debito") {
                precioFinal = precioBase - (precioBase * 35) / 100;
            } else if (medioDePago === "mercadopago") {
                precioFinal = precioBase - (precioBase * 30) / 100;
            } else {
                precioFinal = precioBase - (precioBase * 25) / 100;
            }
            break;
        case "Asia":
        case "Oceania":
            precioFinal = precioBase + (precioBase * 20) / 100;
            break;
    }

    console.log("Usted decidió viajar a " + continente + " por " + cantidadDias + " días.");
    console.log("Eligió como medio de pago " + medioDePago + " y debe abonar un total de $" + precioFinal + ".");
}
