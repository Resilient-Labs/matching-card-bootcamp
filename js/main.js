// Goal: make a 10 card matching game - user must select 2 cards and check if they are a match. if they are, cars will stay flipped over. if not, they will flip back over. game is over when all matches have been flipped over.
//this project was difficult for me. i used a video by Code Sketch on Youtube that helped me get through it

document.querySelector('#shuffle').addEventListener('click', shuffle)

//the this keyword represents the element that 'fired' the event
//create variables for the cards
const cards = document.querySelectorAll('.gameCards')


//when a player flips a card we have to know if it is the first or the second card that was flipped
//initially set to false because player has to flipped a card at the start
let hasFlippedCard = false
let lockBoard = false // this will lock the board so that you cannot continue to click on cards before the setTimeout is over
let firstCard, secondCard

function flipCard(){
    if(lockBoard) return
    if(this === firstCard) return

    this.classList.add('flip')

    if (!hasFlippedCard){
        //first click
       //represents the first time a player has clicked a card
        hasFlippedCard = true
        firstCard = this
        //made firstCard = this because this is equal to the event that triggered the click event
        //console.log(hasFlippedCard, firstCard)
    }else {
        //second click
        //false here means the player is clicking the first card
        hasFlippedCard = false
        secondCard = this
        //console.log(firstCard, secondCard)

        //do cards match?
        if(firstCard.dataset.set === secondCard.dataset.set){
            //means the cards match
            //removeEventListener means that the click function is no longer being triggered. cards can no longer be flipped
            firstCard.removeEventListener('click', flipCard)
            firstCard.removeEventListener('click', flipCard)
        } else{

         lockBoard = true
            //not a match
            //use settime out to make sure there is enough time available to see if the cards have flipped.
            setTimeout(() => {
            //classList.remove means we are removing the flip class from the object
            firstCard.classList.remove('flip')
            secondCard.classList.remove('flip')

            lockBoard = false
            }, 1500)


        }
    }

}

function shuffle(){
    cards.forEach(card => {
        let randomCard = Math.floor(Math.random() * 10)
        card.style.order = randomCard
    })
}

//create an event listener for all clicks on the cards
//use .forEach method so that the eventListener can be assigned to every card
cards.forEach(card => card.addEventListener('click', flipCard))

document.querySelector('#shuffle').addEventListener('click', shuffle)



