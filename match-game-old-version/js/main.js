// create 10 divs in pairs of 2 CHECK
// create a class for each div
// create a class for each pair of div
// add a start button that begins the game and randomizes the divs and the timer starts
// so that we can toggle with an eventlisten (click)) for each div
// make an if else stament for when each pair matches
// check to see if the div is clicked
// check to see if the div is a match
// if a pair is not flipped then the cards reset aside from the 'flipped' cards
// when a pair matches we make it so that the matching pair stays "flipped" insert the class match using a condtional
// if they al are flipped then we make a popup that the game ends!
// documentquerySelectr('.back').style.background='url(src=""))'
// const randomNumber = Math.floor(Math.random() * 10);

// document.querySelectorAll('.card')

let cardsOne = document.querySelectorAll(".matchOne");
cardsOne.forEach((el) => el.addEventListener("click", flipCard));
function flipCard() {
  this.style.background = "#BEDEF9";
  this.classList.add("selected");
  checkForMatch();
}

let cardsTwo = document.querySelectorAll(".matchTwo");
cardsTwo.forEach((el) => el.addEventListener("click", flipCardTwo));
function flipCardTwo() {
  this.style.background = "#ffe6ee";
  this.classList.add("selected");
  checkForMatch();
}

let cardsThree = document.querySelectorAll(".matchThree");
cardsThree.forEach((el) => el.addEventListener("click", flipCardThree));

function flipCardThree() {
  this.style.background = "#51AD43";
  this.classList.add("selected");
  checkForMatch();
}

let cardsFour = document.querySelectorAll(".matchFour");
cardsFour.forEach((el) => el.addEventListener("click", flipCardFour));

function flipCardFour() {
  this.style.background = "#DCD0FF";
  this.classList.add("selected");
  checkForMatch();
}

let cardsFive = document.querySelectorAll(".matchFive");
cardsFive.forEach((el) => el.addEventListener("click", flipCardFive));
function flipCardFive() {
  this.style.background = "#F5E7B2";
  this.classList.add("selected");
  checkForMatch();
}

let counter = 0;

function checkForMatch() {
  let cardResults = document.querySelectorAll(".card");

  counter += 1;
  if (counter === 2) {
    cardResults.forEach((el) => {
      if (el.classList.contains("selected")) {
        // we went to check to see is pairs
      } else {
        // if they dont match they revert back to white. (JavaScript transition?)
        el.style.background = "#ffffff"
        // counter back to zero
        counter = 0;
        // take away selected class
        el.classList.remove("selected");
        
      }
    });
  }
}

// if (cardResults[i].classList.contains('selected')){
//      console.log('something')
//  }

// for ( let i = 0; i < cardResults.length; i++ ){

//   function Memoryboard(){
//     for (let i =0;) i< cardArray.lenggth;i++){
//         var card =document.createElement('img')
//         card.setAttribute('src', 'images/blank.jpeg'
//         card.addEventListener('click', flipcard)
//     }
// }

// function checkForMatch(){
// let cards  = document.querySelectorAll('.card').forEach(el => el.addEventListener('click',)

// if ( function [0]) === function[1]){
//     alert['You found a match']
//     card [flipfunction ('src', 'imgxyz')
//     card [flipfunction ('src', 'imgxyz')
//     cardsWon.push(cardsChosenfunction)
// }else {
//     cards {id}.flipcard('src', front img)
//     cards {id}.function('src', front img)
//     alert('Sorry, try again')
// }

//   if (cards.length ==2){
//     setTimeout(checkForMatch, 500)
// }

// Randonmize Cards
// cards.sort (()=> 0.5 - Math.random ())

// const result = document.querySelector('#result')
// var cardsWon= []

// result.textContent = cards.length
//   if(cardsWon.length ===cards.length/2){
//     result.textContent = 'You found all the matches!'

// cards.forEach(card => card.addEventListener('click', flipCard))

// THIS IS THE FUNCTION SHUFFLE
// function shuffle() {
//   cards.forEach(card => {
//     let ramdomPos = Math.floor(Math.random() * 10;
//     card.style.order = ramdomPos;
//   });
// }
