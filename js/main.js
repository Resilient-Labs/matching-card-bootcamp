let isOpen = false;
let currentCard = [];
let previousCard = [];
const images1 = [
  "images/frog.png",
  "images/pumpkin.png",
  "images/skeleton.png",
  "images/cat.png",
  "images/spider.png",
];
const images2 = [
  "images/frog.png",
  "images/pumpkin.png",
  "images/skeleton.png",
  "images/cat.png",
  "images/spider.png",
];

function randomize(images) {
  return images[Math.floor(Math.random() * images.length)];
}
const cards = document.querySelectorAll(".card");
for (let i = 0; i < cards.length; i++) {
  let card = cards[i];
  card.addEventListener("click", function () {
    if (isOpen) {
      previousCard = [...currentCard];
      currentCard[0] = randomize(images1);
      currentCard[1] = i;
      isOpen = false;
      if (currentCard[0] !== previousCard[0]) {
        currentCard[0] = "images/back.png";
        previousCard[0] = "images/back.png";
      } else if (currentCard.length && previousCard.length) {
        images1.splice(images1.indexOf(currentCard[0], 1), 1);
        images2.splice(images2.indexOf(previousCard[0], 1), 1);
      }
    } else {
      currentCard[0] = randomize(images1);
      currentCard[1] = i;

      isOpen = true;
    }

    console.log(currentCard, "currentCard");
    console.log(previousCard, "previousCard");
    console.log(isOpen, "isOpen");
    this.innerHTML = `<img src="${currentCard[0]}" />`;
    if (previousCard.length) {
      previousHTMLCard = document.querySelectorAll(".card")[previousCard[1]];
      previousHTMLCard.innerHTML = `<img src="${previousCard[0]}" />`;
    }
  });
}
