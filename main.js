/*PSUEDO CODE
 Make a 10 card memory game
 - users must be able to select two cards 
  check if they are a match. 
  If they are a match = they stay flipped. 
  If not, they flip back over. 
 Game is done when all cards are matched and flipped over.



toggle the value images of card when clicked  == advrnt listtner
(allows  card to flip over or show value)

function where you click on 1 card and it will stay flipped
till compared with 2nd card


function where you to select two cards & comapre the values

make if else conditions
if card has the same value as the other = STAY FLIPPED
if not = flip back over = toggle back off = display none


function that alerts player the game is over because there are n more cards
alert
///////////////////////////////////////
//////////////////////////////////////
Using true and false to determine the flipping

state management
when player clicks card //even
card is revealed
card stays revealed
card is lollipop
then
second card is clicked
second card is revealed
carfd is also lollipop

if card 1 and card 2 is equal, card stays revealed

if card 1 does not equal to card 2
both card hides

*/
const image1 = 'img/mpic1.jpg'
const image2 = 'img/mpic2.jpg'
const image3 = 'img/mpic3.jpg'
const image4 = 'img/mpic4.jpg'
const image5 = 'img/mpic5.jpg'
const image6 = 'img/mpic1.jpg'
const image7 = 'img/mpic2.jpg'
const image8 = 'img/mpic3.jpg'
const image9 = 'img/mpic4.jpg'
const image10 = 'img/mpic5.jpg'

let imageAll = document.querySelectorAll('img')
let cardDeck = document.querySelector('main')
let cardAll = document.querySelectorAll('.card')

const button = document.querySelector('#refresh')

let compareCard = []
let clickCount = 0

let printArray = (arrCard, n)=>
{
    ans = '';
    for (let i = 0; i < n; i++)
    {
        ans += arrCard[i] + " ";
    }
    console.log(ans);
}

let randomize = (arrCard, n) =>{
 
    // Start from the last element and swap
    // one by one. We don't need to run for
    // the first element that's why i > 0
    for (let i = n - 1; i > 0; i--)
    {
     
        // Pick a random index from 0 to i inclusive
        let j = Math.floor(Math.random() * (i + 1));
 
        // Swap arr[i] with the element
        // at random index
        [arrCard[i], arrCard[j]] = [arrCard[j], arrCard[i]];
    }
}
// Driver Code
let arrCard = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10]
let n = arrCard.length;
let m = imageAll.length
randomize(arrCard, n)
printArray(arrCard, n);

for ( let i = 0; i < arrCard.length; i++ ) {
    imageAll[i].src = arrCard[i]
}



function matchCard(a) {
    if( a[1].src === a[2].src) {
        console.log(true)
        a[0].classList.toggle('hidden')
        a[1].classList.toggle('match')
        a[2].classList.toggle('match')
        compareCard = []
        clickCount = 0 
    } else if ( a[1].src !== a[2].src){
        console.log(false)
        a[0].classList.toggle('hidden')
        a[1].classList.toggle('hidden')
        a[2].classList.toggle('hidden')
        compareCard = []
        clickCount = 0  
    }
}

function match(e){
    if( e.target.querySelector('img').classList.contains('match')) {
        e.target.querySelector('img').removeEventListener('click', match)
    } else {
        clickCount++
    e.target.querySelector('img').classList.toggle('hidden')
    console.log(e.target.querySelector('img'))
    compareCard.unshift(e.target.querySelector('img'))
    if( clickCount ===3 ) {
        console.log(compareCard)
        matchCard(compareCard)
    }
    }
    
}
 
function resetGame(e) {
    compareCard = []
    clickCount = 0 
    for ( let j = 0; j < arrCard.length; j++ ) {
        imageAll[j].classList.remove('match')
        imageAll[j].classList.remove('hidden')
    }
    
    randomize(arrCard, n)
    printArray(arrCard, n)
    for ( let t = 0; t < arrCard.length; t++ ) {
        imageAll[t].src = arrCard[t]
    }
}

button.addEventListener('click', resetGame)
cardDeck.addEventListener('click', match)