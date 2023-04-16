const card = document.querySelectorAll('div')
const img = document.querySelectorAll('img')
const reset = document.querySelector('button')


class MemoryGame {
    constructor () {
        this.cards = ['pineapple.png', 'pineapple.png', 'avocado.jpeg', 'avocado.jpeg', 'banana.jpg', 'banana.jpg', 'watermelon.jpg', 'watermelon.jpg', 'mango.jpg', 'mango.jpg']
        
        console.log(this.cards)
    }


    shuffleArray () {
        for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = temp;
        }
    }

    newGame () {
        this.previousFlip = null
        this.clickAllowed = true

        this.shuffleArray()
        for (let i = 0; i < this.cards.length; i++) {
            const cardID = `card${i}`
            const div = document.getElementById(cardID)

            console.log(div.firstChild)
            div.firstChild.src = 'img/fruits.png'

            div.addEventListener('click', e => {
                if (div.classList.contains('matched') || this.clickAllowed === false) {
                    return 
                }
                div.firstChild.src = `img/${this.cards[i]}`
                console.log('you clicked on', div)
                if (this.previousFlip === null) {
                    this.previousFlip = div
                }
                else { 

                    console.log('compare these cards', div.firstChild.src, this.previousFlip.firstChild.src)
                    
                    if (div.firstChild.src !== this.previousFlip.firstChild.src) {
                        this.clickAllowed = false
                        console.log('no match')
                        setTimeout(() => {
                            div.firstChild.src = 'img/fruits.png'
                            this.previousFlip.firstChild.src = 'img/fruits.png'
                            this.previousFlip = null
                            this.clickAllowed = true
                        }, 1000)
                    } else {
                        div.classList.add('matched')
                        this.previousFlip.classList.add('matched')
                        this.previousFlip = null
                    }
                }
                if (this.checkWin() === true) {
                    alert('you win')
                }
            })
        }
    }
    
    // return true if the game is over, return false if the game is not
    checkWin () {
        for (let i = 0; i < this.cards.length; i++) {
            const cardID = `card${i}`
            const div = document.getElementById(cardID)
            if (div.classList.contains('matched') === false) {
                return false  // game is not over
            }
        }
        return true // all cards are matched
    }

}

const game = new MemoryGame()

game.newGame()