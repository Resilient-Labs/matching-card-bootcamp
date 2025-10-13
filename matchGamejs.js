// matching game

/*select a card,

// on click the div
that run a function 
no conditions yet 


then select a second card each card will have
 an img or emoji


on this step the condition will check if this second card matches the first card 

if it does run set of instructions and log a match in the .innerhtml its a macth
if theres a match cards connot be reselected

id the cards do not match allow to be place face down again until it findes its macth

 if the img machtes your first selection keep the cards upright
  if not flib back and select another card 
 until two set of cards macthes.*/

const cardOne = document.querySelector("#cardOne")
const cardTwo = document.querySelector("#cardTwo")
const cardThree = document.querySelector("#cardThree")
const cardFour = document.querySelector("#cardFour")
const cardFive = document.querySelector("#cardFive")
const cardSix = document.querySelector("#cardSix")
const cardSeven = document.querySelector("#cardSeven")
const cardEight = document.querySelector("#cardEight")
const cardNine = document.querySelector("#cardNine")
const cardTen = document.querySelector("#cardTen")
const alerts = document.querySelector("#alerts")
cardOne.addEventListener('click', () => { flipCards(cardOne) })
cardTwo.addEventListener('click', () => { flipCards(cardTwo) })
cardThree.addEventListener('click', () => { flipCards(cardThree) })
cardFour.addEventListener('click', () => { flipCards(cardFour) })
cardFive.addEventListener('click', () => { flipCards(cardFive) })
cardSix.addEventListener('click', () => { flipCards(cardSix) })
cardSeven.addEventListener('click', () => { flipCards(cardSeven) })
cardEight.addEventListener('click', () => { flipCards(cardEight) })
cardNine.addEventListener('click', () => { flipCards(cardNine) })
cardTen.addEventListener('click', () => { flipCards(cardTen) })

let cards = [cardOne, cardTwo, cardThree, cardFour, cardFive,
    cardSix, cardSeven, cardEight, cardNine, cardTen]

let firstCard = null
let secondCard = null

let emojis = ["👠", "👑", "💄", "💍", "🩰",
    "👠", "👑", "💄", "💍", "🩰"]

function addRandomEmojis() {
    cards.forEach(card => {
        let randomIndex = Math.floor(Math.random() * emojis.length)
        card.innerText = emojis[randomIndex]
        emojis.splice(randomIndex, 1)
    });
}
addRandomEmojis(cards)

let cardOneOriginalEmoji = cardOne.innerText
let cardTwoOriginalEmoji = cardTwo.innerText
let cardThreeOriginalEmoji = cardThree.innerText
let cardFourOriginalEmoji = cardFour.innerText
let cardFiveOriginalEmoji = cardFive.innerText
let cardSixOriginalEmoji = cardSix.innerText
let cardSevenOriginalEmoji = cardSeven.innerText
let cardEightOriginalEmoji = cardEight.innerText
let cardNineOriginalEmoji = cardNine.innerText
let cardTenOriginalEmoji = cardTen.innerText

function flipCards(card) {
    // if first card is empty means it hasnt been selected
    // after first card is selected allowed another selection.
    // if "" selected then go to flipacard
    if (firstCard === null) {
        showEmoji(card)
        firstCard = card

    } else if (secondCard === null) {
        showEmoji(card)
        secondCard = card
        setTimeout(() => { compareCards(firstCard, secondCard) }, 2000)
    }
}

function compareCards(card1, card2) {
    if (card1.innerText === card2.innerText) {
        alerts.innerText = "It's a match!"
        firstCard = null
        secondCard = null
    } else {
        alerts.innerText = "Try again!"
        firstCard = null
        secondCard = null
        hideEmoji(card1)
        hideEmoji(card2)
    }

}

function hideAllEmojis(cards) {
    cards.forEach(element => {
        element.innerText = '';
    });
}
hideAllEmojis(cards)

function hideEmoji(card) {
    card.innerText = '';
}

function showEmoji(card) {
    if (card.id.includes("cardOne")) {
        card.innerText = cardOneOriginalEmoji
    } else if (card.id.includes("cardTwo")) {
        card.innerText = cardTwoOriginalEmoji
    } else if (card.id.includes("cardThree")) {
        card.innerText = cardThreeOriginalEmoji
    } else if (card.id.includes("cardFour")) {
        card.innerText = cardFourOriginalEmoji
    } else if (card.id.includes("cardFive")) {
        card.innerText = cardFiveOriginalEmoji
    } else if (card.id.includes("cardSix")) {
        card.innerText = cardSixOriginalEmoji
    } else if (card.id.includes("cardSeven")) {
        card.innerText = cardSevenOriginalEmoji
    } else if (card.id.includes("cardEight")) {
        card.innerText = cardEightOriginalEmoji
    } else if (card.id.includes("cardNine")) {
        card.innerText = cardNineOriginalEmoji
    } else if (card.id.includes("cardTen")) {
        card.innerText = cardTenOriginalEmoji
    }

}