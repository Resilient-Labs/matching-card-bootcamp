//initialize the image first by calling res
//got help from sydnei, susanna, flex, ellie
let cards = document.querySelectorAll('.card') 
cards.forEach(card => card.addEventListener('click', flipCard))
 document.querySelector('button').addEventListener('click', resetGame)

 resetGame()

let firstCardToCompare = false

function flipCard(e){
    if (e.target.classList.contains('flipped') || e.target.classList.contains('matched') ){
    return
}
if(firstCardToCompare == false){
    firstCardToCompare = e.target.closest('.card') 
    firstCardToCompare.classList.add('flipped')
    console.log("firstCardToCompare")
} else {
    e.target.closest('.card').classList.add('flipped')
    setTimeout(checkCards,800) 
    firstCardToCompare = false
    console.log('secondCard')
}
}

function checkCards(){
    let firstImage = document.querySelectorAll('.flipped > img:not(.back)')[0]
    let cardOne = firstImage.parentNode
    console.log(firstImage)
    let secondImage = document.querySelectorAll('.flipped > img:not(.back)')[1]
    let cardTwo = secondImage.parentNode
    console.log(cardTwo)

    // cardOne.classList.remove('.flipped')
    // cardTwo.classList.remove('.flipped')

    if(firstImage.src === secondImage.src){
        console.log('Match')
        cardOne.classList.add('matched')
        cardTwo.classList.add('matched')
        cardOne.classList.remove('flipped')
        cardTwo.classList.remove('flipped')
        isGameOver()

    } else {
        console.log('not a match')
        cardOne.classList.remove('flipped')
        cardTwo.classList.remove('flipped')
    }

    function isGameOver(){
     let matchedTotal = document.querySelectorAll('.matched').length
     let cardsTotal = document.querySelectorAll('.card').length
     if(matchedTotal === cardsTotal){
        // alert('you win')
        document.querySelector('h2').innerText = 'YOU WIN! 🎆'
        resetGame()
     }

}

}
function resetGame() {
    let imageArray = [
        "assets/blackhole.jpeg",
        "assets/duck.png",
        "assets/fishing.jpeg",
        "assets/hand.jpeg",
        "assets/space.jpeg",
        "assets/blackhole.jpeg",
        "assets/duck.png",
        "assets/fishing.jpeg",
        "assets/hand.jpeg",
        "assets/space.jpeg"
      ]
      Array.from(document.querySelectorAll('.card > img:not(.back)')).forEach(img => img.src = "")
      for (let i = 0; i < 10; i++) {
          let emptyCards = document.querySelectorAll('img[src=""]')
          console.log(emptyCards)
          let randomCard = Math.floor(Math.random() * emptyCards.length)
          console.log(randomCard)
          emptyCards[randomCard].parentNode.classList.remove('flipped', 'matched')
          emptyCards[randomCard].src = imageArray[i]
      }  
    

}
