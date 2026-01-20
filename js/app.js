const cards = document.querySelectorAll('.memory-card');
const timerElement = document.getElementById('timer');
const modal = document.getElementById('winModal');
const playAgainBtn = document.getElementById('playAgainBtn');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchedCards = 0;
const totalCards = cards.length;
let startTime = null;
let timerInterval = null;
let gameStarted = false;

// Load best time from localStorage
let bestTime = localStorage.getItem('bestTime') ? parseInt(localStorage.getItem('bestTime')) : null;

// Timer functions
function startTimer() {
  if (!gameStarted) {
    gameStarted = true;
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 100);
  }
}

function updateTimer() {
  if (startTime) {
    const elapsed = Date.now() - startTime;
    const seconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const displaySeconds = seconds % 60;
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(displaySeconds).padStart(2, '0')}`;
  }
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function resetTimer() {
  stopTimer();
  gameStarted = false;
  startTime = null;
  timerElement.textContent = '00:00';
}

function saveBestTime() {
  if (startTime) {
    const elapsed = Date.now() - startTime;
    if (!bestTime || elapsed < bestTime) {
      bestTime = elapsed;
      localStorage.setItem('bestTime', bestTime.toString());
    }
  }
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  
  // Start timer on first card flip
  if (!gameStarted) {
    startTimer();
  }

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  matchedCards += 2;
  resetBoard();

  if (matchedCards === totalCards) {
    stopTimer();
    saveBestTime();
    showWinModal();
  }
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function showWinModal() {
  modal.classList.add('show');
}

function hideModal() {
  modal.classList.remove('show');
}

function resetGame() {
  // Reset game state
  matchedCards = 0;
  resetBoard();
  resetTimer();
  
  // Reset all cards
  cards.forEach(card => {
    card.classList.remove('flip');
    card.removeEventListener('click', flipCard);
    card.addEventListener('click', flipCard);
  });
  
  // Shuffle cards
  shuffle();
  
  hideModal();
}

function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 10);
    card.style.order = randomPos;
  });
}

// Event listeners
cards.forEach(card => card.addEventListener('click', flipCard));

playAgainBtn.addEventListener('click', () => {
  resetGame();
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    hideModal();
  }
});

// Initial shuffle
shuffle();
