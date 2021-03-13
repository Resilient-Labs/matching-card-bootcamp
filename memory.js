
//  defining what .card is for each div
const cards = document.querySelectorAll('.card')
for (let i = 0; i < cards.length; i++){
  cards[i].addEventListener('click', cardClick)
}


// card array 2 becomes global here
const cardArray2 = []

let waitFlipBack = false

function startGame() {
  // setting value before the game begins (before cards are shuffled)
  const cardArray = [
    'odd.jpg',
    'aelita.jpg',
    'crab.jpg',
    'ulrich.jpg',
    'yumi.jpg',
    'odd.jpg',
    'aelita.jpg',
    'crab.jpg',
    'ulrich.jpg',
    'yumi.jpg',
    'hover.jpg',
    'hover.jpg'
  ]


  for (let i = 0; i <= 11; i++) {
    let x = Math.floor(Math.random() * cardArray.length)
    cardArray2.push(cardArray[x])
    cardArray.splice(x, 1)
  }

}
startGame()

let previousCard = null
let currentCard = null

function cardClick(event){
  // event.target is the div that was clicked on (it's the same as what getElementById() would give you
    if (waitFlipBack === true) {
      return
    }
    console.log(event.currentTarget.id)
    const index = event.currentTarget.id - 1
    console.log(event.currentTarget)
    if (!event.currentTarget.firstChild.src.endsWith('xana.jpg')){
      console.log('nope!', event.currentTarget.firstChild.src, 'after nope')

      return

    }

  // console.log(`id of div clicked on: ${event.target.id}, make this into an index by subtracting 1: ${event.target.id - 1}, which we use to find the image in the cardArray: ${cardArray2[event.target.id -1]}`)

  previousCard = currentCard
  currentCard = event.currentTarget
  // currentCard.innerHTML = `<img src='${cardArray2[index]}'></img>`
  currentCard.firstChild.src = cardArray2[index]
  console.log(currentCard.firstChild , "first child")
  if (previousCard !== null){
    // run comparison
      if (previousCard.firstChild.src == currentCard.firstChild.src){
        // leave cards facing up
        console.log('we got a match!')
        previousCard = null
        currentCard = null
      } else {
        // set time out accepts time in miliseconds
        // this function clears the images from their boxes after the time alotted (1000 miliseconds)

        function flipBack(){
          previousCard.firstChild.src = 'xana.jpg'
          currentCard.firstChild.src  = 'xana.jpg'
          waitFlipBack = false
          previousCard = null
          currentCard = null
        }
        waitFlipBack = true
        setTimeout(flipBack, 1000)
        console.log('try again')
      }

    // that means we have two cards on the board and we need to compare them then make a decision



    // when a new card becomes a previous card, the previous card goes away
  }

  console.log('current card' , currentCard)
  console.log('previous card' , previousCard)
}

//get card to flip back down
