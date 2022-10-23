let myCardList = [
    'images/benzema.png','images/cr7.png','images/deBruyne.png','images/kante.png','images/lewy.png',
    'images/mane.png','images/messi.png','images/neymar.png','images/salah.png','images/son.png',
]

function getShuffledDeck(){
    return myCardList.concat(myCardList).map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort).map(({ value }) => value)
}



function setUpBoardandDisplayCards(){
    myCardList = getShuffledDeck(myCardList)
    myCardList.forEach((item, index) => { //displays every image along with the index as ID
        document.getElementById('gameBoard').innerHTML += ` 
        <img src="${item}" class="card" id="${index}">`
        setTimeout(()=>{
            myCardList.forEach((_, index) => { 
                let img = document.getElementById(`${index}`)
                img.addEventListener('click', handleClick)
                img.src = "images/back.png"
         }) },1000);
         })
    }

setUpBoardandDisplayCards()

let clickedTwoImages = [] , errors = 0 , setTimeoutFinished = true

function handleClick(event){
    if(setTimeoutFinished && clickedTwoImages[0] !== event.target.id){
    event.target.src = myCardList[event.target.id]
    clickedTwoImages.push(event.target.id)
    if(clickedTwoImages.length ===2){
        if(myCardList[clickedTwoImages[0]] === myCardList[clickedTwoImages[1]]){
            document.getElementById(`${clickedTwoImages[0]}`).removeEventListener('click', handleClick)
            document.getElementById(`${clickedTwoImages[1]}`).removeEventListener('click', handleClick)
            let audio = new Audio('goal.mp3');
            audio.load();
            audio.play();  // Play goal sound
            clickedTwoImages = []
        }else{
            setTimeoutFinished = false 
            setTimeout(() => {
                document.getElementById(`${clickedTwoImages[0]}`).src = 'images/back.png'
                document.getElementById(`${clickedTwoImages[1]}`).src = 'images/back.png'
                errors += 1;
                document.getElementById('errors').innerHTML = errors;
            setTimeoutFinished = true
            clickedTwoImages = []
            }, 1000)
        }
    }
}}

let audio = document.getElementById("song");
audio.volume = 0.5;




