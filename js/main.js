// Make a 10 card memory game -
// users must be able to select two cards
// and check if they are a match.
// If they are a match, they stay flipped.
// If not, they flip back over.
// Game is done when all cards are matched and flipped over.

// reset: no cards selected, matched count = 0

// PLAYING (when a card is clicked)
// if the card is already flipped or already matched, ignore the click
// if two cards are already waiting to be checked, ignore the click
// flip the card to show its emoji
// remember it as first card or second card

// CHECKING (once two cards are selected)
// if both cards have the same emoji
//     mark both as matched so they stay flipped
//     add 1 to matched count
// else
//     wait a short moment so the player can see them
//     flip both back to face down
// clear the selected cards so the player can pick again

// GAME OVER
// if matched count equals 5 (all pairs found)
//     show a "alert" message

const container = document.querySelector(".container")

const cardss = document.querySelectorAll(".card")

// holds counter for msnsging the winning 
let matchCount = 0 ;

let firstCard = null 

let secondCardPicked = null 

// checks if the two cards watiting to be checked
let isLocked = false 

getMatch()

// add event lsitenr for each card for flipping 
cardss.forEach((card)=>{
    card.addEventListener("click",flipCard)
})

// function to get the match whenver we click the button
function getMatch(){

    let cards = ["🍏" , "🍎"  , "🍇" ,  "🍐"  , "🥥" ] 

         // double them so that we have 10emojis total 
         let totalemojis = [...cards , ...cards]

         // reset for new game 
             firstCard = null 
            secondCardPicked = null 
            isLocked = false 

         // shuffle them using sort for shuffling the arrays
         totalemojis.sort(()=> 0.5 - Math.random())

    // iterate through each cards and apply emoji for each card hidden 
    cardss.forEach((card,index)=>{

        console.log(card)   
        console.log(index)
        // setup each card 
        card.textContent = totalemojis[index]
        // added card back backvisibility to hidden 

        card.classList.remove("flipped","matched")
        
        //add the facedown 
        card.classList.add("card-back")
    })

    //reset the score
    matchCount = 0
} 

// function to flip the cards
function flipCard(){

    if(isLocked) return 

    // // checks if the card already contains the flipped class to i
    if(this.classList.contains("flipped")) return 

    if(!firstCard){
        firstCard = this
    }
    else{
        secondCardPicked = this
        isLocked = true /* now we have two cards we can lock it to prevent third card being clicked*/ 
        checkMatch(firstCard,secondCardPicked)
    }
    
  // adds tthe flipped class on the card   
     this.classList.add("flipped")
    
}

function checkMatch(card1,card2){
   if(card1.textContent === card2.textContent){

    setTimeout(()=>{
     //adding the style on the matched cards
    card1.classList.add("matched")
    card2.classList.add("matched")
    
    },0)
   
    // first match is here
    matchCount+=1
    reset()
    

    // check the matchCount counter to see alert message
    if(matchCount===5){
        //lets the current stage finish bc alert blocks as it is synchornous
        setTimeout(()=>{
        alert("All cards are used and you have finsihed it")
           // reset the game
        getMatch()

        },500)
   }
   } 

   // no match is found
   else{
    setTimeout(()=>{
    card1.classList.remove("flipped")
    card2.classList.remove("flipped")
      //reset the turn
    reset()
    },2000)
  
   }

 
}

// reset the baord
function reset(){
   firstCard = null 
   secondCardPicked = null 
   isLocked = false
}