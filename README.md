# Matching Card Game

A memory game: ten face-down cards, five pairs (fish, bird, dino, watch, cat). Flip two at a time. Match them and they stay up, miss and they flip back. Hit reset to reshuffle.

![Matching Cards screenshot](screenshot.jpg)

## How the code works

`randomize()` sets up the board. It starts with an array of ten names, each pair appearing twice, then loops: pick a random index, create a card div showing "?", stamp that array entry on as the div's CSS class, and splice the entry out so every name lands exactly twice. What I like about this is the economy of it. The card's identity IS its CSS class, so the class is the hidden value, the reveal text, and the match key all at once. Matching two cards is a single string comparison, no lookup table, no data attributes, no parallel arrays to keep in sync. And the shuffle needs no Fisher-Yates: splice-removing a random index guarantees each pair appears exactly twice by construction.

Clicks go through `cardMatch()`, one delegated handler on the whole board instead of ten separate listeners. It reveals a card by swapping the "?" for the class name, stores the first pick in `clickedOn` and the second in `clickedOnTwo`, then compares. Same class, they stay. Different, they flip back to "?". The reset button just calls `randomize()` again.

The hardest part was the shuffle. Getting a provably fair deal out of a ten-element array with three lines of code felt like the right kind of clever, random enough to be fun, deterministic enough to never deal a broken board.

Built with HTML, CSS, and vanilla JavaScript. My code is on the `answer` branch.
