const score = Number(localStorage.getItem("score")) || 0;
const username = localStorage.getItem("username") || "Jugador";
const totalQuestions = Number(localStorage.getItem("totalQuestions")) || 15;
const gameMode = localStorage.getItem("gameMode") || "cultura";

const playerTitle = document.getElementById("playerTitle");
const resultsSubtitle = document.getElementById("resultsSubtitle");
const scoreBox = document.getElementById("scoreBox");
const modeValue = document.getElementById("modeValue");
const correctValue = document.getElementById("correctValue");
const percentageValue = document.getElementById("percentageValue");
const resultMessage = document.getElementById("resultMessage");
const resultDescription = document.getElementById("resultDescription");
const rankingList = document.getElementById("rankingList");
const playAgainButton = document.getElementById("playAgainButton");
const homeButton = document.getElementById("homeButton");

const percentage = Math.round((score / totalQuestions) * 100);

playerTitle.textContent = username.toUpperCase();
resultsSubtitle.textContent = "Has acabat la partida, " + username;
scoreBox.textContent = score + "/" + totalQuestions;
modeValue.textContent = getModeName(gameMode);
correctValue.textContent = score;
percentageValue.textContent = percentage + "%";
resultMessage.textContent = getResultMessage(percentage);
resultDescription.textContent = getResultDescription(percentage);

saveRanking();
renderRanking();

playAgainButton.addEventListener("click", restartGame);
homeButton.addEventListener("click", goHome);

function getModeName(mode) {
    if (mode === "banderas") {
        return "Banderes";
    }
    return "Cultura";
}

function getResultMessage(value) {
    if (value === 100) {
        return "PARTIDA PERFECTA!";
    }

    if (value >= 70) {
        return "MOLT BONA PARTIDA!";
    }

    if (value >= 40) {
        return "BONA BASE!";
    }

    return "TORNA-HO A INTENTAR!";
}

function getResultDescription(value) {
    if (value === 100) {
        return "Has encertat totes les preguntes. Nivell màxim.";
    }

    if (value >= 70) {
        return "Has fet una partida molt sòlida. Vas pel bon camí.";
    }

    if (value >= 40) {
        return "No està malament, però encara pots pujar més.";
    }

    return "Has de practicar una mica més, però la pròxima sortirà millor.";
}

function saveRanking() {
    const ranking = JSON.parse(localStorage.getItem("ranking")) || [];

    const newPlayer = {
        name: username,
        score: score,
        total: totalQuestions,
        percentage: percentage,
        mode: getModeName(gameMode)
    };

    ranking.push(newPlayer);

    ranking.sort((a, b) => {
        if (b.score !== a.score) {
            return b.score - a.score;
        }
        return b.percentage - a.percentage;
    });

    localStorage.setItem("ranking", JSON.stringify(ranking.slice(0, 5)));
}

function renderRanking() {
    const ranking = JSON.parse(localStorage.getItem("ranking")) || [];
    rankingList.innerHTML = "";

    if (ranking.length === 0) {
        rankingList.innerHTML = '<p class="ranking-empty">Encara no hi ha resultats</p>';
        return;
    }

    ranking.forEach((player, index) => {
        const item = document.createElement("div");
        item.classList.add("ranking-item");
        item.innerHTML = `<span>${index + 1}. ${player.name}</span><span>${player.score}/${player.total}</span>`;
        rankingList.appendChild(item);
    });
}

function restartGame() {
    localStorage.setItem("score", "0");
    localStorage.setItem("currentQuestion", "0");
    localStorage.removeItem("currentQuestions");
    window.location.href = "loading.html";
}

function goHome() {
    localStorage.removeItem("score");
    localStorage.removeItem("currentQuestion");
    localStorage.removeItem("currentQuestions");
    localStorage.removeItem("totalQuestions");
    localStorage.removeItem("gameMode");
    window.location.href = "../html/index.html";
}
