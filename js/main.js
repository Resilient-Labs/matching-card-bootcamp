const gameBoard = document.querySelector("#board-game");
const movesElement = document.querySelector("#moves");
const matchesElement = document.querySelector("#matches");
const winMessage = document.querySelector("#win-message");
const finalMessage = document.querySelector("#final-message");
const restartButton = document.querySelector("#restart-button");

const cardItems = [
  {
    name: "coffee",
    emoji: "☕",
  },
  {
    name: "coffee",
    emoji: "☕",
  },

  {
    name: "strawberry",
    emoji: "🍓",
  },
  {
    name: "strawberry",
    emoji: "🍓",
  },
  {
    name: "matcha",
    emoji: "🍵",
  },
  {
    name: "matcha",
    emoji: "🍵",
  },
  {
    name: "croissant",
    emoji: "🥐",
  },
  {
    name: "croissant",
    emoji: "🥐",
  },
  {
    name: "strawberry-matcha",
    emoji: "🧋",
  },
  {
    name: "strawberry-matcha",
    emoji: "🧋",
  },
];

let firstCard = null;
let secondCard = null;

let canFlip = true;

let moves = 0;
let matches = 0;

function shuffleCards(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    const temporaryCard = cards[i];

    cards[i] = cards[randomIndex];

    cards[randomIndex] = temporaryCard;
  }

  return cards;
}

function createBoard() {
  gameBoard.innerHTML = "";

  const shuffledCards = shuffleCards([...cardItems]);

  shuffledCards.forEach(function (item) {
    const card = document.createElement("button");

    card.classList.add("card");

    card.dataset.name = item.name;

    card.innerHTML = `
        <span class="card-back">☕</span>

        <span class="card-front">${item.emoji}</span>
        `;

    card.addEventListener("click", handleCardClick);
    gameBoard.appendChild(card);
  });
}

function handleCardClick(event) {
  const clickedCard = event.currentTarget;

  if (!canFlip) {
    return;
  }

  if (clickedCard === firstCard) {
    return;
  }

  if (clickedCard.classList.contains("matched")) {
    return;
  }

  clickedCard.classList.add("flipped");

  if (firstCard === null) {
    firstCard = clickedCard;
    return;
  }

  secondCard = clickedCard;

  moves++;

  movesElement.textContent = moves;

  checkForMatch();
}

function checkForMatch() {
  const firstCardName = firstCard.dataset.name;

  const secondCardName = secondCard.dataset.name;

  if (firstCardName === secondCardName) {
    handleMatch();
  } else {
    handleNoMatch();
  }
}

function handleMatch() {
  firstCard.classList.add("matched");
  secondCard.classList.add("matched");

  matches++;

  matchesElement.textContent = matches;

  resetCards();

  if (matches === 5) {
    endGame();
  }
}

function handleNoMatch() {
  canFlip = false;

  setTimeout(function () {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");

    resetCards();

    canFlip = true;
  }, 900);
}

function resetCards() {
  firstCard = null;
  secondCard = null;
}

function endGame() {
  setTimeout(function () {
    winMessage.classList.remove("hidden");

    finalMessage.textContent = `You found all 5 matches in ${moves} moves!`;
  }, 400);
}

restartButton.addEventListener("click", function () {
  moves = 0;
  matches = 0;

  firstCard = null;
  secondCard = null;

  canFlip = true;

  movesElement.textContent = moves;
  matchesElement.textContent = matches;

  winMessage.classList.add("hidden");

  createBoard();
});

createBoard();
