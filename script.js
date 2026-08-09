/* ==========================================
   PARTICLES BACKGROUND
========================================== */

if (typeof particlesJS !== "undefined") {

    particlesJS("particles-js", {

        particles: {
            number: {
                value: 80,
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
                value: 0.6
            },

            size: {
                value: 3
            },

            line_linked: {
                enable: true,
                distance: 150,
                color: "#38bdf8",
                opacity: 0.4,
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
                    mode: "grab"
                },

                onclick: {
                    enable: true,
                    mode: "push"
                }
            },

            modes: {
                grab: {
                    distance: 150,
                    line_linked: {
                        opacity: 1
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


/* ==========================================
   TYPING EFFECT
========================================== */

const typingElement =
    document.getElementById("typing");

const typingText =
    "Aspiring Network Engineer";

let typingIndex = 0;

function typing() {

    if (!typingElement) return;

    if (typingIndex < typingText.length) {

        typingElement.textContent +=
            typingText.charAt(typingIndex);

        typingIndex++;

        setTimeout(typing, 100);
    }

}


/* ==========================================
   BACK TO TOP
========================================== */

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 300) {

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


/* ==========================================
   POWER SWITCH
========================================== */

const powerSwitch =
    document.getElementById("powerSwitch");

if (powerSwitch) {

    powerSwitch.addEventListener("click", () => {

        document.body.classList.toggle("lights-off");

        const particles =
            document.getElementById("particles-js");

        if (
            document.body.classList.contains("lights-off")
        ) {

            if (particles) {
                particles.style.display = "none";
            }

        } else {

            if (particles) {
                particles.style.display = "block";
            }

        }

    });

}


/* ==========================================
   NETWORK TROUBLESHOOTER GAME
========================================== */


/* ---------- Game Elements ---------- */

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

const questionElement =
    document.getElementById("gameQuestion");

const optionsElement =
    document.getElementById("gameOptions");

const gameStatus =
    document.getElementById("gameStatus");

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


/* ---------- Questions ---------- */

const questions = [

    {
        level: 1,

        question:
            "Which device normally connects multiple computers inside a LAN?",

        options: [
            "Router",
            "Switch",
            "Modem",
            "Firewall"
        ],

        answer: "Switch"
    },


    {
        level: 1,

        question:
            "Which device is commonly used to connect different networks?",

        options: [
            "Switch",
            "Router",
            "Keyboard",
            "Monitor"
        ],

        answer: "Router"
    },


    {
        level: 2,

        question:
            "Which IP address is in the private IPv4 range?",

        options: [
            "8.8.8.8",
            "192.168.1.10",
            "1.1.1.1",
            "172.217.10.14"
        ],

        answer: "192.168.1.10"
    },


    {
        level: 2,

        question:
            "What is the default subnet mask for a /24 network?",

        options: [
            "255.0.0.0",
            "255.255.0.0",
            "255.255.255.0",
            "255.255.255.255"
        ],

        answer: "255.255.255.0"
    },


    {
        level: 3,

        question:
            "A PC has IP 192.168.1.20. Which address could be its default gateway?",

        options: [
            "192.168.1.1",
            "8.8.8.8",
            "255.255.255.0",
            "127.0.0.1"
        ],

        answer: "192.168.1.1"
    },


    {
        level: 3,

        question:
            "Which command is commonly used to test network connectivity?",

        options: [
            "ping",
            "mkdir",
            "copy",
            "format"
        ],

        answer: "ping"
    },


    {
        level: 4,

        question:
            "Which protocol automatically assigns IP addresses to clients?",

        options: [
            "DNS",
            "HTTP",
            "DHCP",
            "FTP"
        ],

        answer: "DHCP"
    },


    {
        level: 4,

        question:
            "Which protocol translates domain names into IP addresses?",

        options: [
            "DNS",
            "DHCP",
            "SSH",
            "SMTP"
        ],

        answer: "DNS"
    },


    {
        level: 5,

        question:
            "Which OSI layer is responsible for routing packets?",

        options: [
            "Physical Layer",
            "Data Link Layer",
            "Network Layer",
            "Application Layer"
        ],

        answer: "Network Layer"
    },


    {
        level: 5,

        question:
            "Which protocol is commonly used for secure remote login?",

        options: [
            "FTP",
            "HTTP",
            "SSH",
            "Telnet"
        ],

        answer: "SSH"
    }

];


/* ==========================================
   GAME VARIABLES
========================================== */

let currentQuestion = 0;

let score = 0;

let lives = 3;

let timeLeft = 30;

let timer = null;

let gameStarted = false;

let answered = false;


/* ==========================================
   UPDATE GAME UI
========================================== */

function updateGameUI() {

    if (livesElement) {

        livesElement.textContent = lives;

    }

    if (scoreElement) {

        scoreElement.textContent = score;

    }

    if (timerElement) {

        timerElement.textContent = timeLeft;

    }

    if (levelElement) {

        levelElement.textContent =
            questions[currentQuestion].level;

    }


    const progress =
        ((currentQuestion) /
        questions.length) * 100;

    if (progressBar) {

        progressBar.style.width =
            progress + "%";

    }

}


/* ==========================================
   LOAD QUESTION
========================================== */

function loadQuestion() {

    answered = false;

    const question =
        questions[currentQuestion];


    if (questionElement) {

        questionElement.textContent =
            question.question;

    }


    if (optionsElement) {

        optionsElement.innerHTML = "";

    }


    question.options.forEach(option => {

        const button =
            document.createElement("button");

        button.className =
            "game-option";

        button.textContent =
            option;


        button.addEventListener(
            "click",
            () => checkAnswer(button, option)
        );


        optionsElement.appendChild(button);

    });


    if (gameStatus) {

        gameStatus.textContent =
            "Choose the correct answer.";

        gameStatus.style.color =
            "#38bdf8";

    }


    if (nextQuestion) {

        nextQuestion.style.display =
            "none";

    }


    updateGameUI();

}


/* ==========================================
   CHECK ANSWER
========================================== */

function checkAnswer(button, selectedAnswer) {

    if (!gameStarted || answered) return;

    answered = true;


    const correctAnswer =
        questions[currentQuestion].answer;


    const allButtons =
        document.querySelectorAll(".game-option");


    /* Correct */

    if (selectedAnswer === correctAnswer) {

        button.classList.add("correct");

        score += 100;

        if (gameStatus) {

            gameStatus.textContent =
                "✅ Correct! +100 points";

            gameStatus.style.color =
                "#22c55e";

        }


        allButtons.forEach(btn => {

            btn.disabled = true;

        });


        if (currentQuestion <
            questions.length - 1) {

            nextQuestion.style.display =
                "inline-block";

        } else {

            finishGame();

        }

    }


    /* Wrong */

    else {

        button.classList.add("wrong");

        lives--;

        if (gameStatus) {

            gameStatus.textContent =
                "❌ Wrong Answer!";

            gameStatus.style.color =
                "#ef4444";

        }


        /* Show correct answer */

        allButtons.forEach(btn => {

            if (
                btn.textContent === correctAnswer
            ) {

                btn.classList.add("correct");

            }

            btn.disabled = true;

        });


        updateGameUI();


        if (lives <= 0) {

            endGame();

        } else {

            if (nextQuestion) {

                nextQuestion.style.display =
                    "inline-block";

            }

        }

    }

}


/* ==========================================
   NEXT QUESTION
========================================== */

if (nextQuestion) {

    nextQuestion.addEventListener(
        "click",
        () => {

            currentQuestion++;

            if (
                currentQuestion >=
                questions.length
            ) {

                finishGame();

                return;

            }

            loadQuestion();

        }
    );

}


/* ==========================================
   TIMER
========================================== */

function startTimer() {

    clearInterval(timer);

    timeLeft = 30;

    updateGameUI();


    timer = setInterval(() => {

        timeLeft--;

        updateGameUI();


        if (timeLeft <= 0) {

            clearInterval(timer);

            if (gameStatus) {

                gameStatus.textContent =
                    "⏰ Time's Up!";

                gameStatus.style.color =
                    "#ef4444";

            }


            lives--;

            updateGameUI();


            if (lives <= 0) {

                endGame();

            } else {

                answered = true;

                const buttons =
                    document.querySelectorAll(
                        ".game-option"
                    );

                buttons.forEach(button => {

                    button.disabled = true;

                });

                nextQuestion.style.display =
                    "inline-block";

            }

        }

    }, 1000);

}


/* ==========================================
   START GAME
========================================== */

if (startGame) {

    startGame.addEventListener(
        "click",
        () => {

            gameStarted = true;

            currentQuestion = 0;

            score = 0;

            lives = 3;

            gameResult.style.display =
                "none";

            startGame.style.display =
                "none";

            resetGame.style.display =
                "inline-block";

            loadQuestion();

            startTimer();

        }
    );

}


/* ==========================================
   FINISH GAME
========================================== */

function finishGame() {

    clearInterval(timer);

    gameStarted = false;

    if (optionsElement) {

        optionsElement.innerHTML = "";

    }

    if (questionElement) {

        questionElement.textContent =
            "🏆 All challenges completed!";

    }

    if (gameStatus) {

        gameStatus.textContent =
            "Congratulations!";

        gameStatus.style.color =
            "#22c55e";

    }

    if (nextQuestion) {

        nextQuestion.style.display =
            "none";

    }

    if (progressBar) {

        progressBar.style.width =
            "100%";

    }


    if (gameResult) {

        gameResult.style.display =
            "block";

    }

    if (finalScore) {

        finalScore.textContent =
            score;

    }


    if (finalMessage) {

        if (score >= 900) {

            finalMessage.textContent =
                "🔥 Excellent! You have strong networking knowledge.";

        } else if (score >= 600) {

            finalMessage.textContent =
                "👍 Great job! Keep practicing networking.";

        } else {

            finalMessage.textContent =
                "💪 Good attempt! Practice more and try again.";

        }

    }

}


/* ==========================================
   GAME OVER
========================================== */

function endGame() {

    clearInterval(timer);

    gameStarted = false;

    if (gameStatus) {

        gameStatus.textContent =
            "💀 Game Over!";

        gameStatus.style.color =
            "#ef4444";

    }

    if (optionsElement) {

        optionsElement.innerHTML = "";

    }

    if (questionElement) {

        questionElement.textContent =
            "You ran out of lives.";

    }

    if (nextQuestion) {

        nextQuestion.style.display =
            "none";

    }

    if (gameResult) {

        gameResult.style.display =
            "block";

    }

    if (finalScore) {

        finalScore.textContent =
            score;

    }

    if (finalMessage) {

        finalMessage.textContent =
            "Try again and improve your score!";

    }

}


/* ==========================================
   RESET GAME
========================================== */

function resetGameFunction() {

    clearInterval(timer);

    currentQuestion = 0;

    score = 0;

    lives = 3;

    timeLeft = 30;

    gameStarted = false;

    answered = false;


    if (gameResult) {

        gameResult.style.display =
            "none";

    }


    if (startGame) {

        startGame.style.display =
            "inline-block";

    }


    if (resetGame) {

        resetGame.style.display =
            "inline-block";

    }


    if (questionElement) {

        questionElement.textContent =
            "Press Start Game to begin.";

    }


    if (optionsElement) {

        optionsElement.innerHTML = "";

    }


    if (gameStatus) {

        gameStatus.textContent =
            "Ready?";

        gameStatus.style.color =
            "#38bdf8";

    }


    if (nextQuestion) {

        nextQuestion.style.display =
            "none";

    }


    if (progressBar) {

        progressBar.style.width =
            "0%";

    }


    updateGameUI();

}


/* ==========================================
   RESET BUTTON
========================================== */

if (resetGame) {

    resetGame.addEventListener(
        "click",
        resetGameFunction
    );

}


/* ==========================================
   PLAY AGAIN
========================================== */

if (playAgain) {

    playAgain.addEventListener(
        "click",
        resetGameFunction
    );

}


/* ==========================================
   INITIAL STATE
========================================== */

window.addEventListener("load", () => {

    typing();

    resetGameFunction();

});
