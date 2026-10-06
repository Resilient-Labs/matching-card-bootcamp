// In this game, the cards should start hidden, one card should flip when clicked
// then the second card will flip when clicked and if they match, then they stay flipped
// but if they aren't the same, then they both flip back to hidden



const parent = document.querySelector('.container')     // Store in a variable to call later
parent.addEventListener('click', selectCard);

document.querySelector('button').addEventListener('click', random)

let cardOne = undefined;    // We need an undefined variable to later
let cardTwo = undefined;    // reassign and hold the value of the card

function random(){
    
    parent.innerHTML = '';          // Resets HTML on game reset

    let cards = ['🏀','🏀','🏟️','🏟️','🏆','🏆','👟','👟','⛹️','⛹️'];      // Hidden side of our cards
    
    while(cards.length > 0) {              // While cards.length is truthy
      const randomize = Math.floor(Math.random() * cards.length);       // Equation for random order of card values
      
      const lego = document.createElement('div');       // create a variable thats value is our created div
      parent.appendChild(lego);                         // append our legos to the parent variable on Line 7
      lego.textContent = ' '
      lego.classList.add(cards[randomize])              // card[randomize] will give our class a random index from an array
    
      cards.splice(randomize, 1);           // Removes one of the strings from the array so it doesn't get reassigned             

    }

    cardOne = undefined                 // Resets cards to undefined on game reset
    cardTwo = undefined

}

random()         // <--- Need to call on the function to have it run on page load

function selectCard(e){
    console.log(e.target)                       // <-- Targets what the element that is clicked on 
    e.target.textContent = e.target.className     // the targets InnerText is being changed to it's class name 


    if(cardOne != undefined) {    // if a card is clicked then it is no longer undefined, so
        cardTwo = e.target        // now we need to be able to click for the second card
    } else {
        cardOne = e.target        // if the first card is still undefined then
        return                    // then we stay on the first card until it is no longer undefined and return to the top
    }

    // if now that the cards are flipped, if they match
    // we now compare their values, and reassign the varibles of cardOne and cardTwo

    if(cardOne.className === cardTwo.className) {
        console.log('Match')
    } else {
        console.log('Try Again')
        cardOne.textContent = ' '    // if the cards are not a match then we
        cardTwo.textContent = ' '     // want to flip the card (reset innertext)
    }

    cardOne = undefined
    cardTwo = undefined
}