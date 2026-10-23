/*Goal: Make a 10 card memory game - users must be able to select two cards and check if they are a match. If they are a match, they stay flipped. If not, they flip back over. Game is done when all cards are matched and flipped over.  
//Mix Logic from Tic Tac Toe and Slot Machine
//Randomize the values of each Card on load
//User Clicks alternate like tic tac (turn 1 and turn 2)
//Does turn 1 == Turn 2
//If yes stay flipped over
//If no flip back
//
-LESSONS: learning how to have truly random events and not hard coding everything.
-*/

let cards = ['img/2.png', 'img/3.png', 'img/4.png', 'img/5.png', 'img/6.png']
// let random = Math.floor(Math.random() * cards.length)
let container =  document.querySelector("#container")
let arr = []

class Cards{
//these values are something that the card has for its life
    flipped = false;
    display = true;
    constructor(cardVal, storage){
        this.value = cardVal;
        this.element = storage;

    }
//these functions are verbs because they effect the BEHAVIOR  of the cards
    flip(){
        this.flipped = !this.flipped
    }
    hide(){
        this.display = false
    }
}

class Board{
    match = false
    cardsFlipped = []
    constructor(){
        for(let i = 0; i<cards.length; i++){

            for(let b = 0; b <2; b++){
            let newCard = document.createElement('div')
                container.appendChild(newCard)
            let card = new Cards(cards[i],newCard)
            arr.push(card) //pushing the cards to the empty array "arr"
            
            newCard.innerHTML = `<img src='img/The-Spotlight.png' alt='card back'>`


            newCard.addEventListener('click', ()=>{

                if(card.flipped || this.cardsFlipped.length === 2) return //edit start

                card.flip()
                newCard.innerHTML = `<img src='${card.value}' alt='card face'>`
                this.cardsFlipped.push(card)

                if(this.cardsFlipped.length === 2){
                    const first = this.cardsFlipped[0]
                    const second = this.cardsFlipped[1]

                    if(first.value === second.value){
                        this.match = true
                        this.cardsFlipped = []//to me this line is saying when the card matches are true place them in the cardsFlipped array

                         if(arr.every(all => all.flipped)){
                            document.querySelector('#winner').innerText = 'YOU FOUND ALL THE MATCHES!!!'
                        }else{
                            console.log(arr)
                        }
                    }

                    else{

                    setTimeout(() =>{
                        for (const loopy of [first, second]){
                            loopy.flip()
                            loopy.element.innerHTML = `<img src='img/The-Spotlight.png' alt='card back'>`
                        }
                        this.cardsFlipped = []
                    }, 800)
                   
                    }
                }
            })

            }


            }
           
            for(let i = arr.length -1; i > 0; i--){
                const j = Math.floor(Math.random() * (i+1)); //was missing the semicolon. defensive semi colon forces the statement to end
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
            for (const shuffle of arr){
                container.appendChild(shuffle.element)
            }

        }
    }



function startGame(){
    document.querySelector('#winner').innerText = ''
    container.innerHTML = ''
    arr = []
    return new Board()    
    
}
let gameBoard = startGame() //happens on page load but all the other elements must exist first so it can't be on top

document.querySelector('button').addEventListener('click', () => {
        gameBoard = startGame()
})






































// let cards = ['A', 'B', 'C', 'D', 'E','A', 'B', 'C', 'D', 'E'];

// while( cards.length > 0){

// let random = Math.floor(Math.random() * cards.length);
// // let randomCard = cards[random]
// console.log(random)
// const div = document.createElement('div')
// document.querySelector("#container").appendChild(div)

// div.classList.add('row',cards[random])
// // document.querySelectorAll('.row:not([card])')[random].classList.add(cards[0])
// cards.splice(random,1)

// }

// document.querySelector("#container").addEventListener('click', pickCard)
// let cardOne = undefined

// function pickCard(event){
//     event.target.classList.add('flipped')
//     if(cardOne == undefined){
//         cardOne = event.target
//         return
//     }
//     if(cardOne.className == event.target.className){

//         console.log('They Match')
//     }else{
    
//         event.target.classList.remove('flipped')
//         cardOne.classList.remove('flipped')
//     }

// console.log(event.target)
// }

// need to get CSS to reveal
