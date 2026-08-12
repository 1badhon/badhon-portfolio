
/* =========================================================
   NAVBAR
========================================================= */

const nav = document.querySelector("nav");
const menuToggle = document.getElementById("menuToggle");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

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


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICK
========================================================= */

document.querySelectorAll("nav ul li a").forEach(link => {

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


/* =========================================================
   POWER SWITCH
   IMPORTANT: POWER BUTTON CODE
========================================================= */

const powerSwitch = document.getElementById("powerSwitch");

if (powerSwitch) {

    powerSwitch.addEventListener("click", () => {

        document.body.classList.toggle("lights-off");

    });

}


/* =========================================================
   TYPING EFFECT
========================================================= */

const typingElement = document.getElementById("typing");

const typingText = "Aspiring Network Engineer";

let typingIndex = 0;
let deleting = false;

function typingEffect() {

    if (!typingElement) return;

    if (!deleting) {

        typingElement.textContent =
            typingText.substring(0, typingIndex + 1);

        typingIndex++;

        if (typingIndex === typingText.length) {

            deleting = true;

            setTimeout(typingEffect, 1800);

            return;
        }

    } else {

        typingElement.textContent =
            typingText.substring(0, typingIndex - 1);

        typingIndex--;

        if (typingIndex === 0) {

            deleting = false;

        }

    }

    setTimeout(
        typingEffect,
        deleting ? 60 : 100
    );
}

typingEffect();


/* =========================================================
   NETWORK TROUBLESHOOTER GAME
========================================================= */

const questions = [

    {
        question: "Which device is mainly used to connect different networks?",
        options: [
            "Switch",
            "Router",
            "Hub",
            "Repeater"
        ],
        answer: 1
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
        question: "What does DNS translate?",
        options: [
            "MAC address to IP",
            "Domain name to IP address",
            "IP to MAC only",
            "Port to protocol"
        ],
        answer: 1
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
        question: "How many bits are in an IPv4 address?",
        options: [
            "16 bits",
            "32 bits",
            "64 bits",
            "128 bits"
        ],
        answer: 1
    }

];


/* =========================================================
   GAME VARIABLES
========================================================= */

let currentQuestion = 0;
let score = 0;
let lives = 3;
let gameStarted = false;
let timer = 30;
let timerInterval = null;


/* =========================================================
   GAME ELEMENTS
========================================================= */

const startGame =
    document.getElementById("startGame");

const nextQuestion =
    document.getElementById("nextQuestion");

const resetGame =
    document.getElementById("resetGame");

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

const playAgain =
    document.getElementById("playAgain");


/* =========================================================
   START GAME
========================================================= */

if (startGame) {

    startGame.addEventListener("click", () => {

        startGame.style.display = "none";

        gameResult.style.display = "none";

        currentQuestion = 0;
        score = 0;
        lives = 3;
        timer = 30;
        gameStarted = true;

        updateGameInfo();

        gameStatus.textContent =
            "Game Started! Choose the correct answer.";

        startTimer();

        showQuestion();

    });

}


/* =========================================================
   SHOW QUESTION
========================================================= */

function showQuestion() {

    if (!gameStarted) return;

    if (currentQuestion >= questions.length) {

        finishGame();

        return;
    }

    const q = questions[currentQuestion];

    gameQuestion.textContent =
        q.question;

    gameOptions.innerHTML = "";

    q.options.forEach((option, index) => {

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

    });

    updateProgress();

}


/* =========================================================
   CHECK ANSWER
========================================================= */

function checkAnswer(selected, clickedButton) {

    if (!gameStarted) return;

    const q = questions[currentQuestion];

    const buttons =
        gameOptions.querySelectorAll(
            ".game-option"
        );

    buttons.forEach(button => {
        button.disabled = true;
    });


    if (selected === q.answer) {

        clickedButton.classList.add("correct");

        score += 10;

        gameStatus.textContent =
            "✅ Correct Answer!";

        gameStatus.style.color =
            "#22c55e";

    } else {

        clickedButton.classList.add("wrong");

        lives--;

        buttons[q.answer].classList.add(
            "correct"
        );

        gameStatus.textContent =
            "❌ Wrong Answer!";

        gameStatus.style.color =
            "#ef4444";

    }

    updateGameInfo();


    if (lives <= 0) {

        setTimeout(() => {

            finishGame();

        }, 1000);

        return;
    }


    nextQuestion.style.display =
        "inline-block";

}


/* =========================================================
   NEXT QUESTION
========================================================= */

if (nextQuestion) {

    nextQuestion.addEventListener(
        "click",
        () => {

            currentQuestion++;

            nextQuestion.style.display =
                "none";

            gameStatus.style.color =
                "#38bdf8";

            gameStatus.textContent =
                "Choose the correct answer.";

            showQuestion();

        }
    );

}


/* =========================================================
   TIMER
========================================================= */

function startTimer() {

    clearInterval(timerInterval);

    timer = 30;

    timerElement.textContent =
        timer;

    timerInterval = setInterval(() => {

        if (!gameStarted) return;

        timer--;

        timerElement.textContent =
            timer;

        if (timer <= 0) {

            clearInterval(timerInterval);

            lives--;

            updateGameInfo();

            gameStatus.textContent =
                "⏰ Time's up!";

            gameStatus.style.color =
                "#ef4444";


            if (lives <= 0) {

                finishGame();

            } else {

                currentQuestion++;

                setTimeout(() => {

                    gameStatus.style.color =
                        "#38bdf8";

                    showQuestion();

                    startTimer();

                }, 1000);

            }

        }

    }, 1000);

}


/* =========================================================
   UPDATE GAME INFO
========================================================= */

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
            Math.min(
                currentQuestion + 1,
                questions.length
            );

    }

    if (timerElement) {

        timerElement.textContent =
            timer;

    }

}


/* =========================================================
   PROGRESS BAR
========================================================= */

function updateProgress() {

    if (!progressBar) return;

    const progress =
        (currentQuestion /
            questions.length) * 100;

    progressBar.style.width =
        progress + "%";

}


/* =========================================================
   FINISH GAME
========================================================= */

function finishGame() {

    gameStarted = false;

    clearInterval(timerInterval);

    gameOptions.innerHTML = "";

    nextQuestion.style.display =
        "none";

    gameResult.style.display =
        "block";

    finalScore.textContent =
        score;


    if (score >= 40) {

        finalMessage.textContent =
            "Excellent! Your networking knowledge is very strong. 🚀";

    } else if (score >= 20) {

        finalMessage.textContent =
            "Good job! Keep practicing networking. 💻";

    } else {

        finalMessage.textContent =
            "Keep learning and try again! 📚";

    }

}


/* =========================================================
   RESET GAME
========================================================= */

if (resetGame) {

    resetGame.addEventListener(
        "click",
        resetGameFunction
    );

}


function resetGameFunction() {

    clearInterval(timerInterval);

    gameStarted = false;

    currentQuestion = 0;

    score = 0;

    lives = 3;

    timer = 30;

    updateGameInfo();

    gameQuestion.textContent =
        "Click Start Game to begin.";

    gameOptions.innerHTML = "";

    gameStatus.textContent =
        "Ready?";

    gameStatus.style.color =
        "#38bdf8";

    progressBar.style.width =
        "0%";

    nextQuestion.style.display =
        "none";

    gameResult.style.display =
        "none";

    startGame.style.display =
        "inline-block";

}


/* =========================================================
   PLAY AGAIN
========================================================= */

if (playAgain) {

    playAgain.addEventListener(
        "click",
        () => {

            resetGameFunction();

            startGame.click();

        }
    );

}


/* =========================================================
   BACK TO TOP
========================================================= */

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 300) {

        topBtn.style.display =
            "block";

    } else {

        topBtn.style.display =
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
   PARTICLES.JS
========================================================= */

if (
    typeof particlesJS !== "undefined" &&
    document.getElementById("particles-js")
) {

    particlesJS(
        "particles-js",
        {
            particles: {

                number: {
                    value: 70,
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
                    opacity: 0.3,
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
                        mode: "repulse"
                    },

                    onclick: {
                        enable: true,
                        mode: "push"
                    },

                    resize: true

                }

            },

            retina_detect: true
        }
    );

}
/* =====================================================
   NETWORKING BLOG - BOOK
===================================================== */

const bookContainer = document.getElementById("bookPages");
const nextBookBtn = document.getElementById("nextPage");
const prevBookBtn = document.getElementById("prevPage");
const bookNumber = document.getElementById("bookPageNumber");

if (
    bookContainer &&
    nextBookBtn &&
    prevBookBtn &&
    bookNumber
) {

    const bookPages = Array.from(
        bookContainer.querySelectorAll(".flip-page")
    );

    let currentPair = 0;

    const totalPairs = Math.ceil(
        bookPages.length / 2
    );


    /* =========================
       SHOW CURRENT PAGES
    ========================= */

    function showBookPages() {

        bookPages.forEach((page) => {

            page.style.display = "none";
            page.style.visibility = "hidden";
            page.style.opacity = "0";

            page.classList.remove(
                "flip-next",
                "flip-prev"
            );

        });


        const leftIndex = currentPair * 2;
        const rightIndex = leftIndex + 1;


        if (bookPages[leftIndex]) {

            bookPages[leftIndex].style.display = "block";
            bookPages[leftIndex].style.visibility = "visible";
            bookPages[leftIndex].style.opacity = "1";
            bookPages[leftIndex].style.zIndex = "10";

        }


        if (bookPages[rightIndex]) {

            bookPages[rightIndex].style.display = "block";
            bookPages[rightIndex].style.visibility = "visible";
            bookPages[rightIndex].style.opacity = "1";
            bookPages[rightIndex].style.zIndex = "9";

        }


        /* Page number */

        const firstPage = leftIndex + 1;

        const lastPage = Math.min(
            rightIndex + 1,
            bookPages.length
        );

        bookNumber.textContent =
            `${firstPage}–${lastPage} / ${bookPages.length}`;


        /* Button state */

        prevBookBtn.disabled =
            currentPair === 0;

        nextBookBtn.disabled =
            currentPair >= totalPairs - 1;

    }


    /* =========================
       NEXT
    ========================= */

    nextBookBtn.addEventListener("click", function (event) {

        event.preventDefault();

        if (currentPair >= totalPairs - 1) {
            return;
        }


        const leftPage =
            bookPages[currentPair * 2];

        const rightPage =
            bookPages[currentPair * 2 + 1];


        if (leftPage) {
            leftPage.classList.add("flip-next");
        }

        if (rightPage) {
            rightPage.classList.add("flip-next");
        }


        setTimeout(function () {

            currentPair++;

            showBookPages();

        }, 800);

    });


    /* =========================
       PREVIOUS
    ========================= */

    prevBookBtn.addEventListener("click", function (event) {

        event.preventDefault();

        if (currentPair <= 0) {
            return;
        }


        currentPair--;

        showBookPages();

    });


    /* =========================
       START
    ========================= */

    showBookPages();



}
/* =========================================================
   ASK ABOUT BADHON
========================================================= */

const userQuestion =
    document.getElementById("userQuestion");

const sendQuestion =
    document.getElementById("sendQuestion");

const chatMessages =
    document.getElementById("chatMessages");


/* =========================
   BADHON INFORMATION
========================= */

const badhonInfo = {

    name:
        "Badhon Biswas",

    education:
        "Badhon Biswas is a Diploma in Computer Science & Technology (Networking) student from Magura Polytechnic Institute.",

    school:
        "Badhon completed SSC (Vocational) from Sreepur Govt. M.C Pilot High School with a GPA of 4.93.",

    skills:
        "Badhon's technical skills include Networking Fundamentals, Cisco Packet Tracer, MikroTik Basics, Windows Installation, Ubuntu Linux, HTML, CSS, Git and GitHub.",

    networking:
        "Badhon is passionate about computer networking, Cisco, MikroTik, Linux and secure network infrastructure.",

    projects:
        "Badhon's projects include a Personal Portfolio Website, Cisco Packet Tracer Networking Lab and IP Addressing & Subnetting practice.",

    location:
        "Badhon is from Magura, Bangladesh.",

    career:
        "Badhon is interested in Networking and is looking for an Industrial Attachment opportunity to improve practical networking skills.",

    github:
        "Badhon's GitHub profile is github.com/1badhon.",

    linkedin:
        "You can find Badhon on LinkedIn through his portfolio's LinkedIn profile.",

    contact:
        "You can contact Badhon through the email and phone number listed in the Contact section of this portfolio.",

    portfolio:
        "This portfolio showcases Badhon's networking skills, education, projects, networking notes and interactive Network Troubleshooter game."

};


/* =========================
   ADD BOT MESSAGE
========================= */

function addBotMessage(text) {

    const message =
        document.createElement("div");

    message.className =
        "bot-message";

    message.innerHTML = `

        <div class="message-icon">
            🤖
        </div>

        <div class="message-content">

            <strong>Badhon Assistant</strong>

            <p>${text}</p>

        </div>
    `;

    chatMessages.appendChild(message);

    scrollChat();

}


/* =========================
   ADD USER MESSAGE
========================= */

function addUserMessage(text) {

    const message =
        document.createElement("div");

    message.className =
        "user-message";

    message.innerHTML = `
        <p>${escapeHTML(text)}</p>
    `;

    chatMessages.appendChild(message);

    scrollChat();

}


/* =========================
   TYPING ANIMATION
========================= */

function showTyping() {

    const typing =
        document.createElement("div");

    typing.className =
        "bot-message";

    typing.id =
        "typingIndicator";

    typing.innerHTML = `

        <div class="message-icon">
            🤖
        </div>

        <div class="message-content">

            <strong>Badhon Assistant</strong>

            <div class="typing-message">

                <span></span>
                <span></span>
                <span></span>

            </div>

        </div>
    `;

    chatMessages.appendChild(typing);

    scrollChat();
}


function removeTyping() {

    const typing =
        document.getElementById(
            "typingIndicator"
        );

    if (typing) {
        typing.remove();
    }
}


/* =========================
   SCROLL CHAT
========================= */

function scrollChat() {

    chatMessages.scrollTop =
        chatMessages.scrollHeight;

}


/* =========================
   ESCAPE HTML
========================= */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


/* =========================
   FIND ANSWER
========================= */

function getBadhonAnswer(question) {

    const q =
        question
            .toLowerCase()
            .trim();


    /* GREETING */

    if (
        q.includes("hello") ||
        q.includes("hi") ||
        q.includes("hey") ||
        q.includes("হাই") ||
        q.includes("হ্যালো")
    ) {

        return `
            Hello! 👋
            I'm Badhon's personal assistant.
            You can ask me about his education,
            skills, projects, networking or career.
        `;

    }


    /* NAME */

    if (
        q.includes("name") ||
        q.includes("নাম") ||
        q.includes("who is badhon") ||
        q.includes("who are you")
    ) {

        return `
            His name is <strong>Badhon Biswas</strong>.
            He is a Diploma student interested in
            Networking and Computer Technology.
        `;

    }


    /* EDUCATION */

    if (
        q.includes("education") ||
        q.includes("study") ||
        q.includes("student") ||
        q.includes("পড়াশোনা") ||
        q.includes("শিক্ষা") ||
        q.includes("কোথায় পড়")
    ) {

        return badhonInfo.education;

    }


    /* SCHOOL */

    if (
        q.includes("ssc") ||
        q.includes("school") ||
        q.includes("স্কুল") ||
        q.includes("gpa")
    ) {

        return badhonInfo.school;

    }


    /* SKILLS */

    if (
        q.includes("skill") ||
        q.includes("skills") ||
        q.includes("দক্ষতা") ||
        q.includes("কি কি পারে") ||
        q.includes("কী কী পারে")
    ) {

        return badhonInfo.skills;

    }


    /* NETWORKING */

    if (
        q.includes("network") ||
        q.includes("networking") ||
        q.includes("cisco") ||
        q.includes("mikrotik") ||
        q.includes("linux")
    ) {

        return badhonInfo.networking;

    }


    /* PROJECTS */

    if (
        q.includes("project") ||
        q.includes("projects") ||
        q.includes("প্রজেক্ট") ||
        q.includes("প্রজেক্টগুলো")
    ) {

        return badhonInfo.projects;

    }


    /* LOCATION */

    if (
        q.includes("where") ||
        q.includes("location") ||
        q.includes("from") ||
        q.includes("কোথায়") ||
        q.includes("কোথায়") ||
        q.includes("বাড়ি") ||
        q.includes("বাড়ি")
    ) {

        return badhonInfo.location;

    }


    /* CAREER */

    if (
        q.includes("career") ||
        q.includes("future") ||
        q.includes("job") ||
        q.includes("attachment") ||
        q.includes("industrial")
    ) {

        return badhonInfo.career;

    }


    /* GITHUB */

    if (
        q.includes("github") ||
        q.includes("গিটহাব")
    ) {

        return badhonInfo.github;

    }


    /* LINKEDIN */

    if (
        q.includes("linkedin") ||
        q.includes("লিংকডইন")
    ) {

        return badhonInfo.linkedin;

    }


    /* CONTACT */

    if (
        q.includes("contact") ||
        q.includes("email") ||
        q.includes("phone") ||
        q.includes("যোগাযোগ")
    ) {

        return badhonInfo.contact;

    }


    /* PORTFOLIO */

    if (
        q.includes("portfolio") ||
        q.includes("website") ||
        q.includes("ওয়েবসাইট") ||
        q.includes("ওয়েবসাইট")
    ) {

        return badhonInfo.portfolio;

    }


    /* DEFAULT */

    return `
        Sorry! 🤔 I don't know the answer to
        that question yet.

        Try asking me about:
        <strong>Education, Skills, Projects,
        Networking, GitHub, LinkedIn,
        Career or Location.</strong>
    `;

}


/* =========================
   ASK QUESTION
========================= */

function askQuestion() {

    const question =
        userQuestion.value.trim();


    if (!question) {
        return;
    }


    /* USER MESSAGE */

    addUserMessage(question);

    userQuestion.value = "";


    /* TYPING */

    showTyping();


    /* ANSWER */

    setTimeout(() => {

        removeTyping();

        const answer =
            getBadhonAnswer(question);

        addBotMessage(answer);

    }, 600);

}


/* =========================
   SEND BUTTON
========================= */

if (
    sendQuestion &&
    userQuestion &&
    chatMessages
) {

    sendQuestion.addEventListener(
        "click",
        askQuestion
    );


    /* ENTER KEY */

    userQuestion.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();

                askQuestion();

            }

        }
    );

}


/* =========================
   SUGGESTED QUESTIONS
========================= */

function askSuggested(question) {

    if (!userQuestion) {
        return;
    }

    userQuestion.value =
        question;

    askQuestion();

}
/* =========================================================
   ASK ABOUT ME
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const questionInput =
        document.getElementById("aboutQuestion");

    const askButton =
        document.getElementById("askButton");

    const answerBox =
        document.getElementById("aboutAnswer");


    if (!questionInput || !askButton || !answerBox) {
        console.error("Ask About Me elements not found!");
        return;
    }


    function answerQuestion() {

        const question =
            questionInput.value.trim().toLowerCase();


        if (question === "") {

            answerBox.innerHTML =
                "⚠️ Please write a question first.";

            return;
        }


        let answer = "";


        /* NAME */

        if (
            question.includes("name") ||
            question.includes("নাম")
        ) {

            answer =
                "আমার নাম Badhon Biswas।";

        }


        /* EDUCATION */

        else if (
            question.includes("education") ||
            question.includes("study") ||
            question.includes("student") ||
            question.includes("পড়াশোনা") ||
            question.includes("শিক্ষা")
        ) {

            answer =
                "আমি Diploma in Computer Science & Technology (Networking)-এর একজন শিক্ষার্থী।";

        }


        /* SKILLS */

        else if (
            question.includes("skill") ||
            question.includes("skills") ||
            question.includes("দক্ষতা")
        ) {

            answer =
                "আমার skills-এর মধ্যে Networking Fundamentals, Cisco Packet Tracer, MikroTik Basics, Windows Installation, Ubuntu Linux, HTML, CSS এবং Git & GitHub রয়েছে।";

        }


        /* NETWORKING */

        else if (
            question.includes("network") ||
            question.includes("networking") ||
            question.includes("নেটওয়ার্ক")
        ) {

            answer =
                "আমি Networking, Cisco, MikroTik এবং Linux নিয়ে কাজ করতে এবং শিখতে আগ্রহী।";

        }


        /* CISCO */

        else if (
            question.includes("cisco") ||
            question.includes("packet tracer")
        ) {

            answer =
                "আমি Cisco Packet Tracer ব্যবহার করে basic networking topology এবং device configuration practice করি।";

        }


        /* LINUX */

        else if (
            question.includes("linux") ||
            question.includes("ubuntu")
        ) {

            answer =
                "আমি Ubuntu Linux নিয়ে কাজ ও practice করতে আগ্রহী।";

        }


        /* LOCATION */

        else if (
            question.includes("where") ||
            question.includes("location") ||
            question.includes("কোথায়") ||
            question.includes("ঠিকানা")
        ) {

            answer =
                "আমি Magura, Bangladesh-এর।";

        }


        /* PROJECT */

        else if (
            question.includes("project") ||
            question.includes("projects") ||
            question.includes("প্রজেক্ট")
        ) {

            answer =
                "আমার projects-এর মধ্যে Personal Portfolio Website, Cisco Packet Tracer Lab এবং IP Addressing Practice রয়েছে।";

        }


        /* GITHUB */

        else if (
            question.includes("github")
        ) {

            answer =
                "আমার GitHub profile: github.com/1badhon";

        }


        /* LINKEDIN */

        else if (
            question.includes("linkedin")
        ) {

            answer =
                "আমার LinkedIn profile আমার portfolio-এর Contact section-এ দেওয়া আছে।";

        }


        /* CONTACT */

        else if (
            question.includes("contact") ||
            question.includes("email") ||
            question.includes("যোগাযোগ")
        ) {

            answer =
                "আমার email: badhonbiswas.1.bd@gmail.com";

        }


        /* ABOUT */

        else if (
            question.includes("about") ||
            question.includes("who are you") ||
            question.includes("সম্পর্কে")
        ) {

            answer =
                "আমি Badhon Biswas, একজন Diploma in CST (Networking) শিক্ষার্থী। Networking, Cisco, MikroTik, Linux এবং Web Development নিয়ে কাজ করতে আগ্রহী।";

        }


        /* UNKNOWN QUESTION */

        else {

            answer =
                "দুঃখিত, এই প্রশ্নের উত্তর আমার তথ্যের মধ্যে নেই। আপনি আমার নাম, শিক্ষা, skills, networking, Cisco, Linux, projects, GitHub বা contact সম্পর্কে প্রশ্ন করতে পারেন।";

        }


        answerBox.innerHTML =
            `<span>🤖 ${answer}</span>`;

    }


    /* SEND BUTTON */

    askButton.addEventListener(
        "click",
        answerQuestion
    );


    /* ENTER KEY */

    questionInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                answerQuestion();

            }

        }
    );

});
/* =========================================================
   BADHON PERSONAL ASSISTANT
========================================================= */

const assistantInput =
    document.getElementById("assistantInput");

const assistantSend =
    document.getElementById("assistantSend");

const assistantChat =
    document.getElementById("assistantChat");


/* ---------------------------------------------------------
   ASK QUESTION
--------------------------------------------------------- */

function askQuestion(question) {

    if (!question) return;

    addUserMessage(question);

    assistantInput.value = "";

    showTyping();

    setTimeout(() => {

        removeTyping();

        const answer = getAssistantAnswer(question);

        addBotMessage(answer);

    }, 700);
}


/* ---------------------------------------------------------
   SEND BUTTON
--------------------------------------------------------- */

assistantSend.addEventListener("click", function () {

    const question =
        assistantInput.value.trim();

    if (question === "") {

        assistantInput.focus();

        return;
    }

    askQuestion(question);

});


/* ---------------------------------------------------------
   ENTER KEY
--------------------------------------------------------- */

assistantInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        event.preventDefault();

        const question =
            assistantInput.value.trim();

        if (question !== "") {

            askQuestion(question);

        }

    }

});


/* ---------------------------------------------------------
   ADD USER MESSAGE
--------------------------------------------------------- */

function addUserMessage(message) {

    const div =
        document.createElement("div");

    div.className =
        "assistant-message user-message";

    div.innerHTML = `

        <div class="assistant-avatar">
            👤
        </div>

        <div class="message-content">

            <strong>You</strong>

            <p>${escapeHTML(message)}</p>

        </div>

    `;

    assistantChat.appendChild(div);

    scrollAssistant();
}


/* ---------------------------------------------------------
   ADD BOT MESSAGE
--------------------------------------------------------- */

function addBotMessage(message) {

    const div =
        document.createElement("div");

    div.className =
        "assistant-message bot-message";

    div.innerHTML = `

        <div class="assistant-avatar">
            🤖
        </div>

        <div class="message-content">

            <strong>Badhon Assistant</strong>

            <p>${message}</p>

        </div>

    `;

    assistantChat.appendChild(div);

    scrollAssistant();
}


/* ---------------------------------------------------------
   TYPING
--------------------------------------------------------- */

function showTyping() {

    const div =
        document.createElement("div");

    div.id =
        "assistantTyping";

    div.className =
        "assistant-message";

    div.innerHTML = `

        <div class="assistant-avatar">
            🤖
        </div>

        <div class="message-content">

            <strong>Badhon Assistant</strong>

            <p class="typing-message">
                Typing...
            </p>

        </div>

    `;

    assistantChat.appendChild(div);

    scrollAssistant();
}


function removeTyping() {

    const typing =
        document.getElementById(
            "assistantTyping"
        );

    if (typing) {

        typing.remove();

    }

}


/* ---------------------------------------------------------
   SCROLL CHAT
--------------------------------------------------------- */

function scrollAssistant() {

    assistantChat.scrollTop =
        assistantChat.scrollHeight;

}


/* ---------------------------------------------------------
   ASSISTANT KNOWLEDGE
--------------------------------------------------------- */

function getAssistantAnswer(question) {

    const q =
        question
            .toLowerCase()
            .trim();


    /* WHO ARE YOU */

    if (
        q.includes("তুমি কে") ||
        q.includes("কে তুমি") ||
        q.includes("who are you") ||
        q.includes("your identity")
    ) {

        return `
            আমি <strong>Badhon Sir-এর Personal Assistant</strong> 🤖।
            Badhon Sir সম্পর্কে তথ্য জানতে আপনি আমাকে
            প্রশ্ন করতে পারেন।
        `;

    }


    /* WHO IS BADHON */

    if (
        q.includes("badhon কে") ||
        q.includes("badhon কে") ||
        q.includes("who is badhon") ||
        q.includes("about badhon") ||
        q.includes("badhon biswas কে")
    ) {

        return `
            <strong>Badhon Biswas</strong> একজন
            Diploma in Computer Science & Technology
            (Networking) শিক্ষার্থী।
            তিনি Networking, Cisco, MikroTik, Linux
            এবং Web Development-এর প্রতি আগ্রহী।
        `;

    }


    /* EDUCATION */

    if (
        q.includes("education") ||
        q.includes("পড়াশোনা") ||
        q.includes("শিক্ষা") ||
        q.includes("কী নিয়ে পড়") ||
        q.includes("কি নিয়ে পড়")
    ) {

        return `
            Badhon Sir বর্তমানে
            <strong>Diploma in Computer Science &
            Technology (Networking)</strong>
            নিয়ে পড়াশোনা করছেন।
            তাঁর প্রতিষ্ঠান <strong>Magura Polytechnic
            Institute</strong>।
        `;

    }


    /* SSC */

    if (
        q.includes("ssc") ||
        q.includes("gpa") ||
        q.includes("রেজাল্ট") ||
        q.includes("result")
    ) {

        return `
            Badhon Sir-এর SSC (Vocational)
            GPA হলো <strong>4.93</strong>।
        `;

    }


    /* NETWORKING */

    if (
        q.includes("network") ||
        q.includes("networking") ||
        q.includes("নেটওয়ার্ক")
    ) {

        return `
            Networking Badhon Sir-এর অন্যতম প্রধান
            interest।
            তাঁর skills-এর মধ্যে Networking Fundamentals,
            Cisco Packet Tracer, IP Addressing,
            Subnetting এবং MikroTik Basics রয়েছে।
        `;

    }


    /* CISCO */

    if (
        q.includes("cisco") ||
        q.includes("packet tracer")
    ) {

        return `
            জি। Badhon Sir
            <strong>Cisco Packet Tracer</strong>
            ব্যবহার করে basic networking topology
            design এবং networking practice করেন।
        `;

    }


    /* MIKROTIK */

    if (
        q.includes("mikrotik")
    ) {

        return `
            জি। Badhon Sir-এর
            <strong>MikroTik Basics</strong>
            সম্পর্কে knowledge রয়েছে।
        `;

    }


    /* LINUX */

    if (
        q.includes("linux") ||
        q.includes("ubuntu")
    ) {

        return `
            Badhon Sir <strong>Ubuntu Linux</strong>
            নিয়ে কাজ ও practice করেছেন।
        `;

    }


    /* WEB DEVELOPMENT */

    if (
        q.includes("html") ||
        q.includes("css") ||
        q.includes("javascript") ||
        q.includes("web development") ||
        q.includes("ওয়েব")
    ) {

        return `
            Badhon Sir Web Development-এর প্রতিও
            interested।
            তিনি <strong>HTML, CSS</strong> এবং
            JavaScript নিয়ে project তৈরি করেন।
        `;

    }


    /* GITHUB */

    if (
        q.includes("github") ||
        q.includes("গিটহাব")
    ) {

        return `
            জি। Badhon Sir-এর GitHub account আছে।
            <br><br>

            🐙
            <a
                href="https://github.com/1badhon"
                target="_blank"
                rel="noopener noreferrer"
            >
                Visit Badhon Sir's GitHub
            </a>
        `;

    }


    /* LINKEDIN */

    if (
        q.includes("linkedin") ||
        q.includes("লিংকডইন")
    ) {

        return `
            জি। Badhon Sir-এর LinkedIn profile আছে।
            <br><br>

            🔗
            <a
                href="https://www.linkedin.com/in/badhon-biswas-5a8320334/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Visit LinkedIn
            </a>
        `;

    }


    /* PROJECTS */

    if (
        q.includes("project") ||
        q.includes("projects") ||
        q.includes("প্রজেক্ট") ||
        q.includes("প্রজেক্টগুলো")
    ) {

        return `
            Badhon Sir-এর portfolio-তে বর্তমানে
            কয়েকটি project রয়েছে:
            <br><br>

            🚀 Portfolio Website<br>
            🌐 Cisco Packet Tracer Lab<br>
            🧮 IP Addressing Practice
        `;

    }


    /* SKILLS */

    if (
        q.includes("skill") ||
        q.includes("skills") ||
        q.includes("দক্ষতা") ||
        q.includes("কি কি জানে") ||
        q.includes("কী কী জানে")
    ) {

        return `
            Badhon Sir-এর technical skills:
            <br><br>

            ✔ Networking Fundamentals<br>
            ✔ Cisco Packet Tracer<br>
            ✔ MikroTik Basics<br>
            ✔ Windows Installation<br>
            ✔ Ubuntu Linux<br>
            ✔ HTML<br>
            ✔ CSS<br>
            ✔ Git & GitHub
        `;

    }


    /* CAREER */

    if (
        q.includes("career") ||
        q.includes("future") ||
        q.includes("লক্ষ্য") ||
        q.includes("ভবিষ্যৎ") ||
        q.includes("goal")
    ) {

        return `
            Badhon Sir-এর লক্ষ্য হলো Networking
            field-এ নিজের practical skills আরও
            উন্নত করা এবং একজন দক্ষ
            <strong>Network Engineer</strong> হিসেবে
            career তৈরি করা।
        `;

    }


    /* INDUSTRIAL ATTACHMENT */

    if (
        q.includes("industrial") ||
        q.includes("attachment") ||
        q.includes("internship") ||
        q.includes("ইন্ডাস্ট্রিয়াল")
    ) {

        return `
            বর্তমানে Badhon Sir practical experience
            অর্জনের জন্য একটি
            <strong>Industrial Attachment</strong>
            opportunity খুঁজছেন।
        `;

    }


    /* CONTACT */

    if (
        q.includes("contact") ||
        q.includes("যোগাযোগ") ||
        q.includes("email") ||
        q.includes("phone") ||
        q.includes("মোবাইল")
    ) {

        return `
            Badhon Sir-এর সাথে যোগাযোগ করতে পারেন:
            <br><br>

            📧 badhonbiswas.1.bd@gmail.com<br>
            📱 01866314941<br>
            📍 Magura, Bangladesh
        `;

    }


    /* LOCATION */

    if (
        q.includes("কোথায়") ||
        q.includes("where") ||
        q.includes("location") ||
        q.includes("magura")
    ) {

        return `
            Badhon Sir Bangladesh-এর
            <strong>Magura</strong> থেকে।
        `;

    }


    /* CV */

    if (
        q.includes("cv") ||
        q.includes("resume") ||
        q.includes("সিভি")
    ) {

        return `
            অবশ্যই। Badhon Sir-এর CV portfolio-এর
            <strong>Download CV</strong> button থেকে
            দেখা বা download করা যাবে।
        `;

    }


    /* HELLO */

    if (
        q.includes("hello") ||
        q.includes("hi") ||
        q.includes("হ্যালো") ||
        q.includes("হাই")
    ) {

        return `
            Hello! 👋
            আমি Badhon Sir-এর Personal Assistant।
            Badhon Sir সম্পর্কে কী জানতে চান?
        `;

    }


    /* THANK YOU */

    if (
        q.includes("thank") ||
        q.includes("ধন্যবাদ")
    ) {

        return `
            You're welcome! 😊
            Badhon Sir সম্পর্কে আরও কিছু জানতে
            চাইলে প্রশ্ন করতে পারেন।
        `;

    }


    /* DEFAULT */

    return `
        দুঃখিত! 😅 এই প্রশ্নটির উত্তর আমার
        database-এ এখনো নেই।
        <br><br>

        আপনি Badhon Sir-এর
        <strong>Education, Skills, Networking,
        Projects, GitHub, LinkedIn, Career</strong>
        অথবা Contact সম্পর্কে প্রশ্ন করতে পারেন।
    `;

}


/* ---------------------------------------------------------
   SECURITY
--------------------------------------------------------- */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}
