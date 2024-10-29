// setting variables
const gameBoard = document.getElementById('game-board');
const cardValues = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]; // Matching pairs
let firstCard = null;
let secondCard = null;
let flippedCards = 0; //  this is tracking how many pairs have been found


function shuffle(array) {                      // this function is helping too shuffle the cards radomnly foe each game
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements 
    }
}
shuffle(cardValues);

cardValues.forEach(value => {                    // 3. Create each card element and add it to the game board
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = value; // Store the card's value for matching
    card.textContent = ''; // Initially empty, shows when flipped

    // Flip the card on click
    card.addEventListener('click', () => flipCard(card));
    gameBoard.appendChild(card);
});


function flipCard(card) {                                                          //this function is to flip the card 
    if (card.classList.contains('flipped') || secondCard) return; // Prevent double clicks

    card.classList.add('flipped');
    card.textContent = card.dataset.value;

    
    if (!firstCard) {                                     //this checks to see if the first or second card is being flipped 
        firstCard = card;
    } else {
        secondCard = card;
        checkMatch();
    }
}


function checkMatch() {                                                                       
    if (firstCard.dataset.value === secondCard.dataset.value) {                  // If values match, keep them flipped
        flippedCards += 2;
        resetSelection();
        
       
        if (flippedCards === cardValues.length) {                                 // Check if the game is finished
            alert('Congratulations, you matched all pairs!');
        }
    } else {
        
        setTimeout(() => {                                                       // If they don't match, flip them back after a short delay
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard.textContent = '';
            secondCard.textContent = '';
            resetSelection();
        }, 1000);
    }
}

 //  Reset selected cards
function resetSelection() {
    firstCard = null;
    secondCard = null;
}




