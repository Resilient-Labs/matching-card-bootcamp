const cards = [
  { id: 1, value: 'A' },
  { id: 2, value: 'B' },
  { id: 3, value: 'C' },
  { id: 4, value: 'D' },
  { id: 5, value: 'A' },
  { id: 6, value: 'B' },
  { id: 7, value: 'C' },
  { id: 8, value: 'D' },
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createBoard() {
  shuffle(cards);
  const gameBoard = document.createElement('div');
  gameBoard.classList.add('game-board');
  cards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.id = card.id;
    cardElement.innerText = '?';
    cardElement.addEventListener('click', handleCardClick);
    gameBoard.appendChild(cardElement);
  });
  document.body.appendChild(gameBoard);
}

let firstCard = null;
let secondCard = null;
let isChecking = false;

function handleCardClick(event) {
  if (isChecking) return;
  const cardElement = event.target;
  const cardId = parseInt(cardElement.dataset.id, 10);
  const card = cards.find(c => c.id === cardId);

  if (!firstCard || (firstCard && secondCard)) {
    firstCard = card;
    secondCard = null;
    cardElement.innerText = card.value;
  } else {
    secondCard = card;
    cardElement.innerText = card.value;
    isChecking = true;

    setTimeout(() => {
      checkForMatch();
      isChecking = false;
    }, 1000);
  }
}

function checkForMatch() {
  const firstCardElement = document.querySelector(`[data-id="${firstCard.id}"]`);
  const secondCardElement = document.querySelector(`[data-id="${secondCard.id}"]`);

  if (firstCard.value === secondCard.value) {
    firstCardElement.classList.add('matched');
    secondCardElement.classList.add('matched');
    firstCardElement.removeEventListener('click', handleCardClick);
    secondCardElement.removeEventListener('click', handleCardClick);
    checkForGameOver();
  } else {
    firstCardElement.innerText = '?';
    secondCardElement.innerText = '?';
  }

  firstCard = null;
  secondCard = null;
}

function checkForGameOver() {
  const unmatchedCards = document.querySelectorAll('.card:not(.matched)');
  if (unmatchedCards.length === 0) {
    setTimeout(() => {
      alert('Game over! You won!');
      sendGameStateToServer();
    }, 100);
  }
}

function sendGameStateToServer() {
  
  const gameStateData = {
    message: 'Game completed',
    timestamp: new Date().toISOString(),
  };

  fetch('/api/gameState', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(gameStateData),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('There was a problem with the fetch operation:', error));
}

createBoard();

