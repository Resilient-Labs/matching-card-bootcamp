//continue to practice 
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
    /*const eachSection = ['🚕', '🚕', '🗽', '🗽', '🌃', '🌃', '🍕', '🍕', '🍎', '🍎']
    const randomEachSection = []

    function eachSectionReturn() {
      //while (eachSection.length <=0)
      for (let i = 0; i < 10; i++) {
        let randomNumber = Math.floor(Math.random() * eachSection.length)
        let theCards = eachSection.splice(randomNumber, 1)[0];
        randomEachSection.push(theCards)
      }
      return randomEachSection
    }
    function theGame(e, i) {
 
      console.log(i);
      
       let theSquares = eachSectionReturn()
       e.target.innerText = theSquares[i]
     
      }*/
    if ('pick' in params) {
      if (params['pick'] == (theSquares[i])) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const objToJson = {
          display: "It is a match!"


        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if (params['pick'] != (theSquares[i])) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const objToJson = {
          display: "Try Again!"
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
