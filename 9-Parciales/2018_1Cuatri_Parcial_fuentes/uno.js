
function mostrar() {
    let ancho;
    let largo;
    let perim;

    ancho = parseFloat(prompt("Ingrese el ancho del rectángulo"));
    do {
        ancho = parseFloat(prompt("Ancho incorrecto. Ingrese valores numericos"));
    } while (isNaN(ancho));

    largo = parseFloat(prompt("Ingrese el largo del rectángulo"));
    do {
        largo = parseFloat(prompt("Largo incorrecto. Ingrese valores numericos"));
    } while (isNaN(largo));

    perim = 2 * (ancho + largo);
    console.log("El perimetro es: " + perim);
}
