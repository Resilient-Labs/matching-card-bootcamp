const board = document.querySelector('#game-board');
const restartBtn = document.querySelector('#restart-btn')

const imgs = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

let cardsArray = [...imgs, ...imgs];
let chosenCards = [];
let locked = false;


function createBoard() {
    board.innerHTML = '';
    locked = false;
    chosenCards = [];

    cardsArray.sort(() => Math.random() - 0.5);

    cardsArray.forEach((img) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const imgPath = `assets/${img}`;
        card.dataset.imgName = img;

        card.innerHTML = `<img src="${imgPath}" alt="card image">`;
        card.addEventListener('click', flipCard);
        board.appendChild(card);
    });
}

function flipCard() {

    if(locked){
        return;
    }
    if(this.classList.contains('flipped')){
        return;
    }

    this.classList.add('flipped');
    chosenCards.push(this);

    if(chosenCards.length === 2) {
        locked = true;
        setTimeout(checkMatch, 1000);
    }

}

function checkMatch() {
    const [card1, card2] = chosenCards;

    if(card1.dataset.imgName === card2.dataset.imgName) {

        chosenCards = [];
        locked = false;

        const allFlipped = document.querySelectorAll('.card.flipped').length;
        if(allFlipped === cardsArray.length) {
            setTimeout(() => alert('YOU MATCHED ALL THE PAIRS'), 300);
        }

    } else {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');

            chosenCards = [];
            locked = false;
    }

    
}

restartBtn.addEventListener('click', createBoard);

createBoard();