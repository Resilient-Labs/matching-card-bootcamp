//selects all images and assigns them to cards array
let cards = document.querySelectorAll('img')
//for each image, add an event listener on click and run the flip card function
cards.forEach(card => card.addEventListener('click', flipCards))
// variable for counting the clicks
let click = 0;
// variable for the matching attempts the user makes
let attempts = 0;

//function to flip the cards
function flipCards(){
// classList returns a list of classes on the clicked image and contains method checks if image contains specified class.
  if(this.classList.contains('debut')){
    //change img of debut album
    this.src = 'image/debut.jpg'
    //increase click by 1
    click++
    //add flipped class to the card.
    this.classList.add('flipped')
  }else if(this.classList.contains('post')){
    this.src = 'image/post.jpg'
    click++
    this.classList.add('flipped')
  }else if(this.classList.contains('medulla')){
    this.src = 'image/medulla.jpg'
    click++
    this.classList.add('flipped')
  }else if(this.classList.contains('biophilia')){
    this.src = 'image/biophilia.jpg'
    click++
    this.classList.add('flipped')
  }else if(this.classList.contains('vespertine')){
    this.src = 'image/vespertine.jpg'
    click++
    this.classList.add('flipped')
  }
  //once user clicks twice, gather the cards with flipped class and pass them via compare function
  if(click === 2){
    //assign flipped cards to variables to compare
    let flipCard1 = document.querySelectorAll('.flipped')[0]
    let flipCard2 = document.querySelectorAll('.flipped')[1]
    //pass the cards into a comparing function.
    setTimeout(checkCards, 800, flipCard1, flipCard2);
    //increase tries after 2 clicks
    attempts++;
    //set click to 0 to play this if conditional again
    click = 0;
  }

}
//variable to count the amount of matches made
let matches = 0;
//compare function takes in two the two cards
function checkCards(card1, card2){
  //remove the flipped class to use for the next flipped cards
  card1.classList.remove('flipped')
  card2.classList.remove('flipped')
  //if card 1 is not the same as card 2 then flip them back over
  if(card1.className != card2.className){
    //changes cards to og image
    card1.src = 'image/bjork.jpg'
    card2.src = 'image/bjork.jpg'
  }
   else{
    //add 1 to match count  + keep cards up
    matches++;
  }
  //if the match count is half the amount of cards on the board, then alert win message
  if(matches === 5){

   alert('YAAAAASSS YOU WIN!!');
  }
}
