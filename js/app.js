function empezarJuego() {
    const nombre = document.getElementById("nombre").value;

    if (nombre.trim() === "") {
        alert("Introdueix un nom");
        return;
    }

    localStorage.setItem("username", nombre);
    window.location.href = "../pages/game.html";


}

