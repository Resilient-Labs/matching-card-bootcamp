let allTheCards = document.querySelectorAll('.cards')
allTheCards.forEach(card => card.addEventListener('click', flipTheCard))

// trying to figure out if the cards have a match. If the first card is euqal to the second Card.
    let flippedCard = false // all the cacards are started off false
    let oneCard, twoCard; // two variables that we are going to need later
    let stopTheBoard = false // stops the cards from being able to be clicked until the other cards are flip back over.
    

    // function shuffleCards(){
    //     allTheCards.forEach(card => {
    //         let randomOrder = Math.floor(Math.random()*12);
    //         card.style.order = randomOrder
    //     })
    // }
function shuffleCards(){ //make the cards shuffle everytime you reset the game
    for (let i = 0; i < allTheCards.length; i++) {
        let randomOrder = Math.floor(Math.random()*14);
        allTheCards[i].style.order = randomOrder; //The order property specifies the order of a flexible item relative to the rest of the flexible items inside the same container.
      }
    }

     
shuffleCards()
    

function flipTheCard (){
    if(stopTheBoard) return; // first conditonal
    if(this === oneCard) return; // you won't be able to double click the same card.
this.classList.toggle('turnOverCard')  // when this is console.logged . it is the card picked 
// conditional that figures out if the card has been clicked and can't be clicked until a differnet card is clicked.
//   ! converts a statement from true to false
if(!flippedCard){ // if the user flips a card
    
    flippedCard = true; // the card has been flipped
       oneCard = this // if the card is fipped assign it to the first card
       
    } else {
        flippedCard = false; // the person clicks on a unflipped card
        twoCard = this // assign the card to the second card
        console.log(oneCard.dataset.name)
        console.log(twoCard.dataset.name)
      
        if(oneCard.dataset.name === twoCard.dataset.name) { // this is to find out if the two cards match.
        oneCard.removeEventListener('click', flipTheCard)
        twoCard.removeEventListener('click', flipTheCard)//if the cards match they will stay flipped over
        } else {
            stopTheBoard = true; // cards only can get go back over if this is hear.
    
            setTimeout(() => { // we put a set timeout so you can see both cards pop up before they flip back over.
             oneCard.classList.remove('turnOverCard'); // make boths cards flip back over
            twoCard.classList.remove('turnOverCard') ;

            stopTheBoard = false; //this flipoed the cards back over then you are able to click another card to match.
        } , 700)


    }
    
    
}

}


// (function shuffleCards(){
//     allTheCards.forEach(card => {
//         let randomOrder = Math.floor(Math.random()*12);
//         card.style.order = randomOrder
//     })
    
// })();   







