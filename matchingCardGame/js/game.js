//targets all cards for game
const cards = document.querySelectorAll('.card-area');
const fronts = document.querySelectorAll('.front-face')
// for each one, we have a listener
cards.forEach(card => card.addEventListener('click', flipCard));
fronts.forEach(front => front.addEventListener('DOMContentLoaded', shuffle))
document.querySelector("#reset-button").addEventListener('click', reset)
console.log(fronts)
//the actual deck 
let matched = 0



deck = ['img/tf-front.png', 'img/maokai-front.png', 'img/riven-front.png', 'img/leona-front.png', 'img/yasuo-front.png', 'img/tf-front.png', 'img/maokai-front.png', 'img/riven-front.png', 'img/leona-front.png', 'img/yasuo-front.png']

//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];

        
    }
   
    return array;
   

  }
  
  // Used like so

  shuffle(deck);
  console.log(deck);

  //fizzbuzz 
  function placeCard() {
    for(let i=0;i<fronts.length;i++) {
        
        console.log(`"${deck[i]}"`)

        document.querySelector(`#card${i+1}`).src = `${deck[i]}`
        console.log("random pic")
    }
}
placeCard()


// let counter = 0


// the cards clicked throught the game
 selectedCards = []

// let hasFlippedCard = false;
// let firstCard, secondCard;
// let disabled = false

 function flipCard() {
    this.classList.toggle('flip');
    this.classList.add('flip');
    selectedCards.push(this)
    console.log(selectedCards)
    if (selectedCards.length === 2) {
        console.log("two cards")
        
        checkforMatch()
        
    }
//   if (!hasFlippedCard) {
//     hasFlippedCard = true;
//     firstCard = this;
//     console.log(firstCard)
//     return
//   }
//   secondCard = this
//   hasFlippedCard = false
//   checkforMatch()



 }
 //Hassan's help 
 //Leon's help
 function checkforMatch() {
    //console.log(selectedCards[0].getAttribute("src"))
        cards.forEach(card => card.removeEventListener('click', flipCard));
        console.log(selectedCards[0].childNodes[1].src)
    //Ellie's help
    if(selectedCards[0].childNodes[1].src === selectedCards[1].childNodes[1].src) {
        console.log("passes vibecheck")
        //doesnt work
        // console.log(selectedCards[1].div.memory-card.flip.childNodes[1].currentSrc)
            //no longer comparing the two matched 
             if (selectedCards[0].childNodes[1].src === "http://127.0.0.1:5500/img/maokai-front.png" & selectedCards[1].childNodes[1].src === "http://127.0.0.1:5500/img/maokai-front.png") {
                (console.log("Maokai leveled up"))
                this.classList.toggle('matched');
                this.classList.add('matched');
                
             }
            selectedCards = []
            matched = matched + 1
            endGame()

    }
    else {
        console.log("not equal")
        //selecting div
        let firstCard = selectedCards[0]
            
        let secondCard = selectedCards[1]
        setTimeout(() => {
            //removing flip class from div 
            firstCard.classList.remove('flip')
            secondCard.classList.remove('flip')
            //reset selected 
            selectedCards = []
        },1000)

    }
    cards.forEach(card => card.addEventListener('click', flipCard));
 }

 function endGame() {
    if (matched === 5) {
        alert("gg")
        selectedCards = []
        matched = 0
        window.location.reload();
        

    }
    else {
        console.log("keep playing")
    }

 
 }

 function reset() {
    window.location.reload();
}