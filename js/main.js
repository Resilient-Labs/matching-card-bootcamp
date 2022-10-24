document.querySelector("#btn").addEventListener('click', () => location.reload()) // When the game is over, they have the option to restart the game

let imageArray = ["./img/ace.png", "./img/ten.jpeg", "./img/king.jpg","./img/nine.jpeg", "./img/three.jpeg", "./img/queen.jpeg", "./img/ace.png", "./img/ten.jpeg", "./img/king.jpg","./img/nine.jpeg", "./img/three.jpeg", "./img/queen.jpeg"]

// Shuffle function. Will run on page load/restart
function shuffle() {
    
    // Select all the none back place holder images
    let cards = document.querySelectorAll('div img:not(.backImage)')

    // Loop through all the font images and set the src to empty string
    cards.forEach(img => img.src='')
   
    // Loop through the imageArray
    imageArray.forEach((element, index) => {

        let card = document.querySelectorAll("img[src='']")
        let randomNum = Math.floor(Math.random() * card.length)
        
        card[randomNum].parentNode.classList.remove('flipped','match')
        card[randomNum].src = imageArray[index] 

    })
      
}

// Shuffle the cards on page load/restart
shuffle(imageArray)


let firstSelection = "false"
let secondSelection = "false"

// Select all the cards
const cards = document.querySelectorAll("div")

// Add event listener to all cards
cards.forEach(card => {

    card.addEventListener('click', () => {

        // If card is already flipped or if it's macthed with another card, do nothing
        if(card.classList.contains('flipped') || card.classList.contains('match')){return}

        if(firstSelection === secondSelection){
            firstSelection = card
            card.closest('div').classList.add('flipped') 
          }else{
            secondSelection = card
            card.closest('div').classList.add('flipped')
      
            setTimeout(checkMatch,900) 
            firstSelection = 'false'
            secondSelection = 'false' 
          }

    })
})


function checkMatch(){

    // Get the html element of the two selections
    let imgOne = document.querySelectorAll('.flipped>img:not(.backImage)')[0]
    let imgTwo = document.querySelectorAll('.flipped>img:not(.backImage)')[1]

    imgOne.parentNode.classList.remove('flipped')
    imgTwo.parentNode.classList.remove('flipped')
  
    // If they have the same src, they are the same card
    if(imgOne.src === imgTwo.src){

      imgOne.parentNode.classList.add('match')
      imgTwo.parentNode.classList.add('match')
      // Check for game over
      gameOver()
    }
}

function gameOver() {
    if (document.querySelectorAll('.match').length == imageArray.length) {
        document.querySelector('.displayWinner').classList.remove('hidden') // remove hidden class
        document.querySelector(".winnerMessage").innerText = `You WON!!!` // Insert text to show who won
    }
}