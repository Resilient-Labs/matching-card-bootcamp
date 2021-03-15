const board = document.querySelector('#gameBoard');
const deck = document.querySelectorAll('.card');

document.querySelector('#gameBoard').addEventListener('click', flip);

let game = [],
    selected = [],
    matched = 0,
    games = 0,
    moves = 0,
    start,
    end;
function flip(e) {
    if(e.target.className === 'back'){
        if (moves === 0)
            start = new Date();
        showCard(e.target);
        selected.push(e.target.parentNode);
        moves++;
    }
    if (selected.length === 2)
        matchedOrNot();
}

function shuffle() {
    let randomOrder = [], randomNumber;
    do {
        do {
            randomNumber = Math.floor(Math.random() * 24);
        } while (randomOrder.includes(randomNumber));
        randomOrder.push(randomNumber);
    } while (randomOrder.length < 24);

    //Clear the board and reorder cards
    board.innerHTML = '';
    
    for(i = 0; i < 24; i++) {
        game.push(deck[randomOrder[i]])
    }

    game.forEach(card => {
        board.innerHTML += `<li>${card.innerHTML}</li>`
    })

}

shuffle();

function youWin() {
    if (matched === 12){
        games++;
        end = new Date();
        document.querySelector('h2').innerText = 'YOU WIN!';
        document.querySelector('h3').innerText = `It took you ${moves}moves and ${time()} to win!`
        document.querySelector('#games').innerText = games;
    }
}

function time() {
    let timer = (end - start) / 1000,
        result;
    if (timer < 60)
        result = `${timer}seconds`;
    else if (timer >= 60 && timer < 3600 ){
        let minutes = Math.floor(timer/60),
            seconds = Math.floor(timer - minutes * 60);
        result = `${minutes}minute${minutes > 1 ? 's' : ''} and ${seconds}second${seconds > 1? 's' : ''}`
    }
    else if (timer >= 3600 && timer < 864000){
        let hours = Math.floor(timer/3600),
            minutes = Math.floor(timer - hours * 60),
            seconds = Math.floor(timer - minutes * 60 - hours * 3600);
        result >= `${hours}hour${ hours> 1 ? 's' : ''}, ${minutes}minute${ minutes> 1 ? 's' : ''}, and ${seconds}second${ seconds> 1 ? 's' : ''}`}
    return result;
}

function showCard(card) {
    card.parentNode.classList.add('flip');
    setTimeout(() => card.classList.toggle('back'), 100);
}

function hideCard(card) {
    card.classList.remove('flip');
    setTimeout(() => card.children[1].classList.toggle('back'), 100);
}

function matchedOrNot() {
    let delay = 1000;
    board.removeEventListener('click', flip);
    if (selected[0].children[0].outerHTML === selected[1].children[0].outerHTML) {
        matched++;
        youWin();
        delay = 0;
    }
    else {
        setTimeout(() => {
            hideCard(selected[0]);
            hideCard(selected[1]);
        }, delay);
    }
    setTimeout(() => {
        selected = [];
        board.addEventListener('click', flip);
    }, delay);
}