
const cards = document.querySelectorAll(".card")
cards.forEach(card => card.addEventListener("click", toggleCard)) //cards container into array and for each card lets me apply the function to toggle image on a click

let cardFlipped = false // I set these three variables to false or not assigned to initiate game from scratch
let firstCard, secondCard
let turnStart = false

let revealedCount = 0 //using this to create alert once all available matches are completed and all matches are found


function toggleCard() { //flip cards and show elemental image that I set as the front of each card.


    // code below generated with help from Adam Nagy's tutorial on matching game
    if (turnStart) return; //if turnStart is true then return and stop function to prevent other cards being flipped because a turn or match up is being attempted
    if (this === firstCard) return
    this.classList.add("flipped") //this keyword = first card with value of false and makes sure i dont click card again; adds flipped class to hide card back or blue side of card.

    if (!cardFlipped) {
        cardFlipped = true //dont let user click other cards while cards are being turned or before end of the turn of user picking two cards
        firstCard = this
        return
    }

    cardFlipped = false //click another card and flip it if first card has been flipped/toggled
    secondCard = this
    // code above generated with help from Adam Nagy's tutorial on matching game


    checkMatch() //now that second card is flipped then check for a match from data-value in html
}

function checkMatch() {// now check to see if flipped card values are a match
    if (firstCard.dataset.value === secondCard.dataset.value) { //checks if data-value attribute values I set in HTML are the same to verify they are a match. Sort of the same idea I had with my wutang name generator. 
        firstCard.removeEventListener("click", toggleCard) //leave it flipped if matched; dont let user click it again to toggle it
        secondCard.removeEventListener("click", toggleCard)//leave it flipped if matched; dont let user click it again to toggle it
        resetBoard()
        revealedCount += 1 //add one to revealed count for each pair that is matched.
        console.log(revealedCount)
    }
    else {
        turnStart = true;
        setTimeout(function () {//if both cards are not matched then turn them both back over
            firstCard.classList.remove("flipped") //return it to normal to show blue side if they are unmatched by removing flipped class
            secondCard.classList.remove("flipped")//return it to normal to show blue side if they are unmatched by removing flipped class
            resetBoard()
            return
        }, 1000);
    }
    if (revealedCount === 5) { //if all five pairs are found then alert that game is over or user won!
        alert("Game Won! Please reshuffle!")
    }

}

function shuffle() {//want all cards to have show up randomly or be shuffled so they dont show up in the same place everytime at start of game
    cards.forEach(card => {
        let randomCardPosition = Math.floor(Math.random() * cards.length)
        card.style.order = randomCardPosition//using cards variable array again to randomly place cards in dom using the order css property along with the random number generated with the random variable.
    });
}
shuffle();


document.querySelector("button").addEventListener("click", shuffleCards); //button to reshuffle cards once all matches are completed or user simply wants to shuffle cards.
function shuffleCards() {
    cards.forEach(card => {
        let randomCardPosition = Math.floor(Math.random() * cards.length)
        card.style.order = randomCardPosition; //same shuffle code as before to shuffle them to random spots
        card.classList.remove("flipped") //set cards back to normal blue back side
        resetBoard()
        card.addEventListener("click", toggleCard)
    });
}

function resetBoard() { //reset board function to set everything to null or false and start from scratch to allow functions to be activated.
    cardFlipped = false
    turnStart = false
    firstCard = null
    secondCard = null
}












