// Goal: Make a 10 card memory game - users must be able to select two cards and check if they are a match.
//If they are a match, they stay flipped. If not, they flip back over. 
//Game is done when all cards are matched and flipped over.
//I used this video for guidance on this project: https://youtu.be/ZniVgo8U7ek?si=P1zWW-_Rrv9nRxJ5

//Select all cards
const cards = document.querySelectorAll('.card')

//Loop through list of cards and add event listener to flip card on click
cards.forEach(card => {
    card.addEventListener('click', flipCard)
})

//make variable for when first card is not flipped yet; set to true when flipped later
let flippedCard = false
//used null to avoid errors when checking for match
let firstCard  
let secondCard


//Create function for card flip
    // Progress check
        //console.log("Flipped card") see when e is clicked event fires // console.log(this) this refers to the e that is fired upon (div w class of card)
    //add flip toggle to cards; then in css you can add styling to this class
    //create conditions for if card is flipped
function flipCard() {
    this.classList.add('flip')
    //if NOT flipped card; flipped card = true; first card = this (event firing)
    if (!flippedCard){
        //flip first card
        flippedCard = true
        firstCard = this
    } else {
        //flip second card
        flippedCard = false
        secondCard = this
    //Call check match func
    checkMatch() 
    } // if flipped
}

function checkMatch(){
    //check if cards match via same data-animal attribute
    if (firstCard.dataset.animal === secondCard.dataset.animal){
        isMatched()
        document.querySelector('#status').innerText = 'Match!'
    } else {
        notMatched()
        document.querySelector('#status').innerText = 'Try again!'
    } // if match
}

function isMatched() {
    //remove event listener to prevent from being clicked again
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
}

function notMatched() {
    //flip cards back over if not a match
    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
    }, 1500)
}

//IIFE cards will be shuffled on page load
(function shuffle (){
    cards.forEach(card => {
        let random = Math.floor(Math.random() * 10)
        card.style.order = random
    })
})()

//Quick way to restart page code since code above will randomize deck on refresh
document.querySelector('#restart').addEventListener('click', restart)
function restart() {
    location.href = location.href
}