document.querySelectorAll('img').forEach(img => {img.addEventListener('click', flipCard);} );

//I can use the replace method to change the src of images

const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const ten = document.getElementById('ten')



//ANIMATION EFFECT --> WOULD NEED TO RUN FIRST
            // setTimeout(function() {
            //     console.log("This runs after 2 seconds!");
            // }, 2000); // 2000 milliseconds = 2 seconds

let previousClicked = null;

function flipCard(event) {
    const clickedId = event.target.id;

    if (clickedId === 'one' || clickedId === 'nine') {
        // Replace clicked card with funnyKing image
        const newImg = document.createElement('img');
        newImg.src = 'funnyKing.jpeg';
        newImg.id = clickedId;
        event.target.replaceWith(newImg);

        previousClicked = clickedId;
    } else {
        // If a different card is clicked AND one/nine weren't already flipped, reset them
        if (previousClicked === 'one' || previousClicked === 'nine') {
            document.getElementById('one').src = 'king.webp';
            document.getElementById('nine').src = 'king.webp';
        }

        // Update previousClicked to allow continued card selection
        previousClicked = clickedId;
    }

    if (clickedId === 'two' || clickedId === 'five') {
        // Replace clicked card with funnyKing image
        const newImg = document.createElement('img');
        newImg.src = 'queen.jpeg';
        newImg.id = clickedId;
        event.target.replaceWith(newImg);

        previousClicked = clickedId;
    } else {
        // If a different card is clicked AND one/nine weren't already flipped, reset them
        if (previousClicked === 'two' || previousClicked === 'five') {
            document.getElementById('one').src = 'king.webp';
            document.getElementById('nine').src = 'king.webp';
        }

        // Update previousClicked to allow continued card selection
        previousClicked = clickedId;
    }
}


// let oneMatched = false;
// let nineMatched = false;
// let twoMatched = false;
// let fiveMatched = false;

// function flipCard(event) {
//     const clickedId = event.target.id;

//     if (clickedId === 'one') {
//         document.getElementById('one').src = 'funnyKing.jpeg';
//         oneMatched = true;
//     } else if (clickedId === 'nine') {
//         document.getElementById('nine').src = 'funnyKing.jpeg';
//         nineMatched = true;
//     } else if (!oneMatched || !nineMatched) {
//         document.getElementById('one').src = 'king.webp';
//         document.getElementById('nine').src = 'king.webp';
//     }
//     if (clickedId === 'two') {
//         document.getElementById('two').src = 'queen.jpeg';
//         twoMatched = true;
//     } else if (clickedId === 'five') {
//         document.getElementById('five').src = 'queen.jpeg';
//         fiveMatched = true;
//     } else if (!oneMatched || !nineMatched) {
//         document.getElementById('two').src = 'king.webp';
//         document.getElementById('five').src = 'king.webp';
//     }
// }


// let matchedCards = []; // Instead of using Set

// function flipCard(event) {
//     const clickedId = event.target.id;

//     if (clickedId === 'one' || clickedId === 'nine') {
//         // Replace clicked card with funnyKing image
//         const newImg = document.createElement('img');
//         newImg.src = 'funnyKing.jpeg';
//         newImg.id = clickedId;
//         event.target.replaceWith(newImg);

//         // Store matched cards in an array
//         if (!matchedCards.includes(clickedId)) {
//             matchedCards.push(clickedId);
//         }
//     } else if (!matchedCards.includes("one") || !matchedCards.includes("nine")) {
//         // If they haven't both matched, reset them
//         document.getElementById('one').src = 'king.webp';
//         document.getElementById('nine').src = 'king.webp';
//     }
// }