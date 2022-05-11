// start game all cards blank
// when you click on a card it flips over to show image
// you can only have two cards showing at one time (if they arent matching???)
// when two are the same stay flipped over, 
// use sort & Math.random methods to sort cards randomly 

// add event listener to target the 10 cards
// maybe toggle flipped and not flipped??? idk
// adding src to image and if it doesnt match set back to ""
// setTimeout ===> to flip over if they don't match

//Event Listener to flip the card when it is clicked


const images = ["img/air.jpeg",
    "img/earth.jpeg",
    "img/water.jpeg",
    "img/fire.jpeg",
    "img/lotus.jpeg",
    "img/air.jpeg",
    "img/earth.jpeg",
    "img/water.jpeg",
    "img/fire.jpeg",
    "img/lotus.jpeg"]
let shuffledImages = []
while (images.length > 0) {
    let randomIndex = Math.floor(Math.random() * images.length)
    shuffledImages.push(images[randomIndex])
    images.splice(randomIndex, 1)
}
const hiddenImages = Array.from(document.querySelectorAll('.hide'))
for (let i = 0; i < hiddenImages.length; i++) {
    hiddenImages[i].src = shuffledImages[i]
} 


let count = 0

function flipCard() {
    if (this.children[0].classList.contains('hide') === false) {
        return
    }
    const check = Array.from(document.querySelectorAll('.check'))
    if (check.length > 1){
        return
    }
    this.children[0].classList.toggle('hide')
    this.children[0].classList.add('check')
    this.children[1].classList.toggle('hide')
    this.children[1].classList.add('backside')
    count++
    console.log(count)
    // console.log(e.target.children, e.target.children[0], e.target.children[1])
    match()
    endGame()
}

//if count is even, run function that checks if src matches
//if src is same then take away event listener and always have it showing
//if src is different then setTimeout to toggle them back ie. run flip card
//if count is odd return
function match() {
    const twoCards = Array.from(document.querySelectorAll('.check'))
    const backTwoCards = Array.from(document.querySelectorAll('.backside'))
    // console.log(backTwoCards)
    if (count % 2 === 0) {
        if (twoCards[0].src === twoCards[1].src) {
            twoCards.forEach(image => image.classList.remove('check'))
        } else { //remove check and toggle hide after 5 seconds
            setTimeout(function () {
                backTwoCards.forEach(image => image.classList.toggle('hide'))
                twoCards.forEach(image => image.classList.remove('check'))
                twoCards.forEach(image => image.classList.toggle('hide'))
            }, 1000)
            count -= 2
        }
        backTwoCards.forEach(image => image.classList.remove('backside'))
    } else {
        return
    }
}

function endGame() {
    if (count === 10) {
        document.querySelector('.result').innerText = 'You Win!!!'
    }
}

const startOver = () => {
    location.reload()
}


document.querySelectorAll('.card').forEach(card => card.addEventListener('click', flipCard))
document.querySelector('button').addEventListener('click', startOver)


//Things to work on:
