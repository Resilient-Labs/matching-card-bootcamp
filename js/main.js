// Coded along to https://www.youtube.com/watch?v=DABkhfsBAWw&ab_channel=CodingNepal for help with the logic

let cards = document.querySelectorAll('.card')
document.querySelector('#resetButton').addEventListener('click', reset)

//add event listeners to each card
cards.forEach(card => {
  card.addEventListener('click', flipCard)
})

//make an array of img SRCs and copy it since we need 2 of each
let imgArray = ["imgs/patrick.gif", "imgs/simpson.gif", "imgs/squidward.gif", "imgs/spongebob.gif", "imgs/stewie.gif", "imgs/green.gif", "imgs/ash.gif", "imgs/bob.gif"]
imgArray = [...imgArray, ...imgArray]

let card1, card2
let score=0

function flipCard(e) {
  let clickedCard = e.target
  console.log(clickedCard)

  if (!clickedCard.imgSrc) {
      //assign an image if it doesn't have one already
      let number = Math.round(Math.random() * (imgArray.length-1)) //randomize how imgs are selected from array
      clickedCard.imgSrc = imgArray[number]
      imgArray.splice(number, 1) //remove that img from the array to avoid repeats 

  }
  
  //full path to the img
  clickedCard.src = clickedCard.imgSrc

  //flip over each clicked card 
  if (clickedCard !== card1) {
      clickedCard.classList.add('flipped')

      if (!card1) {
          return card1 = clickedCard
      }

      card2 = clickedCard
      checkMatch()
  }
}

  //check for a match
  function checkMatch() {
    if(card1.src === card2.src){
      score ++

        //Make it so you cannot click the same card twice
        card1.removeEventListener('click', flipCard)
        card2.removeEventListener('click', flipCard)

        document.querySelector('p').innerText = `Score = ${score}`

        if (score === 8){
          setTimeout(() => alert('You Won. Game will reset after you click ok'), 1000)
          setTimeout(() => location.reload(), 3000)
        }

        // Clear card1 and card2
        card1 = null
        card2 = null

    } else { //flip cards back
        setTimeout(() => {
            card1.classList.remove('flipped')
            card2.classList.remove('flipped')

            // Reset the images to the question mark
            card1.src = "imgs/card.png"
            card2.src = "imgs/card.png"

            // Clear card1 and card2
            card1 = null
            card2 = null
        }, 1200)
    }
}


function reset() {
  location.reload()
}