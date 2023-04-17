// const button = document.querySelector('button').addEventListener('click', restart)
const gameboard = document.querySelector('.gameboard')
const result = document.querySelector('#result')
const cards = document.querySelectorAll('.cards')
let previousCard = null //empty 
let flipAllowed = true  

const flip = event => {
  if(flipAllowed === false){
    console.log('nope')
    return
  }
  let currentCard = event.target //this is the clicked card 
  if(currentCard.classList.contains('match')){
    return 
  }

  console.log(currentCard) //event.target is the image tag that has a src 
  let cardIndex = parseInt(currentCard.id) //now we have an index number
  console.log(imgArr[cardIndex]) //what we want to go into the img tag
  let front = imgArr[cardIndex] //pass in cardIndex to the imgarr[i]
  currentCard.src = front //change the image tag to the 'front'

  if(previousCard === null){
    previousCard = currentCard
  } else {
    console.log('should compare:', previousCard , 'to current', currentCard)
    if(previousCard.src === currentCard.src){
      previousCard.classList.add('match')
      currentCard.classList.add('match')
      console.log('match')
      previousCard = null
    } else {
      console.log('no match')
      flipAllowed = false
      setTimeout(() => { 
        previousCard.src = 'img/back.png'
        currentCard.src = 'img/back.png'
        previousCard = null
        flipAllowed = true 
      }, 1000)
    }
  }
}

cards.forEach(card => card.addEventListener('click', flip))


let imgArr = ['img/ace.png', 'img/ace.png', 'img/jack.jpg', 'img/jack.jpg','img/joker.png', 'img/joker.png', 'img/king.png', 'img/king.png', 'img/queen.png', 'img/queen.png']

function shuffle(array) {
  for(let i = array.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1))
      let temp = array[i]
      array[i] = array[randomIndex]
      array[randomIndex] = temp //temp variable so it can be reassigned to randomIndex
  }
}
shuffle(imgArr)

// function restart(){
//   flipAllowed = true
//   cards.forEach(card => card.src = 'img/back.png')
//   previousCard = null
// }