/* =====================================================
   PORTFOLIO JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       NAVBAR MENU
    ================================================= */

    const menuToggle = document.getElementById("menuToggle");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav ul li a");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", function () {

            nav.classList.toggle("menu-open");

        });

    }

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (nav) {
                nav.classList.remove("menu-open");
            }

        });

    });


    /* =================================================
       POWER SWITCH
    ================================================= */

    const powerSwitch = document.getElementById("powerSwitch");

    if (powerSwitch) {

        powerSwitch.addEventListener("click", function () {

            document.body.classList.toggle("lights-off");

        });

    }


    /* =================================================
       TYPING EFFECT
    ================================================= */

    const typingElement = document.getElementById("typing");

    if (typingElement) {

        const text = "Aspiring Network Engineer";

        let index = 0;

        function typeText() {

            if (index < text.length) {

                typingElement.textContent += text.charAt(index);

                index++;

                setTimeout(typeText, 100);

            }

        }

        typeText();

    }


    /* =================================================
       NETWORKING BOOK
    ================================================= */

    const pages = document.querySelectorAll(".flip-page");
    const prevPage = document.getElementById("prevPage");
    const nextPage = document.getElementById("nextPage");
    const bookPageNumber = document.getElementById("bookPageNumber");

    let currentBookPage = 0;


    function updateBook() {

        if (!pages.length) {
            return;
        }

        pages.forEach(function (page) {

            page.classList.remove("active-page");

        });


        if (pages[currentBookPage]) {

            pages[currentBookPage].classList.add("active-page");

        }


        if (
            pages[currentBookPage + 1]
        ) {

            pages[currentBookPage + 1].classList.add("active-page");

        }


        if (bookPageNumber) {

            let first = currentBookPage + 1;

            let second = Math.min(
                currentBookPage + 2,
                pages.length
            );

            bookPageNumber.textContent =
                first + "–" + second + " / " + pages.length;

        }

    }


    if (nextPage) {

        nextPage.addEventListener("click", function () {

            if (currentBookPage + 2 < pages.length) {

                currentBookPage += 2;

                updateBook();

            }

        });

    }


    if (prevPage) {

        prevPage.addEventListener("click", function () {

            if (currentBookPage - 2 >= 0) {

                currentBookPage -= 2;

                updateBook();

            }

        });

    }


    updateBook();


    /* =================================================
       NETWORK TROUBLESHOOTER GAME
    ================================================= */

    const startLab = document.getElementById("startLab");
    const nextQuestion = document.getElementById("nextQuestion");
    const resetGame = document.getElementById("resetGame");
    const playAgain = document.getElementById("playAgain");

    const livesElement = document.getElementById("lives");
    const scoreElement = document.getElementById("score");
    const levelElement = document.getElementById("gameLevel");
    const timerElement = document.getElementById("gameTimer");

    const progressBar =
        document.getElementById("gameProgressBar");

    const questionElement =
        document.getElementById("gameQuestion");

    const optionsElement =
        document.getElementById("gameOptions");

    const statusElement =
        document.getElementById("gameStatus");

    const resultElement =
        document.getElementById("gameResult");

    const finalScoreElement =
        document.getElementById("finalScore");

    const finalMessageElement =
        document.getElementById("finalMessage");


    /* ================================================
       QUESTIONS
    ================================================= */

    const questions = [

        {
            question: "Which device connects different networks?",

            options: [
                "Switch",
                "Router",
                "Hub",
                "Repeater"
            ],

            answer: "Router"
        },


        {
            question: "What does IP stand for?",

            options: [
                "Internet Protocol",
                "Internal Process",
                "Internet Port",
                "Input Protocol"
            ],

            answer: "Internet Protocol"
        },


        {
            question: "Which protocol automatically assigns IP addresses?",

            options: [
                "DNS",
                "HTTP",
                "DHCP",
                "FTP"
            ],

            answer: "DHCP"
        },


        {
            question: "Which device mainly works inside a LAN to connect devices?",

            options: [
                "Router",
                "Switch",
                "Modem",
                "Firewall"
            ],

            answer: "Switch"
        },


        {
            question: "What is the purpose of DNS?",

            options: [
                "Assign IP addresses",
                "Translate domain names to IP addresses",
                "Encrypt Wi-Fi",
                "Connect two switches"
            ],

            answer: "Translate domain names to IP addresses"
        }

    ];


    /* ================================================
       GAME VARIABLES
    ================================================= */

    let currentQuestion = 0;
    let score = 0;
    let lives = 3;
    let timeLeft = 30;
    let timer = null;
    let gameStarted = false;


    /* ================================================
       UPDATE GAME INFO
    ================================================= */

    function updateGameInfo() {

        if (livesElement) {

            livesElement.textContent = lives;

        }

        if (scoreElement) {

            scoreElement.textContent = score;

        }

        if (levelElement) {

            levelElement.textContent =
                Math.min(currentQuestion + 1, 5);

        }

        if (timerElement) {

            timerElement.textContent = timeLeft;

        }

    }


    /* ================================================
       START TIMER
    ================================================= */

    function startTimer() {

        clearInterval(timer);

        timer = setInterval(function () {

            timeLeft--;

            updateGameInfo();


            if (timeLeft <= 0) {

                clearInterval(timer);

                lives--;

                updateGameInfo();

                if (statusElement) {

                    statusElement.textContent =
                        "⏰ Time's up!";

                }

                if (lives <= 0) {

                    endGame();

                } else {

                    if (nextQuestion) {

                        nextQuestion.style.display = "inline-block";

                    }

                    disableOptions();

                }

            }

        }, 1000);

    }


    /* ================================================
       LOAD QUESTION
    ================================================= */

    function loadQuestion() {

        if (!questionElement || !optionsElement) {

            return;

        }


        if (currentQuestion >= questions.length) {

            endGame();

            return;

        }


        const question =
            questions[currentQuestion];


        questionElement.textContent =
            question.question;


        optionsElement.innerHTML = "";


        question.options.forEach(function (option) {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className = "game-option";

            button.textContent = option;


            button.addEventListener("click", function () {

                checkAnswer(option, button);

            });


            optionsElement.appendChild(button);

        });


        if (statusElement) {

            statusElement.textContent =
                "Choose the correct answer!";

        }


        if (nextQuestion) {

            nextQuestion.style.display = "none";

        }


        timeLeft = 30;

        updateGameInfo();

        startTimer();


        if (progressBar) {

            const progress =
                (currentQuestion /
                    questions.length) * 100;

            progressBar.style.width =
                progress + "%";

        }

    }


    /* ================================================
       CHECK ANSWER
    ================================================= */

    function checkAnswer(selectedAnswer, clickedButton) {

        clearInterval(timer);


        const correctAnswer =
            questions[currentQuestion].answer;


        const allButtons =
            document.querySelectorAll(".game-option");


        allButtons.forEach(function (button) {

            button.disabled = true;

        });


        if (selectedAnswer === correctAnswer) {

            score += 10;

            clickedButton.classList.add("correct");

            if (statusElement) {

                statusElement.textContent =
                    "✅ Correct! Great job!";

            }

        } else {

            lives--;

            clickedButton.classList.add("wrong");


            allButtons.forEach(function (button) {

                if (
                    button.textContent ===
                    correctAnswer
                ) {

                    button.classList.add("correct");

                }

            });


            if (statusElement) {

                statusElement.textContent =
                    "❌ Wrong answer!";

            }

        }


        updateGameInfo();


        if (lives <= 0) {

            setTimeout(function () {

                endGame();

            }, 1000);

            return;

        }


        if (nextQuestion) {

            nextQuestion.style.display =
                "inline-block";

        }

    }


    /* ================================================
       DISABLE OPTIONS
    ================================================= */

    function disableOptions() {

        const buttons =
            document.querySelectorAll(".game-option");


        buttons.forEach(function (button) {

            button.disabled = true;

        });

    }


    /* ================================================
       NEXT QUESTION
    ================================================= */

    if (nextQuestion) {

        nextQuestion.addEventListener("click", function () {

            currentQuestion++;

            loadQuestion();

        });

    }


    /* ================================================
       START GAME
    ================================================= */

    function startGame() {

        currentQuestion = 0;

        score = 0;

        lives = 3;

        timeLeft = 30;

        gameStarted = true;


        if (resultElement) {

            resultElement.style.display = "none";

        }


        if (startLab) {

            startLab.style.display = "none";

        }


        if (statusElement) {

            statusElement.textContent =
                "Game started!";

        }


        updateGameInfo();

        loadQuestion();

    }


    /* ================================================
       RESET GAME
    ================================================= */

    function restartGame() {

        clearInterval(timer);


        currentQuestion = 0;

        score = 0;

        lives = 3;

        timeLeft = 30;

        gameStarted = false;


        if (questionElement) {

            questionElement.textContent =
                "Click Start Game to begin!";

        }


        if (optionsElement) {

            optionsElement.innerHTML = "";

        }


        if (statusElement) {

            statusElement.textContent =
                "Ready?";

        }


        if (resultElement) {

            resultElement.style.display = "none";

        }


        if (nextQuestion) {

            nextQuestion.style.display = "none";

        }


        if (startLab) {

            startLab.style.display =
                "inline-block";

        }


        if (progressBar) {

            progressBar.style.width = "0%";

        }


        updateGameInfo();

    }


    /* ================================================
       END GAME
    ================================================= */

    function endGame() {

        clearInterval(timer);


        gameStarted = false;


        if (optionsElement) {

            optionsElement.innerHTML = "";

        }


        if (nextQuestion) {

            nextQuestion.style.display = "none";

        }


        if (startLab) {

            startLab.style.display = "none";

        }


        if (resultElement) {

            resultElement.style.display = "block";

        }


        if (finalScoreElement) {

            finalScoreElement.textContent =
                score;

        }


        if (finalMessageElement) {

            if (score >= 40) {

                finalMessageElement.textContent =
                    "🏆 Excellent! You have strong networking knowledge!";

            } else if (score >= 20) {

                finalMessageElement.textContent =
                    "👍 Good job! Keep practicing networking.";

            } else {

                finalMessageElement.textContent =
                    "📚 Keep learning and try again!";

            }

        }

    }


    /* ================================================
       BUTTON EVENTS
    ================================================= */

    if (startLab) {

        startLab.addEventListener(
            "click",
            startGame
        );

    }


    if (resetGame) {

        resetGame.addEventListener(
            "click",
            restartGame
        );

    }


    if (playAgain) {

        playAgain.addEventListener(
            "click",
            startGame
        );

    }


    /* ================================================
       INITIAL GAME STATE
    ================================================= */

    updateGameInfo();


    /* =================================================
       PARTICLES.JS
    ================================================= */

    if (
        typeof particlesJS !== "undefined" &&
        document.getElementById("particles-js")
    ) {

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
                    value: 0.4
                },

                size: {
                    value: 3
                },

                line_linked: {

                    enable: true,

                    distance: 150,

                    color: "#38bdf8",

                    opacity: 0.2,

                    width: 1

                },

                move: {

                    enable: true,

                    speed: 2

                }

            },

            interactivity: {

                events: {

                    onhover: {

                        enable: true,

                        mode: "repulse"

                    },

                    onclick: {

                        enable: true,

                        mode: "push"

                    }

                },

                modes: {

                    repulse: {

                        distance: 100

                    },

                    push: {

                        particles_nb: 4

                    }

                }

            },

            retina_detect: true

        });

    }

});


/* =====================================================
   BACK TO TOP
===================================================== */

function topFunction() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}
