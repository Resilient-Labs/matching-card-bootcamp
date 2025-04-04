let cards = document.getElementsByClassName('card')

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', makeReq)
}

let selection = []
let flippedCards = []

function makeReq(e) {
  // Fixed bug where previously cards would turn back over immediately lol this should fix it
  if (selection.length === 2) return

  // Get the value of the clicked card's data-value attribute
  // used clsostest() to find closest ancestor? sounds like anime lore - tested and looked up docs via MDN
  const card = e.target.closest('.card')
  const cardValue = card.getAttribute('data-value')

  // Once card is clicked, it is flipped by adding it to the clippedCards arr
  card.classList.add('flipped')
  flippedCards.push(card)

  selection.push(cardValue)
  console.log(selection) //

  if (selection.length === 2) {
    // Don't let it happen immediately
    setTimeout(() => {
      if (selection[0] === selection[1]) {
        // console.log('You have a match!')
        alert('You have a match!')
      } else {
        // console.log('Try again!')
        alert('Try again!')

        // Flip both cards back over after a short delay - used higher order function to iterate over all cards
        flippedCards.forEach(card => {
          card.classList.remove('flipped')
        })
      }

      // Reset for the next selection
      selection = []
      flippedCards = []
    }, 1000)
  }
}
