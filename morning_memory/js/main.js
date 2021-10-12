// Goal: Make a 10 card memory game - users must be able to select two cards and check if they are a match. If they are a match, they stay flipped. If not, they flip back over. Game is done when all cards are matched and flipped over. Example: http://www.fruit-burst.co.uk/fun-and-games/pairs-game


//Game is for one player
 

let cards = document.querySelectorAll('img')
cards.forEach(card => card.addEventListener('click', flipCard))
let counter= 0;






// Memory Cards - cards are stored in array. Array represents the cards thst will be flipped over.

memCards.sort(()=> .5 -Math.random())
const memCards = [
  {
    name: 'Beyonce',
    img: 'img/beyonce.jpeg'
  },
  {
    name: 'Beyonce',
    img: 'img/beyonce.jpeg'
  },
  {
    name: 'Kelly',
    img: 'img/kelly.jpeg'
  },
  {
    name: 'Kelly',
    img: 'img/kelly.jpeg'
  },
  {
    name: 'Michelle',
    img: 'img/michelle.jpeg'
  },
  {
    name: 'Michelle',
    img: 'img/michelle.jpeg'
  },
  {
    name: 'LeToya',
    img: 'img/letoya.jpeg'
  },
  {
    name: 'LeToya',
    img: 'img/letoya.jpeg'
  },
  {
    name: 'LaTavia',
    img: 'img/latavia.jpg'
  },
  {
    name: 'LaTavia',
    img: 'img/latavia.jpg'
  },

  {
    name: 'Farah',
    img: 'img/farah.jpeg'
  },

  {
    name: 'Farah',
    img: 'img/farah.jpeg'
  }

]

let cardCounter = 0;
let card =[]
let score =document.querySelector('.result')

function flipCard(){

}

// const gameBoard =document.querySelectorAll('.gameBoard')

function playMemory(){
for (let i =0; i < memCards.length; i++)
      let cards =document.createElement('img')
      cards.setAttribute('src', 'img/destinyschild.jpeg')
      cards.setAttribute('data-id', i)
      cards.addEventListener('click', cardFlip)
      memCards.appendChild(cards)
}

// Flip Card function
function flipCard() {
  let card =this.getAttribute('data-id')
  card.push(memCards[card].name)
  card.push(card)
  this.setAttribute ('src', memCards[card].img)

  if(card.length ===2){
    setTimeout(matchCard,1000)
  }
}

let matchPairs =[]
//function matchcard
function matchCard (){
  let cardMatch = document.querySelectorAll('img')
  const cardOne = card[0]
  const cardTwo = card [1]

  if (card[0] === card[1]) {
    alert('Yay! Match Found!')
    matchPairs.push(cards)
  } else {
    cards[cardOne].setAttribute('src', img/destinyschild.jpeg)
    cards[cardTwo].setAttribute('src', img/destinyschild.jpeg)
    alert ('Sorry, not a match.')
  }

  card=[]
  score.textContent=== cardMatch.length
}
// //event listner
// document.addEventListener()
// document.querySelectorAll
