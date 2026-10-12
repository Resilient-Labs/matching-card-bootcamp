//10 cards load
// on click container
//cardsflipped - to store how many cards flipped
// when flip() runs cardflipped +=1
//if card face = back, then flip
// if cardsFlippped = 2, then check for win? 
    // if card1.val == card2.val then win
    //else flip back cardFlipped reset to 0

let container = document.querySelector('.container')
const cardVals = ["💛", "🤎", "🧸","🍯", "✨"] 
const cardIndices = [0,1,2,3,4,5,6,7,8,9]
let cards = []
let results = document.querySelector('#results')
let matchEl = document.querySelector('#match')
let matches = 0
class Card{
    faceUp = false;
    display = true; 
    constructor (cardVal, element){
       this.value = cardVal;   
       this.element = element
    }

    flipCard(){
        this.faceUp = !this.faceUp
    }

    hide(){
        this.display = false
    }
}

class Board{
    //call new Card 10x
    //set cardVal - need function
    match = false
    cardsFlipped = []

    constructor(){
        for(let i = 0; i<cardVals.length; i++){
            for(let j = 0; j <2; j++){
                let newCard = document.createElement('div')
                let card = new Card(cardVals[i],newCard)
                let randomPosition = Math.floor(Math.random()*cards.length)
                cards.splice(randomPosition, 0,card)
                
                newCard.innerText = ''
                
                //card.value
                newCard.addEventListener('click', ()=>{
                    
                    if(this.cardsFlipped.length <2){
                        newCard.innerText = card.value
                        card.flipCard()
                        this.cardsFlipped.push(card)
                        console.log(this.cardsFlipped)
                    }

                    //check for match x
                    if(this.cardsFlipped[0]?.value==this.cardsFlipped[1]?.value){
                        this.match = true
                        results.innerText = "You got a match !"
                        matches +=1 
                        matchEl.innerText = matches
                        console.log("match")
                        this.cardsFlipped =[]
                        return
                        
                    }
                    if(this.cardsFlipped.length ==2){

                        //disable container
                        setTimeout(()=>{
                            for(card of this.cardsFlipped){
                            card.element.innerText = ''
                       }
                        this.cardsFlipped =[]
                        results.innerText = 'Not a match. Try again ! '
                        console.log('not match')
                        //re-enable container
                        }, 500)
                    }
                })

                if(container.children.length == 0){
                    container.appendChild(newCard)
                }
                else{
                    container.insertBefore(newCard, container.children[randomPosition])
                }
                
            }

        }

    }
}

function run(){
   let gameBoard = new Board()
}

run()










































//document.querySelector('div').addEventListener('click', )
// let container = document.querySelector('.container')
// let card1, card2
// let cardsFlipped = 0
// container.addEventListener('click', run)



// function setBoard(){
//     container.innerHTML = ""
//     //5cards - Math.random *5.floor()
//     // array of 5 different values bc u need 2 matches 
//     let cardsArr = ["💛", "🤎", "🧸","🍯", "✨", "💛", "🤎", "🧸","🍯", "✨"] 
    
//     while(cardsArr.length > 0){
//         //5cards - Math.random *5.floor()
//         const index = Math.floor((Math.random() * cardsArr.length))

//         let newDiv = document.createElement('div')
//         newDiv.textContent = "card"
//         container.appendChild(newDiv)

//         newDiv.classList.add(cardsArr[index])

//         cardsArr.splice(index,1)
//     }

//     card1 = undefined
//     card2 = undefined
// }
// setBoard()
// function run(event){
//     console.log(event)
//     event.target.textContent = event.target.className // don;t understand .className WHY
//     if (card1 != undefined){
//        card2 = event.target // SO CONFUSED
//     }else{
//         card1= event.target
//         return
//     }

//     if (card1.className === card2.className){
//         alert("Match!")
//     }else{
//         alert("try again")
//         card1.textContent = "card"
//         card2.textContent = "card"
//     }
// }

// function reset(){
    
// }


