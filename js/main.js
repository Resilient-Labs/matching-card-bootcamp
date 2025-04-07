const cardSymbols = ['♥️', '♠️', '♦️', '♣️', '👑', '♥️', '♠️', '♦️', '♣️', '👑'];

let flippedCards = [];
let matchedCards = 0;

// Shuffle function to randomize card symbols
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Create a new card element
function createCard(symbol) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <div class="front"></div>
    <div class="back">${symbol}</div>
  `;
  card.addEventListener('click', flipCard);
  return card;
}

// Flip card function
function flipCard() {
  if (flippedCards.length === 2) return;  // Prevent more than two cards from being flipped at once

  this.classList.add('flipped');
  flippedCards.push(this);

  // If two cards are flipped, check for a match
  if (flippedCards.length === 2) {
    checkForMatch();
  }
}

// Check if two flipped cards match
async function checkForMatch() {
  const [card1, card2] = flippedCards;

  if (card1.innerHTML === card2.innerHTML) {
    matchedCards++;
    flippedCards = [];
    if (matchedCards === 5) {
      alert('You won!');  // Alert after all cards are matched
    }
  } else {
    await flipBackCards(card1, card2);  // Wait for the cards to flip back before continuing
    flippedCards = [];
  }
}

// Wait for the cards to flip back (no setTimeout, using async/await)
function flipBackCards(card1, card2) {
  return new Promise(resolve => {
    card1.classList.remove('flipped');
    card2.classList.remove('flipped');
    resolve();
  });
}

// Initialize the game
function initializeGame() {
  const shuffledSymbols = [...cardSymbols, ...cardSymbols]; // Duplicate symbols for pairs
  shuffle(shuffledSymbols);

  const gameBoard = document.getElementById('game-board');
  shuffledSymbols.forEach(symbol => {
    const card = createCard(symbol);
    gameBoard.appendChild(card);
  });
}

initializeGame();
