//Made by House Gardener
const pair1 = document.querySelectorAll(".pair1")
const pair2 = document.querySelectorAll(".pair2")
const pair3 = document.querySelectorAll(".pair3")
const pair4 = document.querySelectorAll(".pair4")
const pair5 = document.querySelectorAll(".pair5")
const img1 = "url('images/cardBack.png')";
const tds = document.querySelectorAll('TD');
// const img2 = "url('images/mario.jpg')";
const octo = 'images/octo.png'
const aceB = 'images/aceB.png'
const drago = 'images/drago.png'
const space = 'images/space.png'
const beeHive = 'images/beeHive.jpg'


pair1.forEach(pair1 => pair1.addEventListener("click", flip1))
function flip1() {
  this.src = octo;
//following code
};

pair2.forEach(pair2 => pair2.addEventListener("click", flip2))
function flip2() {
  this.src = aceB;
//following code
};

pair3.forEach(pair3 => pair3.addEventListener("click", flip3))
function flip3() {
  this.src = drago;
//following code
};

pair4.forEach(pair4 => pair4.addEventListener("click", flip4))
function flip4() {
  this.src = space;
//following code
};

pair5.forEach(pair5 => pair5.addEventListener("click", flip5))
function flip5() {
  this.src = beeHive
//following code
};

const revealPic = (pairs, pic) => {
  pairs.forEach((img) =>{
    img.addEventListener('click', (event) =>{
         img.src = pic;
         setTimeout(cardsMatch, 1800);
         setTimeout(cardsDontMatch, 1800);
       });
     });
   };

   revealPic(pair1, octo);
   revealPic(pair2, aceB);
   revealPic(pair3, drago);
   revealPic(pair4, space);
   revealPic(pair5, beeHive);

   const cardsDontMatch = () => {

     const match = [[1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9], [1, 10],
     [2, 1], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8], [2, 9], [2, 10],
     [3, 1], [3, 2], [3, 5], [3, 6], [3, 7], [3, 8], [3, 9], [3, 10],
     [4, 1], [4, 2], [4, 3], [4, 5], [4, 6], [4, 7], [4, 8], [4, 9], [4, 10],
     [5, 1], [5, 2], [5, 3], [5, 4], [5, 7], [5, 8], [5, 9], [5, 10],
     [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 7], [6, 8], [6, 9], [6, 10],
     [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 9], [7, 10],
     [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [8, 9], [8, 10],
     [9, 1], [9, 2], [9, 3], [9, 4], [9, 5], [9, 6], [9, 7], [9, 8],
     [10, 1], [10, 2], [10, 3], [10, 4], [10, 5], [10, 6], [10, 7], [10, 8], [10, 9]]

     for(let i = 0; i < match.length; i++){
     const cardPairs = match[i];

     const firstCard = document.getElementById(cardPairs[0]).img.src;
     const secondCard = document.getElementById(cardPairs[1]).img.src;

       if(firstCard === octo && secondCard === aceB){
        flipCard(pair1, img1);
        flipCard(pair2, img1);
     }else if(firstCard === octo && secondCard === drago){
       flipCard(pair1, img1);
       flipCard(pair3, img1);
     }else if(firstCard === octo && secondCard === space){
       flipCard(pair1, img1);
       flipCard(pair4, img1);
     }else if(firstCard === octo && secondCard === beeHive){
       flipCard(pair1, img1);
       flipCard(pair5, img1);
     }else if (firstCard === aceB && secondCard === octo){
       flipCard(pair2, img1);
       flipCard(pair1, img1);
     }else if(firstCard === aceB && secondCard === drago){
       flipCard(pair2, img1);
       flipCard(pair3, img1);
     }else if(firstCard === aceB && secondCard === space){
       flipCard(pair2, img1);
       flipCard(pair4, img1);
     }else if(firstCard === aceB && secondCard === beeHive){
       flipCard(pair2, img1);
       flipCard(pair5, img1);
     }else if (firstCard === drago && secondCard === octo){
       flipCard(pair3, img1);
       flipCard(pair1, img1);
     }else if(firstCard === drago && secondCard === aceB){
       flipCard(pair3, img1);
       flipCard(pair2, img1);
     }else if(firstCard === drago && secondCard === space){
       flipCard(pair3, img1);
       flipCard(pair4, img1);
     }else if(firstCard === drago && secondCard === beeHive){
       flipCard(pair3, img1);
       flipCard(pair5, img1);
     }else if (firstCard === space && secondCard === octo){
       flipCard(pair4, img1);
       flipCard(pair1, img1);
     }else if(firstCard === space && secondCard === aceB){
       flipCard(pair4, img1);
       flipCard(pair2, img1);
     }else if(firstCard === space && secondCard === drago){
       flipCard(pair4, img1);
       flipCard(pair3, img1);
     }else if(firstCard === space && secondCard === beeHive){
       flipCard(pair4, img1);
       flipCard(pair5, img1);
     }else if (firstCard === beeHive && secondCard === octo){
       flipCard(pair5, img1);
       flipCard(pair1, img1);
     }else if(firstCard === beeHive && secondCard === aceB){
       flipCard(pair5, img1);
       flipCard(pair2, img1);
     }else if(firstCard === beeHive && secondCard === drago){
       flipCard(pair5, img1);
       flipCard(pair3, img1);
     }else if(firstCard === beeHive && secondCard === space){
       flipCard(pair5, img1);
       flipCard(pair4, img1);
       };
     };
   };

   const cardsMatch = () => {
     const match = [[1, 2],[3, 4], [5, 6],  [7, 8], [9, 10]]

     for(let i = 0; i < match.length; i++){
     const cardPairs = match[i];

     const firstCard = document.getElementById(cardPairs[0]).src;
     const secondCard = document.getElementById(cardPairs[1]).src;

     if (firstCard === octo && secondCard === octo){
       flipCard(pair1, octo);
     }else if(firstCard === aceB && secondCard === aceB){
       flipCard(pair2, aceB);
     }else if( firstCard === space && secondCard === space){
       flipCard(pair4, space);
     }else if( firstCard === drago && secondCard === drago){
       flipCard(pair3, drago);
     }else if( firstCard === beeHive && secondCard === beeHive){
       flipCard(pair5, beeHive);
       };
     };
   };

   //Reset button
   // document.querySelector("button").addEventListener('click', () =>{
   //       tds.forEach((td) =>{
   //       td.style.background = img1;
   //   })
   // })
