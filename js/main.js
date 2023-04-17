
const cardS1 = document.querySelectorAll('.cardSet1')
const cardS2 = document.querySelectorAll('.cardSet2')
let cardback = document.getElementsByClassName('back')
let imgArray = ['image/time.png','image/GIO.png','image/nago.png','image/ram.png','image/sol.png']
imgArray = imgArray.concat(imgArray)
//--------------------------------------
//turning these Node list into arrays so that they can be looped through using the forEach method
cardback = Array.from(cardback)
const cardArray1 = Array.from(cardS1)
const cardArray2 = Array.from(cardS2)

function flip(){
//first card will represent the first card that is clicked. 
let firstCard = ''
//in this forEach we are adding an event listener to each 'card back' which then will add the 'hide' class, This makes it so that the cardbacks are no longer visible.
//Card Under contains a ternary operator that determines whether the index is less than the length of cardArray1. if this is true,  the cardUnder will be set to the element in cardArray1 at the index position specified by index. if this is false it will set cardUnder to the element in cardArray2.
cardback.forEach((back, index) => {
  back.addEventListener('click', () => {
    back.classList.add('hide')
    const cardUnder = index < cardArray1.length ? cardArray1[index] : cardArray2[index - cardArray1.length]
    console.log(cardArray1[index])
    cardUnder.classList.remove('hide')
    imgSrc = cardUnder.getAttribute('src')
    backSrc = back.getAttribute('src')
    if(firstCard === ''){
      firstCard = imgSrc
    }else if(firstCard === imgSrc){
      console.log('match')
      firstCard = ''
    }else{
      setTimeout(()=>{ //this setTimeout basically waits 1/2 a second to see if the first card is a match to the next card clicked, if not the 2nd card will be reverted to the card back
      imgSrc = backSrc
      console.log('not a match')
      cardUnder.classList.add('hide')
      back.classList.remove('hide')
      console.log(firstCard,backSrc,cardUnder)
    },'500')
    }
      
    })
   
  })

}
//function checks if you have won after matching all of the cards. It does this by checking if every 'card' does not contain the hide class meaning each pair has been revealed. Upon winning the page will refresh.
function checkWin() {
   allCards = cardArray1.every(card => !card.classList.contains('hide'))
    && cardArray2.every(card => !card.classList.contains('hide'))

  if (allCards === true) {
    console.log(cardArray1)
    alert('You Win!')
    window.location.reload()
  }else{
    alert('Try Again, Daredevil')
  }
}


//below we have each card array being randomized and the index of each array being sent to the source of the img tags. I realized that this process was very similar to a version of the slot machine that I had worked on previously.
cardArray1.forEach(card =>{
  randomizer = Math.floor(Math.random() * imgArray.length);
  card.src = imgArray[randomizer];
  imgArray.splice(randomizer, 1);
});

cardArray2.forEach(card =>{
  randomizer = Math.floor(Math.random() * imgArray.length);
  card.src = imgArray[randomizer];
  imgArray.splice(randomizer, 1);
});


document.querySelector('#start').addEventListener('click', flip)

document.querySelector('#check').addEventListener('click', checkWin)

