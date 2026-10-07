# ♠️ Week08 Bootcamp2019a Project: Matching Card Game

### Project Preview

<img width="929" height="571" alt="MatchingCardGame" src="https://github.com/user-attachments/assets/7324e564-4a99-4de1-83cb-a383ffb2e62c" />


### Goal: Make a 10 card memory game - users must be able to select two cards and check if they are a match. If they are a match, they stay flipped. If not, they flip back over. Game is done when all cards are matched and flipped over. Example: http://www.fruit-burst.co.uk/fun-and-games/pairs-game 

## Emoji Match — My Solution

A 10-card memory game built with HTML, CSS, and JavaScript.

### How to run

Download or clone this repository and open `index.html` in your browser. No installation or build step is required.

### How to play

1. Select a card to reveal its emoji.
2. Select a second card to check for a match.
3. Matching cards stay flipped. Mismatched cards hide after one second.
4. Find all five pairs to finish the game.
5. Select **New game** to reset the score and shuffle the cards.

### Features

- Five emoji pairs, randomly arranged using `splice()`.
- Prevents selecting the same card twice and selecting matched cards again.
- Blocks extra selections while a mismatched pair is visible.
- Displays matched-pair progress and a winning message.
- Green card-table background with layouts for desktop, tablet, and phone screens.
- Keyboard-accessible card buttons and a status message for screen readers.

### Files

- `index.html` — page structure and game container.
- `style.css` — colors, cards, and responsive layouts.
- `script.js` — card creation, matching, flip delay, and restart logic.

### JavaScript structure

`random()` resets the game and builds the shuffled deck. `gameLogic()` handles card selections and compares the emoji stored in `data-emoji`. `flip()` updates the text, accessible label, and flipped appearance of each card.
