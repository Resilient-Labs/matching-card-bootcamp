const moves = document.getElementById("moves-count")
const timeValue = document.getElementById("time")
const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const gameContainer = document.querySelector(".game-container")
const result = document.getElementById("result")
const controls = document.querySelector(".controls-container")
let cards
let interval
let firstCard = false
let secondCard = false

//items array
const items = [{name:"p1",image:"p1.png"},{name:"p2",image:"p2.png"},{name:"p3",image:"p3.png"},{name:"p4",image:"p4.png"},{name:"p5",image:"p5.png"},{name:"p6",image:"p6.png"}]

//initial time
let seconds = 0
let minutes = 0
//initial moves and win count
let movesCount = 0
let winCount = 0
//for timer
const timeGenerator = () => {
    seconds += 1
    //minutes logic
    if(seconds>=60){
        minutes += 1
        seconds = 0
    }
    //format time before displaying
    let secondsValue = seconds < 10 ? `0${seconds}` : seconds
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes
    timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`
}

//for calculating moves
const movesCounter = () => {
    movesCount += 1
    moves.innerHTML = `<span>Moves:</span>${movesCount}`
}

//pick random objects from items array
const generateRandom = (size = 4) => {
    //temporary array
    let tempArray = [...items]
    //initializes cardValues array
    let cardValues = []
    //size should be 12 (4*3 matrix)/2 since pairs of objects would exist
    size = (size * 3)/2
    //random object selection
    for(let i = 0; i < size; i++){
        const randomIndex = Math.floor(Math.random() * tempArray.length)
        cardValues.push(tempArray[randomIndex])
        //once selected remove the object from temp array
        tempArray.splice(randomIndex,1)
    }
    return cardValues
}

const matrixGenerator = (cardValues,size = 4) => {
    gameContainer.innerHTML = ""
    cardValues = [...cardValues, ...cardValues]
    //simple shuffle
    cardValues.sort( () => Math.random() - 0.5)
    for(let i=0; i < size * 3; i++){
        //create cards
        //before => front side(contains question mark)
        //after => back side (contains actual image)
        //data-card-values is a custom attribute witch stores the name of the cards to match later

        //here is where i can change the front of the card
        gameContainer.innerHTML += `
        <div class="card-container" data-card-value="${cardValues[i].name}">
            <div class="card-before">Bos</div>
            <div class="card-after"><img src="${cardValues[i].image}" class="image"/></div>
        </div>`
    }
    //grid
    gameContainer.style.gridTemplateColumns = `repeat(${size},auto)`

    //Cards
    cards = document.querySelectorAll(".card-container")
    cards.forEach((card)=> {
        card.addEventListener("click", () => {
            //If selected card is not matched yet then only run (i.e already matched card when click would be ignored)
            if(!card.classList.contains("matched")){
                //flip the clicked card
                card.classList.add("flipped")
                //if it is the first card (!firstCard since firstCard is initially false)
                if(!firstCard){
                    //so current card will become firstCard
                    firstCard = card
                    //current cards value becomes firstCardValue
                    firstCardValue = card.getAttribute
                    ("data-card-value")
                }
                else{
                    //increment moves since user selected second card
                    movesCounter()
                    //secondCard and value
                    secondCard = card
                    let secondCardValue = card.getAttribute
                    ("data-card-value")
                    if(firstCardValue == secondCardValue){
                        //if both cards match add matched class so these cards would stay flipped over
                        firstCard.classList.add("matched")
                        secondCard.classList.add("matched")
                        //set firstCard to false since next card would be first now
                        firstCard = false
                        //winCount increment as user found a correct match
                        winCount += 1
                        //check if wincount == half of cardValues
                        if(winCount == Math.floor(cardValues.length/2)){
                            result.innerHTML = `<h2>You Won</h2>
                            <h4>Moves: ${movesCount}</h4>`
                            stopGame()
                        }
                    }else {
                        //if the cards dont match, flip the cards back to normal
                        let [tempFirst,tempSecond] = [firstCard,secondCard]
                        firstCard = false
                        secondCard = false
                        let delay = setTimeout(()=>{
                            tempFirst.classList.remove("flipped")
                            tempSecond.classList.remove("flipped")
                        },900)//how much time it takes to flip back over
                    }
                }
            }
        })
    })
}

//start game
startBtn.addEventListener("click", () => {
    movesCount = 0
    time = 0
    //controls and buttons visibility
    controls.classList.add("hide")
    stopBtn.classList.remove("hide")
    startBtn.classList.add("hide")
    //start timer
    interval = setInterval(timeGenerator, 1000)
    //initial moves
    moves.innerHTML = `<span>Moves:${movesCount}</span>`
    initializer()
})

//stop game
stopBtn.addEventListener("click", (stopGame = () => {
    controls.classList.remove("hide")
    stopBtn.classList.add("hide")
    startBtn.classList.remove("hide")
    clearInterval(interval)
}))

//initialize value and func calls
const initializer = () => {
    result.innerText = ""
    winCount = 0
    let cardValues = generateRandom()
    console.log(cardValues)
    matrixGenerator(cardValues)
}


