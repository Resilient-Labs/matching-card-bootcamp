
// document.getElementById('test').addEventListener('click', ()=>{
//   document.getElementById('test').style.backgroundColor = "yellow"
// })

//Array of Cards
let cards = ['images.png','images.png','images.jpeg','images.jpeg','images-4.png','images-4.png','images-3.png','images-3.png','images-2.png','images-2.png ']
// URLsking.jpg
//Fisher–Yates Shuffle OR  knuth shuffle (same)
// https://www.npmjs.com/package/knuth-shuffle
knuthShuffle(cards)
// IIFE(immediately invoked function expression)
console.log(cards)

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
  if (selected[0].innerText === selected[1].innerText){
    selected.forEach((element) => {
      element.classList.add("matched")
      element.onclick = null
    })
    removeClassSelected(selected)
  } else {
    setTimeout(() =>{
      removeClassSelected(selected)
      selected.forEach((element) => {
        element.innerText = "back"
      })
    }, 1000)
  }
}

function removeClassSelected(elements){
  elements.forEach((element) => {
    element.classList.remove("selected")
  })
}

  // if yes, document.querySelectorAll(".selected")... change to "matched" class
  // if not, document.querySelectorAll(".selected")....remove "selected" class.

let deck = document.querySelectorAll('.card')
console.log(deck)
deck.forEach((element, i) => {
  element.onclick = function(){
    //"guard - shortcircuits"
    if (element.classList.contains("selected")) return
    //guardEnds
    element.innerText = cards[i]
    count += 1
    console.log(count)
    element.classList.add("selected")
    check()
  }
})
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
