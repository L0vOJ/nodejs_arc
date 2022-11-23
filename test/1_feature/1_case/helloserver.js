var port=8000
var string = 'http://127.0.0.1:' + port
console.log(string)

const http = require('http');

const server = http.createServer(function (req, res){
  res.writeHead(200, { 'Content-Type' : 'text/plain' });
  res.end('Hello World');
});

server.listen(port);
