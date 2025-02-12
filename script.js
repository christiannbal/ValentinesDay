// Get elements
const yesButton = document.getElementById("yesButton");
const proposalScreen = document.getElementById("proposalScreen");
const celebrationScreen = document.getElementById("celebrationScreen");
const heartsContainer = document.querySelector(".hearts-container");

// When "Yes" is clicked, switch to the celebration screen
yesButton.addEventListener("click", function() {
    proposalScreen.style.display = "none"; // Hide first screen
    celebrationScreen.style.display = "block"; // Show celebration screen
    createFloatingHearts(); // Trigger heart animation
});

// When "No" is hovered over, move it randomly
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
        heart.style.left = Math.random() * 100 + "vw"; // Random position
        heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random speed
        heartsContainer.appendChild(heart);

        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}
