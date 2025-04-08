document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', flipCard);
});

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const ten = document.getElementById('ten');

let firstCard = null;
let secondCard = null;
let matchedPairs = 0;

function flipCard(event) {
    let clickedId = event.target.id;

    // Prevent clicking the same card twice
    if (firstCard === clickedId || secondCard === clickedId) return;

    // Flip the card based on its ID
    if (clickedId === 'one') {
        one.src = 'funnyKing.jpeg';
    } else if (clickedId === 'two') {
        two.src = 'queen.jpeg';
    } else if (clickedId === 'three') {
        three.src = 'joker.jpeg';
    } else if (clickedId === 'four') {
        four.src = 'spadeQueen.webp';
    } else if (clickedId === 'five') {
        five.src = 'joker.jpeg';
    } else if (clickedId === 'six') {
        six.src = 'spadeA.jpeg';
    } else if (clickedId === 'seven') {
        seven.src = 'queen.jpeg';
    } else if (clickedId === 'eight') {
        eight.src = 'spadeQueen.webp';
    } else if (clickedId === 'nine') {
        nine.src = 'funnyKing.jpeg';
    } else if (clickedId === 'ten') {
        ten.src = 'spadeA.jpeg';
    }

    // Track clicks -->if firstCard (clicked) is empty (null) reassign it and and for secondCard (clicked) too
    if (!firstCard) {
        firstCard = clickedId;
    } else if (!secondCard) {
        secondCard = clickedId;
        setTimeout(checkMatch, 1000); // Delay match check
    }
}

function checkMatch() {
    if (
        (firstCard === 'one' && secondCard === 'nine') ||
        (firstCard === 'nine' && secondCard === 'one') ||
        (firstCard === 'two' && secondCard === 'seven') ||
        (firstCard === 'seven' && secondCard === 'two') ||
        (firstCard === 'three' && secondCard === 'five') ||
        (firstCard === 'five' && secondCard === 'three') ||
        (firstCard === 'four' && secondCard === 'eight') ||
        (firstCard === 'eight' && secondCard === 'four') ||
        (firstCard === 'six' && secondCard === 'ten') ||
        (firstCard === 'ten' && secondCard === 'six')
    ) {
        console.log("Match found!");
        matchedPairs++;

        // Reset selections
        firstCard = null;
        secondCard = null;
    } else {
        console.log("Not a match, flipping back!");

        // Flip cards back instantly without a delay
        if (firstCard === 'one') one.src = 'king.webp';
        else if (firstCard === 'two') two.src = 'king.webp';
        else if (firstCard === 'three') three.src = 'king.webp';
        else if (firstCard === 'four') four.src = 'king.webp';
        else if (firstCard === 'five') five.src = 'king.webp';
        else if (firstCard === 'six') six.src = 'king.webp';
        else if (firstCard === 'seven') seven.src = 'king.webp';
        else if (firstCard === 'eight') eight.src = 'king.webp';
        else if (firstCard === 'nine') nine.src = 'king.webp';
        else if (firstCard === 'ten') ten.src = 'king.webp';

        if (secondCard === 'one') one.src = 'king.webp';
        else if (secondCard === 'two') two.src = 'king.webp';
        else if (secondCard === 'three') three.src = 'king.webp';
        else if (secondCard === 'four') four.src = 'king.webp';
        else if (secondCard === 'five') five.src = 'king.webp';
        else if (secondCard === 'six') six.src = 'king.webp';
        else if (secondCard === 'seven') seven.src = 'king.webp';
        else if (secondCard === 'eight') eight.src = 'king.webp';
        else if (secondCard === 'nine') nine.src = 'king.webp';
        else if (secondCard === 'ten') ten.src = 'king.webp';

        firstCard = null;
        secondCard = null;
    }

    // Check if game is complete
    if (matchedPairs === 5) {
        console.log("Game Over! All pairs matched!");
    }
}