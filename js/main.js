// alert('works')

let winCount=document.querySelector('.winner span');
let lostCount=document.querySelector('.loser span');

let message=document.querySelector('.message');

let cards = ['mug.png', 'bike.png', 'kitchen.png', 'ceramic.png', 'wheel.png', 'mug.png', 'bike.png', 'kitchen.png', 'ceramic.png', 'wheel.png'];
let firstCard=null;
let waiting=false;

let wins=0;
let losses=0;
let resetTimer=null;
let matches=0;

function dealCards(){
    const deck = cards.slice();
    clearTimeout(resetTimer);
    firstCard=null;
    waiting=false;
    matches=0;
    message.textContent = '';


    document.querySelectorAll('.card').forEach((element) =>{
        const randomNumber = Math.floor(Math.random()*deck.length);
        const randomPicture = deck.splice(randomNumber, 1)[0];
        element.src = 'assets/images/' + encodeURIComponent(randomPicture);
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
        matches += 1;
        if(matches === cards.length/2){
          wins += 1;
          winCount.textContent = wins;
          message.textContent = 'You won!'
    
        }
        return
      }
    
      const previousCard = firstCard;
      firstCard = null;
      waiting = true;
    
      resetTimer = setTimeout(() =>{
        imgElement.classList.add('hidden');
        previousCard.classList.add('hidden');
    
        imgElement.alt = '';
        previousCard.alt = '';
    
        previousCard.classList.remove('picked');
        waiting = false;
        losses += 1;
        lostCount.textContent = losses;
    
    
      }, 700)
    }
    
    dealCards()





































// function showScore(wins, loses){
//     winCount.textContent=wins;
//     lostCount.textContent=loses;
// }

// // turn one card face down
// function hideFace(imgElement){
//     imgElement.classList.add('hidden')
//     imgElement.classList.add('picked')
//     imgElement.alt=''
//     imgElement.removeAttribute(src);
// }

// async function dealCards(){
//     ready=false;
//     firstCard=null;
//     waiting=false;
//     message.textContent='';
//     cards.forEach(hideFace)

//     try{
//         const res=await fetch('/api/new game' , {method: 'post'})
//         const data=await res.json()
//         showScore(data.wins, data.loses)
//         ready=true;
//     }catch(err){
//         message.textContent='the sever is not running'
//     }

//     document.querySelectorAll('.flipper').forEach(playble =>{
//         playble.addEventListener('click', turnOver); 
//     })

//     async function turnOver(event){
//         if(!ready || waiting || busy) return;
//         const imgElement = event.currentTarget.querySelector('img');
//         if(!imgElement.classList.containsn('hidden')) return;
//         const index =

// }

