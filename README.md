# 🎣 Matching Game: Go Fish 🎣

![Preview](/images/preview.png)

### Goal:

- Make a 10 card memory game - users are able to select two cards and check if they are a match. If they are a match, they stay flipped. If not, they flip back over. Game is done when all cards are matched and flipped over. Example in references.

### Approach:

- *"Selected"* CSS class for clicked on cards (with **guard clause** to shortcircuit double clicks on same card to prevent counter from increasing)
- Click counter to determine if 2 cards are selected, then...
- CheckMatch function
- If matching, add *"Matched"* class, and set onclick to **null** (prevents further onclicks)
- Use **setTimeout(function(){}, time)** to hide non-matching cards (timed to flip before user clicks third card, while enough time to memorize revealed image)
- **Fisher–Yates/Knuth Shuffle** to randomize cards

### References:

- http://dkmgames.com/memory/pairsrun.php (example game)
- https://www.npmjs.com/package/knuth-shuffle
