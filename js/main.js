// Collaborated with Anvy, Zrybea & Hillary
let gameboard = document.querySelectorAll('.hide').forEach(item => {
  item.addEventListener('click',gridClick)
});
// Array storing the initial sequence
let sequenceArray = [0,0,1,1,2,2,3,3,4,4]

let imageArray = [
  './apple.jpg',
  './cherry.jpg',
  './grapes.jpg',
  './orange.jpg',
  './strawberry.jpg'
]

let counter = 0
let matchValue = []
let matchID = []
let allowClicks = true
let score = 0
let gameDeterminat = 0   // This determines when to end the game
let level = 1  // determines the current level

function insertHtml(){
  mixer(sequenceArray)

  for(let i = 0; i < sequenceArray.length; i++){
    const img = document.querySelectorAll('img')
    img[i].setAttribute('value', sequenceArray[i])
    img[i].setAttribute('src', imageArray[sequenceArray[i]])
  }
}

insertHtml()

function mixer(arr){
  let currentIndex = arr.length,
  temporaryValue,
  randomIndex
// While there remain elements to shuffle...
  while(0 !== currentIndex){
    randomIndex = Math.floor(Math.random() * currentIndex) // picks a random index in the Array
    currentIndex -=1  // deals on the decrement

    temporaryValue = arr[currentIndex]
    arr[currentIndex] = arr[randomIndex]
    arr[randomIndex] = temporaryValue
  }
  return arr
}

function gridClick(e){
  if(allowClicks){
  let span = e.target
  // let spanValue = e.target.attributes[0].nodeValue
  let spanValue = e.target.getAttribute('value')
  let spanId = e.target.getAttribute('id')
span.classList.remove('hide');
matchValue.push(spanValue)
matchID.push(spanId)
    // document.querySelector('#'+spanId).style.transform = 'rotateY(360deg)';
if(counter <= 1){
  counter++
} else {
  counter = 1
}
removeGridClick(span)
counting()

// console.log(counter);
// console.log(matchValue);
// console.log(matchID);
}
}

function counting(){
  if(counter % 2 === 0){
    checkWinner()
    console.log("activated");
  }
}
// e.target.attributes[1].data-index.nodeValue
function checkWinner(){
  allowClicks = false;
  if(matchValue[0] === matchValue[1]){
    let firstCard = document.getElementById(`${matchID[0]}`)
    let secondCard = document.getElementById(`${matchID[1]}`)
    setTimeout( () => {
                        firstCard.classList.add('clear')
                       secondCard.classList.add('clear')
                       allowClicks = true
                    }, 1000)
    increaseScoreBoard()

    matchValue = []
    matchID = []
youWin()

  } else {
    let firstCard = document.getElementById(`${matchID[0]}`)
    let secondCard = document.getElementById(`${matchID[1]}`)
    setTimeout( () => { firstCard.classList.add('hide')
                        secondCard.classList.add('hide')
                        allowClicks = true
                      }, 1000)
    decreaseScoreBoard()
    addClick(firstCard)
    addClick(secondCard) // not functioning
    matchValue = []
    matchID = []
  }
}

function increaseScoreBoard(){
  score += 20
  document.querySelector('h5').innerText = score
}

function decreaseScoreBoard(){
  score -= 5
    document.querySelector('h5').innerText = score
}
function youWin(){
gameDeterminat++
console.log(gameDeterminat);
if(gameDeterminat == 5){
    // document.querySelector('h5').innerText = 'Level Completed')
    document.querySelector('.CongratsMessage').style.display = 'block'
}
}
//Remove event addEventListener
function removeGridClick(item){
  item.removeEventListener('click', gridClick)
}

function addClick(item){
  item.addEventListener('click', gridClick)
}

//Play Again / Go to the next day
    document.querySelector('.playAgain').addEventListener('click', playANewGame)
    function playANewGame(){
      counter = 0
      matchValue = []
      matchID = []
      gameDeterminat = 0
      insertHtml()
      document.querySelectorAll('img').forEach(item => {
        item.classList.add('hide')
        item.addEventListener('click', gridClick)
      });
      level++
      // renders the current Level
        document.querySelector('.Level').innerText = `Level ${level}`
      document.querySelector('.CongratsMessage').style.display = 'none'
    }
