const http = require('http');
const fs = require('fs');
const url = require('url');
const figlet = require('figlet');

const PORT = 8000;

const server = http.createServer((req, res) => {
    const myUrl = url.parse(req.url).pathname;

    //Routing
    if (myUrl === '/') {
        fs.readFile("index.html", (error, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        })
    } else if (myUrl === '/css/style.css') {
        fs.readFile('css/style.css', (error, data) => {
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        })
    } else if (myUrl === '/css/reset.css') {
        fs.readFile('css/reset.css', (error, data) => {
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        })
    } else if (myUrl.startsWith('/assets/')) {
        fs.readFile('.'+myUrl, (error, data) => {
            res.writeHead(200, { 'Content-Type': 'image/png' });
            res.end(data);
        })
    }else if (myUrl === '/js/main.js') {
        fs.readFile('js/main.js', (error, data) => {
            res.writeHead(200, { 'Content-Type': 'text/javascript' })
            res.end(data);
        })
    } else if (myUrl === '/memoCard') {
            res.writeHead(200, { 'Content-Type': 'text/text' })
             const result = "";
             console.log(result);
            res.end(result);
    }else {
        figlet('404!!', function (error, data) {
            if(error) {
                console.log('Something went wrong...');
                console.dir(error);
                return;
            }
            res.write(data);
            res.end();
        });
    }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));