document.addEventListener('DOMContentLoaded', () => {
    const deckArray = [
        {
            name:'fire',
            img:'fire.jpg'
        },
        {
            name:'fire',
            img:'fire.jpg'
        },
        {
            name:'water',
            img:'water.jpg'
        },
        {
            name:'water',
            img:'water.jpg'
        },
        {
            name:'thunder',
            img:'thunder.jpg'
        },
        {
            name:'thunder',
            img:'thunder.jpg'
        },
        {
            name:'dirt',
            img:'dirt.jpg'
        },
        {
            name:'dirt',
            img:'dirt.jpg'
        },
        {
            name:'leaf',
            img:'leaf.jpg'
        },
        {
            name:'leaf',
            img:'leaf.jpg'
        },
        {
            name:'snow',
            img:'snow.jpg'
        },
        {
            name:'snow',
            img:'snow.jpg'
        },
    ]
let selectedCards = []
let selectedCardsId = []
let winningMatch = []
const deck = document.querySelector('.deck')
const showScore = document.querySelector('#totalscore')

function flipMe() {
    let deckCardId = this.getAttribute('data-id')
    selectedCards.push(deckArray[deckCardId].name)
    selectedCardsId.push(deckCardId)
    this.setAttribute('src',deckArray[deckCardId].img)
    if (selectedCards.length === 2) {
        setTimeout(gameMatch, 500)
    }
}

function gameMatch(){
    let decks = document.querySelectorAll('img')
    const firstId = selectedCardsId[0]
    const secondId = selectedCardsId[1]
    if(selectedCards[0] === selectedCards[1]){
        alert('Cards matched!')
        decks[firstId].setAttribute('src', 'blank.jpg')
        decks[secondId].setAttribute('src', 'blank.jpg')
        winningMatch.push(selectedCards)
    } else {
        decks[firstId].setAttribute('src', 'earth.jpg')
        decks[secondId].setAttribute('src', 'earth.jpg')
        alert('Try again!')
    }
    selectedCards = []
    selectedCardsId = []
    showScore.textContent = winningMatch.length
    if (winningMatch.length === deckArray.length/2) {
        showScore.textContent = 'Congratulations, You Won!'
    }
}


function fullDeck(){
    for (let  i = 0; i < deckArray.length; i++){
        deckCard = document.createElement('img')
        deckCard.setAttribute('src', 'earth.jpg')
        deckCard.setAttribute('data-id', i)
        deckCard.addEventListener('click', flipMe)
        deck.appendChild(deckCard)
    }
}

fullDeck()
deckArray.sort(() => 0.5 - Math.random())
})