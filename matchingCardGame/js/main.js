//Goal: Make a 10 card memory game - 
//users must be able to select two cards and check if they are a match. 
//If they are a match, they stay flipped. 
//If not, they flip back over. 
//Game is done when all cards are matched and flipped over. 
//Example: http://www.fruit-burst.co.uk/fun-and-games/pairs-game







//listeners 



//select two cards and check if they match
// function twoCardsSelected(){
    //if two cards are selected/flipped 
        //do compare them 
        //if they matched 
            //do keep card flipped 
            //do shuffle function
        //if dont matched
            //do card unflipped
            //do shuffle function 
        
        
// }


//empty array 
let deck = []

//listen
//Hassan's Help to understand how to select all boxes 
let cards = document.querySelectorAll("div")
cards.forEach(card => card.addEventListener('click', selectCard))
let counter = 0
let matched = 0
let currentCards = []

//function: #1 Goal: random cards values 

//function: #2 Goal: select cards 
//stackOverFlow's help here
//https://stackoverflow.com/questions/5898656/check-if-an-element-contains-a-class-in-javascript
function selectCard() {
    let color = this.className
    // switch (color) {
    //     case "red": 
    //         this.style.background = "red"
    //     case "blue": 
    //         this.style.background = "blue"
    // }
    if(color === "red") {
        this.style.background = "red"
    }
    else if(color === "blue") {
        this.style.background = "blue"
    }
    counter++
    console.log(counter)
    currentCards.push(this)
    console.log(currentCards)
    if(counter === 2) {
        
        matchCard()
        
    }
}

//function: #3 Goal: match cards or set them back
function matchCard() {
    if(currentCards[0].className === currentCards[1].className) {
         counter = 0
         console.log(counter)
         console.log(matched)
         matched++

    }
    else if (currentCards[0].className !== currentCards[1].className) {
        let firstClick = currentCards[0]
        let secondBox = currentCards[1]
  
            firstClick.style.background = ""
            secondBox.style.background = ""

    }
}



//function: #4 know when all cards are match and end game
function endGame() {
    if (matched === 5){
        alert("DONE")
    }
}