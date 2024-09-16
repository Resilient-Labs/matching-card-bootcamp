// Goal is to create a 10 card matching game that the cards stay flipped if correct

// Create array to represent the cards
// 5 cards to match 5 others
// Strawberry Mango Pineapple Kiwi Banana
const fruitList = ['Strawberry', 'Mango', 'Pineapple', 'Kiwi', 'Banana','Strawberry', 'Mango', 'Pineapple', 'Kiwi', 'Banana']

// Arrays to store cards
// flipped cards
// matched cards
let cards = []
let flippedCards = []
let matchedCards = []

// Function to shuffle array
// The range from -0.5 to 0.5 provides good distribution of random values around zero so elements are equally likely to be placed to the left or right
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5)
}

// Create the new cards 
function createCard(fruit) {
    // Create div to represent card
    const card = document.createElement('div')
    card.classList.add('card') // For Styling 'card' class to the card element
    
    // Create div for inner card
    const cardInner = document.createElement('div')
    cardInner.classList.add('card-inner') // Styling 'card-inner' class 
    
    // Create div for the back of the card
    // Fruit text on the card
    const back = document.createElement('div')
    back.classList.add('card-back') // 'card-back' class
    back.textContent = fruit // Fruit text content
    
    // Append the back to the inner card element
    cardInner.appendChild(back)
    // Append the inner card to the main card element
    card.appendChild(cardInner)
    
    // Click event to the card so it flips when clicked
    card.addEventListener('click', flipCard)
    // Return the created card
    return card
}

// To start game we need to shuffle and create the cards
function initGame() {
    // Shuffle the list of fruits and store result 
    cards = shuffle(fruitList)
    // Grab the game div from html
    const gameContainer = document.getElementById('memory-game')
    
    cards.forEach(symbol => {
        // Create a card element with the current symbol
        const card = createCard(symbol)
        // Append the created card to the game container
        gameContainer.appendChild(card)
    })
}

// Function for flipping and matching cards
function flipCard() {
    // If less than 2 flipped cards and current card not already flipped or matched
    if (flippedCards.length < 2 && !flippedCards.includes(this) && !matchedCards.includes(this)) {
        // Add the 'flipped' class to the clicked card to flip it
        this.classList.add('flipped')
        // Add the clicked card to the flippedCards array
        flippedCards.push(this)
        // If two cards are flipped, wait for 500ms and then check for a match
        if (flippedCards.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
}

// Function to check if the flipped cards match or not
function checkForMatch() {
    // Destructure the flippedCards array into two separate card variables
    const [card1, card2] = flippedCards
    // If the symbols on the two flipped cards match
    if (card1.querySelector('.card-back').textContent === card2.querySelector('.card-back').textContent) {
        // Add the matched cards to the matchedCards array
        matchedCards.push(card1, card2)
        // Reset the flippedCards array
        flippedCards = []
        // If all cards matched winner message
        if (matchedCards.length === cards.length) {
            alert('You win!')
        }
    } else {
        // If symbols don't match, flip the cards back after 500ms
        setTimeout(() => {
            card1.classList.remove('flipped')
            card2.classList.remove('flipped')
            // Reset the flippedCards array
            flippedCards = []
        }, 500)
    }
}

// Call the initGame function to start game
initGame()
