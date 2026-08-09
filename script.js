/* ==========================================
   PARTICLES
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
   TYPING
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

    topBtn.style.display =
        window.scrollY > 300
            ? "block"
            : "none";

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

        document.body.classList.toggle(
            "lights-off"
        );

        const particles =
            document.getElementById(
                "particles-js"
            );

        if (
            document.body.classList.contains(
                "lights-off"
            )
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
   GAME ELEMENTS
========================================== */

const livesElement =
    document.getElementById("lives");

const scoreElement =
    document.getElementById("score");

const levelElement =
    document.getElementById("gameLevel");

const timerElement =
    document.getElementById("gameTimer");

const progressBar =
    document.getElementById(
        "gameProgressBar"
    );

const questionElement =
    document.getElementById(
        "gameQuestion"
    );

const optionsElement =
    document.getElementById(
        "gameOptions"
    );

const gameStatus =
    document.getElementById(
        "gameStatus"
    );

const startGame =
    document.getElementById(
        "startGame"
    );

const nextQuestion =
    document.getElementById(
        "nextQuestion"
    );

const resetGame =
    document.getElementById(
        "resetGame"
    );

const gameResult =
    document.getElementById(
        "gameResult"
    );

const finalScore =
    document.getElementById(
        "finalScore"
    );

const finalMessage =
    document.getElementById(
        "finalMessage"
    );

const playAgain =
    document.getElementById(
        "playAgain"
    );


/* ==========================================
   QUESTIONS
========================================== */

const questions = [

    {
        level: 1,
        question:
            "Which device connects multiple computers in a LAN?",
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
            "Which device connects different networks?",
        options: [
            "Switch",
            "Router",
            "Monitor",
            "Keyboard"
        ],
        answer: "Router"
    },

    {
        level: 1,
        question:
            "Which cable is commonly used for Ethernet networking?",
        options: [
            "UTP",
            "HDMI",
            "USB",
            "VGA"
        ],
        answer: "UTP"
    },

    {
        level: 2,
        question:
            "Which is a private IPv4 address?",
        options: [
            "8.8.8.8",
            "192.168.1.10",
            "1.1.1.1",
            "142.250.1.1"
        ],
        answer: "192.168.1.10"
    },

    {
        level: 2,
        question:
            "What is the subnet mask of a /24 network?",
        options: [
            "255.0.0.0",
            "255.255.0.0",
            "255.255.255.0",
            "255.255.255.255"
        ],
        answer: "255.255.255.0"
    },

    {
        level: 2,
        question:
            "How many usable host addresses are available in a /24 network?",
        options: [
            "254",
            "256",
            "128",
            "512"
        ],
        answer: "254"
    },

    {
        level: 3,
        question:
            "Which address could be a default gateway for 192.168.1.20?",
        options: [
            "192.168.1.1",
            "8.8.8.8",
            "127.0.0.1",
            "255.255.255.0"
        ],
        answer: "192.168.1.1"
    },

    {
        level: 3,
        question:
            "Which command checks basic network connectivity?",
        options: [
            "ping",
            "mkdir",
            "copy",
            "format"
        ],
        answer: "ping"
    },

    {
        level: 3,
        question:
            "What does IP stand for?",
        options: [
            "Internet Protocol",
            "Internal Program",
            "Internet Port",
            "Interface Process"
        ],
        answer: "Internet Protocol"
    },

    {
        level: 4,
        question:
            "Which protocol automatically assigns IP addresses?",
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
            "Which protocol translates domain names to IP addresses?",
        options: [
            "DNS",
            "DHCP",
            "SSH",
            "SMTP"
        ],
        answer: "DNS"
    },

    {
        level: 4,
        question:
            "Which protocol is commonly used for secure web browsing?",
        options: [
            "HTTP",
            "HTTPS",
            "FTP",
            "Telnet"
        ],
        answer: "HTTPS"
    },

    {
        level: 5,
        question:
            "Which OSI layer is responsible for routing?",
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
            "SMTP"
        ],
        answer: "SSH"
    },

    {
        level: 5,
        question:
            "Which device primarily works at OSI Layer 2?",
        options: [
            "Router",
            "Switch",
            "Modem",
            "Firewall"
        ],
        answer: "Switch"
    }

];


/* ==========================================
   GAME VARIABLES
========================================== */

let currentQuestion = 0;

let score = 0;

let lives = 3;

let timeLeft = 30;

let combo = 0;

let timer = null;

let gameStarted = false;

let answered = false;


/* ==========================================
   RANDOMIZE ARRAY
========================================== */

function shuffle(array) {

    const newArray = [...array];

    for (
        let i = newArray.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            newArray[i],
            newArray[j]
        ] = [
            newArray[j],
            newArray[i]
        ];

    }

    return newArray;
}


/* ==========================================
   QUESTION ORDER
========================================== */

let gameQuestions = [];


/* ==========================================
   SOUND EFFECT
========================================== */

function playSound(type) {

    const audioContext =
        new (
            window.AudioContext ||
            window.webkitAudioContext
        )();

    const oscillator =
        audioContext.createOscillator();

    const gain =
        audioContext.createGain();


    oscillator.connect(gain);

    gain.connect(audioContext.destination);


    if (type === "correct") {

        oscillator.frequency.value = 700;

        gain.gain.value = 0.08;

        oscillator.start();

        oscillator.stop(
            audioContext.currentTime + 0.12
        );

    }


    if (type === "wrong") {

        oscillator.frequency.value = 180;

        gain.gain.value = 0.08;

        oscillator.start();

        oscillator.stop(
            audioContext.currentTime + 0.18
        );

    }


    if (type === "level") {

        oscillator.frequency.value = 1000;

        gain.gain.value = 0.08;

        oscillator.start();

        oscillator.stop(
            audioContext.currentTime + 0.25
        );

    }

}


/* ==========================================
   SCREEN SHAKE
========================================== */

function screenShake() {

    const game =
        document.getElementById(
            "routing-game"
        );

    if (!game) return;

    game.classList.remove("game-shake");

    void game.offsetWidth;

    game.classList.add("game-shake");

}


/* ==========================================
   UPDATE UI
========================================== */

function updateGameUI() {

    if (livesElement) {

        livesElement.textContent =
            lives;

    }

    if (scoreElement) {

        scoreElement.textContent =
            score;

    }

    if (timerElement) {

        timerElement.textContent =
            timeLeft;

    }

    if (levelElement) {

        const level =
            gameQuestions[currentQuestion]
                ?.level || 1;

        levelElement.textContent =
            level;

    }


    const progress =
        (
            currentQuestion /
            gameQuestions.length
        ) * 100;


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

    clearInterval(timer);

    timeLeft = 30;


    const question =
        gameQuestions[currentQuestion];


    if (!question) {

        finishGame();

        return;

    }


    if (questionElement) {

        questionElement.textContent =
            question.question;

    }


    if (optionsElement) {

        optionsElement.innerHTML = "";

    }


    const shuffledOptions =
        shuffle(question.options);


    shuffledOptions.forEach(option => {

        const button =
            document.createElement(
                "button"
            );

        button.className =
            "game-option";

        button.textContent =
            option;


        button.addEventListener(
            "click",
            () => {

                checkAnswer(
                    button,
                    option
                );

            }
        );


        optionsElement.appendChild(
            button
        );

    });


    if (gameStatus) {

        gameStatus.textContent =
            "🎯 Choose the correct answer.";

        gameStatus.style.color =
            "#38bdf8";

    }


    if (nextQuestion) {

        nextQuestion.style.display =
            "none";

    }


    updateGameUI();

    startTimer();

}


/* ==========================================
   CHECK ANSWER
========================================== */

function checkAnswer(
    button,
    selectedAnswer
) {

    if (!gameStarted || answered) {
        return;
    }


    answered = true;

    clearInterval(timer);


    const question =
        gameQuestions[currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".game-option"
        );


    /* ==========================
       CORRECT
    ========================== */

    if (
        selectedAnswer ===
        question.answer
    ) {

        button.classList.add(
            "correct"
        );


        combo++;


        let points = 100;


        /* Combo Bonus */

        if (combo >= 2) {

            points += combo * 25;

        }


        score += points;


        playSound("correct");


        if (gameStatus) {

            gameStatus.textContent =
                `✅ Correct! +${points} points 🔥 Combo x${combo}`;

            gameStatus.style.color =
                "#22c55e";

        }


        buttons.forEach(btn => {

            btn.disabled = true;

        });


        updateGameUI();


        /* Last question */

        if (
            currentQuestion >=
            gameQuestions.length - 1
        ) {

            setTimeout(
                finishGame,
                700
            );

        } else {

            nextQuestion.style.display =
                "inline-block";

        }

    }


    /* ==========================
       WRONG
    ========================== */

    else {

        button.classList.add(
            "wrong"
        );


        lives--;

        combo = 0;


        playSound("wrong");

        screenShake();


        buttons.forEach(btn => {

            if (
                btn.textContent ===
                question.answer
            ) {

                btn.classList.add(
                    "correct"
                );

            }

            btn.disabled = true;

        });


        if (gameStatus) {

            gameStatus.textContent =
                `❌ Wrong! Correct answer: ${question.answer}`;

            gameStatus.style.color =
                "#ef4444";

        }


        updateGameUI();


        if (lives <= 0) {

            setTimeout(
                endGame,
                800
            );

        } else {

            nextQuestion.style.display =
                "inline-block";

        }

    }

}


/* ==========================================
   TIMER
========================================== */

function startTimer() {

    clearInterval(timer);


    timer = setInterval(() => {

        timeLeft--;

        updateGameUI();


        if (timeLeft <= 5) {

            if (timerElement) {

                timerElement.style.color =
                    "#ef4444";

            }

        } else {

            if (timerElement) {

                timerElement.style.color =
                    "#38bdf8";

            }

        }


        if (timeLeft <= 0) {

            clearInterval(timer);

            timeOut();

        }

    }, 1000);

}


/* ==========================================
   TIME OUT
========================================== */

function timeOut() {

    if (answered) return;

    answered = true;

    lives--;

    combo = 0;

    playSound("wrong");

    screenShake();


    const question =
        gameQuestions[currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".game-option"
        );


    buttons.forEach(button => {

        if (
            button.textContent ===
            question.answer
        ) {

            button.classList.add(
                "correct"
            );

        }

        button.disabled = true;

    });


    if (gameStatus) {

        gameStatus.textContent =
            `⏰ Time's Up! Answer: ${question.answer}`;

        gameStatus.style.color =
            "#ef4444";

    }


    updateGameUI();


    if (lives <= 0) {

        setTimeout(
            endGame,
            800
        );

    } else {

        nextQuestion.style.display =
            "inline-block";

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

            loadQuestion();

        }
    );

}


/* ==========================================
   START GAME
========================================== */

if (startGame) {

    startGame.addEventListener(
        "click",
        () => {

            gameStarted = true;

            score = 0;

            lives = 3;

            combo = 0;

            currentQuestion = 0;


            /* Random Questions */

            gameQuestions =
                shuffle(questions);


            startGame.style.display =
                "none";


            if (gameResult) {

                gameResult.style.display =
                    "none";

            }


            loadQuestion();

        }
    );

}


/* ==========================================
   FINISH GAME
========================================== */

function finishGame() {

    clearInterval(timer);

    gameStarted = false;

    playSound("level");


    if (optionsElement) {

        optionsElement.innerHTML =
            "";

    }


    if (questionElement) {

        questionElement.textContent =
            "🏆 Network Challenge Complete!";

    }


    if (gameStatus) {

        gameStatus.textContent =
            "🔥 Excellent Networking Skills!";

        gameStatus.style.color =
            "#22c55e";

    }


    if (progressBar) {

        progressBar.style.width =
            "100%";

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

        if (score >= 1500) {

            finalMessage.textContent =
                "🏆 Legendary Network Engineer!";

        }

        else if (score >= 1000) {

            finalMessage.textContent =
                "🔥 Excellent! Your networking knowledge is strong.";

        }

        else if (score >= 600) {

            finalMessage.textContent =
                "👍 Great job! Keep practicing.";

        }

        else {

            finalMessage.textContent =
                "💪 Good attempt! Try again for a higher score.";

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

        optionsElement.innerHTML =
            "";

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
            "💪 Don't give up! Try again and beat your score.";

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

    combo = 0;

    timeLeft = 30;

    gameStarted = false;

    answered = false;

    gameQuestions = [];


    if (gameResult) {

        gameResult.style.display =
            "none";

    }


    if (startGame) {

        startGame.style.display =
            "inline-block";

    }


    if (questionElement) {

        questionElement.textContent =
            "Press Start Game to begin.";

    }


    if (optionsElement) {

        optionsElement.innerHTML =
            "";

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


    if (timerElement) {

        timerElement.style.color =
            "#38bdf8";

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
   START WEBSITE
========================================== */

window.addEventListener(
    "load",
    () => {

        typing();

        resetGameFunction();

    }
);
