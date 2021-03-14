/* If you're feeling fancy you can add interactivity
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");



const cards = document.querySelectorAll('.card')

cards.forEach(card => card.addEventListener('click', color))


let firstClicked = 0

/******
Flips Card and changes color
******/

function color(item){
  item.currentTarget.classList.toggle('hidden')
  if(firstClicked === 0){
    firstClicked = item.currentTarget
  }
  else {
      if(firstClicked.innerText === item.currentTarget.innerText ){
      }
      firstClicked=0
      document.querySelector('#prompt').innerText = ""
  }
}



//Toggle Method

//
//If OOP
//Card Object class/object function


//const card1 = Math.floor(Math.random()*5)
// const card2 = Math.floor(Math.random()*5)
// const card3 = Math.floor(Math.random()*5)
// const card4 = Math.floor(Math.random()*5)
// const cardArray = [
//   'blue.jpg',
//   'red.jpg',
//   'yellow.jpg',
//   'orange.jpg',
//   'green.png',
// ]
// document.querySelector('#card1').style.background = cardArray[card1]

// document.querySelector('#card2').style.background = cardArray[card2]

// document.querySelector('#card3').style.background = cardArray[card3]

// document.querySelector('#card4').style.background = cardArray[card4]
