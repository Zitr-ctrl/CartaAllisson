document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");
    const particlesContainer = document.getElementById("particles");
    const confettiContainer = document.getElementById("confetti");

    envelope.addEventListener("click", openEnvelope);

    function openEnvelope() {
        envelope.classList.add("opened");

        const envelopeWrapper = document.querySelector(".envelope-wrapper");
        setTimeout(() => {
            envelopeWrapper.classList.add("hidden");
        }, 500);

        setTimeout(() => {
            createConfetti();
        }, 500);

        setTimeout(() => {
            letter.classList.add("visible");
            startParticles();
            revealContent();
        }, 1000);
    }

    function revealContent() {
        const sections = document.querySelectorAll(".message-section, .photo-gallery, .wishes-section, .final-message");
        sections.forEach((section, index) => {
            section.style.opacity = "0";
            section.style.transform = "translateY(30px)";
            setTimeout(() => {
                section.style.transition = "all 0.8s ease";
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }, 1500 + (index * 500));
        });
    }

    function startParticles() {
        const hearts = ["❤️", "💛", "💖", "✨", "🌟"];
        setInterval(() => {
            if (document.querySelector(".letter.visible")) {
                createParticle(hearts[Math.floor(Math.random() * hearts.length)]);
            }
        }, 800);
    }

    function createParticle(emoji) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.textContent = emoji;
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.top = "100vh";
        particle.style.animationDuration = (Math.random() * 3 + 4) + "s";
        particle.style.fontSize = (Math.random() * 10 + 15) + "px";
        particlesContainer.appendChild(particle);
        setTimeout(() => {
            particle.remove();
        }, 7000);
    }

    function createConfetti() {
        const colors = ["#FFD700", "#FFC107", "#FFEB3B", "#FFF59D", "#FFFFFF", "#1a1a1a"];
        const shapes = ["square", "circle"];
        for (let i = 0; i < 150; i++) {
            setTimeout(() => {
                createConfettiPiece(colors, shapes);
            }, i * 20);
        }
    }

    function createConfettiPiece(colors, shapes) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor = color;
        confetti.style.width = (Math.random() * 10 + 5) + "px";
        confetti.style.height = (Math.random() * 10 + 5) + "px";
        confetti.style.borderRadius = shape === "circle" ? "50%" : "0";
        confetti.style.animationDuration = (Math.random() * 2 + 3) + "s";
        confetti.style.animationDelay = Math.random() * 0.5 + "s";
        confettiContainer.appendChild(confetti);
        setTimeout(() => {
            confetti.remove();
        }, 6000);
    }

    let scrollLocked = true;
    setTimeout(() => {
        scrollLocked = false;
    }, 1500);

    window.addEventListener("scroll", (e) => {
        if (scrollLocked) {
            e.preventDefault();
        }
    });
});