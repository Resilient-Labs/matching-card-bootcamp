//Morning Challenge: Make a 10 card memory game - users must be able to select two cards and check if they are a match. If they are a match, they stay flipped. If not, they flip back over. Game is done when all cards are matched and flipped over.
/*
-create an array (0-9)
-create a grid 
-use Math.random to randomize the array 
-conditional statements that has an incremental timer that waits for second click 
-after timer expires run through win conditional statment to check if there's a match
-if cards don't match it should reapply a class of hide or flip it back
-if it does match it should apply a class of match and become unclickable
-else statement that runs when all cards match that alerts winner
-a function that resets the game when user wins
*/


//variables
// let clickNum = 0
// let pictureCountPerSq = 5
// let matchOrTryAgain = document.querySelector('#matchOrTryAgain')

// //functions
// function start(){
//     let box0 = getRandomInt(pictureCountPerSq)
//     let box1 = getRandomInt(pictureCountPerSq)
//     let box2 = getRandomInt(pictureCountPerSq)
//     let box3 = getRandomInt(pictureCountPerSq)
//     let box4 = getRandomInt(pictureCountPerSq)
//     let box5 = getRandomInt(pictureCountPerSq)

//     document.querySelector("#one").src = box0
//     document.querySelector("#two").src = box1
//     document.querySelector("#three").src = box2
//     document.querySelector("#four").src = box3
//     document.querySelector("#five").src = box4
//     document.querySelector("#six").src = box5
// }

// function getRandomInt(max) {
//     let result = Math.ceil(Math.random() * max)

//     let newImage

//     if (result <= 1) {
//         newImage = "img/1.png"
//     } else if (result <= 2) {
//         newImage = "img/2.png"
//     } else if (result <= 3) {
//         newImage = "img/3.png"
//     } else if (result <= 4) {
//         newImage = "img/4.png"
//     } else if (result <= 5) {
//         newImage = "img/5.png"
//     }

//     return newImage
// }
// //event listeners
// document.querySelector('button').addEventListener('click', start)

//variables
let clickNum = 0
let cardsFlipped = 0
let firstCard = null
let allowedToClick = true

let cardsArray = [
    { name: "the sun", img: "img/1.png", },
    { name: "the sun", img: "img/1.png", },
    { name: "the star", img: "img/2.png", },
    { name: "the star", img: "img/2.png", },
    { name: "the lovers", img: "img/3.png", },
    { name: "the lovers", img: "img/3.png", },
    { name: "the moon", img: "img/4.png", },
    { name: "the moon", img: "img/4.png", },
    { name: "the high priestess", img: "img/5.png", },
    { name: "the high priestess", img: "img/5.png", },
]

//credit for array https://dev.to/fakorededamilola/create-a-memory-game-with-js-1l9j

//find a way to randomize order of the array
const shuffledArray = cardsArray.sort(() => Math.random() - 0.5)
console.log(shuffledArray)

//how to shuffle: https://flaviocopes.com/how-to-shuffle-array-javascript/

//functions

//event.target = https://developer.mozilla.org/en-US/docs/Web/API/Event/target

function handleCardClick(event) {
    // console.log(event.target.id[1])
    if (allowedToClick === false) {
        console.log('nopeee')
        return
    }
    const i = event.target.id[1]
    console.log(cardsArray[i].img)
    clickNum += 1
    if (clickNum === 1) {
        event.target.src = cardsArray[i].img
        firstCard = event.target
    } else if (clickNum === 2) {
        clickNum = 0
        event.target.src = cardsArray[i].img
        console.log("you clicked on", event.target.src, "and previously you clickedon", firstCard, clickNum)
        if (firstCard.src === event.target.src) {
            console.log("it's a match")
            cardsFlipped += 2
            if(cardsFlipped === 10){
                document.querySelector('#youWon').innerHTML = "You won!"
            }
        } else {
            console.log("no match")
            allowedToClick = false
            setTimeout(
                function () {
                    flipsCardsBack(firstCard, event.target)
                    allowedToClick = true
                },
                1000)

            console.log("after set timeout")
        }
    }
}

//https://stackoverflow.com/questions/1190642/how-can-i-pass-a-parameter-to-a-settimeout-callback

function flipsCardsBack(card1, card2) {
    card1.src = "img/frontcard.png"
    card2.src = "img/frontcard.png"
}

//tps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// class Card 
//event listeners
let list = document.querySelectorAll('.cards')
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', handleCardClick)
}

document.querySelector("button").addEventListener("click", ()=>{location.reload()})
//Troi Hicks helped me with this, and mdn https://developer.mozilla.org/en-US/docs/Web/API/Location/reload