//Morning Challenge: Make a 10 card memory game - users must be able to select two cards and check if they are a match. If they are a match, they stay flipped. If not, they flip back over. Game is done when all cards are matched and flipped over.
/*
-create an array (0-9) [rappers]
-create a grid 
-use Math.random to randomize the array 
-conditional statements that has an incremental timer that waits for second click no timer 
-after timer expires run through win conditional statment to check if there's a match no timer just check done
-if cards don't match it should reapply a class of hide or flip it back done
-if it does match it should apply a class of match and become unclickable done
-else statement that runs when all cards match that alerts winner done
-a function that resets the game when user wins -> couldnt complete in time
*/

// let arr = ["zorocasino.png", 2, 3];

// shuffle(arr);


// -create an array (0-9).
// const cards = document.querySelectorAll('.card')
// const type = [
//     {img:'images/playboiUzi.jpg'},
//     {img:'images/playboiUzi.jpg'},
//     {img:'images/yopierre.jpg'},
//     {img:'images/yopierre.jpg'},
//     {img:'images/Oblock.jpg'},
//     {img:'images/Oblock.jpg'},
//     {img:'images/KANKAN.jpg'},
//     {img:'images/KANKAN.jpg'},
//     {img:'images/autumar.jpg'},
//     {img:'images/autumar.jpg'},
// ]


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('section').addEventListener('click', () => {
        document.querySelector('table').innerHTML = ""


        const gamePic = [{
                name: 'KANKAN',
                img: 'images/KANKAN.jpg'
            }, {
                name: 'KANKAN',
                img: 'images/KANKAN.jpg'
            },
            {
                name: 'playboiUZI',
                img: 'images/playboiUzi.jpg'
            }, {
                name: 'playboiUZI',
                img: 'images/playboiUzi.jpg'
            },
            {
                name: 'Pierre Bourne',
                img: 'images/yopierre.jpg'
            }, {
                name: 'Pierre Bourne',
                img: 'images/yopierre.jpg'
            },
            {
                name: 'Chief Keef',
                img: 'images/Oblock.jpg'
            }, {
                name: 'Chief Keef',
                img: 'images/Oblock.jpg'
            },
            {
                name: 'Autumn!',
                img: 'images/autumar.jpg'
            }, {
                name: 'Autumn!',
                img: 'images/autumar.jpg'
            },
            {
                name: 'YEAT',
                img: 'images/NewTurban.jpg'
            }, {
                name: 'YEAT',
                img: 'images/NewTurban.jpg'
            }
        ]

        const table = document.querySelector('table')
        var rapperChosen = []
        var rapperID = []
        var rapperWon = []

        function createGame() {
            for (let i = 0; i < gamePic.length; i++) {
                let card = document.createElement('img')
                card.setAttribute('src', 'images/Soiiceyy.jpg')
                card.setAttribute('data-id', i)
                card.addEventListener('click', moneyFlip)
                table.appendChild(card)
                card.classList.add("wheel")
                
            }
        }
        createGame()

        function matchFinder() {
            var cards = document.querySelectorAll('img')
            const choice1ID = rapperID[0]
            const choice2ID = rapperID[1]

            if (rapperChosen[0] === rapperChosen[1]) {
                document.querySelector('h3').innerText = `Yooooo you found ${rapperChosen[0]}!!`
                rapperWon.push(rapperChosen)
            } else {
                cards[choice1ID].setAttribute('src', 'images/Soiiceyy.jpg')
                cards[choice2ID].setAttribute('src', 'images/Soiiceyy.jpg')
                document.querySelector('h3').innerText = 'Sorry thats wrong keep looking'
            }
            rapperChosen = []
            rapperID = []
            console.log(rapperWon)
            if (rapperWon.length === gamePic.length / 2) {
                document.querySelector('h3').innerText = "Congrats you won!!"
            }
        }

        function moneyFlip() {
            var rapperflipID = this.getAttribute('data-id')
            rapperChosen.push(gamePic[rapperflipID].name)
            rapperID.push(rapperflipID)
            this.setAttribute('src', gamePic[rapperflipID].img)
            if (rapperChosen.length === 2) {
                setTimeout(matchFinder, 500)
            }
        }
        gamePic.sort(() => 0.5 - Math.random())
    })
})