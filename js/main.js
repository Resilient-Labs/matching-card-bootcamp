//worked with house hayden 
//game is to draw 2 cards if those 2 cards matches, card flips downs if not go back to the deck (using if/else if statement to decide). 
//Since there are 2 matching cards of 5 total is 10 cards. 
//The matching cards has to be have its own id --> easier to select
//10 individual cards should have its own class
//what actually happens in game--> have eventlistener on click for the each list of content. when button is clicked it goes through a function 'getFlipped'. when get goes through 'getFlipped function it would have a if/else statement 


document.querySelector('#deckOfCard').addEventListener('click', matchCard)
document.querySelector('button').addEventListener('click', shuffleCards)

//create a global for match games(counter for current gaem), selected cards(is the array when items are selected -- most cards 2), cardOrder (new array from shuffling of the card, use math.random of current game)
let cardOrder = []
let selected = []
let matched = 0

//create function to let card be shuffled 
function shuffleCards() {
    cardOrder=[]
    //create a variable for each cards to show what those cards are
    //these variable doesn't have to be global scope -- avoid putting a lot of var globally to prevent it from be touched and keep track if something broken
    let card1 = 'img/allMight.png'
    let card2 = 'img/bakugo.png'
    let card3 = 'img/deku.png'
    let card4 = 'img/ochako.png'
    let card5 = 'img/todoroki.png'
    let cards = [card1, card1, card2, card2, card3, card3, card4, card4, card5, card5]
    //wholeDeck is const var that holds all li 
    const wholeDeck = document.querySelectorAll('.card')

    //in the whole deck for each card do the following 
    wholeDeck.forEach(card => {
        let random;
        //when doing do/while any variable within the {} it will live and die out and wont used elsewhere
        //difference between while loop and do while is that do loop(]run block of code at least one before checks the condition
        //random generate random number stored in that variable, when random gives value that
        do {
            random = Math.floor(Math.random() * 10)
        } while (cards[random] === undefined)
        //push -- adding stored card in an array by using push its prevent code to not thorw away random index and reuses it wof to use splice
        cardOrder.push(cards[random])
        //set back page of the each card
        //console.log(card)
        card.style.backgroundImage = 'url(\'img/back.png\')'
        //delete selected card in that array at index random making element li undefined. 
        delete cards[random]
    })
}

//calls function to shuffle cards at page load
shuffleCards()

//create a function matchingCards when event of click from top to occur the following 
function matchCard(e) {
    //if click's target's className is 'card' it would go store target's dataset value to cardNumber (line55)
    if (e.target.className === 'card') { 
        //console.log(e.target.dataset.value)
        //dataset=data attribute -- html. rep in array. 
        let cardNumber = e.target.dataset.value
        //selected items are stored in the array
        selected.push(e.target)
        //setting back of card with an image when a click happen 
        e.target.style.backgroundImage = `url(${cardOrder[cardNumber]})`
        //console.log(cardOrder)
    }
    //remove event listener if length of array (selected items) is 2 if its a match those 2 cards are unclickable 
    if (selected.length === 2) {
        document.querySelector('#deckOfCard').removeEventListener('click', matchCard)
        if (selected[0].style.backgroundImage === selected[1].style.backgroundImage) {
            matched++
        //if not the same, wait 1000milisecond(1sec -- code records in ms) before changing back to back image of card
        } else {
            setTimeout(() => {
                selected[0].style.backgroundImage = 'url(\'img/back.png\')'
                selected[1].style.backgroundImage = 'url(\'img/back.png\')'
            }, 1000)
        }
        //wait 1000ms before card flips back before clearing out the selected array
        setTimeout(() => {
            selected = []
            document.querySelector('#deckOfCard').addEventListener('click', matchCard)
        }, 1000)
        //console.log(selected)
    }
}

