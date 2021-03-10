//mark helped me with a few parts in my code

// when user clicks on a card, card should be flipped over
//if there is no other card flipped over it stays up
// else if it matches the previous card then it stays up
//else  both cards are flipped back down

//if all cards on board are matched then user wins
document.querySelector('button').addEventListener('click', resetGame)
const cards = document.querySelectorAll('.back')
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', turnCard)
}

// const cardClick = card => card.addEventListener('click', turnCard)
//
// function cardClick(card){
//   card.card.addEventListener('click', turnCard)
// }
//
// cards.forEach(card => card.addEventListener('click', turnCard))
// cards.forEach(cardClick)
//different ways to write the function on lines 13 and 15
//line 19 forEach loop is the same as the for loop on line 9

// 0
// 1 keep it fillped over and wait til another card is selected
// 2 compare it with the previous card and if it matches it stays up

let cardArray = ['eye.png', 'eyeshadow.png', 'face.png', 'makeup.png', 'lipstick.png', 'eye.png', 'face.png', 'powder.png', 'makeup.png',
  'eyeshadow.png', 'lipstick.png', 'powder.png'
]

let previousClicked = null
let pause = false

function turnCard(event) {

  if (pause === true) {
    return
  }

  const currentCard = event.currentTarget
  if (currentCard.src.endsWith('backcard.png') === false) {
    return
  }
  //flip over card
  currentCard.classList.add('selected')
  let cardId = currentCard.id
  let img = document.createElement('img')
  img.src = cardArray[cardId]
  img.classList.add('show')
  event.currentTarget.parentElement.appendChild(img)




  // currentCard.src = cardArray[cardId]

  if (previousClicked != null) {
    //both cards were clicked
    //check for a match between currentCard and previousClicked
    if (previousClicked.src === img.src) {
      if (checkWinner() === true) {
            alert('winner')
      }
      previousClicked = null

    } else {
      pause = true
      //cards gets flipped back down
      setTimeout(function() {
        let tempCurrent = currentCard
        let tempPrevious = previousClicked.parentElement.querySelector('.back')
        tempCurrent.classList.remove('selected')
        tempPrevious.classList.remove('selected')

        // currentCard.src = 'backcard.png'
        // previousClicked.src = 'backcard.png'
        previousClicked = null
        pause = false
      }, 1000)
    }

  } else {
    previousClicked = img
  }
}

function checkWinner() {
  for (let i = 0; i < cards.length; i++) {
    console.log(cards[i].src);
    if (cards[i].src.endsWith('backcard.png')) {
      return false
    }
  }
  return true
}


function resetGame() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].src = 'backcard.png'
  }
  //recieved this code to shuffle my deck from stackoverflow
  var currentIndex = cardArray.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cardArray[currentIndex];
    cardArray[currentIndex] = cardArray[randomIndex];
    cardArray[randomIndex] = temporaryValue;
  }
}

resetGame()
