//Jerry Lafume helped me with some of this Javascript
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 5;

let firstCard;
let secondCard;
let isFirstCardSet = false;
let isSecondCardSet = false;

//link text

playerLivesCount.textContent = playerLives;

// get data for cards
const getData = () => [
  // const data = getData()[
  { imgSrc: "./imgs/taco.png", name: "taco" },
  { imgSrc: "./imgs/chicken.png", name: "chicken" },
  { imgSrc: "./imgs/celery.png", name: "celery" },
  { imgSrc: "./imgs/beer.png", name: "beer" },
  { imgSrc: "./imgs/carrot.png", name: "carrot"},
  { imgSrc: "./imgs/taco.png", name: "taco" },
  { imgSrc: "./imgs/chicken.png", name: "chicken" },
  { imgSrc: "./imgs/celery.png", name: "celery" },
  { imgSrc: "./imgs/beer.png", name: "beer" },
  { imgSrc: "./imgs/carrot.png", name: "carrot"}

];

//randomize cards

const randomize = () => {
  const cardData = getData();
  console.log(cardData);
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

//create card generator function
const cardGenerator = () => {
  const cardData = randomize();
  // target html
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const frontCard = document.createElement("img");
    const backCard = document.createElement("div");
    // backCard.add('back')

    card.classList.add("card", item.name);
    frontCard.classList = "face";
    backCard.classList.add("back", item.name);
    // link to the cards.
    frontCard.src = item.imgSrc;

    //add cards to section using appendchild
    section.appendChild(card);
    card.appendChild(frontCard);
    card.appendChild(backCard);

    card.addEventListener("click", flipCard);
  });
};

function flipCard(event) {
  if (isFirstCardSet === false) {
    firstCard = event.target;
    console.log(firstCard);
    console.log(firstCard.parentElement);
    isFirstCardSet = true;
  } else if (isSecondCardSet === false && isFirstCardSet === true) {
    secondCard = event.target;
    console.log(secondCard);
    console.log(secondCard.parentElement);
    isSecondCardSet = true;
    isItAMatch();
  }

  event.target.parentElement.classList.toggle("selectCard");

  //create some thing that lets me know its the first click and
  //if the second click does not match then flip card back over
}

function isItAMatch() {
  if (firstCard.classList[1] === secondCard.classList[1]) {
    console.log("its a match");
    isFirstCardSet = false;
    isSecondCardSet = false;
    firstCard.parentElement.removeEventListener("click", flipCard);
    secondCard.parentElement.removeEventListener("click", flipCard);
  } else {
    isFirstCardSet = false;
    isSecondCardSet = false;
    if (parseInt(document.querySelector(".playerLivesCount").innerText) > 1) {
      document.querySelector(".playerLivesCount").innerText =
        parseInt(document.querySelector(".playerLivesCount").innerText) - 1;
    } else {
      alert("you are out of lives, the page is about to reload");
      location.reload()
    }
    setTimeout(() => {
      secondCard.parentElement.classList.toggle("selectCard");
      firstCard.parentElement.classList.toggle("selectCard");
    }, 500);

    console.log("not a match");
  }
}

cardGenerator();
