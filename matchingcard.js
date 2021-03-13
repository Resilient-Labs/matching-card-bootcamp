
// Worked with my House Hayden on this one 


// we added a eventlister to the ul in HTML with an id "gameTable" .. will run 
// the function named pairedCards 
document.querySelector('#gameTable').addEventListener('click', pairedCards);
document.querySelector('#reset').addEventListener('click',jumbleCards);

// Declared our  Global variables
// gameOrder holds the cards's position during the game 
// selected checks if the cards match
// matched is the counter.
let gameOrder = [],
    selected = [],
    matched = 0;

function jumbleCards() {
  matched=0
  document.getElementById('matched').innerHTML = "Matched: " + matched;

  

     //first assigned images to each variable 
    let card1 = '\'Madagascar-Alex-icon.png',
        card2 = '\'Madagascar-Gloria-icon.png',
        card3 = '\'Madagascar-Melman-icon.png',
        card4 = '\'Madagascar-Mort-icon.png',
        card5 = '\'Madagascar-Skipper-icon.png',
        cards = [card1, card1, card2, card2, card3, card3, card4, card4, card5, card5];
    // deck holds all the elements from that have the  the class 'listCard'
    const deck = document.querySelectorAll('.listCard');
    //For each card do the following 
    deck.forEach(card => {
        // Created random variable 
        let random;
        // generate a random number and store in var until giving an index
        //in array cards
        do {
            random = Math.floor(Math.random() * 10)
        } while (cards[random] === undefined)
        //Stores card that's in array (random)
        gameOrder.push(cards[random]);
        // to give a image to the back of our cards 
        card.style.backgroundImage = 'url(\'background.jpg';
        //deletes the content in array, cards, at index, random
        delete cards[random];
    });
    console.log(gameOrder);
}
//jumbleCards() to shuffle cards at page load for no event listener 
jumbleCards();
// function for whatever card was selected
// woul be stored in a array 
function pairedCards(e) {
    //If the selected item has a class of 'listCard'
    // store the datavalue to variable CardNumber
        
        if (e.target.className === 'listCard'){
        let cardNumber = e.target.dataset.value;
        selected.push(e.target);
        e.target.style.backgroundImage = `url( ${gameOrder[cardNumber]}`;
    }//give that card the background that is in the stored array,

      //to remove the eventListener 
    if (selected.length === 2) {
        document.querySelector('#gameTable').removeEventListener('click', pairedCards);
        //the other cards are unclickable
        if (selected[0].style.backgroundImage === selected[1].style.backgroundImage) {
           
matched ++; 
document.getElementById('matched').innerHTML = "Matched: " + matched;

        }
        //If they're not the same
            //this where one 1 sec before each element receives a background of background.jpg
        else {
            setTimeout(() => {
                selected[0].style.backgroundImage = 'url(\'background.jpg';
                selected[1].style.backgroundImage = 'url(\'background.jpg';
            }, 1000);
        }
        //wait 1 second (1000 = 1sec and 2000= 2sec ) for cards to flip back before clearing out array 
        //and again eventlistner is on again
        setTimeout(() => {
            selected = [];
            document.querySelector('#gameTable').addEventListener('click', pairedCards);
        }, 1000);
        console.log(selected);
        //cards are clickable once again
    }

  }