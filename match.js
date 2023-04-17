// declaring cards as cards in html 
const cards = document.querySelectorAll('.cards');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// if we flip the card then do this
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

//   when we flip the secon card do this
  secondCard = this;
  checkForMatch();
}

// when we flip the second card we're looking for it to match the first card that was flipped
function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

// once you flip botth crds we can reset the board. 
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

// flip the cards back to the back side after both have been flipped
function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

// resetting the board back to the bacl 
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// make sure the cards are random
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));