/* =========================================================
   PORTFOLIO JAVASCRIPT
   Badhon Biswas | Network Engineer
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       POWER SWITCH
    ===================================================== */

    const powerSwitch = document.getElementById("powerSwitch");

    if (powerSwitch) {
        powerSwitch.addEventListener("click", function () {
            document.body.classList.toggle("lights-off");

            const isOff = document.body.classList.contains("lights-off");

            powerSwitch.setAttribute(
                "title",
                isOff ? "Turn Lights On" : "Turn Lights Off"
            );
        });
    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav ul li a");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", function () {
            nav.classList.toggle("menu-open");

            const isOpen = nav.classList.contains("menu-open");

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close Menu" : "Open Menu"
            );
        });

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                nav.classList.remove("menu-open");

                menuToggle.setAttribute(
                    "aria-label",
                    "Open Menu"
                );
            });
        });
    }


    /* =====================================================
       NAVBAR SCROLL EFFECT
    ===================================================== */

    window.addEventListener("scroll", function () {

        const navBar = document.querySelector("nav");

        if (navBar) {
            if (window.scrollY > 50) {
                navBar.classList.add("scrolled");
            } else {
                navBar.classList.remove("scrolled");
            }
        }

    });


    /* =====================================================
       TYPING EFFECT
    ===================================================== */

    const typingElement = document.getElementById("typing");

    if (typingElement) {

        const texts = [
            "Aspiring Network Engineer",
            "Networking Enthusiast",
            "Cisco Learner",
            "Linux Enthusiast"
        ];

        let textIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentText = texts[textIndex];

            if (!deleting) {

                typingElement.textContent =
                    currentText.substring(0, charIndex + 1);

                charIndex++;

                if (charIndex === currentText.length) {

                    deleting = true;

                    setTimeout(typeEffect, 1800);

                    return;
                }

            } else {

                typingElement.textContent =
                    currentText.substring(0, charIndex - 1);

                charIndex--;

                if (charIndex === 0) {

                    deleting = false;

                    textIndex++;

                    if (textIndex >= texts.length) {
                        textIndex = 0;
                    }

                }
            }

            setTimeout(
                typeEffect,
                deleting ? 60 : 100
            );
        }

        typeEffect();
    }


    /* =====================================================
       BACK TO TOP BUTTON
    ===================================================== */

    const topBtn = document.getElementById("topBtn");

    if (topBtn) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 300) {
                topBtn.style.display = "block";
            } else {
                topBtn.style.display = "none";
            }

        });

        topBtn.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    }


    /* =====================================================
       NETWORK TROUBLESHOOTER GAME
    ===================================================== */

    const startGameBtn = document.getElementById("startGame");
    const nextQuestionBtn = document.getElementById("nextQuestion");
    const resetGameBtn = document.getElementById("resetGame");
    const playAgainBtn = document.getElementById("playAgain");

    const gameQuestion = document.getElementById("gameQuestion");
    const gameOptions = document.getElementById("gameOptions");
    const gameStatus = document.getElementById("gameStatus");

    const livesDisplay = document.getElementById("lives");
    const scoreDisplay = document.getElementById("score");
    const levelDisplay = document.getElementById("gameLevel");
    const timerDisplay = document.getElementById("gameTimer");

    const progressBar =
        document.getElementById("gameProgressBar");

    const gameResult =
        document.getElementById("gameResult");

    const finalScore =
        document.getElementById("finalScore");

    const finalMessage =
        document.getElementById("finalMessage");


    /* =====================================================
       CHECK GAME ELEMENTS
    ===================================================== */

    if (
        startGameBtn &&
        nextQuestionBtn &&
        resetGameBtn &&
        gameQuestion &&
        gameOptions
    ) {

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
                    "Which protocol automatically assigns IP addresses to devices?",

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
                    "Create Wi-Fi signals",
                    "Encrypt hard drives"
                ],

                answer: 1
            },

            {
                question:
                    "Which device is commonly used to connect devices inside a LAN?",

                options: [
                    "Switch",
                    "Router",
                    "Modem",
                    "Firewall"
                ],

                answer: 0
            },

            {
                question:
                    "Which command is commonly used to test network connectivity?",

                options: [
                    "mkdir",
                    "ping",
                    "cd",
                    "copy"
                ],

                answer: 1
            }

        ];


        let currentQuestion = 0;
        let score = 0;
        let lives = 3;
        let gameStarted = false;
        let answered = false;
        let timer = 30;
        let timerInterval = null;


        /* =================================================
           START GAME
        ================================================= */

        function startGame() {

            currentQuestion = 0;
            score = 0;
            lives = 3;
            gameStarted = true;
            answered = false;

            clearInterval(timerInterval);

            if (gameResult) {
                gameResult.style.display = "none";
            }

            startGameBtn.style.display = "none";
            nextQuestionBtn.style.display = "none";

            updateGameInfo();

            loadQuestion();

        }


        /* =================================================
           LOAD QUESTION
        ================================================= */

        function loadQuestion() {

            if (currentQuestion >= questions.length) {
                finishGame();
                return;
            }

            answered = false;

            const q = questions[currentQuestion];

            gameQuestion.textContent = q.question;

            gameOptions.innerHTML = "";

            gameStatus.textContent = "Choose the correct answer!";

            gameStatus.style.color = "#38bdf8";

            timer = 30;

            if (timerDisplay) {
                timerDisplay.textContent = timer;
            }

            const progress =
                (currentQuestion / questions.length) * 100;

            if (progressBar) {
                progressBar.style.width = progress + "%";
            }


            q.options.forEach(function (option, index) {

                const button =
                    document.createElement("button");

                button.className = "game-option";

                button.textContent = option;

                button.type = "button";

                button.addEventListener(
                    "click",
                    function () {

                        checkAnswer(index, button);

                    }
                );

                gameOptions.appendChild(button);

            });


            startTimer();
        }


        /* =================================================
           TIMER
        ================================================= */

        function startTimer() {

            clearInterval(timerInterval);

            timerInterval = setInterval(function () {

                timer--;

                if (timerDisplay) {
                    timerDisplay.textContent = timer;
                }

                if (timer <= 0) {

                    clearInterval(timerInterval);

                    if (!answered) {

                        answered = true;

                        lives--;

                        updateGameInfo();

                        gameStatus.textContent =
                            "⏰ Time's up!";

                        gameStatus.style.color =
                            "#ef4444";

                        disableOptions();

                        nextQuestionBtn.style.display =
                            "inline-block";

                        if (lives <= 0) {

                            setTimeout(function () {
                                finishGame();
                            }, 700);

                        }

                    }

                }

            }, 1000);
        }


        /* =================================================
           CHECK ANSWER
        ================================================= */

        function checkAnswer(selectedIndex, selectedButton) {

            if (answered) {
                return;
            }

            answered = true;

            clearInterval(timerInterval);

            const correctIndex =
                questions[currentQuestion].answer;

            const allOptions =
                gameOptions.querySelectorAll(".game-option");

            allOptions.forEach(function (button) {

                button.disabled = true;

            });


            if (selectedIndex === correctIndex) {

                score += 10;

                selectedButton.classList.add("correct");

                gameStatus.textContent =
                    "✅ Correct! Great job!";

                gameStatus.style.color =
                    "#22c55e";

            } else {

                lives--;

                selectedButton.classList.add("wrong");

                allOptions[correctIndex].classList.add(
                    "correct"
                );

                gameStatus.textContent =
                    "❌ Wrong answer!";

                gameStatus.style.color =
                    "#ef4444";
            }


            updateGameInfo();


            if (lives <= 0) {

                setTimeout(function () {

                    finishGame();

                }, 900);

            } else {

                nextQuestionBtn.style.display =
                    "inline-block";
            }

        }


        /* =================================================
           DISABLE OPTIONS
        ================================================= */

        function disableOptions() {

            const allOptions =
                gameOptions.querySelectorAll(
                    ".game-option"
                );

            allOptions.forEach(function (button) {

                button.disabled = true;

            });
        }


        /* =================================================
           NEXT QUESTION
        ================================================= */

        function nextQuestion() {

            currentQuestion++;

            nextQuestionBtn.style.display =
                "none";

            loadQuestion();

        }


        /* =================================================
           UPDATE GAME INFO
        ================================================= */

        function updateGameInfo() {

            if (livesDisplay) {
                livesDisplay.textContent = lives;
            }

            if (scoreDisplay) {
                scoreDisplay.textContent = score;
            }

            if (levelDisplay) {

                const level =
                    Math.min(
                        currentQuestion + 1,
                        questions.length
                    );

                levelDisplay.textContent = level;
            }

        }


        /* =================================================
           FINISH GAME
        ================================================= */

        function finishGame() {

            clearInterval(timerInterval);

            gameStarted = false;

            disableOptions();

            nextQuestionBtn.style.display =
                "none";

            if (progressBar) {
                progressBar.style.width = "100%";
            }

            if (gameResult) {
                gameResult.style.display = "block";
            }

            if (finalScore) {
                finalScore.textContent = score;
            }

            if (finalMessage) {

                if (score >= 40) {

                    finalMessage.textContent =
                        "🔥 Excellent! Your networking knowledge is strong.";

                } else if (score >= 20) {

                    finalMessage.textContent =
                        "👍 Good job! Keep practicing networking.";

                } else {

                    finalMessage.textContent =
                        "💪 Keep learning and try again!";
                }
            }

            gameQuestion.textContent =
                lives <= 0
                    ? "Game Over!"
                    : "Challenge Complete!";

            gameOptions.innerHTML = "";

            gameStatus.textContent =
                "🏆 Game Finished!";

            gameStatus.style.color =
                "#22c55e";

        }


        /* =================================================
           RESET GAME
        ================================================= */

        function resetGame() {

            clearInterval(timerInterval);

            currentQuestion = 0;
            score = 0;
            lives = 3;
            gameStarted = false;
            answered = false;
            timer = 30;

            if (livesDisplay) {
                livesDisplay.textContent = "3";
            }

            if (scoreDisplay) {
                scoreDisplay.textContent = "0";
            }

            if (levelDisplay) {
                levelDisplay.textContent = "1";
            }

            if (timerDisplay) {
                timerDisplay.textContent = "30";
            }

            if (progressBar) {
                progressBar.style.width = "0%";
            }

            gameQuestion.textContent =
                "Click Start Game to begin!";

            gameOptions.innerHTML = "";

            gameStatus.textContent =
                "Ready?";

            gameStatus.style.color =
                "#38bdf8";

            startGameBtn.style.display =
                "inline-block";

            nextQuestionBtn.style.display =
                "none";

            if (gameResult) {
                gameResult.style.display =
                    "none";
            }

        }


        /* =================================================
           BUTTON EVENTS
        ================================================= */

        startGameBtn.addEventListener(
            "click",
            startGame
        );

        nextQuestionBtn.addEventListener(
            "click",
            nextQuestion
        );

        resetGameBtn.addEventListener(
            "click",
            resetGame
        );


        if (playAgainBtn) {

            playAgainBtn.addEventListener(
                "click",
                startGame
            );

        }

    }


    /* =====================================================
       NETWORK BOOK
    ===================================================== */

    const prevPage =
        document.getElementById("prevPage");

    const nextPage =
        document.getElementById("nextPage");

    const bookPageNumber =
        document.getElementById("bookPageNumber");

    const pages =
        document.querySelectorAll(".flip-page");


    if (
        prevPage &&
        nextPage &&
        pages.length > 0
    ) {

        let bookIndex = 0;

        const totalPages = pages.length;


        function updateBook() {

            pages.forEach(function (page) {

                page.classList.remove(
                    "flip-next",
                    "flip-prev"
                );

                page.style.opacity = "0";
                page.style.visibility = "hidden";

            });


            if (bookIndex === 0) {

                pages[0].style.opacity = "1";
                pages[0].style.visibility = "visible";

                if (pages[1]) {
                    pages[1].style.opacity = "1";
                    pages[1].style.visibility = "visible";
                }

            } else {

                const leftIndex =
                    bookIndex * 2;

                const rightIndex =
                    leftIndex + 1;

                if (pages[leftIndex]) {

                    pages[leftIndex].style.opacity =
                        "1";

                    pages[leftIndex].style.visibility =
                        "visible";
                }

                if (pages[rightIndex]) {

                    pages[rightIndex].style.opacity =
                        "1";

                    pages[rightIndex].style.visibility =
                        "visible";
                }

            }


            const start =
                bookIndex * 2 + 1;

            const end =
                Math.min(
                    start + 1,
                    totalPages
                );


            if (bookPageNumber) {

                bookPageNumber.textContent =
                    start + "–" + end +
                    " / " + totalPages;

            }


            prevPage.disabled =
                bookIndex === 0;

            nextPage.disabled =
                end >= totalPages;

        }


        nextPage.addEventListener(
            "click",
            function () {

                const maxIndex =
                    Math.ceil(totalPages / 2) - 1;

                if (bookIndex < maxIndex) {

                    bookIndex++;

                    updateBook();

                }

            }
        );


        prevPage.addEventListener(
            "click",
            function () {

                if (bookIndex > 0) {

                    bookIndex--;

                    updateBook();

                }

            }
        );


        updateBook();

    }


    /* =====================================================
       PARTICLES.JS
    ===================================================== */

    if (
        typeof particlesJS !== "undefined" &&
        document.getElementById("particles-js")
    ) {

        particlesJS("particles-js", {

            particles: {

                number: {
                    value: 45,
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
                    value: 0.35,
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
                    opacity: 0.15,
                    width: 1
                },

                move: {
                    enable: true,
                    speed: 1.5,
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
                            opacity: 0.4
                        }
                    },

                    push: {
                        particles_nb: 3
                    }

                }

            },

            retina_detect: true

        });

    }

});
