//psuedo code
//Make a 10 card memory game - users must be able to select two cards and check if they are a match. 
// If they are a match, they stay flipped. If not, they flip back over. 
// Game is done when all cards are matched and flipped over.
//create my variables 
//start building my function to select cards randomly
//create another function to use the first one using a foreach loop to compare the cards
//flip the cards if two are matching keep them flipped
//if two are not matching unflip them
//after matching all the cards display game over
//add a reset button to reset the game
//used amp help in this project




//declaring our variables
const memoryGame = document.querySelector('.memory-game');

const symbols = ["🚕", "🗽", "🌃", "🍕", "🍎"];
let cardDeck = [...symbols, ...symbols];

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchedPairs = 0;
//function to compare the cards using two methods sort and random
function shuffle() {
    cardDeck.sort(() => Math.random() - 0.5);
}
//this function will create our board using the first method inside to shuffle the cards
function createBoard() {
    shuffle();
    cardDeck.forEach(symbol => {
        const card = document.createElement('div');
        card.classList.add('memory-card');
        card.dataset.symbol = symbol;

        card.innerHTML = `
            <div class="front-face">${symbol}</div>
            <div class="back-face"></div>
        `;
        //create an event listener to run another function to fip the cards
        card.addEventListener('click', flipCard);
        memoryGame.appendChild(card);
    });
}
//in our function we will use conditionnals 
function flipCard() {
    
    if (lockBoard) return;
    //keep the cards fliped if matching using the checkformatch function
    if (this === firstCard) return;
    
    this.classList.toggle('flip'); // Add or remove the 'flip' class

    if (!hasFlippedCard) {
        // First card selected
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    // Second card selected
    secondCard = this;
    checkForMatch();
}
//using conditionnal to check if our cards matching run function diablecards inside conditionnal else unflipcards will run 
function checkForMatch() {
    const isMatch = firstCard.dataset.symbol === secondCard.dataset.symbol;
    
    if (isMatch) {
        disableCards();
    } else {
        unflipCards();
    }
}
//our disablecards is using event listeners to run flipcard function
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    matchedPairs++;
    //settimeout will alert the win for 500 ms
    if (matchedPairs === symbols.length) {
        setTimeout(() => alert('You win!'), 500);
    }
    //the resetboard will run after the win
    resetBoard();
}
//this function will unfilip the cards when not matched using remove method after 1000ms and reset the board with the resetboard function
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

createBoard();

// Reset button function
document.querySelector('.reset').addEventListener('click', () => {
    memoryGame.innerHTML = '';
    matchedPairs = 0;
    resetBoard();
    createBoard();
});







