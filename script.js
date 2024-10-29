const gameBoard = document.getElementById('gameBoard');
const timerDisplay = document.getElementById('timer');
const correctDisplay = document.getElementById('correct');
const wrongDisplay = document.getElementById('wrong');
const restartButton = document.getElementById('restartButton');

let cards = [];
let flippedCards = [];
let correctCount = 0;
let wrongCount = 0;
let timer = 0;
let interval;

// Possible symbols for the cards
const symbols = ['🍎', '🍌', '🍇', '🍓', '🥝', '🍉'];

// Create 12 cards (2 of each symbol)
function generateCards() {
    const cardSymbols = [...symbols, ...symbols]; // Duplicate each symbol
    cardSymbols.sort(() => 0.5 - Math.random()); // Shuffle symbols

    // Create card elements
    gameBoard.innerHTML = '';
    cardSymbols.forEach((symbol) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.symbol = symbol;
        card.innerText = '?'; // Hide symbol initially
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    });

    cards = document.querySelectorAll('.card');
}

// Handle card flip logic
function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        this.innerText = this.dataset.symbol;
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

// Check if the two flipped cards match
function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.symbol === card2.dataset.symbol) {
        correctCount++;
        correctDisplay.innerText = correctCount;

        card1.classList.add('matched');
        card2.classList.add('matched');
    } else {
        wrongCount++;
        wrongDisplay.innerText = wrongCount;

        // Flip the cards back after a short delay
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            card1.innerText = '?';
            card2.innerText = '?';
        }, 1000);
    }

    flippedCards = [];

    // Check if all cards are matched
    if (correctCount === symbols.length) {
        clearInterval(interval);
        alert(`Game over! You finished in ${timer} seconds.`);
    }
}

// Start the timer
function startTimer() {
    timer = 0;
    interval = setInterval(() => {
        timer++;
        timerDisplay.innerText = timer;
    }, 1000);
}

// Reset the game
function resetGame() {
    clearInterval(interval);
    correctCount = 0;
    wrongCount = 0;
    timer = 0;
    flippedCards = [];

    correctDisplay.innerText = correctCount;
    wrongDisplay.innerText = wrongCount;
    timerDisplay.innerText = timer;

    generateCards();
    startTimer();
}

// Initialize the game
restartButton.addEventListener('click', resetGame);
resetGame();
