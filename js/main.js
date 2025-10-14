
//reference dcode, https://www.youtube.com/watch?v=bznJPt4t_4s
//define tiles container
const tilesContainer = document.querySelector('.tiles');
//pass in the colors of the tiles
//future improvement: add pokemon names
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
//colors duplicated for pairs
const colorsPicklist = [...colors, ...colors];
console.log(colorsPicklist);
//create tile count to control loops
const tileCount = colorsPicklist.length;

//game state
let revealedCount = 0;
//tracks the first tile clicked, null if no tile is active
let activeTile = null;
//waits for the user to find a match before allowing more clicks
let awaitingEndOfMove = false;

function createTile(color) {
//create a div for each tile
  const tile = document.createElement('div');

  //add the tile class to each div
  tile.classList.add('tile');

  //add a data attribute to each tile to hold the color value
  tile.setAttribute('data-color', color);

  //add an event listener to each tile
  tile.addEventListener('click', () => {
    //check if the user can click
    if (
      awaitingEndOfMove ||
      tile === activeTile ||
      tile.classList.contains('revealed')
    ) {
      return;
    }
    //show the color of the tile
    tile.style.backgroundColor = color;
    if (!activeTile) {
      //first tile clicked
      activeTile = tile;
      return;
    } else {
      //second tile clicked
      if (activeTile.getAttribute('data-color') === color) {
        //it's a match!
        activeTile.classList.add('revealed');
        tile.classList.add('revealed');
        revealedCount += 2;
        activeTile = null;
        //check for win
        if (revealedCount === tileCount) {
          alert('You win!');
          //reset the game
          tilesContainer.innerHTML = '';
          //reset game state
          revealedCount = 0;
          activeTile = null;
          awaitingEndOfMove = false;
          //rebuild the colors picklist
          colorsPicklist.push(...colors, ...colors);
          //rebuild the game board
          for (let i = 0; i < tileCount; i++) {
            const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
            const color = colorsPicklist[randomIndex];
            const tile = createTile(color);
            tilesContainer.appendChild(tile);
            colorsPicklist.splice(randomIndex, 1);
          }
        }
      } else {
        //not a match
        awaitingEndOfMove = true;
        setTimeout(() => {
          tile.style.backgroundColor = '';
          activeTile.style.backgroundColor = '';
          activeTile = null;
          awaitingEndOfMove = false;
        }, 1000);
      }
    }
  }); 


  return tile;
}


//build the game board
for (let i = 0; i < tileCount; i++) {
  //create the shuffled index
  const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
  
  //get colors from the picklist
  const color = colorsPicklist[randomIndex];
  console.log(color);
  
  //create a tile with the color
  const tile = createTile(color);
  tilesContainer.appendChild(tile);

  //prevent the color from being picked again in this loop
  colorsPicklist.splice(randomIndex, 1);
}

  // fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
  //       .then(res => res.json()) //parse response into aa json
  //       .then(poke => {
  //               //Add sprite to src & alt
  //               imageEl.src = poke.sprites.front_default
  //               imageEl.alt = poke.name
  //           })
  //       .catch(err => {
  //           console.log(`error ${err}`)
  //           alert("Pokemon not found, try again!")
  //       }
  //       );
        
  //   //clear input value
  //   pokeInput.value = '';