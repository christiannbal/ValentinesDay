// Create an audio object for the music
const backgroundMusic = new Audio("music/Sexy.mp3"); // Updated file name
backgroundMusic.loop = true;

// Function to fade in music & start at 15 seconds
function fadeInMusic(audio) {
    audio.currentTime = 15; // Start at 15 seconds
    audio.volume = 0; // Begin with no volume
    audio.play(); // Start playing

    let volume = 0;
    let fadeInterval = setInterval(function() {
        if (volume < 1) {
            volume += 0.05; // Gradually increase volume
            audio.volume = volume;
        } else {
            clearInterval(fadeInterval); // Stop increasing volume at max
        }
    }, 200);
}

// Modify "Yes" button event to start music + animations
yesButton.addEventListener("click", function() {
    proposalScreen.style.display = "none"; // Hide first screen
    celebrationScreen.style.display = "block"; // Show celebration screen

    fadeInMusic(backgroundMusic); // Start the music
    startAnimations(); // Start the hearts & spinning "I LOVE YOU" texts
});

// Function to start hearts and "I LOVE YOU" animations
function startAnimations() {
    createFloatingHearts(); // Trigger heart animation
    createSpinningText(); // Trigger spinning "I LOVE YOU" text animation
}

// Function to create floating hearts
function createFloatingHearts() {
    for (let i = 0; i < 30; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// Function to create spinning "I LOVE YOU" text
function createSpinningText() {
    for (let i = 0; i < 10; i++) {
        let spinText = document.createElement("div");
        spinText.classList.add("spinning-text");
        spinText.innerHTML = "I LOVE YOU 💖";
        spinText.style.left = Math.random() * 90 + "vw";
        spinText.style.top = Math.random() * 80 + "vh";
        spinText.style.animationDuration = Math.random() * 4 + 3 + "s";
        document.body.appendChild(spinText);

        setTimeout(() => {
            spinText.remove();
        }, 7000);
    }
}
