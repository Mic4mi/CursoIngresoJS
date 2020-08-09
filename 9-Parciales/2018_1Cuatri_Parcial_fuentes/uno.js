function mostrar() {
    let ancho = 0;
    let largo = 0;
    let perim = 0;

    ancho = parseFloat(prompt("Ingrese el ancho del rectángulo"));
    while (ancho <= 0 || isNaN(ancho)) {
        ancho = parseFloat(prompt("Ancho incorrecto. Ingrese valores numericos"));
    }

    largo = parseFloat(prompt("Ingrese el largo del rectángulo"));
    while (largo <= 0 || isNaN(largo)) {
        largo = parseFloat(prompt("Largo incorrecto. Ingrese valores numericos"));
    }

    perim = 2 * (ancho + largo);
    console.log("El perimetro es: " + perim);
}
