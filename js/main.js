const cards = document.querySelectorAll('.card');
let firstCard = null; // initial value = intentionally has no stored value 
let secondCard =null;
lock = false;
cards.forEach(card =>{
    card.addEventListener('click',flipCard)
    card.classList.add('card-active')
});
function flipCard(event){
 let card2flip = event.currentTarget;
 card2flip.classList.add('flipping');
console.log(event.currentTarget);
if (lock === true){
    return;
    if( card2flip === firstCard){
        return;
    }
}
if(card2flip.classList.contains('matched'))
{
    return;

}
card2flip.classList.add('flipping');
if ( firstCard === null){
    firstCard = card2flip;
        return // store and stop here since this was the first card
    }
    secondCard = card2flip;
    
        if (firstCard.querySelector('img').src === secondCard.querySelector('img').src){
    [firstCard,secondCard].forEach(card =>{
        card.classList.add('matched');
      });
     firstCard = null;
     secondCard = null;
}else  { 
    lock = true;
    setTimeout(()=>{
[firstCard,secondCard].forEach(card =>{
        card.classList.remove('flipping');
    });
    firstCard = null;
    secondCard = null;
    lock = false;
        }, 1000);
    
   }

}
