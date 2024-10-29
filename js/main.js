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
