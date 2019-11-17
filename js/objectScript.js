class CardMatch {
  constructor(image) {
    this.image = image;
    this.flipped = false;
    this.cardID = "";
    this.cardElement = null;
  }
  matchesCard(otherCard) {
    return this.image === otherCard.image ? true : false;
  }
  flipCard() {
    if (this.flipped === false) {
      this.cardElement.querySelector('img').src = this.image;
      this.flipped = true;
    } else {
      this.cardElement.querySelector('img').src = "";
      this.flipped = false;
    }
  }
  resetCard() {
    this.flipped = false;
    this.cardElement.querySelector('img').src = "";
  }
}
class CardGame {
  constructor() {
    const images = ['img/blackhistory.jpg', 'img/christmastree.jpg', 'img/halloween.jpg', 'img/independent.jpg', 'img/newyears.jpg', 'img/turkey.jpg'];
    this.firstCard = null;
    this.secondCard = null;
    this.targetArray = [];
    this.shouldClearCards = false;
    this.shouldIgnoreClicks = false;
    this.shouldResetCards = false;
    images.concat(images).forEach(image => {
      this.targetArray.push(new CardMatch(image));
    });
    // Shuffle the Cards
    this.shuffleCards();
    this.generatemainSec();
  }
  checkCardMatch() {
    if (this.firstCard != null && this.secondCard != null) {
      return this.firstCard.matchesCard(this.secondCard) ? true : false;
    } else {
      return false;
    }
  }
  generatemainSec() {
    this.mainSec = {
      "topOne": this.targetArray[0],
      "topTwo": this.targetArray[1],
      "topThree": this.targetArray[2],
      "topFour": this.targetArray[3],
      "midOne": this.targetArray[4],
      "midTwo": this.targetArray[5],
      "midThree": this.targetArray[6],
      "midFour": this.targetArray[7],
      "botOne": this.targetArray[8],
      "botTwo": this.targetArray[9],
      "botThree": this.targetArray[10],
      "botFour": this.targetArray[11]
    }
    for (const selectedCard in this.mainSec) {
      this.mainSec[selectedCard].cardElement = document.querySelector(`#${selectedCard}`);
      this.mainSec[selectedCard].cardID = selectedCard;
    }
    return this.mainSec;
  }
  shuffleCards() {
    var currentIndex = this.targetArray.length,
      temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = this.targetArray[currentIndex];
      this.targetArray[currentIndex] = this.targetArray[randomIndex];
      this.targetArray[randomIndex] = temporaryValue;
    }
    return this.targetArray;
  }
  playCard(event) {
    if (this.shouldIgnoreClicks === true) {
      return;
    }
    const currentCard = this.mainSec[event.target.id];
    if (currentCard.flipped) {
      return;
    }
    currentCard.flipCard();
    if (this.firstCard === null) {
      this.firstCard = currentCard;
    } else {
      this.secondCard = currentCard;
      this.determineMatch();
      this.shouldClearCards = true;
    }
    this.shouldIgnoreClicks = true;
    setTimeout(() => {
      this.shouldIgnoreClicks = false;
      if (this.shouldResetCards === true) {
        this.shouldResetCards = false;
        this.resetCards();
      }
      if (this.shouldClearCards === true) {
        this.shouldClearCards = false;
        this.firstCard = null;
        this.secondCard = null;
      }
    }, 800);
  }
  determineMatch() {
    if (!this.checkCardMatch()) {
      this.shouldResetCards = true;
    }
  }
  resetCards() {
    this.firstCard.resetCard();
    this.secondCard.resetCard();
  }
}
const game = new CardGame();
document.querySelectorAll(".playerPick").forEach(element => {
  element.addEventListener("click", event => {
    game.playCard(event);
  });
});
