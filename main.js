document.querySelector('.container').addEventListener('click', onCardClicked);
document.querySelector('.reset').addEventListener('click', onResetClicked);

let firstCard = null;
let clickCount = 0;
let score = 0;

// first click flower
function onCardClicked(clickEvent) {
    const clickedCard = clickEvent.target;
    if (cardIsNotYetFlipped(clickedCard)) {
        flipCard(clickedCard);

        // only second click
        if (clickCount === 2) {
            checkForMatches(clickedCard);
        }
    }
}

function cardIsNotYetFlipped(card) {
    return card.src.includes('img/starter.png');
}

function flipCard(card) {
    // style it as a card which is revealed
    card.src = card.parentElement.dataset.revealedImage;
    if (firstCard === null) {
        firstCard = card; //flower
    }
    clickCount = clickCount + 1; //++
}

function checkForMatches(secondCard) {
    // if they have the same picture
    if (secondCard.src === firstCard.src) {
        score++;
        updateScore();
        resetTurn();
    } else {
        setTimeout(function(){ 
        unflipCard(secondCard);
        unflipCard(firstCard);
        resetTurn();
    }, 1000);
    }
}

function unflipCard(card) {
    // animate
    card.src = 'img/starter.png';
}

function resetTurn() {
    firstCard = null;
    clickCount = 0;
}

function updateScore() {
    document.querySelector(`#wins`).innerText = score;
}

function onResetClicked() {
    document.querySelectorAll(`.card img`).forEach((card) => {
        unflipCard(card);
    })
    resetTurn();
    score = 0;
    updateScore();
}