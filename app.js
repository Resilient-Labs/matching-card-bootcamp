const cards = document.querySelectorAll('.card')
const reset = document.querySelector('button')
let counter = 0;
let firstClick;
let secondClick;
let matched = []


for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', function() {
    if (!(matched.includes(i))) {
      counter++
      if (counter === 1) {
        firstClick = i
        cards[firstClick].style.background = 'silver'
        cards[firstClick].classList.add('flip')
      } else if (counter === 2) {
        secondClick = i
        if (firstClick === secondClick + 5 || firstClick === secondClick - 5) {
          cards[secondClick].classList.add('flip')
          cards[firstClick].style.background = 'gold'
          cards[secondClick].style.background = 'gold'
          matched.push(firstClick, secondClick)
        } else {
          cards[firstClick].classList.remove('flip')
          cards[i].classList.remove('flip')
          cards[firstClick].style.background = 'black'
        }
        counter = 0;
      }
    }
  })
}

reset.addEventListener('click', function(){
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.background = 'black'
    matched = [];
    let firstClick;
    let secondClick
    counter = 0;
    cards[i].classList.remove('flip')
    cards[i].classList.remove('flip')
  }
})



// 10 cards, 2x5
// click: flip (2 clicks)
// match: stay flipped
// not match: flip back
// game ends when all match
