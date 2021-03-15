/* Pseudo Code
1. create a common class for all the  boxes
2. create an event listener for all of the boxes, maybe using a for each..?
3. on click add a new class for flipped, and a new class for which card it is

steps
clickable
a flip, turn to back side
card is visible
compare the two cards
stay flipped if the same
 */
/*
next steps
1st card flipped remains visible
compare the two cards that are flipped
cards flip back if not a Match
cards remain visible if they are a match
last: randomizer
*/
const reveal =
['nineOfStaves', //[0] id 1
'nineOfDiscs', // [1] id 2
'threeOfCups', // [2] id 3
'nineOfStaves', // [3] id 4
'theHermit', // [4] id 5
'nineOfDiscs', // [5] id 6
'highPriestess', // [6] id 7
'theFool', // [7] id 8
'highPriestess', // [8] id 9
'threeOfCups', // [9] id 10
'theFool', // [10] id 11
'theHermit'] // [11] id 12

 document.querySelectorAll('.cards').forEach(card => card.addEventListener('click', flipCard))
 var clickCount = 0
 var inTimeout = false

 function flipCard(event){
   if (inTimeout == true) {
    return
   }
   event.target.classList.add(reveal[event.target.id - 1])
   clickCount++
   console.log(clickCount)
   if (clickCount % 2 === 0) {
     evenClick = event.target.classList
     checkForMatch()
  }else{
    oddClick = event.target.classList
    console.log(oddClick)
  }
   function checkForMatch(){
     if (oddClick.value === evenClick.value) {
       oddClick.add('matched')
       evenClick.add('matched')
       document.querySelectorAll('.matched').forEach( match => match.removeEventListener('click', flipCard))
     }else{
       inTimeout = true
       setTimeout(function(){
         oddClick.remove(oddClick[1])
         evenClick.remove(evenClick[1])
         inTimeout = false
       }
       , 1000);
       console.log(oddClick.value + ' ' + evenClick.value)

     }
   }
 }
