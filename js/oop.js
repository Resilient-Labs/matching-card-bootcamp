class Game {
    constructor(){
        this.resetGame()
    }

    isValidMove(index){ 
        return this.matched[index] === undefined && this.isWon === false ? true : false
    }

    checkWin(){
        if (this.unmatched === 0){
            this.isWon = true
        }
    }

    randomShuffle(){
        // randomizes our deck of pairs of 2
        //parts from: https://javascript.info/task/shuffle 
        //using the Fisher-Yates shuffle since they'll generate random cards with an equal proportion 
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;

            // this.deck = [ f, a, b, b, c, c, f, d, e, e, d, a]
            // this.deck[i] = d
            // this.deck[j] = f
            // temp = f

        }
    }

    matchPairs(index1, index2){
        //if it's a valid move and they didn't choose the same card
        if (this.isValidMove && index1 != index2) { 
            if (this.deck[index1] === this.deck[index2]){
                this.matched[index1] = this.deck[index1]
                this.matched[index2] = this.deck[index2]
                this.unmatched -= 2
                this.score += 20
                this.checkWin()
                return true
            } else{
                this.score -= 5
                return false
            }
        } else if(index1 === index2){ 
            console.log('You cannot choose the same card')
        }
    }
    
    nextGame(){
        // 2 of each card
        this.deck = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f']
        this.matched = Array(12)
        this.unmatched = 12
        // win status
        this.isWon = false
        this.level+= 1
        this.randomShuffle() 
    }

    resetGame(){
        this.nextGame()
        this.score = 0
        this.level = 1
    }
}

//Current problems at the moment:
//Only allow next lvl button appear when they win a game (we can make the condition of winning the game be they get a lvl as long as they match all cards and have a score of atleast 50)
