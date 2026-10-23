// alert('works')
/* i need it to display 10 cards at a time
10/2 , 5 pairs 
use 52 cards, number and emoji and random cards 
//https://www.piliapp.com/emoji/list/playing-cards/
https://www.codynn.com/labs/create/68ff6904bfe949566d4f4bc7
https://www.youtube.com/watch?v=aq8mv_7nIxI
the player presses the play button for game to staart 
the inital score is zero
when play clicks on two cards then validate if theyre a match
if not they cards flip back over
if it matches the card stay flipped
game ends when they players matches all card? or a time limit of 60 seconds to match
or moves? 
10 cards, 6 moves? 
if matcched in lesss than 6 moves they win, if not they lose? 

first jsut cards and matches

think about OOP , what are the potential classes
-game class 
-card? 
player? 
const card1 = ["♠️", "♥️", "♦️", "♣️"]; too difficult to css 

const card2 = ["🂡", "🂢", "🂣", "🂤", "🂥", "🂦", "🂧", "🂨", "🂩", "🂪", "🂫", "🂭", "🂮"];

let card = [...card1, ...card2];

each match is one point so 5 points is all 10 cards 
*/ 

const card= ["🂡", "🂢", "🂣", "🂤", "🂥", "🂦", "🂧", "🂨", "🂩", "🂪", "🂫", "🂭", "🂮"];
//starting with nothing excapt the basic html and stuff 

let firstCard = null;
let lockboard = false;
let matchedCards = 0;
let score = 0;


// game start button on click event
document.getElementById("start").addEventListener("click", function () {


    document.getElementById("start").classList.add("playing") 
    
    const gameboard = document.getElementById("cards"); 
    //reset the inner html for the cards so we can remove the presets 
    gameboard.innerHTML = "";

    firstCard = null;
    lockboard = false;
    matchedCards = 0;
    score = 0;
    document.getElementById("initialScore").textContent = score;
    document.getElementById("winMessage").textContent = "";
    //use math random to mak the cards randomized and not the same output every time 
    const RandomizeCard = card.sort(() => 0.5 - Math.random()).slice(0, 5);

    // duplicate them so there are 5 pairs
    const duplicateCards = [ ...RandomizeCard, ...RandomizeCard ].sort(() => 0.5 - Math.random());

    //console.log(duplicateCards);

    // create the cards
    duplicateCards.forEach((symbol) => {
        const newCard = document.createElement("div");
        newCard.classList.add("card");

        // Remember which symbol is hidden
        newCard.dataset.card = symbol;
        // back of card blank card face
        newCard.textContent = "🂠";
        newCard.addEventListener("click", function () {
            revealCard(newCard);




        });
        gameboard.appendChild(newCard);


    });



});

// Reveal cards 
function revealCard(card) {

    /*don't allow clicking while board is locked
     user shouldnt be able to click matched cards so its locked 
     user cant click click the same card twice, its already showing 
     logic click -> show card -> cant click sowined card -> clicked second card -> matched turn green and stay ->unmatched then flip over */
    if (lockboard ||card.classList.contains("matched") ||card === firstCard) {
        return;
    }

    // show card
    card.textContent = card.dataset.card;
    card.classList.add("reveal");

    // the first card
    if (!firstCard) {firstCard = card;
        return;


    }
    // The second card 
    // check if they match
    if (firstCard.dataset.card === card.dataset.card) {
        // when cardmatch
        firstCard.classList.add("matched");
        card.classList.add("matched");
        matchedCards += 2;
        score += 1;
        document.getElementById("initialScore").textContent = score;
        firstCard = null;

        // all 10 cards matched
        if (matchedCards === 10) {
            document.getElementById("winMessage").textContent =`You found all matches, click play again to play`;
        }

    } else {
        lockboard = true;
        /*
        counting based on 100o ms,   1s 
        matched or not, adding wait time 
        */

        setTimeout(function () {
            // flip both cards back
            firstCard.textContent = "🂠";
            card.textContent = "🂠";

            firstCard.classList.remove("reveal");
            card.classList.remove("reveal");
            firstCard = null;
            lockboard = false;
        }, 1000);



    }
}