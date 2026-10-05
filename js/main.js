'use strict';

class Card {
    constructor(card, frontSrc, frontAlt) {
        this.card = card;
        this.cardImage = card.querySelector('img');
        this.frontSrc = frontSrc;
        this.frontAlt = frontAlt;
        this.matched = false;

        console.log(this);
    }

    showFront() {
        this.cardImage.src = this.frontSrc;
        console.log(this.cardImage.src);

        this.cardImage.alt = this.frontAlt;
        console.log(this.cardImage.alt);
    }

    showBack() {
        this.cardImage.src = './images/windows-solitaire-palm_tree-card_back.jpg';
        console.log(this.cardImage.src);

        this.cardImage.alt = 'Windows Solitaire Palm Tree Card Back';
        console.log(this.cardImage.alt);
    }
}

class MemoryGame {
    constructor() {
        this.firstCard = null;
        this.secondCard = null;
        this.faceDownCard = true;

        this.pickCountValue = 0;
        this.winCountValue = 0;
        this.lossCountValue = 0;

        this.cards = [];

        this.pickCount = document.querySelector('.pickCount');
        this.pickRate = document.querySelector('.pickRate');

        this.playAgain = document.querySelector('.playAgain');
        this.resetGame = document.querySelector('.resetGame');

        console.log(this);
    }

    gameOn() {
        const cards = document.querySelectorAll('.card');
        console.log(cards);

        console.log(cards.length);

        const cardFronts = [
            {
                src: './images/topps-wacky-one.jpg',
                alt: 'Topps Wacky One'
            },
            {
                src: './images/topps-wacky-one.jpg',
                alt: 'Topps Wacky One'
            },
            {
                src: './images/topps-wacky-two.jpg',
                alt: 'Topps Wacky Two'
            },
            {
                src: './images/topps-wacky-two.jpg',
                alt: 'Topps Wacky Two'
            },
            {
                src: './images/topps-wacky-three.jpg',
                alt: 'Topps Wacky Three'
            },
            {
                src: './images/topps-wacky-three.jpg',
                alt: 'Topps Wacky Three'
            },
            {
                src: './images/topps-wacky-four.jpg',
                alt: 'Topps Wacky Four'
            },
            {
                src: './images/topps-wacky-four.jpg',
                alt: 'Topps Wacky Four'
            },
            {
                src: './images/topps-wacky-five.jpg',
                alt: 'Topps Wacky Five'
            },
            {
                src: './images/topps-wacky-five.jpg',
                alt: 'Topps Wacky Five'
            }
        ];
        console.log(cardFronts);

        const shuffledCardFronts = this.shuffleCards(cardFronts);
        console.log(shuffledCardFronts);

        const thisGame = this;

        cards.forEach(function (card, cardNumber) {
            console.log(cardNumber);

            const newCard = new Card(
                card,
                shuffledCardFronts[cardNumber].src,
                shuffledCardFronts[cardNumber].alt
            );

            thisGame.cards.push(newCard);

            console.log(newCard.frontAlt);

            card.addEventListener('click', function () {
                console.log(cardNumber);

                thisGame.pickCard(newCard);
            });
        });

        console.log(thisGame.cards);

        this.playAgain.addEventListener('click', function () {
            thisGame.playAgain();
        });

        this.resetGame.addEventListener('click', function () {
            location.reload();
        });

        this.updateCounts();
    }

    pickCard(card) {
        console.log(this.firstCard);
        console.log(this.secondCard);

        if (this.faceDownCard === false) {
            console.log(this.faceDownCard);
            return;
        }

        if (card.matched === true) {
            console.log(card.matched);
            return;
        }

        if (card === this.firstCard) {
            console.log(card);
            return;
        }

        card.showFront();

        this.pickCountValue += 1;
        console.log(this.pickCountValue);

        this.updateCounts();

        if (this.firstCard === null) {
            this.firstCard = card;
            console.log(this.firstCard);
            return;
        }

        this.secondCard = card;
        console.log(this.secondCard);

        this.checkCards();
    }

    checkCards() {
        console.log(this.firstCard.frontAlt);
        console.log(this.secondCard.frontAlt);

        if (this.firstCard.frontAlt === this.secondCard.frontAlt) {
            this.firstCard.matched = true;
            this.secondCard.matched = true;

            this.winCountValue += 1;
            console.log(this.winCountValue);

            this.updateCounts();
            this.resetCards();
            this.checkGameComplete();

            return;
        }

        this.lossCountValue += 1;
        console.log(this.lossCountValue);

        this.updateCounts();
        this.hideCards();
    }

    checkGameComplete() {
        let allCardsMatched = true;

        this.cards.forEach(function (card) {
            if (card.matched === false) {
                allCardsMatched = false;
            }
        });

        if (allCardsMatched === true) {
            console.log(allCardsMatched);

            this.playAgain.disabled = false;
        }
    }

    playAgain() {
        const cardFronts = [];

        this.cards.forEach(function (card) {
            cardFronts.push({
                src: card.frontSrc,
                alt: card.frontAlt
            });
        });

        const shuffledCardFronts = this.shuffleCards(cardFronts);

        this.cards.forEach(function (card, cardNumber) {
            card.frontSrc = shuffledCardFronts[cardNumber].src;
            card.frontAlt = shuffledCardFronts[cardNumber].alt;
            card.matched = false;

            card.showBack();
        });

        this.resetCards();

        this.faceDownCard = true;
        console.log(this.faceDownCard);

        this.playAgain.disabled = true;
    }

    hideCards() {
        this.faceDownCard = false;
        console.log(this.faceDownCard);

        const thisGame = this;

        setTimeout(function () {
            thisGame.firstCard.showBack();
            thisGame.secondCard.showBack();

            thisGame.resetCards();

            thisGame.faceDownCard = true;
            console.log(thisGame.faceDownCard);
        }, 1000);
    }

    resetCards() {
        this.firstCard = null;
        console.log(this.firstCard);

        this.secondCard = null;
        console.log(this.secondCard);
    }

    updateCounts() {
        this.pickCount.textContent = this.pickCountValue;
        console.log(this.pickCount.textContent);

        this.pickRate.textContent = this.winCountValue + '/' + (this.winCountValue + this.lossCountValue);

        console.log(this.pickRate.textContent);
    }

    shuffleCards(cards) {
        const shuffledDeck = cards.slice();

        for (let i = 0; i < shuffledDeck.length; i++) {
            const randomNumber = Math.floor(
                Math.random() * shuffledDeck.length
            );

            const currentCard = shuffledDeck[i];
            const randomCard = shuffledDeck[randomNumber];

            shuffledDeck[i] = randomCard;
            shuffledDeck[randomNumber] = currentCard;
        }
        console.log(shuffledDeck);

        return shuffledDeck;
    }
}

const thisGame = new MemoryGame();

thisGame.gameOn();