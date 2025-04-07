// 1. Setup
// - Create an array of 5 card values duplicated once to make 10 total cards
const board = document.getElementById('gameBoard');
function generateCards() {
  const cardValues = ['🍓', '🍋', '🍉', '🍇', '🍍'];
  const deck = [...cardValues, ...cardValues].sort(() => Math.random() - 0.5)// - Shuffle the array to randomize card positions
  let flippedCards = [];
  let matches = 0;
  let lockBoard = false;
  const restartBtn = document.getElementById('restartBtn');
  // - Render 10 cards face down on the page (can use a "hidden" or "faceDown" class)
  deck.forEach(value => {
    const card = document.createElement('div');
    card.classList.add('card', 'faceDown');
    card.setAttribute('dataValue', value);
    board.appendChild(card);
    card.innerHTML = '❓';

    card.addEventListener('click', () => {

      if (lockBoard || !card.classList.contains('faceDown') || flippedCards.includes(card)) {
        return;
      }
      // Only continue if card is still face down AND less than 2 cards are flipped
      if (card.classList.contains("faceDown") && flippedCards.length < 2) {
        card.classList.remove('faceDown');
        card.innerHTML = value;
        flippedCards.push(card);
        lockBoard = true
      }

      if (flippedCards.length === 2) {

        const [card1, card2] = flippedCards;
        const val1 = card1.getAttribute('dataValue');
        const val2 = card2.getAttribute('dataValue');


        if (val1 === val2) {
          flippedCards = [];
          matches += 1
          if (matches === 5) {
            alert('YOU WIN!!')
            restartBtn.style.display = 'block'
          }
        } else {
          setTimeout(() => {
            card1.classList.add('faceDown');
            card2.classList.add('faceDown');
            flippedCards = [];

          }, 1000);

        }
      } lockBoard = false
    });
  })
}
generateCards()

restartBtn.addEventListener('click', () => {
  board.innerHTML = '';
  restartBtn.style.display = 'none';
  generateCards();
});


// 2. Game State
// - Track two selected cards (selectedCards array)
// - Track matched cards (matchedCards array or using a "matched" class on DOM)
// - Prevent clicking more than 2 cards at a time or clicking the same card twice
// - Optional: lock board during checking

// 3. User Interaction
// // On card click:
// - Check if the card is already matched or flipped (skip if yes)
// - Flip the card (change class to show front/value)
// - Add it to selectedCards

// - If selectedCards has two cards:
//     - Disable clicks briefly (lock board?)
//     - Check if values match:
//         - If match:
//             - Leave them flipped and mark them as matched
//         - If not match:
//             - Wait a second or so, then flip both back (change class to hide again)
//     - Reset selectedCards to empty
//     - Unlock board

// 4. Win Condition
// - If matchedCards length === total number of cards (10):
// - Show a message like "You Win!" or restart option

// 5. Reset (Optional)
// - Button to restart game: reshuffle cards, reset state, re-render cards

