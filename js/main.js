const boxOne = document.querySelector('.one')
const boxTwo = document.querySelector('.two')
const boxThree = document.querySelector('.three')
const boxFour = document.querySelector('.four')
const boxFive = document.querySelector('.five')
const boxSix = document.querySelector('.six')
const boxSeven = document.querySelector('.seven')
const boxEight = document.querySelector('.eight')
const boxNine = document.querySelector('.nine')
const boxTen = document.querySelector('.ten')

//Allow click on all elements of an array

let cards = document.querySelectorAll('.box')
let cardsArr = Array.from(cards)
cardsArr.forEach(card => card.addEventListener('click', flipCard))
// Math.random(cardsArr) * 9

//On click, card should flip
//Should not be able to click more than two cards
//Timer where cards flip back if they don't match
//If they match, they stay flipped


// function changeImg(){
//   let hide = document.querySelectorAll('.backFace')
//   let hideArr = Array.from(hide)
//   hideArr.forEach(img => img.addEventListener('click', flipCard))
//   hide.classList.add('hidden')

//   let show = document.querySelectorAll('.frontFace')
//   let showArr = Array.from(show)
//   showArr.forEach(img => img.addEventListener('click', flipCard))
//   show.classList.remove('hidden')
// }

function changeImg(){
  let hide = document.querySelectorAll('.backFace')
  let hideArr = Array.from(hide)
  hideArr.forEach(img => img.addEventListener('click', flipCard))
  hide.classList.add('hidden')

  let show = document.querySelectorAll('.frontFace')
  let showArr = Array.from(show))
  showArr.forEach(img => img.addEventListener('click', flipCard))
  show.classList.remove('hidden')
}


function flipCard(){
  changeImg()
  console.log('click')
}