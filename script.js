/* =========================================================
   PORTFOLIO SCRIPT.JS
   Badhon Biswas | Network Engineer
========================================================= */


/* =========================================================
   1. POWER SWITCH
========================================================= */

const powerSwitch = document.getElementById("powerSwitch");

if (powerSwitch) {
    powerSwitch.addEventListener("click", function () {
        document.body.classList.toggle("lights-off");
    });
}


/* =========================================================
   2. MOBILE NAVBAR
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", function () {

        nav.classList.toggle("menu-open");

        const isOpen = nav.classList.contains("menu-open");

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close Menu" : "Open Menu"
        );
    });


    // Close menu after clicking a link
    const navLinks = nav.querySelectorAll("ul li a");

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


/* =========================================================
   3. SCROLLED NAVBAR
========================================================= */

window.addEventListener("scroll", function () {

    if (nav) {

        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }

    }

});


/* =========================================================
   4. TYPING EFFECT
========================================================= */

const typingElement = document.getElementById("typing");

if (typingElement) {

    const typingTexts = [
        "Aspiring Network Engineer",
        "Networking Enthusiast",
        "Cisco Learner",
        "Linux Enthusiast"
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

                setTimeout(typingEffect, 1500);
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


/* =========================================================
   5. NETWORK LAB
========================================================= */

const startLab = document.getElementById("startLab");
const resetLab = document.getElementById("resetLab");

const packets = document.querySelectorAll(".packet");
const labStatus = document.getElementById("labStatus");

if (startLab) {

    startLab.addEventListener("click", function () {

        packets.forEach(function (packet) {
            packet.classList.add("move");
        });

        if (labStatus) {
            labStatus.textContent =
                "🟢 Network is transmitting packets...";
        }

    });

}


if (resetLab) {

    resetLab.addEventListener("click", function () {

        packets.forEach(function (packet) {
            packet.classList.remove("move");
        });

        if (labStatus) {
            labStatus.textContent =
                "Network Ready";
        }

    });

}


/* =========================================================
   6. NETWORK TROUBLESHOOTER GAME
========================================================= */

const questions = [

    {
        question: "Which device connects different networks together?",
        options: [
            "Switch",
            "Router",
            "Hub",
            "Repeater"
        ],
        answer: 1
    },

    {
        question: "What does IP stand for?",
        options: [
            "Internet Protocol",
            "Internal Program",
            "Internet Process",
            "Interface Protocol"
        ],
        answer: 0
    },

    {
        question: "Which protocol automatically assigns IP addresses?",
        options: [
            "DNS",
            "HTTP",
            "DHCP",
            "FTP"
        ],
        answer: 2
    },

    {
        question: "Which device mainly connects devices inside a LAN?",
        options: [
            "Router",
            "Switch",
            "Modem",
            "Firewall"
        ],
        answer: 1
    },

    {
        question: "Which protocol translates domain names into IP addresses?",
        options: [
            "DHCP",
            "DNS",
            "FTP",
            "SSH"
        ],
        answer: 1
    },

    {
        question: "Which IPv4 address is a private IP address?",
        options: [
            "8.8.8.8",
            "1.1.1.1",
            "192.168.1.10",
            "142.250.1.1"
        ],
        answer: 2
    },

    {
        question: "How many bits are in an IPv4 address?",
        options: [
            "16 bits",
            "32 bits",
            "64 bits",
            "128 bits"
        ],
        answer: 1
    },

    {
        question: "Which command is commonly used to test network connectivity?",
        options: [
            "ping",
            "mkdir",
            "copy",
            "format"
        ],
        answer: 0
    },

    {
        question: "Which device operates mainly at Layer 2?",
        options: [
            "Router",
            "Switch",
            "DNS Server",
            "Modem"
        ],
        answer: 1
    },

    {
        question: "What is the default port for HTTP?",
        options: [
            "21",
            "22",
            "80",
            "443"
        ],
        answer: 2
    }
];


/* Game Elements */

const livesElement = document.getElementById("lives");
const scoreElement = document.getElementById("score");
const levelElement = document.getElementById("gameLevel");
const timerElement = document.getElementById("gameTimer");

const questionElement =
    document.getElementById("gameQuestion");

const optionsElement =
    document.getElementById("gameOptions");

const gameStatus =
    document.getElementById("gameStatus");

const progressBar =
    document.getElementById("gameProgressBar");

const startGameButton =
    document.getElementById("startGame");

const nextQuestionButton =
    document.getElementById("nextQuestion");

const resetGameButton =
    document.getElementById("resetGame");

const gameResult =
    document.getElementById("gameResult");

const finalScore =
    document.getElementById("finalScore");

const finalMessage =
    document.getElementById("finalMessage");

const playAgainButton =
    document.getElementById("playAgain");


/* Game Variables */

let lives = 3;
let score = 0;
let currentQuestion = 0;
let gameTimer = 30;
let timerInterval = null;
let gameStarted = false;
let answered = false;


/* =========================================================
   UPDATE GAME UI
========================================================= */

function updateGameUI() {

    if (livesElement) {
        livesElement.textContent = lives;
    }

    if (scoreElement) {
        scoreElement.textContent = score;
    }

    if (levelElement) {

        const level =
            Math.min(
                Math.floor(currentQuestion / 2) + 1,
                5
            );

        levelElement.textContent = level;
    }

    if (timerElement) {
        timerElement.textContent = gameTimer;
    }

}


/* =========================================================
   LOAD QUESTION
========================================================= */

function loadQuestion() {

    if (!questionElement || !optionsElement) {
        return;
    }

    if (currentQuestion >= questions.length) {
        endGame();
        return;
    }

    answered = false;

    const question =
        questions[currentQuestion];

    questionElement.textContent =
        question.question;

    optionsElement.innerHTML = "";

    question.options.forEach(function (option, index) {

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

        optionsElement.appendChild(button);

    });


    if (gameStatus) {
        gameStatus.textContent =
            "Choose the correct answer!";
    }

    if (nextQuestionButton) {
        nextQuestionButton.style.display = "none";
    }


    /* Progress */

    if (progressBar) {

        const progress =
            (currentQuestion / questions.length) * 100;

        progressBar.style.width =
            progress + "%";
    }


    updateGameUI();
}


/* =========================================================
   CHECK ANSWER
========================================================= */

function checkAnswer(selectedAnswer, selectedButton) {

    if (!gameStarted || answered) {
        return;
    }

    answered = true;

    const question =
        questions[currentQuestion];

    const optionButtons =
        optionsElement.querySelectorAll(".game-option");


    /* Disable all buttons */

    optionButtons.forEach(function (button) {
        button.disabled = true;
    });


    if (selectedAnswer === question.answer) {

        /* Correct */

        selectedButton.classList.add("correct");

        score += 10;

        if (gameStatus) {
            gameStatus.textContent =
                "✅ Correct! +10 points";
        }

    } else {

        /* Wrong */

        selectedButton.classList.add("wrong");

        optionButtons[
            question.answer
        ].classList.add("correct");

        lives--;

        if (gameStatus) {
            gameStatus.textContent =
                "❌ Wrong answer!";
        }

    }


    updateGameUI();


    /* Game Over */

    if (lives <= 0) {

        setTimeout(function () {
            endGame();
        }, 900);

        return;
    }


    /* Show Next Button */

    if (nextQuestionButton) {

        nextQuestionButton.style.display =
            "inline-block";
    }

}


/* =========================================================
   TIMER
========================================================= */

function startTimer() {

    clearInterval(timerInterval);

    timerInterval =
        setInterval(function () {

            if (!gameStarted) {
                return;
            }

            gameTimer--;

            updateGameUI();

            if (gameTimer <= 0) {

                clearInterval(timerInterval);

                lives--;

                if (lives <= 0) {

                    endGame();

                } else {

                    gameTimer = 30;

                    if (gameStatus) {
                        gameStatus.textContent =
                            "⏰ Time's up! Life lost.";
                    }

                    currentQuestion++;

                    loadQuestion();

                    startTimer();
                }

            }

        }, 1000);
}


/* =========================================================
   START GAME
========================================================= */

function startGame() {

    lives = 3;
    score = 0;
    currentQuestion = 0;
    gameTimer = 30;

    gameStarted = true;
    answered = false;

    clearInterval(timerInterval);

    if (gameResult) {
        gameResult.style.display = "none";
    }

    if (startGameButton) {
        startGameButton.style.display = "none";
    }

    loadQuestion();

    startTimer();

    updateGameUI();

}


/* =========================================================
   NEXT QUESTION
========================================================= */

function nextQuestion() {

    if (!gameStarted) {
        return;
    }

    currentQuestion++;

    gameTimer = 30;

    if (currentQuestion >= questions.length) {

        endGame();

        return;
    }

    loadQuestion();

}


/* =========================================================
   END GAME
========================================================= */

function endGame() {

    gameStarted = false;

    clearInterval(timerInterval);

    if (optionsElement) {
        optionsElement.innerHTML = "";
    }

    if (questionElement) {
        questionElement.textContent =
            "Game Finished!";
    }

    if (nextQuestionButton) {
        nextQuestionButton.style.display =
            "none";
    }

    if (gameStatus) {
        gameStatus.textContent =
            "🏆 Challenge Complete!";
    }

    if (gameResult) {
        gameResult.style.display = "block";
    }

    if (finalScore) {
        finalScore.textContent = score;
    }


    if (finalMessage) {

        if (score >= 80) {

            finalMessage.textContent =
                "🔥 Excellent! Your networking knowledge is strong.";

        } else if (score >= 50) {

            finalMessage.textContent =
                "👏 Good job! Keep practicing networking.";

        } else {

            finalMessage.textContent =
                "💪 Keep learning! Practice more networking concepts.";

        }
    }

    updateGameUI();
}


/* =========================================================
   RESET GAME
========================================================= */

function resetGame() {

    clearInterval(timerInterval);

    lives = 3;
    score = 0;
    currentQuestion = 0;
    gameTimer = 30;

    gameStarted = false;
    answered = false;

    if (questionElement) {
        questionElement.textContent =
            "Loading Question...";
    }

    if (optionsElement) {
        optionsElement.innerHTML = "";
    }

    if (gameStatus) {
        gameStatus.textContent =
            "Ready?";
    }

    if (gameResult) {
        gameResult.style.display = "none";
    }

    if (nextQuestionButton) {
        nextQuestionButton.style.display =
            "none";
    }

    if (startGameButton) {
        startGameButton.style.display =
            "inline-block";
    }

    if (progressBar) {
        progressBar.style.width = "0%";
    }

    updateGameUI();
}


/* =========================================================
   GAME BUTTON EVENTS
========================================================= */

if (startGameButton) {

    startGameButton.addEventListener(
        "click",
        startGame
    );
}


if (nextQuestionButton) {

    nextQuestionButton.addEventListener(
        "click",
        nextQuestion
    );
}


if (resetGameButton) {

    resetGameButton.addEventListener(
        "click",
        resetGame
    );
}


if (playAgainButton) {

    playAgainButton.addEventListener(
        "click",
        startGame
    );
}


/* =========================================================
   7. NETWORKING BLOG BOOK
========================================================= */

const pages =
    document.querySelectorAll(".flip-page");

const prevPage =
    document.getElementById("prevPage");

const nextPage =
    document.getElementById("nextPage");

const bookPageNumber =
    document.getElementById("bookPageNumber");


let bookIndex = 0;


/*
   Pages are arranged as:

   1-2
   3-4
   5-6

   So index moves:
   0 -> 2 -> 4
*/


function updateBook() {

    if (!pages.length) {
        return;
    }


    pages.forEach(function (page) {

        page.style.opacity = "0";
        page.style.visibility = "hidden";
        page.style.zIndex = "1";

        page.classList.remove(
            "flip-next",
            "flip-prev"
        );
    });


    /* Current two pages */

    if (pages[bookIndex]) {

        pages[bookIndex].style.opacity = "1";
        pages[bookIndex].style.visibility = "visible";
        pages[bookIndex].style.zIndex = "10";
    }


    if (pages[bookIndex + 1]) {

        pages[bookIndex + 1].style.opacity = "1";
        pages[bookIndex + 1].style.visibility = "visible";
        pages[bookIndex + 1].style.zIndex = "9";
    }


    if (bookPageNumber) {

        bookPageNumber.textContent =
            `${bookIndex + 1}–${Math.min(
                bookIndex + 2,
                pages.length
            )} / ${pages.length}`;
    }


    if (prevPage) {
        prevPage.disabled =
            bookIndex === 0;
    }

    if (nextPage) {
        nextPage.disabled =
            bookIndex + 2 >= pages.length;
    }
}


if (nextPage) {

    nextPage.addEventListener(
        "click",
        function () {

            if (bookIndex + 2 >= pages.length) {
                return;
            }

            bookIndex += 2;

            updateBook();
        }
    );
}


if (prevPage) {

    prevPage.addEventListener(
        "click",
        function () {

            if (bookIndex === 0) {
                return;
            }

            bookIndex -= 2;

            updateBook();
        }
    );
}


updateBook();


/* =========================================================
   8. BACK TO TOP BUTTON
========================================================= */

const topButton =
    document.getElementById("topBtn");


window.addEventListener("scroll", function () {

    if (!topButton) {
        return;
    }

    if (window.scrollY > 400) {

        topButton.style.display =
            "block";

    } else {

        topButton.style.display =
            "none";
    }

});


function topFunction() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   9. SMOOTH NAVIGATION
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});


/* =========================================================
   10. INITIAL GAME STATE
========================================================= */

updateGameUI();


/* =========================================================
   SCRIPT LOADED
========================================================= */

console.log(
    "✅ Badhon Portfolio Script Loaded Successfully!"
);
