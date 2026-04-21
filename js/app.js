function empezarJuego() {
    const nombre = document.getElementById("nombre").value;

    if (nombre.trim() === "") {
        alert("Introdueix un nom");
        return;
    }

    localStorage.setItem("username", nombre);

    document.getElementById("pantalla-inicio").style.display = "none";
    document.getElementById("menu").style.display = "block";

    document.getElementById("saludo").innerText = "Hola " + nombre;
}

function seleccionarTipo(tipo) {
    alert("Mode seleccionat: " + tipo);
}