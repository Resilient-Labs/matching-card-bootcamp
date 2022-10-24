function match(){
  const images = [
      'joker.png',
      'king.png',
      'king.png',
      'king.png',
      'queen.png',
      'queen.png',
      'queen.png',
      'queen.png',
      'king.png',
      'king.png',
      'joker.png',
  ]
  shuffle (images)
  console.log (images)
  const pageImages = document.getElementsByClassName('img')
  console.log(pageImages)
  for(let i = 0; i < 3; i++){
      console.log(i, images[i])
      pageImages[i].src = images[i];
  }
}
match()
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  