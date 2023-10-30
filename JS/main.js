const cards = document.querySelectorAll('.card')

const classImages =['flower','flower1', 'flower2', 'flower3','flower4','flower','flower1', 'flower2', 'flower3','flower4'] // we created a class here for images

//for each card we will assign 5 random classes , each pair will have same class.

//for each time card is flipped, we have to check if cards match. and even if they don't match, we still need to flip car, and we need to connect the src with the class. 

//when two cards are flipped, in order to find match, another card will need to be flipped. And to determine that you would need to do two clicks.(keep track of clicks & reset to 0 after two clicks)

//if cards don't match, card will still need to be flipped back//
 
//I would want to use the reset button to be able to shuffle the cards so then I can restart the matching game process all over again 

// if all the cards do match, then i want to get an alert that I won. then can I restart it if I want to start the game over

cards.forEach(cards => { // this a for each where it will go through images & randomize the pictures 
  let randomPos = Math.floor(Math.random() * classImages.length);
  cards.querySelector('img').classList.add(`${classImages[randomPos]}`)
  classImages.splice(randomPos,1)
});



cards.forEach(card => card.addEventListener('click', flipCard));


let click = 0 // 

function flipCard(){ 
this.querySelector('img').classList.add('flipped')// everytime a card is flipped we are adding a class called flipped. 
let currentCard= this.querySelector('img').classList[0]
this.querySelector('img').src= `image/${currentCard}.jpeg`
//console.log(currentCard)
click += 1
if (click === 2){
  checkForMatch()
  click = 0
} 
}

let matches = 0

function checkForMatch(){
let oneCard = document.querySelectorAll('.flipped')[0]// targeting all elements that have the class flipped (2 elements) returns the two elements and targeting index 0 & index 1 to get both cards. & classlist[0] is to get the flowers.
let secondCard = document.querySelectorAll('.flipped')[1]
console.log(secondCard)
console.log(oneCard)
oneCard.classList.remove('flipped')// to unlfip the first card 
secondCard.classList.remove('flipped')// to unflip the second card 
if (oneCard.classList[0] !== secondCard.classList[0]){ // here it's saying if first card isn't a
  oneCard.src = 'image/card.png'                   // a match to second , the setime out will 
  secondCard.src= 'image/card.png'             // allow user to see the card for a little before
  console.log('not a match')                  // it flips over 
  setTimeout(() => {
   flipCard()
 },1000)

 }else {
  matches += 1
  console.log('is a match')
 }
 if (matches === 5){ // writing a conditional to say if user gets all 5 matches, they won
  alert ('You Have Won')
 }
  console.log('hello')
}







//how to use settime out to delay the card before it flips back to check the match 










// re-did the project with the help of Ellie 