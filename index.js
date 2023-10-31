//refer to previous project & use Tic tac sort logic, create an array for all cells & loop through 
//game is one player 
//create a array of all images that hold a cell

//maybe loop through the array/of cells & find that 2 are matching 

//user has to match to images/cells to keep unless they flip
// let cell = document.querySelectorAll(".cells");
// let restart = document.getElementById("restart");
// restart.addEventListener("click", clearButton);




// Video that guided me through some of the logic with matching cards such as rotating/transforming cards & allowing a rule to not break logic from selecting cards quickly
// https://www.youtube.com/watch?v=sId4aKhogac&list=PLLX1I3KXZ-YH-woTgiCfONMya39-Ty8qw&index=2


//selecting the cards
let cards = document.querySelectorAll('.memory-card');

//function to detect flipped cards
let hasFlippedCard = false;

//end of flipping cards function to work with the action of locking the board to stop the next turn, to not break the logic of the game
let turnEnd = false;          

//selecting the two cards function   data-framework="aurelia" matching cards have this data framework to detect a match & test function
let card1, card2;

function flipCard(){                
    if(turnEnd) return;           //Both are returning the function if the case is that the card has been flipped & the turn has been completed' aka a card selected, in this case it's false
    if(this === card1) return;  //"this" refers to the container it is in the func, if "this" card is selecting the first card return the function of flipCard
    
                                                    //"this"
       
        this.classList.add('flip');

        if(!hasFlippedCard) {                        //if the user HAS flipped card, cause it was set to a value of false before the *!*

            hasFlippedCard = true;
            card1 = this;                           //first card is = the first card flipped refering to this function
        return                                      //if not return "this" refering to the method its in is the second card
        }    
        card2 = this;
        
        checkForMatch();                            // at the end of the function flipCard running it calls the card match function to check if the two cards selected match
    }

function checkForMatch(){
    let isMatch = card1.dataset.framework === card2.dataset.framework           // let the data match for cards not just images, in this case "car" , or 

        isMatch ? disableCards() : unFlipCards();          //ternary statement asking if the dataset.framework matches yes? then disable those cards, no then unflip them back if they are not 
}

function disableCards(){                         //Disable card method, removing the smurf's so the ability to click is not possible & the run function of flip card is ran to flip it back over
    card1.removeEventListener('click', flipCard);
    card2.removeEventListener('click', flipCard);

    resetBoard();                               // calling to Reset the board after card selected arent a match to continue the game
}

function unFlipCards(){                         //
    turnEnd = true;

    setTimeout(() => {                          //set a time out on cards to stop logic from breaking from selecting to fast new cards, letting the cards currently selected take a 1.5s stop
        card1.classList.remove('flip');
        card2.classList.remove('flip');

        resetBoard();                           //calling resetBoard function after the end of the turn & pausing for a second to unflip the cards back that were not a match 
    }, 1500);
}

function resetBoard(){
    [hasFlippedCard, turnEnd] = [false, false];    //array's & their value's this was interesting to see i did not know you could make two array's & assign them  
    [card1, card2] = [null, null];                          
}

(function shuffle() {
    cards.forEach(card => {                                     //shuffling all cards to a random location, since images were predetermined by html location, this creates a random number order
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();


cards.forEach(card => card .addEventListener("click", flipCard))






























//AT2


// const emoji = ["a", "b", "c", "d", "e", "f", "a1", "b2", "c3", "d4", "e5", "f6", "aa", "bb", "cc", "dd"]

// let shuffle = emoji.sort(() => (Math.random() > .5) ? 2: -1);
// for( var i =0; i<emoji.length; i++){
//     let box = document.createElement('div')    //doesn't apply to me since i have cells
//     box.className = 'item';
//     box.innerHTML = shuffle[i]

//     box.onclick = function(){
//         this.classList.add('boxOpen')
//         setTimeout(function(){
//             if(document.querySelectorAll(".boxOpen").length > 1){
//                 if(document.querySelector(".boxOpen")[0].innerHTML ==
//                 document.querySelector(".boxOpen")[1].innerHTML)
//                 document.querySelectorAll(".boxOpen")[0].classList.add('boxMatch')
//                 document.querySelectorAll(".boxOpen")[1].classList.add('boxMatch')
//                 document.querySelectorAll(".boxOpen")[1].classList.remove('boxMatch')
//                 document.querySelectorAll(".boxOpen")[1].classList.remove('boxMatch')

//                 if(document.querySelectorAll(".boxMatch").length == emoji.length){
//                     alert('win')
//                 }else{
//                     document.querySelectorAll(".boxOpen")[1].classList.remove('boxMatch')
//                     document.querySelectorAll(".boxOpen")[0].classList.remove('boxMatch')
//                 }
//             }
//         },500
//     }

//     document.querySelector('.game').appendChild(box);
// }


//AT1

// let img = ["a", "v", "v", "a", "d", "d", "t"];
// let 

// let cell = document.querySelectorAll(".cells");
// let restart = document.getElementById("restart");
// restart.addEventListener("click", clearButton);


// cell = Array.from(cell);

// function clearButton(){
//     cell.forEach(element => {
//         element.innerText = ""
//     })
//   }

// cell.forEach(element => {
//     element.addEventListener("click", () => {
//         if (element.innerText !== "") {
//             return;
//         }
        
//         const boardGame = new Board();
//         element.innerText = currentPlayer;
        
//         boardGame.checkDraw()
//         boardGame.testWinner()

//         // document.createElement()

//         currentPlayer = currentPlayer === playerOne ? playerTwo: playerOne
//       })})

//         class Board {
//                 checkDraw() {
//                     let finished = cell.every((element, index) => cell[index].innerText == "x" || cell[index].innerText == "o")
                  
//                     if(finished){
//                       document.querySelector("#statusText").innerText = `It is a draw!` // Insert text to show who won
//                       console.log('testerr')
//                     }
//                   }   
 

//          testWinner() {   //this applies to the first combo of win conditions
//             console.log('.');
//             //first sol
//             if (cell[0].innerText == currentPlayer && cell[1].innerText == currentPlayer && cell[2].innerText == currentPlayer) {
//                 document.querySelector("#statusText").innerText = `${currentPlayer} Wins YAAY!`
//             }

//              else if (cell[3].innerText == currentPlayer && cell[4].innerText == currentPlayer && cell[5].innerText == currentPlayer) {
//                 document.querySelector("#statusText").innerText = `${currentPlayer} Wins YAAY!`
//              }

//              else if (cell[6].innerText == currentPlayer && cell[7].innerText == currentPlayer && cell[8].innerText == currentPlayer) {
//                 document.querySelector("#statusText").innerText = `${currentPlayer} Wins YAAY!`
//              }
//              else if (cell[0].innerText == currentPlayer && cell[3].innerText == currentPlayer && cell[6].innerText == currentPlayer) {
//                 document.querySelector("#statusText").innerText = `${currentPlayer} Wins YAAY!`      
//              }
//              else if (cell[1].innerText == currentPlayer && cell[4].innerText == currentPlayer && cell[7].innerText == currentPlayer) {
//                 document.querySelector("#statusText").innerText = `${currentPlayer} Wins YAAY!`        
//              }
//              else if (cell[2].innerText == currentPlayer && cell[5].innerText == currentPlayer && cell[8].innerText == currentPlayer) {
//                 document.querySelector("#statusText").innerText = `${currentPlayer} Wins YAAY!`      
//              }
//              else if (cell[0].innerText == currentPlayer && cell[4].innerText == currentPlayer && cell[8].innerText == currentPlayer) {
//                 document.querySelector("#statusText").innerText = `${currentPlayer} Wins YAAY!`   
//              }
//              else if (cell[2].innerText == currentPlayer && cell[4].innerText == currentPlayer && cell[6].innerText == currentPlayer) {
//                 document.querySelector("#statusText").innerText = `${currentPlayer} Wins YAAY!`
//                 } 
//             }
//         }

        
    
//     const boardGame = new Board();