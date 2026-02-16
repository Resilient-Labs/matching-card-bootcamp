// psuedo code
// nine types of bread to match; so total 18 cards
// 6 x 3 grid shown
// user sees background card cover unflipped first
// user upon click see image of bread e.g bagel
// after clicking two images and they are not a match go back to unflipped state
// but if two images are a match, stay in flipped state
// score++ when two images are a match
// reset button which randomizes cards again, reset board, and turns all cards back to unflipped state

// dom elements
const grid = document.querySelector(".grid-container");
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;
const winMessage = document.querySelector(".win-message");

// show score
document.querySelector(".score").textContent = score;

// load cards data from JSON
fetch("./data/cards.json")
  .then((res) => res.json())
  .then((data) => {
    cards = [...data, ...data]; // duplicate to create pairs
    goShuffle();
    goGenerate();
  });

// shuffle cards array using Fisher-Yates algorithm
function goShuffle() {
  let i = cards.length;
  while (i !== 0) {
    let irandom = Math.floor(Math.random() * i);
    i--;
    [cards[i], cards[irandom]] = [
      cards[irandom],
      cards[i],
    ];
  }
}

// generate card elements in the grid
function goGenerate() {
  grid.innerHTML = ""; // clear old cards
  for (let card of cards) {
    const cardBox = document.createElement("div");
    cardBox.classList.add("card");
    cardBox.setAttribute("data-name", card.name);

    cardBox.innerHTML = `
      <div class="front">
        <img class="front-image" src="${card.image}">
      </div>
      <div class="back"></div>
    `;

    cardBox.addEventListener("click", flipCard);
    grid.appendChild(cardBox);
  }
}

// handle flipping logic
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  document.querySelector(".score").textContent = score;
  lockBoard = true;

  checkForMatching();
}

// check if two flipped cards match
function checkForMatching() {
  const isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? stayFlipped() : unflipCards();
}

// if match then disable flipping on those cards
function stayFlipped() {
  score++;  
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  goReset();
  const allFlipped = document.querySelectorAll(".card.flipped").length === cards.length;
  if (allFlipped) {
    winMessage.style.display = "block";
  }
}

// if not a match then flip back after a short delay
function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    goReset();
  }, 1500);
}

// reset temp state after each turn
function goReset() {
  [firstCard, secondCard, lockBoard] = [null, null, false];
}

// restart game
function restart() {
  goReset();
  goShuffle();
  score = 0;
  document.querySelector(".score").textContent = score;
  goGenerate();
  winMessage.style.display = "none";
}

// Citation:
// Reference from tutorial: https://www.youtube.com/watch?v=xWdkt6KSirw