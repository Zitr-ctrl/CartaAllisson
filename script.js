// ========================================
// CARTA DE CUMPLEAÑOS - JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");
    const particlesContainer = document.getElementById("particles");
    const confettiContainer = document.getElementById("confetti");

    // ========================================
    // ABRIR EL SOBRE
    // ========================================
    envelope.addEventListener("click", openEnvelope);

    function openEnvelope() {
        // Añadir clase de animación
        envelope.classList.add("opened");

        // Iniciar confeti
        setTimeout(() => {
            createConfetti();
        }, 500);

        // Mostrar la carta
        setTimeout(() => {
            letter.classList.add("visible");
            startParticles();
            revealContent();
        }, 1000);
    }

    // ========================================
    // ANIMACIÓN DE REVEAL DEL CONTENIDO
    // ========================================
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

    // ========================================
    // PARTÍCULAS DE CORAZONES
    // ========================================
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
        particle.style.animationDuration = (Math.random() * 3 + 4) + "s";
        particle.style.fontSize = (Math.random() * 10 + 15) + "px";
        
        particlesContainer.appendChild(particle);
        
        // Eliminar partícula después de la animación
        setTimeout(() => {
            particle.remove();
        }, 7000);
    }

    // ========================================
    // CONFETI CELEBRATORIO
    // ========================================
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
        
        // Eliminar confeti después de la animación
        setTimeout(() => {
            confetti.remove();
        }, 6000);
    }

    // ========================================
    // PREVENIR ESCROLL DURANTE ANIMACIÓN
    // ========================================
    let scrollLocked = true;
    
    setTimeout(() => {
        scrollLocked = false;
    }, 1500);

    window.addEventListener("scroll", (e) => {
        if (scrollLocked) {
            e.preventDefault();
        }
    });

    // ========================================
    // MENSAJE EN LA CONSOLA
    // ========================================
    console.log("%c💛 ¡Feliz Cumpleaños Allisson! 💛", 
        "color: #FFD700; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px #000;");
    console.log("%cCon todo el amor del mundo ❤️", 
        "color: #FF6B6B; font-size: 14px; font-style: italic;");

});

// ========================================
// INSTRUCCIONES PARA AÑADIR FOTOS
// ========================================
/*
Para añadir tus fotos reales, sigue estos pasos:

1. Copia tus fotos en la carpeta "Carta Allisson Cumpleaños"
2. Renómbralas como: foto1.jpg, foto2.jpg, foto3.jpg, foto4.jpg
3. En el archivo index.html, busca los divs con clase "photo-placeholder"
4. Reemplaza cada uno con:
   
   <div class="photo-frame">
       <img src="foto1.jpg" alt="Momento especial 1">
   </div>

5. Si quieres más de 4 fotos, copia y pega más "photo-frame" en el "photos-grid"
*/