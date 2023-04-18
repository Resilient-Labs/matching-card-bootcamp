//have all card with the same image face down
// apply 5 sets of pictures to the back of my cards
// on click have the card flip over revailing the face down image
//write a function that keeps the first selected card face up until the second guess is made
//have a function that flips both cards back over if there is not a match
// have a function that checks to see if the two flipped cards match

const cards = document.querySelectorAll('.card');
const resetBtn = document.querySelector('button')
let flippedCards = [];
let matchedCards = [];


function flipCard() {
    if (this.classList.contains('flipped') || matchedCards.includes(this)) {
        return;
    }

    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        cards.forEach(card => card.removeEventListener('click', flipCard));

        if (flippedCards[0].dataset.card === flippedCards[1].dataset.card) {
            matchedCards.push(...flippedCards);
            flippedCards = [];

            if (matchedCards.length === cards.length) {
                alert('Congratulations! You have matched all the Masterpices.');
            } else {
                cards.forEach(card => {
                    if (!matchedCards.includes(card)) {
                        card.addEventListener('click', flipCard);
                    }
                });
            }
        } else {
            setTimeout(() => {
                flippedCards.forEach(card => card.classList.remove('flipped'));
                flippedCards = [];

                cards.forEach(card => {
                    if (!matchedCards.includes(card)) {
                        card.addEventListener('click', flipCard);
                    }
                });
            }, 500);
        }

    }

}


cards.forEach(card => card.addEventListener('click', flipCard));




