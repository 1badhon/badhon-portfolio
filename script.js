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

const text = "Aspiring Network Engineer";

let typingIndex = 0;

function typing() {

    if (!typingElement) return;

    if (typingIndex < text.length) {

        typingElement.innerHTML +=
            text.charAt(typingIndex);

        typingIndex++;

        setTimeout(typing, 100);
    }

}


/* ==========================================
   BACK TO TOP BUTTON
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
   PACKET ROUTING GAME
========================================== */

const devices =
    document.querySelectorAll(".route-device");

const gameStatus =
    document.getElementById("gameStatus");

const resetGame =
    document.getElementById("resetGame");

const nextLevel =
    document.getElementById("nextLevel");

const levelTitle =
    document.getElementById("levelTitle");

const questionText =
    document.getElementById("questionText");


/* ==========================================
   GAME LEVELS
========================================== */

const levels = [

    {
        title: "Level 1",

        question:
            "Question: PC → Router → Switch → Server",

        order: [1, 2, 3, 4]
    },

    {
        title: "Level 2",

        question:
            "Question: PC → Switch → Router → Server",

        order: [1, 3, 2, 4]
    },

    {
        title: "Level 3",

        question:
            "Question: Router → PC → Switch → Server",

        order: [2, 1, 3, 4]
    }

];


let currentLevel = 0;

let currentStep = 0;


/* ==========================================
   LOAD LEVEL
========================================== */

function loadLevel() {

    currentStep = 0;

    const level = levels[currentLevel];

    if (levelTitle) {

        levelTitle.textContent =
            level.title;

    }

    if (questionText) {

        questionText.textContent =
            level.question;

    }

    if (gameStatus) {

        gameStatus.textContent =
            "Waiting...";

        gameStatus.style.color =
            "#38bdf8";

    }

    if (nextLevel) {

        nextLevel.style.display =
            "none";

    }


    devices.forEach(device => {

        device.classList.remove("correct");

        device.classList.remove("wrong");

    });

}


/* ==========================================
   DEVICE CLICK
========================================== */

devices.forEach(device => {

    device.addEventListener("click", () => {

        const clickedOrder =
            Number(device.dataset.order);

        const correctOrder =
            levels[currentLevel].order[currentStep];


        /* Already Correct */

        if (
            device.classList.contains("correct")
        ) {

            return;

        }


        /* ==================================
           CORRECT ANSWER
        ================================== */

        if (clickedOrder === correctOrder) {

            device.classList.add("correct");

            currentStep++;


            /* Level Complete */

            if (
                currentStep ===
                levels[currentLevel].order.length
            ) {

                if (gameStatus) {

                    gameStatus.textContent =
                        "🎉 Level Complete!";

                    gameStatus.style.color =
                        "#22c55e";

                }

                if (nextLevel) {

                    nextLevel.style.display =
                        "inline-block";

                }

            } else {

                if (gameStatus) {

                    gameStatus.textContent =
                        "✅ Correct! Continue...";

                    gameStatus.style.color =
                        "#38bdf8";

                }

            }


        }


        /* ==================================
           WRONG ANSWER
        ================================== */

        else {

            if (gameStatus) {

                gameStatus.textContent =
                    "❌ Wrong Route! Try Again.";

                gameStatus.style.color =
                    "#ef4444";

            }


            device.classList.add("wrong");


            setTimeout(() => {

                device.classList.remove("wrong");

            }, 500);


            /* Restart Current Level */

            currentStep = 0;


            devices.forEach(d => {

                d.classList.remove("correct");

            });

        }

    });

});


/* ==========================================
   RESET GAME
========================================== */

if (resetGame) {

    resetGame.addEventListener("click", () => {

        currentLevel = 0;

        loadLevel();

    });

}


/* ==========================================
   NEXT LEVEL
========================================== */

if (nextLevel) {

    nextLevel.addEventListener("click", () => {

        currentLevel++;


        /* All Levels Complete */

        if (currentLevel >= levels.length) {

            if (gameStatus) {

                gameStatus.textContent =
                    "🏆 Congratulations! All Levels Complete!";

                gameStatus.style.color =
                    "#22c55e";

            }

            if (levelTitle) {

                levelTitle.textContent =
                    "🏆 Completed";

            }

            if (questionText) {

                questionText.textContent =
                    "You completed the Packet Routing Challenge!";

            }

            nextLevel.style.display =
                "none";

            return;

        }


        /* Load Next Level */

        loadLevel();

    });

}


/* ==========================================
   START WEBSITE
========================================== */

window.addEventListener("load", () => {

    typing();

    loadLevel();

});
