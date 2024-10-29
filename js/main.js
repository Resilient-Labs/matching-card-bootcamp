/*

LOGIC:
X. Take 2 cards as parameters for the function. Possibly make a class to catch the user input? Or just make 2 variables?
0. Have event listeners for each card. If a card is clicked add a style to mimic the card being flipped
0. Use conditionals to match the parameters to a winning set of conditionals
0. If no winning conditionals hide both parameters (cards that were clicked)

ISSUES:
1. Card reveal- Should I have "2 cards" layered on top of one another then remove the card on top to reveal the card on the bottom ---OR--- Add and remove the image side every time the user clicks on a card
- The 2 layered card idea started to get complicated, so I switched to adding and removing images on the cards

OUT OF SCOPE:
0. Shuffle the cards

*/















// HOLD CLICKS?- not sure if storing clicks in parameters is effective. Let's just keep track of which cards are 'faced up'
// class clickHold {
//     constructor(clickOne, clickTwo) {
//         this.clickOne = clickOne,
//         this.clickTwo = clickTwo
//     }
// }

// let clickOne = new clickHold(true, false) // false means no, while true means that value exists in the variable
// let clickTwo = new clickHold(false, true)

// let currentFace = " "
let flippedCards = []; // To track currently flipped cards

// MATCH CONDITIONS
function matchCondition() {

    // VALUE INPUTS- store the box value
    // let dog1 = document.getElementById('dog1').innerText;
    // let dog2 = document.getElementById('dog2').innerText;
    // let rabbit1 = document.getElementById('rabbit1').innerText;
    // let rabbit2 = document.getElementById('rabbit2').innerText;
    // let fox1 = document.getElementById('fox1').innerText;
    // let fox2 = document.getElementById('fox2').innerText;
    // let frog1 = document.getElementById('frog1').innerText;
    // let frog2 = document.getElementById('frog2').innerText;
    // let panda1 = document.getElementById('panda1').innerText;
    // let panda2 = document.getElementById('panda2').innerText;

// TROUBLESHOOTING => STALLED MATCHES- MATCH BEFORE STALL
    // Foxes- after one match (rabbits)
    
    // Rabbits- after one match (dogs)
    // Rabbits- after 2 matches (pandas, dogs)
    // Rabbits- after 2 matches (foxes, dogs) 

    // Pandas- after one match (frogs)
    // Pandas- after one match (foxes)
    // Pandas- after one match (dogs)


    // CONDITIONALS
    // if ((dog1 === "🐶") && (dog2 === "🐶")){
    //     console.log("Dogs are a match")
    //     // document.querySelector('h2').innerText = "It's a Match!"
    //     // document.getElementById('dog1').style.display = "none"
    //     // document.getElementById('dog2').style.display = "none"
    //     document.getElementById('dog1').remove();
    //     document.getElementById('dog2').remove();
    //     currentFace = " "
    // } else if ((rabbit1 === "🐰") && (rabbit2 === "🐰")) {
    //     console.log("Rabbits are a match")
    //     // document.getElementById('rabbit1').style.display = "none"
    //     // document.getElementById('rabbit2').style.display = "none"
    //     document.getElementById('rabbit1').remove();
    //     document.getElementById('rabbit2').remove();
    //     currentFace = " "
    // } else if ((fox1 === "🦊") && (fox2 === "🦊")) {
    //     console.log("Foxes are a match")
    //     // document.getElementById('fox1').style.display = "none"
    //     // document.getElementById('fox2').style.display = "none"
    //     document.getElementById('fox1').remove();
    //     document.getElementById('fox2').remove();
    //     currentFace = " "
    // } else if ((frog1 === "🐸") && (frog2 === "🐸")) {
    //     console.log("Frogs are a match")
    //     // document.getElementById('frog1').style.display = "none"
    //     // document.getElementById('frog2').style.display = "none"
    //     document.getElementById('frog1').remove();
    //     document.getElementById('frog2').remove();
    //     currentFace = " "
    // } else if ((panda1 === "🐼") && (panda2 === "🐼")) {
    //     console.log("Pandas are a match")
    //     // document.getElementById('panda1').style.display = "none"
    //     // document.getElementById('panda2').style.display = "none"
    //     document.getElementById('panda1').remove();
    //     document.getElementById('panda2').remove();
    //     currentFace = " "
    // }
    // else {
    //     console.log("Not a match") // The player keeps playing the game until they trigger a winning conditionn
    // }



// Check for matches
if (flippedCards.length === 2) { // Only 2 cards in this array
    const [firstCard, secondCard] = flippedCards; // Giving parameters to the array

    const firstValue = firstCard.innerText; // First card will be populated by what was clicked
    const secondValue = secondCard.innerText; // Second card will be populated by what was clicked

    // if (firstValue === secondValue) { // Check if they match
    //     console.log(`${firstValue}s are a match`);
    //     firstCard.dataset.matched = "true"; // Mark as matched
    //     secondCard.dataset.matched = "true"; // Mark as matched
    //     firstCard.remove(); // Remove matched cards from DOM
    //     secondCard.remove();
    //     flippedCards = []; // Clear the flipped cards array
    //     checkGameCompletion();
    // } else {
    //     console.log("Not a match");
    //     // If not a match, flip cards back
    //     setTimeout(() => {
    //         firstCard.innerText = ""; // Reset to hidden state
    //         secondCard.innerText = ""; // Reset to hidden state
    //         flippedCards = []; // Clear the array
    //     }, 1000); // Wait for 1 second before flipping back
    // }

    if ((firstValue === "🐶" && secondValue === "🐶")) { // If both cards in the flipped card array are dogs then they're a match
        console.log("Dogs are a match");
        firstCard.remove();
        console.log(`Removed: ${firstCard.id}`); // The dog1 card is removed from DOM after match
        secondCard.remove();
        console.log(`Removed: ${secondCard.id}`); // The dog2 card is removed from DOM after match
        flippedCards = [];
    } else if ((firstValue === "🐰" && secondValue === "🐰")) {
        console.log("Rabbits are a match");
        firstCard.remove();
        secondCard.remove();
        flippedCards = [];
    } else if ((firstValue === "🦊" && secondValue === "🦊")) {
        console.log("Foxes are a match");
        firstCard.remove();
        secondCard.remove();
        flippedCards = [];
    } else if ((firstValue === "🐸" && secondValue === "🐸")) {
        console.log("Frogs are a match");
        firstCard.remove();
        secondCard.remove();
        flippedCards = [];
    } else if ((firstValue === "🐼" && secondValue === "🐼")) {
        console.log("Pandas are a match");
        firstCard.remove();
        secondCard.remove();
        flippedCards = [];
    } else {
        // If not a match, flip cards back after a second delay
        setTimeout(() => {
            firstCard.innerText = ""; // Reset first card
            secondCard.innerText = ""; // Reset second card
            flippedCards = []; // Clear the array
        }, 1000); // 1 second delay
    }


    } // End of flipped cards if statement

}

function checkGameCompletion() {
    const cards = document.querySelectorAll('.card'); 
    const remainingCards = Array.from(cards).filter(card => card.innerText !== "");

    console.log(`Remaining cards: ${remainingCards.length}`);
    console.log('Remaining card elements:', remainingCards.map(card => card.outerHTML));

    if (remainingCards.length === 0) {
        console.log("All cards matched! Game Over!");
        document.querySelector('h2').innerText = "Congratulations! You've matched all cards!";
    }
}

// function cardClick(cardId, animalEmoji) {
//     document.getElementById(cardId).addEventListener('click', function() {
//         const value = this; // Reference to the clicked card

//         // Check if the card is already matched or flipped down
//         if (value.innerText === '' || value.dataset.matched) {
//             console.log("Card already matched or flipped down");
//             return; // Ignore if the card is already matched or flipped down
//         }

//         console.log(`${animalEmoji} clicked`);
//         value.innerText = animalEmoji; // Show the card
//         flippedCards.push(value); // Track flipped card

//         if (flippedCards.length === 2) {
//             matchCondition();
//         }
//     });
// }

// // Setup event listeners for each card
// cardClick('dog1', '🐶');
// cardClick('dog2', '🐶');
// cardClick('rabbit1', '🐰');
// cardClick('rabbit2', '🐰');
// cardClick('fox1', '🦊');
// cardClick('fox2', '🦊');
// cardClick('frog1', '🐸');
// cardClick('frog2', '🐸');
// cardClick('panda1', '🐼');
// cardClick('panda2', '🐼');




// EVENT LISTENERS FOR ALL OF THE CARDS

// EVENT LISTENER - DOG 1
document.getElementById('dog1').addEventListener('click', function() {

    console.log("Dog 1 click works")

    // Detect the current face of the card
    // let currentFace = document.getElementById('dog1').getAttribute('value')
    const value = document.getElementById('dog1')
    console.log(value)

    currentFace = value.innerText; // Removed .textContent
    console.log(currentFace)

    if (currentFace === '🐶') {
        // document.getElementById('dog1').innerText = ' ' //dogCard1[1]
        value.innerText = ''; // Reset if matched
        flippedCards.push(value); // Track flipped card
        
    } else {
        // document.getElementById('dog1').innerText = '🐶' //dogCard1[0]
        value.innerText = '🐶'; // Show the card
        flippedCards.push(value); // Track flipped card
        
    } 

    if (flippedCards.length === 2) {
        matchCondition();
    }

    // How do I account for the card being the first and/or second card selected AND how many times it was clicked? (1 time= shown, 2 times = hidden)

    // If this function is clicked switch between 2 boolean values: binary values (><)

    // If this card is the first click fill the first parameter in a function, if not (it's the second click) then run the matchCondition()

    // let dogCard1 = ['🐶', null]

    // if (e === true) {
    //     console.log("If statement works")
    //     // Storing the clicked area in a variable and populating it with a dog emoji
    //     click = e.target
        
    //     click.innerText = "Dog"

    //     matchConditions(click, clickTwo)
    // }

    // Show dog
})

// EVENT LISTENER - DOG 2
document.getElementById('dog2').addEventListener('click', function() {

    console.log("Dog 2 click works")
    // Detect the current face of the card
    // let currentFace = document.getElementById('dog1').getAttribute('value')
    const value = document.getElementById('dog2')
    console.log(value)

    currentFace = value.innerText;
    console.log(currentFace)

    if (currentFace === '🐶') {
        // document.getElementById('dog2').innerText = ' ' //dogCard1[1]
        value.innerText = '';
        flippedCards.push(value);
        // matchCondition()
        // return
    } else {
        // document.getElementById('dog2').innerText = '🐶' //dogCard1[0]
        value.innerText = '🐶';
        flippedCards.push(value);
        // matchCondition()
        // return
    }

    if (flippedCards.length === 2) {
        matchCondition();
    }
})

// EVENT LISTENER - RABBIT 1
document.getElementById('rabbit1').addEventListener('click', function() {

    console.log("Rabbit 1 click works")
    // Detect the current face of the card
    // let currentFace = document.getElementById('dog1').getAttribute('value')
    const value = document.getElementById('rabbit1')
    console.log(value)

    currentFace = value.innerText;
    console.log(currentFace)

    if (currentFace === '🐰') {
        value.innerText = '';
        flippedCards.push(value);
        // document.getElementById('rabbit1').innerText = ' ' //dogCard1[1]
        // matchCondition()
        // return
    } else if (currentFace !== '🐰') {
        value.innerText = '🐰'; // Show the card
        flippedCards.push(value);
        // document.getElementById('rabbit1').innerText = '🐰' //dogCard1[0]
        // matchCondition()
        // return
    } else {
        return "AHHH"
    }

    if (flippedCards.length === 2) {
        matchCondition();
    }
})

// EVENT LISTENER - RABBIT 2
document.getElementById('rabbit2').addEventListener('click', function() {

    console.log("Rabbit 2 click works")
    // Detect the current face of the card
    // let currentFace = document.getElementById('dog1').getAttribute('value')
    const value = document.getElementById('rabbit2')
    console.log(value)

    currentFace = value.innerText;
    console.log(currentFace)

    if (currentFace === '🐰') {
        value.innerText = '';
        flippedCards.push(value);
        // document.getElementById('rabbit2').innerText = ' ' //dogCard1[1]
        // matchCondition()
        // return
    } else if (currentFace !== '🐰') {
        value.innerText = '🐰'; // Reset if matched
        flippedCards.push(value);
        // document.getElementById('rabbit2').innerText = '🐰' //dogCard1[0]
        // matchCondition()
        // return
    } else {
        return "AHHH"
    }

    if (flippedCards.length === 2) {
        matchCondition();
    }
})

// EVENT LISTENER - FOX 1
document.getElementById('fox1').addEventListener('click', function() {

    console.log("Fox 1 click works")
    // Detect the current face of the card
    // let currentFace = document.getElementById('dog1').getAttribute('value')
    const value = document.getElementById('fox1')
    console.log(value)

    currentFace = value.innerText;
    console.log(currentFace)

    if (currentFace === '🦊') {
        value.innerText = ''; // Reset if matched
        flippedCards.push(value);
        // document.getElementById('fox1').innerText = ' ' //dogCard1[1]
        // matchCondition()
        // return
    } else if (currentFace !== '🦊') {
        value.innerText = '🦊'; // Reset if matched
        flippedCards.push(value);
        // document.getElementById('fox1').innerText = '🦊' //dogCard1[0]
        // matchCondition()
        // return
    } else {
        return "AHHH"
    }

    if (flippedCards.length === 2) {
        matchCondition();
    }
})

// EVENT LISTENER - FOX 2
document.getElementById('fox2').addEventListener('click', function() {

    console.log("Fox 2 click works")
    // Detect the current face of the card
    // let currentFace = document.getElementById('dog1').getAttribute('value')
    const value = document.getElementById('fox2')
    console.log(value)

    currentFace = value.innerText;
    console.log(currentFace)

    if (currentFace === '🦊') {
        value.innerText = ''; // Reset if matched
        flippedCards.push(value);
        // document.getElementById('fox2').innerText = ' ' //dogCard1[1]
        // matchCondition()
        // return
    } else if (currentFace !== '🦊') {
        value.innerText = '🦊'; // Reset if matched
        flippedCards.push(value);
        // document.getElementById('fox2').innerText = '🦊' //dogCard1[0]
        // matchCondition()
        // return
    } else {
        return "AHHH"
    }

    if (flippedCards.length === 2) {
        matchCondition();
    }
})

// EVENT LISTENER - FROG 1
document.getElementById('frog1').addEventListener('click', function() {

    console.log("Frog 1 click works")
    // Detect the current face of the card
    // let currentFace = document.getElementById('dog1').getAttribute('value')
    const value = document.getElementById('frog1')
    console.log(value)

    currentFace = value.innerText;
    console.log(currentFace)

    if (currentFace === '🐸') {
        value.innerText = ''; // Reset if matched
        flippedCards.push(value);
        // document.getElementById('frog1').innerText = ' ' //dogCard1[1]
        // matchCondition()
        // return
    } else if (currentFace !== '🐸') {
        value.innerText = '🐸'; // Reset if matched
        flippedCards.push(value);
        // document.getElementById('frog1').innerText = '🐸' //dogCard1[0]
        // matchCondition()
        // return
    } else {
        return "AHHH"
    }

    if (flippedCards.length === 2) {
        matchCondition();
    }
})

// EVENT LISTENER - FROG 2
document.getElementById('frog2').addEventListener('click', function() {

    console.log("Frog 2 click works")
    // Detect the current face of the card
    // let currentFace = document.getElementById('dog1').getAttribute('value')
    const value = document.getElementById('frog2')
    console.log(value)

    currentFace = value.innerText;
    console.log(currentFace)

    if (currentFace === '🐸') {
        value.innerText = ''; // Reset if matched
        flippedCards.push(value);
        // document.getElementById('frog2').innerText = ' ' //dogCard1[1]
        // matchCondition()
        // return
    } else if (currentFace !== '🐸') {
        value.innerText = '🐸'; // Reset if matched
        flippedCards.push(value);
        // document.getElementById('frog2').innerText = '🐸' //dogCard1[0]
        // matchCondition()
        // return
    } else {
        return "AHHH"
    }

    if (flippedCards.length === 2) {
        matchCondition();
    }
})

// EVENT LISTENER - PANDA 1
document.getElementById('panda1').addEventListener('click', function() {

    console.log("Panda 1 click works")
    // Detect the current face of the card
    // let currentFace = document.getElementById('dog1').getAttribute('value')
    const value = document.getElementById('panda1')
    console.log(value)

    currentFace = value.innerText;
    console.log(currentFace)

    if (currentFace === '🐼') {
        value.innerText = ''; // Reset if matched
        flippedCards.push(value);
        // document.getElementById('panda1').innerText = ' ' //dogCard1[1]
        // matchCondition()
        // return
    } else if (currentFace !== '🐼') {
        value.innerText = '🐼'; // Reset if matched
        flippedCards.push(value);
        // document.getElementById('panda1').innerText = '🐼' //dogCard1[0]
        // matchCondition()
        // return
    } else {
        return "AHHH"
    }

    if (flippedCards.length === 2) {
        matchCondition();
    }
})

// EVENT LISTENER - PANDA 2
document.getElementById('panda2').addEventListener('click', function() {

    console.log("Panda 2 click works")
    // Detect the current face of the card
    // let currentFace = document.getElementById('dog1').getAttribute('value')
    const value = document.getElementById('panda2')
    console.log(value)

    currentFace = value.innerText;
    console.log(currentFace)

    if (currentFace === '🐼') {
        value.innerText = ''; // Reset if matched
        flippedCards.push(value);
        // document.getElementById('panda2').innerText = ' ' //dogCard1[1]
        // matchCondition()
        // return
    } else if (currentFace !== '🐼') {
        value.innerText = '🐼'; // Reset if matched
        flippedCards.push(value);
        // document.getElementById('panda2').innerText = '🐼' //dogCard1[0]
        // matchCondition()
        // return
    } else {
        return "AHHH"
    }

    if (flippedCards.length === 2) {
        matchCondition();
    }
})

