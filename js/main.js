//-------------Utilized CHATGPT---------------------------//
//Generate Cards at grid locations
//Assign numbers
//display correct card based on number value
//delay
//flip cards over
//randomize array
//prompt player to click two cards
//...
//click 1st card > flip over (1 card flipped)
//click 2nd card > flip over 2nd card flipped == 1st card?
    //if yes, stay flipped ++1 point
    //if no, flip card 1 and 2 back over
//once ten cards have been flipped, game over?
//keep track of how many cards the player have flipped?

//document.querySelector('#startButt').addEventListener('click', startRound);
document.querySelector('#startButt').addEventListener('click', () => {
        gameStart = true;
        gameActive = false;
        startRound();
    })
//document.querySelector('#startButt').addEventListener('click', faceupCards);
let cardSlots = document.getElementsByClassName('cards'); //array of the cards slots in the grid

let gameStart = false;
let gameActive = false;

//card image location
let cardImg1 = document.getElementById('cardImage1');
let cardImg2 = document.getElementById('cardImage2');
let cardImg3 = document.getElementById('cardImage3');
let cardImg4 = document.getElementById('cardImage4');
let cardImg5 = document.getElementById('cardImage5');
let cardImg6 = document.getElementById('cardImage6');
let cardImg7 = document.getElementById('cardImage7');
let cardImg8 = document.getElementById('cardImage8');
let cardImg9 = document.getElementById('cardImage9');
let cardImg10 = document.getElementById('cardImage10');

const cardImg = [cardImg1,cardImg2,cardImg3,cardImg4,cardImg5,cardImg6,cardImg7,cardImg8,cardImg9,cardImg10];

const cardFaces = [
    {name: 'one', src: 'img/One.png', value: 1},
    {name: 'Two', src: 'img/Two.png', value: 2},
    {name: 'Three', src: 'img/Three.png', value: 3},
    {name: 'Four', src: 'img/Four.png', value: 4},
    {name: 'Five', src: 'img/Five.png', value: 5},
    {name: 'Six', src: 'img/Six.png', value: 6},
    {name: 'Seven', src: 'img/Seven.png', value: 7},
    {name: 'Eight', src: 'img/Eight.png', value: 8},
    {name: 'Nine', src: 'img/Nine.png', value: 9},
    {name: 'Ten', src: 'img/Ten.png', value: 10}
];
const preloadImg = [];
cardFaces.forEach(face => {
    const img = new Image();
    img.src = face.src;
    preloadImg.push({...face,img});
})

//console.log(preloadImg);

const scoreOutput = document.getElementById('scoreOutput')
let startingScore = 0;
let curScore = 0;
scoreOutput.innerText = `Score: ${curScore}`;
let delay = ms => new Promise(r => setTimeout(r,ms)); //decrease at different levels?


// function facedownCards() {
//     //instantiate cards at slot location
//     if(!gameStart || !gameActive) {
//         gameStart = true;
//         for (let slots = 0; slots < cardSlots.length; slots++) {
//             let cardBacksImg = document.createElement('img'); 
//             cardBacksImg.src = 'img/cardback.png';
//             if(slots < cardSlots.length) {
//                 //instantiate card at card location
//                 cardSlots[slots].appendChild(cardBacksImg);
//             }
//         }   
//     }
//     if(!gameActive) {
//         setTimeout(() => {
//         faceupCards();
//         }, 1000);
//     }
//     if(gameActive) {
//         for (let slots = 0; slots < cardSlots.length; slots++) {
//             let cardBacksImg = document.createElement('img'); 
//             cardBacksImg.src = 'img/cardback.png';
//             if(slots < cardSlots.length) {
//                 //instantiate card at card location
//                 cardSlots[slots].appendChild(cardBacksImg);
//             }
//         }   
//     }
// }

function getRandomFace() {
    return preloadImg[Math.floor(Math.random() * preloadImg.length)];
}

//without this there will be uncontrolled duplicates
function shuffleDeck(array) {
    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i +1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
//controlled dupes
function pairs(pairSlots) {
    //const numPairs = pairSlots / 2;
    const numPairs = Math.floor(pairSlots / 2)
    const selected = preloadImg.slice(0, numPairs);
    const paired = [...selected, ...selected];
    return shuffleDeck(paired);
}

// function faceupCards() {
//     //give each slot a value 0-9
//     //randomize the position?
//     //flip cards face up
//     //instantiate face cards at those locations
//     //delay
//     //flip them back down
//     const pairedDeck = pairs(cardSlots.length);

//     for (let slots = 0; slots < cardSlots.length; slots++) {
//         const cardSlot = cardSlots[slots];
//         cardSlots[slots].innerHTML = ''; 
//         const cardData = pairedDeck[slots]

//         //const imgClone = cardData.img.cloneNode();

//         const cardContainer = document.createElement('div');
//         cardContainer.classList.add('card-container');

//         const cardFront = document.createElement('img');
//         cardBacksImg.src = 'img/cardback.png';
//         back.classList.add('back');

//         cardContainer.appendChild(front);
//         cardContainer.appendChild(back);

//         cardSlot.appendChild(cardContainer);

//         cardContainer.addEventListener('click', () => {
//             if(!cardContainer.classList.contains('flipped')) {
//                 cardContainer.classList.add('flipped');
//             }
//         });

//         document.querySelectorAll('.card-container').forEach(card => {
//             card.classList.remove('flipped');
//         });

//         // imgClone.dataset.value = cardData.value;
//         // imgClone.dataset.name = cardData.name;

//         // cardSlots[slots].appendChild(imgClone);
//         // gameActive = true;
//     }
//     setTimeout(() => {
//         document.querySelectorAll('.card-container').forEach(card => {
//             card.classList.remove('flipped');
//         });
//         gameActive = true;
//     }, 2000);
// }

//-----CHATGPT Helped refactor my code to working order--------------------

function startRound() {
    const pairedDeck = pairs(cardSlots.length);

    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;
    let matches = 0;

    curScore = 0;
    scoreOutput.innerText = `Score:${curScore}`;

    for(let i = 0; i < cardSlots.length; i++) {
        const slot = cardSlots[i];
        slot.innerHTML = '';

        const cardData = pairedDeck[i];

        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-container';
        cardContainer.dataset.value = cardData.value;
        cardContainer.dataset.name = cardData.name;

        const front = document.createElement('img');
        front.className = 'front';
        front.src = cardData.img.src;
        //front.alt = cardData.name;

        const back = document.createElement('img');
        back.className = 'back';
        back.src = 'img/cardback.png';
        //back.alt = 'card back';

        cardContainer.appendChild(front);
        cardContainer.appendChild(back);
        slot.appendChild(cardContainer);
//----------ChatGPT helped with this container system in particular--------------//

        cardContainer.addEventListener('click', () => {
            if(!gameActive) return;
            if(cardContainer.classList.contains('matched')) return;

            cardContainer.classList.add('flipped');

            if(!firstCard) {
                firstCard = cardContainer;
            } else {
                secondCard = cardContainer;
                lockBoard = true;

                const match = firstCard.dataset.value === secondCard.dataset.value;

                if(match) {
                    firstCard.classList.add('matched');
                    secondCard.classList.add('matched');
                    curScore++;
                    matches++;
                    scoreOutput.innerText = `Score: ${curScore}`;
                    resetTurn();

                    if(matches === cardSlots.length / 2) {
                        gameOver();
                    }
                
                } else {
                    setTimeout(() => {
                        firstCard.classList.remove('flipped');
                        secondCard.classList.remove('flipped');
                        resetTurn();
                    }, 1000);
                }
            }
        });
    }


    document.querySelectorAll('.card-container').forEach(c => c.classList.add('flipped'));

    setTimeout(() => {
        document.querySelectorAll('.card-container').forEach(c => c.classList.remove('flipped'));
        gameActive = true;
    }, 2000);

    function resetTurn() {
        [firstCard, secondCard] = [null, null];
        lockBoard = false;
    }

    function gameOver() {
        gameActive = false;
        alert(`Score: ${curScore} You Win!`);
    }
}