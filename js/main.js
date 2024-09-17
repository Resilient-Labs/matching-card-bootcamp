const cards = document.querySelectorAll('div')
document.querySelector('.reset').addEventListener('click', resetBoard)
cards.forEach(card => card.addEventListener('click', clickedCard ))
let counter = 0
let images = ['images/frontofcardBMO.png','images/frontofcardFinn.png','images/frontofcardIceKing.png','images/frontofcardMarcey.png','images/frontofcardlemongrab.png','images/frontofcardjake.png']


let flippedCards = []
// got this from stackoverflow: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
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
  shuffle(images)

 
  
  // Used like so
//   var arr = [2, 11, 37, 42];
//   shuffle(arr);
//   console.log(arr);

function resetBoard() {
    window.location.reload()
}

function clickedCard() {
    //Help from Hassan,Gus and Zach
    //console.log('check')
    // step1: Identify the behaviour that is desired
    // the program needs to only change a set amount of cards to a specfic color
    // the pogram needs to know when 2 cards of the same selected color are selected and keep them in the flipped class
    // the prorgram needs to reflip and shuffle the cards if they are not a match  
    //const randomizer = Math.floor(Math.random()* images.length) 
    //const randomImage = images[randomizer]
    //images.splice(randomImage, 1)
    
        const whatColorIsThis = this.className
        
        console.log(whatColorIsThis)
        // const clickedCard = click.target.id
        // const clickedElement = document.getElementById(clickedCard)
        if (whatColorIsThis === 'flippedRed') {
            this.style.backgroundImage = "url(" + images[0] + ")"
        } else if(whatColorIsThis ==='flippedBlue') {
            this.style.backgroundImage = "url(" + images[1] + ")"
        }
        else if(whatColorIsThis ==='flippedGreen') {
            this.style.background = "url(" + images[2] + ")"
        }
        else if(whatColorIsThis ==='flippedOrange') {
            this.style.background = "url(" + images[3] + ")"
        }
        else if(whatColorIsThis ==='flippedYellow') {
            this.style.background = "url(" + images[4] + ")"
        }
        else if(whatColorIsThis ==='flippedPurple') {
            this.style.background = "url(" + images[5] + ")"
        }
        counter++
        console.log(flippedCards)
        flippedCards.push(this)
        if (counter === 2) {
            checkForMatch()
        }
    }
        //step1: Idenftify the behavior that is currently occuring
        //this is not giving me the correct behavior, because querySelector only selects the first element 
        //step2: Identify the beahvior that needs to happen, and identify the difference between current beheaviour and desired behaviour
        //when a card is clicked it flips the specified card 
        //step3: Figure out how this will be implemented 
        // clickedElement.classList.toggle('flippedRed')        
    function checkForMatch() {
        
        if(flippedCards[0].className === flippedCards[1].className) {
           }
        else {
          let flippedCardOne = flippedCards[0]
          let flippedCardTwo = flippedCards[1]
          setTimeout(() => {
            flippedCardOne.style.background = ""
            flippedCardTwo.style.background = ""
          }, 1000)
    }
    //this is the restart
    counter = 0 
    flippedCards = []
    }































// function checkForMatchTwo(click) {
//     //console.log('check')
//     // step1: Identify the behaviour that is desired
//     // the program needs to only change a set amount of cards to a specfic color
//     // the pogram needs to know when 2 cards of the same selected color are selected and keep them in the flipped class
//     // the prorgram needs to reflip and shuffle the cards if they are not a match  
//         const clickedCard = click.target.id
//         const clickedElement = document.getElementById(clickedCard)
//         //step1: Idenftify the behavior that is currently occuring
//         //this is not giving me the correct behavior, because querySelector only selects the first element 
//         //step2: Identify the beahvior that needs to happen, and identify the difference between current beheaviour and desired behaviour
//         //when a card is clicked it flips the specified card 
//         //step3: Figure out how this will be implemented 
//         clickedElement.classList.toggle('flippedBlue') 
//     }

    // else if(click.target.classList.contains('basic1')) {
    //     document.querySelector('.basic1').classList.toggle('cards2')
    // }
    // else if(click.target.classList.contains('basic3')) {
    //     document.querySelector('.basic3').classList.toggle('cards3')
    // }
    // else if(click.target.classList.contains('basic3')) {
    //     document.querySelector('.basic4').classList.toggle('cards4')



// function clickColorChangeCard1() {
    
    
//     document.querySelector('.basic1').classList.toggle('cards1')
//     document.querySelector('.basic2').classList.add('basic1')
//     document.querySelector('.basic3').classList.add('basic1')
//     document.querySelector('.basic4').classList.add('basic1')
// }

// function clickColorChangeCard2() {
//     document.querySelector('.basic2').classList.toggle('cards2')
//     document.querySelector('.basic1').classList.add('basic1')
//     document.querySelector('.basic3').classList.add('basic1')
//     document.querySelector('.basic4').classList.add('basic1')
// }

// function clickColorChangeCard3() {
//     document.querySelector('.basic3').classList.toggle('cards3')
//     document.querySelector('.basic1').classList.add('basic1')
//     document.querySelector('.basic4').classList.add('basic1')
//     document.querySelector('.basic2').classList.add('basic1')
// }


// function clickColorChangeCard4() {
//     document.querySelector('.basic4').classList.toggle('cards3')
//     document.querySelector('.basic1').classList.add('basic1')
//     document.querySelector('.basic3').classList.add('basic1')
//     document.querySelector('.basic2').classList.add('basic1')
// }

    // document.querySelector('.basic1').
    // document.querySelector('.basic1').add
    // document.querySelector('.basic1').add

    //cardsRowOne.style.background = Math.floor(Math.random() * randomColor)
    
    // cardsRowTwo = document.querySelector('.cards2')
    // cardsRowTwo.style.background = 'red'

    // cardsRowThree = document.querySelector('.cards3')
    //  cardsRowThree.style.background = 'blue'

    // cardsRowFour = document.querySelector('.cards4')    
    //  cardsRowFour.style.background = 'blue'




// document.querySelector('.cards1').addEventListener('click', playGame)
// document.querySelector('.cards2').addEventListener('click', playGame)
// document.querySelector('.cards3').addEventListener('click', playGame)
// document.querySelector('.cards4').addEventListener('click', playGame)


//  cardsRowOne.addEventListener('click', function clickCard() {
//      cardsRowOne.style.background = 'red'
//      console.log(cardsRowOne.style.background)
//  }) 

//  cardsRowTwo.addEventListener('click', function clickCard() {
//      cardsRowTwo.style.background = 'red'
//      console.log(cardsRowTwo.style.background)
//  })

//  cardsRowThree.addEventListener('click', function clickCard2() {
//      cardsRowThree.style.background = 'blue'
//      console.log(cardsRowThree.style.background)
//  }) 

//  cardsRowFour.addEventListener('click', function clickCard2() {
//      cardsRowFour.style.background = 'blue'
//      console.log(cardsRowFour.style.background)
//  })



// function playGame(){
//     console.log(event)
//     let colors = ['red, blue']
//     let board = []
//     console.log(board.length)
//     for(i=0; i<4; i++) {
//         if (i < board.length) {
//         colors = Math.floor(Math.random() * colors.length)
//         board.push(randomColor)
//         console.log(board)
//         console.log('hi')
//         }
//     }
// }
// function clickColorChangeCard2() {
//     document.querySelector('.basic2').classList.add('cards2')
// }

// function clickColorChangeCard3() {
//     document.querySelector('.basic3').classList.add('cards3')
// }

// function clickColorChangeCard4() {
//     document.querySelector('.basic4').classList.add('cards4')
// }