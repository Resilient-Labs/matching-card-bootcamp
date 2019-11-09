# ♠️ Week08 Bootcamp2019a Project: Matching Card Game
link: https://cranky-bohr-f8c40e.netlify.com/
### Goal: Make a 10 card memory game - users must be able to select two cards and check if they are a match. If they are a match, they stay flipped. If not, they flip back over. Game is done when all cards are matched and flipped over. Example: http://www.fruit-burst.co.uk/fun-and-games/pairs-game 
![item list](Capture.PNG)
### How I made it:

- Technologies: HTML,CSS,JS
- Created a table layout with 3 rows and 3 elements per row, one additional element is by itself after the rows
- When the JS file runs, it starts by running my randomized sorting algorithm that will take all possible class names and rearrange them in an array that's holding them
- After they're randomized, they are sequentially attached to each box
- The parent table of all the boxes is given an event listener that will let it know which element inside of itself has been clicked
- Upon being clicked, a function is called which logs the class and id of the clicked element, and if it's the first or second element clicked in a sequence
- The background is changed to an image that matches the class, if it's the second element in a sequence to be clicked, a function runs that checks whether the class and ID of the second element matches the first to be clicked, if they don't, the backgrounds of both of them are reset.
