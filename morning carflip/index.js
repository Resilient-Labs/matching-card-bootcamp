const cards = document.querySelectorAll('.card')
//"cards" is assigned to all cards 
cards.forEach(card => card.addEventListener('click', flipCard))
document.querySelector('#reset').addEventListener('click', resetGame)
//document.querySelector('#model').addEventListener('click', runModel)

let firstCard = null
//null reps the intentioanl absence of any object value 
//firstCard is the first card that was flipped over in any given round, it starts off as nothing, then gets reassinged to value of clickedCard only if its the first card of round 
function flipCard(event) {
    let clickedCard = event.target.closest(".card")
    // .closest.card is going to mkae sure the card is targeted and not the img accidentally
    //clickedCard is within fn so it will be reassinged as whatever card is clicked 
    //this targets the card itself instead of the images within them. variable is created to avoid having to repeat expression above and for clarity  
    if (clickedCard.classList.contains('matched') || clickedCard.classList.contains('flipped')) {
        //if you click on card thats already been matched or flipped
        return //don't do anything -- it also means exit the function
    }
    clickedCard.classList.add('flipped')
    //this line was the first line of the else branch of the conditional, and "firstCard.classList.add('flipped')" was also in the conditoinal but in the if branch, so thats why this line was moved above the conditional -- to avoid repitition (see line 21)
    if (firstCard == null) {
        //firstCard will be equal to null b/c that's its original value so this boolean expression will always return true for first card of round 
        firstCard = clickedCard
    }
    else { //will get here only if first card is set to sth. first card is not equal to clickedCrad  
        //let's check to see if first card matches flipped card
        setTimeout(checkMatch, 700, firstCard, clickedCard)
        //firstCrad and clickCrad are passsed into checkMAtch as arg on both checkMAtch and setTimeout (checkMatch) 
        // The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires. DOESNT INTERRUPT EXECUTION, JUST STARTS TIMER 
        firstCard = null
        //runs before checkMatch (but settimeout timer is running)
    }
}

function checkMatch(cardOne, cardTwo) {
    //two cards match if they have the same image or somehow have the same value (such as how they used the data attribute in the html )
    let image1 = document.querySelectorAll('.flipped > img:not(.backCard)')[0]
    //whats in parens above is css not js

    let image2 = document.querySelectorAll('.flipped > img:not(.backCard)')[1]
    
    let card1 = image1.parentNode
    let card2 = image2.parentNode
    card1.classList.remove('flipped')
    card2.classList.remove('flipped')
    if (image1.src === image2.src) {
        card1.classList.add('matched')
        card2.classList.add('matched')
        checkWin()
    }
}

function checkWin() {
    //5 matches equals one game win
    if (document.querySelectorAll('.matched').length === document.querySelectorAll('.card').length) {
        alert('game over')
        resetGame()
    }
}


function resetGame() {
    let picArray = [
        "images/ilyass1.png",
        "images/ilyass2.png",
        "images/ilyass3.png",
        "images/ilyass4.png",
        "images/ilyass5.png",
        "images/ilyass1.png",
        "images/ilyass2.png",
        "images/ilyass3.png",
        "images/ilyass4.png",
        "images/ilyass5.png",
    ]
    
    Array.from(document.querySelectorAll('.card img:not(.backCard)')).forEach(img => img.src = "")
    for (let i = 0; i < 10; i++) {
        let emptyCards = document.querySelectorAll('img[src=""]')
        // NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll().
        let randomCard = Math.floor(Math.random() * emptyCards.length)
        //0.7 * num of reminaing cards w empty img (10) => 7 
        emptyCards[randomCard].parentNode.classList.remove('flipped', 'matched')
        emptyCards[randomCard].src = picArray[i]
    }
}

resetGame()

// 1. think about rules of game then worry about js 

//coudl give same data attribute to cards w same omage to comapre them more easily 

//need two images/card?
//chnage randomize cards fn 