//recieved help from GUS
  //check to see how many boxes have been click (counter++)
  //after two boxes are clicked check to see if they match
  //add a color box to the array to store (using push) when clicking on the box itll add to the array to check if they match
  //create new function with if statement to check if they matched (use class names)
  //if they dont match the cards should be resetted
  //the array should be resetted
  //counter will reset
 

let cards = document.querySelectorAll('div')
cards.forEach(card => card.addEventListener('click', flippedCard))

let reset = document.querySelector('.refresh').addEventListener('click', resetGame)
let counter = 0
let currentCards = []
let deck = ['img/kobedunk.jpeg', 'img/lebrondunk.jpeg', 'img/allendunk.jpeg','img/shaqdunk.jpeg', 'img/michaeldunk.jpeg']


//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

let decks = shuffle(deck)

function flippedCard () {
  const color = this.className
  console.log(this.className)
  if (color === "red" ) {
    this.style.backgroundImage = `url(${decks[0]})`
  } else if (color === 'blue') {
    this.style.backgroundImage = `url(${decks[1]})`
  } else if (color === 'green') {
    this.style.backgroundImage = `url(${decks[2]})`
  } else if (color === 'orange') {
    this.style.backgroundImage = `url(${decks[3]})`
  } else if (color === 'yellow') {
    this.style.backgroundImage = `url(${decks[4]})`
  }
  counter++
  currentCards.push(this)
  if (counter === 2) {
    colorMatch()
  } 
}

function colorMatch () {
  if (currentCards[0].className === currentCards[1].className) {
     
  } else {
    let firstClick = currentCards[0]
    let secondClick = currentCards[1]
    setTimeout(() => {
      firstClick.style.background = ""
      secondClick.style.background = ""
    }, 800)

  }
  counter = 0
  currentCards = []

  
}



  function resetGame () {
    window.location.reload()
}


  
  
  
  

  

  

  



