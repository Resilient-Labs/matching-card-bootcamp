//Morning Challenge: Make a 10 card memory game - users must be able to select two cards and check if they are a match. If they are a match, they stay flipped. If not, they flip back over. Game is done when all cards are matched and flipped over.
/*
-create an array (0-9)
-create a grid 
-use Math.random to randomize the array 
-conditional statements that has an incremental timer that waits for second click 
-after timer expires run through win conditional statment to check if there's a match
-if cards don't match it should reapply a class of hide or flip it back
-if it does match it should apply a class of match and become unclickable
-else statement that runs when all cards match that alerts winner
-a function that resets the game when user wins
*/

const pokemonCard = document.querySelectorAll('.card')
pokemonCard.forEach(pokemonCard => pokemonCard.addEventListener('click', turnover))


// worked with alum chris owens to put this code together. 
// what do we want on the click?

// if the card is shown do nothing
// if the card is not shown then flip
// if first card then keep track of it
// if its the 2nd card then run compare function and if true add 1 point and if false then flip both cards back over and clear the first card in either case.
// 


let firstcard = null
let secondcard = null
let list = ['images/squirtle.png', 'images/pikachu.png','images/jigglypuff.png', 'images/charmander.png', 'images/bulbasaur.png','images/squirtle.png', 'images/pikachu.png','images/jigglypuff.png', 'images/charmander.png', 'images/bulbasaur.png']

console.log(list)
function shuffle(array){
    for (let i= array.length -1; i>0; i--){
        const j = Math.floor(Math.random()*(i+1))
        const temp = array[i]
        array[i]=array[j]
        array[j]=temp
    }
    return array
}
shuffle(list)
console.log(list)

document.getElementById('one').src=list[0]
document.getElementById('two').src=list[1]
document.getElementById('three').src=list[2]
document.getElementById('four').src=list[3]
document.getElementById('five').src=list[4]
document.getElementById('six').src=list[5]
document.getElementById('seven').src=list[6]
document.getElementById('eight').src=list[7]
document.getElementById('nine').src=list[8]
document.getElementById('ten').src=list[9]

function isFaceUp(card){
    console.log(window.getComputedStyle(card.children[1], null).getPropertyValue('visibility'))
    return (window.getComputedStyle(card.children[1], null).getPropertyValue('visibility') != 'visible')
}
function hide(card){
    console.log('hide')
    card.children[1].style.visibility='visible'
}
function show(card){
    console.log('show')
    card.children[1].style.visibility='hidden'
}

function compare(cardone, cardtwo){
    // cardone.children[0].getAttribute('src')
    return(cardone.children[0].src==cardtwo.children[0].src)
}

function turnover(e){
    console.log(e)
    let card = e.currentTarget
    if(isFaceUp(card)){
        console.log('do nothing')
    }
    else{
        show(card)
        if(firstcard == null){
            firstcard = card
        }
        else{
            if(compare(firstcard,card)){
                // alert('Match!')
                firstcard=null
            }
            else{ 
                setTimeout(()=>{
                    hide(card)
                    hide(firstcard)
                    firstcard=null
                    alert('Not A Match')
                },300)
                
            }
        }
    }
}