let matchingCards = [
    'images/brocklesnar.png', 'images/edge.png', 'images/jeffHardy.png', 'images/johncena.png', 'images/rko.png',
    'images/romanreigns.png', 'images/shawnmichaels.png', 'images/stonecold.png', 'images/therock.png', 'images/undertaker.png',
];

function shuffleTheDeck() {
    return matchingCards.concat(matchingCards).map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort).map(({ value }) => value);
}

function letsPlay() {
    matchingCards = shuffleTheDeck(matchingCards);
    matchingCards.forEach((item, index) => { 
        document.getElementById('cardGame').innerHTML += ` 
        <img src="${item}" class="card" id="${index}">`;
        setTimeout(() => {
            matchingCards.forEach((_, index) => { 
                let img = document.getElementById(`${index}`);
                img.addEventListener('click', letsGo);
                img.src = "images/wwelogo.png";
          });
        }, 1000);
    });
}

letsPlay();

let clickedTwoImages = [] , setTimeoutFinished = true;

function letsGo(event) {
    if (setTimeoutFinished && clickedTwoImages[0] !== event.target.id) {
        event.target.src = matchingCards[event.target.id];
        clickedTwoImages.push(event.target.id);
        if (clickedTwoImages.length === 2) {
            if (matchingCards[clickedTwoImages[0]] === matchingCards[clickedTwoImages[1]]) {
                document.getElementById(`${clickedTwoImages[0]}`).removeEventListener('click', letsGo);
                document.getElementById(`${clickedTwoImages[1]}`).removeEventListener('click', letsGo);
                clickedTwoImages = [];
            } else {
                setTimeoutFinished = false;
                setTimeout(() => {
                    document.getElementById(`${clickedTwoImages[0]}`).src = 'images/wwelogo.png';
                    document.getElementById(`${clickedTwoImages[1]}`).src = 'images/wwelogo.png';
                    setTimeoutFinished = true;
                    clickedTwoImages = [];
                }, 1000);
            }
        }
    }
}




