let cards = document.querySelectorAll('.card')
let front = document.querySelectorAll('.front')
let colors = {
  darkred: 0,
  darkblue: 0,
  lightgreen: 0,
  purple: 0,
  orange: 0
}
let clicks = 0;
let firstClick;
let secondClick;
let reset = document.querySelector('button')
let match = []


function randomize() {
  const colorsCopy = Object.assign({}, colors)
  for (let i = 0; i < cards.length; i++) {
    let randomColor = Object.keys(colorsCopy)[Math.floor(Math.random() * Object.keys(colorsCopy).length)]
    front[i].style.background = randomColor
    colorsCopy[randomColor]++
    if (colorsCopy[randomColor] == 2) {
      delete colorsCopy[randomColor]
    }
  }
}
randomize()


for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', () => {
    if (!(match.includes(front[i].style.background)) && front[i] !== firstClick) {
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
            secondClick.style.zIndex = -1
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

reset.addEventListener('click', () => {
  match = [];
  clicks = 0;
  firstClick;
  secondClick;
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove('flip')
    front[i].style.zIndex = -1
  }
  randomize()
})
