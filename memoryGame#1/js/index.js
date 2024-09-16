/*PSUEDO CODE - GROUP
Make a 10 card memory game (0-9 array??)
user must be able to select a card
user must to be able to select another card after
Check if they are a match 
If they are a match = they stay flipped. 
If not, they flip back over. */

// got help from tutorial explainations – uses array to compare values (the name:) against eachother to check for a match. 

// array for all images/cards (10 total) – list of objects

// The names are used to compare the two images that were clicked (that's why there's 2). they are values
let myCardsArr = [
  { name: 'Princess', img: 'https://upload.wikimedia.org/wikipedia/en/6/6e/Link_to_the_Past_Zelda.png', },
  { name: 'Princess', img: 'https://upload.wikimedia.org/wikipedia/en/6/6e/Link_to_the_Past_Zelda.png', },
  { name: 'Sheik', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/69/SheikZelda.png/180px-SheikZelda.png', },
  { name: 'Sheik', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/69/SheikZelda.png/180px-SheikZelda.png', },
  { name: 'Navi', img: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-ocarina-of-time-3d/2/2c/Navi_Artwork.png?width=640', },
  { name: 'Navi', img: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-ocarina-of-time-3d/2/2c/Navi_Artwork.png?width=640', },
  { name: 'Ganondorf', img: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-ocarina-of-time-3d/1/12/Ganondorf.png?width=640', },
  { name: 'Ganondorf', img: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-ocarina-of-time-3d/1/12/Ganondorf.png?width=640', },
  { name: 'Link', img: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-ocarina-of-time-3d/8/81/Young_link_and_adult_link_by_legend_tony980-d4ebyg1.png?width=640', },
  { name: 'Link', img: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-ocarina-of-time-3d/8/81/Young_link_and_adult_link_by_legend_tony980-d4ebyg1.png?width=640', },  
]; 

console.log(myCardsArr)
//define global variables and any DOM elements
  
let grid = document.querySelector('.grid')
let cardsId = [] // empty array
let cardsSelected = [] // emtpy array

const buttonOne = document.querySelector('#start') // button to start new game
const buttonTwo = document.querySelector('#clear') // button to clear game

// smurfs 
window.addEventListener('DOMContentLoaded', playGame)
buttonOne.addEventListener('click', playGame);
buttonTwo.addEventListener('click', clearGame);

// functions 

function playGame(){
  
  createBoard(grid, myCardsArr); 
  arrangeCard();
  
  //add a eventListner to all images.  
  
  imgs = document.querySelectorAll('img');
  Array.from(imgs).forEach(img => img.addEventListener('click', flipCard)) 

};


// function loops over the image array and recieves two arguments
function createBoard(grid, array) { 

  // Each object in the array and the index of the array starts from 0. The value of the id will be the index that starts from 0.
  array.forEach((arr, index) => { 
  
  // create an image element
  let img = document.createElement('img'); 
  
  // set the src attribute to display the image

  img.setAttribute('src', 'https://play.nintendo.com/images/PLAY-5219-LoZSSHD-MM01-576x576back.05cd2876.png');
  
  //add a data attribute
  img.setAttribute('data-id', index);  
  
  grid.appendChild(img);

  // For each argument that passes through an image will be created to the end of the element and the front of the card will be the img above. 

})
}

// arrangeCard function to scatter/randomize using sort & math random on the array
function arrangeCard() { 
  myCardsArr.sort(() => 0.5 - Math.random())
}

 
// https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*


// FLIPCARD 

function flipCard() { 

  // get id of the image user clicked set to a variable called selected. the attribute we set above data-id can be accessed via dataset.id 
  let selected = this.dataset.id;

  // use the selected variable to get the object clicked 
  let clicked = myCardsArr[selected].name

  // name property of object pushed into cardsSelected array
  cardsSelected.push(clicked);  
  
  // id of image also pushed into the CardsId array
  cardsId.push(selected); 
  
  // select img that was clicked [another way to show object?]
  this.setAttribute('src', myCardsArr[selected].img); 


  // once two images are clicked game waits 300 miliseconds via setTimeout and the the checkForMatch function is called
  if (cardsId.length === 2) { 
    setTimeout(checkForMatch, 300);
  } 
}

// CHECK MATCH

function checkForMatch() { 
  // gets all images on the board 
  // gets ids of the images clicked from the cardsId array (in our flipcard)
  let firstCard = cardsId[0];
  let secondCard = cardsId[1];

  // console.log(firstCard)
  // console.log(secondCard)

  // conditional to check if first value (so name: , img: ) in cardsArray is equal to the second and to check if it is the same image clicked two times. 
  if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) { 
    
    alert('You have found a match!'); 

  }else { 
    // flipped back over to front
    imgs[firstCard].setAttribute('src', 'https://play.nintendo.com/images/PLAY-5219-LoZSSHD-MM01-576x576back.05cd2876.png');
    imgs[secondCard].setAttribute('src', 'https://play.nintendo.com/images/PLAY-5219-LoZSSHD-MM01-576x576back.05cd2876.png'); 

    alert('Wrong - please try again');  
  } 
  // After our conditional this clears the array for the next time a user clicks on card
  cardsSelected = []; 
  cardsId = []; 
}

// Restart the game clears the grid - user has to click start new game after clearing
  
function clearGame() { 
  arrangeCard(); 
  grid.innerHTML = ' ';
}

