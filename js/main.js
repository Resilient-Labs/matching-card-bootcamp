const container = document.querySelector('.container')
container.addEventListener('click', whichCard)

document.querySelector('button').addEventListener('click', random)

let flipOne = undefined
let flipTwo = undefined


function random() {
    container.innerHTML = ''

    let cards = [
        '⚾', '⚾',
        '🧢', '🧢',
        '🌭', '🌭',
        '🧦', '🧦',
        '🏟️', '🏟️'
    ]

    while (cards.length > 0) {
        const rando = Math.floor(Math.random() * cards.length)
        const div = document.createElement('div')

        div.classList.add('card')
        div.dataset.symbol = cards[rando]
        container.appendChild(div)
        cards.splice(rando, 1)
    }

    flipOne = undefined
    flipTwo = undefined
}

random()


function whichCard(e) {

    if (!e.target.classList.contains('card')) {
        return
    }

    e.target.innerText = e.target.dataset.symbol

    if (flipOne != undefined) {
        flipTwo = e.target
    } else {
        flipOne = e.target
        return
    }

    if (flipOne.dataset.symbol === flipTwo.dataset.symbol) {
        console.log('match!')
    } else {
        flipOne.innerText = ''
        flipTwo.innerText = ''
    }

    flipOne = undefined
    flipTwo = undefined
}