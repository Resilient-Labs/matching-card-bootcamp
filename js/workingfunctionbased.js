let turn = 0
let points = 0

fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1') 

    .then(res => res.json())
    .then(data => {
        fetch(`https://www.deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=5`)

            .then(res => res.json())
            .then(draw => {
                let squares = [0,1,2,3,4,5,6,7,8,9]
                while (squares.length) {
                    
                    const randomSquare = squares => squares.splice((Math.random() * squares.length) | 0, 1) //https://quickref.me/get-a-random-item-and-remove-it-from-an-array

                    document.querySelector(`#square${randomSquare(squares)}img`).src = draw.cards[0].image
                    document.querySelector(`#square${randomSquare(squares)}img`).src = draw.cards[0].image
                    document.querySelector(`#square${randomSquare(squares)}img`).src = draw.cards[1].image
                    document.querySelector(`#square${randomSquare(squares)}img`).src = draw.cards[1].image
                    document.querySelector(`#square${randomSquare(squares)}img`).src = draw.cards[2].image
                    document.querySelector(`#square${randomSquare(squares)}img`).src = draw.cards[2].image
                    document.querySelector(`#square${randomSquare(squares)}img`).src = draw.cards[3].image
                    document.querySelector(`#square${randomSquare(squares)}img`).src = draw.cards[3].image
                    document.querySelector(`#square${randomSquare(squares)}img`).src = draw.cards[4].image
                    document.querySelector(`#square${randomSquare(squares)}img`).src = draw.cards[4].image
                }

            })

    })


document.querySelector('#square1').addEventListener('click', () => Flip(0))
document.querySelector('#square2').addEventListener('click', () => Flip(1))
document.querySelector('#square3').addEventListener('click', () => Flip(2))
document.querySelector('#square4').addEventListener('click', () => Flip(3))
document.querySelector('#square5').addEventListener('click', () => Flip(4))
document.querySelector('#square6').addEventListener('click', () => Flip(5))
document.querySelector('#square7').addEventListener('click', () => Flip(6))
document.querySelector('#square8').addEventListener('click', () => Flip(7))
document.querySelector('#square9').addEventListener('click', () => Flip(8))
document.querySelector('#square10').addEventListener('click',() => Flip(9))

function Flip(int) {
    turn++
    document.querySelector(`#square${int}img`).classList.toggle("hidden")

    if (turn % 2 == 0) {
        x = document.querySelector(`#square${int}img`).src
        a = `square${int}img`
        matchCheck(x,y,a,b)
        
    }

    else {
        y = document.querySelector(`#square${int}img`).src
        b = `square${int}img`
    }
    
}

function matchCheck() {
    if (x == y) {
        points++
        document.querySelector('p').innerText="Nice One!"
        document.querySelector(`#square${parseInt((a[6]))+1}`).replaceWith(document.querySelector(`#square${parseInt((a[6]))+1}`).cloneNode(true)) //https://bobbyhadz.com/blog/javascript-remove-all-event-listeners-from-element this turns off the event listeners of the matches.
        document.querySelector(`#square${parseInt((b[6]))+1}`).replaceWith(document.querySelector(`#square${parseInt((b[6]))+1}`).cloneNode(true))
        winCheck()

    }

    else {
        turn = 0
        setTimeout(() => {document.querySelector(`#${a}`).classList.toggle("hidden"),document.querySelector(`#${b}`).classList.toggle("hidden");}, 700) //https://www.sitepoint.com/delay-sleep-pause-wait/
        document.querySelector('p').innerText="Try again!"
        
        
    }
}

function winCheck() {
    if (points == 5) {
        document.querySelector('p').innerText="Congrats, you've found all the matches!"
    }
}


document.querySelector('button').addEventListener('click', newGame)

function newGame() {
    location.reload()
}

