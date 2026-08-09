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


/* =========================================================
   MOBILE MENU
========================================================= */

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


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

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
   LIGHT / DARK POWER SWITCH
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

const typingTexts = [
    "Aspiring Network Engineer",
    "Networking Enthusiast",
    "Cisco Learner",
    "Linux Enthusiast"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;


function typingEffect() {

    if (!typingElement) return;

    const currentText = typingTexts[textIndex];

    if (!deleting) {

        typingElement.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {

            deleting = true;

            setTimeout(typingEffect, 1800);

            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= typingTexts.length) {
                textIndex = 0;
            }

        }

    }

    setTimeout(
        typingEffect,
        deleting ? 60 : 100
    );
}

typingEffect();


/* =========================================================
   PARTICLES.JS
========================================================= */

if (typeof particlesJS !== "undefined") {

    particlesJS("particles-js", {

        particles: {

            number: {
                value: 60,
                density: {
                    enable: true,
                    value_area: 900
                }
            },

            color: {
                value: "#38bdf8"
            },

            shape: {
                type: "circle"
            },

            opacity: {
                value: 0.5,
                random: true
            },

            size: {
                value: 3,
                random: true
            },

            line_linked: {
                enable: true,
                distance: 150,
                color: "#38bdf8",
                opacity: 0.25,
                width: 1
            },

            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false
            }

        },

        interactivity: {

            detect_on: "canvas",

            events: {

                onhover: {
                    enable: true,
                    mode: "grab"
                },

                onclick: {
                    enable: true,
                    mode: "push"
                },

                resize: true

            },

            modes: {

                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 0.5
                    }
                },

                push: {
                    particles_nb: 4
                }

            }

        },

        retina_detect: true

    });

}


/* =========================================================
   BACK TO TOP BUTTON
========================================================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


function topFunction() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   NETWORK BLOG BOOK
========================================================= */

const pages = [
    document.querySelector(".page-left"),
    document.querySelector(".page-right"),
    document.querySelector(".page-3"),
    document.querySelector(".page-4"),
    document.querySelector(".page-5"),
    document.querySelector(".page-6")
];

const prevPage = document.getElementById("prevPage");
const nextPage = document.getElementById("nextPage");
const bookPageNumber = document.getElementById("bookPageNumber");

let bookIndex = 0;
let isBookAnimating = false;


/*
    Page pair system:

    1-2
    3-4
    5-6
*/

function updateBookNumber() {

    if (!bookPageNumber) return;

    const first = bookIndex + 1;
    const second = Math.min(bookIndex + 2, pages.length);

    bookPageNumber.textContent =
        `${first}–${second} / ${pages.length}`;
}


function showBookPages() {

    pages.forEach((page, index) => {

        if (!page) return;

        page.classList.remove(
            "flip-next",
            "flip-prev"
        );

        if (index === bookIndex) {

            page.style.opacity = "1";
            page.style.visibility = "visible";
            page.style.left = "0";
            page.style.right = "auto";
            page.style.zIndex = "10";

        }

        else if (index === bookIndex + 1) {

            page.style.opacity = "1";
            page.style.visibility = "visible";
            page.style.left = "auto";
            page.style.right = "0";
            page.style.zIndex = "9";

        }

        else {

            page.style.opacity = "0";
            page.style.visibility = "hidden";

        }

    });

    updateBookNumber();

    if (prevPage) {
        prevPage.disabled = bookIndex === 0;
    }

    if (nextPage) {
        nextPage.disabled =
            bookIndex >= pages.length - 2;
    }
}


/* Next */

if (nextPage) {

    nextPage.addEventListener("click", () => {

        if (isBookAnimating) return;

        if (bookIndex >= pages.length - 2) return;

        isBookAnimating = true;

        const currentLeft = pages[bookIndex];

        const currentRight = pages[bookIndex + 1];

        if (currentLeft) {
            currentLeft.classList.add("flip-next");
        }

        if (currentRight) {
            currentRight.classList.add("flip-next");
        }

        setTimeout(() => {

            bookIndex += 2;

            showBookPages();

            isBookAnimating = false;

        }, 1500);

    });

}


/* Previous */

if (prevPage) {

    prevPage.addEventListener("click", () => {

        if (isBookAnimating) return;

        if (bookIndex <= 0) return;

        isBookAnimating = true;

        const previousIndex =
            Math.max(0, bookIndex - 2);

        const previousLeft =
            pages[previousIndex];

        const previousRight =
            pages[previousIndex + 1];

        if (previousLeft) {

            previousLeft.style.opacity = "1";
            previousLeft.style.visibility = "visible";

            previousLeft.classList.add("flip-prev");

        }

        if (previousRight) {

            previousRight.style.opacity = "1";
            previousRight.style.visibility = "visible";

            previousRight.classList.add("flip-prev");

        }

        setTimeout(() => {

            bookIndex = previousIndex;

            showBookPages();

            isBookAnimating = false;

        }, 1500);

    });

}


showBookPages();


/* =========================================================
   NETWORK TROUBLESHOOTER GAME
========================================================= */

const questions = [

    {
        question:
            "Which device is mainly used to connect different networks?",

        options: [
            "Switch",
            "Router",
            "Hub",
            "Repeater"
        ],

        answer: 1
    },

    {
        question:
            "Which protocol automatically assigns IP addresses?",

        options: [
            "DNS",
            "HTTP",
            "DHCP",
            "FTP"
        ],

        answer: 2
    },

    {
        question:
            "What does DNS mainly do?",

        options: [
            "Assign MAC addresses",
            "Translate domain names to IP addresses",
            "Connect Wi-Fi",
            "Encrypt files"
        ],

        answer: 1
    },

    {
        question:
            "Which device mainly connects devices inside a LAN?",

        options: [
            "Router",
            "Switch",
            "Modem",
            "Firewall"
        ],

        answer: 1
    },

    {
        question:
            "How many bits are in an IPv4 address?",

        options: [
            "16 bits",
            "32 bits",
            "64 bits",
            "128 bits"
        ],

        answer: 1
    },

    {
        question:
            "Which command is commonly used to test network connectivity?",

        options: [
            "ping",
            "mkdir",
            "copy",
            "format"
        ],

        answer: 0
    },

    {
        question:
            "Which protocol is commonly used for secure remote login?",

        options: [
            "HTTP",
            "FTP",
            "SSH",
            "SMTP"
        ],

        answer: 2
    },

    {
        question:
            "What is the purpose of subnetting?",

        options: [
            "Increase monitor size",
            "Divide a network into smaller networks",
            "Install Windows",
            "Create a website"
        ],

        answer: 1
    },

    {
        question:
            "Which device forwards packets between networks?",

        options: [
            "Switch",
            "Router",
            "Hub",
            "Access Point"
        ],

        answer: 1
    },

    {
        question:
            "Which operating system is widely used for network servers?",

        options: [
            "Linux",
            "Paint",
            "Calculator",
            "BIOS"
        ],

        answer: 0
    }

];


const livesElement = document.getElementById("lives");
const scoreElement = document.getElementById("score");
const levelElement = document.getElementById("gameLevel");
const timerElement = document.getElementById("gameTimer");

const questionElement =
    document.getElementById("gameQuestion");

const optionsElement =
    document.getElementById("gameOptions");

const gameStatus =
    document.getElementById("gameStatus");

const progressBar =
    document.getElementById("gameProgressBar");

const startGame =
    document.getElementById("startGame");

const nextQuestion =
    document.getElementById("nextQuestion");

const resetGame =
    document.getElementById("resetGame");

const gameResult =
    document.getElementById("gameResult");

const finalScore =
    document.getElementById("finalScore");

const finalMessage =
    document.getElementById("finalMessage");

const playAgain =
    document.getElementById("playAgain");


let lives = 3;
let score = 0;
let currentQuestion = 0;
let gameTimer = 30;
let timerInterval = null;
let gameStarted = false;
let answered = false;


/* Update Game UI */

function updateGameUI() {

    if (livesElement)
        livesElement.textContent = lives;

    if (scoreElement)
        scoreElement.textContent = score;

    if (levelElement)
        levelElement.textContent =
            Math.min(currentQuestion + 1, 5);

    if (timerElement)
        timerElement.textContent = gameTimer;

}


/* Start Timer */

function startTimer() {

    clearInterval(timerInterval);

    timerInterval = setInterval(() => {

        gameTimer--;

        if (timerElement) {
            timerElement.textContent = gameTimer;
        }

        if (gameTimer <= 0) {

            clearInterval(timerInterval);

            lives--;

            updateGameUI();

            if (lives <= 0) {

                endGame();

            } else {

                gameStatus.textContent =
                    "⏰ Time's up!";

                answered = true;

                if (nextQuestion) {
                    nextQuestion.style.display =
                        "inline-block";
                }

            }

        }

    }, 1000);

}


/* Load Question */

function loadQuestion() {

    if (currentQuestion >= 5) {

        endGame();

        return;
    }

    answered = false;

    const q = questions[currentQuestion];

    questionElement.textContent =
        q.question;

    optionsElement.innerHTML = "";

    q.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.className = "game-option";

        button.textContent = option;

        button.addEventListener(
            "click",
            () => checkAnswer(index, button)
        );

        optionsElement.appendChild(button);

    });

    gameStatus.textContent =
        "Choose the correct answer.";

    nextQuestion.style.display =
        "none";

    gameTimer = 30;

    updateGameUI();

    const progress =
        (currentQuestion / 5) * 100;

    progressBar.style.width =
        `${progress}%`;

    startTimer();

}


/* Check Answer */

function checkAnswer(selectedIndex, button) {

    if (!gameStarted || answered) return;

    answered = true;

    clearInterval(timerInterval);

    const correctIndex =
        questions[currentQuestion].answer;

    const allOptions =
        document.querySelectorAll(".game-option");

    allOptions.forEach(option => {

        option.disabled = true;

    });


    if (selectedIndex === correctIndex) {

        button.classList.add("correct");

        score += 100;

        gameStatus.textContent =
            "✅ Correct! Great job.";

    } else {

        button.classList.add("wrong");

        allOptions[correctIndex]
            .classList.add("correct");

        lives--;

        gameStatus.textContent =
            "❌ Wrong answer!";

    }

    updateGameUI();

    if (lives <= 0) {

        setTimeout(endGame, 900);

    } else {

        nextQuestion.style.display =
            "inline-block";

    }

}


/* Next Question */

if (nextQuestion) {

    nextQuestion.addEventListener(
        "click",
        () => {

            currentQuestion++;

            loadQuestion();

        }
    );

}


/* Start Game */

function startNetworkGame() {

    lives = 3;
    score = 0;
    currentQuestion = 0;
    gameTimer = 30;

    gameStarted = true;

    gameResult.style.display = "none";

    startGame.style.display = "none";

    updateGameUI();

    loadQuestion();

}


if (startGame) {

    startGame.addEventListener(
        "click",
        startNetworkGame
    );

}


/* Reset Game */

function resetNetworkGame() {

    clearInterval(timerInterval);

    lives = 3;
    score = 0;
    currentQuestion = 0;
    gameTimer = 30;

    gameStarted = false;
    answered = false;

    updateGameUI();

    questionElement.textContent =
        "Click Start Game to begin.";

    optionsElement.innerHTML = "";

    gameStatus.textContent =
        "Ready?";

    progressBar.style.width =
        "0%";

    startGame.style.display =
        "inline-block";

    nextQuestion.style.display =
        "none";

    gameResult.style.display =
        "none";

}


if (resetGame) {

    resetGame.addEventListener(
        "click",
        resetNetworkGame
    );

}


/* End Game */

function endGame() {

    clearInterval(timerInterval);

    gameStarted = false;

    progressBar.style.width = "100%";

    finalScore.textContent = score;

    if (score >= 400) {

        finalMessage.textContent =
            "🔥 Excellent! Your networking knowledge is strong.";

    } else if (score >= 250) {

        finalMessage.textContent =
            "👏 Good job! Keep practicing networking.";

    } else {

        finalMessage.textContent =
            "💪 Keep learning and practicing. You can improve!";

    }

    gameResult.style.display =
        "block";

    nextQuestion.style.display =
        "none";

    startGame.style.display =
        "inline-block";

}


/* Play Again */

if (playAgain) {

    playAgain.addEventListener(
        "click",
        startNetworkGame
    );

}


/* =========================================================
   INITIAL GAME STATE
========================================================= */

resetNetworkGame();


/* =========================================================
   PREVENT ANCHOR JUMP ISSUE
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target =
            document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


console.log(
    "Badhon Biswas Portfolio JavaScript Loaded Successfully 🚀"
);
