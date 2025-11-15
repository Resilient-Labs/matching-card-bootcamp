//Make a Matching Card Game
//Create 10 cards 
//create a board with 10 placeholders for the cards, 2 cards are the same.
//When the user clicks on a card, it flips over
//If two cards match, they stay flipped over
//If they don't match, they flip back over
//The game is over when all cards are matched
//cards should generate in a new order every time.


//Help with Calvin

const cards = document.querySelectorAll('.cards');

let cardOne = null;
let cardTwo = null;
let numCardFlip = 0;
let lockBoard = false;

//function to shuffle each card randomly
for (let i = 0; i < cards.length; i++) {
  let randomNum = Math.floor(Math.random() * cards.length)
  cards[i].style.order = randomNum;
}

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', flipCard);
}

//prevents from user clicks from flipping cards. lock board holds the cards from flipping back over.
function flipCard() {
  if (lockBoard) return;
  //this just prevents user from clicking the same card again.
  if (this === cardOne) return;

  //this is adding a class to style the card
  this.classList.add('flip');

  //if theres no cards flipped store the flipped card in card one. it will update the status.
  if (numCardFlip === 0) {
    cardOne = this;
    numCardFlip = 1;
  }
  else {
    cardTwo = this;
    numCardFlip = 2;

    checkForMatch();
  }
}

//dataset is for custom attributes.
function checkForMatch() {
  let isMatch = cardOne.dataset.animal === cardTwo.dataset.animal;

  if (isMatch) {
    cardOne.removeEventListener('click', flipCard);
    cardTwo.removeEventListener('click', flipCard);
    resetBoard();
  }
  //logic for if they aren't matching.
  //let user see the wrong answer for 5 seconds before flipping over.
  else {
    lockBoard = true;
    setTimeout(function () {
      cardOne.classList.remove('flip')
      cardTwo.classList.remove('flip')
      resetBoard();
    }, 3000);
  }
}

function resetBoard() {
  cardOne = null;
  cardTwo = null;
  numCardFlip = 0;
  lockBoard = false;
}
//refreshes the page to start over
document.getElementById('resetButton').addEventListener('click', function () {
  location.reload();
});