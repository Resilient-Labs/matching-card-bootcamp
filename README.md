# ♠️ Week08 Bootcamp2019a Project: Matching Card Game

### Goal: Make a 10 card memory game - users must be able to select two cards and check if they are a match. If they are a match, they stay flipped. If not, they flip back over. Game is done when all cards are matched and flipped over. Example: http://www.fruit-burst.co.uk/fun-and-games/pairs-game 

### How to submit your code for review:

- Fork and clone this repo
- Create a new branch called answer
- Checkout answer branch
- Push to your fork
- Issue a pull request
- Your pull request description should contain the following:
  - (1 to 5 no 3) I completed the challenge
  - (1 to 5 no 3) I feel good about my code
  - Anything specific on which you want feedback!

Example:
```
I completed the challenge: 5
I feel good about my code: 4
I'm not sure if my constructors are setup cleanly...
```

Matching card game!

This project is a memory game where the user clicks on one card, and if the next card they click on matches the first card then both cards stay! If not, they both disappear!

Link to project: https://justinjoshi.github.io/matching-card-bootcamp/

alt tag
How It's Made:

Tech used: HTML, CSS, JavaScript

I used very simple if else statements to get the logic for this game. First, I added an event listener on the parent container of all the boxes. Each box got their own ID. When defining the callback function for the event listener, i passed in a parameter that grabs the event object on click. When a click event happens, now the function has access to the ID of the box that was clicked. This was the baseline of my game. If box1 was clicked for example, it would insert an apple into the dom. If box2 was clicked, it inserted a banana into box two. Now I wanted it so if you click a matching pair, they stay on the board. I ran into many errors in this process. First I had to make sure that empty boxes werent defined as a matching pair. I created a variable that holds the "current fruit" as in, the previous fruit the user clicked. If they click a matching fruit, both should stay. To achieve this, I had to define logic for that process. Every box got its own fruit value. If the currentFruit variable matched the fruit value of the box, both fruits would stay in the dom. As well, the currentFruit variable would be set to null. And finally, if the boxes did not match, the current fruit would be set to null, and the innerText of the previous box would be set to an empty string. To achieve the previous box functionality, I created a variable to store the previous originalTarget from the event object. To make sure users couldnt click or interact with previously matched or clicked boxes, i used an if statement to say, if the value of the box is truthy, do nothing. If the box is empty, then the rest of the logic can happen. This completed my game.

Optimizations


This project was really interesting. It was the first time where i felt like going back to refactor and make cleaner code made sense. Using if and else statements with this game creates a very difficult to comprehend codebase, and there were lots of opportunities to organize code in a way that made for a much cleaner way of understanding. However i figured it would be most efficent to produce a working result fast, and then if time allows go back to refactor. Sometimes all that matters is that the end result works. 

Lessons Learned:
I learned a lot about using if statements to create simple game logic, variables at global scope, how the event object works, and why it becomes more important to write clean code as your codebase becomes more complex. I learned there were many opportunities to make the game logic much more clearly written and readable for other engineers who want to work on our code. But this time around I wanted to get the project completed and move on to other things so i took the approach of make it work fast refactor later. 
