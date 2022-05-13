// Worked with Cyd V, Deneille D, Kelly Ch, Mecca Y, and Nafessah S.

// Put all ten images into the images array.
const images = [
  //consider changing photos if they don't work. two of each
  'assets/images/funny.og.jpeg',
  'assets/images/happydog.jpeg',
  'assets/images/dog.jpeg',
  'assets/images/shibu_ccexpress.png',
  'assets/images/red panda.png',
  'assets/images/funny.og.jpeg',
  'assets/images/happydog.jpeg',
  'assets/images/dog.jpeg',
  'assets/images/shibu_ccexpress.png',
  'assets/images/red panda.png'
]
// Create an array to shuffle the images, it's empty since we will push our randomized images into it.
let shuffledImages = []

while (images.length > 0) {
    //chooses a random number between 0 and the length of images (10)
    let randomIndex = Math.floor(Math.random() * images.length)
    // pushes into shuffled images
    shuffledImages.push(images[randomIndex])
    // removes from images
    images.splice(randomIndex, 1)
    // randomNumber is the index, and the 1 tells it to remove that one element from the array. When it takes the element out, it makes it so that you can't pull that element again during the loop and it resets the index to the new length until we reach zero
}

// Accesses all of the images with the hide class
const imageSrc = Array.from(document.querySelectorAll('.hide'))

// another loop that pushes the shuffled array 
for (let i = 0; i < imageSrc.length; i++) {
    // insert the sources of the shuffled images and put them into the hidden image element in the DOM
    imageSrc[i].src = shuffledImages[i]
}

// set up a counter to track game moves, similar to tic tac toe
let count = 0

function flipCard() {
    // this is attached to the div that we click (eventlistener) and the 0 represents the first element within the div
  if (this.children[0].classList.contains('hide') === false) {
    return
  }
    // if the first image tag with hide is flipped already, the function will return and not continue
  this.children[0].classList.toggle('hide') //remove from hidden image
  this.children[0].classList.add('check') //add to revealed image
  this.children[1].classList.toggle('hide') //add to back of card to hide it, creates the "flip" aspect
  this.children[1].classList.add('backside') // backside is added to target the otherside of that
  count++
  console.log(count)
  match()
  //check if the two cards flipped are a match
  endGame()
  //calls endgame function IF the count reaches 10 total (10 matches achieved)
}

function match() {
  const twoCards = Array.from(document.querySelectorAll('.check'))
  const backTwoCards = Array.from(document.querySelectorAll('.backside'))
  if (count % 2 === 0) {
    if (twoCards[0].src === twoCards[1].src) {
      twoCards.forEach(image => image.classList.remove('check'))
    } else { //remove check and toggle hide after 5 seconds
      setTimeout(function() {
        backTwoCards.forEach(image => image.classList.toggle('hide'))
        twoCards.forEach(image => image.classList.remove('check'))
        twoCards.forEach(image => image.classList.toggle('hide'))
      }, 500)
      count -= 2
    }
    backTwoCards.forEach(image => image.classList.remove('backside'))
  } else {
    return
    // if the count is not equal to two, then the function will not run.
  }
}

function endGame() {
    if (count === 10) {
        document.querySelector('.result').innerText = 'You Win!'
    }
    //as long as all of the cards match, the count will increase to 10
}

function startOver() {
    location.reload()
    // reload is a method, it refreshes the page
    // location --> URL where you are, tells us to refresh this page.
}

document.querySelectorAll('.card').forEach(card => card.addEventListener('click', flipCard))
// Created a node list out of the divs (collections of nodes). You can't apply all array methods to node lists, but you can use forEach.
document.querySelector('button').addEventListener('click', startOver)