const cards = document.querySelectorAll('.card');//make a variable name cards all the html elements that you want 

let hasFlippedCard = false;// create flip and board variables first and second cars with false and
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;//if is true or clicked card the same as first card return in dom

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;// if this card flips store store the click card in second card and call the function
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {//define the function check if dataset property of firstcard is the same as the second one 
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);/// ifthey match call disablecard function or else call unflip so stops going
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
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
//Set the value of hasFlippedCard to false. 
//Set the value of lockBoard to false.
//Set the value of firstCard to null. 
//Set the value of secondCard to null.

function reset(){
  window.location.reload();
}// reload the page after the user is phone


(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
document.querySelector('button').addEventListener('click', reset)

//Set hasFlippedCard and lockBoard back to false.
//Set firstCard and secondCard to null.
//Define a function reset that reloads the current window when triggered.

// i work with tenzin, jessica, joyce, valery as a group