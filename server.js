class MatchingCardBackend {
  constructor() {
    this.http = require('http');
    this.fs = require('fs')
    this.url = require('url');
    this.querystring = require('querystring');

    this.createServer();
    this.server.listen(8000);

    this.previousGuess = "";
  }

  createServer() {
    this.server = this.http.createServer((req, res) => {
      const page = this.url.parse(req.url).pathname;
      const params = this.querystring.parse(this.url.parse(req.url).query);
      console.log(page);
      if (page == '/') {
        this.fs.readFile('index.html', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        });
      }
      else if (page == '/startGame') {
        this.generateBoard();
      }
      else if (page == '/pickCard') {
        const result = this.pickCard(params);

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(result));
      }
      else if (page == '/css/reset.css'){
        this.fs.readFile('css/reset.css', function(err, data) {
          res.write(data);
          res.end();
        });
      }
      else if (page == '/css/theme-default.css'){
        this.fs.readFile('css/theme-default.css', function(err, data) {
          res.write(data);
          res.end();
        });
      }
      else if (page == '/css/style.css'){
        this.fs.readFile('css/style.css', function(err, data) {
          res.write(data);
          res.end();
        });
      }
      else if (page == '/js/main.js'){
        this.fs.readFile('js/main.js', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
      }
      else {
        res.writeHead(404, {'Content-Type': 'text'});
        res.write("404!");
        res.end();
      }
    });
  }

  generateBoard() {
    const cardArr = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4];

    for (let i = 0; i < cardArr.length; i++) {
      const num = cardArr.splice(i, 1)[0];
      
      if (Math.random() > .5) {
        cardArr.push(num);
      }
      else {
        cardArr.unshift(num);
      }
    }



    this.board = cardArr;
  }

  pickCard({index} = params) {


    const result = {
      cardNum: this.board[index],
      previousGuess: this.previousGuess,
      guessResult: null,
      winResult: false
    }
    
    console.log(result.cardNum, this.previousGuess);
    if (result.cardNum == null || index === this.previousGuess) return {duplicateClick: true};

    if (this.previousGuess === "") {
      this.previousGuess = index;
    }
    else {
      if (result.cardNum == this.board[this.previousGuess]) {
        result.guessResult = true;

        this.board[index] = null;
        this.board[this.previousGuess] = null;

        if (this.board.every(e => e === null)) {
          result.winResult = true;
        }
      }
      else result.guessResult = false;

      this.previousGuess = "";
    }

    return result;
  }
}

const matchingCardBackend = new MatchingCardBackend;