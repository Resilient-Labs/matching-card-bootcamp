//make a 10 card memory game
//users must be able to select two cards and check if they are a match
//if they are a match, they stay flipped
//if not, flip them back over
//game is completed when all cards are matched and flipped over


//need click listeners on each card
//possibly randomize cards on each page load
//if a card is flipped, allow another card to be flipped
//if class of first card matches class of second card, keep flipped and remove event listeners
//if not match, unflip both
//if all cards are matched, display 'You win!'
//consider having buttons to initialize and reset game
//could hide everything by default and display it only when start game button is clicked

let cards = document.querySelectorAll('li')
addFlipCardListeners()
document.querySelector('#startGame').addEventListener('click', startGame)
document.querySelector('#resetGame').addEventListener('click', resetGame)


function flipCard(event) {
    if(event.target.classList.contains('unflipped')) {
        event.target.classList.add('flipped')
        event.target.classList.remove('unflipped')
        //display image inside of li
        event.target.querySelector('img').style.display = 'block'
        checkForMatch()
    }
}

//check nodelist to see if two cards are flipped
//if two cards are flipped, check to see if they have the same value
//if they do, leave them flipped and remove their event listeners
//if not, unflip them both

function checkForMatch() {
    //spread nodelist into an array
    //filter to see which cards are flipped
    //check if both contain the same content
    //if they match, leave them flipped
    const flippedCards = [...cards].filter( card => card.classList.contains('flipped') )

    if(flippedCards.length === 2) {
        //if text on cards is the same, leave them flipped
        if(flippedCards[0].querySelector('img').src !== flippedCards[1].querySelector('img').src) {
            flippedCards.forEach(card => {
                //if the text is not the same, flip them back over
                unflipCards(card)
                //now that the card is flipped, take it out of the nodelist
            })
        }else if(flippedCards[0].querySelector('img').src === flippedCards[1].querySelector('img').src) {
            //if the text is the same, remove them from the list of cards
            blockMatchedCards()
        }

    }
}

//function to unflip cards if they do not match

function unflipCards(card) {
    //remove event listeners so that nothing may be clicked while checking match
    removeCardFlipListeners()
    //set a timeout so the unflip has a slight delay
    setTimeout(() => {
        card.classList.add('unflipped')
        card.classList.remove('flipped')
        card.querySelector('img').style.display = 'none'
        //add event listeners back in once delay is up
        addFlipCardListeners()
    }, '750')
}

function blockMatchedCards() {
    //if cards contain flipped class, remove them from node list
   cards = [...cards].filter( card => card.classList.contains('unflipped') )
}

function startGame() {
    //hide start game button so it cannot be clicked again
    hideStartGameButton()
    //show cards section
    document.querySelector('.cards').classList.remove('hidden')
    assignImgs( shuffleCards() )
}

//need a way to assign random background images to each card
//only two cards can share the same background image
//if the image is used twice, remove it from the array
//give the li span innerText (will be used to compare cards)
//maybe each li should get a random image on page load, display that image if the li is click on

//gives num from 1-5

//idea for while loop from Stack Overflow: https://stackoverflow.com/questions/36069870/how-to-remove-random-item-from-array-and-then-remove-it-from-array-until-array-i

function shuffleCards() {
        //array to put shuffled src's in
        const shuffledImages = []
        //array of image src's
        const images = 
        [
            'css/assets/dialga.jpg',
            'css/assets/empoleon.jpg',
            'css/assets/infernape.jpg',
            'css/assets/palkia.jpg',
            'css/assets/torterra.jpg',
            'css/assets/dialga.jpg',
            'css/assets/empoleon.jpg',
            'css/assets/infernape.jpg',
            'css/assets/palkia.jpg',
            'css/assets/torterra.jpg'
        ]
        
        //run a while loop to assign img's to li's while the src still exists in array
        while( images.length ) {
            //grab a random src from the src array
            const index = Math.floor( Math.random() * images.length )
            //put it in the shuffled array
            shuffledImages.push( images[index] )
            //remove it from the array
            images.splice( index, 1 )
        }

        return shuffledImages
}

function assignImgs(shuffledImages) {
    cards.forEach( (card, index) => card.innerHTML = `<img src=${shuffledImages[index]}>`)
}

// function to add flip card listeners
function addFlipCardListeners() {
    cards.forEach( card => addEventListener('click', flipCard) )
}

//remove event listeners

function removeCardFlipListeners() {
    cards.forEach(card => removeEventListener('click', flipCard))
}

//reset game function

function resetGame() {
    //set the cards variable to store all the li's again
    //set them all to unflipped
    //randomize the values again
    cards = document.querySelectorAll('li')
    cards.forEach(card => {
        card.classList.add('unflipped')
        card.classList.remove('flipped')
        card.innerHTML = ''
    })
    startGame()

}


//hide start game button after clicked for first time
function hideStartGameButton() {
    document.querySelector('#startGame').classList.add('hidden')
}