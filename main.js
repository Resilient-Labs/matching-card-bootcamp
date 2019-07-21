//Array of Cards
let cards = ["images/monkfish.jpg","images/monkfish.jpg","images/swordfish.jpg","images/swordfish.jpg","images/starfish.jpeg","images/starfish.jpeg","images/bluefintuna.jpg","images/bluefintuna.jpg","images/lobster.jpg","images/lobster.jpg"]

//Shuffle cards
knuthShuffle(cards)
console.log(cards)
//Fisher–Yates Shuffle OR knuth shuffle (same)
// https://www.npmjs.com/package/knuth-shuffle

// count
let count = 0

// once count is even, proceed... to checkMatch()
function checkEvenB4CheckMatch(){
  if (count%2 === 0){
  checkMatch()
  }
}

//if match, then 1) classList add "matched", 2) no longer onclicka-able, and 3) removeClassSelected()
//if not match, then setTimeout in 1 sec do... 1) flip card back and 2) removeClassSelected()
function checkMatch(){
  let selected = document.querySelectorAll(".selected")
  //querySelectorAll returns array, need LOOP (ex.forEach) to do stuff
  if (selected[0].src === selected[1].src){
    selected.forEach((element) => {
      element.classList.add("matched")
      //prevent click b/c count gets wrong
      element.onclick = null
    })
    removeClassSelected(selected)
  } else {
    setTimeout(() =>{
      //flip card back
      selected.forEach((element) => {
        element.src = ""
      })
      removeClassSelected(selected)
    }, 500)
    //setTimeout(function(){}, time)
  }
}

function removeClassSelected(elements){
  elements.forEach((element) => {
    element.classList.remove("selected")
  })
}

// @onclick of each card:
// 1) change innerText to array's index, 2) increase count, 3) add classList "selected", 4) run checkEvenB4CheckMatch()
let deck = document.querySelectorAll('.card')
deck.forEach((element, i) => {
  element.onclick = function(){
    //"guard" - to shortcircuit
    if (element.classList.contains("selected")) return
    //guardEnds
    element.src = cards[i]
    count += 1
    console.log(count)
    element.classList.add("selected")
    checkEvenB4CheckMatch()
  }
})
