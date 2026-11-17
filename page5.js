
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const buttonArea = document.getElementById("buttonArea");
const noMessage = document.getElementById("noMessage");
const celebration = document.getElementById("celebration");

let moveCount = 0;

// Playful moving NOT YET button on desktop
noBtn.addEventListener("mouseenter", () => {

    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
        moveCount < 4) {

        const maxX = Math.max(0, buttonArea.clientWidth - noBtn.offsetWidth);
        const maxY = Math.max(0, buttonArea.clientHeight - noBtn.offsetHeight);

        noBtn.style.position = "absolute";
        noBtn.style.left = Math.random() * maxX + "px";
        noBtn.style.top = Math.random() * maxY + "px";

        moveCount++;
    }

});

// NOT YET choice
noBtn.addEventListener("click", () => {

    celebration.classList.remove("show");
    noMessage.classList.add("show");

});

// YES choice
yesBtn.addEventListener("click", () => {

    noMessage.classList.remove("show");
    celebration.classList.add("show");

    createCelebration();

    celebration.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});

// Colourful confetti
function createCelebration() {

    const emojis = ["🎉", "💗", "🌸", "✨", "🎊", "🌈", "🦋"];

    for (let i = 0; i < 65; i++) {

        const piece = document.createElement("span");

        piece.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        piece.style.position = "fixed";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.top = "-30px";
        piece.style.fontSize = (18 + Math.random() * 20) + "px";
        piece.style.zIndex = "9999";
        piece.style.pointerEvents = "none";
        piece.style.transition =
            `transform ${2 + Math.random() * 3}s linear, opacity 3s`;

        document.body.appendChild(piece);

        requestAnimationFrame(() => {
            piece.style.transform =
                `translateY(${window.innerHeight + 80}px) rotate(${Math.random() * 700}deg)`;
            piece.style.opacity = "0";
        });

        setTimeout(() => piece.remove(), 5500);
    }
}
