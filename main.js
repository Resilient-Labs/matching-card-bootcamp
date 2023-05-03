const cards = document.querySelectorAll('.Card')
function shuffleCards(){
  let imOne = 'DG.png' 
  let imTwo = 'gucci.png'
  let imThree = 'louis.png'
  let imFour = 'ysl.png'
  let imFive = 'tomford.png'
  let imSix = 'valentino.png'
 
  num = [imOne, imTwo, imThree, imFour, imFive, imSix ]
  
  num = num.concat(num).sort(() => Math.random() - 0.5)
  cards.forEach(( em , i) => {
    em.dataset.value = num[i]
    console.log("dataset-value = " + em.dataset.value)
  })
}

shuffleCards()

// get all of the cards
// const cards = document.getElementsyClassName('Card')

let arrImg = [
  'DG.png',
  'gucci.png',
  'louis.png',
  'ysl.png',
  'tomford.png',
  'valentino.png'
]
cards.forEach(em=>em.addEventListener('click',checkMatch))

 // using data-value to store  name in the HTML 
  // then use if statements in the matching function to check if data values of clicked elements are the same.
let clicked = []
let count = 0
function checkMatch(click) {
  click.target.src = click.target.dataset.value;
// store clicked element in an array 
  clicked.push(click.target)
if (clicked.length===2){
  if(clicked[0].dataset.value=== clicked[1].dataset.value){
    count ++
  } else {
    setTimeout(() => {
      clicked.forEach(em => em.src = `back.png`)
      console.log('changing')
      }, 800);
    
    console.log('change')
  }
 setTimeout(() => {clicked = [] }, 801) 
} // else if(){
  console.log("clicked array" ,clicked)
  console.log(click.target.dataset.value)
if(count === 6){
  setTimeout(() => {
    document.querySelector('#message').innerHTML = ('YOU WIN')
  }, 100)

}
}
  
const reset = document.getElementById('reset'); 
reset.addEventListener('click', () => location.reload());
