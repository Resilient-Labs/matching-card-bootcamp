const moves = document.querySelector('#moves-count')
const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const gameContainer = document.querySelector('.game-container')
const result = document.querySelector('#result')
const controls = document.querySelector('.controls-container')
let cards
let firstCard = false
let secondCard = false

const items = [{name:'aang', image:'img/aang.png'}, {name:'alpha', image:'img/alpha.png'}, {name:'katara', image:'img/katara.png'}, {name: 
'sokka', image:'img/sokka.png'}]

const movesCounter = () => {
  movesCounter +=1
  moves.innerHTML = `<span>Moves:</span>${movesCounter}`
}

const generateRandom = (size = 4) => {
  let tempArray = [...items]
  let cardValues = []
  size = (size *3)/2

  for(let i = 0; i < size; i++){
    const randomIndex = Math.floor(Math.random() * tempArray.length)
    cardValues.push(tempArray[randomIndex])
    tempArray.splice(randomIndex,1)
  }
  return cardValues
}

const matrixGenerator = (cardValues, size = 4) => {
  gameContainer.innerHTML = ''
  cardValues = [...cardValues, ...cardValues]
  cardValues.sort( () => Math.random() - 0.5)

  for(let i = 0; i < size * 3; i++){

    gameContainer.innerHTML += `
    <div class="card-container" data-card-value="${cardValues[i].name}">
      <div class="card-before">?</div>
      <div class="card-after"><img src="${cardValues[i].image}" class="image"/></div>
    </div>`
  }


  gameContainer.style.gridTemplateColumns = `repeat(${size},auto)`

  cards = document.querySelectorAll('.card-container')
  cards.forEach((card)=>{
    card.addEventListener('click', () =>{
      if(!card.classList.contains('matched')){
      card.classList.add('flipped')
        if(!firstCard){
        firstCard = card
        firstCardValue = card.getAttribute("data-card-value")
        }else{
          movesCounter()
          secondCard = card
          let secondCardValue = card.getAttribute("data-card-value")
         if(firstCardValue == secondCardValue){
          firstCard.classList.add('matched')
          secondCard.classList.add('matched')
          firstCard = false
          winCount += 1
           if(winCount == Math.floor(cardValues.length/2)){
            result.innerHTML = `<h2>You Won</h2>
            <h4>Moves: ${movesCount}</h4>`
            stopGame()
            }
          }else {
            let [tempFirst, tempSecond] = [firstCard, secondCard]
            firstCard = false
            secondCard = false
            let delay = setTimeout(() => {
              tempFirst.classList.remove('flipped')
              temp/second.classList.remove('flipped')
            }, 1000)
          }
        }
      }
    })
  })
}

startBtn.addEventListener('click', () => {
  movesCount = 0
  controls.classList.add('hide')
  stopBtn.classList.remove('hide')
  startBtn.classList.add('hide')
  moves.innerHTML = `<span>Moves:${movesCount}</span>`
  initializer()
})

stopBtn.addEventListener('click', () => {
  controls.classList.remove('hide')
  stopBtn.classList.add('hide')
  startBtn.classList.remove('hide')
})

const initializer = () => {
  result.innerText = ''
  winCount = 0
  let cardValues = generateRandom()
  console.log(cardValues)
  matrixGenerator(cardValues)
}