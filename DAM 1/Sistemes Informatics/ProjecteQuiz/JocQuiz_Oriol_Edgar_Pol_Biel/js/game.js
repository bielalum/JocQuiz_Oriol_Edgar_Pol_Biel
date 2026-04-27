const QUESTION_COUNT_PER_GAME = 15;

const QUESTION_BANK = {
    cultura: [
        { question: "¿Cuál es la capital de Francia?", answers: ["Madrid", "París", "Roma", "Lisboa"], correct: 1 },
        { question: "¿Cuál es la capital de España?", answers: ["Sevilla", "Barcelona", "Madrid", "Valencia"], correct: 2 },
        { question: "¿Cuál es la capital de Italia?", answers: ["Roma", "Milán", "Venecia", "Nápoles"], correct: 0 },
        { question: "¿Cuál es la capital de Alemania?", answers: ["Múnich", "Berlín", "Hamburgo", "Colonia"], correct: 1 },
        { question: "¿Cuál es la capital de Portugal?", answers: ["Oporto", "Lisboa", "Coímbra", "Faro"], correct: 1 },
        { question: "¿Cuál es la capital de Japón?", answers: ["Kioto", "Tokio", "Osaka", "Seúl"], correct: 1 },
        { question: "¿Cuál es la capital de China?", answers: ["Pekín", "Shanghái", "Hong Kong", "Cantón"], correct: 0 },
        { question: "¿Cuál es la capital de Argentina?", answers: ["Rosario", "Buenos Aires", "Córdoba", "Mendoza"], correct: 1 },
        { question: "¿Cuál es la capital de Marruecos?", answers: ["Casablanca", "Rabat", "Marrakech", "Tánger"], correct: 1 },
        { question: "¿Cuál es la capital de Reino Unido?", answers: ["Manchester", "Liverpool", "Londres", "Edimburgo"], correct: 2 },
        { question: "¿Qué planeta es conocido como el planeta rojo?", answers: ["Venus", "Marte", "Júpiter", "Mercurio"], correct: 1 },
        { question: "¿Cuál es el planeta más grande del sistema solar?", answers: ["Tierra", "Júpiter", "Saturno", "Neptuno"], correct: 1 },
        { question: "¿Qué planeta está más cerca del Sol?", answers: ["Venus", "Mercurio", "Marte", "Tierra"], correct: 1 },
        { question: "¿Qué planeta tiene anillos muy visibles?", answers: ["Marte", "Saturno", "Venus", "Mercurio"], correct: 1 },
        { question: "¿Cuál es el satélite natural de la Tierra?", answers: ["Marte", "La Luna", "Europa", "Titán"], correct: 1 },
        { question: "¿Cuál es el océano más grande del mundo?", answers: ["Atlántico", "Pacífico", "Índico", "Ártico"], correct: 1 },
        { question: "¿Qué océano está entre América y Europa?", answers: ["Pacífico", "Atlántico", "Índico", "Ártico"], correct: 1 },
        { question: "¿Cuál es el país más grande del mundo por superficie?", answers: ["Canadá", "China", "Rusia", "Estados Unidos"], correct: 2 },
        { question: "¿En qué continente está Egipto?", answers: ["Europa", "Asia", "África", "Oceanía"], correct: 2 },
        { question: "¿Qué continente tiene más países?", answers: ["Asia", "África", "Europa", "Oceanía"], correct: 1 },
        { question: "¿Quién escribió Don Quijote de la Mancha?", answers: ["Federico García Lorca", "Miguel de Cervantes", "Lope de Vega", "Antonio Machado"], correct: 1 },
        { question: "¿Quién pintó la Mona Lisa?", answers: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Miguel Ángel"], correct: 1 },
        { question: "¿Qué deporte se juega en Wimbledon?", answers: ["Fútbol", "Tenis", "Baloncesto", "Golf"], correct: 1 },
        { question: "¿Qué país ganó el Mundial de fútbol masculino de 2010?", answers: ["Brasil", "España", "Alemania", "Argentina"], correct: 1 },
        { question: "¿Qué órgano bombea la sangre?", answers: ["Pulmón", "Cerebro", "Corazón", "Hígado"], correct: 2 },
        { question: "¿Cuál es el hueso más largo del cuerpo humano?", answers: ["Fémur", "Húmero", "Tibia", "Radio"], correct: 0 },
        { question: "¿Qué vitamina produce el cuerpo al recibir luz solar?", answers: ["Vitamina A", "Vitamina B12", "Vitamina C", "Vitamina D"], correct: 3 },
        { question: "¿Cuántos lados tiene un hexágono?", answers: ["5", "6", "7", "8"], correct: 1 },
        { question: "¿Cuánto es 9 x 8?", answers: ["64", "72", "81", "78"], correct: 1 },
        { question: "¿Qué ciudad española es conocida por la Sagrada Familia?", answers: ["Madrid", "Valencia", "Barcelona", "Bilbao"], correct: 2 }
    ],
    banderas: [
        { image: "../img/banderas/espana.svg", answers: ["España", "Portugal", "Italia", "Francia"], correct: 0 },
        { image: "../img/banderas/francia.svg", answers: ["Países Bajos", "Francia", "Rusia", "Luxemburgo"], correct: 1 },
        { image: "../img/banderas/italia.svg", answers: ["Irlanda", "Italia", "México", "Hungría"], correct: 1 },
        { image: "../img/banderas/canada.svg", answers: ["Australia", "Canadá", "Nueva Zelanda", "Estados Unidos"], correct: 1 },
        { image: "../img/banderas/estados_unidos.svg", answers: ["Liberia", "Reino Unido", "Estados Unidos", "Australia"], correct: 2 },
        { image: "../img/banderas/japon.svg", answers: ["China", "Japón", "Corea del Sur", "Vietnam"], correct: 1 },
        { image: "../img/banderas/china.svg", answers: ["Vietnam", "China", "Marruecos", "Turquía"], correct: 1 },
        { image: "../img/banderas/brasil.svg", answers: ["Argentina", "Brasil", "Colombia", "Uruguay"], correct: 1 },
        { image: "../img/banderas/argentina.svg", answers: ["Uruguay", "Argentina", "Guatemala", "Honduras"], correct: 1 },
        { image: "../img/banderas/alemania.svg", answers: ["Bélgica", "Alemania", "España", "Austria"], correct: 1 },
        { image: "../img/banderas/suiza.svg", answers: ["Dinamarca", "Suiza", "Austria", "Polonia"], correct: 1 },
        { image: "../img/banderas/dinamarca.svg", answers: ["Noruega", "Dinamarca", "Suecia", "Finlandia"], correct: 1 },
        { image: "../img/banderas/suecia.svg", answers: ["Noruega", "Suecia", "Finlandia", "Islandia"], correct: 1 },
        { image: "../img/banderas/finlandia.svg", answers: ["Suecia", "Finlandia", "Grecia", "Islandia"], correct: 1 },
        { image: "../img/banderas/irlanda.svg", answers: ["Italia", "Irlanda", "Costa de Marfil", "India"], correct: 1 },
        { image: "../img/banderas/india.svg", answers: ["Irlanda", "Níger", "India", "Costa de Marfil"], correct: 2 },
        { image: "../img/banderas/paises_bajos.svg", answers: ["Francia", "Países Bajos", "Italia", "Bélgica"], correct: 1 },
        { image: "../img/banderas/rusia.svg", answers: ["Países Bajos", "Francia", "Rusia", "Serbia"], correct: 2 },
        { image: "../img/banderas/polonia.svg", answers: ["Indonesia", "Polonia", "Austria", "Mónaco"], correct: 1 },
        { image: "../img/banderas/indonesia.svg", answers: ["Polonia", "Indonesia", "Austria", "Canadá"], correct: 1 },
        { image: "../img/banderas/turquia.svg", answers: ["Pakistán", "Turquía", "Túnez", "Argelia"], correct: 1 },
        { image: "../img/banderas/marruecos.svg", answers: ["Marruecos", "Argelia", "Bangladés", "Pakistán"], correct: 0 },
        { image: "../img/banderas/escocia.svg", answers: ["Escocia", "Grecia", "Finlandia", "Islandia"], correct: 0 },
        { image: "../img/banderas/israel.svg", answers: ["Israel", "Grecia", "Finlandia", "Argentina"], correct: 0 },
        { image: "../img/banderas/australia.svg", answers: ["Nueva Zelanda", "Australia", "Fiyi", "Reino Unido"], correct: 1 },
        { image: "../img/banderas/colombia.svg", answers: ["Venezuela", "Colombia", "Ecuador", "Rumanía"], correct: 1 },
        { image: "../img/banderas/albania.svg", answers: ["Albania", "Montenegro", "Serbia", "Macedonia del Norte"], correct: 0 },
        { image: "../img/banderas/nepal.svg", answers: ["Nepal", "Bután", "Sri Lanka", "Bangladés"], correct: 0 },
        { image: "../img/banderas/canada.svg", answers: ["Canadá", "Perú", "Austria", "Dinamarca"], correct: 0 },
        { image: "../img/banderas/ucrania.svg", answers: ["Suecia", "Ucrania", "Kazajistán", "Rumanía"], correct: 1 }
    ]
};

const modeTitle = document.getElementById("modeTitle");
const questionCounter = document.getElementById("questionCounter");
const questionText = document.getElementById("questionText");
const countdownElement = document.getElementById("countdown");
const answerButtons = document.querySelectorAll(".answer-btn");
const playerDisplay = document.getElementById("player-display");
const questionSymbol = document.getElementById("questionSymbol");
const flagImage = document.getElementById("flagImage");

const username = localStorage.getItem("username") || "Jugador";
const selectedMode = localStorage.getItem("gameMode") || "cultura";
let currentQuestion = Number(localStorage.getItem("currentQuestion")) || 0;
let score = Number(localStorage.getItem("score")) || 0;
let answered = false;
let timeLeft = 15;

playerDisplay.textContent = "Hola, " + username + "!";
modeTitle.textContent = getModeName(selectedMode);

let gameQuestions = JSON.parse(localStorage.getItem("currentQuestions"));

if (!gameQuestions) {
    gameQuestions = getQuestions(selectedMode);
    localStorage.setItem("currentQuestions", JSON.stringify(gameQuestions));
    localStorage.setItem("totalQuestions", String(gameQuestions.length));
}

if (currentQuestion >= gameQuestions.length) {
    window.location.href = "results.html";
}

showQuestion();

const timer = setInterval(() => {
    timeLeft--;
    countdownElement.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(timer);
        answered = true;
        finishQuestion(false);
    }
}, 1000);

function showQuestion() {
    const item = gameQuestions[currentQuestion];
    questionCounter.textContent = "PREGUNTA " + (currentQuestion + 1) + " / " + gameQuestions.length;

    if (item.image) {
        questionText.style.display = "none";
        questionSymbol.style.display = "none";
        flagImage.style.display = "block";
        flagImage.src = item.image;
    } else {
        questionText.style.display = "block";
        questionText.textContent = item.question;
        questionSymbol.style.display = "flex";
        questionSymbol.textContent = "?";
        flagImage.style.display = "none";
    }

    item.answers.forEach((answer, index) => {
        answerButtons[index].textContent = getLetter(index) + ") " + answer;
        answerButtons[index].dataset.index = index;
        answerButtons[index].addEventListener("click", checkAnswer);
    });
}

function checkAnswer(event) {
    if (answered) {
        return;
    }

    answered = true;
    clearInterval(timer);

    const selectedAnswer = Number(event.target.dataset.index);
    const correctAnswer = gameQuestions[currentQuestion].correct;

    if (selectedAnswer === correctAnswer) {
        score++;
        event.target.classList.add("correct");
    } else {
        event.target.classList.add("incorrect");
        answerButtons[correctAnswer].classList.add("correct");
    }

    finishQuestion(true);
}

function finishQuestion(hasAnswered) {
    disableAnswers();

    if (!hasAnswered) {
        questionText.textContent = "Temps esgotat! Passem a la següent pregunta.";
    }

    currentQuestion++;
    localStorage.setItem("score", String(score));
    localStorage.setItem("currentQuestion", String(currentQuestion));

    setTimeout(() => {
        window.location.href = "loading.html";
    }, 1100);
}

function disableAnswers() {
    answerButtons.forEach(button => {
        button.classList.add("disabled");
    });
}

function getQuestions(mode) {
    const pool = mode === "banderas" ? QUESTION_BANK.banderas : QUESTION_BANK.cultura;
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, QUESTION_COUNT_PER_GAME);
}

function getModeName(mode) {
    if (mode === "banderas") {
        return "BANDERES";
    }
    return "CULTURA";
}

function getLetter(index) {
    return ["a", "b", "c", "d"][index];
}
