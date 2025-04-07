const tiles = document.querySelectorAll('.cards')
const dolls = ['yasmin', 'sasha','jade','cloe']
let dollSet = dolls.concat(dolls)

function shuffle(array){
    for (let i = array.length - 1; i > 0; i--){
        
    }
    return array.sort(function(){
        return Math.random() - 0.5
    })
}

function game(){
    let shuffle = shuffle
    for (let i = 0; i < tiles.length; i++){
        tiles[i].dataset.doll = shuffled[i]
        tiles[i].textContent = ''
        tiles[i].classList.remove('flipped', 'matched')
    }
    matched = 0
    document.getElementById('text').textContent = ''
    let firstPick = null
    firstPick = null
    secondPick = null
    lockBoard = false
}

function handleClick() {
    if (lockBoard || this.classList.contains('flipped')) return

    this.classList.add('flipped')
    this.textContent = this.dataset.doll

    if (!firstPick) {
        firstPick = this
        return
    }

    secondPick = this
    lockBoard = true

    if (firstPick.dataset.doll === secondPick.dataset.doll) {
        firstPick.classList.add('matched')
        secondPick.classList.add('matched')
        matched += 2
        if (matched === 8) {
            document.getElementById('text').textContent = "You matched the Bratz dolls!"
        }
        resetPicks()
    } else {
        setTimeout(function () {
            firstPick.classList.remove('flipped')
            secondPick.classList.remove('flipped')
            firstPick.textContent = ''
            secondPick.textContent = ''
            resetPicks()
        }, 1000)
    }
}

function resetPicks() {
    firstPick = null
    secondPick = null
    lockBoard = false
}

for (var i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('click', handleClick)
}

document.getElementById('reset').addEventListener('click', setupBoard)

setupBoard()
}
