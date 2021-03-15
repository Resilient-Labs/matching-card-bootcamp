// const box = document.querySelector('.one')
// const box2 = document.querySelector('.two')
// const box3 = document.querySelector('.three')
// const box4 = document.querySelector('.four')
// const box5 = document.querySelector('.five')
// const box6 = document.querySelector('.six')
// const box7 = document.querySelector('.seven')
// const box8 = document.querySelector('.eigth')
// const box9 = document.querySelector('.nine')
// const box10 = document.querySelector('.ten')
//
// const boxes = document.querySelectorAll('.card')

// const boxes = [box, box2, box3, box4]
/* If you're feeling fancy you can add interactivity
    to your site with Javascript */

// prints "hi" in the browser's dev tools console



//document.querySelector('').style.backgroundImage = "url(" + imagefilename +")"
//document.querySelector('').style.backgroundSize = "100%" or "cover"
// function randomChoice(){
//     let random = Math.random()
//     console.log(random)
//     if(random <= .2){
//       return 1;
//     }else if(random <= .4){
//       return 2;
//     }else if(random <= .6){
//       return  3;
//     }else if(random <= .8){
//       return 4;
//     }else{
//       return 5;
//     }
// }
// console.log(randomChoice())
// box.innerText = randomChoice()
// console.log(randomChoice())
// box2.innerText = randomChoice()
// box3.innerText = randomChoice()
// box4.innerText = randomChoice()
// box5.innerText = randomChoice()
// box6.innerText = randomChoice()
// box7.innerText = randomChoice()
// box8.innerText = randomChoice()
// box9.innerText = randomChoice()
// box10.innerText = randomChoice()

// click on cards, and if they match, they stay flipped , if not they flip back down
// 10 different divs containing different images (5 pairs)
// target divs to display or not

/******
Pseudo Code
***/
//Timer?

//Click on 2 cards, if match, stay up

//if not matching, flip back down
//     let random = Math.random()
const resetBtn = document.querySelector('.reset')
const boxes = document.querySelectorAll('.card')
randomChoice()
boxes.forEach(card => card.addEventListener('click', color) )
console.log(boxes)

//Think of this as memory (example: i am going to click 1 and see if it is equal to 1 if not it is reset)
let firstClicked = 0
let secondClicked = 0
let arr = []
let arr1 = []
console.log(firstClicked)
console.log(secondClicked)

function randomChoice() {
  //loop
  // const cardArray = []
  // for(let i = 1; i <= (boxes.length / 2); i++){
  //   cardArray.push(i, i)
  // }
  // const cardArray = [
  //   'img/flower1.png',
  //   'img/flower1.png',
  //   'img/flower2.png',
  //   'img/flower2.png',
  //   'img/flower3.png',
  //   'img/flower3.png',
  //   'img/flower4.png',
  //   'img/flower4.png',
  //   'img/flower5.png',
  //   'img/flower5.png'
  // ]
  const cardArray = [
    'img/icon.png',
    'img/icon.png',
    'img/icon2.png',
    'img/icon2.png',
    'img/icon3.png',
    'img/icon3.png',
    'img/icon4.png',
    'img/icon4.png',
    'img/icon5.png',
    'img/icon5.png'
  ]

  for(const box of boxes){
    const card = Math.floor(Math.random()*cardArray.length)
    box.innerHTML = `<img src = ${cardArray[card]}>`
    cardArray.splice(card, 1)
  }
}

/******
Flips Card and changes color
******/
// create an array of colors, then use math.floor(math.random())so that each section is assigned a random color
function color(item){
  console.log(item)
  //returns the HTML Element that was clicked
  //item.currentTarget -> what was clicked
  //If nothing was checked before clicking this set the current
  //target as 'last target'
  if(firstClicked === 0){
    //the triple equal to zero as a way to reset the cards on the first click
    firstClicked = item.currentTarget
    // arr.push(item.target)
    console.log(arr)
    console.log(firstClicked)
    //firstClicked = .card .card is the parent of h2, who is the child and since it is only h2 it is also the children
    firstClicked.style.background = "blue"
    //children[0] is h2 bc children = [h2]
    firstClicked.children[0].style.display = 'inline-block'
    // boxes.forEach(card => card.removeEventListener('click', color))
    // firstClicked.removeEventListener('click', color)
    // firstClicked.removeEventListener('click', color)
    //makes memory into what was  just clicked
    //When you see item.currentTarget think of the first thing you clicked on
    document.querySelector('#prompt').innerText = firstClicked.innerText
    // this above line lets you know what you clicked on..
  }
  //Otherwise compare the two inner text values
  else {
      secondClicked = item.currentTarget
      // arr.push(item.target)
      console.log(arr)
      console.log(secondClicked)
      secondClicked.style.background = "blue"
      secondClicked.children[0].style.display = 'inline-block'
      boxes.forEach(card => card.removeEventListener('click', color))
      // secondClicked.removeEventListener('click', color)
    if(firstClicked.innerHTML === item.currentTarget.innerHTML ){
      //flip both up
      console.log(firstClicked.innerHTML)
      console.log(item.currentTarget.innerHTML)
      arr.push(firstClicked.innerText)
      arr.push(secondClicked.innerText)
      arr1.push(firstClicked, secondClicked)
      // arr1.push()
      secondClicked.style.background = "green"
      firstClicked.style.background ='green'
      console.log(secondClicked)
      setTimeout( function (){
        secondClicked.style.display = "none"
        firstClicked.style.display = 'none'
        boxes.forEach(card => card.removeEventListener('click', color))
        resetTheClick()
      }, 2000)
      // if(secondClicked.style === 'green' || firstClicked.style === 'green'){
      //
      // } else if(secondClicked.style === 'grey'){
      //
      // }
      // boxes.forEach(card => card.addEventListener('click', color))
      // secondClicked.removeEventListener('click', color)
      // firstClicked.removeEventListener('click', color)

    } else {
      setTimeout(function (){
        firstClicked.style.background = 'grey'
        secondClicked.style.background ='grey'
        firstClicked.children[0].style.display = 'none'
        secondClicked.children[0].style.display = 'none'
        boxes.forEach(card => card.addEventListener('click', color))
        firstClicked.addEventListener('click', color)
        secondClicked.addEventListener('click', color)
        resetTheClick()
      }, 2000)
    }
    console.log(firstClicked)
    console.log(secondClicked)
  }
  // if (state[cellIndex] === 'X' || state[cellIndex] === 'O' || isActive === false){
  //   return;
  // }
  // item.currentTarget.removeEventListener('click', color)
console.log(arr)
console.log(arr1)
// love()
// console.log(arr1[0].getAttribute('style'))
checkGameOver()
}

function resetTheClick(){
  firstClicked = 0
  secondClicked = 0
  document.querySelector('#prompt').innerText = ""
  boxes.forEach(card => card.addEventListener('click', color))
}

function checkGameOver(){
  if(arr.length === 10){
    boxes.forEach(card => card.removeEventListener('click', color))
    // document.querySelector('#prompt').innerText = "Gameover"
    alert('gameover')
  }
}

resetBtn.addEventListener('click', playAgain)

function playAgain(){
  for(let i = 0; i < boxes.length ;i++){
    boxes[i].style.display = 'inline-block'
    boxes[i].children[0].style.display = 'none'
    boxes[i].style.background = 'grey'
    }
  boxes.forEach(card => card.addEventListener('click', color))
  arr = []
  arr1 = []
}
// function love(){
//   if(arr1[0].getAttribute('style') === 'background: green;' || arr1[1].getAttribute('style') === 'background: green;'){
//     arr1[0].removeEventListener('click', color)
//     arr1[1].removeEventListener('click', color)
//
//   }
// }

// function hide() {
//   //loop
//   for(let i = 0; i < boxes.length ;i++){
//     boxes[i].style.display = 'inline-block'
//   }
// }

  // const card1 = Math.floor(Math.random()*5)
  // const card2 = Math.floor(Math.random()*4)
  // const card3 = Math.floor(Math.random()*3)
  // const card4 = Math.floor(Math.random()*2)
  // const card5 = Math.floor(Math.random()*1)
  // const cardArray = [ '1','1', '2', '2', '3', '3', '4', '4', '5', '5']
  // const card1 = Math.floor(Math.random()*5)
  // document.querySelector('.one').innerText = cardArray[card1]
  // cardArray.splice(card1, 1)
  // console.log(cardArray)
  // const card2 = Math.floor(Math.random()*4)
  // document.querySelector('.two').innerText = cardArray[card2]
  //  console.log(card2)
  //  cardArray.splice(card2, 1)
  //  console.log(cardArray)
  //  const card3 = Math.floor(Math.random()*3)
  // document.querySelector('.three').innerText = cardArray[card3]
  // console.log(card3)
  // cardArray.splice(card3, 1)
  // console.log(cardArray)
  // const card4 = Math.floor(Math.random()*2)
  // document.querySelector('.four').innerText = cardArray[card4]
  // console.log(card4)
  // cardArray.splice(card4, 1)
  // console.log(cardArray)
  // const card5 = Math.floor(Math.random()*1)
  // document.querySelector('.five').innerText = cardArray[card5]
  // console.log(card5)
  // console.log(cardArray)

  // for(let i = 0;i < 9;i++ ){
  //   const card1 = Math.floor(Math.random()*i)
  //   const card2 = Math.floor(Math.random()*i)
  //   const card3 = Math.floor(Math.random()*3)
  //   const card4 = Math.floor(Math.random()*2)
  //   const card5 = Math.floor(Math.random()*1)
  // }




// function hide() {
//
// 	document.querySelector('.img1').style.display = 'inline-block'
//   document.querySelector('.img2').style.display = 'inline-block'
//   document.querySelector('.img3').style.display = 'inline-block'
//   document.querySelector('.img4').style.display = 'inline-block'
//   document.querySelector('.img5').style.display = 'inline-block'
// }
// function randomChoice(){
//   const card1 = Math.floor(Math.random()*5)
//   const card2 = Math.floor(Math.random()*4)
//   const card3 = Math.floor(Math.random()*3)
//   const card4 = Math.floor(Math.random()*2)
//   const card5 = Math.floor(Math.random()*1)
//   const cardArray = [
//     'img/flower1.png',
//     'img/flower2.png',
//     'img/flower3.png',
//     'img/flower4.png',
//     'img/flower5.png'
//   ]
//   document.querySelector('.img1').src = cardArray[card1]
//   cardArray.splice(card1, 1)
//   console.log(cardArray)
//   document.querySelector('.img2').src = cardArray[card2]
//   cardArray.splice(card2, 1)
//   document.querySelector('.img3').src = cardArray[card3]
//   cardArray.splice(card3, 1)
//   document.querySelector('.img4').src= cardArray[card4]
//   cardArray.splice(card4, 1)
//   document.querySelector('.img5').src= cardArray[card5]
//
// }
// const card1 = Math.floor(Math.random()*5)
// const card2 = Math.floor(Math.random()*4)
// const card3 = Math.floor(Math.random()*3)
// const card4 = Math.floor(Math.random()*2)
// const card5 = Math.floor(Math.random()*1)
// const cardArray = [
//   'img/flower1.png',
//   'img/flower2.png',
//   'img/flower3.png',
//   'img/flower4.png',
//   'img/flower5.png'
// ]
// document.querySelector('.img1').src = cardArray[card1]
// cardArray.splice(card1, 1)
// console.log(cardArray)
// document.querySelector('.img2').src = cardArray[card2]
// cardArray.splice(card2, 1)
// document.querySelector('.img3').src = cardArray[card3]
// cardArray.splice(card3, 1)
// document.querySelector('.img4').src= cardArray[card4]
// cardArray.splice(card4, 1)
// document.querySelector('.img5').src= cardArray[card5]
