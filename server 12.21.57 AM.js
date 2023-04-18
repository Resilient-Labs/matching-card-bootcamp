const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');


const server = http.createServer(function (req, res) {
 const page = url.parse(req.url).pathname;
 const params = querystring.parse(url.parse(req.url).query);
 console.log(page);
 if (page == '/') {
   fs.readFile('index.html', function (err, data) {
     if (err) {
       res.writeHead(404);
       res.write('File not found!');
     } else {
       res.writeHead(200, { 'Content-Type': 'text/html' });
       res.write(data);
     }
     res.end();
   });
 } else if (page == '/otherpage') {
   fs.readFile('otherpage.html', function (err, data) {
     if (err) {
       res.writeHead(404);
       res.write('File not found!');
     } else {
       res.writeHead(200, { 'Content-Type': 'text/html' });
       res.write(data);
     }
     res.end();
   });
 } else if (page == '/otherotherpage') {
   fs.readFile('otherotherpage.html', function (err, data) {
     if (err) {
       res.writeHead(404);
       res.write('File not found!');
     } else {
       res.writeHead(200, { 'Content-Type': 'text/html' });
       res.write(data);
     }
     res.end();
   });
 } else if (page == '/api') {
   const coinFlip = ['heads', 'tails'];
   const flipLower = params['student']?.toLowerCase();
   if (flipLower) {
     const flip = coinFlip[Math.floor(Math.random() * coinFlip.length)];
     let onlyWins = '';
     if (flipLower == flip) {
       onlyWins = 'You Win!';
     } else {
       onlyWins = 'You Lose :P';
     }
     const objToJson = {
       coinSide: `Your choice was: ${flipLower}`,
       endResult: `After coin toss, you received: ${flip}`,
       letsSee: `${onlyWins}`,
     };
     res.writeHead(200, { 'Content-Type': 'application/json' });
     res.end(JSON.stringify(objToJson));
   } else {
     const objToJson = {
       coinSide: 'unknown',
       endResult: 'unknown',
       letsSee: 'unknown',
     };
     res.writeHead(200, { 'Content-Type': 'application/json' });
     res.end(JSON.stringify(objToJson));
   }
 } else if (page == '/css/style.css') {
   fs.readFile('css/style.css', function (err, data) {
     if (err) {
       res.writeHead(404);
       res.write('File not found!');
     } else {
       res.writeHead(200, { 'Content-Type': 'text/css' });
       res.write(data);
     }
     res.end();
   });
 } else if (page == '/js/main.js') {
   fs.readFile('js/main.js', function (err, data) {
     if (err) {
       res.writeHead(404);
       res.write('File not found!');
     } else {
       res.writeHead(200, { 'Content-Type': 'text/javascript' });
       res.write(data);
     }
     res.end();
   });
 } else {
   figlet('404!!', function (err, data) {
     if (err) {
       console.log('Something went wrong...');
       console.dir(err);
       res.writeHead(500);
       res.write('Internal server error!');
       res.end();
     }
   })
}})




server.listen(8000);
