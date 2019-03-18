const http = require('http'); //access to the network (considered a node-module)
const fs = require('fs'); //access to the file system (considered a node-module)
http.createServer(function (req, res) {
  fs.readFile('../index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8000);
