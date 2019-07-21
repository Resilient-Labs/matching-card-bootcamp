var cards = document.querySelectorAll('img')
//when each card is clicked on, run flipCards function
cards.forEach(card => card.addEventListener('click', flipCards))
var click = 0;

//each card clicked on has class "pair: A, B, C, D, or E" -->change image to their respective pair images
//add classList of "flipped" to be able to compare cards. does not have any CSS properties
function flipCards(){
  if(this.classList.contains('pairA')){
    this.src = 'media/pairA.jpg'
    this.classList.add('flipped')
    click++
  }else if(this.classList.contains('pairB')){
    this.src = 'media/pairB.jpg'
    this.classList.add('flipped')
    click++
  }else if(this.classList.contains('pairC')){
    this.src = 'media/pairC.jpg'
    this.classList.add('flipped')
    click++
  }else if(this.classList.contains('pairD')){
    this.src = 'media/pairD.jpg'
    this.classList.add('flipped')
    click++
  }else if(this.classList.contains('pairE')){
    this.src = 'media/pairE.jpg'
    this.classList.add('flipped')
    click++
  }
  //if 2 cards are selected, run checkCards function to compare
  if(click === 2){
    let card1 = document.querySelectorAll('.flipped')[0]
    let card2 = document.querySelectorAll('.flipped')[1]
    setTimeout(checkCards, 800, card1, card2);
    click = 0;
  }
}

//keep track of number of matches to alert winner
var matches = 0;
//when checking if cards match, remove "flipped" class to go back to class "pair: A, B, C, D, or E"
function checkCards(c1, c2){
  c1.classList.remove('flipped')
  c2.classList.remove('flipped')
  //if class names are not pairs, return to cover image
  if(c1.className != c2.className){
    c1.src = 'media/cover.png'
    c2.src = 'media/cover.png'
    //if class names are pairs, increase match count
  }else{
    matches++;
  }
  //when user reaches 5 matches, alert win
  if(matches === 5){
    alert("You Won!");
  }
}
