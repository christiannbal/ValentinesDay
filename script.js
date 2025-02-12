// Get elements
const yesButton = document.getElementById("yesButton");
const proposalScreen = document.getElementById("proposalScreen");
const celebrationScreen = document.getElementById("celebrationScreen");
const heartsContainer = document.querySelector(".hearts-container");

// When "Yes" is clicked, switch to the celebration screen
yesButton.addEventListener("click", function() {
    proposalScreen.style.display = "none"; 
    celebrationScreen.style.display = "block"; 
    createFloatingHearts(); 
    createSpinningText(); 
});

var noButton = document.getElementById("no");
noButton.addEventListener("mouseover", function() {
    var i = Math.floor(Math.random() * window.innerWidth - 100);
    var j = Math.floor(Math.random() * window.innerHeight - 50);
    noButton.style.position = "absolute";
    noButton.style.left = i + "px";
    noButton.style.top = j + "px";
});

// Function to create floating hearts
function createFloatingHearts() {
    for (let i = 0; i < 30; i++) { // Generate 30 hearts
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️"; // Red heart emoji
        heart.style.left = Math.random() * 100 + "vw"; 
        heart.style.animationDuration = Math.random() * 3 + 2 + "s"; 
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// Function to create spinning "I LOVE YOU" text randomly
function createSpinningText() {
    for (let i = 0; i < 10; i++) { // Generate 10 spinning text elements
        let spinText = document.createElement("div");
        spinText.classList.add("spinning-text");
        spinText.innerHTML = "I LOVE YOU 💖";
        spinText.style.left = Math.random() * 90 + "vw"; // Random position
        spinText.style.top = Math.random() * 80 + "vh"; // Random height
        spinText.style.animationDuration = Math.random() * 4 + 3 + "s"; // Random spin duration
        document.body.appendChild(spinText);

        // Remove text after animation completes
        setTimeout(() => {
            spinText.remove();
        }, 7000);
    }
}
