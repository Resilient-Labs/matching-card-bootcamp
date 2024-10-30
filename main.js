//store selected cards and matches
let firstCard = null;
let secondCard = null;
let matches = 0;

const cards = document.querySelectorAll('section');
cards.forEach(card => card.addEventListener("click", flipCard));

const restartGame = document.querySelector('button').addEventListener('click', resetGame)

/* checks if firstCard is null. If it is, the clicked card is assigned to 
firstCard. If firstCard is already assigned, the clicked card is assigned to secondCard.*/

function flipCard(event) {
  const card = event.target;
  // Prevent more than two cards from being selected at a time
  if (card === firstCard || card.classList.contains('flipped')) return;
  // 'Flip' the selected card
  card.classList.add('flipped');
  card.querySelector('span').classList.remove('hidden');

  /* If no card has been selected yet, assigns the clicked card to firstCard. 
  If a card is already selected, assigns it to secondCard.*/
  if (!firstCard) {
    firstCard = card;
  } else {
    secondCard = card;
    checkMatch();
  }
}

function checkMatch() {
    /* Since firstCard and secondCard are references to actual DOM elements (not just plain values), 
    they allow us to directly access and manipulate their child elements */
  const isMatch = firstCard.querySelector('span').innerText === secondCard.querySelector('span').innerText;

  if (isMatch) {
    //Increments the match counter.
    matches++;
    resetCards();
    if (matches === 6) {
      document.querySelector(".winOrLose").innerText = "Congratulations! You Win!";
    }
  } else {
    //Waits 1 second before hiding the cards again
    setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      // Hides the emojis by re-adding the hidden class.
      firstCard.querySelector('span').classList.add('hidden');
      secondCard.querySelector('span').classList.add('hidden');
      // Resets the firstCard and secondCard selections.
      resetCards();
    }, 1000);
  }
}

//clear the firstCard and secondCard selections
function resetCards() {
  firstCard = null;
  secondCard = null;
}

function resetGame(){
    matches = 0
    document.querySelector('.winOrLose').innerText = '';

    cards.forEach(card => {
        card.classList.remove('flipped');
        card.querySelector('span').classList.add('hidden');
    });
    
    resetCards();
}



