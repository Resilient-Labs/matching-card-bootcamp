const cards = document.querySelectorAll('img')
cards.forEach(card => card.addEventListener('click', cardMatching))

function cardMatching(clickEvent) {
    debugger
    const clickedCard = clickEvent.target;
    console.log(clickedCard)
}