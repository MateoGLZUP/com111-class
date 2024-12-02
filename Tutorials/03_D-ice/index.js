// Generate random number for Dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Random number between 1-6

// Generate the image source for Dice 1
var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
var randomImageSource1 = "images/" + randomDiceImage1; // images/dice1.png - images/dice6.png

// Update the Dice 1 image
var image1 = document.querySelectorAll("img")[0]; // Select the first <img>
image1.setAttribute("src", randomImageSource1); // Set the src attribute

// Generate random number for Dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Random number between 1-6

// Generate the image source for Dice 2
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; // dice1.png - dice6.png
var randomImageSource2 = "images/" + randomDiceImage2; // images/dice1.png - dice6.png

// Update the Dice 2 image
var image2 = document.querySelectorAll("img")[1]; // Select the second <img>
image2.setAttribute("src", randomImageSource2); // Set the src attribute

// Determine and display the winner
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 Wins!";
} else {
  document.querySelector("h1").textContent = "It's a Tie!";
}
