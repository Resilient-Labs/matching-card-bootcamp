let winCount = document.querySelector('.winner span')
let lostCount = document.querySelector('.loser span')
let message = document.querySelector('.message')

let cards = ['hauntedHouse.jpg', 'batCat.jpg', 'pumpkinMan.jpg', 'moon.jpg', 'trickOrTreat.jpg', 'hauntedHouse.jpg', 'batCat.jpg', 'pumpkinMan.jpg', 'moon.jpg', 'trickOrTreat.jpg']

let firstCard = null
let waiting = false

let wins = 0
let losses = 0
let matches = 0

function dealCards() {
  cards.sort(() => Math.random() - 0.5)
  firstCard = null
  waiting = false
  matches = 0
  message.textContent = ''

  document.querySelectorAll('.card').forEach((element, index) => {
 element.src = cards[index]
  element.alt = ''
  element.classList.add('hidden')
  element.classList.remove('picked')
  });
}

document.querySelectorAll('.specificCards').forEach((playable) => {
playable.addEventListener('click', turnOver)
});

document.querySelector('.re-do').addEventListener('click', dealCards)

function turnOver(event) {
if (waiting) 
return

const imgElement = event.currentTarget.querySelector('img')

if (!imgElement.classList.contains('hidden')) 
return 
imgElement.classList.remove('hidden')

if (!firstCard) {
  firstCard = imgElement
  imgElement.classList.add('picked')
return
 }


  if (imgElement.src === firstCard.src) {
    firstCard.classList.remove('picked')
    firstCard = null
    matches++

    if (matches === cards.length / 2) {
      wins++
      winCount.textContent = wins
      message.textContent = 'You won!'
    }
    return;
  }

  const previousCard = firstCard
  firstCard = null
  waiting = true


  setTimeout(() => {
    imgElement.classList.add('hidden')
    previousCard.classList.add('hidden')

    imgElement.alt = ''
    previousCard.alt = ''

    previousCard.classList.remove('picked')

    waiting = false
    losses++
    lostCount.textContent = losses

  }, 700);
}

dealCards();
