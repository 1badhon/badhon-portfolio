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

    // Navbar scroll effect
    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }

    });


    // Mobile menu
    if (menuToggle) {

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
       TYPING EFFECT
    ===================================================== */

    const typingElement = document.getElementById("typing");

    if (typingElement) {

        const texts = [
            "Aspiring Network Engineer",
            "Networking Enthusiast",
            "Cisco Learner",
            "Linux Enthusiast",
            "Future Network Engineer"
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
                    opacity: 0.2,
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
       BACK TO TOP BUTTON
    ===================================================== */

    const topBtn = document.getElementById("topBtn");

    if (topBtn) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 400) {
                topBtn.style.display = "block";
            } else {
                topBtn.style.display = "none";
            }

        });

    }


    // Global function for your HTML onclick="topFunction()"
    window.topFunction = function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };


    /* =====================================================
       NETWORK LAB
    ===================================================== */

    const startNetwork =
        document.getElementById("startNetwork");

    const resetNetwork =
        document.getElementById("resetNetwork");

    const packet =
        document.querySelector(".packet");

    const status =
        document.querySelector(".status");


    if (startNetwork) {

        startNetwork.addEventListener("click", function () {

            if (packet) {
                packet.classList.add("move");
            }

            if (status) {
                status.textContent =
                    "🟢 Network is running...";
            }

        });

    }


    if (resetNetwork) {

        resetNetwork.addEventListener("click", function () {

            if (packet) {
                packet.classList.remove("move");
            }

            if (status) {
                status.textContent =
                    "⚪ Network is ready.";
            }

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

        const totalPages = pages.length;

        pages.forEach(function (page) {

            page.classList.remove("flip-next");
            page.classList.remove("flip-prev");

            page.style.opacity = "0";
            page.style.visibility = "hidden";

        });


        if (pages.length >= 2) {

            const firstPage =
                currentBookPage;

            const secondPage =
                currentBookPage + 1;


            if (pages[firstPage]) {

                pages[firstPage].style.opacity = "1";
                pages[firstPage].style.visibility = "visible";

            }


            if (pages[secondPage]) {

                pages[secondPage].style.opacity = "1";
                pages[secondPage].style.visibility = "visible";

            }

        }


        if (bookPageNumber) {

            const start =
                currentBookPage + 1;

            const end =
                Math.min(
                    currentBookPage + 2,
                    totalPages
                );

            bookPageNumber.textContent =
                `${start}–${end} / ${totalPages}`;

        }


        if (prevPage) {

            prevPage.disabled =
                currentBookPage === 0;

        }


        if (nextPage) {

            nextPage.disabled =
                currentBookPage + 2 >= totalPages;

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


    if (pages.length > 0) {
        updateBook();
    }


    /* =====================================================
       NETWORK TROUBLESHOOTER GAME
    ===================================================== */

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


    /* =====================================================
       QUESTIONS
    ===================================================== */

    const questions = [

        {
            question:
                "Which device connects different networks together?",

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
                "Encrypt Wi-Fi",
                "Create VLANs"
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
                "cd",
                "copy"
            ],

            answer: 0
        },


        {
            question:
                "Which protocol is used to securely access a remote Linux server?",

            options: [
                "FTP",
                "HTTP",
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
                "IP address",
                "MAC address",
                "Port number",
                "URL"
            ],

            answer: 1
        },


        {
            question:
                "Which protocol is commonly used to resolve domain names?",

            options: [
                "DNS",
                "DHCP",
                "SSH",
                "ARP"
            ],

            answer: 0
        }

    ];


    /* =====================================================
       GAME VARIABLES
    ===================================================== */

    let gameQuestions = [];

    let currentQuestion = 0;

    let score = 0;

    let lives = 3;

    let level = 1;

    let timeLeft = 30;

    let timer = null;

    let gameStarted = false;

    let answered = false;


    /* =====================================================
       SHUFFLE
    ===================================================== */

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
            ] =
            [
                newArray[j],
                newArray[i]
            ];

        }

        return newArray;

    }


    /* =====================================================
       START GAME
    ===================================================== */

    function startNetworkGame() {

        clearInterval(timer);

        gameStarted = true;

        answered = false;

        score = 0;

        lives = 3;

        level = 1;

        currentQuestion = 0;

        timeLeft = 30;


        gameQuestions =
            shuffle(questions).slice(0, 5);


        if (scoreElement) {
            scoreElement.textContent = score;
        }

        if (livesElement) {
            livesElement.textContent = lives;
        }

        if (levelElement) {
            levelElement.textContent = level;
        }

        if (gameResult) {
            gameResult.style.display = "none";
        }

        if (startGame) {
            startGame.style.display = "none";
        }

        if (nextQuestion) {
            nextQuestion.style.display = "none";
        }

        showQuestion();

    }


    /* =====================================================
       SHOW QUESTION
    ===================================================== */

    function showQuestion() {

        if (!gameStarted) {
            return;
        }


        if (currentQuestion >= gameQuestions.length) {

            finishGame();

            return;

        }


        answered = false;


        const question =
            gameQuestions[currentQuestion];


        if (questionElement) {

            questionElement.textContent =
                question.question;

        }


        if (optionsElement) {

            optionsElement.innerHTML = "";


            question.options.forEach(
                function (option, index) {

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

                            checkAnswer(
                                index,
                                button
                            );

                        }
                    );


                    optionsElement.appendChild(button);

                }
            );

        }


        if (gameStatus) {

            gameStatus.textContent =
                "Choose the correct answer.";

        }


        updateProgress();


        startTimer();

    }


    /* =====================================================
       CHECK ANSWER
    ===================================================== */

    function checkAnswer(selectedIndex, selectedButton) {

        if (answered) {
            return;
        }


        answered = true;

        clearInterval(timer);


        const question =
            gameQuestions[currentQuestion];


        const buttons =
            optionsElement.querySelectorAll(
                ".game-option"
            );


        buttons.forEach(function (button) {

            button.disabled = true;

        });


        if (
            selectedIndex === question.answer
        ) {

            score += 10;


            selectedButton.classList.add(
                "correct"
            );


            if (gameStatus) {

                gameStatus.textContent =
                    "✅ Correct! Great job.";

            }

        } else {

            lives--;


            selectedButton.classList.add(
                "wrong"
            );


            if (buttons[question.answer]) {

                buttons[
                    question.answer
                ].classList.add(
                    "correct"
                );

            }


            if (gameStatus) {

                gameStatus.textContent =
                    "❌ Wrong answer!";

            }

        }


        if (scoreElement) {
            scoreElement.textContent = score;
        }

        if (livesElement) {
            livesElement.textContent = lives;
        }


        if (lives <= 0) {

            setTimeout(function () {

                finishGame();

            }, 1000);

            return;

        }


        if (nextQuestion) {

            nextQuestion.style.display =
                "inline-block";

        }

    }


    /* =====================================================
       NEXT QUESTION
    ===================================================== */

    function goToNextQuestion() {

        if (!gameStarted) {
            return;
        }


        currentQuestion++;


        level =
            currentQuestion + 1;


        if (
            level >
            gameQuestions.length
        ) {

            level =
                gameQuestions.length;

        }


        if (levelElement) {

            levelElement.textContent =
                level;

        }


        if (nextQuestion) {

            nextQuestion.style.display =
                "none";

        }


        showQuestion();

    }


    /* =====================================================
       TIMER
    ===================================================== */

    function startTimer() {

        clearInterval(timer);


        timeLeft = 30;


        if (timerElement) {

            timerElement.textContent =
                timeLeft;

        }


        timer = setInterval(
            function () {

                timeLeft--;


                if (timerElement) {

                    timerElement.textContent =
                        timeLeft;

                }


                if (timeLeft <= 0) {

                    clearInterval(timer);

                    timeOut();

                }

            },
            1000
        );

    }


    /* =====================================================
       TIME OUT
    ===================================================== */

    function timeOut() {

        if (answered) {
            return;
        }


        answered = true;

        lives--;


        if (livesElement) {

            livesElement.textContent =
                lives;

        }


        if (gameStatus) {

            gameStatus.textContent =
                "⏰ Time's up!";

        }


        const question =
            gameQuestions[currentQuestion];


        const buttons =
            optionsElement.querySelectorAll(
                ".game-option"
            );


        buttons.forEach(function (button) {

            button.disabled = true;

        });


        if (buttons[question.answer]) {

            buttons[
                question.answer
            ].classList.add(
                "correct"
            );

        }


        if (lives <= 0) {

            setTimeout(function () {

                finishGame();

            }, 1000);

            return;

        }


        if (nextQuestion) {

            nextQuestion.style.display =
                "inline-block";

        }

    }


    /* =====================================================
       PROGRESS
    ===================================================== */

    function updateProgress() {

        if (!progressBar) {
            return;
        }


        const total =
            gameQuestions.length || 5;


        const progress =
            (currentQuestion / total) * 100;


        progressBar.style.width =
            `${progress}%`;

    }


    /* =====================================================
       FINISH GAME
    ===================================================== */

    function finishGame() {

        clearInterval(timer);

        gameStarted = false;


        if (progressBar) {

            progressBar.style.width =
                "100%";

        }


        if (finalScore) {

            finalScore.textContent =
                score;

        }


        if (finalMessage) {

            if (lives <= 0) {

                finalMessage.textContent =
                    "Game Over! Try again and improve your networking knowledge.";

            } else if (score >= 40) {

                finalMessage.textContent =
                    "Excellent! You have strong networking knowledge. 🚀";

            } else if (score >= 20) {

                finalMessage.textContent =
                    "Good job! Keep practicing networking. 💪";

            } else {

                finalMessage.textContent =
                    "Keep learning and try again! 📚";

            }

        }


        if (gameResult) {

            gameResult.style.display =
                "block";

        }


        if (startGame) {

            startGame.style.display =
                "inline-block";

            startGame.textContent =
                "🚀 Start Game";

        }


        if (nextQuestion) {

            nextQuestion.style.display =
                "none";

        }

    }


    /* =====================================================
       RESET GAME
    ===================================================== */

    function resetNetworkGame() {

        clearInterval(timer);

        gameStarted = false;

        answered = false;

        score = 0;

        lives = 3;

        level = 1;

        currentQuestion = 0;

        timeLeft = 30;


        if (scoreElement) {
            scoreElement.textContent = "0";
        }

        if (livesElement) {
            livesElement.textContent = "3";
        }

        if (levelElement) {
            levelElement.textContent = "1";
        }

        if (timerElement) {
            timerElement.textContent = "30";
        }


        if (progressBar) {

            progressBar.style.width =
                "0%";

        }


        if (questionElement) {

            questionElement.textContent =
                "Click Start Game to begin!";

        }


        if (optionsElement) {

            optionsElement.innerHTML = "";

        }


        if (gameStatus) {

            gameStatus.textContent =
                "Ready?";

        }


        if (gameResult) {

            gameResult.style.display =
                "none";

        }


        if (startGame) {

            startGame.style.display =
                "inline-block";

        }


        if (nextQuestion) {

            nextQuestion.style.display =
                "none";

        }

    }


    /* =====================================================
       GAME BUTTON EVENTS
    ===================================================== */

    if (startGame) {

        startGame.addEventListener(
            "click",
            startNetworkGame
        );

    }


    if (nextQuestion) {

        nextQuestion.addEventListener(
            "click",
            goToNextQuestion
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


    /* =====================================================
       INITIAL GAME STATE
    ===================================================== */

    resetNetworkGame();


    /* =====================================================
       ACTIVE NAVBAR SECTION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    window.addEventListener(
        "scroll",
        function () {

            let current = "";


            sections.forEach(function (section) {

                const sectionTop =
                    section.offsetTop - 150;

                const sectionHeight =
                    section.offsetHeight;


                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY <
                    sectionTop + sectionHeight
                ) {

                    current =
                        section.getAttribute("id");

                }

            });


            navLinks.forEach(function (link) {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute("href") ===
                    "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            });

        }
    );


    /* =====================================================
       PREVENT BROKEN EXTERNAL LINKS
    ===================================================== */

    document.querySelectorAll(
        'a[target="_blank"]'
    ).forEach(function (link) {

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });


    console.log(
        "✅ Badhon Portfolio JavaScript Loaded Successfully!"
    );

});
