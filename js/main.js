const container = document.querySelector('#container')
container.addEventListener('click', pickCard)

const message = document.querySelector('#message')
let matches = 0 // how many matches the play has found

document.querySelector('button').addEventListener('click', random)
let flipOne = undefined
let flipTwo = undefined
// randomize cards outside
function random() { 
    container.innerHTML = ''
    // vvv cards
    let cards = ['turtle', 'turtle', 'frog', 'frog', 'cat', 'cat', 'dog', 'dog', 'mouse', 'mouse']
    while (cards.length > 0) { //<---- while (cards.length) truthy
        const rando = Math.floor(Math.random() * cards.length)
        const div = document.createElement('div')
        container.appendChild(div)
        div.classList.add(cards[rando])
        div.innerText = 'Card' // empty string to help css
        cards.splice(rando, 1)
    }
    flipOne = undefined
    flipTwo = undefined 
}
random()


function pickCard(e) {
    console.log(e.target) ///<--- the element that the user clicked on (target)
    //click/ flip, click /flip, them compare
    // vv looking inside our element and changing its InnerText to its Class Name
    e.target.innerText = e.target.className
    // create variables to store
    if (flipOne != undefined) {
        flipTwo = e.target
    } else {
        flipOne = e.target
        return
    }
    // a = c 
    // b = c
    // a = b
    if (flipOne.className === flipTwo.className) {
        console.log('Match')
        // if match stay flipped
        matches++ //<- counts/adds a matched pair

        if(matches === 5){
            message.innerText = 'You WONNN!!'
        }
        
        flipOne = undefined // <-- Keep so the next pair starts fresh
        flipTwo = undefined

    } else {
        console.log('Try Again')
        //if not match flip back
        lock = true // <- blocks user from clicking during the timeout

        // vvv added because wrong guess = wait 1 second so the player can see the second card,
        // then flip both cards back face down
        setTimeout(function () {
            flipOne.innerText = 'Card' // empty string to help css
            flipTwo.innerText = 'Card' // empty string to help css

            // after every match set
            flipOne = undefined
            flipTwo = undefined
            lock = false // lets user click again

        }, 500)
    }
}
