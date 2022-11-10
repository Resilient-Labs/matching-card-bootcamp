let cards = document.querySelectorAll('div');

cards.forEach(card => card.addEventListener('click', flip))

let counter = 0;
let winCounter = 0;
let matched = [];
let currentCards = [];
let deck = ["js/oxygen.jpg", "js/nitrogen.jpg", "js/iron.jpg", "js/hydrogen.jpg", "js/carbon.jpg", "js/oxygen.jpg", "js/nitrogen.jpg", "js/iron.jpg", "js/hydrogen.jpg", "js/carbon.jpg"];


// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    
    return array;
}


let decks = shuffle(deck);
//Received help from House Hayden for Flip Function
function flip() {
    const cardnumber = this.className;
    console.log(this.className)
    if (cardnumber === "one"){
        this.style.backgroundImage = "url(" + decks[0] + ")";
    } else if (cardnumber === "two"){
        this.style.backgroundImage = "url(" + decks[1] + ")";
    }
    else if (cardnumber === "three"){
        this.style.backgroundImage = "url(" + decks[2] + ")";
    }
    else if (cardnumber === "four"){
        this.style.backgroundImage = "url(" + decks[3] + ")";
    }
    else if (cardnumber === "five"){
        this.style.backgroundImage = "url(" + decks[4] + ")";
    }
    else if (cardnumber === "six"){
        this.style.backgroundImage = "url(" + decks[5] + ")";
    }
    else if (cardnumber === "seven"){
        this.style.backgroundImage = "url(" + decks[6] + ")";
    }
    else if (cardnumber === "eight"){
        this.style.backgroundImage = "url(" + decks[7] + ")";
    }
    else if (cardnumber === "nine"){
        this.style.backgroundImage = "url(" + decks[8] + ")";
    }
    else if (cardnumber === "ten"){
        this.style.backgroundImage = "url(" + decks[9] + ")";
    }
    else console.log ("error")
    //end of help received from House Hayden
    currentCards.push(this);
    if (currentCards.length === 2) {
        if (currentCards[0].style.backgroundImage === currentCards[1].style.backgroundImage) {
            matched.push(currentCards[0], currentCards[1]);
            currentCards = [];
            winCounter++;
            if (winCounter === 5) {
                alert("You win!");
            }
        } else {
            setTimeout(function() {
                currentCards[0].style.backgroundImage = "url(js/redchem.jpg)";
                currentCards[1].style.backgroundImage = "url(js/redchem.jpg)";
                currentCards = [];
            }, 500);
        }
    }
}

let reset= document.querySelector('.reset').addEventListener("click", resetCards);
function resetCards() {
    window.location.reload();
}














        

   