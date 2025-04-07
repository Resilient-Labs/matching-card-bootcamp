const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Initial game state with card values and flipped/matched status
const gameState = {
  cards: [
    { value: '1', flipped: false, matched: false },
    { value: '2', flipped: false, matched: false },
    { value: '3', flipped: false, matched: false },
    { value: '4', flipped: false, matched: false },
    { value: '5', flipped: false, matched: false },
    { value: '1', flipped: false, matched: false },
    { value: '2', flipped: false, matched: false },
    { value: '3', flipped: false, matched: false },
    { value: '4', flipped: false, matched: false },
    { value: '5', flipped: false, matched: false }
  ],
  flippedCards: [],
  matchedCount: 0
};

function handleCardFlip(cardIndex) {
  const card = gameState.cards[cardIndex];

  // Prevent flipping the same card twice
  if (card.flipped || gameState.flippedCards.length === 2) return;

  // Flip the card
  card.flipped = true;
  gameState.flippedCards.push(cardIndex);

  // Check for match
  if (gameState.flippedCards.length === 2) {
    const [firstCardIndex, secondCardIndex] = gameState.flippedCards;
    const firstCard = gameState.cards[firstCardIndex];
    const secondCard = gameState.cards[secondCardIndex];

    if (firstCard.value === secondCard.value) {
      // It's a match, increase the matched count
      gameState.matchedCount++;
    } else {
      // Not a match, flip them back after 1 second
      setTimeout(() => {
        firstCard.flipped = false;
        secondCard.flipped = false;
      }, 1000);
    }

    // Reset flipped cards array
    gameState.flippedCards = [];
  }

  return gameState;
}

function handleRequest(req, res) {
  const parsedUrl = url.parse(req.url, true);

  // Serve the HTML file when the root path is requested
  if (parsedUrl.pathname === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading index.html');
        return; // Ensure no further code is executed
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
        return; // Ensure no further code is executed
      }
    });
  } else if (parsedUrl.pathname === '/css/style.css') {
    fs.readFile(path.join(__dirname, 'css/style.css'), (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading styles.css');
        return; // Ensure no further code is executed
      } else {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(data);
        return; // Ensure no further code is executed
      }
    });
  } else if (parsedUrl.pathname === '/js/main.js') {
    fs.readFile(path.join(__dirname, 'js/main.js'), (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading main.js');
        return; // Ensure no further code is executed
      } else {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.end(data);
        return; // Ensure no further code is executed
      }
    });
  } else if (parsedUrl.pathname === '/flip' && req.method === 'POST') {
    const cardIndex = parseInt(parsedUrl.query.cardIndex);

    if (isNaN(cardIndex) || cardIndex < 0 || cardIndex >= gameState.cards.length) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid card index' }));
      return; // Ensure no further code is executed
    }

    // Flip the card and update the game state
    const updatedState = handleCardFlip(cardIndex);

    // Check if the game is won
    if (updatedState.matchedCount === 5) {
      updatedState.gameWon = true;
    }

    // Send the updated game state back to the client
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(updatedState));
    return; // Ensure no further code is executed
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
    return; // Ensure no further code is executed
  }
}

// Create HTTP server
const server = http.createServer(handleRequest);

// Start the server
server.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});
