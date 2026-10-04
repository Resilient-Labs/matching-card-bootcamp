# ♠️ &nbsp; Matching Card Game

A 10-card memory game built with HTML, CSS, and JavaScript. Click two cards to flip them over. If they match, they stay face up. If not, they flip back over. The game is done when every pair has been found.

[![Screenshot-2026-10-04-at-1-57-55-AM.png](https://i.postimg.cc/3wLBkSFv/Screenshot-2026-10-04-at-1-57-55-AM.png)](https://postimg.cc/4K9tM1Mf)
## How It's Made:

**Tech used:** 

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

The HTML is a simple page with a heading, an empty container for the cards, and a Reset button. The cards themselves are created with JavaScript.

**Shuffling the cards:** The `reset` function starts with an array of 5 pairs of symbols. A `while` loop picks a random spot in the array, creates a `div` for that card, adds it to the page, and then removes it from the array with `splice` so it isn't used twice. When the array is empty, all 10 cards are on the board in a random order. Clicking Reset clears the board and runs this again for a new game.

**Hiding the symbols:** Each card's symbol is stored in its class name, and the card starts with no text, so it looks face down.

**Matching the cards:** One click listener on the container handles every card, and `e.target` tells the code which card was clicked. When a card is clicked, its symbol is shown. Two variables, `flipOne` and `flipTwo`, keep track of the cards picked. The first click is saved in `flipOne`, and the function waits for the next click. The second click is saved in `flipTwo`, and the two class names are compared. If they match, the cards stay face up. If not, both cards are cleared and flipped back. Then both variables are reset for the next turn.

**Styling:** The container uses Flexbox with `flex-wrap` and `gap` to lay the cards out in rows. Each card also uses Flexbox to center its symbol.

## Optimizations

Things I'd like to improve next:

- Add a short delay with `setTimeout` before mismatched cards flip back, so you can see the second card
- Ignore clicks on the empty space between cards
- Stop the same card from being clicked twice and counted as a match
- Show a "You win!" message when all pairs are matched

## Lessons Learned:

This project taught me how a program can remember something between clicks. Each click runs the function again from the top, so `flipOne` and `flipTwo` are what let the game hold onto the first card while it waits for the second one. I also learned how to create elements with JavaScript, how to shuffle an array using `Math.random` and `splice`, and how to use Flexbox to lay out and center things.
