    const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
// const figlet = require('figlet');

    const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);

    if (page === '/') {
        fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error loading index.html');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
        });
    } else if (page === '/api') {
        if (params.student === 'leon') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const objToJson = {
            name: 'leon',
            status: 'Boss Man',
            currentOccupation: 'Baller'
        };
        res.end(JSON.stringify(objToJson));
        } else {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Unknown match' }));
        }
    } else if (page === '/css/style.css') {
        fs.readFile('css/style.css', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error loading style.css');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(data);
        res.end();
        });
    } else if (page === '/js/main.js') {
        fs.readFile('js/main.js', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error loading main.js');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.write(data);
        res.end();
        });
    } else {
        // figlet('404!!', (err, data) => {
        // if (err) {
        //     console.log('Something went wrong...');
        //     console.dir(err);
        //     res.writeHead(500, { 'Content-Type': 'text/plain' });
        //     res.end('Something went wrong...');
        //     return;
        // }
        // });
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(8000);