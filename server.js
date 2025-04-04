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
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    // check first and second parameter
    // define rules of the game (which pairs belong to each other)

    // frontend - user clicks on one card and value is stored
    // backend - evalutes whether 

    let options = {
      Card1: "valueOne",
      Card2: "valueTwo",
      Card3: "valueFour",
      Card4: "valueFive",
      Card5: "valueFive",
      Card6: "valueFour",
      Card7: "valueOne",
      Card8: "valueThree",
      Card9: "valueTwo",
      Card10: "valueThree",
    }

    console.log(options)

    // comparing values together between cardOne and cardTwo
    if (options[params['cardOne']] === options[params['cardTwo']]) {
      console.log('You have a match!')
    } else {
      console.log('Try again!')
    }

    // if('cardOne' in params){
    //   console.log(params['cardOne'])
    //   if (params['cardOne'] === params['cardTwo']) {
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     const objToJson = {
    //       name: `You selected: ${params['cardOne']} and ${params['cardTwo']}`,
    //       status: "This is a palindrome!",
    //       currentOccupation: "test"
    //     }
    //     res.end(JSON.stringify(objToJson));
    //   }//student = leon
      
    //   else if (params['cardOne'] != params['cardTwo']){
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     const objToJson = {
    //       name: `You selected: ${params['cardOne']} and ${params['cardTwo']}`,
    //       status: "This is not a palindrome...",
    //       currentOccupation: "test two"
    //     }
    //     res.end(JSON.stringify(objToJson));
    //   }//student != leon
    // }//student if
  }//else if
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