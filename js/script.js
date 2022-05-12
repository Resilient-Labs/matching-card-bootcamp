//js by house gardner

const cards = document.querySelectorAll('.card')
cards.forEach(card => card.addEventListener('click', flipCard))
document.querySelector('#reset').addEventListener('click', resetGame)

let firstCard = null

function flipCard(e){
    let clickedCard = e.target.closest(".card");
    if (clickedCard.classList.contains('matched') || clickedCard.classList.contains('flipped')){
        return
    }
    clickedCard.classList.add('flipped')
    if (firstCard == null){
        firstCard =  clickedCard
    }
    else {
        setTimeout(checkMatch, 700, firstCard, clickedCard)
        firstCard = null
    }
    }

function checkMatch(cardOne, cardTwo){
    let image1 = document.querySelectorAll('.flipped > img:not(.backCard)')[0]
    let image2 = document.querySelectorAll('.flipped > img:not(.backCard)')[1]

    let card1 = image1.parentNode
    let card2 = image2.parentNode

    card1.classList.remove('flipped')
    card2.classList.remove('flipped')
    if (image1.src === image2.src){
        card1.classList.add('matched')
        card2.classList.add('matched')
        checkWin()
    }
}
    function checkWin(){
        if (document.querySelectorAll('.matched').length === document.querySelectorAll('.card').length){
            alert('You win!')
            resetGame()
        }
    }

    function resetGame(){
        let picArray = [
        "img/acidtrip.png",
        "img/dsc_6848.png",
        "img/HighFivethanksgiving.png",
        "img/nickfront.jpg",
        "img/highfivebhm.png",
        "img/acidtrip.png",
        "img/dsc_6848.png",
        "img/HighFivethanksgiving.png",
        "img/nickfront.jpg",
        "img/highfivebhm.png"
        ]

        Array.from(document.querySelectorAll('.card img:not(.backCard' )).forEach(img => img.src = "")
        for(let i = 0; i <10; i++){
            let emptyCards = document.querySelectorAll('img[src=""]')
            let randomCard = Math.floor(Math.random() * emptyCards.length)
            emptyCards[randomCard].parentNode.classList.remove('flipped', 'matched')
            emptyCards[randomCard].src = picArray[i]
        }
    }

    resetGame()



