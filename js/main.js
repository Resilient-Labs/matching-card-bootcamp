// document.querySelector('input[type=button]').addEventListener('click',checkRandom)

// function checkRandom() {
//   console.log(Math.floor(5*Math.random()))
// }

/*
Need a Board class to:
- show the default board (all backs of cards) -- to do this after start game button click in v2
- randomize the cards positions and store their position
*/

class Board {
  constructor(){
    this.board = [];
  }

  populateBoard() {
    const cardImgData = [
      [1, 'circle', './img/cards/circle.jpg', 0],
      [2, 'heart',  './img/cards/heart.jpg', 0],
      [3, 'pentagon',  './img/cards/pentagon.jpg', 0],
      [4, 'star',  './img/cards/star.jpg', 0],
      [5, 'triangle',  './img/cards/triangle.jpg', 0]
    ]

    // randomly push elements to the board array without repeating. 
    // Math.random to select, check its use value with a do-while
    // while usage is 2, select a random image
    // while usage isn't 2, push it to the array and add 1 to its usage
    let arrLength = 10;

    for (let i = 0; i < arrLength; i++) {
      let chosenImg;
      do {
        chosenImg = cardImgData[Math.floor(Math.random() * cardImgData.length)];
      } while (chosenImg[3] === 2);
      
      this.board.push(chosenImg);
      chosenImg[3] += 1;

    }

    // take the array of card img data used to map it out on the cardBack array in order
    const cardBacks = document.querySelectorAll('.cardBack');
    for (let i = 0; i < cardBacks.length; i++) {
      cardBacks[i].style.backgroundImage = `url('${this.board[i][2]}')`;
      cardBacks[i].parentElement.classList.add(this.board[i][1]);
    }
  }
}

/*
Need a Game class to:
- start the game
- handle each card click (before 2 cards are selected, after)
- check for a winning board (Complete screen TBD)
- check for a match (on each card click)
- make all the cards have an event listener
*/

class Game {
  constructor(){
    this.gameBoard = new Board();
    this.flippedCards = [];
    this.lockBoard = false;
  }

  addCardListeners(){
    const cards = document.querySelectorAll('.cardMain')
    cards.forEach(card => {
      card.addEventListener('click', () => this.handleCardClick(card));
    })
  }

  handleCardClick(card){
    // handle a turn having 2 cards turned over before resetting
    // and if they flip back over or stay flipped
    /*
    - check if there are 2 is-flipped cardMains
    - check if they match class shape names
    */

    if (this.lockBoard || card.classList.contains('is-flipped')) {
      return;
    } 

    card.classList.add('is-flipped');
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      this.checkMatch();
    }
  }

  checkMatch() {
    const card1=this.flippedCards[0];
    const card2=this.flippedCards[1];
    const isMatch = card1.classList[1] === card2.classList[1];

    if (isMatch) {
      this.disableMatchedCards();
    } else {
      this.unflipCards();
    }
  }

  disableMatchedCards() {
    this.flippedCards.forEach(card => {
      const cardBack = card.querySelector('.cardBack');
      cardBack.style.filter = 'blur(2px) grayscale(80%)';
      card.removeEventListener('click', this.handleCardClick);
    });
    this.flippedCards = [];
  }

  unflipCards() {
    this.lockBoard = true;
    setTimeout(() => {
      this.flippedCards.forEach(card => card.classList.remove('is-flipped'));
      this.flippedCards = [];
      this.lockBoard = false;
    }, 1000);
  }
}

const currentGame = new Game();
currentGame.addCardListeners();
currentGame.gameBoard.populateBoard();
