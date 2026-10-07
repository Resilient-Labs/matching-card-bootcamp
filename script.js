// Find the card container and the message showing how many pairs are matched.
const cards = document.querySelector('#gameCard');
const statusText = document.querySelector('#status');
// Remember the first selected card and the timer used to hide a mismatch.
let clickedOn, flipBackTimer;
// Block clicks while two mismatched cards are still showing.
let waiting = false;
let pairs = 0;

// One listener handles all cards, including cards created in a new game.
cards.addEventListener('click', gameLogic);
document.querySelector('#restart').addEventListener('click', random);

// Show or hide a card in one place to avoid repeating these lines.
function flip(card, show) {
  // The ? : operator chooses the animal name if show is true, or '?' otherwise.
  card.innerText = show ? card.dataset.animal : '?';
  // Give screen readers the same information as the visible card.
  card.setAttribute('aria-label', show ? card.dataset.animal : 'Hidden animal');
  // Add the flipped CSS class when showing a card; remove it when hiding one.
  card.classList.toggle('flipped', show);
}

// Clear the old game and create 10 cards in a random order.
function random() {
  // Cancel any previous delay before resetting the board and score.
  clearTimeout(flipBackTimer);
  cards.innerHTML = '';
  clickedOn = undefined;
  waiting = false;
  pairs = 0;
  statusText.innerText = 'Pairs: 0 / 5';

  // Each animal appears twice, giving us five matching pairs.
  const cardNames = ['dogs', 'dogs', 'cats', 'cats', 'bears', 'bears',
    'lions', 'lions', 'tigers', 'tigers'];

  while (cardNames.length > 0) {
    // Pick a random array index from the names that are still available.
    const order = Math.floor(Math.random() * cardNames.length);
    const card = document.createElement('button');
    card.type = 'button';
    card.classList.add('card');
    // splice removes one name; [0] gets that name from its returned array.
    card.dataset.animal = cardNames.splice(order, 1)[0];
    // Start the card face down, then add it to the page.
    flip(card, false);
    cards.appendChild(card);
  }
}

function gameLogic(event) {
  // event.target is the element the player clicked.
  const card = event.target;
  // Ignore gaps, clicks during a delay, the same card twice, and matched cards.
  if (!card.classList.contains('card') || waiting ||
      card === clickedOn || card.classList.contains('matched')) return;

  flip(card, true);
  // Save the first card and stop here until the player selects a second one.
  if (!clickedOn) {
    clickedOn = card;
    return;
  }

  // Keep the first card locally so we can compare this pair.
  const firstCard = clickedOn;
  clickedOn = undefined;

  // Compare animal names rather than CSS classes.
  if (firstCard.dataset.animal === card.dataset.animal) {
    // Mark both cards as matched so they stay visible and cannot be selected again.
    firstCard.classList.add('matched');
    card.classList.add('matched');
    pairs++; // Add one to the number of matched pairs.
    // Display the winning message when all five pairs have been found.
    statusText.innerText = pairs === 5
      ? 'You found all five pairs!' : 'Pairs: ' + pairs + ' / 5';
  } else {
    // Show a mismatch for 1000 milliseconds (one second), then hide both cards.
    waiting = true;
    flipBackTimer = setTimeout(function () {
      flip(firstCard, false);
      flip(card, false);
      waiting = false; // Allow the player to select another pair.
    }, 1000);
  }
}

// Start the first game as soon as the script runs.
random();
