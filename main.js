// Multiple Youtube videos and prayers. Worked with Mark(Mentor), Christina, Yorelisa
// https://medium.com/@funkiefabulous003/how-to-build-a-memory-matching-game-in-javascript-fbe0bf9884a2

const giphyGifs = ['gifOne', 'gifTwo', 'gifThree', 'gifFour', 'gifFive', 'gifOne', 'gifTwo', 'gifThree', 'gifFour', 'gifFive'];

let cards = Array.from(document.getElementsByClassName('card'));

let chosenCards = [];
let matchingCards = [];




// create a function that will shuffle the cards
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  shuffle(giphyGifs);
  console.log(giphyGifs)

// create a event listener to start the game
cards.forEach((card,i) =>  {
    card.addEventListener('click', flipCard)
    const gif = giphyGifs[i]
    card.className = `card ${gif}`
})






// Create a function to see if the cards are match

function flipCard() {
    
    
    this.classList.add('flipped');
    chosenCards.push(this);
    
    if (chosenCards.length === 2) {
        if (chosenCards[0].classList.value === chosenCards[1].classList.value) {
            chosenCards[0].classList.add('matched');
            chosenCards[0].classList.remove('flipped');
            chosenCards[1].classList.add('matched');
            chosenCards[1].classList.remove('flipped');
            matchingCards.push(chosenCards[0], chosenCards[1]);
            chosenCards = [];
        } else {
            setTimeout(() => {
                chosenCards[0].classList.remove('flipped');
                chosenCards[1].classList.remove('flipped');
                chosenCards = [];
            }, 1000);
        }
    }
    
    if (matchingCards.length === cards.length) {
        alert('You Won!');
    }
}


