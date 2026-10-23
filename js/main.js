
const cards = document.querySelector("#cards")

// click on the cards 
cards.addEventListener("click", gameLogic)
document.querySelector('button').addEventListener('click', random)

let clickedOn = undefined
let clickedOnTwo = undefined


function random() {

    cards.innerHTML = ''

    let cardNames = ['dogs', 'dogs', 'cats', 'cats', 'bears', 'bears', 'lions', 'lions',
        'tigers', 'tigers'
    ]

    while (cardNames.length > 0) {
        const order = Math.floor(Math.random() * cardNames.length)

        const createCard = document.createElement('div')
        cards.appendChild(createCard)
        
        // card gets random classname 
        createCard.classList.add(cardNames[order])
        createCard.innerText = 'Lucious'
        //removes classname from array  
        cardNames.splice(order, 1)
    }
    clickedOn = undefined
    clickedOnTwo = undefined

}

random()


// logic of game
function gameLogic(event) {
    // pick one card 
    console.log(event)

    if (event.target === cards)
        return

     if (event.target === clickedOn)
        return

    event.target.innerText = event.target.className

    // if card is not undefined card been flipped, then click on card two
    if (clickedOn === undefined) {
        clickedOn = event.target
        return
    }

    clickedOnTwo = event.target

    if (clickedOn.className === clickedOnTwo.className) {
        console.log('match')
        clickedOn = undefined
        clickedOnTwo = undefined
    } else {
        console.log("not a match")
    setTimeout(() =>{ 
        clickedOn.innerText = 'Lucious'
        clickedOnTwo.innerText = 'Lucious'
        clickedOn = undefined
        clickedOnTwo = undefined
     }, 800)
    }

}

