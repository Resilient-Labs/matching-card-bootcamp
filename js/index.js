// script.js
const gameBoard = document.getElementById('game-board');
const symbols = ['A', 'B', 'C', 'D', 'E'];
let cards = [...symbols, ...symbols];
let flippedCards = [];
let matchedCards = [];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(cards);

cards.forEach((symbol, index) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.index = index;
  card.dataset.symbol = symbol;
  gameBoard.appendChild(card);

  card.addEventListener('click', () => {
    if (flippedCards.length < 2 && !flippedCards.includes(index) && !matchedCards.includes(index)) {
      flipCard(card);
      flippedCards.push(index);

      if (flippedCards.length === 2) {
        setTimeout(checkMatch, 500);
      }
    }
  });
});

function flipCard(card) {
  card.classList.add('flipped');
  card.textContent = card.dataset.symbol;
}

function unflipCard(card) {
  card.classList.remove('flipped');
  card.textContent = '';
}

function checkMatch() {
  const card1 = document.querySelectorAll(`[data-index="${flippedCards[0]}"]`)[0];
  const card2 = document.querySelectorAll(`[data-index="${flippedCards[1]}"]`)[0];

  if (card1.dataset.symbol === card2.dataset.symbol) {
    card1.classList.add('matched');
    card2.classList.add('matched');
    matchedCards.push(parseInt(card1.dataset.index), parseInt(card2.dataset.index));
  } else {
    unflipCard(card1);
    unflipCard(card2);
  }

  flippedCards = [];

  if (matchedCards.length === cards.length) {
    alert('Congratulations! You won!');
  }
}