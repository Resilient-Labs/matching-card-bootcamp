# Card Matching Game

![alt tag](https://i.ibb.co/JcXcD5G/img.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript.

The HTML and CSS were fairly simple and straightforward to figure out for this site. I think the part I like the most about the design were the flipping animations. I was introduced to them by a peer and decided to implement them as well. He used his in a very innovative way, you can check out his page here[https://yugiohmatch.netlify.app/].

To get this website working how I wanted it to, I had to rely on a lot of JavaScript. I did two rounds of shuffling when it came to card selection. For the first, I name all the card images a digit from 1-13 and then randomly generated a number and grabbed that card from my image folder with `img/${num}.jpg`. Following that I wanted to shuffle the 6 cards I got and return their double as well(just doubling the array would result in same card locations each time), so I used the reduce array function to go through each and set them to a random index in an array that had 12 image links from the initial 6.

I think the hardest part of all of this was figuring out a way to match the cards once I had everything shuffled around. I really like the solution I came up with, I think it was very efficient. As soon as two cards were flipped over, I would run a checkMatch() function all it did was check to see if the SRC of the DOM images were the same and if so, we had a match! Getting to that step however was what gave me a run for my money. Initially I would wait until the user clicked their third card and I would go ahead and check then if those cards were equal, the issue with that is I had to store multiple DOM objects in different variables and that became messy very quickly. I reduced it to only one and which was called 'lastCard' and would pass to my checkMatch() function that last card as well as the currentCard to get my solution.
