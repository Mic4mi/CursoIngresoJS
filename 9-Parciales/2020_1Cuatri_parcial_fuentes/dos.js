function mostrar() {
  let cantidad;
  let precioBolsa;
  let tipo;
  let continuar = "si";
  let tipoConMayorCantidad;
  let cantidadTotalDeBolsas = 0;
  let arenaCantidad = 0;
  let calCantidad = 0;
  let cementoCantidad = 0;
  let totalBruto = 0;
  let precioConQuinceDeDescuento = 0;
  let precioConVeinticincoDeDescuento = 0;
  let mensaje;
  let arenaPrecio = 0;
  let calPrecio = 0;
  let cementoPrecio = 0;
  let tipoConMayorPrecio;


  do {
    // Validar tipo
    tipo = prompt("Ingrese el tipo de producto: Arena, Cal o Cemento.").toLowerCase();
    while (tipo != "arena" && tipo != "cal" && tipo != "cemento") {
      tipo = prompt("Incorrecto. Ingrese el tipo de producto: Arena, Cal o Cemento.").toLowerCase();
    }

    // Validar precio & cantidad
    cantidad = parseInt(prompt("Ingrese la cantidad de bolsas."));
    precioBolsa = parseFloat(prompt("Ingrese el precio por unidad."));
    while (cantidad <= 0 || precioBolsa <= 0) {
      if (cantidad <= 0) {
        cantidad = parseInt(prompt("Incorrecto: La cantidad no puede ser cero o menor que cero. Ingrese la cantidad de bolsas."));
      } else if (precioBolsa <= 0) {
        precioBolsa = parseFloat(prompt("Incorrecto: El precio no puede ser menor o igual a cero. Ingrese el precio por unidad."));
      }
    }

    switch (tipo) {
      case "arena":
        cantidadTotalDeBolsas += cantidad;
        totalBruto += (precioBolsa * cantidad);
        arenaCantidad += cantidad;
        arenaPrecio += precioBolsa;
        break;
      case "cal":
        cantidadTotalDeBolsas += cantidad;
        totalBruto += (precioBolsa * cantidad);
        calCantidad += cantidad;
        calPrecio += precioBolsa;
        break;
      case "cemento":
        cantidadTotalDeBolsas += cantidad;
        totalBruto += (precioBolsa * cantidad);
        cementoCantidad += cantidad;
        cementoPrecio += precioBolsa;
        break;
    }

    continuar = prompt("¿Desea ingresar otro producto?").toLowerCase();
  } while (continuar == "si");

  // DESCUENTO
  if (cantidadTotalDeBolsas >= 10 && cantidadTotalDeBolsas < 30) {
    precioConQuinceDeDescuento = totalBruto - (totalBruto * 15) / 100;
    mensaje = "Por tu compra mayor a 10 bolsas obtuviste un descuento del 15%. Precio a pagar: " + precioConQuinceDeDescuento;
  } else if (cantidadTotalDeBolsas >= 30) {
    precioConVeinticincoDeDescuento = totalBruto - (totalBruto * 25) / 100;
    mensaje = "Por tu compra mayor a 30 bolsas obtuviste un descuento del 25%. Precio a pagar: " + precioConVeinticincoDeDescuento;
  } else {
    mensaje = "No hay descuento :("
  }

  // EL TIPO CON MÁS CANTIDAD
  if (arenaCantidad > calCantidad && arenaCantidad > cementoCantidad) {
    tipoConMayorCantidad = "El tipo con mayor cantidad es: Arena";
  } else if (calCantidad >= arenaCantidad && calCantidad > cementoCantidad) {
    tipoConMayorCantidad = "El tipo con mayor cantidad es: Cal";
  } else {
    tipoConMayorCantidad = "El tipo con mayor cantidad es: Cemento";
  }

  // EL TIPO CON MAYOR PRECIO
  if (arenaPrecio > calPrecio && arenaPrecio > cementoPrecio) {
    tipoConMayorPrecio = "El tipo con mayor precio es: Arena";
  } else if (calPrecio >= arenaPrecio && calPrecio > cementoPrecio) {
    tipoConMayorPrecio = "El tipo con mayor precio es: Cal";
  } else {
    tipoConMayorPrecio = "El tipo con mayor precio es: Cemento";
  }

  // Imprimir todo 
  // TOTAL BRUTO
  console.log("A. Total bruto: " + totalBruto);
  // DESCUENTO
  console.log("B. " + mensaje);
  // TIPO CON MAYOR CANTIDAD
  console.log("C. " + tipoConMayorCantidad);
  // TIPO CON MAYOR PRECIO
  console.log("D. " + tipoConMayorPrecio);

}




// Validar cantidad
    // cantidad = parseInt(prompt("Ingrese la cantidad de bolsas."));
    // while (cantidad <= 0) {
    //   cantidad = parseInt(prompt("Incorrecto: La cantidad no puede ser cero o menor que cero. Ingrese la cantidad de bolsas."));
    // }
    // console.log("Cantidad de bolsas: " + cantidad);

    // Validar precio
    // precioBolsa = parseFloat(prompt("Ingrese el precio por unidad."));
    // while (precioBolsa <= 0) {
    //   precioBolsa = parseFloat(prompt("Incorrecto: El precio no puede ser menor o igual a cero. Ingrese el precio por unidad."));
    // }
    // console.log("Precio por bolsa: " + precioBolsa);