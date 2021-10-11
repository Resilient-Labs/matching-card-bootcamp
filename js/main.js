const cards = document.querySelectorAll('.Card')
function shuffleCards(){
    let tarot1 = 'theworld', 
    tarot2 = 'thestar',
    tarot3 = 'thechariot',
    tarot4 = 'themagician',
    tarot5 = 'thefool',
    tarotNames = [tarot1, tarot2, tarot3, tarot4, tarot5]

    tarotNames = tarotNames.concat(tarotNames).sort(() => Math.random() - 0.5)
    cards.forEach((el , i) => {
        el.dataset.value = tarotNames[i]
        console.log("dataset value = " + el.dataset.value)
    })
}

shuffleCards()

let arrImg = [
  'theworld.png',
  'thechariot.png',
  'themagician.png',
  'thefool.png',
  'thestar.png',
]
cards.forEach(el=>el.addEventListener('click',checkForMatch))

let clicked = []
let count = 0

function checkForMatch(click) {
    click.target.src = `img/${click.target.dataset.value}.png`
// store clicked element in an array 
    clicked.push(click.target)
if (clicked.length===2){
    if(clicked[0].dataset.value=== clicked[1].dataset.value){
    count ++
    } 
    else {
    setTimeout(() => {
    clicked.forEach(el => el.src = `img/back.png`)
    console.log('changing')
    }, 800);
    
    console.log('change')
  }
 setTimeout(() => {clicked = [] }, 801) 
} 
console.log("clicked array" ,clicked)
  console.log(click.target.dataset.value)
if(count === 5){
  setTimeout(() => {
    alert('youWin')
  }, 1000)
  
}
}

document.getElementById('reset').addEventListener('click',function(){
  location.reload()
})