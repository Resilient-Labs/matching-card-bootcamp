// Grab all of the sections that match with the Memory Cards.
const userChoice = document.querySelectorAll(".userChoice");

let images = ['img/chief.jpeg', 'img/leon.png', 'img/giraffe.jpeg', 'img/download.jpeg', 'img/phone.jpeg', 'img/soccerball.png'];
let firstCard = "", secondCard = "";
let targetArray = images.concat(images);

shuffle(targetArray);

const cardMap = {
  "topOne": targetArray[0],
  "topTwo": targetArray[1],
  "topThree": targetArray[2],
  "topFour": targetArray[3],
  "midOne": targetArray[4],
  "midTwo": targetArray[5],
  "midThree": targetArray[6],
  "midFour": targetArray[7],
  "botOne": targetArray[8],
  "botTwo": targetArray[9],
  "botThree": targetArray[10],
  "botFour": targetArray[11]
}
console.log(targetArray);
userChoice.forEach(el => {
  el.addEventListener('click', event => {
    console.log(el);
    if(el.classList.contains("flip"))return;
    event.target.querySelector('img').src=cardMap[event.target.id];
    if(firstCard === "") {
      firstCard = event.target.id;
      el.classList.add("flip");
    } else {
      secondCard = event.target.id;
      el.classList.add("flip");
      matched();
    }
  });
});
function matched () {
  if(cardMap[firstCard] === cardMap[secondCard]) {
    console.log("win");
  } else {
    const cardOne = document.querySelector(`#${firstCard}`);
    const cardTwo = document.querySelector(`#${secondCard}`);
    cardOne.querySelector('img').src = "";
    cardTwo.querySelector('img').src = "";
    cardOne.classList.remove("flip");
    cardTwo.classList.remove("flip");
    console.log('lose')
  }
  firstCard = "";
  secondCard = "";
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}