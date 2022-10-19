// worked with Chris Owens, Will, Stackover Flow, Carter

/* matching game 
Make a 10 card memory game - users must be able to select two cards and check if they are a match. If they are a match, they stay flipped. If not, they flip back over. Game is done when all cards are matched and flipped over.

- 10 card matching game
- the user should be able to select two cards and they flip 
- If the cards are a match, they should stay flipped over. 
- If the cards are not a match, they should turn over. 
- The game should check the cards each turn
- turn counter 
- shuffle cards when restarting
**/

// click event for flip card (do a for each)
// document.querySelectorAll('div').addEventListener('click', flip)

// click event for restarting game 
document.querySelector('button').addEventListener('click', restartGame)

let theCard = Array.from(document.getElementsByClassName('card'))
console.log(theCard)


// drop five pics in below
const cardImages = ['firstImage', 'secondImage', 'thirdImage', 'fourthImage', 'fifthImage','firstImage', 'secondImage', 'thirdImage', 'fourthImage', 'fifthImage']

// variables for game: where to put the winning text, the counter starts at 0, empty array for the currently chosen cards when playing and matching cards (when they are equal)
let winningText = document.querySelector('h2') 
let counter = 0
let theChosenCards = []
let matchingCards = []

// for each because event listeners don't work on arrays 

theCard.forEach(card => card.addEventListener('click', flip)) 

// function testClick(event){
//     let cardnum = event.target.dataset.cardnum
//     console.log(cardnum)
//     event.target.style.backgroundImage = `url(${cardImages[cardnum]})`
//     console.log(event.target.style.backgroundImage)
// let allCardImages = []
// cardImages.forEach(img => {allCardImages.push(img)
//     allCardImages.push(img)})
// console.log('aci', allCardImages)



// declare function to assign images to cards
function pictureAssignment(){

    theCard.forEach((card, i) => { 
        card.classList.add(cardImages[i])
    })

}

// declare function to shuffle the random photos 
// this shuffle function code is from StackOverflow (https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array) 

function shuffle(array){
    let currentIndex = array.length, randomIndex; 
    // while there remain elements to shuffle.
    while(currentIndex != 0){
        // pick a remaining element
        randomIndex = Math.floor((Math.random()) * currentIndex); 
        // 9 elements in array, reduces it by 1
        currentIndex--;
        // And swap it with the current element 
        [array[currentIndex], array[randomIndex]] = 
        [array[randomIndex], array[currentIndex]]
    }
    return array
}



// calling the shuffle function 
shuffle(cardImages)
console.log(cardImages)
// calling function for assigning images to cards
pictureAssignment()


// declare function to flip the card 
function flip(e){
    document.querySelector('h3').innerText = `The click counter: ${counter}`

    if (!e.target.classList.contains('selected')) {
            e.target.classList.add('selected')
            console.log(`The click: ${e.target}`)

            counter++ 

            theChosenCards.push(e.target)
            // flip the image upright
            // if this is the second card, then we are going to check the card match
    } 
    return checkCardMatch()
}


// declare function to check for card matches
// function to check if the face up cards are a match. if they are match, leave cards flipped and increment match array 
// if they are not a match, flip them back over. 

function checkCardMatch(){
    if (theChosenCards.length === 3) {
        if(theChosenCards[0].classList.value === theChosenCards[1].classList.value){
            theChosenCards[0].classList.add('matchingCards')
            theChosenCards[0].classList.remove('selected')
            theChosenCards[1].classList.add('matchingCards')
            theChosenCards[1].classList.remove('selected')
            matchingCards.push(theChosenCards[0], theChosenCards[1])
            theChosenCards.splice(0,2)
        }else{
            theChosenCards[0].classList.remove('selected')
            theChosenCards[1].classList.remove('selected')
            theChosenCards.splice(0,2)
            counter -= 2
        }
    } 
    
    if(counter === 10){
        winningText.innerText = 'You have won!'
    }
}



// declare function to restart game
function restartGame(){
    matchingCards = []
    theChosenCards = []
    counter = 0
    theCard.forEach(card => {
        card.classList.remove('matchingCards')
        card.classList.remove('selected')
    })
    shuffle(cardImages)
    pictureAssignment()
    location.reload()
}

