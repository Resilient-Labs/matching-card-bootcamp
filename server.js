const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if(!('card1' in params && 'card2' in params)){
      res.writeHead(400, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(objToJson));
    }

    const pairs = {
      "cardOne": "cardThree",
      "cardTwo": "cardFive",
      "cardFour": "cardTen",
      "cardEight": "cardNine",
      "cardSeven": "cardSix",

      "cardThree":"cardOne",
      "cardFive":"cardTwo",
      "cardTen":"cardFour",
      "cardNine":"cardEight",
      "cardSix":"cardSeven"
    }
    
    res.writeHead(200, {'Content-Type': 'application/json'});
    const objToJson = {
      result: pairs[params['card1']] === params['card2']
    }
    res.end(JSON.stringify(objToJson));
  }
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
