

const http = require("http");
const fs = require('fs');
const querystring = require('querystring');
const url = require('url');



const sever = http.createServer((req, res) =>{
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query)
    if(page == '/'){
        fs.readFile('../index.html', (error, data) =>{
            if(error){
                console.log('404 error html');
                res.writeHead(404);
                return res.end("404 page not found")
            }
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data)
        })

    }
    else if(page == '/css/index.css'){
        fs.readFile("../css/index.css", (error, data) =>{
            if(error){
                console.log('404 error css');
                res.writeHead(404);
                return res.end("404 page not found")  
            }

            res.writeHead(200, {"Content-type": "text/css"});
            res.end(data);
        })

    }
    else if(page == '/js/index.js'){
        fs.readFile("../js/index.js", (error, data) =>{
            if(error){
                console.log('404 error js');
                res.writeHead(404);
                return res.end("404 page not found")  
            }

            res.writeHead(200, {"Content-type": "application/json"});
            res.end(data);
        })
    }
})

sever.listen(5000);