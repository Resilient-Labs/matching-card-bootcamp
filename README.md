# Card Matching Game

## Overview

The Card Matching Game is a simple, interactive game built with HTML, CSS, and JavaScript. The game board consists of pairs of matching cards. Each card has an emoji on one side and a uniform back. The goal of the game is to find all the matching pairs of emojis.

## Game Logic (`main.js`)

### Starting the Game

```javascript
function startGame() {
	cards.forEach((card) => {
		card.addEventListener("click", handleCardClick);
	});
}

const cards = Array.from(document.querySelectorAll(".card"));
startGame();
```

In the above code:

- `startGame()`: Initializes the game, adding a click event listener to each card, calling `handleCardClick` function when a card is clicked.
- `cards`: An array storing all the card elements selected from the game board.
- The game is started by calling `startGame()` at the end of the script.

### Card Click Handling

```javascript
let flippedCards = [];
let matchedCards = [];

function handleCardClick(event) {
	const clickedCard = event.currentTarget;
	if (
		!flippedCards.includes(clickedCard) &&
		!clickedCard.classList.contains("matched")
	) {
		clickedCard.classList.add("flipped");
		flippedCards.push(clickedCard);
		if (flippedCards.length === 2) {
			checkForMatch();
		}
	}
}
```

In this part:

- `flippedCards`: An array to keep track of the cards that have been flipped.
- `matchedCards`: An array to keep track of the cards that have been successfully matched.
- `handleCardClick`: A function that handles the card click events.

### Checking for Matches

```javascript
function checkForMatch() {
	const [card1, card2] = flippedCards;
	if (card1.dataset.emoji === card2.dataset.emoji) {
		matchedCards.push(card1, card2);
		card1.classList.add("matched");
		card2.classList.add("matched");
		flippedCards = [];
		if (matchedCards.length === cards.length) {
			document.querySelector("h2").textContent =
				"Congrats on getting all the cards to match";
		}
	} else {
		document.querySelector("h2").textContent = "";
		setTimeout(() => {
			card1.classList.remove("flipped");
			card2.classList.remove("flipped");
			flippedCards = [];
		}, 445);
	}
}
```

Here:

- `checkForMatch`: A function that checks if the two flipped cards are a match based on their emoji.
- If they match, they are added to the `matchedCards` array, given a `matched` class for visual feedback, and the `flippedCards` array is reset.
- If all cards are matched, a congratulatory message is displayed.
- If the cards do not match, they are flipped back over after a short delay, and the `flippedCards` array is reset.

## Styling and HTML Structure

The game's appearance is defined in `style.css`, and the structure is set up in an HTML document. Specific elements include:

- A section for the game title.
- A `div` for game messages.
- A `div` with the id `gameBoard`, containing all the cards.

Each card is a `div` with a class of `card` and a `data-emoji` attribute holding the emoji character.

## Conclusion

This Card Matching Game is a fun and simple implementation of a classic memory game. By exploring the provided HTML, CSS, and JavaScript code, you can understand how the game mechanics work and even extend the game with additional features and styles. Enjoy coding and playing!
