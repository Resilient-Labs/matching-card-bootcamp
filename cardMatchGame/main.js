// let newGame = document.getElementById('restart')
document.querySelectorAll("section").forEach(card =>{
card.addEventListener('click', flipMe)
});
let pair = []
let count = 0
function flipMe(){
  pair.push(this.className)
  // console.log(pair)
  // console.log(this)
  // console.log(this.id,this.className)
  if(this.className === "card1"){
    // console.log("hello")
    this.style.backgroundColor = "beige"
  }
  else if(this.className === "card2"){
    // console.log("hello")
    this.style.backgroundColor = "red"
  }
  else if(this.className === "card3"){
    // console.log("hello")
    this.style.backgroundColor = "blue"
  }
  else if(this.className === "card4"){
    // console.log("hello")
    this.style.backgroundColor = "green"
  }
  else if(this.className === "card5"){
    // console.log("hello")
    this.style.backgroundColor = "purple"
  }
  this.classList.add("flipped")
  let flipped = document.querySelectorAll(".flipped")
  if(pair.length === 2 ){
    checkPair(pair, flipped)
    pair = []
  }
}
function checkPair(pair, flipped){
  // console.log(pair)
  if(pair[0] === pair[1]){
    count ++
    // console.log("win")
    flipped.forEach(card =>{
      card.classList.add("completed")
      card.classList.remove("flipped");
      if(count === 5){
        youWin()
      }
  })
  }
  else if(pair[0] !== pair[1]){
    flipped.forEach(card =>{
      card.classList.remove("flipped");
    })
    setTimeout(resetCards, 500, pair)
  }
}
function resetCards(pair){
  console.log(pair)
  pair.forEach(card =>{
    console.log(card)
    if(!card.split(" ").includes("completed")){
      document.querySelectorAll(`.${pair[0]}`).forEach(card =>{
      card.style.backgroundColor = "black"
     })
     document.querySelectorAll(`.${pair[1]}`).forEach(card =>{
     card.style.backgroundColor = "black"
      })
    }
  })
}
function youWin(){
  console.log("you win")
  document.getElementById("result").innerHTML= "YOU WIN"
  newArray = randomclasses(ClassArray)
}
//For random class found online
let ClassArray = ["card1", "card1", "card2", "card2", "card3", "card3", "card4", "card4", "card5", "card5"]
let randomclasses = function(arr) {
  let newpos,
    temp;
  for (let i = arr.length - 1; i > 0; i--) {
    newPos = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[newPos];
    arr[newPos] = temp;
  }
  return arr;
}
let newArray = randomclasses(ClassArray)
document.getElementsByClassName("card1")[0].className = newArray[0]
document.getElementsByClassName("card1")[0].className = newArray[1]
document.getElementsByClassName("card2")[0].className = newArray[2]
document.getElementsByClassName("card2")[0].className = newArray[3]
document.getElementsByClassName("card3")[0].className = newArray[4]
document.getElementsByClassName("card3")[0].className = newArray[5]
document.getElementsByClassName("card4")[0].className = newArray[6]
document.getElementsByClassName("card4")[0].className = newArray[7]
document.getElementsByClassName("card5")[0].className = newArray[8]
document.getElementsByClassName("card5")[0].className = newArray[9]
