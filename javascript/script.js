const cards = document.querySelectorAll(".cards")
const bottom = document.querySelectorAll(".bot")
const un = document.querySelectorAll(".top")
const shuffle = document.querySelector("#shuffle")
const reset = document.querySelector("#reset")

let click = 0
let first = ""
let second = ""
let fTop = ""
let sTop = ""

for(let i = 0; i < cards.length; i++){
  cards[i].addEventListener("click", function(e){
    e.preventDefault()
    flip(i)
  })
}

shuffle.addEventListener("click", shuffleFunc)

reset.addEventListener("click", resetFunc)

function flip(n){
  un[n].style.display = "none"
  bottom[n].style.display = "flex"

  click++

  //if click === 1
  if(click == 1){
    first = bottom[n]
    fTop = un[n]
  }else if (click == 2) {
    second = bottom[n]
    sTop = un[n]
    setTimeout(check, 700, first, second, fTop, sTop)
    click = 0
  }
}

function check(first,second, fTop, sTop){
  //if 1st and 2nd

  if(first.src == second.src){
    first.style.display = "flex"
    second.style.display = "flex"
  }else{
    first.style.display = "none"
    second.style.display = "none"
    fTop.style.display = "flex"
    sTop.style.display = "flex"
  }
}

function shuffleFunc() {
  cards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * cards.length);
    card.style.order = ramdomPos;
    resetFunc()
  });
}

function resetFunc(){
  for(let i = 0; i < cards.length; i++){
    un[i].style.display = "flex"
    bottom[i].style.display = "none"
    count=0
  }
}
