const cards = document.querySelectorAll('.Card')
function shuffleCards(){
  let person1 = 'JS', 
  person2 = 'KC',
  person3 = 'KS',
  person4 = 'QC',
  person5 = 'QD',
  person6 = 'QS',
  peopleNames = [person1, person2, person3, person4, person5, person6];
  
  peopleNames = peopleNames.concat(peopleNames).sort(() => Math.random() - 0.5);

  cards.forEach((el , i) => {
    el.dataset.value = peopleNames[i]
    console.log("dataset value = " + el.dataset.value)
  })
}

shuffleCards()

// get all of the cards
// const cards = document.getElementsyClassName('Card')

let arrImg = [
  'JS.png',
  'KC.png',
  'KS.png',
  'QC.png',
  'QD.png',
  'QS.png',
]
cards.forEach(el=>el.addEventListener('click',checkForMatch))

 // using data-value to store city name in the HTML 
  // then use if statements in the matching function to check if data values of clicked elements are the same.
let clicked = []
let count = 0
function checkForMatch(click) {
  click.target.src = `imgs/${click.target.dataset.value}.png`
// store clicked element in an array 
  clicked.push(click.target)
if (clicked.length===2){
  if(clicked[0].dataset.value=== clicked[1].dataset.value && clicked[0].classList !== clicked[1].classList){
    clicked.forEach(el => el.removeEventListener('click', checkForMatch));
    count ++
  } else {
    setTimeout(() => {
      clicked.forEach(el => el.src = `imgs/default.png`)
      console.log('changing')
      }, 800);
    
    console.log('change')
  }
 setTimeout(() => {clicked = [] }, 801) 
 } // else if(clicked.length > 2) {
//     clicked.forEach(el => {
//         el.src = 'imgs/default.png'
//     });
//     clicked = [];
// }
  console.log("clicked array" ,clicked)
  console.log(click.target.dataset.value)
if(count === 6){
  setTimeout(() => {
    document.querySelector('#message').innerHTML = ('YOU WIN')
  }, 100)

}
}
  
const reset = document.getElementById('reset'); 
reset.addEventListener('click', () => location.reload());

/* Flip Animation Experiment*/


// check length of array 
// if array = two we check if the length is two. 
// if its two we run a compare function
// if theyre the same then we disable does two and add one to a counter 
// when counter is a certain length the game is over 


//define a card and set the innerHTML of that card to one of the city names
    // wrap it in the function
// Define a function by putting an eventListener on each of the cards
        // expect that the value will show how many times you clicked on the console
        // keep track of how many cards we have flipped over
        // If we have 2 cards flipped over we want to check if they're equal
        // If they're not equal it would be not a match and the cards will just flip back over
        // If they are equal they stay flipped
// Define a check game over function
        // When there is no more cards the game will be over
// Write a function to shuffle the cards after





 





