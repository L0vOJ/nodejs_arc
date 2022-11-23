const port=8000
const string1 = 'http://127.0.0.1:' + port
const string2 = port + '번 포트에서 서버 대기 중입니다!'
console.log(string1)

const http = require('http');

const server = http.createServer(function (req, res){
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
});

server.listen(port);

server.on('listening', () => {
  console.log();
});

server.on('error', (error) => {
  console.error(error);
});