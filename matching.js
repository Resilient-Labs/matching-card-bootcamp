let winAmount = document.querySelector('.winner');
let lostAmount = document.querySelector('.loser');

let message = document.querySelector('.message')
//store images
let cards =['BeastGohan.webp','egovegeta.webp','futureTrunks.jpg','orangePic.webp','ultraInstinct.jpg']


let firstCard = null;
let waiting = false;
// let busy = false;
// let ready = false;

let wins = 0;
let losses = 0;
let matches = 0;


function dealCards(){
  const deck = [...cards, ...cards]//cards.slice()
  //reset first card
  firstCard = null;
  waiting =false;
  matches=0;
  //clears text
  message.textContent='';
  
  // target each element with .card class
  document.querySelectorAll('.card').forEach((element) => {
    // random order of card values
    const randomNum = Math.floor(Math.random() * deck.length) 
     //random order of pics
    const randomPic = deck.splice(randomNum,1)[0]
    // set img src to extracted image path
    element.src= encodeURIComponent(randomPic)
    element.alt=''
    element.classList.add('hidden')
    element.classList.remove('picked')
  })
}
  // target each element with .flipper class

document.querySelectorAll('.flipper').forEach(playable => {
  playable.addEventListener('click',turnOver)
})

document.querySelector('.redo').addEventListener('click',dealCards)

//card click logic
function turnOver(event){
  //check conditionals
  if(waiting)return
  const imgElement=event.currentTarget.querySelector('img')
  if(!imgElement.classList.contains('hidden'))return

  imgElement.classList.remove('hidden')
  imgElement.alt = ''

  //first click
  if(!firstCard){
  firstCard = imgElement;
  imgElement.classList.add('picked')
  return;

  }
//win condition
  if(imgElement.src === firstCard.src){
    firstCard.classList.remove('picked');
    firstCard=null
    matches += 1
    if(matches === cards.length ){
      wins += 1;
      winAmount.textContent= wins;
      message.textContent='Winnnnnnnaaaaaa'
    }
    //return to the top
    return
  }

  const previousCard = firstCard;
  firstCard = null
  waiting = true

  setTimeout(()=>{
    imgElement.classList.add('hidden')
    //turns card back over
    previousCard.classList.add('hidden')

    imgElement.alt=''
    previousCard.alt=''

    previousCard.classList.remove('picked')
      waiting = false
      losses += 1
      lostAmount.textContent = losses
    
  },1000)



}

dealCards()








