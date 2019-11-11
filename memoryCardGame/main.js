let cards = document.querySelectorAll('.card')
let front = document.querySelectorAll('.front')
let cardColors = {

  salmon: 0,
  deeppink: 0,
  midnightblue: 0,
  orange: 0,
  darkslategray: 0
}
let clicks = 0;
let firstClick;
let secondClick;
let reset = document.querySelector('button')
let match = []

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', () => {
    if ( !(match.includes(front[i].style.background)) && front[i] !== firstClick) {
      clicks++
      if (clicks === 1) {
        firstClick = front[i]
        cards[i].classList.add('flip')
        front[i].style.zIndex = 1
        clicks++
        setTimeout(function() {
          cards[i].classList.remove('flip')
        }, 500)
      } else if (clicks === 3) {
        secondClick = front[i]
        cards[i].classList.add('flip')
        front[i].style.zIndex = 1
        if (firstClick.style.background != secondClick.style.background) {
          setTimeout(function() {
            firstClick.style.zIndex = -1
            cards[i].classList.remove('flip')
            secondClick.style.zIndex = -2
            firstClick = ''
          }, 500);
        } else {
          match.push(firstClick.style.background)
        }
        clicks = 0;
      }
    }
  })
}

function randomizeCards() {
  for (let i = 0; i < cards.length; i++) {
    let randomColor = Object.keys(cardColors)[Math.floor(Math.random() * Object.keys(cardColors).length)]
    front[i].style.background = randomColor
    cardColors[randomColor]++
    if (cardColors[randomColor] == 2) {
      delete cardColors[randomColor]
    }
  }
}
randomizeCards()

reset.addEventListener('click', () => {
  cardColors = {
    salmon: 0,
    deeppink: 0,
    midnightblue: 0,
    orange: 0,
    darkslategray: 0
  }
  match = [];
  clicks = 0;
  firstClick;
  secondClick;
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove('flip')
    front[i].style.zIndex = -2
  }
  randomizeCards()
})
