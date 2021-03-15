// 10 Card Memory Matching Game
//Created by Anvy, Danstan, Hillary, Zrybea
//Help from Mentor John Hess


/*Basic PseudoCode:
  Player clicks on  card 1 ---- Put cards in an array / adding eventListener
  card1 flips reveals image, which stays
  Player clicks on card 2
  card 2 flips to reveal image,
  If cards match = Stays open
  IF cards dont= flip back to cover/Original side
*/

//This is a one-player matching game. The player tries to match the pair of cards with the same image.
///Use data-- attributes to track the matching pair. Ex. There will be 5 matching pairs.
//Put cards into an array; let arrGameBoard = ["1","2","3","4","5","1","2","3","4","5"]
//Add event listeners to each square through event delegation (e.target) - when you click on square, it will target it & adds events (add image)
//when image is clicked it will toggle
//Create click- counter, Player clicks on 2 squares
//Use a function to compare the images, if they mathch, keep in toggle,
//if not, Flip back to orginal cover side
//Create scoreboard, if 5 matches, game is cover
//Create Shuffle Button to shuffle cards
//Create Restart button

// https://www.w3schools.com/jsref/met_win_settimeout.asp

let arrayValues = ["css/img/ryan.PNG",
  "css/img/david.PNG",
  "css/img/jun.PNG",
  "css/img/justin.PNG",
  "css/img/phil.PNG",
  "css/img/ryan.PNG",
  "css/img/david.PNG",
  "css/img/jun.PNG",
  "css/img/justin.PNG",
  "css/img/phil.PNG"
]

let scoreboard = document.querySelector(".scoreboard")
let clickboard = document.querySelector(".clickboard")
let replay = document.querySelector(".replay")

let cardArray = document.querySelectorAll(".grid-item")

let matchImages = []
let counter = 0
let matchValue = []

let score = 0

//Define functions//
document.querySelector(".reset").addEventListener("click",reset)
document.querySelector('.shuffle').addEventListener("click",shuffle)
cardArray.forEach(card => card.addEventListener("click", gridClick)) //for each card, have the card  add, addEventlistener//

//shows image on click//
function gridClick(event) {
  let card = event.target //the card is a ref to the html element
  let cardIndexNumber = event.target.dataset.value
  //clicked card //the target comes with the event, asks what the mouse is clicking on///// and what comes out of here is a value////
  console.log({cardIndexNumber,card})

  //if card already has class name match, don't do anything
  let words = card.classList['value'].split(' ')
  if (checkMatch(words)){
    return
  }

  let cardImageName = arrayValues[cardIndexNumber]
  console.log(cardImageName)
  document.querySelector(`[data-value="${cardIndexNumber}"]`).classList.remove('hide')
  //grab card value clicked // compare the values
  matchImages.push(cardImageName)
  matchValue.push(cardIndexNumber)//pushing selected card values to the matchValue array//
  //if dont match, flip them back down
  //creating a counter to make sure you do not exceed 2 cards
  console.log(matchValue)
  if (counter <= 1){
    counter ++
    }else {
    counter = 1
  }
  handleCounter()
}

function handleCounter(){
  if (counter % 2 === 0){
    console.log("working")
    match()
    gameFinish()
  }
}

function delayHide(){
  console.log("hiding")
  let firstIndex = matchValue[0]
  let secondIndex = matchValue[1]
  document.querySelector(`[data-value="${firstIndex}"]`).classList.add('hide')
  document.querySelector(`[data-value="${secondIndex}"]`).classList.add('hide')
  matchImages = []
  matchValue = []
}

function match(){
  if (matchImages[0] === matchImages[1]){
    let firstIndex = matchValue[0]
    let secondIndex = matchValue[1]
    document.querySelector(`[data-value="${firstIndex}"]`).classList.add('match')
    document.querySelector(`[data-value="${secondIndex}"]`).classList.add('match')
    matchImages = [] //empties the values in the match array, since our function handleCounter is just comparing the first two cards//
    matchValue = []
    score += 1
    document.querySelector(".score").innerHTML = score

  } else{
    console.log("fail")
    setTimeout(delayHide,500)
  }
}

function gameFinish(){
  if (score === 5){
    document.querySelector('.message').innerText= "YOU WIN! "

  }
}


//takes string to see if it has the word match, if true, it returns true. If false, it returns false//
function checkMatch(words){
  console.log("checking match")
  for (let i=0; i < words.length ; i++){
    // return checkMatch === true    return checkMatch === true
    if (words[i] === 'match'){
      return true
    }

  console.log(words)
  }
  return false
}

//set images to their own source using loop//
//use loop to sort the strings to place them in the img element(bucket)//
for (let i = 0; i < arrayValues.length; i++) {
  let imageInfo = document.querySelectorAll("div > img:first-child")
  imageInfo[i].setAttribute("src", arrayValues[i])
}

//shuffle order cards function//
function shuffle(){
  if (score === 5){
    return
  }
  let cards = document.querySelector('.grid-container').children
  for (let i=0; i < cards.length; i++){
    let randomPicNum = Math.floor(Math.random() * Math.floor(cards.length-1))
    cards[i].style.order = randomPicNum //one of the cards (arr[i]), and place it in a random order based on = randomPicNum// https://www.w3schools.com/cssref/css3_pr_order.asp//
  }
}

function reset(){
  score = 0
  document.querySelectorAll('.front').forEach(card=>{
    card.classList.remove('match')
    card.classList.add('hide')
  })
  shuffle()
}
