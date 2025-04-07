// Get all the card elements
const cards = document.querySelectorAll('.card');
const gameBoard = document.getElementById('game-board');

cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    // Send the card flip request to the server
    fetch(`/flip?cardIndex=${index}`, {
      method: 'POST'
    })
      .then(response => response.json())
      .then(data => {
        updateGameState(data);
      })
      .catch(err => console.error('Error flipping card:', err));
  });
});

// Function to update the game state on the front-end
function updateGameState(gameState) {
  gameState.cards.forEach((card, index) => {
    const cardElement = cards[index];
    // Update card flipped status based on the game state
    if (card.flipped) {
      cardElement.classList.add('flipped'); // CSS class for flipped cards
    } else {
      cardElement.classList.remove('flipped');
    }

    
    if (card.matched) {
      cardElement.classList.add('matched'); // CSS class for matched cards
    }
  });

  if (gameState.gameWon) {
    alert("Congratulations, you've won the game!");
  }
}
