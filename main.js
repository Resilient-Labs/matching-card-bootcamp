let myCardList = [
    'images/benzema.png',
    'images/cr7.png',
    'images/deBruyne.png',
    'images/kante.png',
    'images/lewy.png',
    'images/mane.png',
    'images/messi.png',
    'images/neymar.png',
    'images/salah.png',
    'images/son.png',
]

let audio = document.getElementById("song");
audio.volume = 0.5;

let myCards
let gameBoard = []

function shuffle(){
    myCards = myCardList.concat(myCardList); 
    for (let i=0; i < myCards.length; i++ ){
        let j = Math.floor(Math.random() * 20);
    
    let swap = myCards[i] 
    myCards[i]= myCards[j];
    myCards[j]= swap;
    }
}
shuffle()

let rows = 4
let columns = 5

function playGame (){
    let cardId 
    for (let a = 0; a < rows; a++){
        let row = [];
        for (let b = 0; b < columns; b++){
            let cardImg = myCards.pop();
            cardId = a.toString() + '-' + b.toString()
            row.push(cardImg); 
            document.getElementById('gameBoard').innerHTML += `
            <img src="${cardImg}" class="card" id="${cardId}">`
        }
        gameBoard.push(row)
    }

setTimeout(hide, 1000)
}
playGame()

function hide() {
    for (let a = 0; a < rows; a++){
        for (let b = 0; b < columns; b++) {
            let backCard = document.getElementById(a.toString() + '-' + b.toString());
            backCard.src = 'images/back.png'
        }
    }
}

document.querySelectorAll('img').forEach(item => item.addEventListener('click', selectedCards))

let count = 0
let errors = 0 
let img1id
let img2id
let img1src
let img2src
let setTimeoutFinished = true

function selectedCards(e) {
    if (setTimeoutFinished){
    let splitter = e.target.id.split('-')
    if (count === 0){
        e.target.src = gameBoard[+splitter[0]][+splitter[1]]
        img1id = e.target.id
        img1src = e.target.src
        count++
        return
   }

   if (count === 1){
        e.target.src = gameBoard[+splitter[0]][+splitter[1]]
        img2id = e.target.id
        img2src = e.target.src

        if (img1src === img2src) {
            document.getElementById(`${img1id}`).removeEventListener('click', selectedCards)
            document.getElementById(`${img2id}`).removeEventListener('click', selectedCards)
            let audio = new Audio('goal.mp3');
            audio.load();
            audio.play(); 
        }  

        else {
            setTimeoutFinished = false 
            setTimeout(() => {
                document.getElementById(`${img1id}`).src = 'images/back.png'
                document.getElementById(`${img2id}`).src = 'images/back.png'
                errors += 1;
                document.getElementById('errors').innerHTML = errors;
            setTimeoutFinished = true
            }, 1000)
        }
        count = 0 
    }
  }
}




