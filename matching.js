// Variables
const game = document.querySelector('.game-container');
let firstCard = null;   // first click
let secondCard = null;  // second click
let isFlipped = false;  // checking for flip state
let canFlip = true;     // allow card flipping

// Shuffle array 
function shuffle(array) {
    let current = array.length; 

    while (current !== 0) {   
        const random = Math.floor(Math.random() * current);
        current--;
        [array[current], array[random]] = [array[random], array[current]];
    }

    return array;
}

// Generate cards
function generateCards() {
    const cards = [];

    for (let i = 1; i <= 5; i++) {
        cards.push(i);
        cards.push(i);
    }

    return shuffle(cards);
}

// Create a card element
function createCard(value) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = value;
    
    const front = document.createElement('div');
    front.classList.add('card-front');
    const frontImage = document.createElement('img');
    frontImage.src = `${value}.png`;
    frontImage.alt = `Card ${value}`;
    front.appendChild(frontImage);

    const back = document.createElement('div');
    back.classList.add('card-back');
    const backImage = document.createElement('img');
    backImage.src = 'back.png';
    backImage.alt = 'Card Back';
    back.appendChild(backImage);

    card.appendChild(front);
    card.appendChild(back);
    card.addEventListener('click', flip);
    game.appendChild(card)
}

// Flip a card
function flip(event) {
    if (!canFlip) return;
    
    const current = event.currentTarget;

    if (!current.classList.contains('card') || current.classList.contains('flip')) return;
    
    current.classList.add('flip');

    if (!firstCard) {
        firstCard = current;
    } else {
        secondCard = current;
        checkMatch();
    }
}

// Check if cards match
function checkMatch() {
    canFlip = false;

    if (firstCard.dataset.value === secondCard.dataset.value) {
        setTimeout(() => {
            firstCard.removeEventListener('click', flip);
            secondCard.removeEventListener('click', flip);
            firstCard = null;
            secondCard = null;
            canFlip = true;
        }, 1000);
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            firstCard = null;
            secondCard = null;
            canFlip = true;
        }, 2000);
    }
}

// Reset new game
function reset() {
    const deck = generateCards();
    game.innerHTML = '';
    deck.forEach((value) => createCard(value));
}

// Start game
reset();
