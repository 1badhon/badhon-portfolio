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

const text = "Aspiring Network Engineer";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}

// Back to Top Button
const btn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// সব HTML লোড হওয়ার পরে চালু হবে
window.onload = function () {
  typing();
};
/* ==========================================
   NETWORK LAB - PULSE ANIMATION
========================================== */

const packet = document.getElementById("packet");
const startBtn = document.getElementById("startPulse");
const stopBtn = document.getElementById("stopPulse");
const statusText = document.getElementById("networkStatus");

let pulseRunning = false;

function startPacket() {

    if (pulseRunning) return;

    pulseRunning = true;

    packet.classList.add("move");

    statusText.innerHTML = "Sending Packet...";
    statusText.style.color = "#22c55e";

    // প্রতি ২ সেকেন্ডে Delivered দেখাবে
    window.packetLoop = setInterval(() => {

        statusText.innerHTML = "Packet Delivered ✔";

        setTimeout(() => {

            if (pulseRunning) {

                statusText.innerHTML = "Sending Packet...";

            }

        }, 800);

    }, 2000);

}

function stopPacket() {

    pulseRunning = false;

    packet.classList.remove("move");

    clearInterval(window.packetLoop);

    statusText.innerHTML = "Waiting...";
    statusText.style.color = "#38bdf8";

}

startBtn.addEventListener("click", startPacket);
stopBtn.addEventListener("click", stopPacket);
/* ===========================
   POWER SWITCH
=========================== */

const powerSwitch = document.getElementById("powerSwitch");

powerSwitch.addEventListener("click", () => {

    // Light Mode Toggle
    document.body.classList.toggle("lights-off");

    // Packet Animation বন্ধ
    if (document.body.classList.contains("lights-off")) {

        stopPacket();

        // Particles বন্ধ
        const particles = document.getElementById("particles-js");
        if (particles) {
            particles.style.display = "none";
        }

    } else {

        // Particles আবার চালু
        const particles = document.getElementById("particles-js");
        if (particles) {
            particles.style.display = "block";
        }

    }

});
/* ===========================
   ROUTING GAME
=========================== */

const devices = document.querySelectorAll(".route-device");
const gameStatus = document.getElementById("gameStatus");
const resetGame = document.getElementById("resetGame");

let currentStep = 1;

devices.forEach(device => {

    device.addEventListener("click", () => {

        const order = Number(device.dataset.order);

        if (order === currentStep) {

            device.classList.add("correct");

            currentStep++;

            if (currentStep === 5) {

                gameStatus.innerHTML = "🎉 Packet Successfully Delivered!";
                gameStatus.style.color = "#22c55e";

            } else {

                gameStatus.innerHTML = `Step ${currentStep - 1} Complete`;
                gameStatus.style.color = "#38bdf8";

            }

        } else {

            device.classList.add("wrong");

            gameStatus.innerHTML = "❌ Wrong Route! Try Again";
            gameStatus.style.color = "#ef4444";

            setTimeout(() => {
                device.classList.remove("wrong");
            }, 500);

        }

    });

});

resetGame.addEventListener("click", () => {

    currentStep = 1;

    gameStatus.innerHTML = "Waiting...";
    gameStatus.style.color = "#38bdf8";

    devices.forEach(device => {
        device.classList.remove("correct");
        device.classList.remove("wrong");
    });

});
