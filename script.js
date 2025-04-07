const cards = ['darkmagician.jpg', 'darkmagiciangirl.jpg', 'blueeyewhitedragon.jpg', 'redeyes.jpg', 'slifertheskydragon.jpg']
let firstCard = undefined

const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const img3 = document.querySelector('.img3')
const img4 = document.querySelector('.img4')
const img5 = document.querySelector('.img5')
const img6 = document.querySelector('.img6')
const img7 = document.querySelector('.img7')
const img8 = document.querySelector('.img8')
const img9 = document.querySelector('.img9')
const img10 = document.querySelector('.img10')

document.querySelectorAll('section#cards img').forEach(cardimg => {
    cardimg.onclick = cardTurn
})

function cardTurn(e) {
    e.target.style.filter = 'brightness(100%) grayscale(0%)'
    if (firstCard) {
        if (firstCard.src === e.target.src) {
            document.querySelector('.results').innerText = 'Congratulations, You Made a Match!'
            firstCard = undefined
        } else {
            setTimeout(() => {
                firstCard.style.filter = 'brightness(0%) grayscale(100%)'
                e.target.style.filter = 'brightness(0%) grayscale(100%)'
                firstCard = undefined
            }, 2000)
        }
    } else {
        firstCard = e.target
    }
}

function getRandomCard() {
    let randomDeck = cards.concat(cards)
    console.log(randomDeck)
    document.querySelectorAll('section#cards img').forEach(cardimg => {
        const randomIndex = Math.floor(Math.random() * randomDeck.length)
        console.log(randomIndex)
        cardimg.src = randomDeck[randomIndex]
        randomDeck.splice(randomIndex, 1)
        console.log(randomDeck)
    })
}

getRandomCard()
document.querySelector('.button').addEventListener('click', clearGame)
function clearGame() {
    getRandomCard()
    let clear1 = img1.style.filter = 'brightness(0%) grayscale(100%)'
    let clear2 = img2.style.filter = 'brightness(0%) grayscale(100%)'
    let clear3 = img3.style.filter = 'brightness(0%) grayscale(100%)'
    let clear4 = img4.style.filter = 'brightness(0%) grayscale(100%)'
    let clear5 = img5.style.filter = 'brightness(0%) grayscale(100%)'
    let clear6 = img6.style.filter = 'brightness(0%) grayscale(100%)'
    let clear7 = img7.style.filter = 'brightness(0%) grayscale(100%)'
    let clear8 = img8.style.filter = 'brightness(0%) grayscale(100%)'
    let clear9 = img9.style.filter = 'brightness(0%) grayscale(100%)'
    let clear10 = img10.style.filter = 'brightness(0%) grayscale(100%)'
}