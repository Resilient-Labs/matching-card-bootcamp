// const cards = document.querySelectorAll('td')
// console.log(cards)
//  const images = [
// '<img src="img/cheese.jpg">',
// '<img src="img/peaceLily.jpg">',
// '<img src="img/kit.jpg">',
// '<img src="img/money.jpg">',
// '<img src="img/peperomia.png">',
// '<img src="img/lady.jpg">',
// '<img src="img/money.jpg">',
// '<img src="img/birds.jpg">',
// '<img src="img/cheese.jpg">',
// '<img src="img/kit.jpg">',
// '<img src="img/peaceLily.jpg">',
// '<img src="img/money.jpg">',
// '<img src="img/peperomia.png">',
// '<img src="img/lady.jpg">',
// '<img src="img/money.jpg">',
// '<img src="img/birds.jpg">'
//  ]


// const start = document.querySelector('button').addEventListener('click', startGame)
// function startGame(){
//     console.log('game started');

 
//  const shuffledImages = images.sort((a, b) => 0.5 - Math.random());
//  console.log(shuffledImages)
//  for(let i = 0; i < cards.length; i++){
//     cards[i].innerHTML = shuffledImages[i]
//     //  console.log(cards[i])
//      console.log(shuffledImages[i])
// }
// cards.forEach(td => {
//         td.innerHTML = '<img src="img/backside.jpg">';
//     });

// }
   
// const selectedCard = document.querySelector('td').addEventListener('click', e => flipCard(e))

// for(let i = 0; i < cards.length; i++){
//     cards[i].addEventListener('click', flipCard)    
// }// console.log(cards[i])
// function flipCard(event){
//     let td = event.target.parentElement
// // console.log(`you clicked ${event.target}!`)
// console.log(event)
// console.log(td)
// console.log('you flipped card')
// td.innerHTML = ""
// td.innerHTML = shuffledImages[i];
// } 


// Get all card elements and initialize the image array
const cards = document.querySelectorAll('td');
const images = [
  'img/cheese.jpg', 
  'img/peaceLily.jpg', 
  'img/kit.jpg', 
  'img/money.jpg', 
  'img/lady.jpg', 
   'img/birds.jpg',
  'img/cheese.jpg', 
  'img/kit.jpg', 
  'img/peaceLily.jpg', 
  'img/money.jpg',
   'img/lady.jpg',
    'img/birds.jpg'
]; 

let shuffledImages = [];
let flippedCards = [];
let matchedPairs = 0;

  cards.forEach(td => {
    td.innerHTML = '<img src="img/backside.jpg">';
});

window.addEventListener('load', startGame);

function startGame() {
  console.log('Game started');
  cards.forEach(td => {
    td.innerHTML = '<img src="img/backside.jpg">';
});

  // Shuffle images and set as global variable
  shuffledImages = images.sort(() => 0.5 - Math.random());
  console.log('Shuffled images:', shuffledImages);

  // Hide all card images initially
  cards.forEach(td => {
    // td.innerHTML = '';  // Clear previous images
  });
  
  // Reset tracking variables
  flippedCards = [];
  matchedPairs = 0;
}

// Add click event to each card to flip it
cards.forEach(td => {
  td.addEventListener('click', flipCard);
});

function flipCard(event) {
  const td = event.target.closest('td');
  const cardIndex = Array.from(cards).indexOf(td);
    console.log(td.children[0].src);

  if (td.children[0].src.includes(`img/backside.jpg`)) { //this link wont for you :)
    const img = td.children[0]
    img.src = shuffledImages[cardIndex];
    // td.appendChild(img);
    console.log(td.children[0])

    // Add flipped card to tracking array
    flippedCards.push({ element: td, index: cardIndex });

    if (flippedCards.length === 2) {
      checkForMatch();
      cards.forEach(td => {
    td.addEventListener('click', flipCard);
  });
    }
  }
}

function checkForMatch() {
  const [firstCard, secondCard] = flippedCards;

  if (shuffledImages[firstCard.index] === shuffledImages[secondCard.index]) {
    console.log('Match found!');
    matchedPairs++;
    
    // Clear flippedCards array for the next turn
    flippedCards = [];
    
    if (matchedPairs === images.length / 2) {
      alert('Congratulations! You matched all pairs!');
      cards.forEach(td => {
        td.addEventListener('click', flipCard);
      });
    }
  } else {
    cards.forEach(td => {
        td.removeEventListener('click', flipCard);
      });
    
    
    // Not a match: hide images after a short delay
    setTimeout(() => {

      firstCard.element.innerHTML = '<img src="img/backside.jpg">';
      secondCard.element.innerHTML = '<img src="img/backside.jpg">';
      flippedCards = [];
      cards.forEach(td => {
        td.addEventListener('click', flipCard);
      });
    },500);
   
  }
  
}





// 
// cardValues.forEach(value => {                    // 3. Create each card element and add it to the game board
//     const card = document.createElement('div');
//     card.classList.add('card');
//     card.dataset.value = value; // Store the card's value for matching
//     card.textContent = ''; // Initially empty, shows when flipped

//     // Flip the card on click
//     card.addEventListener('click', () => flipCard(card));
//     gameBoard.appendChild(card);



//show the images at random in the background-shuffle mthod?
//shuffle images upon reset and start- make event listener
//not letting me target eventObject// getting 1???
//toggle off backside on on front - or just show a different card
// we will start with all cards flipped, so we will need images for each card
//if card is clicked, we will have an image appear
// if two cards, then check for a match, while two - do not allow others to be clicked
//if they do match, they stay and user is able to keep palying
//we need to keep track of clicks, if two cards do not match, they go back to backside

//