// create a list of items with duplicates - should be even
const list = [
  "image0.png",
  "image0.png",
  "image1.png",
  "image1.png",
  "image2.png",
  "image2.png",
  "image3.png",
  "image3.png",
  "image4.png",
  "image4.png",
  "image5.png",
  "image5.png",
];
const TOTAL_CARD_COUNT = list.length;

// shuffle list - used Fisher-Yates algorithm: https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/
const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};
const gameBoard = shuffle(list);

// create board of cards in the DOM
for (let i = 0; i < TOTAL_CARD_COUNT; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.onclick = () => handleCardClick(card, i);
  document.querySelector("section").appendChild(card);
}

let lastFlipped = {};
let totalMatches = 0;
let lockBoard = false;
let points = 0;

function handleCardClick(card, index) {
  // prevent double-clicking the same card
  if (card.classList.contains("active")) return;

  // prevent clicking more than 2 cards while matches are being checked
  if (lockBoard) return;

  // flip card
  card.classList.add("active");
  card.style.backgroundImage = `url('./images/${gameBoard[index]}')`;

  if (!lastFlipped.card) {
    lastFlipped = { index, card };
  } else {
    const firstCard = lastFlipped.card;

    // check if match
    lockBoard = true;
    setTimeout(() => {
      if (gameBoard[lastFlipped.index] === gameBoard[index]) {
        // disable click + leave flipped
        points++;
        document.getElementById("points").innerText = points;
        totalMatches++;
        firstCard.onclick = null;
        lastFlipped = {};

        // check if game is complete
        if (totalMatches === TOTAL_CARD_COUNT / 2) {
          document.getElementById("results").innerText = "YOU WIN!";
        }
      } else {
        firstCard.classList.remove("active");
        firstCard.style.backgroundImage = "unset";
        card.classList.remove("active");
        card.style.backgroundImage = "unset";
        lastFlipped = {};
      }
      lockBoard = false;
    }, 500);
  }
}
