document.addEventListener("DOMContentLoaded", () => {
    const nombreGuardado = localStorage.getItem("username");
    const saludoElemento = document.getElementById("saludo-usuario");

    if (nombreGuardado && saludoElemento) {
        saludoElemento.innerText = "HOLA, " + nombreGuardado.toUpperCase();
    }
});

function seleccionarModo(modo) {
    localStorage.setItem("gameMode", modo);
    
    window.location.href = "game.html";
}