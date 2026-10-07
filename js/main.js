///////////////////////////////////////////////////***
// Things this game needs (organized version)
// ****************************************
// give the cards values
// find the 10 cards in the divs
// be able to click all of the cards
// the card needs to flip/show the face/value when you click on it
// maintain a state where the first card that is clicked will not automatically have it's value disappear
// maintain a state where that the second card that is clicked will not automatically have its value disappear
// the cards need to have their values compared
// are the values duplicates of each other aka do the cards match?
// if they have the same value then they need to stay flipped up/ have their value continue to remain exposed
// if the cards do not match then we need to hide both of the cards again
// i need to make sure that the player cannot click more than 2 cards at one time AND have all three faces up
// the user should not be able to keep clicking on the same card
// the game needs to know when all ten cards have been matched so that it can end
// comparisonInProgress =false means that the player is allowed to choose a card because the function is not comparing two cards against each other
// comparisonInProgress = true means that the function is comparing the cards against each other so the the player should not be allowed to choose a third card or any other card
//******************************************************** */
///////////////////////////////////////////////////////////*/

//make the array that has the card values for the 10 cards
const cardValues = [
  "moon",
  "moon",
  "mercury",
  "mercury",
  "mars",
  "mars",
  "jupiter",
  "jupiter",
  "venus",
  "venus",
];
console.log(cardValues);

const cardImages = {
    moon:'./assets/sailor-moon.jpeg', 
    mercury: './assets/sailor-mercury.jpeg', 
    mars: './assets/sailor-mars.jpeg', 
    jupiter: './assets/sailor-jupiter.jpeg', 
    venus: './assets/sailor-venus.jpeg'
}

//this is going to remember the cards that the player is clicking on
let selectedCards = [];
let isCheckingCards = false
let matchedCards = []

//find the 10 cards
const cards = document.querySelectorAll(".card");

const messageToPlayer = document.querySelector('#messageToPlayer')

console.log(cards); //check in the console whether this is identifying all 10 cards correctly
console.log(cardValues.length);
console.log(cards.length);

//the player will be clicking on the cards. this means that there needs to be an eventlistener smurf that is sitting and listening for a click. it is paying attention to every single card.  this is the click listener
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    if(isCheckingCards === true){
        return
    }

    if(selectedCards.includes(i)) { 
        return
    }

    if(matchedCards.includes(i)) { 
        return
    }
    console.log(`You clicked on card number: ${i}`);
    console.log(`The value of the card you clicked on is: ${cardValues[i]}`);

    //show the cards value when it is clicked on
cards[i].style.backgroundImage = `url('${cardImages[cardValues[i]]}')`
    //this adds the cards that the player clicked to the array
    selectedCards.push(i);
    console.log(selectedCards);


    if (selectedCards.length === 2) {
      isCheckingCards = true;

      const indexOfTheFirstClickedCard = selectedCards[0];
      const indexOfTheSecondClickedCard = selectedCards[1];

      //get the value of the cards
      const firstCardValue = cardValues[indexOfTheFirstClickedCard];
      const secondCardValue = cardValues[indexOfTheSecondClickedCard];

      if (firstCardValue === secondCardValue) {
        console.log("It's a match! Great job.");

        matchedCards.push(indexOfTheFirstClickedCard)
        matchedCards.push(indexOfTheSecondClickedCard)

        if(matchedCards.length === cardValues.length){
            console.log('You did it! All cards have been matched, crisis has been averted.')
            //this is the one that actually displays to the user 
            messageToPlayer.textContent = 'You did it! Thanks for helping save Crystal Tokyo!'
        }

        //i don't need to reassign because i am changing the value of the variable so I don't need to redeclare it 
        selectedCards = []
        isCheckingCards = false
      } else {
        console.log("Not a match. Too bad.");

        setTimeout(function () { 
            cards[indexOfTheFirstClickedCard].style.backgroundImage = '';
            cards[indexOfTheSecondClickedCard].style.backgroundImage = '';

            selectedCards = []
            isCheckingCards = false
        }, 1000)
      }
    } // end of scope for the if statement
  });
}
