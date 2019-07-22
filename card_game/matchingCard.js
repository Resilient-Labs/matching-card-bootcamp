
/* on e event listener for the cadr class and a target .listener for the matched card

event listener fro that section but also an event listener fmor each card no on ly for the card class on e event listener fmort eh card clas and then this ley wmord for each card

create a css class and create

class in the css that makes something blue or you add something in the javascript that adds or removes that class

dom manipulation

randomizer shuffles the class names using java scrippt

you shuffles and move the cards by moving !! classes !! */

//have a marker of where the cards are at

//document.querySelector("selected").createAttribute("cherry")

document.querySelectorAll(".cards").forEach(function(element, index){
  //forEach loop adds an event listener to each element in the querySelectorAll array
  //addEventListener needs a parameter passed into the callback function, in this case it is the event object
  element.addEventListener('click', function(event){

    event.target.classList.add("selected")
    //event.target selects the event object (use debugger tool in inspect to see what is in local scope, in this case it's target)
    //could use .this instead
    //classList gives an element a specified class
      ifSelected()
  })
});

function ifSelected(){
  //remember to use a dot when selecting a class within querySelectorAll!!
  let select = document.querySelectorAll(".selected")
  if(select.length === 2){
    //.value gives you a string to compare the classLists
    //since the two classLists are two different objects value (found through debugger) is a shared
    //property between the two objects that allows them to be comparable by type
    console.log(document.querySelectorAll("section").classList)
    if(select[0].classList.value === select[1].classList.value){
      console.log(select)
      select[0].classList.add("match")
      select[1].classList.add("match")
      select[0].classList.remove("selected")
      select[1].classList.remove("selected")

    }
    //will delay flip by 1000 miliseconds
    setTimeout(function(){
      select[0].classList.remove("selected")
      select[1].classList.remove("selected")
    },200)

  }
}


let section = document.querySelectorAll("section")
let newSArray = [];

section.forEach(function(element, index){

sectionArray = section[index].className

newSArray.push(sectionArray)

})

//console.log(newSArray)

randClass = newSArray[Math.floor(Math.random()*newSArray.length)]

//console.log(randClass.toString())
randClass = randClass.toString()

let firstClass = section[1].classList[0]

section[1].classList.add(randClass)

section[1].classList.remove(firstClass)








document.querySelectorAll(".cards").forEach(function(element, index){
  //forEach loop adds an event listener to each element in the querySelectorAll array
  //addEventListener needs a parameter passed into the callback function, in this case it is the event object
  element.addEventListener('click', function(event){
    event.target.classList.add("selected")
    console.log("click!")
    //event.target selects the event object (use debugger tool in inspect to see what is in local scope, in this case it's target)
    //could use .this instead
    //classList gives an element a specified class
      ifSelected()
  })
});

function ifSelected(){
  //remember to use a dot when selecting a class within querySelectorAll!!
  let select = document.querySelectorAll(".selected")
  if(select.length === 2){
    //.value gives you a string to compare the classLists
    //since the two classLists are two different objects value (found through debugger) is a shared
    //property between the two objects that allows them to be comparable by type
    if(select[0].classList.value === select[1].classList.value){
      console.log(select)
      select[0].classList.add("match")
      select[1].classList.add("match")

    }
    //will delay flip by 1000 miliseconds
    setTimeout(function(){
      select[0].classList.remove("selected")
      select[1].classList.remove("selected")
    },1000)

    let matchedCards;
    if (document.querySelectorAll(".match").length === 10){
      console.log("matched")
    }


  }
}

let shuffles = ["cards smiley", "cards smiley", "cards dog", "cards dog", "cards poop", "cards poop", "cards bug", "cards bug", "cards cat", "cards cat"]

function shuffle(array) {
  var copy = [], n = array.length, i;

  // While there remain elements to shuffle…
  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * n--);

    // And move it to the new array.
    copy.push(array.splice(i, 1)[0]);
  }

  return copy;
}

let newGame = shuffle(shuffles)
console.log(newGame)
document.getElementById("shuffleCardsOne").className = newGame[0]
document.getElementById("shuffleCardsTwo").className = newGame[1]
document.getElementById("shuffleCardsThree").className = newGame[2]
document.getElementById("shuffleCardsFour").className = newGame[3]
document.getElementById("shuffleCardsFive").className = newGame[4]
document.getElementById("shuffleCardsSix").className = newGame[5]
document.getElementById("shuffleCardsSeven").className = newGame[6]
document.getElementById("shuffleCardsEight").className = newGame[7]
document.getElementById("shuffleCardsNine").className = newGame[8]
document.getElementById("shuffleCardsTen").className = newGame[9]
