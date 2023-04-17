const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let lockBoard = false
let firstCard, secondCard;

function flipCard(){
  if(lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard){
    //first click
    hasFlippedCard = true;
    firstCard = this;

    //you can use return since you want function to stop after.. no need for the else part of the if statement
    return; 
  }

  //second click
  hasFlippedCard = false;
  secondCard = this;

  checkForMatch();
} 
function checkForMatch(){ 
  // using a itenary operator
  // condition ? expr1 : expr2
  //             true    false
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework
  
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
}

function unflipCards(){
  lockBoard = true

  //not a match
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    lockBoard = false
  }, 1500);
}
function resetBoard(){
  [hasFlippedCard, lockBoard] = [false, false]
  [firstCard, secondCard] = [null, null];
}

(function shuffle(){
  cards.forEach( card => {
    //how to randomize something
    let randomPos = Math.floor(Math.random() * 10); 
    card.style.order = randomPos;

  });
})();
cards.forEach(card => card.addEventListener('click', flipCard));