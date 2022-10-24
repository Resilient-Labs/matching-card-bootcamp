# ♠️ Project: Matching Card Game

### Goal: Make a 10 card memory game - users must be able to select two cards and check if they are a match. If they are a match, they stay flipped. If not, they flip back over. Game is done when all cards are matched and flipped over. Example: http://www.fruit-burst.co.uk/fun-and-games/pairs-game 

**Link to project:** https://memory-card-deck.netlify.app/


<img width="900" alt="Screen Shot 2022-10-23 at 8 17 21 PM" src="https://user-images.githubusercontent.com/91163017/197425498-bbe12cac-521d-414a-a51f-75fc8ba1e5bf.png">
<img width="900" alt="Screen Shot 2022-10-23 at 8 17 38 PM" src="https://user-images.githubusercontent.com/91163017/197425500-c6e643e5-737a-47d5-af20-dbf5c2c5244f.png">

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

Initially the back of the card is visible and the front is hidden using css. Event listeners are placed on all the cards so when a card is clicked it determiens if it needs to be flipped to show the front image. Another function is created to determine if the first and second clicked images contain the same image src, if they do, they both are the same image so must stay flipped. Game is over when all pairs have been found. A shuffle function uses a loop to add a new image src to all images on page load. 

