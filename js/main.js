document.querySelector('div').addEventListener('click',makeReq)

cardOne = ""
cardOneTarget = {}
cardTwo = ""

const colorList = ["#317039","#F1BE49","#CC4B24", "#0000FF", "#282828"]

let counter = 0

function makeReq(e){
  console.log(cardOne, "  ", cardTwo)
  const selectedCard = e.target.id

  if (cardOne === "") {
    cardOne = selectedCard
    e.target.style.background = colorList[counter]
    cardOneTarget = e.target
    return
  }

  if (cardTwo === "") {
    cardTwo = selectedCard
  }
  console.log(cardOne, cardTwo)
  fetch(`/api?card1=${cardOne}&card2=${cardTwo}`)
    .then(response => response.json())
    .then((data) => {

      if (data.result === true) {
        e.target.style.background = colorList[counter]
        counter += 1
      } else {
        cardOneTarget.style.background = "#fff"
      }

      cardOne = cardTwo = ""
    });

}