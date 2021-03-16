/**********************************
===========Card Class==============
value: String - either src of image or string to place into card
isImg: Boolean - true if the value is a an img src/path
domIndex: index on DOM interface, returns -1 if dissociated
isFlipped: boolean - whether the card state is face up or face down
***********************************/
class Card {
  constructor(value, isImg, domIndex){
    this.value = value
    this.isImg = isImg
    this.domIndex = domIndex
    this.isFaceUp = false
  }
}

/************************************************
=================FlipCardGame Class==============
Shows Player cards and handles how to take turns
htmlElement: DOM element
cardFaces: array of Card Prototypes represented
by an array containing the value of the card,
and a boolean if the value is an img source
**Assumes cardFaces are all text or all img paths
matchAmount: number of card duplicates to match
*************************************************/
class FlipCardGame{
  constructor(htmlElement, matchAmount = 2, cardFaces = [[1, false],[2, false],[3,false],[4, false],[5,false]]){
    this.htmlElement = htmlElement
    this.memory = []
    this.matchAmount = matchAmount
    this.deck = []
    this.isOver = false

    //Clear Board
    this.htmlElement.innerHTML = ''

    //Create Deck of cards
    for(let i = 0 ; i< cardFaces.length ; i++){
      for(let j = 0 ; j < matchAmount ; j++){
        this.deck.push(new Card(cardFaces[i][0], cardFaces[i][1], -1))
      }
    }
    //Initialize DOM Interface
    for(let k = 0 ; k < this.deck.length ; k++){
      let div = document.createElement('div')
      div.classList.add('card', 'isFaceUp')
      div.id = k
      div.addEventListener('click', item => this.flip(item))
      let face = document.createElement('div')
      face.classList.add('face')
      let img =  document.createElement('img')
      let span = document.createElement('span')
      face.appendChild(img)
      face.appendChild(span)
      let tail = document.createElement('div')
      tail.classList.add('tail')
      let logo = document.createElement('img')
      logo.src = 'img/logo-white.png'
      tail.appendChild(logo)
      div.appendChild(face)
      div.appendChild(tail)
      this.htmlElement.appendChild(div)
    }
    this.shuffleDeal()
  }

  /**********
  Reset
  Dissociates dom elements from deck of cards & resets cards' flipped states
  resets memory
  ***********/
  reset(){
    this.deck.forEach(item => {
      item.domIndex=-1
      item.isFaceUp = false
    })
    let cardList = document.querySelectorAll('.card')
    cardList.forEach((item, i) => {
      item.classList.remove('isFaceUp')
      item.querySelector('.face img').src=''
      item.querySelector('.face span').innerText=''
    });
    this.memory =[]
  }

  /**********
  KnuthShuffle
  Based on https://github.com/Daplie/knuth-shuffle
  Utilizes Knuth Shuffle
  ***********/
  knuthShuffle(){
    var currentIndex = this.deck.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.deck[currentIndex];
      this.deck[currentIndex] = this.deck[randomIndex];
      this.deck[randomIndex] = temporaryValue;
    }
  }

  /**********
  ShuffleDeal
  Associates dom elements to a random card in the deck
  Utilizes Knuth Shuffle
  ***********/
  shuffleDeal() {
    this.reset()
    let domCardList = document.querySelectorAll('.card')
    this.knuthShuffle()
    domCardList.forEach((item, i) => {
      let card = this.deck[i]
      card.domIndex = item.id
      let img = item.querySelector('img')
      let span = item.querySelector('span')
      img.classList.add('hidden')
      span.classList.add('hidden')
      if(card.isImg){
        img.src = card.value
        img.classList.remove('hidden')
      } else {
        span.innerText = card.value
        span.classList.remove('hidden')
      }
    });
  }

  /**********
  Flip Animation
  Flips card and applies boolean class to html element
  clickedItem: html element
  ***********/
  flipAnimation(clickedItem){
    let isFaceUp = clickedItem.classList.contains("isFaceUp")
    console.log(clickedItem)
    // console.log(isFaceUp)
    let front = isFaceUp ? clickedItem.querySelector('.face') : clickedItem.querySelector('.tail')
    let back = !isFaceUp ? clickedItem.querySelector('.face') : clickedItem.querySelector('.tail')
    // console.log(`front is ${front.id} and back is ${back.id}`)
    if(isFaceUp) {
      front.style.animation = 'a-front-back .3s linear both'
      back.style.animation = 'b-back-front .3s linear both'
      clickedItem.classList.remove('isFaceUp')

    } else{
      back.style.animation = 'a-back-front .3s linear both'
      front.style.animation = 'b-front-back .3s linear both'
      clickedItem.classList.add('isFaceUp')
    }
  }

  /**********
  findCard
  domID: number representing the domelement related to a card
  returns: card object associated with domID
  ***********/
  findCard(domID){
    let answer = null
    this.deck.forEach((item, i) => {
      // console.log(`Looking for ${domID}`)
      // console.log('Checking:')
      // console.log(item)
      // console.log(Number(item.domIndex)==domID)
      if(Number(item.domIndex)==domID){answer = item}
    });
    // throw New Error(`Card ${domID} Not Found`)
    return answer
  }



  /**********
  Flip
  Event Function - Flips over dom element
  ***********/
  flip(clickedItem){
    let domElement = clickedItem.currentTarget
    //check if face down, if face up, do nothing
    if(domElement.classList.contains('isFaceUp')===false){
      this.flipAnimation(domElement)
      let targetCard = this.findCard(domElement.id)
      //add to memory if memory is empty
      if(this.memory.length===0){
        this.memory.push(targetCard)
        console.log(this.memory)
      }
      //Add to memory if equal to memory
      else if(this.memory[0].value == targetCard.value){
        this.memory.push(targetCard)
        //if all match found, empty memory
        if(this.memory.length===this.matchAmount){
          console.log('memory full')
          this.memory=[]
        }
        console.log(this.memory)
      }
      //Otherwise there is no match : reset memory, flip back clicked Element and all in memory
      else {
        console.log('non match')
        setTimeout(_=>{this.flipAnimation(domElement)}, 400)
        this.memory.forEach((item, i) => {
          setTimeout(_=>{this.flipAnimation(document.getElementById(item.domIndex))}, 400)
        });
        this.memory=[]
      }
    }
  }




}

/**********************************
===========Player Class==============
cardFaces: array of Cards to duplicate
match number: number of card duplicates to match
***********************************/
class Player{
  constructor(domElement){
    this.baseCards = [[1, false], [2, false], [3, false], [4, false], [5, false]]
    this.customCards = [['img/cards/screenshots/news.png', true],['img/cards/screenshots/nyt.png', true],['img/cards/screenshots/portfoliov2.png', true],['img/cards/screenshots/simple-calc.png', true],['img/cards/screenshots/slot-machine.png', true],['img/cards/screenshots/tictactoebeans.png', true],['img/cards/screenshots/to-do-list.png', true],['img/cards/screenshots/true-color.png', true],['img/cards/screenshots/yelp-screenshot.png', true]]
    this.domElement = domElement
    this.game = null
    // let type = [0,1,2]
    this.matchAmount = 2
    this.currentCards = null
    this.playBaseGame()
  }
  playBaseGame(matchAmount=this.matchAmount){
    this.matchAmount = matchAmount
    this.currentCards = this.baseCards
    this.game = new FlipCardGame(this.domElement, matchAmount, this.baseCards)
  }
  playCustomGame(matchAmount=this.matchAmount){
    this.matchAmount = matchAmount
    this.currentCards = this.customCards
    this.game = new FlipCardGame(this.domElement, matchAmount, this.customCards)
  }
  playMixGame(matchAmount=this.matchAmount){
    this.matchAmount = matchAmount
    this.currentCards = this.baseCards.concat(this.customCards)
    this.game = new FlipCardGame(this.domElement, matchAmount, this.baseCards.concat(this.customCards))
  }
  resetDifficulty(matchAmount=this.matchAmount){
    this.matchAmount = matchAmount
    this.game = new FlipCardGame(this.domElement, matchAmount, this.currentCards)
  }
}


//Menu Controller
let initialize = function(){
  let player1 = new Player(document.querySelector('#gameboard'))
  let difficultyButtons = document.querySelectorAll('.difficulty button')
  let cardTypeButtons = document.querySelectorAll('.card-type button')
  document.querySelector('#reset').addEventListener('click', reset)
  difficultyButtons.forEach((item, i) => {
    item.addEventListener('click',changeDifficulty)
  });
  cardTypeButtons.forEach((itemz, j) => {
    itemz.addEventListener('click', changeCards)
  });
  // player1.playBaseGame()


  function reset(element){
    player1.resetDifficulty()
  }

  function changeDifficulty(element){
    difficultyButtons.forEach((item, i) => {
      item.classList.remove('selected')
    });
    element.currentTarget.classList.add('selected')
    let difficulty = -1
    if(element.currentTarget.id === 'hard'){
      difficulty = 4
    }
    else if (element.currentTarget.id === 'medium') {difficulty =3}
    else { difficulty = 2}
    player1.resetDifficulty(difficulty)
  }

  function changeCards(element){
    console.log('changing cards')
    cardTypeButtons.forEach((item, i) => {
      item.classList.remove('selected')
    });
    element.currentTarget.classList.add('selected')
    if(element.currentTarget.id==='mix'){player1.playMixGame()}
    else if(element.currentTarget.id==='portfolio'){player1.playCustomGame()}
    else if(element.currentTarget.id==='numbers'){player1.playBaseGame()}
  }

}

initialize()


/**Aside panel functionality**/
document.querySelector('.info-button').addEventListener('click', toggleAside)
document.querySelector('#hide-aside').addEventListener('click', toggleAside)

function toggleAside(){       document.querySelector('aside').classList.toggle('reveal')
}
/**Aside Panel end*/
