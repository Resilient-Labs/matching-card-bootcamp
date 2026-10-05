// 5 symbols, each used twice = 10 cards
const symbols = ['🍎', '🍌', '🍇', '🍒', '🍉'];

const board = document.querySelector('#board');
const movesDisplay = document.querySelector('#moves');
const pairsDisplay = document.querySelector('#pairs');
const message = document.querySelector('#message');
const restartButton = document.querySelector('#restart');

let deck = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false; // true while two cards are showing, so a 3rd click gets ignored
let moves = 0;
let matchedPairs = 0;
let flipBackTimer = null;

// Fisher-Yates - sort(() => Math.random() - 0.5) isn't actually a fair shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startGame() {
  // if restart is hit mid flip-back, kill that timer so it doesn't mess with the new game
  clearTimeout(flipBackTimer);
  deck = shuffle([...symbols, ...symbols]);
  firstCard = null;
  secondCard = null;
  lockBoard = false;
  moves = 0;
  matchedPairs = 0;

  movesDisplay.textContent = moves;
  pairsDisplay.textContent = matchedPairs;
  message.textContent = '';
  message.classList.remove('win');

  // wipe the old board and rebuild it from the new shuffled deck
  board.innerHTML = '';
  deck.forEach((symbol, index) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'card';
    card.dataset.index = index;
    card.setAttribute('aria-label', 'Hidden card');
    board.appendChild(card);
  });
}

function flipCard(card) {
  card.textContent = deck[card.dataset.index];
  card.classList.add('flipped');
  card.setAttribute('aria-label', card.textContent);
}

function hideCard(card) {
  card.textContent = '';
  card.classList.remove('flipped');
  card.setAttribute('aria-label', 'Hidden card');
}

function handleCardClick(event) {
  const card = event.target.closest('.card');

  // ignore clicks on the gaps, while locked, on matched cards, or on the same card twice
  if (!card || lockBoard || card.disabled || card === firstCard) return;

  flipCard(card);

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  moves++;
  movesDisplay.textContent = moves;
  checkForMatch();
}

function checkForMatch() {
  const isMatch = deck[firstCard.dataset.index] === deck[secondCard.dataset.index];

  if (isMatch) {
    keepMatchedCards();
  } else {
    flipBackCards();
  }
}

function keepMatchedCards() {
  firstCard.classList.add('matched');
  secondCard.classList.add('matched');
  // disabling them is the easy way to make sure they can't be clicked again
  firstCard.disabled = true;
  secondCard.disabled = true;

  matchedPairs++;
  pairsDisplay.textContent = matchedPairs;
  resetTurn();

  if (matchedPairs === symbols.length) {
    message.textContent = `You win! All pairs found in ${moves} moves.`;
    message.classList.add('win');
  }
}

function flipBackCards() {
  lockBoard = true;

  // leave them up for a second so the player can actually memorize them
  flipBackTimer = setTimeout(() => {
    hideCard(firstCard);
    hideCard(secondCard);
    resetTurn();
  }, 1000);
}

function resetTurn() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

// one listener on the board instead of one per card - works even after the board is rebuilt
board.addEventListener('click', handleCardClick);
restartButton.addEventListener('click', startGame);

startGame();
