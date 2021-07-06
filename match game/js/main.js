//House Moses: Kim, Carlosalberto, Farrah and Gabriel
const cards = document.querySelectorAll('.card-memory')
const cardsContainer = document.querySelectorAll('.cards')
const newGame = document.querySelector('.newGame')
let form = document.querySelector('.form')

let backCard = document.querySelectorAll('.back-face');
let images = ['img/tile/blueberry.png','img/tile/blueberry.png','img/tile/coffee.png','img/tile/coffee.png','img/tile/pudding.png','img/tile/pudding.png','img/tile/raspberry.png','img/tile/raspberry.png','img/tile/strawberry.png','img/tile/strawberry.png']

const cardArray = [...document.querySelectorAll('.card-memory')]

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
//
  return array;
}

let cardsClicked = []

let count = 0

function check(){
  if (count%2 === 0){
  flip()
  }
}

function flip(){
  let flipped = document.querySelectorAll(".flipped")
  if (flipped[0].childNodes[0].src === flipped[1].childNodes[0].src){
    flipped.forEach((element) => {
      element.classList.add("matched")
      element.onclick = null
    })
    removeClassSelected(flipped)
  } else {
    setTimeout(() =>{
      removeClassSelected(flipped)
      flipped.forEach((element) => {
        element.childNodes[0].src = "img/tile/teaset.png"
      })
    }, 1000)
  }
}

function removeClassSelected(elements){
  elements.forEach((element) => {
    element.classList.remove("flipped")
  })
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
  });

  let shuffleCards = shuffle(images);
  cards.forEach((x, i) => {
    x.onclick = function(){
      if (x.classList.contains("flipped")) return
      x.childNodes[0].src = shuffleCards[i]
      // console.log(shuffleCards[i])
      count += 1
      x.classList.add("flipped")
      check()
    }
  });

  newGame.addEventListener('click', event => {
    location.reload();
      console.log("button");
    });

  // newGame.addEventListener('click', () => {
  //   cards.forEach((td) =>{
  //     td.style.background = backCard.src;
  //     console.log( td, "button submit")
  //   })
  // });