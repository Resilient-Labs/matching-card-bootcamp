# Legend of Korra Matching Card Game

<a href="https://kellychhe-matching-card-game.netlify.app/">This is a matching card game</a> with a Legend of Korra theme. The user needs to match all of the characters with their pair to win!

<img width="1439" alt="Screen Shot 2022-06-03 at 11 48 02 AM" src="https://user-images.githubusercontent.com/102538779/172072768-553de120-15dd-4897-8b6f-ff4db18acb1b.png">

## Languages Used

This was created using HTML5, CSS3, and JavaScript. 

I used the Fisher-Yates shuffle to place the cards in a different place each time someone plays. I made sure that only two cards can be flipped at one time. The event listener toggles classes to show each face of the card. To check if something is a match the flipped cards are put into an array and the the source of the flipped images are compared. If the sources are the same then the cards match. I added a counter to determine when someone wins. When I flip the cards, I add two to the count, but if they don't match I subtracted two from the count. Someone wins when the count reaches ten.

## Lessons Learned

I worked on this project with a team. I learned how important communication is and making sure everyone is on the same page. We diligently pseudocoded the game and took turns trying out different ideas for all the functions. I also used the Fisher-Yates shuffle for the first time!
