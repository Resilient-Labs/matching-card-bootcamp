const container = document.querySelector('.container')
const cards = document.querySelectorAll('.card')

let prevFlippedCard = null

function generateRandomColor() {
  let colors = ['red', 'purple', 'brown', 'blue', 'green']
  return colors[Math.floor(Math.random() * colors.length)]
}

function assignColors() {
  const assigned = {}
  for (let i = 0; i < cards.length; i++) {
    let color = generateRandomColor()
    while (assigned[color] >= 2) color = generateRandomColor()
    assigned[color] = assigned[color] ? assigned[color] + 1 : 1
    cards[i].classList.add(color)
  }
}


function flipCard(event) {
  if (event.target.classList.contains('hidden')) {
    event.target.classList.toggle('hidden')
    prevFlippedCard
      ? checkMatch(prevFlippedCard, event.target)
      : prevFlippedCard = event.target
  }
}

function checkMatch(firstCard, secondCard) {
    if (firstCard.className !== secondCard.className) {
    setTimeout(()=>{
       firstCard.classList.toggle('hidden')
      secondCard.classList.toggle('hidden') 
    },1000)  
              
  }

 

  
  prevFlippedCard = null
}

assignColors() 


container.addEventListener('click', flipCard)