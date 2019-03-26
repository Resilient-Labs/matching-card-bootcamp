//add click event listener to each class of card
//create function on click
//add class from card to selected when clicked
//check 2 clicked cards for match, stop after 2 selected
//for match, create conditional for when matched by adding class
//when unmatched remove class
//create conditional for when all cards are matched
//print message for winning

  // this.classList.add('selected')
  // const selected = document.querySelectorAll('card')
  // const totalSelected =

// memory card game

// check if the cards match, if they match then give them the new class matched
// if they dont match then remove the selected class (they'll go back to normal)
// if all cards are matched then end game "you win"
// if they length of the array of matched = 4 alert "you won"

// add an event listener to click my cards
document.querySelectorAll(".card").forEach(function(el) {
  el.addEventListener("click", clickChange)
  //console.log(el)
})
// create function to make cards change by assigning a new class
function clickChange() {
  // using classList.add to assign new class
  this.classList.add("selected");
  const createArray = document.querySelectorAll(".selected"); //an array //selected in leons audio
  const myArray = createArray.length;
  console.log(myArray);
  // click two cards we want it to stop the user from selecting more cards
  if (myArray === 2) {
    if (createArray[0].className === createArray[1].className) {

      createArray.forEach(function(sel) {
        sel.classList.add("matched")
        sel.classList.remove("selected") // so you wont be able to continue to click
        // alert(`hellerrrr`)
      })
    } else {
      createArray.forEach(function(sel) {
        sel.classList.remove("selected")
      })
    }
    if (document.querySelectorAll(".matched").length === 10)
      alert(`Congratulations, you win!!`)
  }

}
