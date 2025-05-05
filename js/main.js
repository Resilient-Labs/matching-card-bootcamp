// matching logic
// first we look at the 2 cards that are choosen 
// we then compare the 2 cards to see if there is a match

// if there is a match both cards remain flipped and prevent more clicks to flip again
//however if not a match flip both cards back down 

// usee .contain to prevent clicking a card that’s already flipped

// event listener/document/HTML
//DOMContentLoaded waits until the DOM has fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const symbols = ['🌳', '🌸', '🍄', '🌻', '🌊']
  const cards = []

  //Double symbols to make matching pairs 
  // for loop
  for (let i = 0; i < symbols.length; i++) {
    cards.push(symbols[i])
    cards.push(symbols[i])
  }

  // board game from the DOM
  const gameBoard = document.getElementById('gameBoard')
  let firstCard = null // not assigning anything
  let secondCard = null // not assigning anything
  let lockBoard = false
  let hasFlippedCard = false
  let numberOfMatches = 0

  // syntax to shuffle the cards
  cards.sort(() => 0.5 - Math.random())

  //declare positions
  // const gameBoard = document.getElementById('gameBoard')
 // let hasFlippedCard = false
  // let lockBoard = false
  //let firstCard, secondCard


  // create cards 
  for (let i = 0; i < cards.length; i++) {
    const card = document.createElement('div')
    const symbol = cards[i]
    card.classList.add('card')
    card.dataset.symbol = symbol
    card.textContent = ''
    gameBoard.appendChild(card)

    card.addEventListener('click', function () {
      handleCardFlip(this)
    })
  }

  //function moved into its own guide
  function handleCardFlip(card) {
    if (lockBoard || card === firstCard || card.classList.contains('flipped'))
      return;

    card.classList.add('flipped')
    card.textContent = card.dataset.symbol

    //conditionals
    if (hasFlippedCard == false) {
      hasFlippedCard = true;
      firstCard = card;
      return;
    }

    secondCard = card
    lockBoard = true


    // condtionals
    if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
      firstCard.removeEventListener('click', handleCardFlip);
      secondCard.removeEventListener('click', handleCardFlip);
      numberOfMatches++;
      //if the number of matches is equal to 5 
        if (numberOfMatches == 5) {
          alert('you win')
        }
      resetBoard();
    } else {
      setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        firstCard.textContent = '';
        secondCard.textContent = '';
        resetBoard();
      }, 1000); //delays by 1 second // edit semi colon to a comma
    }
  }


  //create a function to reset the board
  function resetBoard() {
    hasFlippedCard = false
    lockBoard = false
    firstCard = null
    secondCard = null
  } 
});
