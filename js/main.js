// the function that starts the game
function startGame() {
	// Adding a click event listener to each card
	cards.forEach((card) => {
		card.addEventListener("click", handleCardClick);
	});
}
// Selecting all individual cards from the game board and storing them in an array
const cards = Array.from(document.querySelectorAll(".card"));

// Creating an array to keep track of the cards that have been flipped
let flippedCards = [];

// Creating an array to keep track of the cards that have been matched successfully
let matchedCards = [];

// Defining the function that handles card clicks
function handleCardClick(event) {
	// Getting the clicked card from the event object
	const clickedCard = event.currentTarget;

	// Checking if the clicked card is not already flipped and is not already matched
	if (
		!flippedCards.includes(clickedCard) &&
		!clickedCard.classList.contains("matched")
	) {
		// Adding the 'flipped' class to reveal the card's emoji
		clickedCard.classList.add("flipped");

		// Adding the clicked card to the flipped cards array
		flippedCards.push(clickedCard);

		// Checking if two cards have been flipped
		if (flippedCards.length === 2) {
			// If yes, check if they are a match
			checkForMatch();
		}
	}
}

// Defining the function that checks if two flipped cards are a match
function checkForMatch() {
	// Using destructuring to get the two flipped cards from the array
	const [card1, card2] = flippedCards;

	// Checking if the two cards have the same emoji
	if (card1.dataset.emoji === card2.dataset.emoji) {
		// If they match, add them to the array of matched cards
		matchedCards.push(card1, card2);

		// Adding the 'matched' class to provide visual feedback
		card1.classList.add("matched");
		card2.classList.add("matched");

		// Resetting the flipped cards array
		flippedCards = [];

		// Checking if all cards have been matched
		if (matchedCards.length === cards.length) {
			// If all cards are matched, alert the player that they have won
			document.querySelector("h2").textContent =
				"Congrats on getting all the cards to match";
		}
	} else {
		// If the cards do not match, flip them back over after a short delay
		document.querySelector("h2").textContent = "";
		setTimeout(() => {
			card1.classList.remove("flipped");
			card2.classList.remove("flipped");

			// Resetting the flipped cards array
			flippedCards = [];
		}, 445);
	}
}

// Starting the game when the script loads
startGame();
