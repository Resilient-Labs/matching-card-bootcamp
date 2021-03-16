// mark helped me with this

const cards = document.querySelectorAll('.card')
cards.forEach(card => card.addEventListener('click', color))
let pause = false

//null means nothing and is good for an object that doesn't exist
let firstClicked = null
let cardShow = ["front-pairOne","front-pairThree","front-pairTwo","front-pairFive","front-pairFour", "front-pairThree", "front-pairOne", "front-pairFive","front-pairTwo","front-pairFour"]
// got this from stack overflow
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
shuffle(cardShow)

function color(event){
  if(pause === true ||event.target.classList.contains("back") === false){
    return
  }
  console.log(event.target)
  event.target.classList.remove("back")
  const cardNumber = parseInt(event.target.id.substring(4))
  const classAdd = cardShow[cardNumber-1]
  event.target.classList.add(classAdd)
  if(firstClicked){
    if(firstClicked.classList.contains(classAdd) ===false){
      pause = true
      console.log("cards should flip back down", firstClicked, event.target)
      function flipBack(){
        event.target.classList.remove(classAdd)
        event.target.classList.add("back")
        firstClicked.className ="back card"
        firstClicked = null
        pause = false
      }
      setTimeout(flipBack,1000)
    }else{
      firstClicked = null
    }
  
  }else{
    firstClicked = event.target
  }
  
}

// need a new reset function, need a loop in there and firstClicked should be null, pause = false, card.className ="back card", shuffle function should run, cards.forEach(card => card.className ="back card"), +adding more pairs to the array +adding an audio tag