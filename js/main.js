let allCards = document.querySelectorAll(".card")

allCards.forEach(card => card.addEventListener("click", flipCard))

let cardFlipped = false
let firstCard, secondCard
let lockBoard = false
let shuffleReset = false

shuffle()
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return; //this represents the first card clicked but firstCard hasn't been assigned its value, hence evaluates to false, allowing the function to continue aka if I try to click first card again it will stop the function from continuing (disabling clicking on first card twice)


    // this keyword represents the element that fired the event
    this.classList.toggle("flip")

    // card flip set to false, in order for it to run we do the ! for falsey statement
    if (!cardFlipped) {
        // represents first click
        cardFlipped = true
        firstCard = this
    }

    else {
        // represents second click
        cardFlipped = false
        secondCard = this

        checkForWin()
    }

}

function checkForWin(){
    if (firstCard.dataset.value === secondCard.dataset.value){
        // match aka disable flipping
        firstCard.removeEventListener("click", flipCard)
        secondCard.removeEventListener("click", flipCard)
        resetBoard()
    } else{
        lockBoard = true //to stop further clicks if there's a match
        
        // not a match aka unflip cards
        setTimeout(() => {
            firstCard.classList.remove("flip")
            secondCard.classList.remove("flip")
            
            resetBoard() //lockBoard set to false again to allow further clicks once cards are unflipped
        }, 1000)

    }
}

function resetBoard(){
    cardFlipped = false 
    lockBoard = false // to prevent further clicks before the first two are flipped back 
    firstCard = null 
    secondCard = null
}


function shuffle(){
    allCards.forEach(card => {
        let random = Math.floor(Math.random()*12)
        card.style.order = random
    })
}


document.querySelector("button").addEventListener("click", shuffleBtn)

function shuffleBtn(){
    allCards.forEach(card => {
        let random = Math.floor(Math.random()*12)
        card.style.order = random
        card.addEventListener("click",flipCard)
        card.classList.remove("flip")
        resetBoard()
    })
}