const score = localStorage.getItem("score");
const username = localStorage.getItem("username");

document.getElementById("finalScore").innerText =
    username + ", has obtingut " + score + " punts";

function restart() {
    localStorage.clear();
    window.location.href = "../index.html";
}