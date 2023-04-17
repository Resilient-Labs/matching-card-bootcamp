// assign varible and add event listen on all cards
// toggle cards
// create reset button
// randomize cards

let cards = document.querySelectorAll('.cards');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockGame = false;

// document.querySelector('button').addEventListener("click", resetGame)

// shuffle cards
function shuffle(){
    for(let i = 0; i < cards.length; i++){
        let randomize = Math.floor(Math.random() * 12);
        cards[i].style.order = randomize;
    }
}
shuffle()

for(let i = 0; i < cards.length; i++){
    cards[i].addEventListener('click', flipCard)
}

function flipCard(){

    if(lockGame){
        return};

    if(this === firstCard){
        return
    };


    // console.log(this)

    // this.classList allows you to add features to a specific varible - i.e. add toggle function below
    this.classList.toggle('toggleCard')

    // ! converts a statement from true to false

    if(!hasFlippedCard){

        // first click
        hasFlippedCard = true;
        firstCard = this;
        
        // console.log(hasFlippedCard, firstCard)

    } else{
        hasFlippedCard = false;
        secondCard = this;

        // console.log(firstCard, secondCard)
        // console.log(firstCard.dataset.framework);
        // console.log(secondCard.dataset.framework);

        checkForMatch();
    }
}

function checkForMatch(){

    // check if match - remove event listener if matched
    if (firstCard.dataset.framework === secondCard.dataset.framework){
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)
    } else{
        lockGame = true;

        setTimeout(() => {
           firstCard.classList.remove('toggleCard')
           secondCard.classList.remove('toggleCard')

           lockGame = false;
           }, 1500);
       }
}


function resetGame(){

}