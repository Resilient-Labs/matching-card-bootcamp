//Card memory game brainstorm:

//Each (matching) card should have a unique value, because we will need that info for the JS, and for the value-matching of each card pair. See first: data-framework in html that I created for this reason
//We need a function to shuffle (read: randomize) the order of the cards, since I coded them in the html to essentially be next to each other by default.
// Needs a click event listener to each (forEach) card
// When a card is clicked, it should flip over to reveal its value (one of 5 fruit images). Reflected as well in CSS.
// When two cards are flipped over, create a function to check to see if they are a match. If they are, keep them flipped over. If they are not a match, flip them back over after a short delay (i.e.: setTimeout).

//source: https://marina-ferreira.github.io/tutorials/js/memory-game/

//Started by creating a function that gets all the cards from my html card class, .memoryCard
const cards = document.querySelectorAll('.memoryCard');

// Add click event listener for each card, enabling it to be flipped (see flipCard function on line 23)
cards.forEach(card => card.addEventListener('click', flipCard));

//variable creation
let hasFlippedCard = false; //did the user flip the first card? Using booleans to set to false because upon the start of the game, all cards should not already be flipped
let lockBoard = false; //used to prevent the user from flipping more than two cards at once. Initially, it is set to false, indicating that the board is not locked and the user can flip cards.
 let firstCard, secondCard; //left undefined since their value will be declared upon the user flipping whichever first 2 cards they choose.

//
function flipCard() {
  if (lockBoard) return;
  
  // Add the "flip" class to the clicked card, allowing its appearance (read: rotating and otherwise, first indicated in CSS) to change once interacted (clicked) with
  this.classList.add('flip');

  // If this is the first card being flipped
  if (!hasFlippedCard) { 
    hasFlippedCard = true; //If hasFlippedCard is not true (thus false), then this line sets it to true
    firstCard = this;
    return;
  }
  // If this is the second card being flipped
  secondCard = this;
   hasFlippedCard = false;

   // Check if the two flipped cards match
   checkForMatch();
 }

 // ^Function being called here to check if the flipped cards match, with the use of a ternary indicating whether a match has been found (and what to enable or disable as a result)
 function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
 }

 // 
 function disableCards() {
   firstCard.removeEventListener('click', flipCard);
   secondCard.removeEventListener('click', flipCard);
 }

 // Function to unflip any unmatched cards (hence the remove flip under setTimeout)
 function unflipCards() {
  lockBoard = true;

  //Delay flip removal for 1.5 seconds and then remove the flip class from the cards, turning the lockboard to 'false' in line 64
   setTimeout(() => {
     firstCard.classList.remove('flip');
     secondCard.classList.remove('flip');

     lockBoard = false;
   }, 1500);
}

//Below is an IIFE (Immediately Invoked Function Expression- learned specifically from tutorial). This function shuffles the cards upon the page refreshing/reloading. Note: I did not add a reset button in my html, thus no reset function here. The game ends once everything is matched/flipped over (so page would need to be refreshed if the user wanted to restart the game)
(function shuffle() {
  // Looping thru all the cards and assigning a random order to each one using the style.order property (learned this part specifically from tutorial, since I understand that this is technically a CSS property)
 cards.forEach(card => {
   let randomize = Math.floor(Math.random() * 9);
   card.style.order = randomize; 
 });
})();

//___________________________________________
//below is the JS code I originally had, that I struggled to finish. I had no console logs, and only a bare bones idea of what functions I would begin to need, but not necessarily what to attribute to each one, so it was completely undone. Leaving here for transparency:

//// get all cards below:
// const cards = document.querySelectorAll('td'); 

// // create variables to keep track of cards and game
// let firstCard, secondCard;
// let lockBoard = false;
// let hasCardFlipped = false;

// function flipCard() {
//   if (lockBoard) return;
//   if (this === firstCard) return;
//   this.classList.add('flipped');
//   if (!hasCardFlipped) {
//     // first card flipped
//     hasCardFlipped = true;
//     firstCard = this;
//     return;
//   }
//   // second card flipped
//   secondCard = this;
//   checkForMatch();
// }

// function checkForMatch() {
//   ??

//   isMatch ? disableCards() : unflipCards();
// }

// function disableCards() {
//   ??

//   resetBoard();
  //??
// }