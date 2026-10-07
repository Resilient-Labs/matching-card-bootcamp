// Make a 10 card memory game - users must be able to select two cards and check if they are a match.
// If they are a match, they stay flipped. If not, they flip back over.
// Game is done when all cards are matched and flipped over.

    class Card {
        flipped = false;
        display = true;
    constructor(brand ,display) {
        this.brand = brand;
        this.value = brand;

    }
    flip(){
        this.flipped = !this.flipped
    }

    hide(){
        this.display = false
    }

    describe() {
        return this.brand;
    }
    }

const brands =[Jordan , Nike, Yeezy, Dior, Vans];
const cardslist = [
        new Card ('Jordan', 'image1.jpg'),
        new Card ('New Balance', 'image2.jpg'),
        new Card ('Nike', 'image3.jpg'),
        new Card ('Adidas', 'image4.jpg'),
        new Card ('Puma', 'image5.jpg'),
        new Card ('Converse', 'image6.jpg'),
        new Card ('Vans', 'image7.jpg'),
        new Card ('Yeezy', 'image8.jpg'),
        new Card ('Dior', 'image9.jpg'),
        new Card ('Balenciaga', 'image10.jpg')
];


const cardsList = [];
for (const brand of brands) {
    cardsList.push(new Card(brand));
    cardsList.push(new Card(brand));
    }

cardsList.sort(() => Math.random() - 0.5);

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedPairs = 0;

const board = document.querySelector('.gameGrid') || document.createElement('div');
if (!document.querySelector('.gameGrid')) {
    board.className = 'game-board';
    document.body.appendChild(board);
    }

    for (const card of cardsList) {
    const cardElement = document.createElement('button');
    cardElement.type = 'button';
    cardElement.className = 'card';
    cardElement.dataset.brand = card.brand;
    cardElement.textContent = '?';
    cardElement.setAttribute('aria-label', 'Hidden sneaker card');
    board.appendChild(cardElement);
    }

    const resetCards = () => {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    };

    const handleMatch = () => {
    if (!firstCard || !secondCard) return;

    const isMatch = firstCard.dataset.brand === secondCard.dataset.brand;

    if (isMatch) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        firstCard.disabled = true;
        secondCard.disabled = true;
        matchedPairs += 1;

        if (matchedPairs === cardsList.length / 2) {
        setTimeout(() => {
            alert('You matched all of the Sneaker Pairs!');
        }, 300);
        }

        resetCards();
        return;
    }

    setTimeout(() => {
        firstCard.textContent = '?';
        secondCard.textContent = '?';
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetCards();
    }, 800);
    };

    document.addEventListener('click', (event) => {
    const clickedCard = event.target.closest('.card');

    if (!clickedCard || lockBoard || clickedCard === firstCard || clickedCard.classList.contains('matched')) {
        return;
    }

    clickedCard.textContent = clickedCard.dataset.brand;
    clickedCard.classList.add('flipped');

    if (!firstCard) {
        firstCard = clickedCard;
        return;
    }

    secondCard = clickedCard;
    lockBoard = true;
    handleMatch();
    });
