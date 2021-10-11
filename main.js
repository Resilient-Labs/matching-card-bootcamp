/*Morning Challenge: Make a 10 card memory game - users must be able to
select two cards and check if they are a match. If they are a match, 
they stay flipped. If not, they flip back over. 
Game is done when all cards are matched and flipped over.

//Example Demo: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_flip_card

Group: Shannon M, David N, Roxana L, Miriam K, Samekh R, Alexa M
*/
//functions: flip card
    //on the click, the card will display the image
    // then an if/else, if the cards that are flipped match, the poitns go up, but if they are not a match, they flip back over
    
    //eventlistener for when card is flipped
    document.getElementById("cardGrid").addEventListener('click', flipCard)
    document.querySelector('button').addEventListener('click', restartGame)
    // 

    //  let A
    //  let B
    let cards = ['exodia/exoHead.jpg','exodia/exoLeftArm.jpg','exodia/exoLeftLeg.jpg','exodia/exoRightArm.jpg','exodia/exoRightLeg.jpg', 
        'exodia/exoHead.jpg','exodia/exoLeftArm.jpg','exodia/exoLeftLeg.jpg','exodia/exoRightArm.jpg','exodia/exoRightLeg.jpg']
    cards.sort(() => (Math.random() - 0.5 ));


    let arr =  document.querySelectorAll('img')
    let cardsChosen = []
    
    arr.forEach((e,i) => e.src =  cards[i] )//'i' begins as card = 0 because it is the first iteration in the array

    let match = []
    let firstCard = undefined //<- 'firstCard' represents the first card of a specific match

    function flipCard(e){
        let elementClassList = e.target.firstElementChild.classList
        console.log(elementClassList);
        // Test if the card is already face up.  if it's face up, do nothing, otherwise...
        if(elementClassList.contains('show')) {
            //do nothing: this is before the checkForMatch even runs
        }else{
            // Mark this card as being face up
            e.target.firstElementChild.classList.remove('hide')
            if (firstCard == undefined){ // if I don't already have a first card, this must be the first card
                firstCard = e.target.firstElementChild //img
            console.log(firstCard);
                // Don't need to test for a match, since this is the first card....
            } else { // This is the second card
                //the second card in this match
                if(firstCard.src === e.target.firstElementChild.src){// <- tests if the firstCard and the second card, represented by 'e.target...etc' match
                alert('match')
                firstCard = undefined
                } else{ //<- this 'else' will hide both cards if they are not matching
                   // alert('no match')
                    firstCard.classList.add('hide')
                    firstCard = undefined
                    e.target.firstElementChild.classList.add('hide')
                }
            }
        }
    }

    function restartGame(){
        location.reload()
    }



    //function resetGame()
            
/*
            if(match.length == 2 && match[0] == match[1]){
                alert('match')
                firstCard = null
                match = [] //<- resets after a match is found
            }else{ (match.length == 2 && match[0] !== match[1])
                // Flip them both face down again
                firstCard.classList.remove('show')
                firstCard = null
                elementClassList.remove('show')
                match = []
            
                
                //syntax to remove the 'show' to turn the cards facedown again: tokenList.remove(token1[, token2[, ...tokenN]]);
            }

        }*/

        //syntax: tokenList.contains(token);
//how do we get what's shown in the sections to disappear
    //if it's a match, you should not be able to flip them
    //if they aren't a match, they must be 
    // function flipCard(e){
    


    // function checkForMatch(){


    //     if (cardsChosen.length === 2 ) {
    //         cardsChosen.push[] //<- if two cards match, they are taken out of the current round

    //     }
    // }
    // //toggle a class list? give a section a certain class that when targeted toggles. 



//if/else conditionals for if two cards match
// if (card[i] === card[i]){
//     winner++
// }else{
//     flip card back over
// }


// }


//first function is a function that randomizes the images and places them into each array element
    //array-like, we would implement an arraymethod (map/for each)
    //within that function call the flip card function 
        //three arrays (one holding images the other two for the rows in the dom)
        //create a function that iterates through the array, giving it an image
            //if the section already has something there, we just return it or do nothing
            //

//flip card function, upon the event, it flips over the card, which has already been randomized, 
    //secondary function inside of that, if/else
        //if they match, you gain a point and continue, else (they don't match) cards get flipped back over. 
    //call the check winner function

    //how to only have two repeats per card value/image for a match?

//check winner function- checks to see if they have all matches - if score is >= 5?
    //if matches === 5 console.log('youwin!!' || "OBLITERATE")
    //else, continues with the game. 
//end game condition for when all cards match
//maybe do a for each on every section, and if every section is toggled to show and matching, then we display a winner message. 
//Alert?



// let urls = [1,2,3,4,5] //<- 5 elements (image urls) in an array for the function

// let sect = ['e1','e2','e3','e4','e5','e6','e7','e8','e9','e10'] //<-- numbered elements(1) assigned to each 'section'

// sect.map(e => e.url(urls[Math.floor(Math.random()* 5)])) //<- the map function will return a new array. Math.random will randomize the cards



// arr.sort(() => (Math.random() - 0.5 ));