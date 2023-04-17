// used a FreeCodeCamp tutorial 

const cards = document.querySelectorAll('.memory-card')

let hasFlippedCard = false;
let lockBoard = false;
let firstCard
let secondCard

function flipCard() {
  if (lockBoard) {
    return;
  }

  if (this === firstCard) {
    return;
  }

  // console.log('I was clicked')
  // console.log(this)
  this.classList.toggle('flip');

  // if hasFlippedCard is false
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
    // console.log('has flipped card:', hasFlippedCard)
    // console.log('first card:', firstCard)
  }

  hasFlippedCard = false;
  secondCard = this

  // console.log({ firstCard, secondCard })

  // create a case for if cards match
  // console.log(firstCard.dataset.character)
  // console.log(secondCard.dataset.character)
  checkIfMatch();
}


function checkIfMatch() {
  // do cards match
  let isMatch = firstCard.dataset.character === secondCard.dataset.character

  // the ternary operator here is the same as the if else listed from lines 38 - 44
  isMatch ? disableCards() : unflipCards();

  // if (firstCard.dataset.character === secondCard.dataset.character) {
  //   // if it's a match 
  //   disableCards();
  // } else {
  //   // if it's not a match
  //   unflipCards()
  // }
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  let lockBoard = true;
  // if it's not a match
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    let lockBoard = false;
    resetBoard()
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// IIFE that randomly shuffles the cards on the board around
(function shuffle() {
  cards.forEach(card => {
    let randomPosition = Math.floor(Math.random() * 12);
    card.style.order = randomPosition
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard))