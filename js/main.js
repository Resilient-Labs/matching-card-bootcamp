//We worked on this as a group; Gardner.

//Variable declarations
const pair1 = document.querySelectorAll(".cardOne");
const pair2 = document.querySelectorAll(".cardTwo");
const pair3 = document.querySelectorAll(".cardThree");
const pair4 = document.querySelectorAll(".cardFour");
const pair5 = document.querySelectorAll(".cardFive");
const tds = document.querySelectorAll('TD');
const img1 = "url('images/lv.jpg') center /100%";
const img2 = "url('images/lv2.jpg') center /100%";

//Functions that return cards to 'item blocks' if they do not match and change background color of td card pairs on-click.
const flipCard = (pairs, image) => {
  pairs.forEach((td) =>{
         td.style.background = image;
       });
     };

const revealColor = (pairs, color) => {
  pairs.forEach((td) =>{
    td.addEventListener('click', (event) =>{
         td.style.background = color;
         setTimeout(cardsMatch, 1800);
         setTimeout(cardsDontMatch, 1800);
       });
     });
   };

revealColor(pair1, "red");
revealColor(pair2, "blue");
revealColor(pair3, "yellow");
revealColor(pair4, "green");
revealColor(pair5, "purple");

//Function that checks if the cards do not match.
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

  const firstCard = document.getElementById(cardPairs[0]).style.background;
  const secondCard = document.getElementById(cardPairs[1]).style.background;

    if(firstCard === "red" && secondCard === "blue"){
     flipCard(pair1, img1);
     flipCard(pair2, img1);
  }else if(firstCard === "red" && secondCard === "yellow"){
    flipCard(pair1, img1);
    flipCard(pair3, img1);
  }else if(firstCard === "red" && secondCard === "green"){
    flipCard(pair1, img1);
    flipCard(pair4, img1);
  }else if(firstCard === "red" && secondCard === "purple"){
    flipCard(pair1, img1);
    flipCard(pair5, img1);
  }else if (firstCard === "blue" && secondCard === "red"){
    flipCard(pair2, img1);
    flipCard(pair1, img1);
  }else if(firstCard === "blue" && secondCard === "yellow"){
    flipCard(pair2, img1);
    flipCard(pair3, img1);
  }else if(firstCard === "blue" && secondCard === "green"){
    flipCard(pair2, img1);
    flipCard(pair4, img1);
  }else if(firstCard === "blue" && secondCard === "purple"){
    flipCard(pair2, img1);
    flipCard(pair5, img1);
  }else if (firstCard === "yellow" && secondCard === "red"){
    flipCard(pair3, img1);
    flipCard(pair1, img1);
  }else if(firstCard === "yellow" && secondCard === "blue"){
    flipCard(pair3, img1);
    flipCard(pair2, img1);
  }else if(firstCard === "yellow" && secondCard === "green"){
    flipCard(pair3, img1);
    flipCard(pair4, img1);
  }else if(firstCard === "yellow" && secondCard === "purple"){
    flipCard(pair3, img1);
    flipCard(pair5, img1);
  }else if (firstCard === "green" && secondCard === "red"){
    flipCard(pair4, img1);
    flipCard(pair1, img1);
  }else if(firstCard === "green" && secondCard === "blue"){
    flipCard(pair4, img1);
    flipCard(pair2, img1);
  }else if(firstCard === "green" && secondCard === "yellow"){
    flipCard(pair4, img1);
    flipCard(pair3, img1);
  }else if(firstCard === "green" && secondCard === "purple"){
    flipCard(pair4, img1);
    flipCard(pair5, img1);
  }else if (firstCard === "purple" && secondCard === "red"){
    flipCard(pair5, img1);
    flipCard(pair1, img1);
  }else if(firstCard === "purple" && secondCard === "blue"){
    flipCard(pair5, img1);
    flipCard(pair2, img1);
  }else if(firstCard === "purple" && secondCard === "yellow"){
    flipCard(pair5, img1);
    flipCard(pair3, img1);
  }else if(firstCard === "purple" && secondCard === "green"){
    flipCard(pair5, img1);
    flipCard(pair4, img1);
    };
  };
};

//Fuction that checks if the cards match.
const cardsMatch = () => {
  const match = [[1, 2],[3, 4], [5, 6],  [7, 8], [9, 10]]

  for(let i = 0; i < match.length; i++){
  const cardPairs = match[i];

  const firstCard = document.getElementById(cardPairs[0]).style.background;
  const secondCard = document.getElementById(cardPairs[1]).style.background;

  if (firstCard === "red" && secondCard === "red"){
    flipCard(pair1, img2);
  }else if(firstCard === "blue" && secondCard === "blue"){
    flipCard(pair2, img2);
  }else if( firstCard === "green" && secondCard === "green"){
    flipCard(pair4, img2);
  }else if( firstCard === "yellow" && secondCard === "yellow"){
    flipCard(pair3, img2);
  }else if( firstCard === "purple" && secondCard === "purple"){
    flipCard(pair5, img2);
    };
  };
};

//Reset button (Mario is the button)
document.querySelector("button").addEventListener('click', () =>{
      tds.forEach((td) =>{
      td.style.background = img1;
  })
})
