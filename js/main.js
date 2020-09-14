// Created by House Gardner
// after second click, use setTimeout, and flip the cards back if it isnt correct.
const images = [
"images/green.png",
"images/red.png",
"images/orange.jpg",
"images/blue.svg",
"images/pink.jpg",
"images/green.png",
"images/red.png",
"images/orange.jpg",
"images/blue.svg",
"images/pink.jpg"
] //this is an array for all the possible matches
const button = document.querySelector('button')
let usersTurns = []
// let userMatches = []
let count = 0;
let hasEvent = false;
let score = 0;

function checkWin(){

  let userMatchList = document.querySelectorAll('.stayFlipped')
  if(userMatchList.length===10){
    console.log('you win');
    document.querySelector('.winner').textContent ='You Win'
  }
}

function checkMatch(e){
  const currentSelections = document.querySelectorAll('.reveal')

    if (currentSelections.length===2) {
      console.log('end of round');
      // console.log(currentSelections[0].children[1].childNodes[1].src);
      // console.log(currentSelections[1].children[1].childNodes[1].src );
      // console.log(currentSelections[0].children[1].childNodes[1].src === currentSelections[1].children[1].childNodes[1].src);
      if (currentSelections[0].children[1].childNodes[1].src === currentSelections[1].children[1].childNodes[1].src) {
        currentSelections.forEach((selection)=>{
          selection.classList.add('stayFlipped')
          selection.classList.remove('reveal')

          checkWin();

        })
      }
      else {
        console.log('not a match');
        let cards = document.querySelectorAll('.flipCard') // array of all cards
        setTimeout(function(){
          console.log('finally');
          cards.forEach(card=>{
            card.classList.remove('reveal')
          })
        }, 750);
      }

    }

}


function shuffle(array){ //fisher yates shuffle
  let cards = document.querySelectorAll('.flipCard') // array of all cards
  const imgElements = document.querySelectorAll('img') // array of all img elements

  for(let i = array.length-1; i>=0; i--){ //starting from the last index
    const randomIndex = Math.floor(Math.random() * (i + 1)) // chooses a random number between 0-(i)
    const temp = array[i] // temporarily holds an index
    array[i] = array[randomIndex]
    array[randomIndex] = temp
    imgElements[i].src=array[i]
  }
  if( hasEvent === false ){
    for(let i = cards.length-1; i>=0; i--){
      cards[i].addEventListener('click', (e)=>{  // each time at click it is evalutating
        let twoReveals = document.querySelectorAll('.reveal') // how many have been selected
        if (twoReveals.length<2) { // once two have been revealed then ......
          cards[i].classList.add('reveal')
              checkMatch(e)
        }
      })
    }
  }
}
shuffle([...images]);

button.addEventListener('click', function(){
  let flipped = document.querySelectorAll('.flipCard')
  flipped.forEach(item => {
    item.classList.remove('reveal')
    item.classList.remove('stayFlipped')
    if (document.querySelectorAll('.reveal').length ==0){
      shuffle([...images])
    }
  })

})
