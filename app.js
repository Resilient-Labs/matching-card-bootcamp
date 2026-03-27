// Goal: Make a 10 card memory game - users must be able to select two cards and check if they are a match. If they are a match, they stay flipped. If not, they flip back over. Game is done when all cards are matched and flipped over. 

const tilesContainer = document.querySelector('.tiles');
const colors = ["red", "cyan", "orange", "purple", "pink"];
const colorsPicklist = [...colors, ...colors];
console.log(colorsPicklist);

const tileCount = colorsPicklist.length;

// game state
let revealedCount = 0;

// activeTile is the tile the user just clicked on
let activeTile = null;

// when set to true, user is waiting for two unmatched tiles to be turned over again
let awaitingEndOfMove = false;

// the intention is to build a new tile element and return to loop underneath. 
function buildTile(color){
  const element = document.createElement('div');

  element.classList.add('tile');
  element.setAttribute('data-color', color);
  // when a tile is first created, we say the tile is currently not revealed
  element.setAttribute('data-revealed', 'false');

  element.addEventListener('click', () =>{
    const revealed = element.getAttribute('data-revealed');

    if(awaitingEndOfMove
      || revealed === 'true'
      || element === activeTile
      // so if you're trying to click on same activeTile twice, return out and cancel move
    ){
      // return means that we exit function here and dont move on, this will prevent anything more from happening
      return;
    }
    element.style.backgroundColor = color;

    if(!activeTile){
      activeTile = element;
      //it's the end of move
      return;
    }

    // here let's check for a match
    const colorToMatch = activeTile.getAttribute('data-color');

    // here we are checking if colors match, if they do, we clear the game state
    if (colorToMatch === color){
      //once we got a match here, we want to update that attribute to true 
      activeTile.setAttribute('data-revealed', 'true');
      element.setAttribute('data-revealed', 'true');

      awaitingEndOfMove = false;
      activeTile = null;
      revealedCount += 2;

      if (revealedCount === tileCount){
        alert('You win! Refresh to play again🥳');
      }

      return

    }
    console.log(activeTile);
    awaitingEndOfMove = true;

    setTimeout(() => {
      element.style.backgroundColor = null;
      activeTile.style.backgroundColor = null;

      awaitingEndOfMove = false;
      activeTile = null;
    }, 1000);
  });
  return element;
}

// now build up tiles
for (let i=0; i < tileCount; i++){
  const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
  const color = colorsPicklist[randomIndex];
  const tile = buildTile(color);

  console.log(color);
// we only want to pick the same color twice, so every time we choose a color from the pickList, we want to remove that possibility. so 1 will remove a single element from the randomIndex
  colorsPicklist.splice(randomIndex, 1);
  tilesContainer.appendChild(tile);
}

// help from youtube video https://www.youtube.com/watch?v=bznJPt4t_4s