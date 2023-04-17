# ♠️ Week08 Bootcamp2019a Project: Matching Card Game

### Goal: Make a 10 card memory game - users must be able to select two cards and check if they are a match. If they are a match, they stay flipped. If not, they flip back over. Game is done when all cards are matched and flipped over. Example: http://www.fruit-burst.co.uk/fun-and-games/pairs-game 

### Process:

<ol>
  <li>Talk about an ass-kicking.  This one was rough.</li>
  <li>The goal was simple enough--I had already done something similar in that Tic-Tac-Toe game I made a while again, so I thought.<li>
  <li>As I added more and more to the code, it grew increasingly difficult to keep track of what did what.  I did as much short hand as I could, but I still felt like it was a lot of code.</li>
  <li>First I set up my table in the HTML, two rows with five columns each.  Simple<li>
  <li>I had 2 starting arrays numbered [1, 2, 3, 4, 5], originally one, but doubled due to needing a top and bottom card set.  After scrambling the arrays randomly, I pushed them in two variables called randomArray1 and randomArray2.  This was the start of the matching process.</li>
   <li>Then I had to create functions that check if the the innerText of a table was empty.  Then came the button that told the JavaScript to place the corresponding element of the randomized array into the empty spot.</li>
   <li>This was simpler than it sounds because in addition to <em>that</em> taking forever, I had to then make the cards disappear if two cards were clicked and their values did not match.  I did it using setTimeout, but I also had to make the cards stay once they were a match.<li>
  <li>After accomplishing that, I tried to find a win state for the game.  I ended up just disabling the arrays with return in order to prevent the user from altering the array after it was done.</li> 
 <li>I couldn't even make a reset button I was so frustated and lost at my own code, but hey, it's done.</li> 

<p>Overall, It runs, but not super proficiently. It made the bare minimum.  I even wanted a Pokemon theme, but after being stuck on so much for so long even after asking for help, I just wanted it done.</p>

<ul>
  <li>I completed the challenge: | 3 <em>I made it barely. It still needs a little help before it's 100% of the way there, but this should suffice.</em></li>
  <li>I feel good about my code: | 3 <em>A big mess of clicks and adding and removing event listeners.  I think I should have made it CSS based.</em></li>
</ul>
