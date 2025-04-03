const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');


const cards = ['K', 'Q', 'J', '10', '9', '8', '7', '3', '2', 'A'];

const shuffle = (unshuffled) => {
  return unshuffled
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
};

let shuffled = [...shuffle(cards), ...shuffle(cards)];
console.log(shuffled);


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
  } else if (page == '/api/check') {
    if ('card' in params && 'mirror' in params) {
      const card = params['card'];
      const mirror = params['mirror'];
      if (shuffled[Number(card)] === shuffled[Number(mirror)]) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          'match': shuffled[Number(card)]
        }
        res.end(JSON.stringify(objToJson));
      } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        const objToJson = {
          'match': null
        }
        res.end(JSON.stringify(objToJson));
      }
    }
  } else if (page == '/api/cards') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    const objToJson = {
      shuffled: shuffled.map((item, index) => index)
    }
    res.end(JSON.stringify(objToJson));
  } else if (page == '/img/card.png') {
    fs.readFile('img/card.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  } else if (page == '/img/joke.png') {
    fs.readFile('img/joke.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  } else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  } else {
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
