document.querySelector('.start').addEventListener('click', startGame)

function startGame(){
//start button is no ;onger vissible
  document.querySelector('.start').style.visibility = 'hidden'
  // document.querySelector('.title').style.visibility = 'hidden'
  let identifierArray = []
  let counter = 0
  let cardId = []
  let images = ["url('kyooo.png')","url('Inuasha.png')","url('tob.png')","url('Ranma.png')","url('Boku.png')","url('kyooo.png')","url('Inuasha.png')","url('tob.png')","url('Ranma.png')","url('Boku.png')"]
  let matchedGif = ["url('kyo.gif')","url('inuasha.gif')","url('Tobio.gif')","url('Ranma.gif')","url('Katski.gif')"]
  document.querySelectorAll('td').forEach(item =>{
    item.addEventListener('click', flipCards)
  })

  function flipCards(event){
    // event.currentTarget.setAttribute('background-image', '../kyooo.png')
  // document.getElementById("one") = images[0]
    event.currentTarget.style.background = images[event.currentTarget.dataset.index]
  // document.getElementById("twelve").style.background = "url('smiley.gif')"
    identifierArray.push(images[event.currentTarget.dataset.index])
    // identifierArray.push(matchedGif[event.currentTarget.dataset.index])
    cardId.push(event.currentTarget.dataset.index)
    if(counter <= 1){
      counter++
    }
    //second card
    else{
      counter = 1
    }
    keepingTrack()
    console.log(identifierArray)
  }
  function keepingTrack(){
    if(counter % 2 == 0){
      checkingMatch()
    }
  }

  function matchGif(){
    if(images[0] && images[5]){
      matchedGif[0]
    }
  }
  function checkingMatch(){
    if(identifierArray[0] == identifierArray[1]){
      document.querySelector('#win').style.visibility = 'visible'
      matchGif()
      identifierArray = []
      cardId  = []
      setTimeout(() =>
        {document.querySelector('#win').style.visibility = 'hidden'},1000)
        }

    else{
      document.querySelector('#loose').style.visibility = 'visible'
      let x = document.querySelector(`[data-index=\'${cardId[0]}\']`)
      let y = document.querySelector(`[data-index=\'${cardId[1]}\']`)
      setTimeout(() =>
        {x.style.backgroundImage = "url('romancei.jpg')"
        y.style.backgroundImage = "url('romancei.jpg')"
        document.querySelector('#loose').style.visibility = 'hidden'},1000)
      identifierArray = []
      cardId = []
    }
  }

  document.querySelectorAll('td').forEach((item, i) => {
    const card = cardId[i]
  })

  function shuffle(card) {

    var i,j,k
    for (i = card.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      k = card[i];
      card[i] = card[j];
      card[j] = k;
    }
  }
}

// function matchGif(){
//   if()
// }
// if(event.currentTarget !== (images[0] && images[5] ) || (images[1] && images[6] ) ||
//  (images[2] && images[7] ) || (images[3] && images[8] ) || (images[4] && images[9] ){
//
//  }


//Function --conditional that when the cards dont match, flip them back and revert to original image
//
// function noMatch(){
//   if(card1 !== card2){
//
//   }
// }




//Function restart:reshuffel deack order and turn cards face down
