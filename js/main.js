const game = new Game()

const container = document.querySelector('section')
const cards = document.querySelectorAll('div')
let clicks = 0
let cardOne = undefined
let cardTwo = undefined

function flipCard(e){//e stands for "event" so it's the thing that caused your function to run
    //gets the specific card that the player clicked on 
    const index = [...cards].indexOf(e.target); 
    //if the place they clicked is NOT a div (might be the container section) OR it's not a valid move then return (stop the whole function)
    if (e.target.className !== 'card' || !game.isValidMove(index)) return 
    clicks+= 1 
    //on the first click it'll be saved as cardOne (index1) and second click is cardTwo (index2), every two clicks it restarts to make sure they don't click on more than two cards at once
    if (clicks === 1){
        cardOne = index
        cards[cardOne].innerText = game.deck[index]
    } else if (clicks === 2){
        cardTwo = index
        cards[cardTwo].innerText = game.deck[index]
        setTimeout(hideCard, 750)
        //when setTimeout is in action all the functions below it still run "simultaniously", the duration of setTimeout is just longer (so I moved all the displays I wanted afterwards into the hideCard function or else the score would finish displaying faster than it actually updated the score)
    } 
}

function hideCard(){ 
    if (game.matchPairs(cardOne, cardTwo)) { //if matchPairs is true (both cards match) then display updated score
        document.querySelector('#score').innerText = `Score: ${game.score}`
        document.querySelector('#level').innerText = `Level: ${game.level}`
        clicks = 0
        if (game.isWon === true) {
            document.querySelector('h1').innerText = 'Winner!'
            document.querySelector('#next').style.color = 'blue'
        }
    }else{ //else (doesn't match) display updated score and flip cards back around
        document.querySelector('#score').innerText = `Score: ${game.score}`
        document.querySelector('#level').innerText = `Level: ${game.level}`
        cards[cardOne].innerText = ''
        cards[cardTwo].innerText = ''
        clicks = 0
    }
}

function resetGame() {
    document.querySelector('h1').innerText = ''
    document.querySelector('#next').style.color = 'black'
    game.resetGame()
    for (let card of cards){ //same thing as i=0; i< blah.length; i++ but easier to visualize and write 
        card.innerText = '' 
    }
    document.querySelector('#score').innerText = `Score: ${game.score}`
    document.querySelector('#level').innerText = `Level: ${game.level}`
}

function nextGame() {
    if (game.isWon === true){
        document.querySelector('h1').innerText = ''
        document.querySelector('#next').style.color = 'black'
        game.nextGame()
        for (let card of cards){ 
            card.innerText = '' 
        }
        document.querySelector('#score').innerText = `Score: ${game.score}`
        document.querySelector('#level').innerText = `Level: ${game.level}`
    }    
}

//we can't do a click event on just the cards (div) or else we won't know what card they specifically clicked on 
container.addEventListener('click', flipCard) 
document.querySelector('#reset').addEventListener('click', resetGame)
document.querySelector('#next').addEventListener('click', nextGame)