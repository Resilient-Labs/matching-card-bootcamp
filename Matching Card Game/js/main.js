//create a variable to store all the cards
const cards = document.querySelectorAll('.card')

// //creates variable if if the card if flipped
let cardWasFlipped = false;
let lockCards = false;
let firstCard, secCard

function flipCard(){
  if(lockCards) return
  if(this === firstCard) return;
  this.classList.add('flip')
  
  if(!cardWasFlipped){
    //first click
    cardWasFlipped = true;
    firstCard = this;
    
  }else{
    //second click
    cardWasFlipped = false;
    secCard = this;
    
    checkIfMatch()
  }
}
function checkIfMatch(){
  //check to see if cards match
  if(firstCard.dataset.image == secCard.dataset.image){
    if(lockCards)
    //store card from flipping if a match
    firstCard.removeEventListener('click', flipCard)
    secCard.removeEventListener('click', flipCard)
    console.log('Function was executed')
  }else{
    setTimeout(() =>{
      firstCard.classList.remove('flip')
      secCard.classList.remove('flip')
    }, 1500)
  }
}

//add smurf to all cards
cards.forEach(card => card.addEventListener('click', flipCard))

