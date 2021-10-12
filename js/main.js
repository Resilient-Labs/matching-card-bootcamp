//grabs all card elements inside the div
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false
let lockBoard = false
let firstCard;
let secondCard;
let reloadButton = document.querySelector('button');

//function for flipping the card
function flipCard () {
    //prevents from muiltple cards being flipped
    if(lockBoard) return

    //Lets user double click card
    if(this === firstCard) return;

    //access classList of memory card
    this.classList.toggle('flip')

//if a player has clicked on a card
    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        
        //second click
    } else {
        
        secondCard = this;

        //Do cards match - check if dataset.attr in html is equal to each other
        if(firstCard.dataset.attr === secondCard.dataset.attr) {
            //if its a match, disable event listener
            firstCard.removeEventListener('click', flipCard)
            secondCard.removeEventListener('click', flipCard)

            resetBoard()
        } else {
            lockBoard = true;
            //if not a match, remove flip class from card
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');

                resetBoard()
            }, 1500);
        }
        //resets board aftera card has been click
        function resetBoard() {
            hasFlippedCard = false
            lockBoard = false
            firstCard = null
            secondCard = null
        }
    }
    gameOver()
}
function gameOver() {
    cards.forEach(card => {
        if(card.classList === 'flip') {
            console.log('gamemover')
        }
    });
}
//shuffle board
(function shuffle() {
    //loops throu cards and assigns random number to each
    cards.forEach(card => {
        let randomNum = Math.floor(Math.random() * 12)
        card.style.order = randomNum;
    });
})();

//reloads page on button click and shuffles the deck
function reload() {
    reload = location.reload()
    shuffle()
}
reloadButton.addEventListener('click', reload, false)


//loop through selcted cards and select each card and on click call flipCard function
cards.forEach(card => {
    card.addEventListener('click', flipCard)
}) 