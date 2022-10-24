
// matching card game

// Goal: Make a 10 card memory game - users must be able to select two cards and check if they are a match.
// If they are a match, they stay flipped. If not, they flip back over.
// Game is done when all cards are matched and flipped over. 

// create array for cards
let cards = [
    'images/bob.png',
    'images/coco.png',
    'images/astrid.png',
    'images/maelle.png',
    'images/agnes.png',
    'images/lucky.png',
    'images/bob.png',
    'images/coco.png',
    'images/astrid.png',
    'images/maelle.png',
    'images/agnes.png',
    'images/lucky.png'
]

let selected = []
let clicks = 0
// assign images to each card
let images = document.querySelectorAll('img')
for (let i = 0; i < cards.length; i++) {
    images[i].src = cards[i]
}
// shuffle cards
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let random = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[random]] = [arr[random], arr[i]];
    }
    return arr
}
// console.log(shuffle(cards))

// bachelor 3 code (toggle + event listeners)
let board = document.querySelector('div')
board.addEventListener('click', match)

function match(e){
    if (e.target.querySelector('img').classList.contains('match')) {
        e.target.querySelector('img').removeEventListener('click', match)
    } else {
        clicks++
        e.target.querySelector('img').classList.toggle('hidden')
        selected.unshift(e.target.querySelector('img'))
    if (clicks === 3) {
        checkCards(selected)
        }
    }
}
// function to see if cards match
// if card 1 = card 2 keep them flipped otherwise they flip back (hidden)
function checkCards(arr) {
    if(arr[1].src === arr[2].src) {
        arr[0].classList.toggle('hidden')
        arr[1].classList.toggle('match')
        arr[2].classList.toggle('match')
        selected = []
        clicks = 0 
    } else {       
        arr[0].classList.toggle('hidden')
        arr[1].classList.toggle('hidden')
        arr[2].classList.toggle('hidden')
        selected = []
        clicks = 0  
    }
}
const button = document.querySelector('#playAgain')
button.addEventListener('click', playAgain)
// function to clear board and re-shuffle cards
function playAgain(e) {
    selected = []
    clicks = 0 
    for (let i = 0; i < cards.length; i++) {
        images[i].classList.remove('match')
        images[i].classList.remove('hidden')
    }
    // use different variables since loops are nested together
    shuffle(cards)
    for (let n = 0; n < cards.length; n++) {
        images[n].src = cards[n]
    }
}