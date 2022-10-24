//Goal: Make a 10 card memory game - 
//users must be able to select two cards and check if they are a match. 
//If they are a match, they stay flipped. 
//If not, they flip back over. 
//Game is done when all cards are matched and flipped over. 
//Example: http://www.fruit-burst.co.uk/fun-and-games/pairs-game





//function flip the cards 
// object or array for cards

class Card {
    constructor(value, flipped, image) {
        this.value = value
        this.flipped = flipped
        this.image = image
    }
   describe() {
    return `${this.value}, ${this.flipped}, ${this.image}`
   }

}

//for loop 
// for(i=0;i<25;i++) {
//     i = new Card(1, false, "one.jpg")
// }

                                    
const cardOne = new Card(1, false, "one.jpg")
const cardTwo = new Card(2, false, "two.jpg")
const cardThree = new Card(3, false, "one.jpg")
const cardFour = new Card(4, false, "two.jpg")

//Got idea from Carter and Sam
let deck = []
deck.unshift(cardOne.value)
deck.unshift(cardTwo.value)
deck.unshift(cardThree.value)
deck.unshift(cardFour.value)
console.log(deck)
//let arr {
    //cardOne,

//}


let cards = document.querySelectorAll("div")
cards.forEach(card => card.addEventListener('click', selectCard))
box = document.querySelectorAll('.card')
boxOne = document.querySelector('.box-three')
boxOne = document.querySelector('.box-four')

//function to see if they are matched 
function selectCard(event) {
    console.log(event.target)
    cards.classList.toggle("flip")
//    if (box.classList.contains(flip)) {
//         console.log("flip")
//     }

    
}
//legal: languages allowed in sytnax 
//correct instead



//if(this.value === this.value) {
    //this.flipped = 
//}
//stay flipped
//else if 
//flip back



//function to see all cards are flipped 

//window.location.reload();