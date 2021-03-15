const cards = document.querySelectorAll('.card')
console.log(cards)
cards.forEach(card => card.addEventListener("click", selected()))

let first = null

function selected(item){
   item.currentTarget.classList.add("selected")
   if(first === null){
       first = item.currentTarget
   }else{
       if(first.style.backgroundImage === item.currentTarget.style.backgroundImage){
           first.style.backgroundImage = "url(gif/logo.gif)"
           item.currentTarget.style.backgroundImage = "url(gif/logo.gif)"
       }
       first = null
   }
}






























































































// let numbersArray = [0,1,2,3,4]

// let numbersArray2 = [0,1,2,3,4,5,6,7,8,9,10]

// const cards = [
//     document.querySelector('.card0'),
//     document.querySelector('.card1'),
//     document.querySelector('.card2'),
//     document.querySelector('.card3'),
//     document.querySelector('.card4')

// ]

// // const boxArray = [
// //     'match1',
// //     'match2',
// //     'match3',
// //     'match4',
// //     'match5'
// // ]

// const cardArray = [
//     'images/genji.png',
//     'images/hanzo.png',
//     'images/mccree.png',
//     'images/mercy.png',
//     'images/orisa.png',
//     'images/pharah.png',
//     'images/rein.png',
//     'images/widow.png',
//     'images/zen.png',
//     'images/sombra.png',
//     'images/reaper.png'
// ]

// cards.forEach(card => card.addEventListener('click', play))

// cards.addEventListener('load', loaded())

// function getRandomNumber(min, max){
//     let step1  = max - min + 1
//     let step2 = Math.random()* step1
//     let result = Math.floor(step2) + min 
//     return result
// }

// // function createArray(start, end){
// //     let myArray = []

// //     for(let i = start; start <= end; i++){
// //         myArray.push(i)
// //     }
// // }

// function getIndex(){
//     if(numbersArray.length == 0){
//         numbersArray = null
//         return
//     }
//     let randomIndex = getRandomNumber(0, numbersArray.length-1)
//     let randomNumber = numbersArray[randomIndex]
//     numbersArray.splice(randomIndex, 1)
//     return randomNumber

// }

// function getIndex2(){
//     if(numbersArray2.length == 0){
//         numbersArray2 = null
//         return
//     }
//     let randomIndex = getRandomNumber(0, numbersArray2.length-1)
//     let randomNumber = numbersArray2[randomIndex]
//     numbersArray2.splice(randomIndex, 1)
//     return randomNumber

// }



// function loaded(){
//     // for(let i = 0; i < 5; i++){
//     //     cards.forEach(element => element.setAttribute('class', "card" + i + " "+ boxArray[getIndex()]))
//     next()
//     // }
// }
// function next(){
//     for(let i = 0; i < 6; i++){
//         cards.forEach(element => element.style.backgroundImage = "url(" + cardArray[getIndex2()] +")" )
//     }
// }






// let firstClicked = 0

// function play(item){
//  if(firstClicked === 0){ 
//       firstClicked = item.currentTarget
//   } 
//   else {
//       if(firstClicked.style.backgroundImage === item.currentTarget.style.backgroundImage ){
//         item.currentTarget.style.background = "blue"
//         firstClicked.style.background = "blue"
//       }
//       firstClicked=0
//   }
  
  

