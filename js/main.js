const cards = document.querySelector('#card');

//click logic
cards.addEventListener('click', cardMatch);
document.querySelector('#reset').addEventListener('click', randomize)
let clickedOn = undefined;
let clickedOnTwo = undefined;

function randomize(){

cards.innerHTML = '' //clears the cards div so that when you click the button it will clear the div and create new cards with new classnames

    let cardArray = ['fish', 'bird', 'dino', 'watch', 'cat','fish', 'bird', 'dino', 'watch', 'cat']

    while(cardArray.length > 0) {

        const randomIndex = Math.floor(Math.random() * cardArray.length) 
        const createCard = document.createElement('div')

        cards.appendChild(createCard)
        createCard.innerText = '?' //gives the div a question mark so that the user doesn't see the classname of the div

        createCard.classList.add(cardArray[randomIndex]) //gives a div a random classname every time you begin the game, each new game will assign new classnames to the divs
        cardArray.splice(randomIndex, 1) //removes the classname from the array so that it doesn't get assigned to another div
    }

    clickedOn = undefined
    clickedOnTwo = undefined
}


randomize()


//logic of card flip game
function cardMatch(event) {
    //pick one card
    console.log(event)

    event.target.innerText = event.target.className
    //if this card is not undefined anymore it means its been cliked and its not undefined anymore
    if(clickedOn != undefined) {
        clickedOnTwo = event.target
    }else{
        clickedOn = event.target
        return 
    }


    if(clickedOnTwo.className === clickedOn.className) {
        console.log('match')
    }else{
        console.log('no match')
        clickedOn.innerText = '?'
        clickedOnTwo.innerText = '?'
    }

    clickedOn = undefined
    clickedOnTwo = undefined

}