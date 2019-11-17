# Matching-card-web App
This is a card-matching web application. The user will be able to select any box within the interface and it will give you an image. Next the user will need to select another box to match the image in the first box. If it matches, both cards will remain face up. If it does not match, both cards will flip back over. The user will have to match all of the cards to win the game! If the user refreshes the page, it will shuffle the cards around so that each card will have a random image compared to the previous game.


**Link to project:** https://unruffled-heisenberg-faf825.netlify.com/

![alt tag](https://github.com/TimTran-Dev/matching-card-bootcamp/blob/answer/Memory%20Card%20img.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

I used HTML and CSS to style the web application by centering all of the content and adding a simple background image. Next I used CSS to add a display:grid on the entire main section and gave each box a fixed height and width by using grid-template-columns and grid-template-rows. Next I used JavaScript to apply the logic of the card matching game. I was able to apply a event.target.id to allow the user to click on any card and JavaScript will apply the logic to whichever card that the user chooses. Next I used JavaScript to create a shuffle function for the array of images so that whenever the user refereshes the page, each box will shuffle the images around so that each image is not in the same box as the previous game.

## Lessons Learned:

I learned that you can use the shuffle method on an array to randomize all of the elements in an array. Next, I learned that you can target each element depending on what the user clicks on, so the logic will apply to the item that is clicked on.
