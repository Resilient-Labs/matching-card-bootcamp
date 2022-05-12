//Met with mentor Mark Soper

//Pseudo Code
/*
10 card matching game
Can select 2 cards and they flip
If matching stay up
If not matching turns back around. 
When all cards are up, user wins
Needs to check each turn if all cards are flipped.
Class to toggle image
Class to toggle if matching. 
*/

let gameCards = Array.from(document.querySelectorAll('section'))
console.log(gameCards)

let winMessage = document.querySelector('span')
let counter = 0
let selectedCards = []
let matchedCards = [] 
//console.log(`This is the array of all the game cards: ${gameCards}`)
//console.log(gameCards[2].classList)
//console.log(gameCards[2].classList[1])
//console.log(matchBoxes[1].classList)
//console.log(gameCards[7].classList.contains('back'))
//console.log(gameCards[2].classList.value == gameCards[1].classList.value)
const cardPics = ['picOne', 'picTwo', 'picThree', 'picFour', 'picFive','picOne', 'picTwo', 'picThree', 'picFour', 'picFive']

//Calling two function to get randoms cards at startup
shuffle(cardPics)
assignRandomPicsToGameCards()

//Shuffle the picture array.Code from Stack Overflow (https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
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

//function assigning random pictures the game cards
function assignRandomPicsToGameCards(){

    //For Loop syntax to assign pics to cards.
    //   for(let i = 0; i < cardPics.length; i++){
    //     gameCards[i].classList.add(cardPics[i])
    //     console.log(`adding the class ${cardPics[i]} to section ${gameCards[i]} using index ${i}`)
    //     }

    //.forEach Loop syntax to assign pcs to cards.
    gameCards.forEach((card, i) =>{
    card.classList.add(cardPics[i])
    })
}

//function to flip card when clicked
function flipCard(e){
    console.log(`The click counter: ${counter}`)
    if (!e.target.classList.contains('selected')){
        e.target.classList.add('selected')
        console.log(`The click target focus: ${e.target}`)
        
        counter++
        selectedCards.push(e.target)
    }
    return checkForMatch()
    //  let select = gameCards.filter(card => card.classList.contains('selected'))
    //  console.log(select)

}

//function to check for match
function checkForMatch(){
//the nested loop option to check match
    // for(let i = 0; i < gameCards.length; i++){
    //     console.log(`loop one ${gameCards[i]}`)
    //     for(let j = i + 1; j < gameCards.length; j++){
    //         //console.log(`baby loop ${gameCards[j]}`)
    //         if((gameCards[i].classList.value === gameCards[j].classList.value) && (gameCards[i].classList.contains('selected'))){
    //             console.log('Issa a bigole match')
    //             console.log(gameCards[i].classList.value === gameCards[j].classList.value)
    //             gameCards[i].classList.add('matched')
    //             gameCards[j].classList.add('matched')
    //             gameCards[i].classList.remove('selected')
    //             gameCards[j].classList.remove('selected')
    //         }
    //     }
    //     // console.log(gameCards)
    //     // && (gameCards[i].classList.contains('selected'))
    // }
    

    // gameCards.filter(card => {
    //     card.classList.contains('selected')
    // }).forEach(scard => {
    //     s
    // })
    
    //The push option to check match    
    if(selectedCards.length === 3){
        if (selectedCards[0].classList.value === selectedCards[1].classList.value){
            selectedCards[0].classList.add('matched')
            selectedCards[0].classList.remove('selected')
            selectedCards[1].classList.add('matched')
            selectedCards[1].classList.remove('selected')
            matchedCards.push(selectedCards[0], selectedCards[1])
            selectedCards.splice(0,2)
            
        }else{
            selectedCards[0].classList.remove('selected')
            selectedCards[1].classList.remove('selected')
            selectedCards.splice(0, 2)
            counter -= 2
        }
    }
    console.log('array of selected cards:')
    console.log(selectedCards)
    console.log('array of matched cards:')
    console.log(matchedCards)

    if(counter === 10){
        console.log('You a bigole winner')
        winMessage.innerText = 'You win the game!'
    }
}

//function to restart game 
function restartGame(){
    matchedCards = []
    selectedCards = []
    counter = 0
    gameCards.forEach(card => {
        card.classList.remove('matched')
        card.classList.remove('selected')
    })
    shuffle(cardPics)
    assignRandomPicsToGameCards()
}


document.querySelector('#restartBtn').addEventListener('click', restartGame)
document.querySelector('main').addEventListener('click', flipCard)
