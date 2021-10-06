const cards = ['css/img/bar.png', 'css/img/bar.png', 'css/img/cherries.png', 'css/img/cherries.png', 'css/img/diamond.png', 'css/img/diamond.png', 'css/img/lemon.png', 'css/img/lemon.png', 'css/img/seven.png', 'css/img/seven.png']

// Fisher-Yates Shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

shuffle(cards)

let choice1 = null
let choice2 = null
let theTime = null

document.querySelector('#zero').src = cards[0]
document.querySelector('#one').src = cards[1]
document.querySelector('#two').src = cards[2]
document.querySelector('#three').src = cards[3]
document.querySelector('#four').src = cards[4]
document.querySelector('#five').src = cards[5]
document.querySelector('#six').src = cards[6]
document.querySelector('#seven').src = cards[7]
document.querySelector('#eight').src = cards[8]
document.querySelector('#nine').src = cards[9]

document.querySelector('.container').addEventListener('click', testCard)

function testCard(event) {
  if(!event.target.classList.value.includes('cardDown')) return
  event.target.classList.remove('cardDown')
  if (choice1 === null) {
    choice1 = Number(event.target.id)
  } else {
    choice2 = Number(event.target.id)
    document.querySelector('.container').removeEventListener('click', testCard)
    if (cards[choice1] === cards[choice2]) {
      document.getElementById(choice1).classList.add('match')
      document.getElementById(choice2).classList.add('match')
      choice1 = null
      choice2 = null 
      document.querySelector('.container').addEventListener('click', testCard)
      console.log('match!')
    } else {
      setTimeout(function(){ 
      document.querySelectorAll('.card').forEach(card => {
        if (!card.classList.value.includes('match')){
          card.classList.add('cardDown')
        }
      })
      choice1 = null
      choice2 = null 
      document.querySelector('.container').addEventListener('click', testCard)
      console.log('NO match')}, 2000)
    }  
  }
}









/*
Fisher-Yates Shuffle:
https://javascript.info/task/shuffle
*/