## Dragon Ball Z Memory Match
Flip the cards and find the pairs. There are 5 Dragon Ball Z cards, each one shows up twice, and they get shuffled every game. Match all 5 pairs, and you win.
--

## Features
Card Matching: Flip cards two at a time to reveal Dragon Ball Z characters and locate matching pairs.

Randomized Layout: Shuffles the deck automatically on start and reset to ensure a fresh layout every game.

Scoreboard Tracking: Keeps track of total wins and misses across multiple playthroughs.



## How to Play
Click a card to flip it over.

Click a second card and try to find its match.

If they match, they stay face up.

If they don't, they flip back over after a second, and it counts as a miss.

Match all 5 pairs to win.

Hit the redo button to shuffle and play again.



## How It Works
Shuffling the deck: dealCards() doubles the card list with the spread operator ([...cards, ...cards]) so every picture has a pair. Then for each card spot on the board, it picks a random card out of the deck with splice(). Since splice() removes the card it picks, nothing gets dealt twice.

Flipping cards: turnOver() handles every click. The first card you pick gets saved in firstCard. When you pick a second one, it compares the two image sources. Same picture = match. Different picture = both flip back over.

No cheating allowed: While two unmatched cards are showing, the waiting flag blocks any other clicks until they flip back. You also can't click a card that's already face up.

Winning: Every match adds to the match count. When matches equals the number of different cards (5), you win, and your win count goes up.



## Built With
JavaScript

HTML

CSS


<img width="2879" height="1570" alt="Dragon Ball Z Memory Match screenshot" src="https://github.com/user-attachments/assets/86ce2649-a984-4339-b04f-b22ff456adde" />
