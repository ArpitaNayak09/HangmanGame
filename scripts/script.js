// const worddisp = document.querySelector(".worddisplay");

// const getRandomword=() =>{
//     const {word , Hint1} = wordList[Math.floor(Math.random() * wordList.length)];
//     console.log(word);
//     document.querySelector(".hint b").innerText = Hint1;
//     worddisp.innerHTML = word.split("").map(() => ' <li class="letter"></li>').join("");
// }

// getRandomword();


// Get references to HTML elements
const worddisp = document.querySelector(".worddisplay");
const hangmanImage = document.querySelector(".hangmanbox img");
const guessDisplay = document.querySelector(".guess b");
const modal = document.querySelector(".gamemodal");
const resultImage = document.querySelector(".gamemodal img");
const resultMessage = document.querySelector(".gamemodal h4");
const playAgainButton = document.querySelector(".playagain");

let chosenWord = "";
let guessedLetters = [];
let incorrectGuesses = 0;
const maxGuesses = 6;

// Hangman images for each stage
const hangmanImages = [
  "images/hangman-0.svg", // Initial state (frame)
  "images/hangman-1.svg", // Head
  "images/hangman-2.svg", // Body
  "images/hangman-3.svg", // Left arm
  "images/hangman-4.svg", // Right arm
  "images/hangman-5.svg", // Left leg
  "images/hangman-6.svg"  // Right leg (Final stage)
];

// Get random word and set up the game
const getRandomWord = () => {
  const { word, Hint1 } = wordList[Math.floor(Math.random() * wordList.length)];
  chosenWord = word;
  guessedLetters = [];
  incorrectGuesses = 0;
  console.log(word); // For debugging purposes
  
  // Update the hint in the HTML
  document.querySelector(".hint b").innerText = Hint1;

  // Display blanks for the chosen word
  worddisp.innerHTML = word.split("").map(() => '<li class="letter">_</li>').join("");

  // Reset hangman image and incorrect guesses display
  hangmanImage.src = hangmanImages[0];
  guessDisplay.innerText = `${incorrectGuesses}/${maxGuesses}`;
};

// Handle the player's guess
const handleGuess = (letter) => {
  if (!guessedLetters.includes(letter) && incorrectGuesses < maxGuesses) {
    guessedLetters.push(letter);

    // Check if the letter exists in the chosen word
    if (chosenWord.includes(letter)) {
      updateWordDisplay();
    } else {
      incorrectGuesses++;
      hangmanImage.src = hangmanImages[incorrectGuesses];
      guessDisplay.innerText = `${incorrectGuesses}/${maxGuesses}`;
    }

    // Check for game over (loss or win)
    checkGameOver();
  }
};

// Update the word display with correctly guessed letters
const updateWordDisplay = () => {
  const wordArray = chosenWord.split("");
  worddisp.innerHTML = wordArray.map((letter) =>
    guessedLetters.includes(letter) ? `<li class="letter">${letter}</li>` : '<li class="letter">_</li>'
  ).join("");
};

// Check for game over conditions (win or loss)
const checkGameOver = () => {
  const currentDisplay = worddisp.innerText.replace(/\s+/g, "");
  
  // If player guessed all letters (victory)
  if (currentDisplay === chosenWord) {
    resultImage.src = "images/victory.gif"; // Victory GIF
    resultMessage.innerText = "Congratulations! You Won!";
    modal.style.display = "block";
  }

  // If player used up all guesses (loss)
  if (incorrectGuesses === maxGuesses) {
    resultImage.src = "images/lost.gif"; // Loss GIF
    resultMessage.innerText = `Game Over! The correct word was ${chosenWord}`;
    modal.style.display = "block";
  }
};

// Handle "Play Again" button click
playAgainButton.addEventListener("click", () => {
  modal.style.display = "none";
  getRandomWord(); // Reset the game
});

// Listen for player's key press
document.addEventListener("keydown", (e) => {
  const letter = e.key.toLowerCase();
  if (letter.match(/[a-z]/) && letter.length === 1) {
    handleGuess(letter);
  }
});

// Start the game
getRandomWord();

