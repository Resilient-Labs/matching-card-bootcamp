// game link is: https://www.helpfulgames.com/subjects/brain-training/memory.html
// empty container
const container = document.querySelector('#container')

// when someone clicks a card: 
container.addEventListener('click', pickCard)

// to reset the card layout: 
document.querySelector('button').addEventListener('click', randomCardBoardSetup)

// store the card that someone clicks on: 
let firstCardPicked = undefined
let secondCardPicked = undefined

function randomCardBoardSetup() {
// reset cards to empty value
  container.innerHTML = ''

  let cardsToBeSpreadOnScreen = ['dog', 'dog', 'cat', 'cat', 'chicken', 'chicken', 'hippo', 'hippo', 'lion', 'lion']
  while (cardsToBeSpreadOnScreen.length > 0) {
    const order = Math.floor(Math.random() * cardsToBeSpreadOnScreen.length)
    // creating a variable where we create 
    const createCard = document.createElement('div') // creating a div in HTML
    container.appendChild(createCard) // adding the div/card that we created in line above to the container in the HTML/DOM
    createCard.innerText = 'Card'
    createCard.classList.add(cardsToBeSpreadOnScreen[order]) // set class of cards to random class from array
    // removes class name from array 'cardsToBeSpreadOnScreen' so it doesn't assign it to another div
    cardsToBeSpreadOnScreen.splice(order, 1)
  }

  //
  firstCardPicked = undefined
  secondCardPicked = undefined

}

// on page load, load the cards on the webpage so people can start playing:
randomCardBoardSetup()


// Game logic = everytime an element in the container (in html) is clicked, the div's innertext becomes the class name
function pickCard(event) {
  console.log(event)
  event.target.innerText = event.target.className // the element that you clicked on in the container, reassign it's innertext to class name
  if (firstCardPicked != undefined) { // card would not be undefined if it's been clicked, it now = the class name
    secondCardPicked = event.target // the thing that was clicked on 
  } else {
    firstCardPicked = event.target
    return
  }

  if (firstCardPicked.className === secondCardPicked.className) { // 
    console.log('Match, cards have the same class name')
  } else {
    console.log('Not a Match, cards will be flipped over')
    firstCardPicked.innerText = 'Card'
    secondCardPicked.innerText = 'Card'
  }

  // What does this do?
  firstCardPicked = undefined
  secondCardPicked = undefined

  // if the two cards match, it's a pair - the cards should disappear
  // 
}


























// const container = document.querySelector('#container')
// container.addEventListener('click', pickCard)

// let flipOne = undefined
// let flipTwo = undefined

// // randomize cards outside 
// function random() {
//   container.innerHTML = ''
//   // vvv cards 
//   let cards = ['turtle','turtle','cat','cat','dog','elephant','moose']
//   while (cards.length > 0) { // <-- while (cards.length) truthy
//     const rando = Math.floor(Math.random() * cards.length)
//     const div = document.createElement('div')
//     container.appendChild(div)
//     div.classList.add(cards[rando])
//     div.innerText = 'Cards'
//     cards.splice(rando, 1)
//   }
//   flipOne = undefined
//   flipTwo = undefined
// }

// function pickCard(e) {
//   console.log(e.target)// <- the element that the user clicked on (target)
//   // click/flip,click/flip
//   e.target.innerText = e.target.className
//   // create variables to store
//   if (flipOne != undefined){
//     flipTwo = e.target
//   } else {
//     flipOne = e.target 
//     return
//   }
//   // a = c
//   // b = c 
//   // a = b 
//   if (flipOne.className === flipTwo.className) {
//     console.log('Match')
//     // if match stay flipped
//   }
//   else{
//     console.log('Try Again')
//     // in not match flip back
//     flipOne.innerText = 'Card'
//     flipTwo.innerText = 'Card'
//   }
//   // after every match set 
//   flipOne = undefined
//   flipTwo = undefined
//   // randomize
//   // restart
// }
