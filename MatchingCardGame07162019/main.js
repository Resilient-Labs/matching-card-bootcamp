
// get cards
const cards = document.getElementById('cards').childNodes;

// add click function to each card
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', cardClicked);
}

// handle click action
function cardClicked() {
  if (this.classList.contains('match')) {
    return;
  }

  this.classList.add('clicked');
  const clickedCards = document.querySelectorAll('.clicked');

  for (let i = 0; i < clickedCards.length; i++) {
    const clickedCard = clickedCards[i];

    if (clickedCards.length === 2) {
      const firstCard = clickedCards[0];
      const secondCard = clickedCards[1];

      // if cards match, keep them flipped
      if (firstCard.className === secondCard.className) {
        firstCard.classList.add('match');
        secondCard.classList.add('match');
      }

      setTimeout(function(){
        clickedCard.classList.remove('clicked');
      }, 800);
    }
  }

  const matchCards = document.querySelectorAll('.match');
  if (matchCards.length === 10) {
    setTimeout(function(){
      alert(`You won!!`);
    }, 500);
  }
}
