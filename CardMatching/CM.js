// House Hayden worked together on this Davida, Kiany, Jasmin, Guthemberg, Eden, Alief.
document.querySelector('.cardSection').addEventListener('click', matchingCards);
document.querySelector('button').addEventListener('click' , shuffleCards)
let cardOrder = [],
    selected = [],
    matched = 0;
function shuffleCards() {
    cardOrder = [];
    let card1 = 'ahri.png',
        card2 = 'Brand.png',
        card3 = 'Lux.png',
        card4 = 'Quinn.png',
        card5 = 'Thresh.png',
        cards = [card1, card1, card2, card2, card3, card3, card4, card4, card5, card5];
    const deck = document.querySelectorAll('.card');
    //in deck for each card, do the following
    deck.forEach(card => {
        let random;
        do {
            random = Math.floor(Math.random() * 10)
        } while (cards[random] === undefined)
        cardOrder.push(cards[random]);
        card.style.backgroundImage = 'url(lolback.png';
        delete cards[random];
    });
    console.log(cardOrder)
}
//Shuffle the cards update cardOrder with the current game's order
shuffleCards();
function matchingCards(e) {

    console.log(e.target.className)
    if (e.target.className === 'card'){
        // console.log(e.target)
        let cardNumber = e.target.dataset.value;
        selected.push(e.target);
        e.target.style.backgroundImage = `url( ${cardOrder[cardNumber]}`;
    }
    if (selected.length === 2) {
        document.querySelector('.cardSection').removeEventListener('click', matchingCards);
        //All other cards are unclickable
        if (selected[0].style.backgroundImage === selected[1].style.backgroundImage) {
            matched++;
        }
        else {
            setTimeout(() => {
                selected[0].style.backgroundImage = 'url(lolback.png';
                selected[1].style.backgroundImage = 'url(lolback.png'; 
            }, 1000);
        }
        setTimeout(() => {
            selected = [];
            document.querySelector('.cardSection').addEventListener('click', matchingCards);
        }, 1000);
       
        //Cards are clickable once again
    }
     console.log(selected);
}