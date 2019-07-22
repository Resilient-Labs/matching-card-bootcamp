// Array of Cards
let pokemonz = ['charizard.jpg','charizard.jpg','dragonite.jpg','dragonite.jpg','mewtwo.jpg','mewtwo.jpg','pikachu.jpg','pikachu.jpg','snorlax.jpg','snorlax.jpg']
// knuthShuffle(imgArray)
// console.log(imgArray)

//Array of Cards
let cards = ["charizard","charizard","dragonite","dragonite","mewtwo","mewtwo","pikachu","pikachu","snorlax","snorlax"]

// URLsking.jpg
//Fisher–Yates Shuffle OR knuth shuffle (same)
// https://www.npmjs.com/package/knuth-shuffle
knuthShuffle(pokemonz)
// IIFE(immediately invoked function expression)
console.log(pokemonz)

let deck = document.querySelectorAll('.card')
console.log(deck)
deck.forEach((element, i) => {
  element.onclick = function(){
  //"guard - shortcircuits"
  if (element.classList.contains("selected")) return
  //guardEnds
  element.innerHTML = pokemonz[i]
  count += 1
  console.log(count)
  element.classList.add("selected")
  check()

}
})

// count
let count = 0

// ONCE COUNT IS EVEN
function check(){
  if (count%2 === 0){
  checkMatch()
  }
}

function checkMatch(){
  let selected = document.querySelectorAll(".selected")
  if (selected[0].textContent === selected[1].textContent){
    selected.forEach((element) => {
      element.classList.add("matched")
      element.onclick = null
    })
    removeClassSelected(selected)
  } else {
    setTimeout(() =>{
      removeClassSelected(selected)
      selected.forEach((element) => {
        element.innerHTML = innerHTML(back.jpeg)
        console.log(innerHTML(back.jpeg))
      })
    }, 1000)
  }
}

function removeClassSelected(elements){
  elements.forEach((element) => {
    element.classList.remove("selected")
  })
}

// deck.onclick = "hello"

// function(){
//
//
//   for (let i = 0; i < deck.length; ++i){
//     deck[i].classList.add("selected")
//   }
//
// }


// var list;
// list = document.querySelectorAll("li.even, li.odd");
// for (var i = 0; i < list.length; ++i) {
//     list[i].classList.add('cf');
// }
