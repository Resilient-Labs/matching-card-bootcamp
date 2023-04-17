//Global
const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard;
let secondCard;
let matchedCards = 0; 


function flipCard() {
  if (lockBoard) return; 
  if (this === firstCard) return;

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
  let isMatch = firstCard.dataset.card === secondCard.dataset.card; //read only prop = dataset

  isMatch ? disableCards() : unflipCards();
}


function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  matchedCards += 2;

  if (matchedCards === cards.length) {
    setTimeout(() => {
      alert('Did you really win, in a "No You" game?');
    }, 500); //game finished with an alert

    //I need a button to reset the game, would love to go back and add one.
    
  }

  resetBoard();
}

function unflipCards() {
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

//Shuffles all cards in the beginning
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

//Event Listeners for each card
cards.forEach(card => card.addEventListener('click', flipCard));

//I followed a Youtube tutorial by Marina Ferreira called "Memory Card Game - Javascript tutorial"