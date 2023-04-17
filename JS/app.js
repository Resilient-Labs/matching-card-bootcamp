//making a gme where the user have to select cards and have them match with eachother if they don't match the cards will turn back over and the user will try again when the user does gert a match the cards will stay on the board when the user completes the game they will have the option to restart the game and the game will restart

//Everything that the user will be interacting with/variables
const cards = document.querySelectorAll('.card')
let flippedCards = [] //keeps track of flipped cards so there isn't more than two cards flipped at a turn
let matchingCards = [] //keeps track of all the matching cards


//create a function for the card flip-- when the card is clicked on it will 'flip over'
function flipCard(){
     //helps to prevent the user from clicking on more than 2 cards at
     if(flippedCards.length === 2){
        //line of code for if they match
        return
    }

    //added flippedCard class to the flippedCards array so that when the card is clicked it will turn around
    this.classList.add('flippedCard')
    flippedCards.push(this)

    // check if two cards have been flipped
  if (flippedCards.length === 2) {
    // get the inner text of the front of each card
    const card1 = flippedCards[0].querySelector('.back').innerText
    const card2 = flippedCards[1].querySelector('.back').innerText

    // check if the cards match
    if (card1 === card2) {
      // add matching cards to matchingCard array
      matchingCards.push(flippedCards[0], flippedCards[1])
      // reset flippedCards array
      flippedCards = []
    } else {
      // if cards don't match, flip them back over after a short delay
      setTimeout(() => {
        flippedCards[0].classList.remove('flippedCard')
        flippedCards[1].classList.remove('flippedCard')
        // reset flippedCards array
        flippedCards = []
      }, 1000)
    }
  }

  // check if all cards have been matched
  if (matchingCards.length === cards.length) {
    // show message to user that they have won
    alert('You won!')
    // reset game by shuffling cards and resetting arrays
    cards.forEach(card => {
      card.classList.remove('flippedCard')
    });
    matchingCards = []
    flippedCards = []
  }
}

cards.forEach(card => {
  card.addEventListener('click', flipCard)
})


