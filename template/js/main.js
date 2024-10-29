const cards = [
  "😂", "😱", "🤯", "🥳", "😥",
  "😂", "😱", "🤯", "🥳", "😥"
];
let shuffledCards = [];
let firstCard, secondCard;
let isFlipping = false;
let matchesFound = 0;
document.querySelector('button').addEventListener('click', startGame)
function startGame() {
  shuffledCards = shuffle(cards);
  const gameBoard = document.getElementById("gameBoard");
  gameBoard.innerHTML = "";
  matchesFound = 0;
  document.getElementById("gameStatus").innerText = "";

  shuffledCards.forEach((emoji, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.emoji = emoji;
    card.dataset.index = index;
    card.addEventListener("click", flipCard);
    gameBoard.appendChild(card);
  });
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function flipCard() {
  if (isFlipping || this.classList.contains("flipped")) return;

  this.classList.add("flipped");
  this.innerText = this.dataset.emoji;

  if (!firstCard) {
    firstCard = this;
  } else if (!secondCard) {
    secondCard = this;
    checkForMatch();
  }
}

function checkForMatch() {
  isFlipping = true;
  const match = firstCard.dataset.emoji === secondCard.dataset.emoji;

  if (match) {
    matchesFound++;
    resetCards(true);
    if (matchesFound === cards.length / 2) {
      document.getElementById("gameStatus").innerText = "Congratulations! You Win!!!";
    }
  } else {
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      firstCard.innerText = "";
      secondCard.innerText = "";
      resetCards(false);
    }, 1000);
  }
}

function resetCards(match) {
  if (match) {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
  }
  [firstCard, secondCard, isFlipping] = [null, null, false];
}

// Start the game initially
startGame();
