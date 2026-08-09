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

const typingElement = document.getElementById("typing");

const typingText = "Aspiring Network Engineer";

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

const topBtn = document.getElementById("topBtn");

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
   NETWORK TROUBLESHOOTER
========================================== */


/* ---------- HTML Elements ---------- */

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

let gameQuestions = [];

let currentQuestion = 0;

let score = 0;

let lives = 3;

let combo = 0;

let timeLeft = 30;

let timer = null;

let gameStarted = false;

let answered = false;


/* ==========================================
   SHUFFLE
========================================== */

function shuffle(array) {

    const copy = [...array];

    for (
        let i = copy.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            copy[i],
            copy[j]
        ] = [
            copy[j],
            copy[i]
        ];
    }

    return copy;
}


/* ==========================================
   SOUND
========================================== */

function playSound(type) {

    try {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;

        if (!AudioContext) return;

        const audio =
            new AudioContext();

        const oscillator =
            audio.createOscillator();

        const gain =
            audio.createGain();

        oscillator.connect(gain);

        gain.connect(audio.destination);


        if (type === "correct") {

            oscillator.frequency.value = 700;

            gain.gain.value = 0.08;

            oscillator.start();

            oscillator.stop(
                audio.currentTime + 0.12
            );
        }


        if (type === "wrong") {

            oscillator.frequency.value = 180;

            gain.gain.value = 0.08;

            oscillator.start();

            oscillator.stop(
                audio.currentTime + 0.18
            );
        }


        if (type === "complete") {

            oscillator.frequency.value = 1000;

            gain.gain.value = 0.08;

            oscillator.start();

            oscillator.stop(
                audio.currentTime + 0.25
            );
        }

    } catch (error) {

        console.log("Sound unavailable.");

    }

}


/* ==========================================
   SCREEN SHAKE
========================================== */

function screenShake() {

    const game =
        document.getElementById("routing-game");

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
        livesElement.textContent = lives;
    }

    if (scoreElement) {
        scoreElement.textContent = score;
    }

    if (timerElement) {
        timerElement.textContent = timeLeft;
    }

    if (levelElement) {

        if (gameQuestions.length > 0) {

            const current =
                gameQuestions[currentQuestion];

            levelElement.textContent =
                current ? current.level : 1;

        } else {

            levelElement.textContent = 1;

        }

    }


    if (progressBar) {

        if (gameQuestions.length > 0) {

            const progress =
                (currentQuestion /
                    gameQuestions.length) * 100;

            progressBar.style.width =
                progress + "%";

        } else {

            progressBar.style.width = "0%";

        }

    }

}


/* ==========================================
   LOAD QUESTION
========================================== */

function loadQuestion() {

    clearInterval(timer);

    answered = false;

    timeLeft = 30;


    const question =
        gameQuestions[currentQuestion];


    if (!question) {

        finishGame();

        return;

    }


    /* Question */

    questionElement.textContent =
        question.question;


    /* Clear old options ONLY
       when loading a NEW question */

    optionsElement.innerHTML = "";


    /* Randomize options */

    const shuffledOptions =
        shuffle(question.options);


    shuffledOptions.forEach(option => {

        const button =
            document.createElement("button");

        button.className =
            "game-option";

        button.textContent =
            option;


        button.addEventListener(
            "click",
            function () {

                checkAnswer(
                    button,
                    option
                );

            }
        );


        optionsElement.appendChild(button);

    });


    /* Status */

    gameStatus.textContent =
        "🎯 Choose the correct answer.";

    gameStatus.style.color =
        "#38bdf8";


    /* Hide Next */

    nextQuestion.style.display =
        "none";


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

    if (!gameStarted) return;

    if (answered) return;


    answered = true;

    clearInterval(timer);


    const question =
        gameQuestions[currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".game-option"
        );


    /* ======================================
       CORRECT
    ====================================== */

    if (
        selectedAnswer ===
        question.answer
    ) {

        button.classList.add(
            "correct"
        );


        combo++;


        let points = 100;


        if (combo >= 2) {

            points +=
                combo * 25;

        }


        score += points;


        playSound("correct");


        gameStatus.textContent =
            `✅ Correct! +${points} points 🔥 Combo x${combo}`;

        gameStatus.style.color =
            "#22c55e";


        buttons.forEach(btn => {

            btn.disabled = true;

        });


        updateGameUI();


        /* Last question */

        if (
            currentQuestion ===
            gameQuestions.length - 1
        ) {

            nextQuestion.style.display =
                "none";


            setTimeout(() => {

                finishGame();

            }, 700);

        }

        /* More questions */

        else {

            nextQuestion.style.display =
                "inline-block";

        }

    }


    /* ======================================
       WRONG
    ====================================== */

    else {

        button.classList.add(
            "wrong"
        );


        lives--;

        combo = 0;


        playSound("wrong");

        screenShake();


        /* Show correct answer */

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


        /* IMPORTANT:
           Question stays visible.
           Options stay visible.
           Nothing is removed here. */


        gameStatus.textContent =
            `❌ Wrong! Correct Answer: ${question.answer}`;

        gameStatus.style.color =
            "#ef4444";


        updateGameUI();


        /* Lives finished */

        if (lives <= 0) {

            gameStatus.textContent =
                `💀 Game Over! Correct Answer: ${question.answer}`;

            gameStatus.style.color =
                "#ef4444";


            nextQuestion.style.display =
                "none";


            /*
              Question এবং options
              এখানেই থাকবে।
            */

        }

        /* Still have lives */

        else {

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

        if (!gameStarted) {

            clearInterval(timer);

            return;

        }


        timeLeft--;


        updateGameUI();


        if (timerElement) {

            if (timeLeft <= 5) {

                timerElement.style.color =
                    "#ef4444";

            } else {

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


    gameStatus.textContent =
        `⏰ Time's Up! Correct Answer: ${question.answer}`;

    gameStatus.style.color =
        "#ef4444";


    updateGameUI();


    if (lives <= 0) {

        gameStatus.textContent =
            `💀 Game Over! Correct Answer: ${question.answer}`;

        nextQuestion.style.display =
            "none";

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
        function () {

            if (!gameStarted) return;


            currentQuestion++;


            if (
                currentQuestion >=
                gameQuestions.length
            ) {

                finishGame();

                return;

            }


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
        function () {

            clearInterval(timer);


            gameStarted = true;

            currentQuestion = 0;

            score = 0;

            lives = 3;

            combo = 0;

            timeLeft = 30;


            /*
              সব প্রশ্ন random order
            */

            gameQuestions =
                shuffle(questions);


            startGame.style.display =
                "none";


            resetGame.style.display =
                "inline-block";


            gameResult.style.display =
                "none";


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


    playSound("complete");


    optionsElement.innerHTML = "";


    questionElement.textContent =
        "🏆 Network Challenge Complete!";


    gameStatus.textContent =
        "🔥 Excellent Networking Skills!";

    gameStatus.style.color =
        "#22c55e";


    nextQuestion.style.display =
        "none";


    progressBar.style.width =
        "100%";


    gameResult.style.display =
        "block";


    finalScore.textContent =
        score;


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
            "💪 Good attempt! Try again and beat your score.";

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

        timerElement.textContent =
            "30";

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
        function () {

            resetGameFunction();

        }
    );

}


/* ==========================================
   WEBSITE LOAD
========================================== */

window.addEventListener(
    "load",
    function () {

        typing();

        resetGameFunction();

    }
);
