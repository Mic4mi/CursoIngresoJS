function mostrar() {
    let marca;
    let peso = 0;
    let temperatura = 0;
    let continuar = "si";
    let temperaturasPares = 0;
    let pesoPesado;
    let pesoPesadoBandera;
    let pesoPesadoMarca;
    let productosCongelados = 0;
    let contadorProductos = 0;
    let acumPesoProductos = 0;
    let promedio = 0;
    let pesoMaximo = 0;
    let pesoMaximoBandera = false;
    let pesoMinimo = 0;
    let pesoMinimoBandera = false;

    do {
        marca = prompt("Ingrese la marca del producto.");

        //validar peso
        peso = parseFloat(prompt("Ingrese el peso del producto."));
        while (peso <= 0 || peso > 100 || isNaN(peso)) {
            peso = parseFloat(prompt("Incorrecto. Ingrese el peso del producto."));
        }

        //validar temperatura
        temperatura = parseFloat(prompt("Ingrese la temperatura del producto en °C."));
        while (temperatura < -30 || temperatura > 30 || isNaN(temperatura)) {
            temperatura = parseFloat(prompt("Incorrecto. Ingrese valores entre -30 y 30."));
        }

        //promedio peso de todos los productos
        contadorProductos++;
        acumPesoProductos += peso;

        //temperaturas pares y cantidad de productos a menos de 0°
        if (temperatura <= 0) {
            productosCongelados++
        } else if (temperatura % 2 === 0) {
            temperaturasPares++
        }

        //producto más pesado 
        if (!(pesoPesadoBandera) || peso > pesoPesado) {
            pesoPesado = peso;
            pesoPesadoBandera = true;
            pesoPesadoMarca = marca;
        }

        //peso maximo y mínimo
        if (!(pesoMaximoBandera) || peso > pesoMaximo) {
            pesoMaximo = peso;
            pesoMaximoBandera = true;
        } else if (!(pesoMinimoBandera) || peso < pesoMinimo) {
            pesoMinimo = peso;
            pesoMinimoBandera = true;
        }

        continuar = prompt("¿Desea agregar otro producto?");
    } while (continuar === "si");

    promedio = acumPesoProductos / contadorProductos;


    console.log("A. Cantidad total de temperaturas pares: " + temperaturasPares);
    console.log("B. El producto más pesado es : " + pesoPesadoMarca);
    console.log("C. Cantidad total de productos congelados: " + productosCongelados);
    console.log("D. Promedio del peso de todos los productos: " + promedio);
    console.log("E. El peso máximo es: " + pesoMaximo + " y el peso mínimo es: " + pesoMinimo);
}
