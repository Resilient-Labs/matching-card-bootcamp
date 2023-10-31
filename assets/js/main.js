document.querySelector("#startGame").addEventListener("click", playGame);

let cards = [];

let frontCard, secondCard;
let scoreTotal = 0;

function playGame() {
  fetch("./assets/cards.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //original cards in cards.json file, is being duplicating in the array below using "...data, ...data"
      //...data flattens the data array which means it takes a 2-d array and make it a 1-d array ex: instead of this [['h']] will become this ['h'] a 1-d array
      // found the randomizer for cards .sort... on stack overflow: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
      cards = [...data, ...data].sort(() => 0.5 - Math.random());

      let clickableCards = document.querySelectorAll(".cards");

      clickableCards.forEach((card) => {
        card.addEventListener("click", selectedCard);
        let cardFront = card.querySelector(".card-img-front");

      });

      console.log(cards);
    });


}

function selectedCard() {
  console.log("hi oni");
}
