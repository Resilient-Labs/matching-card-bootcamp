

class MemoryCard {
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
        if(this.flipped === false) {
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
        // These will be the images we can shuffle from.
        const images = ['img/chief.jpeg', 'img/leon.png', 'img/giraffe.jpeg', 'img/download.jpeg', 'img/phone.jpeg', 'img/soccerball.png'];
        this.firstCard = null;
        this.secondCard = null;
        this.targetArray = [];
        this.shouldClearCards = false;
        this.shouldIgnoreClicks = false;
        this.shouldResetCards = false;
        // Create a target array by creating two copies of the images array.
        images.concat(images).forEach(image => {
            this.targetArray.push(new MemoryCard(image));
        });
        // Shuffle the Cards
        this.shuffleCards();
        this.generateCardMap();
    }
    checkCardMatch() {
        if(this.firstCard != null && this.secondCard != null) {
            return this.firstCard.matchesCard(this.secondCard) ? true : false;
        } else {
            return false;
        }
    }
    generateCardMap() {
        // Create an object that connects each array element to an ID on the DOM
        this.cardMap = {
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
        // For all of the cards in the Card Map, assign an element that references its card element, as well as giving it an ID
        for(const cardPosition in this.cardMap) {
            this.cardMap[cardPosition].cardElement = document.querySelector(`#${cardPosition}`);
            this.cardMap[cardPosition].cardID = cardPosition;
        }
        return this.cardMap;
    }
    shuffleCards() {
        var currentIndex = this.targetArray.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = this.targetArray[currentIndex];
            this.targetArray[currentIndex] = this.targetArray[randomIndex];
            this.targetArray[randomIndex] = temporaryValue;
        }
        return this.targetArray;
    }
    playCard(event) {
        if(this.shouldIgnoreClicks === true) {
            return;
        }
        const currentCard = this.cardMap[event.target.id];
        if(currentCard.flipped) {
            return;
        }
        currentCard.flipCard();
        if(this.firstCard === null) {
            this.firstCard = currentCard;
        } else {
            this.secondCard = currentCard;
            this.determineMatch();
            this.shouldClearCards = true;
        }
        this.shouldIgnoreClicks = true;
        setTimeout(() => {
            this.shouldIgnoreClicks = false;
            if(this.shouldResetCards === true) {
                this.shouldResetCards = false;
                this.resetCards();
            }
            if(this.shouldClearCards === true) {
                this.shouldClearCards = false;
                this.firstCard = null;
                this.secondCard = null;
            }
        }, 500);
    }
    determineMatch() {
        if(!this.checkCardMatch()) {
            this.shouldResetCards = true;
        }
    }
    resetCards() {
        this.firstCard.resetCard();
        this.secondCard.resetCard();
    }
}

const game = new CardGame();

document.querySelectorAll(".userChoice").forEach(element => {
    element.addEventListener("click", event => {
        game.playCard(event);
    });
});
