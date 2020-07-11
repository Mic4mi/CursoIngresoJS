/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar() {
	var nombre = prompt("Ingrese su nombre");
	var inputNombre = document.getElementById("txtIdNombre");
	inputNombre.value = nombre;
}

