# 📊 10 Card Memory Game

**Goal:** Make a 10 card memory game where users select two cards to check if they're a match. Matched cards remain flipped; if not, they flip back over. The game concludes when all pairs are identified.

## Description
This project is an interactive memory game designed to challenge and engage the user. The objective is to match pairs of cards based on memory.

![Screenshot of the Memory Game]((<img/matching card game.png>))

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

The main components of this project are:

- **HTML:** Structures the game board with 10 cards, each having a front (with the image) and a back (hidden information).
  
- **CSS:** Styles the card flip animations, and provides feedback to users when cards match or don't.
  
- **JavaScript:** Powers the core game logic:
  - Flips the cards when clicked.
  - Compares two selected cards to check for a match.
  - Keeps the matched cards flipped.
  - Resets the unmatched cards to face down.

## Optimizations:
The game was initially designed with a delay after two cards were flipped. However, to improve user experience, this delay was minimized, providing quicker feedback to the user on their selections.

## Lessons Learned:

- Crafting a user-centric experience by refining animations and feedback mechanisms.
- Utilizing array methods and data attributes in JavaScript for efficient card matching logic.
