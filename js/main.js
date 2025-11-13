// Goal: Make a 10 card memory game - users must be able to select two cards and check if they are a match. If they are a match, they stay flipped. If not, they flip back over. Game is done when all cards are matched and flipped over.
// User clicks on cells to determine which fruit it is
// User selects 2 fruits at a time
// if 2 fruits are the same, keep the fruits faced up 
// if 2 fruits selected are different, keep the fruits facedown
// once all fruits are matched, alert winner "fruitastic!"
// user can press reset to start another game

const container = document.querySelector('#container')
document.querySelector('#container').addEventListener('click', flipFruit);
document.querySelector('button').addEventListener('click', newGame);

let hasFlipped = false;
let firstCard, secondCard;

function newGame() {
    // array.from creates an array out of something. 
    // below, we created an array from the div cell elements and added a forEach to give each element facedown class, i.e hid all fruits when reset 'button' is pressed
    Array.from(document.querySelectorAll('#container div')).forEach(div => {div.classList.add('facedown');div.classList.remove('locked')})
    for (let i = 0; i < 10; i++) {
        let randomNum = Math.floor(Math.random() * container.children.length)
        // this takes the container and the div cell (i.e appendChild) and grabs a random child from the div cells and then moves it to the bottom of the children (i.e div cell)
        container.appendChild(container.children[randomNum])
    }
    hasFlipped = false;
    firstCard = null;
    secondCard = null;
}
newGame()

// in this case we put event as a parameter in the function, since it is the event listener
function flipFruit(event) {
    // if the clicked card has been match and user clicks the card again, ignore the click. 
    if (event.target.classList.contains('locked'))
        return;
    if (firstCard === event.target)
        return;
    // .contains is a classList function, that checks to see if an element has specified class which lets us know if it has been matched.
    // event.target is the div element that the event is happening on the ('click')
    // we used the .classList.remove, to remove the facedown class
    event.target.classList.remove('facedown')
    // '!' is 'not' which reverses the boolean value 
    // '!=' means 'not equals' 
    // '!hasFlipped' is the same as 'hasFlipped!=true' 
    if (hasFlipped != true) {
        // first click
        hasFlipped = true;
        firstCard = event.target;

    } else {
        // second click
        hasFlipped = false;
        secondCard = event.target;

        checkForMatch();
    }
}

function checkForMatch() {
    let isMatch = firstCard.classList.value === secondCard.classList.value;
    if (isMatch) {
        firstCard.classList.add('locked');
        secondCard.classList.add('locked');
    }
    // if the first card is equal to the second card, I want to lock the cards in place to display the matched fruit pair. 
    // If the first card is not equal to the second card, I want to flip the cards over (i.e add facedown)
    if (!isMatch) {
        setTimeout(() => {
            firstCard.classList.add('facedown');
            secondCard.classList.add('facedown');
        }, 1500);

    }
}
// completed with the help of Michael Kazin during weekend tutor/help hours