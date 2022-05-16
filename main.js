const container = document.querySelector('.container')
const cards = document.querySelectorAll('.card')

// when the game the starts we randomize all 10 cards 
function generateRandomColor() {
  const colors = ['red', 'blue', 'green', 'purple', 'brown']
  return colors[Math.floor(Math.random() * colors.length)]
}
//assignColors is an Object 
function assignColors() {
  const assigned = {}
  for (let i = 0; i < cards.length; i++) {
    // color is the return you get from the function.. When assigning a function to a variable, the variable is the return.. 
    let color = generateRandomColor()
    // turns assigned[color]  to assigned[green] etc

    // When looking for a value for a variable that is a variable you have to use brackets
    // (assigned[color] will ask if its greater than ir equal to 2 
    // this assigns the variable color to a new color
    while (assigned[color] >= 2) color = generateRandomColor()
    // while assigned[blue] >= 2, generate a new color

    // while this condition is true, do this thing
    // turnary operator that says if red = red then it will \runthrow untul the 8 colors are paired up.  sx
    // This is how you assigns the value to this property for this object  
    assigned[color] = assigned[color] ? assigned[color] + 1 : 1
    // is this statement true? (before the question mark) is the color property in the object yet. if not, add one. if not assign it to one. 
    // if else statement condensed into one line ^ 

    cards[i].classList.add(color)
   
  }
}
    
  // Line 27 assign a value to a color property in assigned object
//     if(assigned[blue] === true){
//       assigned[blue] += 1 ======>>> add 1 to already existing property
//     } else {
//       assigned[blue] = 1
//     }
    
//     if(assigned[purple] === true){
//       assigned[purple] += 1
//     } else {
//       assigned[purple] = 1 ======>>> set new property equal to 1 
//     }

//     if(assigned.purple === true){
//       assigned.purple += 1
//     } else {
//       assigned.purple = 1 ======>>> set new property equal to 1 
//     }
    
    


// const assigned = {
//   "red" : 0 + 1,
//   "blue" : 1 + 1, because it already exists
//   "green" : 2,
//   "brown" : 1 + 1 = 2,
//   "purple": 1
// }



// function 68 is to flip the cards enters an if statement of does a card have the class hidden and 
// if so check to see if the other card has the class of hidden and if so then it will see 

//This will target the divs that's in side of the container
container.addEventListener('click', flipCard)

// we make the card nothing
let prevFlippedCard = null

function flipCard(event) {
  if (event.target.classList.contains('hidden')) {
    //toggling takes the class off
    event.target.classList.toggle('hidden')
    // line 84 reasigns the value for the the prevFlippedCard to the element we are clicking on
    // line 83 check to see if the prev flipped card is a match to the clicked element
    // when a variable is by itself in the ternary, it checks to see if the variable has a value
    prevFlippedCard
      ? checkMatch(prevFlippedCard, event.target)
      : prevFlippedCard = event.target
  }
}

    // line 81 will cycle through the actual matching of the cards by     
function checkMatch(firstCard, secondCard) {
    if (firstCard.className !== secondCard.className) {
    // runnings the function or code after a certain amount of time, 1000 millasecs
    setTimeout(()=>{
       firstCard.classList.toggle('hidden')
      secondCard.classList.toggle('hidden') 
    },1000)               
  }
  

    // after line 84  is assigned, this reassigns the value to null
  prevFlippedCard = null
}


    // calls the function right at website load
assignColors() 


















// // create 10 divs in pairs of 2 CHECK
// // create a class for each div
// // create a class for each pair of div
// // add a start button that begins the game and randomizes the divs and the timer starts
// // so that we can toggle with an eventlisten (click)) for each div
// // make an if else stament for when each pair matches
// // check to see if the div is clicked
// // check to see if the div is a match
// // if a pair is not flipped then the cards reset aside from the 'flipped' cards
// // when a pair matches we make it so that the matching pair stays "flipped" insert the class match using a condtional
// // if they al are flipped then we make a popup that the game ends!
// // documentquerySelectr('.back').style.background='url(src=""))'
// // const randomNumber = Math.floor(Math.random() * 10);

// // document.querySelectorAll('.card')

// let cardsOne = document.querySelectorAll(".matchOne");
// cardsOne.forEach((el) => el.addEventListener("click", flipCard));
// function flipCard() {
//   this.style.background = "#BEDEF9";
//   this.classList.add("selected");
//   checkForMatch();
//   handleClick()
// }

// let cardsTwo = document.querySelectorAll(".matchTwo");
// cardsTwo.forEach((el) => el.addEventListener("click", flipCardTwo));
// function flipCardTwo() {
//   this.style.background = "#ffe6ee";
//   this.classList.add("selected");
//   checkForMatch();
// }

// let cardsThree = document.querySelectorAll(".matchThree");
// cardsThree.forEach((el) => el.addEventListener("click", flipCardThree));

// function flipCardThree() {
//   this.style.background = "#51AD43";
//   this.classList.add("selected");
//   checkForMatch();
// }

// let cardsFour = document.querySelectorAll(".matchFour");
// cardsFour.forEach((el) => el.addEventListener("click", flipCardFour));
// function flipCardFour() {
//   this.style.background = "#DCD0FF";
//   this.classList.add("selected");
//   checkForMatch();
// }

// let cardsFive = document.querySelectorAll(".matchFive");
// cardsFive.forEach((el) => el.addEventListener("click", flipCardFive));
// function flipCardFive() {
//   this.style.background = "#F5E7B2";
//   this.classList.add("selected");
//   checkForMatch();
// }

// let counter = 0;

// function checkForMatch() {
//   let cardResults = document.querySelectorAll(".card");

//   counter += 1;
//   if (counter === 2) {
//     cardResults.forEach((el) => {
//       if (el.classList.contains("selected")) {
//         // we went to check to see is pairs
//       } else {
//         // if they dont match they revert back to white. (JavaScript transition?)
//         el.style.background = "#ffffff"
//         // counter back to zero
//         counter = 0;
//         // take away selected class
//         el.classList.remove("selected");
        
//       }
//     });
//   }
// }


// // first card null (blank). a Variable
// let firstCard = null

// function handleClick(e){
//   let clickedCard = e.target // may have to mess around with e.target

//   // if clickCard is already faced up, do nothing, and exit function. Other wise flip it faced up.

//   // if there is already a card faced up in this round (if firsts cards is not null), than compare, clicked card with faced up card. If they dont match, than flip back faced down. In any case set first card back to null.
//   // if all the cards are selected, game over

//   // if not, than click card is the first faced up card, variable
//   // first card === clicked card

// }





// // let flippedCardOne = 
// // let flippedCardTwo = 



// // which cards are clicked on 
// // which cards are faced up or faced down
// // when do we check for a match



// // !e.target.classList.contains("mark")

// //make sure they can't flip the same card, nothing happens after. keep first flipped card flipped. 
// // second card, if they match, keep them flipped. if they don't, unflip them. 

// // function shuffle() {
// //   cards.forEach(card => {
// //     let ramdomPos = Math.floor(Math.random() * 10
// //     card.style.order = ramdomPos;
// //   });
// // }




// // if (cardResults[i].classList.contains('selected')){
// //      console.log('something')
// //  }

// // for ( let i = 0; i < cardResults.length; i++ ){

// //   function Memoryboard(){
// //     for (let i =0;) i< cardArray.lenggth;i++){
// //         var card =document.createElement('img')
// //         card.setAttribute('src', 'images/blank.jpeg'
// //         card.addEventListener('click', flipcard)
// //     }
// // }

// // function checkForMatch(){
// // let cards  = document.querySelectorAll('.card').forEach(el => el.addEventListener('click',)

// // if ( function [0]) === function[1]){
// //     alert['You found a match']
// //     card [flipfunction ('src', 'imgxyz')
// //     card [flipfunction ('src', 'imgxyz')
// //     cardsWon.push(cardsChosenfunction)
// // }else {
// //     cards {id}.flipcard('src', front img)
// //     cards {id}.function('src', front img)
// //     alert('Sorry, try again')
// // }

// //   if (cards.length ==2){
// //     setTimeout(checkForMatch, 500)
// // }

// // Randonmize Cards
// // cards.sort (()=> 0.5 - Math.random ())

// const result = document.querySelector('#result')
// // var cardsWon= []

// // result.textContent = cards.length
// //   if(cardsWon.length ===cards.length/2){
// //     result.textContent = 'You found all the matches!'

// // cards.forEach(card => card.addEventListener('click', flipCard))


