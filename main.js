const cards = document.querySelectorAll('.card')
cards.forEach(card => card.addEventListener('click', color))


let firstClicked = 0
let cardShow = ["front-pairOne","front-pairThree","front-pairTwo","front-pairFive","front-pairFour", "front-pairThree", "front-pairOne", "front-pairFive","front-pairTwo","front-pairFour"]
function color(event){
  console.log(event.target)
  event.target.classList.remove("back")
  const cardNumber = parseInt(event.target.id.substring(4))
  const classAdd = cardShow[cardNumber-1]
  event.target.classList.add(classAdd)
  
}

// add a toggle, setTimeout, if you havent clicked on a second card, leave 1st card up, if they dont match flip both back over, if they do leave up