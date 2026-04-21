const score = Number(localStorage.getItem("score")) || 0;
const username = localStorage.getItem("username") || "Jugador";
const totalQuestions = Number(localStorage.getItem("totalQuestions")) || 1;
const gameMode = localStorage.getItem("gameMode") || "Mode clàssic";

const finalScoreElement = document.getElementById("finalScore");
const scoreValueElement = document.getElementById("scoreValue");
const scoreDetailElement = document.getElementById("scoreDetail");
const performanceMessageElement = document.getElementById("performanceMessage");
const modePlayedElement = document.getElementById("modePlayed");
const rankingListElement = document.getElementById("rankingList");


const percentage = Math.round((score / totalQuestions) * 100);

if (finalScoreElement) {
    finalScoreElement.textContent = `${username}, has obtingut ${score} punts`;
}

if (scoreValueElement) {
    scoreValueElement.textContent = `${score}/${totalQuestions}`;
}

if (scoreDetailElement) {
    scoreDetailElement.textContent = `${percentage}% d'encerts`;
}

if (modePlayedElement) {
    modePlayedElement.textContent = gameMode.toUpperCase();
}

if (performanceMessageElement) {
    performanceMessageElement.textContent = getPerformanceMessage(percentage);
}

saveRanking();
renderRanking();

function getPerformanceMessage(percentage) {
    if (percentage === 100) {
        return "PARTIDA PERFECTA. Has arrasat.";
    }

    if (percentage >= 70) {
        return "MOLT BONA PARTIDA. Vas fort.";
    }

    if (percentage >= 40) {
        return "BONA BASE. Encara pots rascar més punts.";
    }

    return "TORNA-HO A INTENTAR. AIXÒ ENCARA ES POT REMUNTAR.";
}

function saveRanking() {
    const ranking = JSON.parse(localStorage.getItem("ranking")) || [];

    const newEntry = {
        name: username,
        score: score,
        total: totalQuestions,
        percentage: percentage,
        mode: gameMode
    };

    ranking.push(newEntry);

    ranking.sort((a, b) => {
        if (b.score !== a.score) {
            return b.score - a.score;
        }

        return b.percentage - a.percentage;
    });

    const topRanking = ranking.slice(0, 5);
    localStorage.setItem("ranking", JSON.stringify(topRanking));
}

function renderRanking() {
    if (!rankingListElement) {
        return;
    }

    const ranking = JSON.parse(localStorage.getItem("ranking")) || [];

    if (ranking.length === 0) {
        rankingListElement.innerHTML = `
            <div class="ranking-item">
                <span>Encara no hi ha partides</span>
                <span>--</span>
            </div>
        `;
        return;
    }

    rankingListElement.innerHTML = "";

    ranking.forEach((player, index) => {
        const item = document.createElement("div");
        item.classList.add("ranking-item");

        item.innerHTML = `
            <span>${index + 1}. ${player.name}</span>
            <span>${player.score}/${player.total}</span>
        `;

        rankingListElement.appendChild(item);
    });
}

function restart() {
    localStorage.removeItem("score");
    localStorage.removeItem("totalQuestions");
    localStorage.removeItem("gameMode");
    window.location.href = "../index.html";
}