let cards = document.querySelectorAll('.card')
let front = document.querySelectorAll('.front')
let colors = {
  lightblue: 0,
  lightgreen: 0,
  lightgrey: 0,
  pink: 0,
  teal: 0
}
let clicks = 0;
let firstClick;
let secondClick;
let reset = document.querySelector('button')
let match = []

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', () => {
    if (!(match.includes(front[i].style.background))) {
      clicks++
      if (clicks === 1) {
        firstClick = front[i]
        cards[i].classList.add('flip')
        front[i].style.zIndex = 1
        clicks++
        setTimeout(function() {
          cards[i].classList.remove('flip')
        }, 700)
      } else if (clicks === 3) {
        secondClick = front[i]
        cards[i].classList.add('flip')
        front[i].style.zIndex = 1
        if (firstClick.style.background != secondClick.style.background) {
          setTimeout(function() {
            firstClick.style.zIndex = -1
            cards[i].classList.remove('flip')
            secondClick.style.zIndex = -1
          }, 700);
        } else {
          match.push(firstClick.style.background)
        }
        clicks = 0;
      }
    }
  })
}

function randomize() {
  for (let i = 0; i < cards.length; i++) {
    let randomColor = Object.keys(colors)[Math.floor(Math.random() * Object.keys(colors).length)]
    front[i].style.background = randomColor
    colors[randomColor]++
    if (colors[randomColor] == 2) {
      delete colors[randomColor]
    }
  }
}
randomize()

reset.addEventListener('click', () => {
  colors = {
    lightblue: 0,
    lightgreen: 0,
    lightgrey: 0,
    pink: 0,
    teal: 0
  }
  match = [];
  let clicks = 0;
  let firstClick;
  let secondClick;
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove('flip')
    front[i].style.zIndex = -1
  }
})
