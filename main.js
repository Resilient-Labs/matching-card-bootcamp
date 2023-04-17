//Global
const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard;
let secondCard;
let matchedCards = 0; // Added 


function flipDaCard() {
  if (lockBoard) return; 
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  anyMatches();
}

function anyMatches() {
  let isMatch = firstCard.dataset.card === secondCard.dataset.card; //read only prop = dataset

  isMatch ? disable() : unflipDaCards();
}


function disable() {
  firstCard.removeEventListener('click', flipDaCard);
  secondCard.removeEventListener('click', flipDaCard);
  matchedCards += 2;

  if (matchedCards === cards.length) {
    setTimeout(() => {
      alert('Did you really win, in a "No You" game?');
    }, 500); //game finished with an alert
    
  }

  resetBoard();
}

function unflipDaCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip'); //flip animation
    secondCard.classList.remove('flip'); //flip animation

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function resetGame(){
  location.reload()
}

//Shuffles all cards in the beginning
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

//Event Listeners for each card
cards.forEach(card => card.addEventListener('click', flipDaCard));
document.querySelector('button').addEventListener('click', resetGame)

//I followed a Youtube tutorial by Marina Ferreira called "Memory Card Game - Javascript tutorial"