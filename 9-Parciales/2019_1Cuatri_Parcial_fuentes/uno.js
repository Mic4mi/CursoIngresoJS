
function mostrar() {
    let lado;
    let perim = 0;

    // Validar lado
    lado = parseFloat(prompt("Ingrese la medida de un lado de un triángulo equilátero"));
    while (lado <= 0 || isNaN(lado)) {
        lado = parseFloat(prompt("Inválido. Ingrese la medida de un lado de un triángulo equilátero"));
    }

    perim = 3 * lado;
    console.log("El perímetro es: " + perim);
}
