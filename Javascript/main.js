const cards = document.querySelectorAll('.cards');
let winner = document.querySelector('h2'); 
// card storage once the first card is clicked 
let cardBox = null
const btn = document.querySelector('button')




// Add click event listener to all cards
cards.forEach(card => {
    card.addEventListener('click', function () {
        // Toggle the flip class on the clicked card
        this.classList.toggle('flip');

        // to store the first card, "this" is the elemen and cardBox is the variable we're using to store the card
        if (cardBox == null) {
            cardBox = this
        } else {
            matchCheck(cardBox, this)
            cardBox = null
        }
    });
});

// click first card and store it

function matchCheck(first, second) {
    let firstCard = first.querySelector('.card-front').src
    let secondCard = second.querySelector('.card-front').src



    if (firstCard === secondCard) {
        first.classList.add('match')
        second.classList.add('match')



    } else {
        first.classList.toggle('flip');
        second.classList.toggle('flip');
    }
    // once all cards are matched, the game is over and the player wins
    let allMatches = document.querySelectorAll('.match')
    if (allMatches.length == 10) {
        winMessage = "You Win!"
        winner.innerText = `${winMessage}`
        btn.style.display = "inline-block";
        

    }
}

btn.addEventListener('click', function () {
    cards.forEach(card => {
        card.classList.remove('flip');
        card.classList.remove('match');
    });
    winner.innerText = '';
    btn.style.display = "none";
    cardBox = null;
});








