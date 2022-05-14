const cards = document.querySelectorAll('.card')
cards.forEach(card => card.addEventListener('click', flipCard))
document.querySelector('#reset').addEventListener('click', resetGame)
let firstCardElement = null

function flipCard(event) {
    if (event.target.classList.contains('matched') || event.target.classList.contains('flipped')) {
        return //don't do anything -- it also means exit the function
    }
    if (firstCardElement == null) {
        firstCardElement = event.target.closest('.card')
        firstCardElement.classList.add('flipped')
    }
    else {

        event.target.closest('.card').classList.add('flipped')
        setTimeout(checkMatch, 700)
        firstCardElement = null
    }
}

function checkMatch() {
    let image1 = document.querySelectorAll('.flipped > img:not(.backCard)')[0]
    let image2 = document.querySelectorAll('.flipped > img:not(.backCard)')[1]
    let card1 = image1.parentNode
    let card2 = image2.parentNode
    card1.classList.remove('flipped')
    card2.classList.remove('flipped')
    if (image1.src === image2.src) {
        card1.classList.add('matched')
        card2.classList.add('matched')
        checkWin()
    }
}

function checkWin() {
    //5 matches equals one game win
    if (document.querySelectorAll('.matched').length === document.querySelectorAll('.card').length) {
        alert('game over')
        resetGame()
    }
}

function resetGame() {
    let picArray = [
        "pic1.png",
        "pic2.jpeg",
        "pic3.jpeg",
        "pic4.jpeg",
        "pic5.png",
        "pic1.png",
        "pic2.jpeg",
        "pic3.jpeg",
        "pic4.jpeg",
        "pic5.png",
    ]

    Array.from(document.querySelectorAll('.card img:not(.backCard)')).forEach(img => img.src = "")
    for (let i = 0; i < 10; i++) {
        let emptyCards = document.querySelectorAll('img[src=""]')
        let randomCard = Math.floor(Math.random() * emptyCards.length)
        emptyCards[randomCard].parentNode.classList.remove('flipped', 'matched')
        emptyCards[randomCard].src = picArray[i]
    }
}

resetGame()