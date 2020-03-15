let picArr = ["beyonce.png","joker.jpeg","keys.jpg","kobe.jpeg","women.png","beyonce.png","joker.jpeg","keys.jpg","kobe.jpeg","women.png"]

knuthShuffle(picArr, 10)

console.log( check.toString(), "shuffle")
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
  if (selected[0].src === selected[1].src){
    selected.forEach((element) => {
      element.classList.add("matched")
      element.onclick = null
    })
    removeClassSelected(selected)
  } else {
    setTimeout(() =>{
      removeClassSelected(selected)
      selected.forEach((element) => {
        element.src = "card.jpeg"
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
    console.log(!element.classList.contains("selected"), "3d")
    if (element.classList.contains("selected")) return
    //guardEnds
    element.src = picArr[i]
    count += 1
    console.log(count)
    element.classList.add("selected")
    check()
  }
})
