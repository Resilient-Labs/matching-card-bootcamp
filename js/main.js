class Board {
  constructor(cards, boxes) {
    this.cards = cards; // These are your game cards
    this.boxes = boxes; // These are the card boxes
    this.gameBoard = []; // This is where the cards are placed on the game board
    this.flippedCards = []; // These are the cards you've turned over
    this.matchedPairs = 0; // This keeps track of how many pairs you've matched
    this.result = document.querySelector('#matches')
  } // end of constructor
  
  runGame() {
    this.shuffleCards(); // Shuffle the cards
    this.gameBoard = this.cards.concat(this.cards); // Populate the game board with shuffled cards
    this.addCards(); // Put the cards in the boxes
    document.querySelector("table").addEventListener("click", (event) => this.handleCardClick(event)); // Listen for card clicks
  } // end of runGame()

  shuffleCards() {
    // to shuffle the cards
    this.cards.sort((a, b) => {
      return Math.random() - 0.5; // Compare two elements randomly
    });
  } // end of shuffleCards()  

  addCards() {
    this.boxes.forEach(box => box.innerHTML = ''); // Set the default image for all cards
  } // end of addCards()

  handleCardClick(event) {
    // method to handle card clicks
    if (event.target.classList.contains("box")) {
      // if the target contains the class list box
      this.flipCard(event.target); // When you click on a box, turn over the card
    } // end of conditional
  } // end of handleCardClick

  flipCard(card) {
    // method to flip cards
    if (this.flippedCards.length < 2) {
      const index = Array.from(this.boxes).indexOf(card);
      if (!this.flippedCards.includes(index)) {
        const { letter, image } = this.gameBoard[index];
        card.innerHTML = `<img src="img/${image}" alt="${letter}">`; // Show the card's picture
        this.flippedCards.push(index);
        if (this.flippedCards.length === 2) {
          this.checkForMatch(); // Check if the two cards you've turned over match
        }
      }
    }
  }

  checkForMatch() {
    const [index1, index2] = this.flippedCards;
    if (this.gameBoard[index1].letter !== this.gameBoard[index2].letter) {
      setTimeout(() => this.revertCards(index1, index2), 1000); // If they don't match, hide them again
    } else {
      this.matchedPairs++; // If they match, remember you found a pair
      this.checkWinner(); // Check if you've found all pairs
    }
    this.flippedCards = []; // Forget which cards you've turned over
  }

  revertCards(index1, index2) {
    this.boxes[index1].innerHTML = ''; // Hide the cards again
    this.boxes[index2].innerHTML = '';
  }

  checkWinner() {
    if (this.matchedPairs === this.cards.length / 2) {
      this.result.innerHTML = 'You Won!' // If you've matched all the pairs, you've won!
    }
  }  
} // end of board class

const cards = [
  { letter: "A", image: "star.png" },
  { letter: "A", image: "star.png" },
  { letter: "B", image: "flower.png" },
  { letter: "B", image: "flower.png" },
  { letter: "C", image: "chute.png" },
  { letter: "C", image: "chute.png" },
  { letter: "D", image: "cloud.png" },
  { letter: "D", image: "cloud.png" },
  { letter: "E", image: "coin.png" },
  { letter: "E", image: "coin.png" },
];

const boxes = document.querySelectorAll('.box');
const matchingGame = new Board(cards, boxes);
matchingGame.runGame();