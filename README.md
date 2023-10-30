# ♠️ Project: Matching Card Game

### What I did to build this app: 
I used HTML, CSS, Javascript to complete this project.

I basically structured my playing cards into a grid using CSS grid. I had one image over another for each card; the back side looks like a pile of casino playing cards while the revealed pictures were pictures of the basic 4 elements of air, water, fire, and earth plus a set of cards with a picture of lightning. Then, once clicked the playing cards would switch the pictures. 

My logic of the game revolved around a turn allowing a player to pick two cards and then, after a short timeout, flip them back over if they were not a match. I used attribute values as a way to pull the values from the html in JavaScript so that way I could compare the value associated with each picture and see if they were the same. 

If they were the same I structured my code so that the matched up pair would stay on screen and not flip back over. I did this by removing event listeners to stop clicks on already-clicked cards and toggling a flipped class in CSS to prevent them from flipping over showing the default back side of the cards. I also set up a reshuffle function that reset the cards and ordered them randomly using the style.order property in JavaScript.

I also set up a counter so that each time a pair matched it would add +1 to the counter. Then, in my function checking for matched cards, I set a conditional stating that once the counter equaled 5 (meaning 5 pairs or all the cards) it would alert the user that the game was complete and that they should reshuffle to play again. 

### lessons learned:
* I learned about the style.order property in CSS and how manipulating it helps in changing the order of elements in the DOM.
* I got a better understanding of initiating a game from null or false or zero and then once played having that game start back up at zero (essentially resetting my code)
* removing event listeners is also useful in code as opposed to relying on toggling classes on and off.



<img width="907" alt="image" src="https://github.com/fjh321/matching-card-game-FJH/assets/64885403/2820e5a4-31cb-4f01-be76-6a20b13ff7a8">

