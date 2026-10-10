//Goal: Make a 10 card memory game - users must be able to select two cards and check if they are a match. 
//If they are a match, they stay flipped. If not, they flip back over. 
//Game is done when all cards are matched and flipped over.

//selects the game cards and restart button from the HTML
const cards = document.querySelector("#cards")
const restart = document.querySelector("#restart")

//Listen for clickes on the game cards and the restart button
cards.addEventListener("click", gameLogic)
restart.addEventListener("click", restartGame)

//Keep track of the first and second cards clicked on by the user
let clickedOn = undefined;
let clickedOnTwo = undefined;


//Create and shuffle/randomize the cards with 5 matching pairs
function random(){ 
    let cardCategory = ['👶', '👶', '🍼', '🍼', '🤰', '🤰', '🧷', '🧷', '🎁', '🎁']

    while(cardCategory.length > 0){                                     //create cards until all emojis have been used
        const order = Math.floor(Math.random() * cardCategory.length); //picks random position from emjois that are left
        const createCard = document.createElement('div');               //creates new cards from HTML element

        cards.appendChild(createCard);                                  //adds new cards to the game
        createCard.innerText = '❓';                                   //cards before they are flipped - hides emoji until user clicks
        createCard.classList.add(cardCategory[order]);                //gives card a class so it can be macthed
        cardCategory.splice(order, 1);                               //splice on the array to remove a card - removes an emoji so it can't be picked again
    }
}

//Call the function to create the cards when the game starts
random();

function gameLogic(event) { 
    //clickd on card
    if(event.target === cards) {                               //only individual cards can be clicked
        return; 
    }
    if(event.target === clickedOn) {                          //prevents same card from being clicked on twice - creating a false match
        return; 
    }
    if(event.target.classList.contains("matched")) {         //prevents matched cards from being clicked again
        return;
    }
    //flip the card over
    event.target.innerText = event.target.className;        //reveal the card/emoji on the card clicked

    if(clickedOn === undefined){ 
        clickedOn = event.target; 
        return; 
    } 

    clickedOnTwo = event.target;

    if(clickedOn.className === clickedOnTwo.className) {      //Check to see if the cards match 

        console.log("It's a Match!"); 

        //keep both matched flipped over 
        clickedOn.classList.add("matched"); 
        clickedOnTwo.classList.add("matched"); 

        //RESET - to create a new game
        clickedOn = undefined; 
        clickedOnTwo = undefined;

    
    }else{ 
        console.log("No match made.")

        //if the cards don't match - keep them showing to help with memory
        setTimeout(function() { 
            clickedOn.innerText = "❓";
            clickedOnTwo.innerText = "❓";

            clickedOn = undefined; 
            clickedOnTwo = undefined;

        }, 1000);
    } 
}

    function restartGame() { 
        cards.innerHTML = "";

        clickedOn = undefined; 
        clickedOnTwo = undefined; 
        matchedCards = 0 
    
        random();
    }


//Logic for final win of the game - all 10 Cards flipped over 

//Game Testing 
//Display "It's a Match" or "No Match!"
//Issue mid-game where user was able to click on a 3rd item 
//Stop user from clicking on all symbols (don't let a card be clicked unless it's a match)
//Win Screen to Pop up