function empezarJuego() {
    const nombre = document.getElementById("nombre").value;

    document.getElementById("pantalla-inicio").style.display = "none";
    document.getElementById("menu").style.display = "block";

    document.getElementById("saludo").innerText = "Hola " + nombre;
}

function seleccionarTipo(tipo) {
    alert("Has seleccionado " + tipo);
}