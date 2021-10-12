


// let game = document.querySelector('#gameboard')
// let grid = document.createElement('section')
let clickNum = 0
let cardsFlipped = 0
let firstCard = null
let allowedToClick = true


let cardsArray = [ 
    { name: "mako", img: "pics/mako.gif",}, 
    { name: "mako", img: "pics/mako.gif",}, 
    { name: "korra", img: "pics/c2.gif",}, 
    { name: "korra", img: "pics/c2.gif",}, 
    { name: "asami", img: "pics/c3.gif",},
    { name: "asami", img: "pics/c3.gif",}, 
    { name: "two", img: "pics/c4.gif",},
    { name: "two", img: "pics/c4.gif", },
    { name: "three", img: "pics/c5.gif",},
    { name: "three", img: "pics/c5.gif",},
    { name: "four", img: "pics/c6.gif",},
    { name: "four", img: "pics/c6.gif",},
    
]; 
    
let shuffledArray = cardsArray.sort(() => Math.random()- 0.5)
console.log(shuffledArray)


function handleCardClick(event){
    const i = event.target.id[1]
    clickNum += 1
    if(clickNum === 1){
        event.target.src = cardsArray[i].img
        firstCard = event.target
    } else if (clickNum === 2){
        clickNum = 0 
        event.target.src = cardsArray[i].img
        if(firstCard.src === event.target.src){
            alert('Its a match! ')
            cardsFlipped +=2
            if(cardsFlipped === 12){
                alert('Youve won!')
            }
        } else{
            // alert('No Match!')
            allowedToClick = false
            setTimeout(
                function (){
                allowedToClick = true
                flipCardsBack(firstCard, event.target)
            }, 1000)
        }
    }
}

function flipCardsBack(card1, card2){
    card1.src = "pics/backgroundka.jpg" 
    card2.src = "pics/backgroundka.jpg" 
}
let list = document.querySelectorAll('.cards')
for(let i = 0; i < list.length; i++){
    list[i].addEventListener('click', handleCardClick)
}


document.querySelector("button").addEventListener("click", ()=>{location.reload()})