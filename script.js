const images = ["img/149-1491636_fat-pikachu-original-pikachu.png",
    "img/484-4840109_gundam-head-png-gundam-rx-78-head-transparent.png",
    "img/download.jpeg",
    "img/dragon-quest-monsters-joker-2-dragon-quest-ix-dragon-quest-xi-dragon-quest-ii-png-favpng-Ng9BYqrvQNkX3WyMEq5fHF1kR_t.jpeg",
    "img/surprised-pikachu.gif",
    "img/149-1491636_fat-pikachu-original-pikachu.png",
    "img/484-4840109_gundam-head-png-gundam-rx-78-head-transparent.png",
    "img/download.jpeg",
    "img/dragon-quest-monsters-joker-2-dragon-quest-ix-dragon-quest-xi-dragon-quest-ii-png-favpng-Ng9BYqrvQNkX3WyMEq5fHF1kR_t.jpeg",
    "img/surprised-pikachu.gif"]
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
    match()
    endGame()
}
function match() {
    const twoCards = Array.from(document.querySelectorAll('.check'))
    const backTwoCards = Array.from(document.querySelectorAll('.backside'))
    if (count % 2 === 0) {
        if (twoCards[0].src === twoCards[1].src) {
            twoCards.forEach(image => image.classList.remove('check'))
        } else { 
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
