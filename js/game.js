//(cory helped me with this assignment)
//used some of the logic from my tic tac toe game and refactored as needed
function Player(name) {
    this.name = name;
}

//used stackoverflow to figure this out lines(10-14): https://stackoverflow.com/questions/66306555/how-to-getelementbyid-for-another-html-page
const url_string = window.location.href;
const url = new URL(url_string);

player1 = new Player(url.searchParams.get("p1"));
player2 = new Player(url.searchParams.get("p2"));
player3 = new Player(url.searchParams.get("p3"));

class Game {
    cells = document.querySelectorAll('.card')
    rematch = document.querySelector('#reset')
    restart = document.querySelector('#reset-all')
    updateStatus = document.querySelector('h3')
    currentScore1 = document.querySelector('#pl-1')
    currentScore2 = document.querySelector('#pl-2')
    currentScore3 = document.querySelector('#pl-3')

    currentPlayer = player1;
    gameOver = false;
    arrayLetters = [
        'ا', 'ا', // Alif
        'ب', 'ب', // Ba
        'ت', 'ت', // Ta
        'ث', 'ث', // Tha
        'ج', 'ج', // Jeem
        'ح', 'ح', // Haa
    ];
    /**
     *  'خ', 'خ', // Khaa
        'د', 'د', // Dal
        'ذ', 'ذ', // Thal
        'ر', 'ر', // Ra
        'ز', 'ز', // Zay
        'س', 'س', // Seen
     *  'ش', 'ش', // Sheen
        'ص', 'ص', // Saad
     *  'ض', 'ض', // Daad
        'ط', 'ط', // Taa
        'ظ', 'ظ', // Zaa
        'ع', 'ع', // Ain
        'غ', 'غ', // Ghayn
        'ف', 'ف', // Fa
        'ق', 'ق', // Qaf
        'ك', 'ك', // Kaf
        'ل', 'ل', // Lam
        'م', 'م', // Meem
        'ن', 'ن', // Noon
        'و', 'و', // Waw
        'ه', 'ه', // Ha
        'لا', 'لا', // Lam-Alif combo
        'ء', 'ء', // Hamza
        'ي', 'ي'  // Ya
     */
    cardFlipped = []
    player1Score = 0;
    player2Score = 0;
    player3Score = 0;
    canPlay = true;
    board = document.querySelector('.board')


    checkwinner() {
        // fix: check if all cards are hidden (used chat GPT to figure out the allHidden logic)
        const allHidden = [...this.cells].every(c => c.classList.contains('hidden'))
        if (allHidden) {
            this.gameOver = true;
            const p1 = this.player1Score
            const p2 = this.player2Score
            const p3 = this.player3Score

            if (p1 > p2 && p1 > p3) {
                this.updateStatus.innerText = `The winner is ${player1.name} with a score of ${p1}`
            } else if (p2 > p1 && p2 > p3) {
                this.updateStatus.innerText = `The winner is ${player2.name} with a score of ${p2}`
            } else if (p3 > p2 && p3 > p1) {
                this.updateStatus.innerText = `The winner is ${player3.name} with a score of ${p3}`
            } else if (p1 === p2 && p1 > p3) {
                this.updateStatus.innerText = `The winner is ${player1.name} and ${player2.name} with a tied score of ${p1} points`
            } else if (p1 === p3 && p1 > p2) {
                this.updateStatus.innerText = `The winner is ${player1.name} and ${player3.name} with a tied score of ${p1} points`
            } else if (p2 === p3 && p2 > p1) {
                this.updateStatus.innerText = `The winner is ${player2.name} and ${player3.name} with a tied score of ${p2} points`
            } else {
                this.updateStatus.innerText = `We have a 3-way tie! Congrats to ${player1.name}, ${player2.name}, and ${player3.name} with ${p1} points each!`
            }
        }
    }

    startGame() {
        this.cells.forEach((x, i) => x.addEventListener('click', () => this.updateCell(i)))
        this.randomBoard()
        this.rematch.addEventListener('click', () => this.rematchGame())
        this.restart.addEventListener('click', () => this.startOver())
        this.updateStatus.innerText = `It's ${this.currentPlayer.name}'s turn`;
        this.updateScoreboard()
    }

    updateCell(i) {
        if (this.gameOver) return;
        if (this.canPlay === false) return;

        const cell = this.cells[i];
        if (cell.classList.contains('flipped')) return;
        //to prevent clicking the same card for points (cory helped me)
        if (this.cardFlipped === 1 && this.cardFlipped[0] === cell) return;
        cell.classList.add('checked')
        cell.classList.add('flipped');
        cell.style.color = '#d9480f'
        this.cardFlipped.push(cell)

        if (this.cardFlipped.length === 2) {
            this.canPlay = false;


            if (this.cardFlipped[0].innerText === this.cardFlipped[1].innerText && this.currentPlayer === player1) {
                this.player1Score += 2;
                this.updateScoreboard();

                setTimeout(() => {
                    this.deleteMatch();
                    this.update()
                }, 1000)
            } else if (this.cardFlipped[0].innerText === this.cardFlipped[1].innerText && this.currentPlayer === player2) {
                this.player2Score += 2;
                this.updateScoreboard();

                setTimeout(() => {
                    this.deleteMatch();
                    this.update()
                }, 1000)
            } else if (this.cardFlipped[0].innerText === this.cardFlipped[1].innerText && this.currentPlayer === player3) {
                this.player3Score += 2;
                this.updateScoreboard();

                setTimeout(() => {
                    this.deleteMatch();
                    this.update()
                }, 1000)
            } else {
                setTimeout(() => {
                    this.update()
                    if (!this.gameOver) {
                        this.switchPlayer()
                        this.updateStatus.innerText = `It's ${this.currentPlayer.name}'s turn`;
                    }
                    this.canPlay = true;
                }, 1000);
            }
        }
    }

    deleteMatch() {
        this.cardFlipped.forEach(cell => cell.classList.add('hidden'))
        this.cardFlipped = []
        this.canPlay = true
    }

    update() {
        if (this.cardFlipped.length >= 2) {
            this.cardFlipped[0].classList.remove('checked')
            this.cardFlipped[1].classList.remove('checked')
            this.cardFlipped[0].classList.remove('flipped')
            this.cardFlipped[1].classList.remove('flipped')
            this.cardFlipped[0].style.color = 'transparent'
            this.cardFlipped[1].style.color = 'transparent'
        }

        this.cardFlipped = []
        this.checkwinner()

        this.canPlay = true
    }

    switchPlayer() {
        //used chat GPT to debug the logic for knowing when to check for how many players are playing
        if (player1.name && player2.name && player3.name) {
            if (this.currentPlayer === player1) {
                this.currentPlayer = player2;
            } else if (this.currentPlayer === player2) {
                this.currentPlayer = player3
            } else {
                this.currentPlayer = player1
            }
        } else if (player1.name && player2.name) {
            if (this.currentPlayer === player1) {
                this.currentPlayer = player2;
            } else {
                this.currentPlayer = player1;
            }
        } else {
            this.currentPlayer = player1
        }
    }


    updateScoreboard() {
        if (player1.name && player2.name && player3.name) {
            this.currentScore1.innerText = `${player1.name}'s score: ${this.player1Score}`;
            this.currentScore2.innerText = `${player2.name}'s score: ${this.player2Score}`;
            this.currentScore3.innerText = `${player3.name}'s score: ${this.player3Score}`;
        } else if (player1.name && player2.name) {
            this.currentScore1.innerText = `${player1.name}'s score: ${this.player1Score}`;
            this.currentScore2.innerText = `${player2.name}'s score: ${this.player2Score}`;
        }
        else {
            this.currentScore1.innerText = `${player1.name}'s score: ${this.player1Score}`;
        }
    }

    rematchGame() {
        let cards = document.querySelectorAll('.hidden')
        cards.forEach(cell => {
            cell.classList.remove('hidden')
            cell.classList.remove('flipped')
        });
        this.player1Score = 0
        this.player2Score = 0
        this.player3Score = 0
        this.updateScoreboard()
        this.startGame()
        this.updateStatus.innerText = `It's ${this.currentPlayer.name}'s turn`;
        this.gameOver = false
    }

    startOver() {
        window.open(`index.html`, '_self');
    }

    randomBoard() {
        const shuffled = this.arrayLetters.sort(() => Math.random() - 0.5);
        this.cells.forEach((cell, i) => {
            cell.innerHTML = shuffled[i];
            cell.style.color = 'transparent';
            cell.classList.remove('hidden')
            cell.classList.remove('checked')
        });
    }
}

const game = new Game()
game.startGame()
