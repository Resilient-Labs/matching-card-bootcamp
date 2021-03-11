/*
Card matching functional on both sides.
Every time card is turned

--------------------------------------------
Each match stays on screen until reset pressed.
Whichever side gets matches the other player loses -800LP
Whichever side matches all the cards win! eg. Enemy with 0LP.
Have a card reset button
*/

// Score variables and life points
let playerScore = 4000
let botScore = 4000

let playerLifePoint = document.querySelector('.playerLife span')
let botLifePoint = document.querySelector('.botLife span')

let audio = document.querySelector('.yugiohAudio')
audio.volume = 0.2
//Each card for player and bot
const playerCard = document.querySelectorAll('.playerCard')
const botCard = document.querySelectorAll('.botCard')


//Player flip card event listener
playerCard.forEach(card => card.addEventListener('click', flipCard))
 
//Variables set false to use inside the functions to set cards
let cardFlipped = false
let botCardFlipped = false

let stopCardFlipFeature = false
let cardOne, cardTwo, botCardOne, botCardTwo;

// Flip animation toggle & card choice
function flipCard(){
  if(stopCardFlipFeature) return
  this.classList.toggle('flip')
  //bot flip function
  botFlipCard()
  
  if(!cardFlipped){
    cardFlipped = true
    cardOne = this
    return
  }
  cardFlipped = false
  cardTwo = this
  checkPlayerMatch()
}

// Check for player Win
function checkPlayerMatch(){
//do playerCard match?
  if(cardOne.dataset.name === cardTwo.dataset.name){
    //its a match
    cardOne.removeEventListener('click', flipCard)
    cardTwo.removeEventListener('click', flipCard)
    let newScore = playerLifePoint.innerText = playerScore - 800
    playerScore = newScore
  }else {
    //not a match
    stopCardFlipFeature = true
    setTimeout(() => {
      cardOne.classList.remove('flip')
      cardTwo.classList.remove('flip')
      stopCardFlipFeature = false
    }, 1500)
  }
}
// Check for bot Win
function checkBotMatch(){
  //its a match
  //push these into an array.
  if(botCardOne.dataset.bot === botCardTwo.dataset.bot){
    console.log('a match')
    let newBotScore = botLifePoint.innerText = botScore - 800
    botScore = newBotScore
  }
  else {
    setTimeout(() => {
      botCardOne.classList.remove('flip')
      botCardTwo.classList.remove('flip')
    }, 1500)
  }
}

// PLAYER SHUFFLE. It is wrapped in a self invoking function to shuffle immediately on reload.
(function shuffle(){
  playerCard.forEach(card => {
    //for each card order will randomize using random.
    let random = Math.floor(Math.random() * 10)
    card.style.order = random
  })
})()


//BOT FUNCTIONS
//BOT SHUFFLE
//same as above
function shuffleBot(){
  botCard.forEach(card => {
    let random = Math.floor(Math.random() * 10)
    card.style.order = random
  })
}

//BOT CARD FLIP
function botFlipCard(){
  let randomize = Math.floor(Math.random() * 10)
  botCard[randomize].classList.toggle('flip')
  if(!botCardFlipped){
    botCardFlipped = true
    botCardOne = botCard[randomize]
    return
  }
  
  botCardFlipped = false
  botCardTwo = botCard[randomize]
  console.log(botCardOne.dataset.bot, botCardTwo.dataset.bot)
  checkBotMatch()
}