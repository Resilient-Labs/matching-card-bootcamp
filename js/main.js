// TODO: Problem
// User clicks two cards and checks if they're a match
// If cards are a match keep them flipped (true)
// If cards are not a match flipped them over (false)
// Game is over when all cards are matched and flipped over
// TODO: Steps:
// User should be able to click on cards so need to add a click eventListener to the cards
// Once two cards are selected, have the check if the value on the cards match
// Cards should be shuffled on reload or restart
// Restart button should reset the game board, and moves the player has made
// Maybe display how manty moves the user has made
// Display that the player has won on screen
// Need a function that shuffles the cards when the page is reloaded or restart button is clicked
// Need a function that will generate the cards
// Need a function that will flip the cards
// Need a function that will check if the cards matched

const cards = document.querySelectorAll(".game-card");
let cardHasFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

// Shuffle cards at start of game
shuffleCards();

// Add click event for whenever each of the cards are clicked
cards.forEach((card) => card.addEventListener("click", flipCard));

document.querySelector("#restartBtn").addEventListener("click", restartGame);

function flipCard() {
  // Lock the board so other cards can't be flipped before the two cards are flipped over
  if (lockBoard) return;

  // Prevent double click on the first card
  if (this === firstCard) return;
  // console.log(this); // this refers to the game-card div (the element that fired the event)

  this.classList.add("flip");

  if (!cardHasFlipped) {
    cardHasFlipped = true;
    firstCard = this;
  } else {
    cardHasFlipped = false;
    secondCard = this;

    checkForMatch();
  }
}

function checkForMatch() {
  if (firstCard.dataset.fallItem === secondCard.dataset.fallItem) {
    // If a match remove event listener on cards that were clicked
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
  } else {
    // If not a match flip cards back over
    lockBoard = true;

    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");

      resetBoard();
    }, 1000);
  }
}

function shuffleCards() {
  cards.forEach((card) => {
    let randomCard = Math.floor(Math.random() * 10);
    card.style.order = randomCard;
  });
}

function resetBoard() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

function restartGame() {
  resetBoard();
  shuffleCards();
  cards.forEach((card) => {
    // Flip cards back over
    card.classList.remove("flip");
    // Reset cards back to their original state
    card.addEventListener("click", flipCard);
  });
}
