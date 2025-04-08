let firstCard = null;
let secondCard = null;
let matchedPairs = 0; // Track matched pairs

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', flipCard);
});

function flipCard(event) {
    const clickedCard = event.target;

    // Prevent clicking the same card twice
    if (firstCard === clickedCard) return;

    // Flip the card
    clickedCard.src = getCardImage(clickedCard.id);

    if (!firstCard) {
        firstCard = clickedCard;
    } else if (!secondCard) {
        secondCard = clickedCard;

        // Check for a match
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    if (firstCard.src === secondCard.src) {
        console.log("Match found!");
        matchedPairs++;

        // Reset selections
        firstCard = null;
        secondCard = null;
    } else {
        console.log("Not a match, flipping back!");
        
        firstCard.src = 'king.webp'; // Reset to card back
        secondCard.src = 'king.webp';
        // Reset selections
        firstCard = null;
        secondCard = null;
    }

    // Check if game is complete
    if (matchedPairs === 5 /*document.querySelectorAll('img').length / 2*/) {
        console.log("Game Over! All pairs matched!");
    }
}

function getCardImage(cardId) {
    // Example mapping (replace with your actual image logic)
    const cardPairs = {
        'one': 'funnyKing.jpeg',
        'two': 'queen.jpeg',
        'three': 'spadeA.jpeg',
        'four': 'queen.jpeg',
        'five': 'funnyKing.jpeg',
        'six': 'spadeA.jpeg',
        'seven': 'joker.jpeg',
        'eight': 'spadeQueen.webp',
        'nine': 'spadeQueen.webp',
        'ten': 'joker.jpeg'

        // Add all cards and their matching pairs
    };
    return cardPairs[cardId] || 'king.webp';
}