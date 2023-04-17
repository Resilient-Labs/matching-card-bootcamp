const gameBoard = document.getElementById("game-board");
const cards = [
  { id: 1, image: 'path/to/image1.png' },
  { id: 2, image: 'path/to/image2.png' },
  { id: 3, image: 'path/to/image3.png' },
  { id: 4, image: 'path/to/image4.png' },
  { id: 5, image: 'path/to/image5.png' },
  { id: 6, image: 'path/to/image6.png' },
];
const shuffledCards = shuffle(cards.concat(cards));

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function createCard(card) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.dataset.id = card.id;
  cardElement.style.backgroundImage = `url(${card.image})`;
  cardElement.addEventListener("click", onCardClick);
  return cardElement;
}

function onCardClick(e) {
  // Implement game logic here
}

shuffledCards.forEach(card => {
  const cardElement = createCard(card);
  gameBoard.appendChild(cardElement);
});
