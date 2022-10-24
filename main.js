let cardList = [
    "necro",
    "clay",
    "blade",
    "wild",
    "bubble",
    "burst",
    "avian",
    "spark"
]

let cardSet;
let board = [];
let rows = 4;
let columns = 4;

let card1Selected;
let card2Selected;

// Shuffle cards on load with first function & populate the cards on the HTML with the second function
window.onload = function() {
    shuffleCards();
    startGame();
}

function shuffleCards() {
    cardSet = cardList.concat(cardList); // Gives us two of each card
    console.log(cardSet);
    // For loop is used to shuffle the cards
    for (let i = 0; i < cardSet.length; i++) {
        let j = Math.floor(Math.random() * cardSet.length); // Math.random gives a number between 0 and 1, but not including one. This is multiplied by how many cards we have (16). Together, it gets a random index
        // swap
        let temp = cardSet[i];
        cardSet[i] = cardSet[j];
        cardSet[j] = temp;
    }
    console.log(cardSet);
}

function startGame() {
  // Arrange the board
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let cardImg = cardSet.pop();
            row.push(cardImg);
            // Create image for HTML. Ex: <img id="0-1" src="spark.jpg">
            let card = document.createElement("img");
            card.id = r.toString() + "-" + c.toString();
            card.src = cardImg + ".jpg";
            card.classList.add("card");
            card.addEventListener("click", selectCard);
            document.getElementById("board").append(card);
        }
        board.push(row);
    }

    console.log(board);
    setTimeout(hideCards, 2000); // Hide cards after 2 seconds
}

// Show back of Yugioh cards for the entire board
function hideCards() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let card = document.getElementById(r.toString() + "-" + c.toString());
            card.src = "back.jpg";
        }
    }
}


function selectCard() {
    if (this.src.includes("back")) {
        if (!card1Selected) {
            card1Selected = this;

            let coords = card1Selected.id.split("-");
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            card1Selected.src = board[r][c] + ".jpg";
        }
        else if (!card2Selected && this != card1Selected) {
            card2Selected = this;

            let coords = card2Selected.id.split("-");
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            card2Selected.src = board[r][c] + ".jpg";
            setTimeout(update, 1000); // Show cards for 1 second
        }
    }
}

function update() {
  // Flips cards back if there is no match
    if (card1Selected.src != card2Selected.src) {
        card1Selected.src = "back.jpg";
        card2Selected.src = "back.jpg";
    }
    card1Selected = null;
    card2Selected = null;
}