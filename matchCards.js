// Image display = none( background image)
// document.querySelector('.unfliped').addEventListener('click', fliped)
// function fliped(){
//     this.classList.toggle('flip')
// }
// When clicked, Display the image
// There should be a timer on how long the image is displayed for
// If not matching, go back to display none
// If images does match, no timer on how long they display
const board = document.querySelector('#gameBoard')
const restartButton = document.querySelector('#restart')
let images = ['armor.jpg', 'doc.jpg', 'enigmo.jpg', 'infurnus.jpg', 'rammy.jpg']

let cards = [...images, ...images]
let clickCards = []
let locked = false

function boardy() {
    // start the game clean
    board.innerHTML = ''
    locked = false
    clickCards = []

    cards.sort(() => Math.random() - .5)

    cards.forEach((img) => {
        const card = document.createElement('div')
        card.classList.add('square')

        const imgPath = `images/${img}`
        card.dataset.imgName = img
        card.innerHTML = `<img src="${imgPath}" alt="Matching Card image">`
        card.addEventListener('click', flippedCard)
        board.appendChild(card)
    })
}
function flippedCard() {
    if (locked) {
        return;
    }

    if (this.classList.contains('flipped')) {
        return;
    }
    this.classList.add('flipped')
    clickCards.push(this)

    if (clickCards.length === 2) {
        locked = true
        setTimeout(flipAns, 1000)
    }
    console.log('I am woking')
}

function flipAns(){
    const [cardOne, cardTwo] = clickCards
    if(cardOne.dataset.imgName === cardTwo.dataset.imgName){
        clickCards = []
        locked = false

        let winner = document.selectorAll('.square.flipped').length
        if(winner === cards.length){
            alert('You won dude...this took me forever to do(BETTER APPRECIATE IT!!!)')
        }
    }
    else {
        cardOne.classList.remove('flipped')
        cardTwo.classList.remove('flipped')
        clickCards = []
        locked = false
    }
}
restartButton.addEventListener('click',boardy)
boardy()



