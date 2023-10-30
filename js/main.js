// coded along with freecodecamp


//created a variable that holds all the elements that have the card class
const cards = document.querySelectorAll('.card')

//checks if card has been flipped
let hasFlippedCard = false

//locks the board so if a card is true it wont flip
let lockBoard = false

//variables for first and second cards
let firstCard, secondCard

//this function is called when a card is clicked
function flipCard() {
    //this checks if the two cards clicked are the same locking the board in the process so users can spam click
    if (lockBoard) return
    if (this === firstCard) return

    //this is used to flip the card
    this.classList.add('flip')

    //if a card flips its set to true and first card is assigned to it
    if (!hasFlippedCard) {
        hasFlippedCard = true
        firstCard = this

        return
    } 
    //if a card is already clicked we assign the second card here 
    secondCard = this

    //we then run the check for match function since we have both cards
    checkForMatch()
    
}

//this runs the check for match function
function checkForMatch() {

    //here we check if the two data attributes match and store it in a variable
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework

    //if it is a match we run disable cards function and if not we run unflipcards function
    isMatch ? disableCards() : unFlipCards()

}

//the function disable cards removes the click event listener on both cards meaning we cant re click them(hence a match)
function disableCards(){
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)

    //then we reset board for next turn
    resetBoard()
}

//here is the unflip function
function unFlipCards(){
    //here we temporarily lock the board to prevent spamming during execution
    lockBoard = true
    //we then put a slight delay in flipping the cards back over
    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')

        resetBoard()
    }, 1500)
}

//this function resets the game by setting everytging back to original settings
function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false]
    [firstCard, secondCard] = [null, null]
}

//this function runs immediately before everything else shuffling cards 
(function shuffle(){
    //this assignes a random order to each card
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 10)
        card.style.order = randomPos
    })
})()

//this gives each card an event listener for flipping
cards.forEach(card => card.addEventListener('click', flipCard))