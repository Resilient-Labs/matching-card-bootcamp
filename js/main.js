let cards = {
    card1: "",
    card2: "",
    card3: "",
    card4: "",
    card5: "",
    card6: "",
    card7: "",
    card8: "",
    card9: "",
    card10: "",
}

//List to shuffle
let images = ["forest", "forest", "island", "island", "mountain", "mountain", "plains", "plains", "swamp", "swamp"];

//List to keep track of current pair
let pairs = [];

//List to keep track of total pairs
let pairsPlayed = [];

//List to keep track of ID's
let cardsID = [];

// I used the Fisher-Yates Shuffle (https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
};

// Shuffle the items of the array
shuffle(images);

// Assign the src value to each card
cards.card1 = `/media/${images[0]}.jpg`;
cards.card2 = `/media/${images[1]}.jpg`;
cards.card3 = `/media/${images[2]}.jpg`;
cards.card4 = `/media/${images[3]}.jpg`;
cards.card5 = `/media/${images[4]}.jpg`;
cards.card6 = `/media/${images[5]}.jpg`;
cards.card7 = `/media/${images[6]}.jpg`;
cards.card8 = `/media/${images[7]}.jpg`;
cards.card9 = `/media/${images[8]}.jpg`;
cards.card10 = `/media/${images[9]}.jpg`;

// Event listeners to change image src
document.querySelector('#card-1').addEventListener('click', changeImage1);
function changeImage1() {
    //Change image
    document.querySelector('#card-1').src = cards.card1;

    //Adds ID to list to track history of the first card played
    cardsID.push("#card-1");

    //Adds the card played to compare the value with the second card
    pairs.push(cards.card1)
    checkPair(cards.card1)
}

//Repeat for each card
document.querySelector('#card-2').addEventListener('click', changeImage2);
function changeImage2() {
    document.querySelector('#card-2').src = cards.card2;

    cardsID.push("#card-2");

    pairs.push(cards.card2)
    checkPair(cards.card2)
}

document.querySelector('#card-3').addEventListener('click', changeImage3);
function changeImage3() {
    document.querySelector('#card-3').src = cards.card3;

    cardsID.push("#card-3");

    pairs.push(cards.card3)
    checkPair(cards.card3)
}

document.querySelector('#card-4').addEventListener('click', changeImage4);
function changeImage4() {
    document.querySelector('#card-4').src = cards.card4;

    cardsID.push("#card-4");
    
    pairs.push(cards.card4)
    checkPair(cards.card4)
}

document.querySelector('#card-5').addEventListener('click', changeImage5);
function changeImage5() {
    document.querySelector('#card-5').src = cards.card5;

    cardsID.push("#card-5");

    pairs.push(cards.card5);
    checkPair(cards.card5);
}

document.querySelector('#card-6').addEventListener('click', changeImage6);
function changeImage6() {
    document.querySelector('#card-6').src = cards.card6;

    cardsID.push("#card-6");

    pairs.push(cards.card6)
    checkPair(cards.card6)
}

document.querySelector('#card-7').addEventListener('click', changeImage7);
function changeImage7() {
    document.querySelector('#card-7').src = cards.card7;

    cardsID.push("#card-7");

    pairs.push(cards.card7)
    checkPair(cards.card7)
}

document.querySelector('#card-8').addEventListener('click', changeImage8);
function changeImage8() {
    document.querySelector('#card-8').src = cards.card8;

    cardsID.push("#card-8");

    pairs.push(cards.card8)
    checkPair(cards.card8)
}

document.querySelector('#card-9').addEventListener('click', changeImage9);
function changeImage9() {
    document.querySelector('#card-9').src = cards.card9;
    pairs.push(cards.card9)

    cardsID.push("#card-9");

    checkPair(cards.card9)
}

document.querySelector('#card-10').addEventListener('click', changeImage10);
function changeImage10() {
    document.querySelector('#card-10').src = cards.card10;
    pairs.push(cards.card10);

    cardsID.push("#card-10");

    checkPair(cards.card10)
}

function checkPair(card) {
    if (pairs.length === 1) {
        return
    } else if (pairs[0] === card && pairs[1] === card) {
        //Reset cardsID list
        cardsID = []

        //Adds card to the list to capture the total amount of correct pairs played
        pairsPlayed.push(card);

        //Reset pairs list to erase two previous cards played
        pairs = [];

        checkWin()
        return
    } else {
        setTimeout(() => {
            changeBack()
        }, "500")
    }
};

//Checks dynamic list to count the amount of pairs played
function checkWin() {
    if (pairsPlayed.length >= 5) {
        console.log('You WIN')
    }
}

//Changes the img.src to default back
function changeBack() {
    document.querySelector(cardsID[0]).src = "media/back.jpg";
    document.querySelector(cardsID[1]).src = "media/back.jpg";

    //Resets lists
    cardsID = []
    pairs = []
}
