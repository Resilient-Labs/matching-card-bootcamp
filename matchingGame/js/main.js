//I am building a card matching game.
// I will need to have a container named game container that I will be able to make a grid out of for the individual cards.
// I want to put images inside of each box that will hold the cards.
// All of the images will be hidden and upon click they should flip.
//when two cards are opened, I will need to check and see if the items are a match. if so, they will remained upflipped. if not they will flip back to be hidden.
//game ends when all of the cards have been matched.
//I need a button to reset the game to start over.


// I will start with an array of images to use: I used these link to help plan out my array of cards and randomizer conception. https://www.youtube.com/watch?v=wz9jeI9M9hI and https://github.com/kubowania/memory-game/tree/master

let cardNameList = [
    'bowl', 'cake', 'drink', 'popcorn', 'taco'
]
let cardSet;
let board = [];
let rows = 2;
let columns = 5;

let clickCardOne;
let clickCardTwo;

window.onload = function () {
    shuffle();
    startGame();
    document.getElementById('restart').addEventListener('click', restart)
}




function shuffle() {
    cardSet = cardNameList.concat(cardNameList); //checks to ensure douoble the cards, 10 total.
    for (let i = 0; i < cardSet.length; i++) {
        let x = Math.floor(Math.random() * cardSet.length)
        let temp = cardSet[i];
        cardSet[i] = cardSet[x];
        cardSet[x] = temp;
    }
    console.log(cardSet) // checking to make sure shuffle is working.
}

function startGame() {
    for (let y = 0; y < rows; y++) {
        let rows = []
        for (let a = 0; a < columns; a++) {
            let cardImg = cardSet.pop()
            rows.push(cardImg)

            let card = document.createElement('img')
            card.id = y.toString() + '-' + a.toString()
            card.src = 'images/' + cardImg + '.png'
            card.classList.add('card')
            card.addEventListener('click', selectCard)
            document.getElementById('board').append(card)
        }
        board.push(rows)
    }
    setTimeout(cardBacks, 50)
}

function restart(){ //reshulffle/restarts the game
    document.getElementById('board').innerHTML = ''
    clickCardOne = null
    clickCardTwo = null
    board = []
    shuffle()
    startGame()
}

function cardBacks() { //sets back of cards
    for (let y = 0; y < rows; y++) {
        let rows = []
        for (let a = 0; a < columns; a++) {

            let card = document.getElementById(y.toString() + '-' + a.toString())
            card.src = 'images/pattern.png'

        }
    }
}

function selectCard(){
    if(this.src.includes('pattern')){
        if (!clickCardOne){
            clickCardOne = this;

            let pair = clickCardOne.id.split('-')
            let y = parseInt(pair[0])
            let a = parseInt(pair[1])
            clickCardOne.src = 'images/' + board[y][a] + '.png'
        }
            else if (!clickCardTwo && this != clickCardOne){
                clickCardTwo = this;

                let pair = clickCardTwo.id.split('-')
                let y = parseInt(pair[0])
                let a = parseInt(pair[1])
                clickCardTwo.src = 'images/' + board[y][a] + '.png'

            setTimeout(checkAndFlip, 400);

        }
    }
}
function checkAndFlip (){
    if(clickCardOne.src != clickCardTwo.src){
        clickCardOne.src = 'images/pattern.png'
        clickCardTwo.src = 'images/pattern.png'
    }

    clickCardOne = null
    clickCardTwo = null
}

