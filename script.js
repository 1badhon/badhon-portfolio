/* =========================================================
   PORTFOLIO JAVASCRIPT
   Badhon Biswas | Network Engineer
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       NAVBAR
    ===================================================== */

    const nav = document.querySelector("nav");
    const menuToggle = document.getElementById("menuToggle");

    // Mobile menu
    if (menuToggle && nav) {

        menuToggle.addEventListener("click", function () {

            nav.classList.toggle("menu-open");

            const isOpen = nav.classList.contains("menu-open");

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close Menu" : "Open Menu"
            );

        });

    }

    // Close mobile menu after clicking a link
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (nav) {
                nav.classList.remove("menu-open");
            }

        });

    });


    /* =====================================================
       SCROLLED NAVBAR
    ===================================================== */

    function handleNavbarScroll() {

        if (!nav) return;

        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", handleNavbarScroll);

    handleNavbarScroll();


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

                    setTimeout(typeEffect, 1500);

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
       POWER SWITCH
    ===================================================== */

    const powerSwitch = document.getElementById("powerSwitch");

    if (powerSwitch) {

        powerSwitch.addEventListener("click", function () {

            document.body.classList.toggle("lights-off");

        });

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
                    speed: 1.2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out"
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

                },

                modes: {

                    repulse: {
                        distance: 100,
                        duration: 0.4
                    },

                    push: {
                        particles_nb: 3
                    }

                }

            },

            retina_detect: true

        });

    }


    /* =====================================================
       BACK TO TOP BUTTON
    ===================================================== */

    const topBtn = document.getElementById("topBtn");

    function showTopButton() {

        if (!topBtn) return;

        if (window.scrollY > 400) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    }

    window.addEventListener("scroll", showTopButton);

    showTopButton();


    // Global function for your onclick="topFunction()"
    window.topFunction = function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };


    /* =====================================================
       NETWORK TROUBLESHOOTER GAME
    ===================================================== */

    const startGameBtn = document.getElementById("startGame");
    const nextQuestionBtn = document.getElementById("nextQuestion");
    const resetGameBtn = document.getElementById("resetGame");
    const playAgainBtn = document.getElementById("playAgain");

    const livesElement = document.getElementById("lives");
    const scoreElement = document.getElementById("score");
    const levelElement = document.getElementById("gameLevel");
    const timerElement = document.getElementById("gameTimer");

    const progressBar =
        document.getElementById("gameProgressBar");

    const questionElement =
        document.getElementById("gameQuestion");

    const optionsContainer =
        document.getElementById("gameOptions");

    const gameStatus =
        document.getElementById("gameStatus");

    const gameResult =
        document.getElementById("gameResult");

    const finalScore =
        document.getElementById("finalScore");

    const finalMessage =
        document.getElementById("finalMessage");


    // Check if game exists on page
    if (
        startGameBtn &&
        nextQuestionBtn &&
        resetGameBtn &&
        livesElement &&
        scoreElement &&
        levelElement &&
        timerElement &&
        progressBar &&
        questionElement &&
        optionsContainer &&
        gameStatus
    ) {

        /* =================================================
           GAME QUESTIONS
        ================================================= */

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

                answer: "Router"
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

                answer: "DHCP"
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

                answer: "Switch"
            },

            {
                question:
                    "What does DNS mainly do?",

                options: [
                    "Assigns MAC addresses",
                    "Translates domain names to IP addresses",
                    "Encrypts Wi-Fi",
                    "Creates VLANs"
                ],

                answer:
                    "Translates domain names to IP addresses"
            },

            {
                question:
                    "Which address identifies a device at Layer 3?",

                options: [
                    "MAC Address",
                    "IP Address",
                    "Port Number",
                    "SSID"
                ],

                answer: "IP Address"
            }

        ];


        /* =================================================
           GAME VARIABLES
        ================================================= */

        let currentQuestion = 0;
        let score = 0;
        let lives = 3;
        let timeLeft = 30;

        let timer = null;
        let gameRunning = false;
        let questionAnswered = false;


        /* =================================================
           UPDATE GAME INFO
        ================================================= */

        function updateGameInfo() {

            livesElement.textContent = lives;
            scoreElement.textContent = score;

            levelElement.textContent =
                currentQuestion + 1;

            timerElement.textContent = timeLeft;

        }


        /* =================================================
           UPDATE PROGRESS
        ================================================= */

        function updateProgress() {

            const progress =
                (currentQuestion / questions.length) * 100;

            progressBar.style.width =
                progress + "%";

        }


        /* =================================================
           STOP TIMER
        ================================================= */

        function stopTimer() {

            if (timer !== null) {

                clearInterval(timer);

                timer = null;

            }

        }


        /* =================================================
           START TIMER
        ================================================= */

        function startTimer() {

            stopTimer();

            timeLeft = 30;

            timerElement.textContent = timeLeft;

            timer = setInterval(function () {

                timeLeft--;

                timerElement.textContent =
                    timeLeft;

                if (timeLeft <= 0) {

                    stopTimer();

                    handleTimeOut();

                }

            }, 1000);

        }


        /* =================================================
           TIME OUT
        ================================================= */

        function handleTimeOut() {

            if (!gameRunning || questionAnswered) {
                return;
            }

            questionAnswered = true;

            lives--;

            livesElement.textContent = lives;

            gameStatus.textContent =
                "⏰ Time's up!";

            gameStatus.style.color =
                "#ef4444";

            disableOptions();

            markCorrectAnswer();

            if (lives <= 0) {

                setTimeout(function () {
                    endGame(false);
                }, 1000);

            } else {

                nextQuestionBtn.style.display =
                    "inline-block";

            }

        }


        /* =================================================
           LOAD QUESTION
        ================================================= */

        function loadQuestion() {

            if (currentQuestion >= questions.length) {

                endGame(true);

                return;

            }

            questionAnswered = false;

            const question =
                questions[currentQuestion];

            questionElement.textContent =
                question.question;

            optionsContainer.innerHTML = "";

            question.options.forEach(function (option) {

                const button =
                    document.createElement("button");

                button.className =
                    "game-option";

                button.type = "button";

                button.textContent =
                    option;

                button.addEventListener(
                    "click",
                    function () {
                        checkAnswer(option, button);
                    }
                );

                optionsContainer.appendChild(button);

            });

            updateGameInfo();

            updateProgress();

            gameStatus.textContent =
                "Choose the correct answer!";

            gameStatus.style.color =
                "#38bdf8";

            nextQuestionBtn.style.display =
                "none";

            startTimer();

        }


        /* =================================================
           CHECK ANSWER
        ================================================= */

        function checkAnswer(selectedAnswer, button) {

            if (!gameRunning || questionAnswered) {
                return;
            }

            questionAnswered = true;

            stopTimer();

            const correctAnswer =
                questions[currentQuestion].answer;

            if (selectedAnswer === correctAnswer) {

                button.classList.add("correct");

                score += 10;

                scoreElement.textContent =
                    score;

                gameStatus.textContent =
                    "✅ Correct! Great job!";

                gameStatus.style.color =
                    "#22c55e";

            } else {

                button.classList.add("wrong");

                lives--;

                livesElement.textContent =
                    lives;

                gameStatus.textContent =
                    "❌ Wrong answer!";

                gameStatus.style.color =
                    "#ef4444";

                markCorrectAnswer();

            }

            disableOptions();

            if (lives <= 0) {

                setTimeout(function () {

                    endGame(false);

                }, 1000);

            } else {

                nextQuestionBtn.style.display =
                    "inline-block";

            }

        }


        /* =================================================
           SHOW CORRECT ANSWER
        ================================================= */

        function markCorrectAnswer() {

            const correctAnswer =
                questions[currentQuestion].answer;

            const buttons =
                optionsContainer.querySelectorAll(
                    ".game-option"
                );

            buttons.forEach(function (button) {

                if (
                    button.textContent ===
                    correctAnswer
                ) {

                    button.classList.add("correct");

                }

            });

        }


        /* =================================================
           DISABLE OPTIONS
        ================================================= */

        function disableOptions() {

            const buttons =
                optionsContainer.querySelectorAll(
                    ".game-option"
                );

            buttons.forEach(function (button) {

                button.disabled = true;

            });

        }


        /* =================================================
           NEXT QUESTION
        ================================================= */

        function nextQuestion() {

            if (!gameRunning) {
                return;
            }

            currentQuestion++;

            if (
                currentQuestion >=
                questions.length
            ) {

                endGame(true);

            } else {

                loadQuestion();

            }

        }


        /* =================================================
           START GAME
        ================================================= */

        function startGame() {

            console.log("Network Game Started!");

            gameRunning = true;

            currentQuestion = 0;
            score = 0;
            lives = 3;

            timeLeft = 30;

            if (gameResult) {
                gameResult.style.display = "none";
            }

            startGameBtn.style.display =
                "none";

            nextQuestionBtn.style.display =
                "none";

            loadQuestion();

        }


        /* =================================================
           RESET GAME
        ================================================= */

        function resetGame() {

            stopTimer();

            gameRunning = false;

            currentQuestion = 0;
            score = 0;
            lives = 3;
            timeLeft = 30;

            questionAnswered = false;

            livesElement.textContent = "3";
            scoreElement.textContent = "0";
            levelElement.textContent = "1";
            timerElement.textContent = "30";

            progressBar.style.width = "0%";

            questionElement.textContent =
                "Click Start Game to begin!";

            optionsContainer.innerHTML = "";

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
           END GAME
        ================================================= */

        function endGame(completed) {

            stopTimer();

            gameRunning = false;

            progressBar.style.width = "100%";

            if (gameResult) {

                gameResult.style.display =
                    "block";

                finalScore.textContent =
                    score;

                if (completed) {

                    if (score >= 40) {

                        finalMessage.textContent =
                            "🎉 Excellent! Your networking knowledge is strong!";

                    } else if (score >= 20) {

                        finalMessage.textContent =
                            "👍 Good job! Keep practicing networking.";

                    } else {

                        finalMessage.textContent =
                            "📚 Keep learning and practice more networking.";

                    }

                } else {

                    finalMessage.textContent =
                        "💡 Game Over! Try again and improve your score.";

                }

            }

            questionElement.textContent =
                completed
                    ? "🎉 All questions completed!"
                    : "💀 Game Over!";

            optionsContainer.innerHTML = "";

            gameStatus.textContent =
                completed
                    ? "Challenge Complete!"
                    : "No lives left.";

            gameStatus.style.color =
                completed
                    ? "#22c55e"
                    : "#ef4444";

            startGameBtn.style.display =
                "none";

            nextQuestionBtn.style.display =
                "none";

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
                function () {

                    resetGame();

                    startGame();

                }
            );

        }


        // Initial game state
        resetGame();

    }


    /* =====================================================
       NETWORK LAB PACKET ANIMATION
    ===================================================== */

    const labButtons =
        document.querySelectorAll(
            ".lab-buttons button"
        );

    const packet =
        document.querySelector(".packet");

    const status =
        document.querySelector(".status");

    if (labButtons.length > 0) {

        labButtons.forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    if (packet) {

                        packet.classList.remove(
                            "move"
                        );

                        // Restart CSS animation
                        void packet.offsetWidth;

                        packet.classList.add(
                            "move"
                        );

                    }

                    if (status) {

                        status.textContent =
                            "📡 Sending network packet...";

                    }

                    setTimeout(function () {

                        if (status) {

                            status.textContent =
                                "✅ Packet delivered successfully!";

                        }

                    }, 2000);

                }
            );

        });

    }


    /* =====================================================
       NETWORK ROUTING GAME
    ===================================================== */

    const routeDevices =
        document.querySelectorAll(
            ".route-device"
        );

    if (routeDevices.length > 0) {

        routeDevices.forEach(function (device) {

            device.addEventListener(
                "click",
                function () {

                    const isCorrect =
                        device.dataset.correct === "true";

                    routeDevices.forEach(
                        function (item) {

                            item.classList.remove(
                                "correct",
                                "wrong"
                            );

                        }
                    );

                    if (isCorrect) {

                        device.classList.add(
                            "correct"
                        );

                    } else {

                        device.classList.add(
                            "wrong"
                        );

                    }

                }
            );

        });

    }


    /* =====================================================
       NETWORKING BLOG BOOK
    ===================================================== */

    const bookPages =
        document.getElementById("bookPages");

    const prevPage =
        document.getElementById("prevPage");

    const nextPage =
        document.getElementById("nextPage");

    const bookPageNumber =
        document.getElementById("bookPageNumber");

    if (
        bookPages &&
        prevPage &&
        nextPage &&
        bookPageNumber
    ) {

        const leftPage =
            bookPages.querySelector(".page-left");

        const rightPage =
            bookPages.querySelector(".page-right");

        const page3 =
            bookPages.querySelector(".page-3");

        const page4 =
            bookPages.querySelector(".page-4");

        const page5 =
            bookPages.querySelector(".page-5");

        const page6 =
            bookPages.querySelector(".page-6");

        const pages = [
            leftPage,
            rightPage,
            page3,
            page4,
            page5,
            page6
        ].filter(Boolean);

        let bookIndex = 0;

        function updateBook() {

            pages.forEach(function (page) {

                page.style.opacity = "0";
                page.style.visibility = "hidden";

            });

            // Show two pages
            if (pages[bookIndex]) {

                pages[bookIndex].style.opacity =
                    "1";

                pages[bookIndex].style.visibility =
                    "visible";

            }

            if (pages[bookIndex + 1]) {

                pages[bookIndex + 1].style.opacity =
                    "1";

                pages[bookIndex + 1].style.visibility =
                    "visible";

            }

            const first =
                bookIndex + 1;

            const second =
                Math.min(
                    bookIndex + 2,
                    pages.length
                );

            bookPageNumber.textContent =
                first + "–" + second +
                " / " + pages.length;

            prevPage.disabled =
                bookIndex === 0;

            nextPage.disabled =
                bookIndex + 2 >= pages.length;

        }


        nextPage.addEventListener(
            "click",
            function () {

                if (
                    bookIndex + 2 <
                    pages.length
                ) {

                    bookIndex += 2;

                    updateBook();

                }

            }
        );


        prevPage.addEventListener(
            "click",
            function () {

                if (bookIndex >= 2) {

                    bookIndex -= 2;

                    updateBook();

                }

            }
        );


        updateBook();

    }


    /* =====================================================
       CONSOLE MESSAGE
    ===================================================== */

    console.log(
        "Badhon Biswas Portfolio Loaded Successfully."
    );

    console.log(
        "Network Troubleshooter Ready."
    );

});
