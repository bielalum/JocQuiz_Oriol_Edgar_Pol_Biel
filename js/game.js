const modeTitle = document.getElementById("modeTitle");
const countdownElement = document.getElementById("countdown");
const answerButtons = document.querySelectorAll(".answer-btn");

const selectedMode = localStorage.getItem("gameMode") || "[MODE DE JOC]";
modeTitle.textContent = selectedMode.toUpperCase();

let timeLeft = 15;
let answered = false;

const timer = setInterval(() => {
    timeLeft--;
    countdownElement.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(timer);
        disableAnswers();
        setTimeout(() => {
            window.location.href = "loading.html";
        }, 800);
    }
}, 1000);

answerButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (answered) return;
        answered = true;

        clearInterval(timer);

        if (button.dataset.correct === "true") {
            button.classList.add("correct");
            localStorage.setItem("score", "1");
        } else {
            button.classList.add("incorrect");
            answerButtons.forEach(btn => {
                if (btn.dataset.correct === "true") {
                    btn.classList.add("correct");
                }
            });
            localStorage.setItem("score", "0");
        }

        disableAnswers();

        setTimeout(() => {
            window.location.href = "loading.html";
        }, 1200);
    });
});

function disableAnswers() {
    answerButtons.forEach(button => {
        button.classList.add("disabled");
    });
}