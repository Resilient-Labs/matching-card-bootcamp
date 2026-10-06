//have first and second card space variables declared and ready
let first_card = null
let second_card = null

const cards = document.querySelectorAll('.card')
//keep flipping cards and running the function until all are flipped
for (let i = 0; i < cards.length; i++){
    cards[i].addEventListener('click', function () {
        flipCard(i)
    })
}

function flipCard(card) {
    //if two cards are picked return
    if (second_card !== null) {
        return
    }
    //if the card is already picked return
    if (cards[card].innerHTML !== '') {
        return
    }
    //if the card is clicked twice
    if (card === first_card) {
        return
    }
    //if you haven't picked a card yet, that card is now card 1
    if (first_card === null) {
        first_card = card
    } else {
        //if you have picked a card, this card is now card 2
        second_card = card
    }

    fetch(`/flip?index=${card}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data)

            cards[card].innerHTML = data.value

            //if 2nd card, check for a match
            if (card === second_card) {
                check_match()
            }
        })
}
let score = 0
function check_match() {
    //fetch to the server with your first and second card
    fetch(`/match?first=${first_card}&second=${second_card}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            
            //if the cards are a match reset the picker so more can be chosen and +1 to score
            if (data.result) {
                score += 1
                document.querySelector('#result').innerHTML = `It's a match!`
                document.querySelector('#score').innerHTML = `Score: ${score}`
                first_card = null
                second_card = null
                
            } else {
                //if the cards are not a match, wait a second them flip them back over
                setTimeout(function () {
                    cards[first_card].innerHTML = ''
                    cards[second_card].innerHTML = ''
                    first_card = null
                    second_card = null
                }, 1000)
            }
        })
}