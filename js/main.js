let divs = document.querySelectorAll('div') //select the 12 divs that will hold the card images

divs.forEach( (div) => {
  div.addEventListener('click', flip) //add addEventListener for all ogf them
})

let memeCards = [] //will hold the file links for images once they are randomely selected
let lastCard
for (i = 0; i < 6; i++){
  let num = Math.floor(Math.random() * 13) //random card name
  num +=1 //clears zero index
  while(memeCards.includes(`img/${num}.jpg`)){ //makes sure same card is not selected
    num = Math.floor(Math.random() * 13)
    num +=1
  }
  memeCards.push(`img/${num}.jpg`)
}

let buffer = [] //used to stop re-occurence of cards
memeCards = memeCards.reduce( (acc, card) => { //randomizes cards. can't just double size of array, cards will be in the same spot every time
  let rm = [Math.floor(Math.random() * 12)]
  rm.push(Math.floor(Math.random() * 12))
  while ((rm[0] === rm[1]) || (buffer.includes(rm[0]) || buffer.includes(rm[1]) )) {
    rm[0] = Math.floor(Math.random() * 12)
    rm[1] = Math.floor(Math.random() * 12)
  }
  buffer.push(rm[0], rm[1])
  acc[rm[0]] = card
  acc[rm[1]] = card
  return acc
}, [] )

let domCards = document.querySelectorAll('.cardSet') //displays cards after they have been selected and randomized
domCards.forEach( (card, i) => {
  card.src = memeCards[i]
})

document.querySelectorAll('.cardBack').forEach((item, i) => { //sets card back
  item.src = `img/backofcard.jpg`
});

function flip(){
  if (this.classList.contains('matched') || this.classList.contains('flip') || (document.querySelectorAll('.flip').length > 1)){
    alert("Card is matched or flipped, or you're going too fast.")
  }
  else{
    this.classList.toggle('flip')
    let runMatch = (document.querySelectorAll('.flip').length > 1) //Are there more than two cards selected?
    if (runMatch){
      let currentCard = this
      setTimeout(() => {checkMatch(currentCard, lastCard)}, 1000) //check if they match
    }else{
      lastCard = this
    }
  }
}

function checkMatch(newCard, lastCard){ //checks to see if two cards match, if they don't clear them
  let selectedCards = [newCard.querySelector('.cardSet'), lastCard.querySelector('.cardSet')]
  let match = (selectedCards[0].src === selectedCards[1].src)
  if (match){
    newCard.classList.remove('flip')
    newCard.classList.toggle('matched')
    lastCard.classList.remove('flip')
    lastCard.classList.toggle('matched')
    console.log('Matched')
  }
  else{
    newCard.classList.remove('flip')
    lastCard.classList.remove('flip')
    console.log('no match')
  }
}
