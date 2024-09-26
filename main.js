
document.querySelector('#button').addEventListener('click', resetGame)
let cards = Array.from(document.querySelectorAll('section'))
console.log(cards)

 
 // Looping through cards and listening for a click event
cards.forEach((element,index)=> {
  element.addEventListener('click', play)
})
let firstOfPair = ''
function play(e){
  console.dir(e.target)
  e.target.children[0].classList.toggle('hidden')
  // to know if this is the first click or second click (the if and else)
  if(firstOfPair === ''){ 
    firstOfPair = e.target.children[0]
  }else{
  // now checking to see if the images are the same, this is the second click(else)
   if (firstOfPair.getAttribute('src') === e.target.children[0].getAttribute('src')){
     console.log('its a match')
   }else{
    console.log('not a match')
    // want cards to flip back over
    firstOfPair.classList.add('hidden')
    e.target.children[0].classList.add('hidden')
   }
   firstOfPair = ''
  }
}
// // shuffle cards
// function shuffle(array) {
//   let currentIndex = array.length,  randomIndex;

//   // While there remain elements to shuffle.
//   while (currentIndex != 0) {

//     // Pick a remaining element.
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     // And swap it with the current element.
//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex], array[currentIndex]];
//   }

//   return array;
// }
// // Used like so
// var arr = [2, 11, 37, 42];
// shuffle(arr);
// console.log(arr);



// let arr = ['./images/mario.png','./images/mario.png','./images/shyguy.webp', './images/mariometal.webp', './images/walugig.jpg', './images/shyguy.webp', './images/boo.png','./images/walugig.jpg', './images/peach.png','./images/diddykong.webp', './images/tum.jpg','./images/diddykong.webp','./images/mariometal.webp','./images/tum.jpg', './images/peach.png','./images/boo.png','./images/tum.jpg']

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//   }
// }




function resetGame(){
  window.location.reload()
  return false
}


//   element.querySelector('img').classList.toggle('hidden') 
// console.log(element)
//  let firstOfPair = ''
// if(firstOfPair){
//   firstOfPair = 




// declare the variable and name it "first of pair" (the record)
// when the player clicks on card 

/*
    show the image that was clicked on
    if the "first of pair" variable is empty (element clicked on was the first element of the pair)
        reassign "first of pair" to the image that was clicked on
    otherwise (the element they clicked on is the second element of the pair)
        Get the source attribute of the element they just clicked on and name is second 
         if "first of pair" and second are equal 
            then the cards stay facing upwards (player continues to find more matches) 
               reassign "first of pair" variable back to empty 
        else/otherwise  (if source attributes are not equal)
            then the cards flip over (player continues to find more matches) 
            reassign "first of pair" variable back to empty 
            */

































// // Card are able to shuffle, stackflow
// // While there remain elements to shuffle.
// while (currentIndex != 0) {

//   // Pick a remaining element.
//   randomIndex = Math.floor(Math.random() * currentIndex);
//   currentIndex--;

//   // And swap it with the current element.
//   // reassining the 
//   [array[currentIndex], array[randomIndex]] = [
//     array[randomIndex], array[currentIndex]];
//     // ^^ definitely look into it
// }
// return array;

// }










































// document.querySelector('.startGame').addEventListener('click', startGame)
// document.querySelector('.resetButton').addEventListener('click', resetGame)
// document.querySelectorAll('.card').addEventListener('click', pickACard)
// function startGame()
// }
// function pickACard(){
// let cardOne = document.querySelector('.card 1').value
// let cardTwo = document.querySelector('.card 2').value
// }

// function resetGame(){

// }

// declared a variable, array.from method to turn the sections into any array
// document.queryselectorall returns a nodelist
// clickcard is an array of cards
// const clickCard = Array.from(document.querySelectorAll('section'))
// console.log(clickCard)

// let images = ['1','2','3','4','5','6']
// let firstImage = '' // first image 

// // for each loop, passing in the element and index, adding event listeners to each of the elements and index 

// // for each loop for clickcard, looping throuogh the elements 
// // element is each of the cards 
// // index is the position of the cards 
// clickCard.forEach((element,index) =>{
//   // adding an event listener (click) to each of the cards 
//   element.addEventListener('click',(e) => { 
//     console.log(element)
//     // creating a new image tag for each of the cards
//     const img = document.createElement('img')
//     // grabbing a card and putting a image on it 
//     element.appendChild(img)
//     console.log(images[index])
//     // seeing if image matches 
//     if(images[index] === firstImage){
//       console.log('winner')
//    }
//    // reassinging firstimage to the images 
//    firstImage = images[index]
//   }) 
// })

// reset after two cards are chosen 

// look at classes
// click on a card give selected class
// check if the two thing selected, see if classes match
// if match, there is a match, if not remove selected from both and start selecting other stuff

