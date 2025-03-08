//score and reset button
const result = document.getElementsByClassName('score')[0]
const reset = document.getElementsByTagName('button')[0].addEventListener('click', resetGame)

// Every Cell.;
const cell1 = document.getElementById('cell1');
const cell2 = document.getElementById('cell2');
const cell3 = document.getElementById('cell3');
const cell4 = document.getElementById('cell4');
const cell5 = document.getElementById('cell5');
const cell6 = document.getElementById('cell6');
const cell7 = document.getElementById('cell7');
const cell8 = document.getElementById('cell8');
const cell9 = document.getElementById('cell9');
const cell10 = document.getElementById('cell10');
const cell11 = document.getElementById('cell11');
const cell12 = document.getElementById('cell12');
const cell13 = document.getElementById('cell13');
const cell14 = document.getElementById('cell14');
const cell15 = document.getElementById('cell15');
const cell16 = document.getElementById('cell16');

// Values of cards and an Shuffled array

const cards = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H']
const shuffled = []

// shuffle

function shuffle (){
    for(let i = cards.length; i > 0; i--) {
        let rng = Math.floor(Math.random() * i)
        shuffled.push(cards[rng])
        cards.splice(rng, 1)
    } 
}    

// add cards to the board
shuffle()

const cells = [
    cell1, cell2, cell3, cell4, cell5, cell6,
    cell7, cell8, cell9, cell10, cell11, cell12,
    cell13, cell14, cell15, cell16
];

// Set up event listeners for each cell
cells.forEach(e => {
    e.addEventListener('click', matchingGame)
});


function assignCellValues(){
   for (let i = 0; i < cells.length; i++){
    const cardValueElement = cells[i].querySelector('span');
    cardValueElement.textContent = shuffled[i]
   }
}

assignCellValues()


// Allows you to play
let score = 0
let firstCard = null;
let secondCard = null;
let lockBoard = false;

function matchingGame(e){

    if (lockBoard) return;

    cellClicked = e.target.querySelector('span')
    cellClicked.classList.toggle('hidden')
    
    if (!firstCard){
        firstCard = cellClicked
        return
    }

    secondCard = cellClicked

    // Checks for match 

    if(firstCard.textContent == secondCard.textContent){
        firstCard.parentElement.removeEventListener('click', matchingGame);
        secondCard.parentElement.removeEventListener('click', matchingGame);
        resetCards()
    }else{
        score += 1
        result.innerText = ` Current Score: ${score}`
        lockBoard = true
        setTimeout(() => {
            firstCard.classList.toggle('hidden'); 
            secondCard.classList.toggle('hidden'); 
            resetCards()
        }, 1000) // 2 second delay        
    }
}




// reset cards and game

function resetCards(){
    firstCard = null
    secondCard = null
    lockBoard = false
}

function resetGame(){
    location.reload()
}