// select all the cards in the html named memory-card 
// create a way or function to make the cards flip 
// add a click or event listener to each card "forEach" Method

//step2
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
   return;
 }

 secondCard = this;
 hasFlippedCard = false;

 checkForMatch();
}

function checkForMatch() {
 if (firstCard.dataset.framework === secondCard.dataset.framework) {
   disableCards();
   return;
 }

 unflipCards();
}

function disableCards() {
 firstCard.removeEventListener('click', flipCard);
 secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
 setTimeout(() => {
   firstCard.classList.remove('flip');
   secondCard.classList.remove('flip');
 }, 1500);
}
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }
cards.forEach(card => card.addEventListener('click', flipCard));







