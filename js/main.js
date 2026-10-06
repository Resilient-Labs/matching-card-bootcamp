let winCount = document.querySelector('.winner span');
// let lostCount = document.querySelector('.loser span');
let lostCount = document.querySelector('.misses span');

let message = document.querySelector('.message');

let cards = ['pizza.jpg', 'bagel.jpg', 'taxi.jpg', 'liberty.jpg', 'subway.jpg', 'pizza.jpg', 'bagel.jpg', 'taxi.jpg', 'liberty.jpg', 'subway.jpg'];
// let cards = ['img/pizza.jpg', 'img/bagel.jpg', 'img/taxi.jpg', 'img/liberty.jpg', 'img/subway.jpg', 'img/pizza.jpg', 'img/bagel.jpg', 'img/taxi.jpg', 'img/liberty.jpg', 'img/subway.jpg'];
let firstCard = null;
let waiting = false;

let wins = 0;
let losses = 0;
let resetTimer = null;
let matches = 0;

function dealCards(){
    const deck = cards.slice();
    clearTimeout(resetTimer);
    firstCard = null;
    waiting = false;
    matches = 0;
    message.textContent = '';

    document.querySelectorAll('.card').forEach((element) => {
        const randomNumber = Math.floor(Math.random() * deck.length);
        const randomPicture = deck.splice(randomNumber, 1)[0];

        // element.src = 'img/' + encodeURIComponent(randomPicture);
        element.src = 'img/' + randomPicture;
        console.log(element.src)
        // element.src = randomPicture;
        element.alt = '';

        element.classList.add('hidden');
        element.classList.remove('picked');
    })
}

document.querySelectorAll('.flip').forEach((playable) => {
    playable.addEventListener('click', turnOver);
})

document.querySelector('.redo').addEventListener('click', dealCards);

function turnOver(event){
    if(waiting) return
    const imgElement = event.currentTarget.querySelector('img');
    if(!imgElement.classList.contains('hidden')) return

    imgElement.classList.remove('hidden');
    imgElement.alt = '';

    // First Click

    if(!firstCard){
        firstCard = imgElement;
        imgElement.classList.add('picked');
        return
    }

    // Match

if(imgElement.src === firstCard.src){
    firstCard.classList.remove('picked');
    firstCard = null;
    matches += 1;
    if(matches === cards.length / 2){
        wins += 1;
        winCount.textContent = wins;
        message.textContent = 'You won and are now a true New Yorker!';
    }
    return;
}

const previousCard = firstCard;
firstCard = null;
waiting = true;

resetTimer = setTimeout(() => {
    imgElement.classList.add('hidden');
    previousCard.classList.add('hidden');

    imgElement.alt = '';
    previousCard.alt = '';

    previousCard.classList.remove('picked');
    waiting = false;
    losses += 1;
    lostCount.textContent = losses;
}, 700)
}

dealCards()

// No match

/* const previousCard = firstCard;
firstCard = null;
waiting = true;
losses += 1;

lostCount.textContent = losses;
message.textContent = "Not a match. Try again.";

setTimeout(function(){
    previousCard.classList.add('hidden');
    previousCard.classList.remove('picked');

    imgElement.classList.add('hidden');

    waiting = false;

    message.textContent = '';
}, 1000);

} 

*/