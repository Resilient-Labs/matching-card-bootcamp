// Write Pseudo Code here
// Make a 12 card memory game -. If they are a match, they stay flipped. If not, they flip back over. Game is done when all cards are matched and flipped over.

//users must be able to select (eventListener on each box)
const userChoice = document.querySelectorAll(".userChoice");
let images = ['images/chief.jpeg', 'images/leon2.jpeg', 'images/giraffe.jpeg', 'images/download.jpeg', 'images/phone.jpeg', 'images/soccerball.png'];
let firstCard = "", secondCard = "";
let targetArray = images.concat(images);
shuffle(targetArray);
const cardMap = {
  "topOne": targetArray[0],
  "topTwo": targetArray[1],
  "topThree": targetArray[2],
  "topFour": targetArray[3],
  "midOne": targetArray[4],
  "midTwo": targetArray[5],
  "midThree": targetArray[6],
  "midFour": targetArray[7],
  "botOne": targetArray[8],
  "botTwo": targetArray[9],
  "botThree": targetArray[10],
  "botFour": targetArray[11]
}
console.log(targetArray);
userChoice.forEach(el => {
  el.addEventListener('click',() => {
    console.log(el);
    if(el.classList.contains("flip"))return;
    event.target.querySelector('img').src=cardMap[event.target.id];
    if(firstCard === "") {
      firstCard = event.target.id;

      // el.classList.add("flip");
    } else {
      secondCard = event.target.id;
event.target.querySelector('img').src=cardMap[secondCard];
      // el.classList.add("flip");
      matched();
    }
  });
});
function matched () {
  if(cardMap[firstCard] === cardMap[secondCard]) {
    console.log("win");
  } else {
    const cardOne = document.querySelector(`#${firstCard}`);
    const cardTwo = document.querySelector(`#${secondCard}`);
    cardOne.querySelector('img').src = "";
    cardTwo.querySelector('img').src = "";
    cardOne.classList.remove("flip");
    cardTwo.classList.remove("flip");
    console.log('lose')
  }
  firstCard = "";
  secondCard = "";
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
function clear(){
  userChoice.forEach(el =>{
    if(el===""){
      console.log('hi')
    }

  })
}




//
// function setupGame() {
//   for (let i = 0; i < images.length; i++) {
//     populateTarget(images[i])
//     populateTarget(images[i])
//
//   }
// }

// function populateTarget(image) {
//   let j = Math.floor(Math.random() * targetArray.length)
//   for (let limit = 0; limit < targetArray.length; limit++) {
//     if (j >= targetArray.length) {
//       j = 0
//     }
//     if (targetArray[j] === undefined) {
//       targetArray[j] = image
//     }
//     j++
//   }
// console.log(targetArray)
//
// }
// shuffles the images in the array




// when clicked, image(symbol) -> Match classes for same img<-- is returned to user (x2) to select two cards

//Program checks to see if there is a match
//if they are a match(conditional statements) then stay flipped and allow users to keep playing
//if they are not a match, flip over
//once all match is met, game is over
