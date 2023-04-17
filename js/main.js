// Worked with Mark, Christina also a couple youtube videos to achieve this 


//Variables
const card = document.querySelectorAll('div')
const img = document.querySelectorAll('img')


//create a blueprint/constructor for the images that will then be shuffled 


class MemoryGame {
    constructor () {
        this.cards = ['mulan2.jpg', 'mulan2.jpg', 'mulan3.jpg', 'mulan3.jpg', 'mulan4.jpg', 'mulan4.jpg', 'mulan5.jpg', 'mulan5.jpg', 'mulan6.jpg', 'mulan6.jpg', ]
        
        console.log(this.cards)
    }

//create a function that will shuffle the images
    shuffleArray () {
        for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = temp;
        }
    }
// Define a function to start a new game

    newGame () {
        this.previousFlip = null
        this.clickAllowed = true

        this.shuffleArray()
        for (let i = 0; i < this.cards.length; i++) {
            const cardID = `card${i}`
            const div = document.getElementById(cardID)

            console.log(div.firstChild)
            div.firstChild.src = 'img/mulan1.jpg'

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

                    // console.log('compare these cards', div.
                    
                    // firstChild.src, this.previousFlip.firstChild.src)
                    
                    if (div.firstChild.src !== this.previousFlip.firstChild.src) {
                        this.clickAllowed = false
                        console.log('no match')
                        setTimeout(() => {
                            div.firstChild.src = 'img/mulan1.jpg'
                            this.previousFlip.firstChild.src = 'img/mulan1.jpg'
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
    
// Define a function to check if the game is won
    checkWin () {
        for (let i = 0; i < this.cards.length; i++) {
            const cardID = `card${i}`
            const div = document.getElementById(cardID)
            if (div.classList.contains('matched') === false) {
                return false 
            }
        }
        return true 
    }

}

const game = new MemoryGame()

game.newGame()