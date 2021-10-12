const cards = document.querySelectorAll('.Card')
function shuffleCards(){
  let scout1 = 'moon', 
  scout2 = 'mars',
  scout3 = 'mercury',
  scout4 = 'venus',
  scout5 = 'jupiter',
  scoutNames = [scout1, scout2, scout3, scout4, scout5]
  
  scoutNames = scoutNames.concat(scoutNames).sort(() => Math.random() - 0.5)
  cards.forEach((el , i) => {
    el.dataset.value = scoutNames[i]
    console.log("dataset value = " + el.dataset.value)
  })
}

shuffleCards()

// get all of the cards
// const cards = document.getElementsyClassName('Card')

let arrImg = [
  'img/moon.jpeg',
  'img/mars.jpeg',
  'img/mercury.jpeg',
  'img/venus.jpeg',
  'img/jupiter.jpeg',
]
cards.forEach(el=>el.addEventListener('click',checkForMatch))

 // using data-value to store scout name in the HTML 
  // then use if statements in the matching function to check if data values of clicked elements are the same.
let clicked = []
let count = 0
function checkForMatch(click) {
  click.target.src = `img/${click.target.dataset.value}.jpeg`
// store clicked element in an array 
  clicked.push(click.target)
if (clicked.length===2){
  if(clicked[0].dataset.value=== clicked[1].dataset.value){
    count ++
  } else {
    setTimeout(() => {
      clicked.forEach(el => el.src = `img/test.png`)
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
  
  document.getElementById('reset').addEventListener('click',function(){
    location.reload()
  })
}
}





 





