const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }

  else if (page == '/api') {
    if ('coinFlip' in params) {
      if (params['coinFlip'] == 'Heads') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const flipCoin = ['Heads', 'Tails']
        let randomFlip = flipCoin[Math.floor(Math.random() * flipCoin.length)]
        let winOrLose
        if (params['coinFlip'] == randomFlip) {
          winOrLose = 'Won'
        }
        else {
          winOrLose = 'Lose'
        }
        const objToJson = {
          yourChoice: 'Heads',
          flipResult: `The flip was ${randomFlip}`,
          winOrLoseMessage: `You ${winOrLose}!`
        }
        res.end(JSON.stringify(objToJson));
      }

      else if (params['coinFlip'] == 'Tails') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const flipCoin = ['Heads', 'Tails']
        let randomFlip = flipCoin[Math.floor(Math.random() * flipCoin.length)]
        let winOrLose
        if (params['coinFlip'] == randomFlip) {
          winOrLose = 'Won'
        }
        else {
          winOrLose = 'Lose'
        }
        const objToJson = {
          yourChoice: 'Tails',
          flipResult: `The flip was ${randomFlip}`,
          winOrLoseMessage: `You ${winOrLose}!`
        }
        res.end(JSON.stringify(objToJson));
      }
    }
  }

  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/css/background.jpeg') {
    fs.readFile('css/background.jpeg', function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else {
    figlet('404!!', function (err, data) {
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




