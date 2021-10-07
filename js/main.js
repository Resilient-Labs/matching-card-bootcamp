//array of the game objects with name values and picture path for each object
const cardArray = [
  {
    name: "gon",
    img: "images/gon.png",
  },

  {
    name: "gon",
    img: "images/gon.png",
  },

  {
    name: "killua",
    img: "images/killua.png",
  },

  {
    name: "killua",
    img: "images/killua.png",
  },

  {
    name: "hisoka",
    img: "images/hisoka.png",
  },

  {
    name: "hisoka",
    img: "images/hisoka.png",
  },

  {
    name: "chrollo",
    img: "images/chrollo.png",
  },

  {
    name: "chrollo",
    img: "images/chrollo.png",
  },

  {
    name: "leorio",
    img: "images/leorio.png",
  },

  {
    name: "leorio",
    img: "images/leorio.png",
  },
];

//sorting array order 
cardArray.sort(() => 0.5 - Math.random());

const section = document.querySelector(".container");
const result = document.querySelector("#result");
let card = document.createElement("img");
let chosenCards = [];
console.log(chosenCards);
let chosenCardsId = [];
let cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    let card = document.createElement("img");
    card.setAttribute("src", "images/card.png");
    card.setAttribute("id", i);
    card.addEventListener("click", flipCard);
    section.appendChild(card);
  }
}

function checkForMatch() {
   let cards = document.querySelectorAll("img");
  const firstChoice = chosenCardsId[0];
  const secondChoice = chosenCardsId[1];
  if (firstChoice == secondChoice) {
    cards[firstChoice].setAttribute("src", "images/card.png");
    cards[secondChoice].setAttribute("src", "images/card.png");
    alert("You clicked the same image!");
  } else if (chosenCards[0] === chosenCards[1]) {
    alert("We have a match");
    cards[firstChoice].setAttribute("src", "images/blank.png");
    cards[secondChoice].setAttribute("src", "images/blank.png");
    cardsWon.push(chosenCards);
  } else {
    cards[firstChoice].setAttribute("src", "images/card.png");
    cards[secondChoice].setAttribute("src", "images/card.png");
    alert("No match here ");
  }
  chosenCards = [];
  chosenCardsId = [];
  result.textContent = cardsWon.length;
  if (cardsWon.length === cardArray.length / 2) {
    result.textContent = "Congratulations! You found them all ";
    cardsWon = [];
    cards.forEach(element => element.setAttribute('src', 'images/card.png'))
    
  }
}

function flipCard() {
  let cardID = this.getAttribute("id");
  chosenCards.push(cardArray[cardID].name);
  chosenCardsId.push(cardID);
  this.setAttribute("src", cardArray[cardID].img);
  if (chosenCards.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

createBoard();
