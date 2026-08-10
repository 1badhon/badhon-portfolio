/* =========================================================
   PORTFOLIO JAVASCRIPT
   Badhon Biswas | Network Engineer
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       TYPING ANIMATION
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

            setTimeout(typeEffect, deleting ? 60 : 100);
        }

        typeEffect();
    }


    /* =====================================================
       MOBILE NAVBAR
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const nav = document.querySelector("nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", function () {

            nav.classList.toggle("menu-open");

            const isOpen =
                nav.classList.contains("menu-open");

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close Menu" : "Open Menu"
            );
        });


        /* Close menu after clicking a link */

        const navLinks =
            nav.querySelectorAll("ul li a");

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
       SCROLLED NAVBAR
    ===================================================== */

    if (nav) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 50) {

                nav.classList.add("scrolled");

            } else {

                nav.classList.remove("scrolled");

            }

        });

    }


    /* =====================================================
       POWER SWITCH
    ===================================================== */

    const powerSwitch =
        document.getElementById("powerSwitch");

    if (powerSwitch) {

        powerSwitch.addEventListener("click", function () {

            document.body.classList.toggle("lights-off");

        });

    }


    /* =====================================================
       BACK TO TOP BUTTON
    ===================================================== */

    const topBtn =
        document.getElementById("topBtn");

    if (topBtn) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 400) {

                topBtn.style.display = "block";

            } else {

                topBtn.style.display = "none";

            }

        });

    }


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
                    value: 60,
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
                    opacity: 0.25,
                    width: 1
                },

                move: {
                    enable: true,
                    speed: 2,
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


    /* =====================================================
       NETWORKING BLOG BOOK
    ===================================================== */

    const pages = document.querySelectorAll(".flip-page");

    const prevPage =
        document.getElementById("prevPage");

    const nextPage =
        document.getElementById("nextPage");

    const bookPageNumber =
        document.getElementById("bookPageNumber");


    let currentBookPage = 0;


    function updateBook() {

        pages.forEach(function (page) {

            page.classList.remove(
                "flip-next",
                "flip-prev"
            );

            page.style.opacity = "0";
            page.style.visibility = "hidden";

        });


        if (pages[currentBookPage]) {

            pages[currentBookPage].style.opacity = "1";
            pages[currentBookPage].style.visibility = "visible";

        }


        if (pages[currentBookPage + 1]) {

            pages[currentBookPage + 1].style.opacity = "1";
            pages[currentBookPage + 1].style.visibility = "visible";

        }


        if (bookPageNumber) {

            const start = currentBookPage + 1;

            const end = Math.min(
                currentBookPage + 2,
                pages.length
            );

            bookPageNumber.textContent =
                `${start}–${end} / ${pages.length}`;

        }


        if (prevPage) {

            prevPage.disabled =
                currentBookPage === 0;

        }


        if (nextPage) {

            nextPage.disabled =
                currentBookPage >= pages.length - 2;

        }

    }


    if (nextPage) {

        nextPage.addEventListener("click", function () {

            if (currentBookPage < pages.length - 2) {

                currentBookPage += 2;

                updateBook();

            }

        });

    }


    if (prevPage) {

        prevPage.addEventListener("click", function () {

            if (currentBookPage > 0) {

                currentBookPage -= 2;

                updateBook();

            }

        });

    }


    if (pages.length > 0) {

        updateBook();

    }


    /* =====================================================
       NETWORK TROUBLESHOOTER GAME
    ===================================================== */

    const startGame =
        document.getElementById("startLab");

    const nextQuestion =
        document.getElementById("nextQuestion");

    const resetGame =
        document.getElementById("resetGame");

    const playAgain =
        document.getElementById("playAgain");

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


    /* =====================================================
       CHECK GAME HTML
    ===================================================== */

    if (
        startGame &&
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
                    "Create Wi-Fi signals",
                    "Encrypt hard drives"
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
                    "format",
                    "rename"
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
                    "What does LAN stand for?",

                options: [
                    "Large Area Network",
                    "Local Area Network",
                    "Logical Access Network",
                    "Linked Area Node"
                ],

                answer: 1
            },

            {
                question:
                    "Which address identifies a network interface at Layer 2?",

                options: [
                    "IP Address",
                    "Port Number",
                    "MAC Address",
                    "URL"
                ],

                answer: 2
            },

            {
                question:
                    "Which protocol is used to securely browse websites?",

                options: [
                    "HTTP",
                    "HTTPS",
                    "FTP",
                    "Telnet"
                ],

                answer: 1
            }

        ];


        /* =================================================
           GAME VARIABLES
        ================================================= */

        let lives = 3;

        let score = 0;

        let level = 1;

        let questionIndex = 0;

        let timer = 30;

        let timerInterval = null;

        let gameRunning = false;

        let questionAnswered = false;


        /* =================================================
           SHUFFLE QUESTIONS
        ================================================= */

        let gameQuestions = [];


        function shuffle(array) {

            return array
                .map(value => ({
                    value,
                    sort: Math.random()
                }))
                .sort((a, b) => a.sort - b.sort)
                .map(item => item.value);

        }


        /* =================================================
           START GAME
        ================================================= */

        function startNetworkGame() {

            lives = 3;

            score = 0;

            level = 1;

            questionIndex = 0;

            timer = 30;

            gameRunning = true;

            questionAnswered = false;

            gameQuestions =
                shuffle(questions).slice(0, 5);


            if (gameResult) {

                gameResult.style.display = "none";

            }


            if (startGame) {

                startGame.style.display = "none";

            }


            if (nextQuestion) {

                nextQuestion.style.display = "none";

            }


            updateGameInfo();

            startTimer();

            showQuestion();

        }


        /* =================================================
           SHOW QUESTION
        ================================================= */

        function showQuestion() {

            if (!gameRunning) {
                return;
            }


            questionAnswered = false;


            const current =
                gameQuestions[questionIndex];


            if (!current) {

                finishGame();

                return;

            }


            gameQuestion.textContent =
                current.question;


            gameOptions.innerHTML = "";


            current.options.forEach(
                function (option, index) {

                    const button =
                        document.createElement("button");

                    button.className =
                        "game-option";

                    button.textContent =
                        option;

                    button.type =
                        "button";


                    button.addEventListener(
                        "click",
                        function () {

                            checkAnswer(
                                index,
                                button
                            );

                        }
                    );


                    gameOptions.appendChild(button);

                }
            );


            if (gameStatus) {

                gameStatus.textContent =
                    "Choose the correct answer!";

            }


            updateProgress();

        }


        /* =================================================
           CHECK ANSWER
        ================================================= */

        function checkAnswer(
            selectedIndex,
            selectedButton
        ) {

            if (
                questionAnswered ||
                !gameRunning
            ) {
                return;
            }


            questionAnswered = true;


            const current =
                gameQuestions[questionIndex];


            const optionButtons =
                gameOptions.querySelectorAll(
                    ".game-option"
                );


            optionButtons.forEach(
                function (button) {

                    button.disabled = true;

                }
            );


            if (
                selectedIndex ===
                current.answer
            ) {

                selectedButton.classList.add(
                    "correct"
                );


                score += 20;


                if (gameStatus) {

                    gameStatus.textContent =
                        "✅ Correct! +20 points";

                }

            } else {

                selectedButton.classList.add(
                    "wrong"
                );


                optionButtons[
                    current.answer
                ].classList.add("correct");


                lives--;


                if (gameStatus) {

                    gameStatus.textContent =
                        "❌ Wrong answer! Life lost.";

                }


                if (lives <= 0) {

                    setTimeout(
                        finishGame,
                        900
                    );

                    return;

                }

            }


            updateGameInfo();


            if (nextQuestion) {

                nextQuestion.style.display =
                    "inline-block";

            }

        }


        /* =================================================
           NEXT QUESTION
        ================================================= */

        function goNextQuestion() {

            if (!gameRunning) {
                return;
            }


            questionIndex++;

            level =
                questionIndex + 1;


            if (
                questionIndex >=
                gameQuestions.length
            ) {

                finishGame();

                return;

            }


            updateGameInfo();

            showQuestion();

        }


        /* =================================================
           TIMER
        ================================================= */

        function startTimer() {

            clearInterval(timerInterval);


            timer = 30;


            if (timerElement) {

                timerElement.textContent =
                    timer;

            }


            timerInterval =
                setInterval(function () {

                    if (!gameRunning) {

                        clearInterval(
                            timerInterval
                        );

                        return;

                    }


                    timer--;


                    if (timerElement) {

                        timerElement.textContent =
                            timer;

                    }


                    if (timer <= 0) {

                        clearInterval(
                            timerInterval
                        );


                        lives--;


                        updateGameInfo();


                        if (gameStatus) {

                            gameStatus.textContent =
                                "⏰ Time's up!";

                        }


                        if (lives <= 0) {

                            finishGame();

                        } else {

                            setTimeout(
                                function () {

                                    questionIndex++;

                                    if (
                                        questionIndex >=
                                        gameQuestions.length
                                    ) {

                                        finishGame();

                                    } else {

                                        level =
                                            questionIndex + 1;

                                        timer = 30;

                                        showQuestion();

                                        startTimer();

                                    }

                                },
                                900
                            );

                        }

                    }

                }, 1000);

        }


        /* =================================================
           UPDATE GAME INFO
        ================================================= */

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
                    Math.min(level, 5);

            }


            if (timerElement) {

                timerElement.textContent =
                    timer;

            }

        }


        /* =================================================
           PROGRESS BAR
        ================================================= */

        function updateProgress() {

            if (!progressBar) {
                return;
            }


            const total =
                gameQuestions.length;


            const current =
                questionIndex;


            const percent =
                (current / total) * 100;


            progressBar.style.width =
                percent + "%";

        }


        /* =================================================
           FINISH GAME
        ================================================= */

        function finishGame() {

            gameRunning = false;


            clearInterval(timerInterval);


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

                if (lives <= 0) {

                    finalMessage.textContent =
                        "💔 You ran out of lives. Keep practicing networking!";

                } else if (score >= 80) {

                    finalMessage.textContent =
                        "🔥 Excellent! Your networking knowledge is strong!";

                } else if (score >= 60) {

                    finalMessage.textContent =
                        "👏 Good job! Keep improving your networking skills.";

                } else {

                    finalMessage.textContent =
                        "📚 Keep learning and try again!";

                }

            }


            if (nextQuestion) {

                nextQuestion.style.display =
                    "none";

            }


            if (startGame) {

                startGame.style.display =
                    "none";

            }

        }


        /* =================================================
           RESET GAME
        ================================================= */

        function resetNetworkGame() {

            clearInterval(timerInterval);


            gameRunning = false;

            lives = 3;

            score = 0;

            level = 1;

            questionIndex = 0;

            timer = 30;

            questionAnswered = false;


            updateGameInfo();


            gameQuestion.textContent =
                "Click Start Game to begin!";


            gameOptions.innerHTML = "";


            if (gameStatus) {

                gameStatus.textContent =
                    "Ready?";

            }


            if (progressBar) {

                progressBar.style.width =
                    "0%";

            }


            if (gameResult) {

                gameResult.style.display =
                    "none";

            }


            if (nextQuestion) {

                nextQuestion.style.display =
                    "none";

            }


            if (startGame) {

                startGame.style.display =
                    "inline-block";

            }

        }


        /* =================================================
           BUTTON EVENTS
        ================================================= */

        startGame.addEventListener(
            "click",
            startNetworkGame
        );


        if (nextQuestion) {

            nextQuestion.addEventListener(
                "click",
                goNextQuestion
            );

        }


        if (resetGame) {

            resetGame.addEventListener(
                "click",
                resetNetworkGame
            );

        }


        if (playAgain) {

            playAgain.addEventListener(
                "click",
                startNetworkGame
            );

        }


        /* =================================================
           INITIAL GAME STATE
        ================================================= */

        resetNetworkGame();

    }


    /* =====================================================
       CONSOLE MESSAGE
    ===================================================== */

    console.log(
        "Badhon Biswas Portfolio loaded successfully."
    );

});
