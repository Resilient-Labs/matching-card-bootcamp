const cards = document.querySelectorAll('.card')

const images=['image/flower.jpeg','image/flower1.jpeg', 'image/flower2.jpeg', 'image/flower3.jpeg','image/flower4.jpeg','image/flower.jpeg','image/flower1.jpeg', 'image/flower2.jpeg', 'image/flower3.jpeg','image/flower4.jpeg', ]

function shuffle(){
  cards.forEach(cards => {
    let randomPos = Math.floor(Math.random() * images.length);
    cards.querySelector('img').src=images[randomPos]
    images.splice(randomPos,1)
  });
}

cards.forEach(card => card.addEventListener('click', shuffle));
//document.querySelector('#button').addEventListener('click',shuffle)


// I really struggled to complete this assignment, as I tried many apporaches to get the game completed , but I feel defeated as the only thing I was able to get done was when the user click's the cards, the pictures show, but all not just one. 