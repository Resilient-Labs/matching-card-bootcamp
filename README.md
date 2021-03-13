# matching-card-game

This is a Harry Potter-themed, matching game application. The player must match the cards with the same image together. There are 6 pairs of images, so there are 6 matches. 

Link to Project: https://harry-potter-creatures-matching.netlify.app/

![Project Image](/pic/game.png)


### How It's Made:

This game uses an array with 12 elements (each element represents a square on the game board) to organze itself. The position of the elements in the array are shuffled before the start of each game. As the array's elements are shuffled, the position of the cards are shuffled on the game board. 

After the player selects 2 cards, they cannot click on any other cards as the event listener will be removed. The 2 selected cards will be evaluated to determine if it's a match. If it is, the squares will become black. If it isn't, the cards--the cards are flipped over. Once, the player matches all 6 images--they win. 


### Lesson Learned

I learned how to randomize the shuffling of the array through using the Fisher-Yates Shuffle. Also. I learned how to use the 'setTimeout' method to delay the evaluation of an expression. 
 

###