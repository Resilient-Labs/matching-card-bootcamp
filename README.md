# Memory Game

<img width="1456" alt="Screenshot 2023-10-30 at 8 58 51 PM" src="https://github.com/codedbycass/Memory-Game/assets/122684139/b2a3f39b-d54a-4cd9-8103-78e80618e4e4">

## How it's made
HTML, CSS, JS

In HTML I created a div holding the front and back of each card's image. Using CSS I layered the front and back on top of each other and used transitions to flip the card. Using JS I added an event listener to each card with a forEach loop with a function to flip the cards over on click. Only two cards can be clicked. To see if the cards are a match, I used a conditional to check if the cards have the same dataset attribute the can remain facing up so I removed the event listener to prevent them from being clicked. If the dataset attributes are not the same, the cards will be flipped back over (while manintaing their event listener flip function). To ensure better usability, I let the user know if the cards are a match or not a match by printing the interaction between the cards to the DOM. To shuffle the order, I shuffled the cards using an immediately invoked function expression which shuffles the cards on page load. Lastly, users are able to click reset to reset the game and  shuffle the cards since shuffle is an IIFE.

## Lessons Learned
This project was the first time I used dataset attributes. It was a fast and efficient way to compare elements in JS. I also used a lot CSS transitions which made a 2D project, 3D, interative, and dynamic.
