const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')// does something

let cards = []

//function that shuffles the cards
function runGame() {
  cards = ["KAT", "KAT", "Jalen Brunson", "Jalen Brunson", "Josh Hart", "Josh Hart", "Mikal Bridges", "Mikal Bridges", "OG", "OG"]
  //randomize where the names appear on the board
    cards.sort(() => Math.random() - 0.5)
}

//server to display
const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname; // taking the url and making it readable
  const params = querystring.parse(url.parse(req.url).query)
  console.log(page)
    if (page == '/') {
    runGame()
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
    // if you flip the first card
    else if (page == '/flip') {
        //finds the space that the user clicks
        if ('index' in params) {
            let card_value = cards[params['index']]
            res.writeHead(200, { 'Content-Type': 'application/json' })
            let objToJson = {
                value: card_value
            }
            res.end(JSON.stringify(objToJson))
        }
    }
      //after you flip the second card we check to see if they match
    else if (page == '/match') {
          if ('first' in params && 'second' in params) {
              let result = cards[params['first']] === cards[params['second']]
              res.writeHead(200, { 'Content-Type': 'application/json' })
              let objToJson = {
                  result: result
              }
              res.end(JSON.stringify(objToJson))
          }
      }

//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);