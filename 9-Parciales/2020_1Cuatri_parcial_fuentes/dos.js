function mostrar() {
  //   Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
  // Tipo validad("arena";"cal";"cemento")
  // Cantidad de bolsas,
  // Precio por bolsa (más de cero ),

  // Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
  // Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
  // a) El importe total a pagar , bruto sin descuento y...
  // b) el importe total a pagar con descuento(solo si corresponde)
  // d) Informar el tipo con mas cantidad de bolsas.
  // f) El tipo mas caro

  let tipo;
  let cantidad;
  let precioBolsa;
  let continuar = "si";


  do {
    // Validar tipo
    // tipo = prompt("Ingrese el tipo de producto: Arena, Cal o Cemento.").toLowerCase();
    // while (tipo != "arena" && tipo != "cal" && tipo != "cemento") {
    //   tipo = prompt("Incorrecto. Ingrese el tipo de producto: Arena, Cal o Cemento.").toLowerCase();
    // }
    // console.log("Tipo de producto: " + tipo);

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

    cantidad = parseInt(prompt("Ingrese la cantidad de bolsas."));
    precioBolsa = parseFloat(prompt("Ingrese el precio por unidad."));
    while (cantidad <= 0 || precioBolsa <= 0) {
      if (cantidad <= 0) {
        cantidad = parseInt(prompt("Incorrecto: La cantidad no puede ser cero o menor que cero. Ingrese la cantidad de bolsas."));
      } else if (precioBolsa <= 0) {
        precioBolsa = parseFloat(prompt("Incorrecto: El precio no puede ser menor o igual a cero. Ingrese el precio por unidad."));
      }
    }
    console.log("Cantidad de bolsas: " + cantidad);
    console.log("Precio por bolsa: " + precioBolsa);

    continuar = prompt("¿Desea ingresar otro proucto?").toLowerCase();
  } while (continuar == "si");




}
