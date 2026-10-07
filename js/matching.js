
let winCount = document.querySelector('.winner span');
let lostCount = document.querySelector('.losser span');
let message = document.querySelector('.message');

document.querySelector('.re-do').addEventListener('click', restart);
//come back to storage images
let cards = ['apple.png','frutilla.png','kiwi.png','banana.png','orange.png','apple.png','frutilla.png','kiwi.png','banana.png','orange.png'];
let firstCard = null;
let waiting = false;

let wins=0;
let losses=0;
let matches=0;

function dealCards(){
  const deck = cards.slice();
  firstCard = null;
  waiting = false;
  matches = 0;
  message.textContent = '';

  document.querySelectorAll('.card').forEach((element) =>{
    const randomNumber = Math.floor(Math.random()*deck.length);
    const randomPicture = deck.splice(randomNumber, 1)[0];
    element.src = 'css/' + encodeURIComponent(randomPicture);
    element.alt = '';
    element.classList.add('hidden');
    element.classList.remove('picked');
  })
}

document.querySelectorAll('.flipper').forEach((playable) => {
  playable.addEventListener('click', turnOver);
})

document.querySelector('.re-do').addEventListener('click', dealCards);


function turnOver(event){
  if(waiting) return
  const imgElement = event.currentTarget.querySelector('img');
  if(!imgElement.classList.contains('hidden')) return 

  imgElement.classList.remove('hidden');
  imgElement.alt = '';

  //first click
  if(!firstCard){
    firstCard = imgElement;
    imgElement.classList.add('picked');
    return

  }

  if(imgElement.src === firstCard.src){
    firstCard.classList.remove('picked');
    firstCard = null;
    matches +=  1 ;
    if(matches === cards.length/2){
      wins += 1;
      winCount.textContent = wins;
      message.style.display = "flex";
      message.textContent = 'You won!';

    }
    return 
  }

  const previousCard = firstCard;
  firstCard = null;
  waiting = true;

  setTimeout(() =>{
    imgElement.classList.add('hidden');
    previousCard.classList.add('hidden');

    imgElement.alt = '';
    previousCard.alt = '';

    previousCard.classList.remove('picked');
    waiting = false;
    losses += 1;
    lostCount.textContent  = losses;


  }, 700)
}

dealCards();

function restart(){
  winCount.textContent = 0;
  lostCount.textContent = 0;
  matches=0;
}

































