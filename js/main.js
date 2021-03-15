document.querySelector('.cardSection').addEventListener('click', matchingCards);
let cardOrder = [],
    selected = [],
    matched = 0;
function shuffleCards() {
    cardOrder = [];
    count = 0 
    // moveCount.innerHTML = count
    let card1 = '/images/Beyonce.png',
        card2 = '/images/Letoya-Luckett.jpg',
        card3 = '/images/Kelly-Rowland.jpg',
        card4 = '/images/LaTavia-Roberson.png',
        card5 = '/images/Michelle-Williams.jpg',
        cards = [card1, card1, card2, card2, card3, card3, card4, card4, card5, card5];
    const deck = document.querySelectorAll('.card');
    deck.forEach(card => {
        let random;
        do {
            random = Math.floor(Math.random() * 10)
        } while (cards[random] === undefined)
        cardOrder.push(cards[random]);
        card.style.backgroundImage = 'url("/images/dc5.png")';
        delete cards[random];
    });
}
//Shuffle the cards update cardOrder with the current game's order
shuffleCards();
function matchingCards(e) {
    if (e.target.className === 'card'){
        let cardNumber = e.target.dataset.value;
        selected.push(e.target);
        let img= cardOrder[cardNumber]
        e.target.style.backgroundImage = `url( ${img})`;
    }
    if (selected.length === 2) {
        document.querySelector('.cardSection').removeEventListener('click', matchingCards);
        //All other cards are unclickable
        if (selected[0].style.backgroundImage === selected[1].style.backgroundImage) {
            matched++;
        }
        else {
            setTimeout(() => {
                selected[0].style.backgroundImage = 'url("/images/dc5.png")';
                selected[1].style.backgroundImage = 'url("/images/dc5.png")'; 
            }, 1000);
        }
        setTimeout(() => {
            selected = [];
            document.querySelector('.cardSection').addEventListener('click', matchingCards);
        }, 1000);
        console.log(selected);
        //Cards are clickable once again
    }
}