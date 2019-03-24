//select all images and assign them to cards array
let cards = document.querySelectorAll('img')
//for each image, add an event listener on click and run the flip function
cards.forEach(card => card.addEventListener('click', flip))
//make a variable for counting the amount of clicks
let click = 0;
//make a variable for the amount of matching attempts the user makes
let tries = 0;

//function to flip cards
function flip(){
  //if the image contains the class 'cat' replace the source image with black cat. classList returns a list of classes on the clicked image (within card variable) and contains method checks if that image contains specified class.
  if(this.classList.contains('frog')){
    //change image source
    this.src = 'frog.jpg'
    //increase click by done
    click++
    //add flipped class onto the card. (flipped class has no css properties, it is used later in code)
    this.classList.add('flipped')
  }else if(this.classList.contains('lion')){
    this.src = 'lion.jpg'
    click++
    this.classList.add('flipped')
  }else if(this.classList.contains('palm')){
    this.src = 'palm.jpg'
    click++
    this.classList.add('flipped')
  }else if(this.classList.contains('piggy')){
    this.src = 'piggy.jpg'
    click++
    this.classList.add('flipped')
  }else if(this.classList.contains('unicorn')){
    this.src = 'unicorn.jpg'
    click++
    this.classList.add('flipped')
  }
  //once user clicks twice, obtain only the cards with the flipped class and pass them through compare function
  if(click === 2){
    //assign flipped cards to variables to compare
    let fCard1 = document.querySelectorAll('.flipped')[0]
    let fCard2 = document.querySelectorAll('.flipped')[1]
    console.log(fCard1, fCard2)
    //pass the cards into a comparing function.
    setTimeout(checkCards, 1000, fCard1, fCard2);
    // checkCards(fCard1, fCard2)
    //increase tries after 2 clicks
    tries++;
    //set click to 0 to play this if conditional again
    click = 0;
  }

}
let matchCount = 0;
//compare function takes in two values -> the two cards
function checkCards(card1, card2){
  //remove flipped class to utilize for the next flipped cards
  card1.classList.remove('flipped')
  card2.classList.remove('flipped')
  //if card one is not the same as card two, flip them back
  if(card1.className != card2.className){
    //change cards to back image
    card1.src = 'img/horns.png'
    card2.src = 'img/horns.png'
  }
   else{
    //else keep matched up
    matchCount++;
  }
  if(matchCount === 5){
   alert(`You won! Tried matches: ${tries}`);
  }
}
