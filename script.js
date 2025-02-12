// Add event listener to the "Yes" button
document.getElementById("yesButton").addEventListener("click", function() {
    alert("I love you! Now you can claim your milkshake!");
});

// Add event listener to the "No" button
var noButton = document.getElementById("no");
noButton.addEventListener("mouseover", function() {
    // Move the "No" button to a random position
    var i = Math.floor(Math.random() * window.innerWidth);
    var j = Math.floor(Math.random() * window.innerHeight);
    noButton.style.position = "absolute";
    noButton.style.left = i + "px";
    noButton.style.top = j + "px";
});
