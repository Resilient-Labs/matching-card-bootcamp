//Set up gameboard randomized
let gameArray= ["img/ikora.gif", "img/mara.gif", "img/saint14.gif", "img/uldren.gif", "img/variks.gif", "img/zavala.gif", "img/ikora.gif", "img/mara.gif", "img/saint14.gif", "img/uldren.gif", "img/variks.gif", "img/zavala.gif"]

// let imgArray =

function shuffleArray(gameArray) {
    for (let i = gameArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [gameArray[i], gameArray[j]] = [gameArray[j], gameArray[i]];
    }
}

function insertGameArray(){
  for(i=0; i<gameArray.length; i++){
    document.querySelectorAll(".d2Cards")[i].setAttribute("src", gameArray[i])

  }
}
shuffleArray(gameArray)
insertGameArray()


//randomize images into the gamboard



let clickCounter= 0
let matchCounter= 0
let holdValues =[]
let idArray = []

let gridInteraction = true



document.querySelectorAll(".hide").forEach(tag => tag.addEventListener("click", selectCard))


function selectCard(click){
  if(gridInteraction === true){
    let selectedItem = click.target
    selectedItem.classList.remove("hide")

    holdValues.push(selectedItem.getAttribute("src"))
    idArray.push(selectedItem.getAttribute("id"))
    console.log(idArray);

    clickCount()
    // remove event listener from the
    if(clickCounter%2 === 0){
      matchCheck()
    }
  }else{
    return
  }



}

function clickCount(){
  clickCounter++
}

function matchCheck(){
  gridInteraction= false

  if(holdValues[0] === holdValues[1]){
    matchCounter++
    document.querySelector(".matchCount").innerText = `Matches: ${matchCounter}`

    let x= document.getElementById(`${idArray[0]}`)
    let y= document.getElementById(`${idArray[1]}`)

    setTimeout(() =>{ x.classList.add("clear"); y.classList.add("clear"); gridInteraction = true }, 2000)

    holdValues=[]
    idArray=[]
    win()
  }else{
    let x= document.getElementById(`${idArray[0]}`)
    let y= document.getElementById(`${idArray[1]}`)

    setTimeout(() =>{ x.classList.add("hide"); y.classList.add("hide"); gridInteraction = true}, 2000)

    holdValues=[]
    idArray=[]
  }
}


function win(){
  if(matchCounter === 6){
    document.querySelector(".matchCount").innerText = "Win!"

  }
}

document.querySelector("button").addEventListener("click", ()=>{location.reload()})
