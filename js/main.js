//On click, card should flip
//Should not be able to click more than two cards
//Timer where cards flip back if they don't match
//If they match, they stay flipped

//state1 = down because no click -- array for unmatched cards
//state2 = one card up, awaiting for next card --in a variable
//state3 = permanently up because of match -- array for matched cards

//user clicks: eventListener
//if no cards are faced up waiting , mark the current as waiting
//else compare the flipped cards
//if next card is a match, stay up
//else flip both cards

//Allow click on all elements of an array

let cards = document.querySelectorAll(".box");
let faces = document.querySelectorAll(".frontFace");

let cardsArr = Array.from(cards);
cardsArr.forEach((card) => card.addEventListener("click", changeImg));

// console.log(cards);

function randomCards() {
  cards.forEach((card) => {
    let randomIndex = Math.floor(Math.random() * cards.length);
    //resets the order of the cards randomly
    //style.order this is a property from flex!
    card.style.order = randomIndex;
  });
}
//run this function on the button reset!!!
randomCards();

//array of box section elements getting clicked on
let clickedBox = [];
let counter = 0;

// let firstFlipped = null;
// let secondFlipped = null;

function changeImg() {
  let backFace = this.querySelector(".backFace");
  backFace.classList.add("hidden");

  let frontFace = this.querySelector(".frontFace");
  frontFace.classList.remove("hidden");

  // let imgsrc = frontFace.src;
  // clickedBox.push(imgsrc);
  //save this card
  clickedBox.push(this);

  //a card is already clicked on waiting to be matched
  if (clickedBox.length === 2) {
    checkCards();
    //even if the cards match or not, you want the counter to reset!!
  }

  winningBoard();
}

function checkCards() {
  //compare images of two clicked box values

  let img1 = getBoxImage(clickedBox[0]);
  let img2 = getBoxImage(clickedBox[1]);
  console.log(clickedBox);

  if (img1 !== img2) {
    //flip the card back to the leaf
    setTimeout(flipBack, 1000, clickedBox[0], clickedBox[1]);

    console.log("no match");
  }

  //this will keep the front faces showing up!
  else {
    //SET THE STATE OF THE CARDS TO BE PERMENANTELY UP!!
  }
  clickedBox = [];
  //  CONSOLE.LOG YOUR CODE
  // USE BACKTICS
}

//this will flip the box section elements back over when clicked on
//takes away the class of hidden on backFace and adding hidden to frontFace, flipping it over
function flipBack(boxElem, boxElem2) {
  let backFace = boxElem.querySelector(".backFace");
  backFace.classList.remove("hidden");

  let frontFace = boxElem.querySelector(".frontFace");
  frontFace.classList.add("hidden");

  let backFace2 = boxElem2.querySelector(".backFace");
  backFace2.classList.remove("hidden");

  let frontFace2 = boxElem2.querySelector(".frontFace");
  frontFace2.classList.add("hidden");

  // console.log(boxElem);
  // console.log(boxElem2);
}

function getBoxImage(boxElem) {
  let frontFace = boxElem.querySelector(".frontFace");
  return frontFace.src;
}

function flipImage() {
  console.log(counter++);
  if (counter === 2) {
    console.log(clickedBox);
    cards.forEach((card) => card.removeEventListener("click", changeImg));
  }
}

function winningBoard() {
  //if each of the boxes have a frontface, then
  let facesToArray = Array.from(faces);
  console.log(facesToArray);

  let faceGang = facesToArray.every((card) => {
    let nodeToArray = Array.from(card.classList);
    let checkClass = nodeToArray.includes("hidden");
    if (!checkClass) {
      return true;
    } else {
      return false;
    }
  });

  if (faceGang === true) {
    document.querySelector("h2").innerText = "WOOHOO! THE CARDS MATCH UNLIKE YOUR SOCKS!";
  } else {
    document.querySelector("h2").innerText = "TRY AGAIN! YOU ARE ALREADY FORGETFUL";
  }

  return faceGang;
}

//function for when you win! reset the board and say the player wins

//button for the replay
