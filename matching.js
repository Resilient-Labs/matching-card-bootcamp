//Variables
const game = document.querySelector('.game-container');
let firstCard = null;   // first click
let secondCard = null;  // second click
let isFlipped = false;  // checking for flip state

//Shuffle array 
function shuffle(array) {

    let current = array,length; 

    while(current !== 0){   

        const random = Math.floor(Math.random() * current);

        current--;

        [array[current], array[random]] = [array[random], array[current]];
    }

    return array;
}

//Generate cards
function generateCards() {

    const cards = [];

    for( let i = 0; i < 10; i++ ) {

        cards.push(i)

        cards.push(i)
    }

    return shuffle(cards);

}

//create a card element
function createCard(value){

    const card = document.createElement('div');

    card.classList.add('card');

    card.dataset.value = value;

    card.textContent = value;

    card.addEventListener('click',flip)

    game.appendChild(card);

}

//flip a card
function flip(event) {

    if(isFlipped) return;
    
    const current = event.target;

    current.classList.add('flip');

    if(!firstCard){

        firstCard = current;

    } else {

        secondCard = current;

        checkMatch()

    }

}

//check if cards match
function checkMatch() {

    isFlipped = true;

    if(firstCard.dataset.value === secondCard.dataset.value) {

        setTimeout(() => {

            firstCard.removeEventListener('click',flip);

            secondCard.removeEventListener('click',flip);

            firstCard = null;

            secondCard = null;

            isFlipped = false;

        }, 1000);

    } else {

        setTimeout(() => {
            
            firstCard.classList.remove('flip');

            secondCard.classList.remove('flip');

            firstCard = null;

            secondCard = null;

            isFlipped = false;

        }, 1000);
    }
}
//reset new game
function reset() {

    const deck = generateCards();

    deck.forEach( value => createCard(value));
}
//start game

reset();