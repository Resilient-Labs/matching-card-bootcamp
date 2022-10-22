//Instructions: 
//Start the game by clicking on a card. 
//When the card is clicked, it flips to an image. 
//Randomizing - Math.floor(Math.Random)?

let firstCardToCompare = null //this variable will be constantly reassigned

let cards = document.querySelectorAll('.card')

document.querySelector('button').addEventListener('click', resetAndRandomizeCards)

//Array.from() or .forEach for each card? Goal: to add an event listener to each card so it can be clicked.
cards.forEach(card => card.addEventListener('click', flipCard))

////If you find a match (two cards), they stay flipped over on the screen (does not time out)
//If they do not match, turn them back over.
function flipCard(e){
    if(e.target.classList.contains('flipped') || e.target.classList.contains('matched')){
        return 
    }
    if(firstCardToCompare == null){
        firstCardToCompare = e.target.closest('.card')
        firstCardToCompare.classList.add('flipped')
    } else {
        e.target.closest('.card').classList.add('flipped')
        setTimeout(checkCards, 500)
        firstCardToCompare = null
    }
}

function checkCards(){
    let firstImage = document.querySelectorAll('.flipped > img:not(.back)')[0]
    let cardOne = firstImage.parentNode
    console.log(cardOne)
    let secondImage = document.querySelectorAll('.flipped > img:not(.back)')[1]
    let cardTwo = secondImage.parentNode
    
    cardOne.classList.remove('flipped')
    cardTwo.classList.remove('flipped')

    if(firstImage.src === secondImage.src){
        console.log('Its a match!')
        cardOne.classList.add('matched')
        cardTwo.classList.add('matched')
        isGameOver()
    }
}

function isGameOver(){
    let matchedTotal = document.querySelectorAll('.matched').length
    let cardsTotal = document.querySelectorAll('.card').length
    console.log(matchedTotal)
    console.log(cardsTotal)
    if(matchedTotal === (cardsTotal)) {
        alert('Game over!')
        resetAndRandomizeCards()
    }
}



function resetAndRandomizeCards(){
    let cardPictures = [
        "img/devil.png",
        "img/dizzy.png",
        "img/haha.jpg",
        "img/happy.png",
        "img/heart.jpg",
        "img/devil.png",
        "img/dizzy.png",
        "img/haha.jpg",
        "img/happy.png",
        "img/heart.jpg"
    ]

    Array.from(document.querySelector('.card img:not(.back)')).forEach(card => card.src = "")
    for(let i=0; i < 10; i++){
        let emptyCards = document.querySelectorAll('img[src=""]')
        console.log(emptyCards)
        let newRandomCard = Math.floor(Math.random() * emptyCards.length)
        emptyCards[newRandomCard].parentNode.classList.remove('flipped', 'matched')
        emptyCards[newRandomCard].src = cardPictures[i]
    }
}

resetAndRandomizeCards()