//-------ASSINGMENT-------

//Make a memory match game
//smallest can be is 2 by 2
//on click reveal card value/content
//need to make sure card stays fliped until another card is also flipped
//if the cards match then stay flipped, otherwise turn back over

//-------PSEUDOCODE-------

/** 
 
---generate a grid, 2x2 at first
---find way to auto populate the grid on page load
    ---may be able to use array for this


*/

//-------IMPLEMENTATION-------

let imgArr = ["front_1.webp", "front_2.webp", "front_2.webp", "front_1.webp", "front_3.jpg", "front_3.jpg", "front_4.jpg", "front_4.jpg"]
const cards = document.querySelectorAll('.card') //this refers to all dom nodes with clssname card
let cardsArr = Array.from(cards) //creates our array we can then loop over

let selectedCardArr = [] //should only ever hold two values that will then be passed to a checkMatch function
//clear this array after the two values have been checked for match
//let winArr = []
let matchesCount = 0
console.log("this is cards", cards);
console.log("this is cardsArr", cardsArr);



//shuffle our deck--------------------

// grabbed this off of stack overflow
function shuffle(array) {
    matchesCount = 0
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

//console.log(shuffle(imgArr))
shuffle(imgArr)

const backSideOfCards = document.querySelectorAll('.back')
//const back = document.querySelector('.back')
//const front = document.querySelector('#card1')
//const back = document.querySelector('#hiddenCard1')
//const back2 = document.querySelector('#hiddenCard2')
//querySelectorAll returns node list, can then turn to array

//useing loops/for each
//Cory helped me dry this part of the code out
document.querySelectorAll('.card').forEach((elementAsCard) => {
    elementAsCard.addEventListener('click', flip) //hooks up anything with class .card to our flip function
})

// document.querySelectorAll('.back').forEach((elementAsCard) => {
//     elementAsCard.addEventListener('click', flipBack) //hooks up anything with class .back to our flip function
// })

function flip(event) {
    //this will house the logic for changing the card that is displayed.
    //might be able to use a while loop for this?


    if (matchesCount === 4) {

        alert("game over")
        // shuffle(imgArr)
        // matchesCount = 0
        window.location.reload() //<----Rio showed me this cause I wanted a way to end the game based on a recognized end game state.

    }





    let currentCard = this.getAttribute('data-card-number') //Ellie helped me with how to properly target the custom data attribute in javascript
    //console.log(currentCard)

    // let selectedCardImg = this.getAttribute('src')
    // console.log(selectedCardImg)
    console.log("Event current target is: ", event.currentTarget)
    event.currentTarget.classList.add('selected')
    event.currentTarget.src = imgArr[currentCard] //setting the sorce attribute of the card to be


    console.log(imgArr[currentCard]);
    //selectedCardArr.push(imgArr[currentCard]) //when the length of this is 2 put it through checkMatch function
    selectedCardArr.push(event.currentTarget)
    console.log(selectedCardArr);
    console.log("selectedCardArr length is currently: ", selectedCardArr.length);


    if (selectedCardArr.length === 2) {
        checkMatch(selectedCardArr)
    }

    //push card data custom attributes into choice array (should hold just two values)
    //check to see if the src values of the cards is equal. if it is then its a match
    //now check to see if both cards img sorce attributes equal one another


    // flipped = true
    //event.currentTarget.classList.toggle('hidden')

    if (document.querySelector('img').classList.contains('selected')) {
        // document.querySelector('img').src = "back_of_card.jpg"
    }


    //backSideOfCards.classList.toggle('hidden')
    //use add() to add class of selected


    //if card classlist includes selected then 


    //change img sorce appropreitely 
    //will need to use .classList.add('selected')

    //can also use custom data-card-number attribute to
    //keep track of what card is flipped. 
    //(idk if thats needed now, but it will be for comparison of card value)
}

//ideas
//make seperate function called flipBack?

//game over check

function pushBool() {
    //loop through all cards if they are all selected then end the game.



    document.querySelectorAll('.card').forEach((elementAsCard) => {

        if (elementAsCard.classList.contains('selected')) {
            winArr.push(true)
        }

        console.log(winArr); //array of true booleans should be generated on game over

        console.log("currently checking if the game is over!");




    })

    return winArr
}

function gameOver() {
    console.log("The game is over!");
    return

}

//idea2
// put functionality for a conditional to route control flow to one of two clauses, one that flips one way
// one that flips the other. 


/*

.classList MDN info


Although the classList property itself is read-only, 
you can modify its associated DOMTokenList using 
the add(), remove(), replace(), and toggle() methods.


*/



function checkMatch(playerChoiceArr) {
    //takes in array of two elements
    //check to see if their sorce attributes are equal

    if (playerChoiceArr[0].src === playerChoiceArr[1].src) {
        console.log("Its a match!");
        selectedCardArr = [] //reset the array that tracks the choices to be compared to prepare for next two cards
        //leave cards face up
        matchesCount++
    } else {
        console.log("Sorry, no match");


        setTimeout(() => {
            playerChoiceArr[0].src = "back_of_card.jpg"
            playerChoiceArr[1].src = "back_of_card.jpg"
            playerChoiceArr[0].classList.remove('selected')
            playerChoiceArr[1].classList.remove('selected')
        }, 800)

        selectedCardArr = [] //reset the array that tracks the choices to be compared to prepare for next two cards
        //reset the cards to face down.


    }
}

























function ticTacTurn(e) {

    // look at turn count
    // is it even or odd?
    // if odd place O if even place X
    // use .innerText along with (Event).currentTarget to place the relevant char

    //for generating the array of numbers representing player turns
    // we know player one will always go one odd turns, and player two on even

    //so check even or odd of player turn with modolus
    //that decides



    // if (turnCount > 6) return
    if (turnCount >= 10) {
        console.log("TIME TO CHECK WINNER!")
        //call the function to see who one here
        return
    }


    console.log("beginning: Its turn " + turnCount);
    let buttonId = parseInt(e.currentTarget.id[1])
    console.log(buttonId);


    // oneDisplay.innerText = "X"

    if ((turnCount % 2) === 0 /*&& turnCount < 6*/) { //turn count is currently and even number
        // if (e.currentTarget.innerText) need to have a way to prevent overwrite, if something is already there then just set the inner text to what i currently is
        e.currentTarget.innerText = "X"
        console.log(e.currentTarget.id + " is the current ID"); //this works for grabbing current id
        playerTwoChoiceArr.push(buttonId)
        console.log("player twos array current has the following values in it:");
        console.log(playerTwoChoiceArr);

        if (checkWhoWon(playerTwoChoiceArr)) {
            //this player is the winner, report in dom
            console.log("PLAYER TWO WINS")
        }

    } else { //turn count is currently an odd number
        e.currentTarget.innerText = "O"
        console.log(e.currentTarget.id + " is the current ID");
        playerOneChoiceArr.push(buttonId)
        console.log("player ones array current has the following values in it:");
        console.log(playerOneChoiceArr); ///!!!!

        if (checkWhoWon(playerOneChoiceArr)) {
            //this player is the winner, report in dom
            console.log("PLAYER ONE WINS")
        }

    }

    //increaseTurnCount()
    turnCount++
    turnDisplay.innerText = turnCountStr + turnCount
    console.log("End: Its turn: " + turnCount);
}






// function setTurnChar(e) {



//     if (turnCount % 2 === 0) {
//         console.log("Even turn");
//         turnCharBox.innerText = "Even turn"
//     } else {
//         console.log("Odd turn")
//         turnCharBox.innerText = "Odd turn"
//         console.log(turnCount);
//     }

//     console.log(increaseTurnCount());


// }


// function increaseTurnCount() {

//     if (turnCount <= 10) {
//         turnCount += 1
//     } else {


//     }


//     //just used for debugging
// }


//Cory helped me with this function
function checkWhoWon(playerChoiceArr) { //not pure function, bc uses global varible of win cases
    //take in array from both players

    /*
    
    Winning combinations for my implimentation

    [1, 2, 3],[4, 5, 6],[7, 8, 9],
    [1, 4, 7],[2, 5, 8],[3, 6, 9],
    [1, 5, 9],[3, 5, 7] 

  --all sorted
    !!!!!!!!!!!!!--note that each winning array has a palindrome that is also a winning array
    */
    //Idea one________________________________________________________________________
    // make an object out of the wining combonations
    // interate through that object checking if player array is inside object
    // if so they win
    //account for draws in game


    //turn 6 is the earlist player one (O) can win
    //and turn 7 is the earlist player two (X) can win
    //at turn 7 both arrays have a length of 3
    //__________________________________________________________________________________________
    //should start checking for winner once any player array is of length 3 or more.
    //if the length is 3 do a regular sorted check, considering palandromes


    //Idea two______________________________________________________________
    //if the array length is larger than three, 
    //filter out all the numbers that are not inside of the
    //winning array set that the player array is being checked against

    //loop over player array
    //use isInside on every element where the target array is the current iterable
    //of the larger data structure holding all the winning array values
    //if there is an element that is inside the player are and NOT inside any
    //of the 

    //[1,5,4,6]

    //[4, 5, 6]


    //this calls checkPossibleWinCase

    for (let i = 0; i < winCondition.length; i++) {
        let currentCondition = winCondition[i]

        let didPlayerWin = checkPossibleWinCase(currentCondition, playerChoiceArr) //returns bool
        if (didPlayerWin) { //if the current case is deemed a winner (consider making a new var when you find yourself writing comments)
            return true
        }

    }

    return false

}

//Cory helped me with this function as well
//need to check in the player array includes the current element in the win array
// playerArr.includes(winArr[i])


// function checkPossibleWinCase(winArr, playerArr) { //pure function

//     let runner = 0

//     for (let i = 0; i < winArr.length; i++) {
//         if (playerArr.includes(winArr[i])) {
//             runner++
//         }

//     }

//     if (runner === 3) {
//         return true
//     } else {
//         return false
//     }
// }

// let winTestOne = checkPossibleWinCase([4, 5, 6], [1, 5, 4, 6])

// let winTestTwo = checkPossibleWinCase([4, 5, 6], [1, 7, 4, 6])

// console.log("This is win test one", winTestOne);
// console.log("This is win test two", winTestTwo);

//pure function
    //no side effects and no hidden inputs