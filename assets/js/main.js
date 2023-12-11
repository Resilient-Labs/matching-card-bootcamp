document.querySelector("#startGame").addEventListener("click", playGame);

let cards = [];

let firstCard, secondCard;
let scoreTotal = 0;

let totalMoves = 0;

let activeGame = true;

function playGame() {
  resetGame();
  fetch("./assets/cards.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // Credit -  stack overflow: https://stackoverflow.com/questions/2450954how-to-randomize-shuffle-a-javascript-array
      cards = [...data, ...data].sort(() => 0.5 - Math.random());

      totalMoves = data.length;

      let clickableCards = document.querySelectorAll(".cards");

      for( let i = 0; i < cards.length; i++){
        let card = clickableCards[i];
        card.addEventListener("click", selectedCard);

        let cardFront = card.querySelector(".card-img-front")
        cardFront.id = cards[i].name
        let cardImg = cardFront.querySelector(".card-img");
        cardImg.src = cards[i].image;
      }

      console.log(cards);
    });


}

function selectedCard(e) {

  console.log('INSELECTED CARDS')

  if (totalMoves == 0 && !activeGame) {
    console.log("totalMoves == 0");
    return;
  }

  //Check that front card is not set
  if(firstCard === undefined){
    console.log("firstCard === undefined");
    firstCard = e.currentTarget;
    firstCard.id = "flip"
  }
  else if (secondCard == undefined){
    console.log(" else LINE 58");
    secondCard = e.currentTarget;
    secondCard.id = "flip";
    checkIfWon();
    
  }
}

function checkIfWon(){
  if (secondCard.querySelector(".card-img-front").id == firstCard.querySelector(".card-img-front").id) {

    firstCard = undefined;
    secondCard = undefined;
    totalMoves--;

    if (totalMoves == 0) {
      document.querySelector("#winner").innerText =
        "Looney Baby Wins, Thats all Folks!";
      scoreTotal++;
      document.querySelector(".score").innerText = scoreTotal;
    }

  } else {
    resetSelectedCard();
  }
}

function resetSelectedCard(){

  activeGame = false;

  setTimeout(() => {
    firstCard.id = "";
    secondCard.id = "";
    firstCard = undefined;
    secondCard = undefined;
    activeGame = true;
  }, 1000);

}

function resetGame(){
  
  document.querySelector("#winner").innerText = "";

  let resetCards = document.querySelectorAll(".cards") 
  resetCards.forEach((card)=> 
    card.id = ""
  )

}
