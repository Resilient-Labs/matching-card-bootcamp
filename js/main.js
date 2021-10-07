//array of the game objects with name values and picture path for each object
const cardArray = [
  {
    name: "confusedDanny",
    img: "img/confusedDanny.png",
  },

  {
    name: "confusedDanny",
    img: "img/confusedDanny.png",
  },

  {
    name: "frankDanny",
    img: "img/frankDanny.png",
  },

  {
    name: "frankDanny",
    img: "img/frankDanny.png",
  },

  {
    name: "marioDanny",
    img: "img/marioDanny.png",
  },

  {
    name: "marioDanny",
    img: "img/marioDanny.png",
  },

  {
    name: "noglassesDanny",
    img: "img/noglassesDanny.png",
  },

  {
    name: "noglassesDanny",
    img: "img/noglassesDanny.png",
  },

  {
    name: "teddyDanny",
    img: "img/teddyDanny.png",
  },

  {
    name: "teddyDanny",
    img: "img/teddyDanny.png",
  },
]

//shuffling cards: -.5 to 0 -> ascending order | 0 - no change | 0 to .5 <- descending order
cardArray.sort(() => Math.random() - 0.5)

// stores the 2 chosen cards(name and element ID), and the matching pairs
const div = document.querySelector(".container")
const result = document.querySelector("#result")
let chosenCards = [] // stores 2 chosen cards (their name)
console.log(chosenCards)
let chosenCardsId = [] // stores the IDs of the card elements
let cardsMatched = [] // stores the matching pairs

// sets up the HTML images for each of the cards in the cardArray
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    let card = document.createElement("img") // creates an image element
    card.setAttribute("src", "img/card.png") // sets the images to facedown file
    card.setAttribute("id", i) // gives them a unique id 0-9
    card.addEventListener("click", flipCard) // gives each card a click listener
    div.appendChild(card) // adds those cards to the .container div element
  }
}

function checkForMatch() {
  cards = document.querySelectorAll("img") // array of all the cards
  const firstChoice = chosenCardsId[0] // puts the id of the first card 
  const secondChoice = chosenCardsId[1] // puts the id of the second card 
  if (firstChoice == secondChoice) { // same ID, same card
    cards[firstChoice].setAttribute("src", "img/card.png")
    cards[secondChoice].setAttribute("src", "img/card.png")
    alert("You clicked the same image!")
  } else if (chosenCards[0] === chosenCards[1]) { // if the name is the same, they match
    alert("We have a match")
    cards[firstChoice].setAttribute("src", "img/blank.png")
    cards[secondChoice].setAttribute("src", "img/blank.png")
    cardsMatched.push(chosenCards)
  } else { // if not the same card, no match, then they weren't matching
    cards[firstChoice].setAttribute("src", "img/card.png")
    cards[secondChoice].setAttribute("src", "img/card.png")
    alert("No match here ")
  }
  // reset the 2 chosen cards
  chosenCards = []
  chosenCardsId = []
  result.textContent = cardsMatched.length
  if (cardsMatched.length === cardArray.length / 2) {
    result.textContent = "Congratulations! You found them all "
    cardsMatched = []
    cards.forEach(card => card.setAttribute("src", "img/card.png"))
  }
}

function flipCard() {
  let cardID = this.getAttribute("id")
  chosenCards.push(cardArray[cardID].name)
  chosenCardsId.push(cardID)
  this.setAttribute("src", cardArray[cardID].img)
  if (chosenCards.length === 2) {
    setTimeout(checkForMatch, 500)
  }
}

createBoard();
