// const http = require('http');
// const fs = require('fs')
// const url = require('url');
// const querystring = require('querystring');
// const figlet = require('figlet')

// const server = http.createServer(function(req, res) {
//   const page = url.parse(req.url).pathname;
//   const params = querystring.parse(url.parse(req.url).query);
//   console.log(page);

//   if (page == '/') {
//     fs.readFile('index1.html', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       res.end();
//     });

//   }else if (page == '/css/style1.css'){
//       fs.readFile('css/style1.css', function(err, data) {
//         res.write(data);
//         res.end();
//       })
//     }else if (page == '/js/main1.js'){
//       fs.readFile('js/main1.js', function(err, data) {
//         res.writeHead(200, {'Content-Type': 'text/javascript'});
//         res.write(data);
//         res.end();
//       });
//   }

//   else if (page == '/api') {
//     if (  
//       'firstName' in params &&
//       'lastName' in params &&
//       'season' in params &&
//       'element' in params &&
//       'color' in params
//     ) {
//         const name = generateWuTangName(
//         params.firstName,
//         params.lastName,
//         params.season,
//         params.element,
//         params.color
//       );


//       // Use JSON response creation from example file
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify({ name }));
//     } else {
//       res.writeHead(400, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify({ error: 'Missing word needed' }));
//     }

//   }else{
//     figlet('404!!', function(err, data) {
//       if (err) {
//           console.log('Something went wrong...');
//           console.dir(err);
//           return;
//       }
//       res.write(data);
//       res.end();
//     });
//   }
// });

// server.listen(3636); //lol i thought it would be clever to have a server of 3636 to ref the 36 chambers of shaolin