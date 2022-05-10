/*Morning Challenge: Make a 10 card memory game - users must be able to
select two cards and check if they are a match. If they are a match, 
they stay flipped. If not, they flip back over. 
Game is done when all cards are matched and flipped over.*/

//Example Demo: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_flip_card

//functions: flip card
    
    //eventlistener for when card is flipped
    document.getElementById("cardGrid").addEventListener('click', flipCard)
    document.querySelector('button').addEventListener('click', restartGame)

    let cards = ['images/greenLine.jpeg','images/redLine.jpeg','images/blueLine.jpeg','images/silverLine.jpeg','images/orangeLine.jpeg', 
    'images/greenLine.jpeg','images/redLine.jpeg','images/blueLine.jpeg','images/silverLine.jpeg','images/orangeLine.jpeg']
    cards.sort(() => (Math.random() - 0.5 ));
    let arr =  document.querySelectorAll('img')
    let firstCard = null //'firstCard' represents the first card of a specific match
    arr.forEach((e,i) => e.src =  cards[i] )//'i' begins as card = 0 because it is the first iteration in the array

    function flipCard(e){
      
            // Mark this card as being face up
        e.target.firstElementChild.classList.remove('hide')
            if (firstCard == null){ // if I don't already have a first card, this must be the first card
                firstCard = e.target.firstElementChild //img
            console.log(firstCard);
                // Don't need to test for a match, since this is the first card....
            } else { // This is the second card
                //the second card in this match
                if(firstCard.src === e.target.firstElementChild.src){// <- tests if the firstCard and the second card, represented by 'e.target...etc' match
                    // document.querySelector('h3').textContent = 'match'
                alert('match')
                firstCard = null
                } else{ //<- this 'else' will hide both cards if they are not matching
                   // alert('no match')
                    firstCard.classList.add('hide')
                    e.target.firstElementChild.classList.add('hide')
                    firstCard = null
                }
            }
        
    }

    function restartGame(){
        location.reload()
    }