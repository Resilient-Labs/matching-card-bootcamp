const cardDeck = document.querySelector('#cardDeck');

cardDeck.addEventListener('click', pickAndFlip);

//set Reset button click to same logic as randomizeDeck to reshuffle cards
document.querySelector('button').addEventListener('click', randomizeDeck);

//variables for holding our card flips
let firstCard = undefined;
let secondCard = undefined;

//whenever we click anything within the cards container, we want to activate the pick card function
cardDeck.addEventListener('click', pickAndFlip);

function randomizeDeck() {
  cardDeck.innerHTML = '';

  let cardMojis = ['🍒', '🍒', '🏈', '🏈', '🍊', '🍊', '💎', '💎', '♣️', '♣️'];

  //we're going to populate the cardDeck container with cards holding a class of an element randomly pick from cardMojis, then remove that element; we'll repeat until all cardMojis array elements are removed
  while (cardMojis.length > 0) {
    const randomizedIndex = Math.floor(Math.random() * cardMojis.length);
    const div = document.createElement('div');
    cardDeck.appendChild(div);
    div.classList.add(cardMojis[randomizedIndex]);
    div.innerText = 'Pick';

    //we'll remove that the emoji we picked for the current card from cardMojis array as the last step

    cardMojis.splice(randomizedIndex, 1);
  }

  firstCard = undefined;
  secondCard = undefined;
}

randomizeDeck();

//logic for when you flip one card then flip another
function pickAndFlip(card) {
  //log which card the user picks
  console.log(card.target);

  //Card that is clicked gets given front end display of the symbol held in the class of that card, essentially acts as a card flipping mechanism
  card.target.textContent = card.target.className;

  firstCard !== undefined
    ? (secondCard = card.target)
    : (firstCard = card.target);

  if (firstCard.className === secondCard.className) {
    console.log('Cards Matched!');
    firstCard = undefined;
    secondCard = undefined;
  } else {
    console.log('No Match!');
    setTimeout((func) => {
      firstCard.textContent = 'Pick';
      secondCard.textContent = 'Pick';
      firstCard = undefined;
      secondCard = undefined;
    }, 700);
  }
}
