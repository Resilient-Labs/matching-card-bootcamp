// document.querySelector('.reset').addEventListener('click', restart)
// document.querySelectorAll('grid-item').addEventListener('click', selectBox)

//Pseudo-woodo
//create start button
//create function to shuffle where each img lies before the user starts playing
// allow user to select only 2 cards at a time 
//once cards are fliped they will be compared
//if the two cards match then they need to stay upwards
//if not to turn back around
//check for if all cards are turned upwards and matched
//signify that the user wins 
//add reset button to restart the game


// function restart() { }
// function SelectBox() { }


let selection = document.querySelectorAll('.grid-item')
let arr = {
    card1: 0,
    card2: 0,
    card3: 0,
    card4: 0,
    card5: 0,
    card6: 0
}
selection.forEach(element => {
    let keys = Object.keys(arr)
    let searching = true
    while (searching) {
        //change colors and adds card# to class list
        let shuffle = Math.floor(Math.random() * 6)
        let cardClass = keys[shuffle]
        if (arr[cardClass] !== 2) {
            arr[cardClass] += 1
            element.classList.add(cardClass)
            element.name = cardClass
            searching = false
            console.log()
        }
    }
    element.addEventListener('click', flip)
})
console.log(arr)

let counter = 0
let matchCounter = 0

function flip(event) {
    // flip instructions

    event.target.classList.toggle('flippeddown')
    event.target.classList.add('selected')
    counter += 1
    if (counter === 2) {
        checkForMatch()
    }
}

function checkForMatch() {
    console.log('game')
    let cardSelection = []
    let cardResults = document.querySelectorAll('.grid-item')
    cardResults.forEach(currentCard => {
        if (currentCard.classList.contains('selected')) {
            cardSelection.push(currentCard)
            currentCard.classList.remove('selected')
        }
    })
    counter = 0
    console.log(cardSelection)
    if (cardSelection[0].name === cardSelection[1].name) {
        matchCounter += 1
        console.log('MATCH!')
        if (matchCounter === 6) {
            console.log('YOU WIN cool')
        }
    } else {
        console.log('NOT A MATCH!')
        setTimeout(() => {
            cardSelection[0].classList.toggle('flippeddown')
            cardSelection[1].classList.toggle('flippeddown')
        }, 800)
    }


} 
