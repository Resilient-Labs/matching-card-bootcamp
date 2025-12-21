document.querySelector('select').addEventListener('change', showResults)
document.querySelector('button').addEventListener('click', nextPage)


let option1 = document.getElementById('1-player').value
let option2 = document.getElementById('2-player').value
let option3 = document.getElementById('3-player').value
const load = document.querySelector('#container')

let result = document.querySelector('h4')

function showResults() {
    const selected = document.querySelector('select').value
    console.log(option1, option2, option3)
    if (selected === option2) {
        document.getElementById('player-2').classList.remove('hidden')
        document.getElementById('player-3').classList.add('hidden')
    } else if (selected === option3) {
        document.querySelectorAll('.hidden').forEach(item => item.classList.remove('hidden'))
    }
}
function start(p1, p2, p3) {
    if (p1 && p2 && p3) {
        window.open(`game.html?p1=${p1}&p2=${p2}&p3=${p3}`, '_self');
    } else if (p1 && p2) {
        window.open(`game.html?p1=${p1}&p2=${p2}`, '_self');
    } else {
        window.open(`game.html?p1=${p1}`, '_self');
    }
}
function nextPage() {
    let player1 = document.querySelector('#player-1').value
    let player2 = document.querySelector('#player-2').value
    let player3 = document.querySelector('#player-3').value
    if (player1 && player2 && player3) {
        setTimeout(() => start(player1, player2, player3), 3000)
        load.classList.remove('hidden1')
    } else if (player1 && player2) {
        setTimeout(() => start(player1, player2), 3000)
        load.classList.remove('hidden1')
    } else if (player1) {
        setTimeout(() => start(player1), 3000)
        load.classList.remove('hidden1')
    } else {
        result.innerText = 'Cannot begin until all players have inserted their names.'
    }
}
