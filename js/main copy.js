// alert("The yogurt is the answer")


/*Instructions
Make a 10 card memory game - 
users must be able to select two cards and check if they are a match. 
If they are a match, they stay flipped. 
If not, they flip back over. 
Game is done when all cards are matched and flipped over.
*/

// List of Steps 4:09 PM:
// Place Images - DONE
// JS:
// Have each card know where its pair is
// Have a function that can identify when all 5 pairs are made - Then you won the game
// Place event listener on each card
// You might be able to do this in one long function honestly
    // The function would loop through
    // Place an event listener on each div
    // When the div gets clicked it would flip the card over - i.e function showImg
    // Then it would check to see if that card matches its pair
    // You need a series of or statements and a series of And statemtns
        // Basically
            // Loop Through
            // Place event listener on each div
            // When div gets clicked
            // showImg - Transform180
            // If xpair || ypair || jpair || epair || wpair {alert "you have a match!"
            // elseIf xpair && ypair etc {alert "You won the game!"}


// Figure out game statuses = @2 clicks, 4, etc?

// The game functions on two clicks at a time and needs to count clicks in the Dom at each two turns



// Pseudo-Code
// Make all of the divs for the card
// One div each for each side of the card
// Create a series of src that you can use src.random or math.random on the source for (might need 10??)

// Create a conditional statement for each card where the cards remain flipped between rounds if they match
document.getElementsByClassName('outercard').addEventListener

// set up phase: Set up the game before it even starts - What will the matching cards be?
// Gameplay: What does the gameplay loop look like?
// What needs to happen each time the user clicks? Difference between odd clicks and even clicks?



const game = document.getElementsByClassName('cards')
const turnCard = document.getElementsByClassName('outercard') ;
for (let i = 0; i < game.length; i++) {
  outercard[i].addEventListener('click', function(showImg) {
    if (document.getElementById("cardone-inner img").src === document.getElementById("cardfive-inner img").src 
    ||  document.getElementById("cardtwo-inner img").src === document.getElementById("cardsix-inner img").src 
    ||  document.getElementById("cardthree-inner img").src === document.getElementById("cardseven-inner img").src 
    ||  document.getElementById("cardfour-inner img").src === document.getElementById("cardten-inner img").src 
    ||  document.getElementById("cardeight-inner img").src === document.getElementById("cardnine-inner img").src) 
    {
        const header = document.querySelector(h2);
        const blankHeader = header.innerHTML;
        header.innerHTML = 'You Made A Match!'
        setTimeout(() => {
            header.innerHTML = blankHeader;
        }, 1000)
    } else if (document.getElementById("cardone-inner img").src === document.getElementById("cardfive-inner img").src 
    && document.getElementById("cardtwo-inner img").src === document.getElementById("cardsix-inner img").src 
    &&  document.getElementById("cardthree-inner img").src === document.getElementById("cardseven-inner img").src 
    &&  document.getElementById("cardfour-inner img").src === document.getElementById("cardten-inner img").src 
    &&  document.getElementById("cardeight-inner img").src === document.getElementById("cardnine-inner img").src) {

        const header = document.querySelector(h2);
        const blankHeader = header.innerHTML;
        header.innerHTML = 'You Won the Game! Way to Go!'
        setTimeout(() => {
            header.innerHTML = blankHeader;
        }, 1000)
        
    } else 
    
    {
        header.innerHTML = 'Game Over!'
        // disableClick -- Need to figure out this functioin
    }
  });
}

// This is what Cory was talking about iterating through above ^^

// Is there a way to make this so that it controls every turn
// So you have turn one where you flip two cards and each successive turn is only one
// On first turn you flip card one to see what's on the inside and then card 2
// If they match you continue if they don't the game ends

// This means they need to be stored in a variable between clicks somehow -- after how many clicks does the game reset?
// The conditional statement would only need two conditions and then there would be a large if statement with all 10 of the cards at the end
// Another way to validate the state is to use for loop to go through every card
// Has to be very stateful so need to track the game state - How are we tracking the clicks?
// How are we defining the game state
