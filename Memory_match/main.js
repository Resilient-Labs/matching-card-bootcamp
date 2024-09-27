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

