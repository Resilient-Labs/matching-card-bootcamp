const cards = document.querySelectorAll('.card')

let cardOne = null;
let cardTwo = null;
let numCardFlipped = 0;
let lockBoard = false;

//function to shuffle each card, w randomizer per 10 cards inside grid
for (var i = 0; i < cards.length; i++) {
    var randomIndex = Math.floor(Math.random() * cards.length);
    cards[i].style.order = randomIndex;
  }

//click event on each card for flip
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', flipCard);
  }

  function flipCard() {
    if (lockBoard) return;//stops click when resetting
    if (this === cardOne) return; // stops double clicking the same card
  
    this.classList.add('flip');
  
    if (numCardFlipped === 0) {
      cardOne = this;
      numCardFlipped = 1;
    } else {
      cardTwo = this;
      numCardFlipped = 2;
      checkForMatch();
    }
  }
  
  function checkForMatch() {
    var isMatch = cardOne.dataset.digi === cardTwo.dataset.digi;
  
    if (isMatch) {
      cardOne.removeEventListener('click', flipCard);
      cardTwo.removeEventListener('click', flipCard);
      resetTurn();
    } else {
      lockBoard = true;//slow click
      setTimeout(function () {
        cardOne.classList.remove('flip');
        cardTwo.classList.remove('flip');
        resetTurn();
      }, 1000);//flips cards back after 1 second if no match found
    }
  }
  
  function resetTurn() {
    cardOne = null;
    cardTwo = null;
    numCardFlipped = 0;
    lockBoard = false;
  }
  
  // Reset button
  document.getElementById('resetButton').addEventListener('click', function () {
    location.reload();
  });