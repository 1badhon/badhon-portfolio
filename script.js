/* =========================================================
   PORTFOLIO SCRIPT.JS
   Badhon Biswas | Network Engineer
========================================================= */


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       NAVBAR
    ===================================================== */

    const nav = document.querySelector("nav");
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelectorAll("nav ul li a");

    // Navbar scroll effect
    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }

    });


    // Mobile menu open / close
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


    // Mobile menu click করলে menu close হবে
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


    /* =====================================================
       POWER SWITCH
    ===================================================== */

    const powerSwitch = document.getElementById("powerSwitch");

    if (powerSwitch) {

        powerSwitch.addEventListener("click", () => {

            document.body.classList.toggle("lights-off");

        });

    }


    /* =====================================================
       TYPING EFFECT
    ===================================================== */

    const typingElement = document.getElementById("typing");

    if (typingElement) {

        const typingTexts = [
            "Aspiring Network Engineer",
            "Networking Enthusiast",
            "Cisco Learner",
            "Linux Enthusiast",
            "Future Network Engineer"
        ];

        let textIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typingEffect() {

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

    }


    /* =====================================================
       BACK TO TOP BUTTON
    ===================================================== */

    const topBtn = document.getElementById("topBtn");

    function updateTopButton() {

        if (!topBtn) return;

        if (
            document.body.scrollTop > 300 ||
            document.documentElement.scrollTop > 300
        ) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    }

    window.addEventListener("scroll", updateTopButton);

    // Global function for onclick="topFunction()"
    window.topFunction = function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };


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
                    value: 70,
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
                        particles_nb: 4
                    }

                }

            },

            retina_detect: true

        });

    }


    /* =====================================================
       NETWORK LAB
    ===================================================== */

    const startLab = document.getElementById("startLab");
    const labPacket = document.querySelector(".packet");
    const labStatus = document.querySelector(".status");

    if (startLab && labPacket) {

        startLab.addEventListener("click", () => {

            labPacket.classList.remove("move");

            // Restart animation
            void labPacket.offsetWidth;

            labPacket.classList.add("move");

            if (labStatus) {

                labStatus.textContent =
                    "📡 Sending packet through the network...";

            }

        });

        labPacket.addEventListener("animationiteration", () => {

            if (labStatus) {

                labStatus.textContent =
                    "✅ Packet successfully transmitted!";

            }

        });

    }


    /* =====================================================
       NETWORKING BLOG - BOOK
    ===================================================== */

    const bookPages = document.getElementById("bookPages");
    const prevPage = document.getElementById("prevPage");
    const nextPage = document.getElementById("nextPage");
    const bookPageNumber =
        document.getElementById("bookPageNumber");

    if (
        bookPages &&
        prevPage &&
        nextPage &&
        bookPageNumber
    ) {

        const pages = Array.from(
            bookPages.querySelectorAll(".flip-page")
        );

        let bookIndex = 0;

        /*
            Page pairs:

            0 → 1-2
            1 → 3-4
            2 → 5-6
        */

        const totalPairs = Math.ceil(pages.length / 2);

        function updateBook() {

            pages.forEach(page => {

                page.style.opacity = "0";
                page.style.visibility = "hidden";
                page.style.zIndex = "1";

                page.classList.remove(
                    "flip-next",
                    "flip-prev"
                );

            });


            const leftIndex = bookIndex * 2;
            const rightIndex = leftIndex + 1;

            if (pages[leftIndex]) {

                pages[leftIndex].style.opacity = "1";
                pages[leftIndex].style.visibility = "visible";
                pages[leftIndex].style.zIndex = "10";

            }

            if (pages[rightIndex]) {

                pages[rightIndex].style.opacity = "1";
                pages[rightIndex].style.visibility = "visible";
                pages[rightIndex].style.zIndex = "9";

            }


            const firstPage = leftIndex + 1;
            const lastPage = Math.min(
                rightIndex + 1,
                pages.length
            );

            bookPageNumber.textContent =
                `${firstPage}–${lastPage} / ${pages.length}`;


            prevPage.disabled = bookIndex === 0;

            nextPage.disabled =
                bookIndex === totalPairs - 1;

        }


        nextPage.addEventListener("click", () => {

            if (bookIndex >= totalPairs - 1) {
                return;
            }

            const currentLeft =
                pages[bookIndex * 2];

            const currentRight =
                pages[bookIndex * 2 + 1];

            if (currentLeft) {
                currentLeft.classList.add("flip-next");
            }

            if (currentRight) {
                currentRight.classList.add("flip-next");
            }

            setTimeout(() => {

                bookIndex++;

                updateBook();

            }, 700);

        });


        prevPage.addEventListener("click", () => {

            if (bookIndex <= 0) {
                return;
            }

            bookIndex--;

            updateBook();

            const left =
                pages[bookIndex * 2];

            const right =
                pages[bookIndex * 2 + 1];

            if (left) {
                left.classList.add("flip-prev");
            }

            if (right) {
                right.classList.add("flip-prev");
            }

        });


        updateBook();

    }


    /* =====================================================
       NETWORK TROUBLESHOOTER GAME
    ===================================================== */

    const gameQuestion =
        document.getElementById("gameQuestion");

    const gameOptions =
        document.getElementById("gameOptions");

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


    // যদি Game HTML না থাকে তাহলে Game code চালানোর দরকার নেই
    if (
        gameQuestion &&
        gameOptions &&
        livesElement &&
        scoreElement &&
        levelElement &&
        timerElement
    ) {

        const questions = [

            {
                question:
                    "Which device is mainly used to connect different networks?",

                options: [
                    "Switch",
                    "Router",
                    "Keyboard",
                    "Monitor"
                ],

                answer: 1
            },

            {
                question:
                    "Which protocol automatically assigns IP addresses?",

                options: [
                    "HTTP",
                    "FTP",
                    "DHCP",
                    "SSH"
                ],

                answer: 2
            },

            {
                question:
                    "What does DNS translate?",

                options: [
                    "IP to MAC only",
                    "Domain names to IP addresses",
                    "Files to folders",
                    "Passwords to usernames"
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
                    "Printer"
                ],

                answer: 1
            },

            {
                question:
                    "Which address is an example of IPv4?",

                options: [
                    "192.168.1.10",
                    "GGGG.1234",
                    "www.network.com",
                    "AA-BB-CC"
                ],

                answer: 0
            }

        ];


        let lives = 3;
        let score = 0;
        let currentQuestion = 0;
        let timer = 30;
        let timerInterval = null;
        let gameRunning = false;
        let answered = false;


        function updateGameUI() {

            livesElement.textContent = lives;

            scoreElement.textContent = score;

            levelElement.textContent =
                Math.min(currentQuestion + 1, questions.length);

            timerElement.textContent = timer;

            if (progressBar) {

                const progress =
                    (currentQuestion / questions.length) * 100;

                progressBar.style.width =
                    `${progress}%`;

            }

        }


        function loadQuestion() {

            if (!questions[currentQuestion]) {

                endGame();

                return;

            }

            answered = false;

            const question =
                questions[currentQuestion];

            gameQuestion.textContent =
                question.question;

            gameOptions.innerHTML = "";

            question.options.forEach(
                (option, index) => {

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

                }
            );


            timer = 30;

            updateGameUI();

            gameStatus.textContent =
                "Choose the correct answer!";

            if (nextQuestion) {

                nextQuestion.style.display =
                    "none";

            }

            startTimer();

        }


        function startTimer() {

            clearInterval(timerInterval);

            timerInterval =
                setInterval(() => {

                    if (!gameRunning) {

                        clearInterval(timerInterval);

                        return;

                    }

                    timer--;

                    updateGameUI();

                    if (timer <= 0) {

                        clearInterval(timerInterval);

                        handleWrongAnswer(
                            null,
                            true
                        );

                    }

                }, 1000);

        }


        function checkAnswer(
            selectedIndex,
            button
        ) {

            if (!gameRunning || answered) {
                return;
            }

            answered = true;

            clearInterval(timerInterval);

            const question =
                questions[currentQuestion];

            const optionButtons =
                gameOptions.querySelectorAll(
                    ".game-option"
                );

            optionButtons.forEach(btn => {
                btn.disabled = true;
            });


            if (
                selectedIndex ===
                question.answer
            ) {

                button.classList.add("correct");

                score += 100;

                gameStatus.textContent =
                    "✅ Correct! Great job!";

                updateGameUI();

                showNextButton();

            } else {

                button.classList.add("wrong");

                const correctButton =
                    optionButtons[
                        question.answer
                    ];

                if (correctButton) {
                    correctButton.classList.add(
                        "correct"
                    );
                }

                handleWrongAnswer(
                    button,
                    false
                );

            }

        }


        function handleWrongAnswer(
            button,
            timeUp
        ) {

            if (answered && !timeUp) {
                return;
            }

            answered = true;

            clearInterval(timerInterval);

            lives--;

            if (button) {
                button.classList.add("wrong");
            }

            if (timeUp) {

                gameStatus.textContent =
                    "⏰ Time's up!";

            } else {

                gameStatus.textContent =
                    "❌ Wrong answer!";

            }

            updateGameUI();


            // Correct answer highlight
            const correctIndex =
                questions[currentQuestion].answer;

            const optionButtons =
                gameOptions.querySelectorAll(
                    ".game-option"
                );

            if (optionButtons[correctIndex]) {

                optionButtons[
                    correctIndex
                ].classList.add("correct");

            }

            optionButtons.forEach(btn => {
                btn.disabled = true;
            });


            if (lives <= 0) {

                setTimeout(() => {

                    endGame();

                }, 1000);

                return;

            }


            showNextButton();

        }


        function showNextButton() {

            if (nextQuestion) {

                nextQuestion.style.display =
                    "inline-block";

            }

        }


        function goNextQuestion() {

            currentQuestion++;

            if (
                currentQuestion >=
                questions.length
            ) {

                endGame();

                return;

            }

            loadQuestion();

        }


        function startGameFunction() {

            clearInterval(timerInterval);

            lives = 3;

            score = 0;

            currentQuestion = 0;

            timer = 30;

            gameRunning = true;

            answered = false;


            if (gameResult) {

                gameResult.style.display =
                    "none";

            }

            if (gameOptions) {

                gameOptions.style.display =
                    "grid";

            }

            if (gameQuestion) {

                gameQuestion.style.display =
                    "block";

            }

            if (startGame) {

                startGame.style.display =
                    "none";

            }

            loadQuestion();

        }


        function endGame() {

            gameRunning = false;

            clearInterval(timerInterval);

            if (progressBar) {

                progressBar.style.width =
                    "100%";

            }

            if (gameOptions) {

                gameOptions.style.display =
                    "none";

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

                if (score >= 400) {

                    finalMessage.textContent =
                        "🔥 Excellent! Your networking knowledge is very strong.";

                } else if (score >= 250) {

                    finalMessage.textContent =
                        "👍 Great work! Keep practicing networking.";

                } else if (score > 0) {

                    finalMessage.textContent =
                        "📚 Good attempt! Practice more networking concepts.";

                } else {

                    finalMessage.textContent =
                        "💡 Don't worry! Learn the basics and try again.";

                }

            }

        }


        function resetGameFunction() {

            clearInterval(timerInterval);

            lives = 3;

            score = 0;

            currentQuestion = 0;

            timer = 30;

            gameRunning = false;

            answered = false;


            gameQuestion.textContent =
                "Click Start Game to begin!";

            gameOptions.innerHTML = "";

            gameStatus.textContent =
                "Ready?";

            updateGameUI();


            if (startGame) {

                startGame.style.display =
                    "inline-block";

            }

            if (nextQuestion) {

                nextQuestion.style.display =
                    "none";

            }

            if (gameResult) {

                gameResult.style.display =
                    "none";

            }

            if (gameOptions) {

                gameOptions.style.display =
                    "grid";

            }

            if (progressBar) {

                progressBar.style.width =
                    "0%";

            }

        }


        if (startGame) {

            startGame.addEventListener(
                "click",
                startGameFunction
            );

        }


        if (nextQuestion) {

            nextQuestion.addEventListener(
                "click",
                goNextQuestion
            );

        }


        if (resetGame) {

            resetGame.addEventListener(
                "click",
                resetGameFunction
            );

        }


        if (playAgain) {

            playAgain.addEventListener(
                "click",
                startGameFunction
            );

        }


        // Initial state
        resetGameFunction();

    }


    /* =====================================================
       ACTIVE NAVIGATION ON SCROLL
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navigationLinks =
        document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach(link => {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (
                href ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    });

});
