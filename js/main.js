const start = document.querySelector(".startButton");
const deck = document.querySelector(".gameboard");
const x = document.querySelector(".close");

let cardsFlipped = 0;

const displayCards = (e) => {
  start.innerText = "Reset";

  reset();

  let cards = 10;
  let obj = {};
  while (Object.keys(obj).length < 5) {
    let randomNum = Math.ceil(Math.random() * 10); // this will give us random numbers, between 1 and 10
    if (!obj["hasOwnProperty"](randomNum)) {
      // if the obj does not have its own property of randomNum, we give it one and assign it a value of 0;
      obj[randomNum] = 0;
    }
  }
  while (deck.children.length < cards) {
    const randomIndex = Math.floor(Math.random() * 5); // 2
    const foundNumAtRandomIndex = Object.keys(obj)[randomIndex]; // Object.keys(obj) returns an array containing the porperty names of obj. [2,7,9,4,5,3,1,8,6,10] randomIndex = 2, 9

    if (obj[foundNumAtRandomIndex] !== 2) {
      obj[foundNumAtRandomIndex] = obj[foundNumAtRandomIndex] + 1 || 1;
      let card = document.createElement("img");
      let container = document.createElement("section");
      container.setAttribute("class", "card");
      card.src = "./images/card-background.png";
      card.setAttribute("data-image", foundNumAtRandomIndex);
      card.setAttribute("data-status", "");
      container.appendChild(card);
      deck.appendChild(container);
    }
  }
};

function flip(event) {
  if (
    event.target.attributes["data-status"].value === "match" ||
    event.target.attributes["data-status"].value === "clicked" ||
    cardsFlipped === 2
  ) {
    return;
  }
  if (event.target.localName === "img") {
    let front = event.target.attributes["data-image"].value;
    event.target.src = `./images/${front}.webp`;
    event.target.setAttribute("data-status", "clicked");
    cardsFlipped++;
    if (cardsFlipped === 2) {
      const results = document.querySelectorAll("[data-status='clicked']");
      if (results) {
        const [guess1, guess2] = results;
        if (guess1.src === guess2.src) {
          guess1.setAttribute("data-status", "match");
          guess2.setAttribute("data-status", "match");
          let matches = document.querySelector(".matches").textContent;
          matches = Number(matches) + 1;
          document.querySelector(".matches").textContent = matches;
          modal();
          cardsFlipped = 0;
        } else {
          setTimeout(() => {
            guess1.setAttribute("data-status", "");
            guess2.setAttribute("data-status", "");
            guess1.src = "./images/card-background.png";
            guess2.src = "./images/card-background.png";
            cardsFlipped = 0;
          }, 600);
        }
      }

      let moves = document.querySelector(".moves").textContent;
      moves = Number(moves) + 1;
      document.querySelector(".moves").textContent = moves;
    }
  }
}
function modal() {
  if (Number(document.querySelector(".matches").textContent) === 5) {
    document.getElementById("myModal").style.display = "block";
  }
}
function reset() {
  cardsFlipped = 0;
  document.querySelector(".matches").textContent = 0;
  document.querySelector(".moves").textContent = 0;
  deck.innerHTML = "";
}
function close() {
  document.getElementById("myModal").style.display = "none";
}
deck.addEventListener("click", flip);
start.addEventListener("click", displayCards);
x.addEventListener("click", close);
