function empezarJuego() {
    const nombreInput = document.getElementById("nombre");
    const nombre = nombreInput.value.trim();

    if (nombre === "") {
        alert("Introdueix un nom abans de començar");
        return;
    }

    localStorage.setItem("username", nombre);

    document.getElementById("pantalla-inicio").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("saludo").textContent = "Hola, " + nombre + ". Tria un mode";
}

function seleccionarTipo(mode) {
    localStorage.setItem("gameMode", mode);
    localStorage.setItem("score", "0");
    localStorage.setItem("currentQuestion", "0");
    localStorage.removeItem("currentQuestions");
    window.location.href = "../pages/loading.html";
}
