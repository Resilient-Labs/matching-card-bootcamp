// VARIABLES
let cardSet1 = document.querySelectorAll(".poke-card1")
let cardSet2 = document.querySelectorAll(".poke-card2")
let results = document.querySelector("span")
cardSet1 = Array.from(cardSet1)
cardSet2 = Array.from(cardSet2)
let defaultArray1 = [1, 2, 3, 4, 5]
let defaultArray2 = [1, 2, 3, 4, 5]
let randomArray1 = []
let randomArray2 = []
let firstCard, secondCard

// FUNCTIONS
for (let i = 0; i < defaultArray1.length; i++) {
  // generate random arrays for each variable
  let randomNum1
  do {
    let randomIndex = Math.floor(Math.random() * defaultArray1.length)
    randomNum1 = defaultArray1[randomIndex]
  } while (
    randomArray1.includes(randomNum1)
  )
  randomArray1.push(randomNum1)
}

for (let i = 0; i < defaultArray2.length; i++) {
  // generate random arrays for each variable
  let randomNum2
  do {
    let randomIndex = Math.floor(Math.random() * defaultArray2.length)
    randomNum2 = defaultArray2[randomIndex]
  } while (
    randomArray2.includes(randomNum2)
  )
  randomArray2.push(randomNum2)
}

console.log(randomArray1)
console.log(randomArray2)

// set cards back to null if they do not match
function flipCard() {
  if (firstCard.innerText !== secondCard.innerText) {
    firstCard.innerText = cardSet1.includes(firstCard) ? "" : ""
    secondCard.innerText = cardSet1.includes(secondCard) ? "" : ""
  }
  firstCard = null
  secondCard = null
}

// BUTTONS
[...cardSet1, ...cardSet2].forEach((element) => {
  element.addEventListener("click", () => {
    let gameEnd = false
    // Check if the element is in cardSet1 or cardSet2
    const index = cardSet1.includes(element) ?
      cardSet1.indexOf(element) :
      cardSet2.indexOf(element) + 5
    // display the corresponding value from randomArray1 or randomArray2
    element.innerText = cardSet1.includes(element) ? 
    randomArray1[index] : randomArray2[index - cardSet1.length]
    if (!firstCard) {
      firstCard = element
    } else if (!secondCard) {
      secondCard = element

      // Check if the two cards match and counts the number of matches
      const match = randomArray1[index] === randomArray2[index - cardSet1.length]
      let matchCount = 0
      if (match) {
        // If the two cards match, disable them
        firstCard.removeEventListener("click", flipCard)
        secondCard.removeEventListener("click", flipCard)
        firstCard = null
        secondCard = null
        matchCount++
        console.log(matchCount)
      } else {
        // If the two cards don't match, flip them back over after 1 second
        setTimeout(() => {
          // reset the cards to their original state
          flipCard()
        }, 0500)
      }
      if (matchCount == 5) {
        results.innerText = "YOU MATCHED 'EM ALL"
        return
      }
    }
  })
})
