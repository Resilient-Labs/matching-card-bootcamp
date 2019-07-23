// Array of Cards
let pokemonz = ['images/charizard.jpg','images/charizard.jpg','images/dragonite.jpg','images/dragonite.jpg','images/mewtwo.jpg','images/mewtwo.jpg','images/pikachu.jpg','images/pikachu.jpg','images/snorlax.jpg','images/snorlax.jpg']
// knuthShuffle(imgArray)
// console.log(imgArray)
console.log(pokemonz)
//Array of Cards

// URLsking.jpg
//Fisher–Yates Shuffle OR knuth shuffle (same)
// https://www.npmjs.com/package/knuth-shuffle
knuthShuffle(pokemonz)
// IIFE(immediately invoked function expression)
console.log(pokemonz)

// count
let count = 0

// ONCE COUNT IS EVEN
function checkCountFirst(){
  if (count%2 === 0){
  checkMatch()
  }
}


function checkMatch(){
  let selected = document.querySelectorAll(".selected")
  if (selected[0].src === selected[1].src){
    selected.forEach((element) => {
      element.classList.add("matched")
      element.onclick = null
    })
    removeClassSelected(selected)
  } else {
    setTimeout(() =>{
      selected.forEach((element) => {
        element.src = "images/back.jpeg"
      })
      removeClassSelected(selected)
    }, 1000)
  }
}

function removeClassSelected(elements){
  elements.forEach((element) => {
    element.classList.remove("selected")
  })
}


let deck = document.querySelectorAll('.card')
console.log(deck)
deck.forEach((element, i) => {
  element.onclick = function(){
    //"guard - shortcircuits"
    if (element.classList.contains("selected")) return
    //guardEnds
    element.src = pokemonz[i]
    count += 1
    console.log(count)
    element.classList.add("selected")
    checkCountFirst()

  }
})
