/*Morning Challenge: Make a 10 card memory game - users must be able to
select two cards and check if they are a match. If they are a match, 
they stay flipped. If not, they flip back over. 
Game is done when all cards are matched and flipped over.*/

//Example Demo: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_flip_card


// this code was written with Miriam, David, Alexa, Roxana and Shannon. 
//functions: flip card
//on the click, the card will display the image
// then an if/else, if the cards that are flipped match, the poitns go up, but if they are not a match, they flip back over

//eventlistener for when card is flipped
document.getElementById("cardGrid").addEventListener("click", flipCard);
document.querySelector("button").addEventListener("click", restartGame);
//

//  let A
//  let B
let cards = [
  "exodia/exoHead.jpg",
  "exodia/exoLeftArm.jpg",
  "exodia/exoLeftLeg.jpg",
  "exodia/exoRightArm.jpg",
  "exodia/exoRightLeg.jpg",
  "exodia/exoHead.jpg",
  "exodia/exoLeftArm.jpg",
  "exodia/exoLeftLeg.jpg",
  "exodia/exoRightArm.jpg",
  "exodia/exoRightLeg.jpg",
];

cards.sort(() => Math.random() - 0.5);//sorts the cards randomly in an array, so since this 
// https://flaviocopes.com/how-to-shuffle-array-javascript/
// arr1.sort(() => (Math.random() > .5) ? 1 : -1)
let arr = document.querySelectorAll("img");
let cardsChosen = [];

arr.forEach((e, i) => (e.src = cards[i])); //'i' begins as card = 0 because it is the first iteration in the array

let match = [];
let firstCard = undefined; //<- 'firstCard' represents the first card of a specific match
let clickingAllowed = true; //this variable was created to prevent clicking when it's false

function flipCard(e) {
  console.log("clikcing is allowed", clickingAllowed);
  if (!clickingAllowed) {
    //if clickingAllowed is false, then it immediately returns and it disables the click
    return;
  }
  let elementClassList = e.target.firstElementChild.classList;
  console.log(elementClassList);
  // Test if the card is already face up.  if it's face up, do nothing, otherwise...
  if (elementClassList.contains("show")) {
    //do nothing: this is before the checkForMatch even runs
  } else {
    // Mark this card as being face up
    e.target.firstElementChild.classList.remove("hide");
    if (firstCard == undefined) {
      // if I don't already have a first card, this must be the first card
      firstCard = e.target.firstElementChild; //img
      console.log(firstCard);
      // Don't need to test for a match, since this is the first card....
    } else {
      // This is the second card
      //the second card in this match
      e.target.firstElementChild.classList.remove("hide");
      console.log("showing second Card");
      if (firstCard.src === e.target.firstElementChild.src) {
        // <- tests if the firstCard and the second card, represented by 'e.target...etc' match
        document.querySelector("h2").innerText = "it's a match!";
        // alert('match')
        // checkForCompleteMatches();
        firstCard = undefined;

        
      } else {//code block for when the card is not a match. 
        //<- this 'else' will hide both cards if they are not matching
        // alert('no match')
        clickingAllowed = false; //since this is false, that means we can no longer handle a click, so we wait for it.
        document.querySelector("h2").innerText = "not a match";
        setTimeout(() => {
          firstCard.classList.add("hide");
          firstCard = undefined;
          e.target.firstElementChild.classList.add("hide");
          clickingAllowed = true; //after the 3 seconds have passed, then clicking Allowed becomes true again.
        }, 3000);

        console.log("hiding cards");
      }
    }
  }
}

// function checkForCompleteMatches() {
//   let completeMatches = arr.filter((card) => card.classList.contains("hide"));
//   console.log(arr, completeMatches);
//   if (completeMatches.length === 0) {
//     console.log("wow you did it...");
//   }else{
//       console.log('gotta keep going')
//   }
// }

function restartGame() {
  location.reload();
}
