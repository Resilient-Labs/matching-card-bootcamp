//12 Card Matching Game

//This Game was created in collaborated with Z, Hillary, and Danstan. Mentor Mike Pennisi helped us.

//This is a one-player matching game. The player tries to match the pair of cards with the same image. 

//First, we have an array named 'gameArray' that represents the 12 squares on the board. The element values range from 0-5. There are 2 of each number which represent a matching pair. 

let gameArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

//We have an array named 'arrImg' whose elements are the images that will appear on the gameboard. There are 6 unique images as represented in the array. 

let arrImg = [

        './pic/bird.png',
        './pic/centaur.jpg',
        './pic/dobby.jpg',
        './pic/hippogriff.jpg',
        './pic/owl.png',
        './pic/sea.jpg'
]

//The following variable 'clickCounter' serves to document what the current click number is. We want to track the clicks because we will check to see if there is a match after 2 clicks aka 2 cards have been flipped. 

let clickCounter = 0;

//matchArray and idArray start as empty arrays. We will use them to push the image's values and image ids to. After 2 cards are flipped, we will compare the values in the matchArray to see if they are a match. Then, we will use the idArray to target the images that were clicked on, so we can add/remove classes if there is a match or no match.

let matchArray = [];
let idArray = [];

//The folllowing variable named 'gridInteraction' is used to determine if we want a procedure to run after the player clicks on the squares/gameboard. If we don't want anything to happen after a user clicks, we can use 'gridInteraction === false'.

let gridInteraction = true;

//The following variable named 'score' tracks the score so that it can be printed in the DOM.

let matchScore = 0;

//The following variable named 'score' tracks the score in the game state.

let score = 0;

//The following function allows us to assign the 12 values in our array to the value attribute of the 12 image tags in our HTML.


function insertValuesHTML() {

    shuffle(gameArray);

    for(i = 0; i < gameArray.length; i++) {

//We do this by looping through the 'gameArray' and assigned each element to the value attribute of the image element. 

        const imgs = document.querySelectorAll('img'); //Node list

        imgs[i].setAttribute('value', gameArray[i])  

        //imgs[0-11]
        
//Next, we assign an image source to each image's source attribute. We do this by looping our 12 image tags and using the number in the 'gameArray' as the arrImg's index.

//Ex. gameArray[i] === 1 -> imgs[1].setAttribute('src', arrImg[1])

        imgs[i].setAttribute('src', arrImg[gameArray[i]])


    }


}

//Next, we call the above function so that our image tags will be assigned a value and src. 

insertValuesHTML();

//The following function shuffles the cards by randomly swapping the elements in 'gameArray.' This code was found at https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

function shuffle(array) {
    var currentIndex = array.length, 
        temporaryValue, 
        randomIndex;

    // let currentIndex = 12
            // currentIndex = 11
            // currentIndex = 10

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      //0.5 * 12 = 6, randomIndex === 6
      currentIndex -= 1; //currentIndex = currentIndex -1
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex]; //array[12] === 5, temporaryValue === 5
      array[currentIndex] = array[randomIndex]; //array[12] = array[6] [0,0,1,1,2,5,3,3,4,4,5,2]
      array[randomIndex] = temporaryValue;//array[6] ===5
    }
  
    return array;
  }


//The following function is used to loop through each of the 12 image tag and to put an event listener on them. 
 
function setUpSquares() {

    document.querySelectorAll('.hide').forEach( (item, index) => {
        
        setUpGridClick(item)
    } )
}

setUpSquares()

// The following function adds the event listener to the squares. 

function setUpGridClick(element) {
    element.removeEventListener('click', gridClick)
    element.addEventListener('click', gridClick)
}

//The following function executes what will happen when we click on a card. 

function gridClick(e) {

//If we want to execute an action after the player has clicked on the card.....then
    if(gridInteraction === true) {
    
    let targetedItem = e.target

//Reveal the card's image
    targetedItem.classList.remove('hide')

//Push the image's value attribute to the matchArray
    matchArray.push(targetedItem.getAttribute('value'));

//Push the image's id to the idArray
    idArray.push(targetedItem.getAttribute('id'));

 //Increase the click counter   
    incrementClickCounter();

//Remove the event listener so we can't click on the card again.
    removeGridClick(targetedItem)

//Check out click counter to see if it is time to check if there is a match.
    checkClickCounter();
    
    
//If we don't want anything to happen, when the player clicks...then we can use 'gridInteraction === false'
    } else if(gridInteraction === false) {

        return
    }

}

//The following function removes the event listener. 

function removeGridClick(item) {

    item.removeEventListener('click', gridClick)
}


//The following function serves to increase the clickCounter after each click....
function incrementClickCounter() {
//if the clickCounter is === 0 or ===1, then we want the clickCounter to increase. 0 -> 1 -> 2
    if(clickCounter <= 1 ) {
        clickCounter++ 
//if the clickCounter is not === 0 or === 1 AKA it is at 2, then we want to reset the clickCounter at 1. 
    } else {
        clickCounter = 1
    }
}

//The following function checks if the clickCounter is at 2. If it is at 2, two cards have been flipped and it is time to check if there is a match. 
function checkClickCounter() {


    if(clickCounter % 2 === 0) {

        checkCardsForMatch()
    }
}

//The folllowing function checks to see if there is a match between the two flipped cards. 

function checkCardsForMatch() {

//First, while we check to see if it is a match, we want to make all the other cards on the board unclickable. 
    gridInteraction = false

//If the values that were pushed to the matchArray are the same, it's a match!
    if(matchArray[0] === matchArray[1]) {

//Increase the match score.
        incrementMatchScore();

//Remove the cards.
        removeMatchingCards()

//Increase the score in the DOM.
        increaseMatchScore();

//Clear the matchArray and idArray so that it is empty as we are done comparing thet 2 values/id.
        matchArray = [];
        idArray = [];

        

    } else {
//if it is not a match, then we want to flip the cards over.
        flipoverNonMatchingCards()
    
//next, we want to make the cards we flipped over, clickable again (we previously removed the event listener after we flipped them)
        let x = document.getElementById(`${idArray[0]}`)
        let y = document.getElementById(`${idArray[1]}`)
        
        addGridClick(x)
        addGridClick(y)
        
//Report that there was not a match in the DOM
        printNoMatchResults()

//Clear the matchArray and idArray for the next round. 
        matchArray = [];
        idArray = [];
       
    }
}

//The following function adds an event listener; it makes the grid clickable.
function addGridClick(item) {

    item.addEventListener('click', gridClick)
}

//The following function removes the matching cards after there is a match. 
function removeMatchingCards() {

    let a = document.getElementById(`${idArray[0]}`)
    let b = document.getElementById(`${idArray[1]}`)

    let x = document.getElementById(`${idArray[0]}`).parentNode
    let y = document.getElementById(`${idArray[1]}`).parentNode
    

    setTimeout( () => {

//Hide the matching cards 
            a.classList.add('clear')
            b.classList.add('clear')
//Turn the background to black
            x.style.backgroundColor = 'black';
            y.style.backgroundColor = 'black';
//Make the grid clickable again
            gridInteraction = true

    }, 2000) 

    

}

//The folllowing function allows us to flip the non-matching cards over.
function flipoverNonMatchingCards() {

        let x = document.getElementById(`${idArray[0]}`)
        let y = document.getElementById(`${idArray[1]}`)

        setTimeout( () => {
//Hide the cards    
            x.classList.add('hide')
            y.classList.add('hide')
//Make the grid clickable again.
            gridInteraction = true
            
            
        }, 2000);
}

//The following variable increments the score by one when it is called. This funciton is for the game state.
function incrementMatchScore() {

    score++
    
}


//The following variable increments the score by one when it is called and calls the funciton that prints it to the DOM.

function increaseMatchScore() {

    matchScore++

    setTimeout( () => {

        document.querySelector('.spanScore').innerText = matchScore
                        
    }, 1000)


    printResults()
    
}

//The following function prints the results to the DOM, if it is a match. 
function printResults() {

//If the player has gotten a match, it prints 'Match!'
    if(matchScore < 6) {

        document.querySelector('.h3Results').innerText = ''
        
        setTimeout( () => {

            document.querySelector('.h3Results').innerText = 'Match!'
                            
        }, 1000);
        
        

//If the player has matched all cards, then it prints 'Win!'
    } else if(matchScore === 6) {

        document.querySelector('.h3Results').innerText = 'Win!'
    }

}

//The following function prints the results to the DOM, if there is no match.
function printNoMatchResults() {

    document.querySelector('.h3Results').innerText = ''

    setTimeout( () => {

        document.querySelector('.h3Results').innerText = 'No match!'
                        
    }, 1000)
}

//The following statement adds an event listener on to the 'Reset' button. It will reset the game. 

document.querySelector('.buttonReset').addEventListener('click', resetGame)

function resetGame() {
//Clears the matchArray, idArray, score, and matchScore
    matchArray = []
    idArray = []
    score = 0
    matchScore = 0

//Clear the results in the DOM
    resetGameDOM()
//Add event listeners onto the squares
    setUpSquares()
//Shuffle the cards and assign values and src to the image tags
    insertValuesHTML()


}

//The following function clears the results from the DOM, so that we can reset the game.
function resetGameDOM() {

//Target each square 
    document.querySelectorAll('.square').forEach( (item, index) => {
//Make each square the transparent color
        item.parentNode.style.backgroundColor = 'transparent';
//Make the images visible again
        item.classList.remove('clear')
//Hide the images so we can't see them
        item.classList.add('hide')
    } )

//Clear the score and result message from the DOM
    document.querySelector('.spanScore').innerText = 0
    document.querySelector('.h3Results').innerText = ""
}


