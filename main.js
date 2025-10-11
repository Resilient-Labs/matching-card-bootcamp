//10 cards need to show back side pokeball
// Show all cards face-down
// Each Pokémon has a pair
//need pairs A,A,B,B,C,C,D,D,E,E
//need to mix them up
//Mix up all the cards so they’re in random order
//need a function to flip cards 
// Make an empty list called flippedCards
// set an array for fliiped cards that are matched
// If they don’t match, flip them back over after a short delay 
// When all matches are found, show “You caught them all!”
let cardsDivs = document.querySelectorAll("div");

let pics = [
  "img/pikachu.png", "img/pikachu.png",
  "img/charmander.png", "img/charmander.png",
  "img/bulbasaur.png", "img/bulbasaur.png",
  "img/squirtlee.png", "img/squirtlee.png",
  "img/evee.png", "img/evee.png"
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffle(pics);

cardsDivs.forEach((card, i) => {
  let back = document.createElement("img");
  back.src = "img/pokeball.png";
  back.style.width = "100%";
  back.style.height = "100%";
  back.style.display = "block";

  let front = document.createElement("img");
  front.src = pics[i];
  front.style.width = "100%";
  front.style.height = "100%";
  front.style.display = "none";

  card.appendChild(back);
  card.appendChild(front);
});







//my cards didnt work directly in the divs, i ran this part 
// through AI to see why it wasnt working 

// cardsDivs.forEach(card => {
//   card.addEventListener("click", () => {
//     let img = card.querySelector("img");
//     if (img.style.display === "block") return;
//     img.style.display = "block";

//     if (!firstCard) {
//       firstCard = card;
//       return;
//     }

//     secondCard = card;

//     let firstImg = firstCard.querySelector("img").src;
//     let secondImg = secondCard.querySelector("img").src;

//     if (firstImg === secondImg) {
//       firstCard = null;
//       secondCard = null;
//     } else {





let firstCard = null;
let secondCard = null;

cardsDivs.forEach(card => {
  card.addEventListener("click", () => {
    let [back, front] = card.querySelectorAll("img");
    if (front.style.display === "block") return;

    back.style.display = "none";
    front.style.display = "block";

    if (!firstCard) {
      firstCard = card;
      return;
    }

    secondCard = card;

    let firstFront = firstCard.querySelectorAll("img")[1];
    let secondFront = secondCard.querySelectorAll("img")[1];

    if (firstFront.src === secondFront.src) {
      firstCard = null;
      secondCard = null;
    } else {








        
      setTimeout(() => {
        firstCard.querySelectorAll("img")[0].style.display = "block";
        firstCard.querySelectorAll("img")[1].style.display = "none";
        secondCard.querySelectorAll("img")[0].style.display = "block";
        secondCard.querySelectorAll("img")[1].style.display = "none";
        firstCard = null;
        secondCard = null;
      }, 1000);
    }
  });
});
