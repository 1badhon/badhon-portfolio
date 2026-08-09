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

    powerSwitch.addEventListener(
        "click",
        () => {

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
                    particles.style.display =
                        "none";
                }

            } else {

                if (particles) {
                    particles.style.display =
                        "block";
                }

            }

        }
    );

}


/* ==========================================
   NETWORK TROUBLESHOOTER GAME
========================================== */


/* ==========================================
   HTML ELEMENTS
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

            oscillator.frequency.value =
                700;

            gain.gain.value =
                0.08;

            oscillator.start();

            oscillator.stop(
                audio.currentTime + 0.12
            );
        }


        if (type === "wrong") {

            oscillator.frequency.value =
                180;

            gain.gain.value =
                0.08;

            oscillator.start();

            oscillator.stop(
                audio.currentTime + 0.18
            );
        }


        if (type === "complete") {

            oscillator.frequency.value =
                1000;

            gain.gain.value =
                0.08;

            oscillator.start();

            oscillator.stop(
                audio.currentTime + 0.25
            );
        }

    } catch (error) {

        console.log(
            "Sound unavailable."
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

    game.classList.remove(
        "game-shake"
    );

    void game.offsetWidth;

    game.classList.add(
        "game-shake"
    );

}


/* ==========================================
   UPDATE GAME UI
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

        if (gameQuestions.length > 0) {

            const current =
                gameQuestions[
                    currentQuestion
                ];

            levelElement.textContent =
                current
                    ? current.level
                    : 1;

        } else {

            levelElement.textContent =
                1;

        }

    }


    if (progressBar) {

        if (gameQuestions.length > 0) {

            const progress =
                (
                    currentQuestion /
                    gameQuestions.length
                ) * 100;

            progressBar.style.width =
                progress + "%";

        } else {

            progressBar.style.width =
                "0%";

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
        gameQuestions[
            currentQuestion
        ];


    if (!question) {

        finishGame();

        return;

    }


    /* -------------------------------
       Show Question
    ------------------------------- */

    questionElement.textContent =
        question.question;


    /* -------------------------------
       Clear ONLY when loading
       a NEW question
    ------------------------------- */

    optionsElement.innerHTML =
        "";


    /* -------------------------------
       Random Options
    ------------------------------- */

    const shuffledOptions =
        shuffle(
            question.options
        );


    shuffledOptions.forEach(
        option => {

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

        }
    );


    /* -------------------------------
       Status
    ------------------------------- */

    gameStatus.textContent =
        "🎯 Choose the correct answer.";

    gameStatus.style.color =
        "#38bdf8";


    /* -------------------------------
       Hide Next
    ------------------------------- */

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

    /* Prevent double click */

    if (!gameStarted) return;

    if (answered) return;


    answered = true;

    clearInterval(timer);


    const question =
        gameQuestions[
            currentQuestion
        ];


    const buttons =
        optionsElement.querySelectorAll(
            ".game-option"
        );


    /* ======================================
       CORRECT ANSWER
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


        playSound(
            "correct"
        );


        gameStatus.textContent =
            `✅ Correct! +${points} points 🔥 Combo x${combo}`;

        gameStatus.style.color =
            "#22c55e";


        /* Disable buttons */

        buttons.forEach(
            btn => {

                btn.disabled =
                    true;

            }
        );


        updateGameUI();


        /* Last question */

        if (
            currentQuestion ===
            gameQuestions.length - 1
        ) {

            /*
              এখানে সঙ্গে সঙ্গে
              question remove করা হবে না।
            */

            gameStatus.textContent =
                "🎉 Final Question Complete!";

            nextQuestion.style.display =
                "inline-block";


        } else {

            nextQuestion.style.display =
                "inline-block";

        }

    }


    /* ======================================
       WRONG ANSWER
    ====================================== */

    else {

        button.classList.add(
            "wrong"
        );


        lives--;

        combo = 0;


        playSound(
            "wrong"
        );

        screenShake();


        /*
          IMPORTANT:

          এখানে কোনো HTML clear করা হবে না।

          Question থাকবে।
          Options থাকবে।
        */


        buttons.forEach(
            btn => {

                /*
                  Correct answer সবুজ
                */

                if (
                    btn.textContent.trim() ===
                    question.answer.trim()
                ) {

                    btn.classList.add(
                        "correct"
                    );

                }


                /*
                  সব options disable
                */

                btn.disabled =
                    true;

            }
        );


        updateGameUI();


        /* --------------------------------
           Lives আছে
        -------------------------------- */

        if (lives > 0) {

            gameStatus.textContent =
                `❌ Wrong Answer! Correct Answer: ${question.answer}`;

            gameStatus.style.color =
                "#ef4444";


            /*
              Next Question এখন visible
            */

            nextQuestion.style.display =
                "inline-block";

        }


        /* --------------------------------
           Lives শেষ
        -------------------------------- */

        else {

            gameStatus.textContent =
                `💀 Game Over! Correct Answer: ${question.answer}`;

            gameStatus.style.color =
                "#ef4444";


            /*
              IMPORTANT:

              Question/options থাকবে।
              শুধু Next Question hide হবে।
            */

            nextQuestion.style.display =
                "none";


            /*
              Result screen এখনই
              show করা হবে না।
            */

        }

    }

}


/* ==========================================
   TIMER
========================================== */

function startTimer() {

    clearInterval(timer);


    timer =
        setInterval(
            () => {

                if (!gameStarted) {

                    clearInterval(
                        timer
                    );

                    return;

                }


                if (answered) {

                    clearInterval(
                        timer
                    );

                    return;

                }


                timeLeft--;


                updateGameUI();


                if (timerElement) {

                    if (
                        timeLeft <= 5
                    ) {

                        timerElement.style.color =
                            "#ef4444";

                    } else {

                        timerElement.style.color =
                            "#38bdf8";

                    }

                }


                if (timeLeft <= 0) {

                    clearInterval(
                        timer
                    );

                    timeOut();

                }

            },
            1000
        );

}


/* ==========================================
   TIME OUT
========================================== */

function timeOut() {

    if (answered) return;


    answered = true;

    clearInterval(timer);


    lives--;

    combo = 0;


    playSound(
        "wrong"
    );

    screenShake();


    const question =
        gameQuestions[
            currentQuestion
        ];


    const buttons =
        optionsElement.querySelectorAll(
            ".game-option"
        );


    /*
      Correct answer show
    */

    buttons.forEach(
        button => {

            if (
                button.textContent.trim() ===
                question.answer.trim()
            ) {

                button.classList.add(
                    "correct"
                );

            }

            button.disabled =
                true;

        }
    );


    updateGameUI();


    if (lives > 0) {

        gameStatus.textContent =
            `⏰ Time's Up! Correct Answer: ${question.answer}`;

        gameStatus.style.color =
            "#ef4444";


        nextQuestion.style.display =
            "inline-block";

    }


    else {

        gameStatus.textContent =
            `💀 Game Over! Correct Answer: ${question.answer}`;

        gameStatus.style.color =
            "#ef4444";


        nextQuestion.style.display =
            "none";

    }

}


/* ==========================================
   NEXT QUESTION
========================================== */

if (nextQuestion) {

    nextQuestion.addEventListener(
        "click",
        () => {

            if (!gameStarted) return;


            /*
              যদি lives শেষ হয়ে যায়
              তাহলে next question যাবে না।
            */

            if (lives <= 0) {

                return;

            }


            currentQuestion++;


            /*
              সব প্রশ্ন শেষ
            */

            if (
                currentQuestion >=
                gameQuestions.length
            ) {

                finishGame();

                return;

            }


            /*
              নতুন question
            */

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

            clearInterval(timer);


            gameStarted =
                true;

            currentQuestion =
                0;

            score =
                0;

            lives =
                3;

            combo =
                0;

            timeLeft =
                30;

            answered =
                false;


            /*
              Questions random
            */

            gameQuestions =
                shuffle(
                    questions
                );


            startGame.style.display =
                "none";


            if (resetGame) {

                resetGame.style.display =
                    "inline-block";

            }


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

    gameStarted =
        false;


    playSound(
        "complete"
    );


    /*
      ONLY HERE
      question/options clear হবে।
    */

    optionsElement.innerHTML =
        "";


    questionElement.textContent =
        "🏆 Network Challenge Complete!";


    gameStatus.textContent =
        "🔥 Excellent Networking Skills!";

    gameStatus.style.color =
        "#22c55e";


    nextQuestion.style.display =
        "none";


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

}


/* ==========================================
   RESET GAME
========================================== */

function resetGameFunction() {

    clearInterval(timer);


    currentQuestion =
        0;

    score =
        0;

    lives =
        3;

    combo =
        0;

    timeLeft =
        30;

    gameStarted =
        false;

    answered =
        false;

    gameQuestions =
        [];


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
            "none";

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
        () => {

            resetGameFunction();

        }
    );

}


/* ==========================================
   WEBSITE LOAD
========================================== */

window.addEventListener(
    "load",
    () => {

        typing();

        resetGameFunction();

    }
);
/* ==========================================
   SCROLL HAMBURGER MENU
========================================== */

const navbar = document.querySelector("nav");
const menuToggle = document.getElementById("menuToggle");

if (navbar && menuToggle) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 100) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");
            navbar.classList.remove("menu-open");

        }

    });


    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("menu-open");

    });


    /* Menu option click করলে menu বন্ধ */

    const menuLinks =
        navbar.querySelectorAll("ul a");

    menuLinks.forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove(
                "menu-open"
            );

        });

    });

}
/* =========================================
   REALISTIC BOOK PAGE TURN
========================================= */

const blogBook = document.getElementById("blogBook");
const prevPage = document.getElementById("prevPage");
const nextPage = document.getElementById("nextPage");
const bookPageNumber = document.getElementById("bookPageNumber");

let currentSpread = 1;
let isTurning = false;

const totalSpreads = 3;


/* =========================================
   GET PAGE
========================================= */

function getPage(number) {

    if (number === 1) {
        return blogBook.querySelector(".left-page");
    }

    if (number === 2) {
        return blogBook.querySelector(".right-page");
    }

    return blogBook.querySelector(`.page-${number}`);
}


/* =========================================
   CLEAR
========================================= */

function clearPages() {

    blogBook.querySelectorAll(".book-page").forEach(page => {

        page.classList.remove(
            "book-visible",
            "book-left",
            "book-right",
            "flip-forward",
            "flip-backward"
        );

    });

}


/* =========================================
   SHOW SPREAD
========================================= */

function showSpread(spread) {

    clearPages();


    let leftNumber;
    let rightNumber;


    if (spread === 1) {

        leftNumber = 1;
        rightNumber = 2;

    }

    if (spread === 2) {

        leftNumber = 3;
        rightNumber = 4;

    }

    if (spread === 3) {

        leftNumber = 5;
        rightNumber = 6;

    }


    const leftPage = getPage(leftNumber);
    const rightPage = getPage(rightNumber);


    if (leftPage) {

        leftPage.classList.add(
            "book-left",
            "book-visible"
        );

    }


    if (rightPage) {

        rightPage.classList.add(
            "book-right",
            "book-visible"
        );

    }


    bookPageNumber.textContent =
        `${leftNumber}–${rightNumber} / 6`;


    prevPage.disabled =
        spread === 1;

    nextPage.disabled =
        spread === totalSpreads;
}


/* =========================================
   NEXT PAGE
========================================= */

nextPage.addEventListener("click", () => {

    if (
        isTurning ||
        currentSpread >= totalSpreads
    ) return;


    isTurning = true;


    const oldLeft =
        getPage(
            currentSpread === 1
                ? 1
                : currentSpread === 2
                    ? 3
                    : 5
        );


    const oldRight =
        getPage(
            currentSpread === 1
                ? 2
                : currentSpread === 2
                    ? 4
                    : 6
        );


    /* নতুন page আগে দেখাও */

    currentSpread++;

    const newLeft =
        getPage(
            currentSpread === 2
                ? 3
                : 5
        );


    const newRight =
        getPage(
            currentSpread === 2
                ? 4
                : 6
        );


    if (newLeft) {

        newLeft.classList.add(
            "book-left",
            "book-visible"
        );

    }


    if (newRight) {

        newRight.classList.add(
            "book-right",
            "book-visible"
        );

    }


    /* পুরোনো ডান পাতা উল্টাবে */

    if (oldRight) {

        oldRight.classList.add(
            "flip-forward"
        );

    }


    /* Page number */

    bookPageNumber.textContent =
        `${
            currentSpread === 2 ? "3–4" : "5–6"
        } / 6`;


    prevPage.disabled = false;

    nextPage.disabled =
        currentSpread === totalSpreads;


    setTimeout(() => {

        clearPages();

        showSpread(currentSpread);

        isTurning = false;

    }, 1250);

});


/* =========================================
   PREVIOUS PAGE
========================================= */

prevPage.addEventListener("click", () => {

    if (
        isTurning ||
        currentSpread <= 1
    ) return;


    isTurning = true;


    const oldSpread = currentSpread;


    /* আগের spread */

    currentSpread--;


    const oldLeft =
        getPage(
            oldSpread === 2
                ? 3
                : 5
        );


    const oldRight =
        getPage(
            oldSpread === 2
                ? 4
                : 6
        );


    const previousLeft =
        getPage(
            currentSpread === 1
                ? 1
                : 3
        );


    const previousRight =
        getPage(
            currentSpread === 1
                ? 2
                : 4
        );


    if (previousLeft) {

        previousLeft.classList.add(
            "book-left",
            "book-visible"
        );

    }


    if (previousRight) {

        previousRight.classList.add(
            "book-right",
            "book-visible"
        );

    }


    /* পুরোনো পাতা reverse animation */

    if (oldLeft) {

        oldLeft.classList.add(
            "flip-backward"
        );

    }


    bookPageNumber.textContent =
        `${
            currentSpread === 1 ? "1–2" : "3–4"
        } / 6`;


    nextPage.disabled = false;

    prevPage.disabled =
        currentSpread === 1;


    setTimeout(() => {

        clearPages();

        showSpread(currentSpread);

        isTurning = false;

    }, 1250);

});


/* =========================================
   START
========================================= */

showSpread(1);
