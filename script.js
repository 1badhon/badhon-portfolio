
/* =========================================================
   NAVBAR
========================================================= */

const nav = document.querySelector("nav");
const menuToggle = document.getElementById("menuToggle");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("menu-open");

        const isOpen = nav.classList.contains("menu-open");

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close Menu" : "Open Menu"
        );
    });
}


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICK
========================================================= */

document.querySelectorAll("nav ul li a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("menu-open");

        if (menuToggle) {
            menuToggle.setAttribute(
                "aria-label",
                "Open Menu"
            );
        }

    });

});


/* =========================================================
   POWER SWITCH
   IMPORTANT: POWER BUTTON CODE
========================================================= */

const powerSwitch = document.getElementById("powerSwitch");

if (powerSwitch) {

    powerSwitch.addEventListener("click", () => {

        document.body.classList.toggle("lights-off");

    });

}


/* =========================================================
   TYPING EFFECT
========================================================= */

const typingElement = document.getElementById("typing");

const typingText = "Aspiring Network Engineer";

let typingIndex = 0;
let deleting = false;

function typingEffect() {

    if (!typingElement) return;

    if (!deleting) {

        typingElement.textContent =
            typingText.substring(0, typingIndex + 1);

        typingIndex++;

        if (typingIndex === typingText.length) {

            deleting = true;

            setTimeout(typingEffect, 1800);

            return;
        }

    } else {

        typingElement.textContent =
            typingText.substring(0, typingIndex - 1);

        typingIndex--;

        if (typingIndex === 0) {

            deleting = false;

        }

    }

    setTimeout(
        typingEffect,
        deleting ? 60 : 100
    );
}

typingEffect();


/* =========================================================
   NETWORK TROUBLESHOOTER GAME
========================================================= */

const questions = [

    {
        question: "Which device is mainly used to connect different networks?",
        options: [
            "Switch",
            "Router",
            "Hub",
            "Repeater"
        ],
        answer: 1
    },

    {
        question: "Which protocol automatically assigns IP addresses?",
        options: [
            "DNS",
            "HTTP",
            "DHCP",
            "FTP"
        ],
        answer: 2
    },

    {
        question: "What does DNS translate?",
        options: [
            "MAC address to IP",
            "Domain name to IP address",
            "IP to MAC only",
            "Port to protocol"
        ],
        answer: 1
    },

    {
        question: "Which device mainly connects devices inside a LAN?",
        options: [
            "Router",
            "Switch",
            "Modem",
            "Firewall"
        ],
        answer: 1
    },

    {
        question: "How many bits are in an IPv4 address?",
        options: [
            "16 bits",
            "32 bits",
            "64 bits",
            "128 bits"
        ],
        answer: 1
    }

];


/* =========================================================
   GAME VARIABLES
========================================================= */

let currentQuestion = 0;
let score = 0;
let lives = 3;
let gameStarted = false;
let timer = 30;
let timerInterval = null;


/* =========================================================
   GAME ELEMENTS
========================================================= */

const startGame =
    document.getElementById("startGame");

const nextQuestion =
    document.getElementById("nextQuestion");

const resetGame =
    document.getElementById("resetGame");

const gameQuestion =
    document.getElementById("gameQuestion");

const gameOptions =
    document.getElementById("gameOptions");

const gameStatus =
    document.getElementById("gameStatus");

const livesElement =
    document.getElementById("lives");

const scoreElement =
    document.getElementById("score");

const levelElement =
    document.getElementById("gameLevel");

const timerElement =
    document.getElementById("gameTimer");

const progressBar =
    document.getElementById("gameProgressBar");

const gameResult =
    document.getElementById("gameResult");

const finalScore =
    document.getElementById("finalScore");

const finalMessage =
    document.getElementById("finalMessage");

const playAgain =
    document.getElementById("playAgain");


/* =========================================================
   START GAME
========================================================= */

if (startGame) {

    startGame.addEventListener("click", () => {

        startGame.style.display = "none";

        gameResult.style.display = "none";

        currentQuestion = 0;
        score = 0;
        lives = 3;
        timer = 30;
        gameStarted = true;

        updateGameInfo();

        gameStatus.textContent =
            "Game Started! Choose the correct answer.";

        startTimer();

        showQuestion();

    });

}


/* =========================================================
   SHOW QUESTION
========================================================= */

function showQuestion() {

    if (!gameStarted) return;

    if (currentQuestion >= questions.length) {

        finishGame();

        return;
    }

    const q = questions[currentQuestion];

    gameQuestion.textContent =
        q.question;

    gameOptions.innerHTML = "";

    q.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.className =
            "game-option";

        button.textContent =
            option;

        button.type = "button";

        button.addEventListener(
            "click",
            () => checkAnswer(index, button)
        );

        gameOptions.appendChild(button);

    });

    updateProgress();

}


/* =========================================================
   CHECK ANSWER
========================================================= */

function checkAnswer(selected, clickedButton) {

    if (!gameStarted) return;

    const q = questions[currentQuestion];

    const buttons =
        gameOptions.querySelectorAll(
            ".game-option"
        );

    buttons.forEach(button => {
        button.disabled = true;
    });


    if (selected === q.answer) {

        clickedButton.classList.add("correct");

        score += 10;

        gameStatus.textContent =
            "✅ Correct Answer!";

        gameStatus.style.color =
            "#22c55e";

    } else {

        clickedButton.classList.add("wrong");

        lives--;

        buttons[q.answer].classList.add(
            "correct"
        );

        gameStatus.textContent =
            "❌ Wrong Answer!";

        gameStatus.style.color =
            "#ef4444";

    }

    updateGameInfo();


    if (lives <= 0) {

        setTimeout(() => {

            finishGame();

        }, 1000);

        return;
    }


    nextQuestion.style.display =
        "inline-block";

}


/* =========================================================
   NEXT QUESTION
========================================================= */

if (nextQuestion) {

    nextQuestion.addEventListener(
        "click",
        () => {

            currentQuestion++;

            nextQuestion.style.display =
                "none";

            gameStatus.style.color =
                "#38bdf8";

            gameStatus.textContent =
                "Choose the correct answer.";

            showQuestion();

        }
    );

}


/* =========================================================
   TIMER
========================================================= */

function startTimer() {

    clearInterval(timerInterval);

    timer = 30;

    timerElement.textContent =
        timer;

    timerInterval = setInterval(() => {

        if (!gameStarted) return;

        timer--;

        timerElement.textContent =
            timer;

        if (timer <= 0) {

            clearInterval(timerInterval);

            lives--;

            updateGameInfo();

            gameStatus.textContent =
                "⏰ Time's up!";

            gameStatus.style.color =
                "#ef4444";


            if (lives <= 0) {

                finishGame();

            } else {

                currentQuestion++;

                setTimeout(() => {

                    gameStatus.style.color =
                        "#38bdf8";

                    showQuestion();

                    startTimer();

                }, 1000);

            }

        }

    }, 1000);

}


/* =========================================================
   UPDATE GAME INFO
========================================================= */

function updateGameInfo() {

    if (livesElement) {

        livesElement.textContent =
            lives;

    }

    if (scoreElement) {

        scoreElement.textContent =
            score;

    }

    if (levelElement) {

        levelElement.textContent =
            Math.min(
                currentQuestion + 1,
                questions.length
            );

    }

    if (timerElement) {

        timerElement.textContent =
            timer;

    }

}


/* =========================================================
   PROGRESS BAR
========================================================= */

function updateProgress() {

    if (!progressBar) return;

    const progress =
        (currentQuestion /
            questions.length) * 100;

    progressBar.style.width =
        progress + "%";

}


/* =========================================================
   FINISH GAME
========================================================= */

function finishGame() {

    gameStarted = false;

    clearInterval(timerInterval);

    gameOptions.innerHTML = "";

    nextQuestion.style.display =
        "none";

    gameResult.style.display =
        "block";

    finalScore.textContent =
        score;


    if (score >= 40) {

        finalMessage.textContent =
            "Excellent! Your networking knowledge is very strong. 🚀";

    } else if (score >= 20) {

        finalMessage.textContent =
            "Good job! Keep practicing networking. 💻";

    } else {

        finalMessage.textContent =
            "Keep learning and try again! 📚";

    }

}


/* =========================================================
   RESET GAME
========================================================= */

if (resetGame) {

    resetGame.addEventListener(
        "click",
        resetGameFunction
    );

}


function resetGameFunction() {

    clearInterval(timerInterval);

    gameStarted = false;

    currentQuestion = 0;

    score = 0;

    lives = 3;

    timer = 30;

    updateGameInfo();

    gameQuestion.textContent =
        "Click Start Game to begin.";

    gameOptions.innerHTML = "";

    gameStatus.textContent =
        "Ready?";

    gameStatus.style.color =
        "#38bdf8";

    progressBar.style.width =
        "0%";

    nextQuestion.style.display =
        "none";

    gameResult.style.display =
        "none";

    startGame.style.display =
        "inline-block";

}


/* =========================================================
   PLAY AGAIN
========================================================= */

if (playAgain) {

    playAgain.addEventListener(
        "click",
        () => {

            resetGameFunction();

            startGame.click();

        }
    );

}


/* =========================================================
   BACK TO TOP
========================================================= */

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 300) {

        topBtn.style.display =
            "block";

    } else {

        topBtn.style.display =
            "none";

    }

});


function topFunction() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   PARTICLES.JS
========================================================= */

if (
    typeof particlesJS !== "undefined" &&
    document.getElementById("particles-js")
) {

    particlesJS(
        "particles-js",
        {
            particles: {

                number: {
                    value: 70,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },

                color: {
                    value: "#38bdf8"
                },

                shape: {
                    type: "circle"
                },

                opacity: {
                    value: 0.5
                },

                size: {
                    value: 3,
                    random: true
                },

                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#38bdf8",
                    opacity: 0.3,
                    width: 1
                },

                move: {
                    enable: true,
                    speed: 2
                }

            },

            interactivity: {

                detect_on: "canvas",

                events: {

                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },

                    onclick: {
                        enable: true,
                        mode: "push"
                    },

                    resize: true

                }

            },

            retina_detect: true
        }
    );

}
/* =====================================================
   NETWORKING BLOG - BOOK
===================================================== */

const bookContainer = document.getElementById("bookPages");
const nextBookBtn = document.getElementById("nextPage");
const prevBookBtn = document.getElementById("prevPage");
const bookNumber = document.getElementById("bookPageNumber");

if (
    bookContainer &&
    nextBookBtn &&
    prevBookBtn &&
    bookNumber
) {

    const bookPages = Array.from(
        bookContainer.querySelectorAll(".flip-page")
    );

    let currentPair = 0;

    const totalPairs = Math.ceil(
        bookPages.length / 2
    );


    /* =========================
       SHOW CURRENT PAGES
    ========================= */

    function showBookPages() {

        bookPages.forEach((page) => {

            page.style.display = "none";
            page.style.visibility = "hidden";
            page.style.opacity = "0";

            page.classList.remove(
                "flip-next",
                "flip-prev"
            );

        });


        const leftIndex = currentPair * 2;
        const rightIndex = leftIndex + 1;


        if (bookPages[leftIndex]) {

            bookPages[leftIndex].style.display = "block";
            bookPages[leftIndex].style.visibility = "visible";
            bookPages[leftIndex].style.opacity = "1";
            bookPages[leftIndex].style.zIndex = "10";

        }


        if (bookPages[rightIndex]) {

            bookPages[rightIndex].style.display = "block";
            bookPages[rightIndex].style.visibility = "visible";
            bookPages[rightIndex].style.opacity = "1";
            bookPages[rightIndex].style.zIndex = "9";

        }


        /* Page number */

        const firstPage = leftIndex + 1;

        const lastPage = Math.min(
            rightIndex + 1,
            bookPages.length
        );

        bookNumber.textContent =
            `${firstPage}–${lastPage} / ${bookPages.length}`;


        /* Button state */

        prevBookBtn.disabled =
            currentPair === 0;

        nextBookBtn.disabled =
            currentPair >= totalPairs - 1;

    }


    /* =========================
       NEXT
    ========================= */

    nextBookBtn.addEventListener("click", function (event) {

        event.preventDefault();

        if (currentPair >= totalPairs - 1) {
            return;
        }


        const leftPage =
            bookPages[currentPair * 2];

        const rightPage =
            bookPages[currentPair * 2 + 1];


        if (leftPage) {
            leftPage.classList.add("flip-next");
        }

        if (rightPage) {
            rightPage.classList.add("flip-next");
        }


        setTimeout(function () {

            currentPair++;

            showBookPages();

        }, 800);

    });


    /* =========================
       PREVIOUS
    ========================= */

    prevBookBtn.addEventListener("click", function (event) {

        event.preventDefault();

        if (currentPair <= 0) {
            return;
        }


        currentPair--;

        showBookPages();

    });


    /* =========================
       START
    ========================= */

    showBookPages();



}
