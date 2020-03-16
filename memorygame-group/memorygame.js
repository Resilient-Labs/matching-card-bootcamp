//House Hayden Group project
const cards = document.querySelectorAll('.memory-card'); //allow you to pick a card

let flippedCard = false; //tells you if a card is
let lockBoard = false; //stops the user from picking more than two at a time
let firstCard; //first card choosen
let secondCard; //second card choosen

let matchedCards = [];

function flipCard (){
  if(lockBoard) return; //locks Board
  if (this === firstCard) return;
  if (matchedCards.includes(this.dataset.framework)) return
  this.classList.add('flip');

  if(!flippedCard) {
    // first onclick
    flippedCard = true;
    firstCard = this;
    return;
  }
  // sceond click
  flippedCard = false;
  secondCard = this;

  checkForMatch();
}

function checkForMatch(){
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework; //how to find if cards are a pair

  isMatch ? disableCards(): unflipCard(); // easier way to write a if else condition
  // does it match
  // if(){
  //   disableCards();
  // } else {
  //   //not a match
  //   unflipCard();
  // }
}

function disableCards(){
  matchedCards.push(firstCard.dataset.framework)
}

function unflipCard(){
  lockBoard = true; //locks the board so you can't click on another card

  setTimeout(() =>{ //
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    // lockBoard = false;

    resetBoard();
  }, 1000); //how long it takes to flip the car the bigger the number the slower
}
function resetBoard() { // so you can't double click on the card so it doesn't lock in a match
  [flipCard, lockBoard] = [false, false];
  [firstCard,secondCard] = [null, null];
}
(function shuffle(){
  cards.forEach((card) => {
    let randomCard = Math.floor(Math.random() * 10); //shuffle cards based on the number we assign to a card. Which is shuffled by math.random
    card.style.order = randomCard;
  });
})();//IIFE (imediatley inoked Function Expression) we invoked the function meaning that it will be excuced right after the definitione

cards.forEach(card => card.addEventListener('click', flipCard));
