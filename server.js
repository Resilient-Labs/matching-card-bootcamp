const http = require('http');
const fs = require('fs');
const url = require('url');
const { parse } = require('querystring');

const hostname = '127.0.0.1';
const port = 5454;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  const path = parsedUrl.pathname === '/' ? '/index.html' : parsedUrl.pathname;

  if (req.method === 'POST' && parsedUrl.pathname === '/api/gameState') {
    handleGameState(req, res);
  } else {
    serveStaticFile(req, res, path);
  }
});

function handleGameState(req, res) {
  let body = '';

  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    const gameStateData = JSON.parse(body);
    console.log(gameStateData);

    // Store or process the game state data here as needed

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Game state received' }));
  });
}

function serveStaticFile(req, res, path) {
  const contentType = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
  }[path.slice(path.lastIndexOf('.'))];

  fs.readFile(`./public${path}`, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Not found');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', contentType);
      res.end(data);
    }
  });
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
