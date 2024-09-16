const cards = document.querySelectorAll('.card')

// Randomize cards
cards.forEach(card => {
    let randomIndex = Math.floor(Math.random() * 12)
    card.style.order = randomIndex
})

// Add click event to cards
cards.forEach(card => card.addEventListener('click', flipCard))

let cardOne, cardTwo
let numCardFlipped = 0 // Handle naming of cardOne and cardTwo
let lockBoard = false

function flipCard() {
    if (lockBoard) return
    this.classList.add('flip') // Rotate card 180°

    // If no cards flipped yet, current card is cardOne
    if (numCardFlipped === 0) {
        cardOne = this
        numCardFlipped = 1
    }

    // If there's one card already flipped, current card is cardTwo
    else if (numCardFlipped === 1) {
        if (this === cardOne) { // Prevent from clicking 2x on same card
            return
        }
        else {
            cardTwo = this
            numCardFlipped = 2
            checkForMatch()
        }
    }
}

function checkForMatch() {
    // If two cards match, keep them up
    if (cardOne.dataset.pokemon === cardTwo.dataset.pokemon) {
        cardOne.removeEventListener('click', flipCard)
        cardTwo.removeEventListener('click', flipCard)
    }

    // If two cards don't match, flip them back down
    else {
        lockBoard = true
        setTimeout(() => {
            cardOne.classList.remove('flip')
            cardTwo.classList.remove('flip')
            lockBoard = false
        }, 1500)
    }

    // Finally, reset card count to prepare for next turn
    numCardFlipped = 0
}

// Reset game
document.querySelector('button').addEventListener('click', reset)
function reset() {
    location.reload()
}