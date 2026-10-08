//make card
const cards = document.querySelector("#cards")


//make reaction 
cards.addEventListener('click', matchingCard)
const message = document.querySelector('#message')

let clickedOne = undefined
let clickedTwo = undefined

//function for creating the elements
function random (){
    //reset cards default value to empty value
    cards.innerHTML = ''

    let cardItems = ['😃','🤡', '👻','🤑','👽', '😃','🤡', '👻','🤑','👽']
    
    //while loop
    //if array > 0, keep running this loop
    while( cardItems.length > 0 ){
        const order = Math.floor( Math.random() * cardItems.length )
        const createCard = document.createElement('div')  
        cards.appendChild(createCard) 
        //text content 
        createCard.textContent = '🀧' 
        createCard.classList.add(cardItems[order])      //createCard -> is the card div container 
        //call the randomize 
        cardItems.splice(order, 1)            //delete one at a time 
    }
    clickedOne = undefined
    clickedTwo = undefined
}

random()
//function that decide how the game work
//once there are 2 cards 
// if they matched, they display and then disappeared 
//if they are not matched, the first two will be filped once user clicked on the third one.
function matchingCard(event){
    //pick a card
    console.log(event)
    //
    event.target.textContent = event.target.className 
    //conditional
    if ( clickedOne != undefined ){
        //if the card has been clicked that means it has been fliped over
        //call the second card 
        clickedTwo = event.target 
    }else {
        clickedOne = event.target
        return 
    }
    //another conditional
    if ( clickedOne.className === clickedTwo.className){
        console.log('Match!')
        message.innerText = 'Match!'
    }else{
        //resetting card 
        clickedOne.innerText = '🀧'
        clickedTwo.innerText = '🀧'
        console.log('Try again!')
       message.innerText='Try again!'
        
    }
    clickedOne = undefined
    clickedTwo = undefined

}

//querySelector('#reset').addEventListener('click',reset)
//const reset = document.querySelector('#reset').addEventListener('click',reset)
//    function reload(){
//     cards.reset();
//  }
//  reset.addEventListener('click',reload)

document.querySelector('#reset').addEventListener('click',reset)
function reset () {
    random()
}

