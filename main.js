//First I want to create an event listener for each cell so when it clicked it runs so that when they are clicked it flips to reveal the image of the cell


let selected = false
let cardOne
let cardTwo
let lockBoard = false

//Next I want to make the cells into an array so i can use index to target each cell.

let cells = document.querySelectorAll('.cells')

console.log(cells)

//Turn into an array

cells = Array.from(cells) //Turns nodeList into an array for me to work with 

console.log(cells)

//Then I want to create a randomizer so that each time the game is won, the image positions are switched and randomized.
//make the cards shuffle everytime you reset the game
function shuffleCards() { //make the cards shuffle everytime you reset the game
    for (let i = 0; i < cells.length; i++) {
        let randomOrder = Math.floor(Math.random() * 10);
        cells[i].style.order = randomOrder; //https://developer.mozilla.org/en-US/docs/Web/CSS/orderthe same container.
    }
}

//call the function to shuffle
shuffleCards()




//Now I want to loop through each cell

cells.forEach(cell => {
    //create a smurf (or event listener) for when player clicks on a cell of the board
    cell.addEventListener('click', flipCard)


})

function flipCard() {

    //create new gameboard object to initalize it

    let memoryGame = new GameBoard()


    if (lockBoard) return;
    if (this === cardOne) return; //this represents the first card clicked.

    //should disable card one if double clicked



    this.classList.add("flip")

    //make card flipped a falsy statement
    //player should only be allowed to review two images at once
    if (!selected) {
        //select card one
        selected = true
        cardOne = this
    }

    else {
        //select card two
        selected = false
        cardTwo = this

        memoryGame.checkForMatch()
        memoryGame.checkForMatch() ?  document.querySelector('#winlose').innerText = `match!`:  document.querySelector('#winlose').innerText = `try again!`
    
    }
    
    if(memoryGame.checkForMatch() == true){
        document.querySelector('#winlose').innerText = `match!`
    }


}






class GameBoard {
    //No parameters needed for this that I can think of, can you have a class without a constructor? 
    constructor() { }

    //I want to make a method to check for win, specific cells need to be have the same values for a win.

    //game should check if both images are the same and if not then turn the images back around and reset the user's clicks
    checkForMatch() {
        if (cardOne.dataset.value === cardTwo.dataset.value) {
            
            cardOne.removeEventListener("click", flipCard)
            cardTwo.removeEventListener("click", flipCard)
            this.resetBoard()
        } else {
            lockBoard = true 

          
            setTimeout(() => {
                cardOne.classList.remove("flip")
                cardTwo.classList.remove("flip")

                this.resetBoard() 
            }, 1000)

        }
    }

    resetBoard() {
        selected = false
        lockBoard = false 
        cardOne = null
        cardTwo = null
    }





}

//if all the image matches have been found then the game ends and user won, should be able to restart game.

document.querySelector("#new-game").addEventListener("click", newGameBtn)

function newGameBtn() {
    location.reload()
}

