/*
formatted my code with formatter.org

get the pictures 
loop through the pictures and add them to cards array
set everything to nothing -- i still need clarificaiton on null. would undefined be better?

sort all the cards
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset


*/
let btn = document.querySelector('button')
btn.addEventListener("click", startGame)
let pictures = ['Big Bang Theory', 'Breaking Bad', 'Love Island', 'Planet Earth', 'Planet of the Apes']

let firstCardClicked = null
let secondCardClicked = null
let howManyMatches = 0
let playerCanClick = true

function startGame() {
  let allCards = []

  for (let i = 0; i < pictures.length; i++) {
    allCards.push(pictures[i])
    allCards.push(pictures[i])
  }

  allCards.sort(function() {
    return Math.random() - 0.5
  })

  firstCardClicked = null
  secondCardClicked = null
  howManyMatches = 0
  playerCanClick = true

  let gameBoard = document.getElementById('board')
  gameBoard.innerHTML = ''
  document.getElementById('message').textContent = ''

  for (let i = 0; i < allCards.length; i++) {
    let newCard = document.createElement('div')
    newCard.className = 'card'
    newCard.dataset.symbol = allCards[i]

        // I asked google AI Overview how to clcik on a card to call another function and it gave me this. google AI OVERVIEW 
    newCard.onclick = function() {
      flipCardOver(newCard)
    }

    gameBoard.appendChild(newCard)
  }
}


function flipCardOver(card) {
  if (!playerCanClick) return
  if (card.classList.contains('flippedCard')) return
  if (card.classList.contains('matchedCard')) return

//   add the flipped card class!
  card.classList.add('flippedCard')
  card.textContent = card.dataset.symbol


  if (firstCardClicked === null) {
    firstCardClicked = card
  } else {
    secondCardClicked = card
    playerCanClick = false
    checkIfCardsMatch()
  }
}

function checkIfCardsMatch() {
  if (firstCardClicked.dataset.symbol === secondCardClicked.dataset.symbol) {
    firstCardClicked.classList.add('matchedCard')
    secondCardClicked.classList.add('matchedCard')
    howManyMatches = howManyMatches + 1

    if (howManyMatches === pictures.length) {
      document.getElementById('message').textContent = 'You Win!'
    }

    firstCardClicked = null
    secondCardClicked = null
    playerCanClick = true

  } else {

    firstCardClicked.classList.remove('flippedCard')
    secondCardClicked.classList.remove('flippedCard')
    firstCardClicked.textContent = ''
    secondCardClicked.textContent = ''

    firstCardClicked = null
    secondCardClicked = null
    playerCanClick = true
  }
}

startGame()