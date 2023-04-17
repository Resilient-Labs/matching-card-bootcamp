const cards = document.querySelectorAll('.card');

let hasBeenClicked = false;
let lockedBoard = false;
let firstCard, secondCard;

function flipCard(){
    if(lockedBoard) return;
    if(this === firstCard) return;
    this.classList.add('flip')

    if(!hasBeenClicked){
        // first click
        hasBeenClicked = true
        firstCard = this
    }else{
        //secnd card
        secondCard = this;
        console.log(firstCard, secondCard)
        checkForMatch()
    }
}

function checkForMatch (){
    //do cards match
    if(firstCard.dataset.framework === secondCard.dataset.framework){
        // if matches
        removeClass()
    }else{
        unflipCards()
    }
}

function removeClass (){
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
    console.log('Match!')
    resetBoard()
}

function unflipCards (){
    lockedBoard = true

    setTimeout(() =>  {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip') 
        resetBoard()
    }, 1000);
}

function resetBoard (){
    [hasBeenClicked, lockedBoard] = [false, false]
    [firstCard, secondCard] = [null, null]
}

(function shuffle(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12)
        card.style.order = randomPos;
    })
})()

cards.forEach(card => card.addEventListener('click', flipCard))