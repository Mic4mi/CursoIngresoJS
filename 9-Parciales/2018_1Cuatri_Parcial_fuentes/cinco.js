function mostrar() {
    planeta = prompt("Ingrese un planeta de nuestro sistema solar").toLowerCase();

    switch (planeta) {
        case "tierra":
            console.log("Acá vivimos.");
            break;
        case "mercurio":
        case "venus":
            console.log("Acá hace más calor");
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "plutón":
            console.log("Acá hace más frío.");
            break;
        default:
            console.log("Planeta inválido.");
    }
}
