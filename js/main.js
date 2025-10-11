
class memoryGame {
    constructor() {
        this.tries = 0;
        this.cards = ['rohan-one', 'rohan-two', 'anasui-one', 'anasui-two', 'gyro-one', 'gyro-two', 'josuke-one', 'josuke-two', 'jotaro-one', 'jotaro-two'];
        this.turned = 0;
        this.selected = [];
        this.combos = 0;
    }
    setUp() {
        //shuffle cards using Fisher-Yates shuffle
        for (let i = this.cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); //0 - i
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
        //create card tags
        this.cards.forEach(myCard => {
            const { card, img } = createCard();
            img.src = `assets/${myCard.split('-')[0]}.jpg`;
            img.alt = myCard;
            card.classList.add(myCard)
        });
    }
}


const round = new memoryGame();
round.setUp();

const cards = document.querySelectorAll('.card');
cards.forEach(card => card.addEventListener('click', () => game(card)));


function game(card) {
    const img = card.querySelector('img');
    img.style.visibility = 'visible';
    //click 2 cards disable the rest
    console.log(card.className.split(" ")[1]);
    round.selected.push(card.className.split(" ")[1]);
    round.turned += 1;
    //Compare cards
    console.log(round.turned)
    if (round.turned === 2) {
        cards.forEach(c => c.style.pointerEvents = 'none')
        compareCards(round.selected);
    }
}

function compareCards(arr) {
    console.log(arr);
    if (arr[0].split('-')[0] != arr[1].split('-')[0]) {
        setTimeout(() => {
            arr.forEach(a => {
                const img = document.querySelector(`div.${a} img`);
                img.style.visibility = 'hidden';
            })
            round.tries += 1;
            document.querySelector('h2').innerText = `Tries: ${round.tries}`;
            cards.forEach(c => c.style.pointerEvents = 'all')
        }, 1000)
    } else if (arr[0].split('-')[0] === arr[1].split('-')[0]) {
        cards.forEach(c => c.style.pointerEvents = 'all');
        round.combos += 1;
        arr.forEach(a => {
            const img = document.querySelector(`div.${a}`);
            img.style.border = '20px solid rgba(255, 6, 6, 0.27)';
        })
        //mark it with css
        if (round.combos === 5)
            document.querySelector('h2').innerText = `Game over! It took you ${round.tries} tries`;
    }

    round.selected = [];
    round.turned = 0;
}


function createCard() {
    //Create a card
    const cards = document.querySelector('#cards');
    const card = document.createElement('div');
    card.className = 'card';
    //Create card's content
    const img = document.createElement('img');
    img.src = '';
    img.alt = '';
    //Connect tags
    card.append(img);
    cards.append(card);
    //return tags as an {} to diconstruct
    return { card, img };
}


