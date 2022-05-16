Array.from(document.querySelectorAll('div')).forEach(div => div.addEventListener('click',flipCard))

let images = ['plains', 'plains', 'island', 'island', 'mountain', 'mountain', 'swamp', 'swamp', 'forest', 'forest']
const answers = {
    cardOne : '',
    cardTwo : '',
    cardThree : '',
    cardFour : '',
    cardFive : '',
    cardSix : '',
    cardSeven : '',
    cardEight : '',
    cardNine : '',
    cardTen : '',
}
Object.keys(answers).forEach(card => {
    console.log(images)
    console.log(answers)
    let imageIdx = Math.floor(Math.random()*images.length)
    answers[card] = images[imageIdx]
    images = images.filter((image,i) => i!==imageIdx)

})
console.log(images)
// 0.5 * Math.random()/

let flipped = []
let dontClick = false
let dontDouble = {
    firstCard:"",
    secondCard:""
}

function flipCard(event){
    if (dontClick) return
    
    // resets dontDouble to how it was ( third )
    if(!Object.values(dontDouble).includes("")){
        dontDouble = {
        firstCard:"",
        secondCard:""
        }
    } 

    //checks if you clicked on the same thing twice & if you did  nothing else will run because we return (second)
    if(dontDouble["firstCard"] === event.target.id) return

    // storing  the Ids of two cards ( first ) 
    if(dontDouble["firstCard"] === ""){
       dontDouble["firstCard"] = event.target.id 
    }else{
        dontDouble["secondCard"] = event.target.id 
    }

    event.target.classList.remove('faceDown')
    event.target.classList.remove('faceDown')
    event.target.classList.add(answers[event.target.id])
   
    dontClick = true 
    setTimeout(() => {dontClick = false},100)
    setTimeout(() => {checkMatch(answers[event.target.id])},400)
}
function checkMatch(checkClass){
    flipped.push(checkClass)
    console.log(checkClass)
    if (flipped.length === 2){
        if(flipped[0] === flipped[1]){
            alert('match!')
            Array.from(document.getElementsByClassName(flipped[1])).forEach(div =>
                div.removeEventListener('click', flipCard)
            )
        } else {
            flipped.forEach(flippedUp => {
                document.getElementsByClassName(flippedUp)[0].classList = ['faceDown']
            })
        }
        flipped = []
    }
}