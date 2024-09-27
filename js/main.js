const cards = document.querySelectorAll('.card-memory')
const cardsContainer = document.querySelectorAll('.cards')
const newGame = document.querySelector('.newGame')
let form = document.querySelector('.form')
const cardArray = [...document.querySelectorAll('.card-memory')]

let images = ['https://cliparting.com/wp-content/uploads/2018/03/emoji-transparent-2018-12.png','https://cliparting.com/wp-content/uploads/2018/03/emoji-transparent-2018-12.png','https://cliparting.com/wp-content/uploads/2018/03/emoji-transparent-2018-9.png','https://cliparting.com/wp-content/uploads/2018/03/emoji-transparent-2018-9.png','https://cliparting.com/wp-content/uploads/2018/03/emoji-transparent-2018-6.png','https://cliparting.com/wp-content/uploads/2018/03/emoji-transparent-2018-6.png','https://cliparting.com/wp-content/uploads/2018/03/emoji-transparent-2018-21.png','https://cliparting.com/wp-content/uploads/2018/03/emoji-transparent-2018-21.png','https://cliparting.com/wp-content/uploads/2018/03/emoji-transparent-2018-2.png','https://cliparting.com/wp-content/uploads/2018/03/emoji-transparent-2018-2.png']
// lines 9-23 shuffles array taken from overstack
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
        element.childNodes[0].src = "https://cliparting.com/wp-content/uploads/2018/03/emoji-transparent-2018-13.png"
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

newGame.addEventListener('click', event => {
location.reload();
  console.log("button");
});


  let shuffleCards = shuffle(images);
  cards.forEach((x, i) => {
    x.onclick = function(){
      if (x.classList.contains("flipped")) return
      x.childNodes[0].src = shuffleCards[i]
      count += 1

      x.classList.add("flipped")

      check()
    }
  });
