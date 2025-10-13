const cards = document.querySelectorAll('.card');

// randomize cards
cards.forEach(card => card.style.order = Math.floor(Math.random() * cards.length));

// listeners
cards.forEach(card => card.addEventListener('click', flipCard));

let cardOne, cardTwo;
let flippedCount = 0;
let lockBoard = false;

function flipCard() {
    if (lockBoard) return;
    if (this.classList.contains('flip')) return; // already up
    this.classList.add('flip');

    if (flippedCount === 0) {
        cardOne = this; flippedCount = 1; return;
    }

    if (this === cardOne) return; // avoid double click
    cardTwo = this; flippedCount = 2; checkForMatch();
}

function checkForMatch() {
    const match = cardOne.dataset.hero === cardTwo.dataset.hero;

    if (match) {
        cardOne.removeEventListener('click', flipCard);
        cardTwo.removeEventListener('click', flipCard);
    } else {
        lockBoard = true;
        setTimeout(() => {
            cardOne.classList.remove('flip');
            cardTwo.classList.remove('flip');
            lockBoard = false;
        }, 800);
    }
    flippedCount = 0;
}

// reset board
document.querySelector('button').addEventListener('click', () => location.reload());
