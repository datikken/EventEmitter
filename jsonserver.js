const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type' : 'application/json' });
    res.write(JSON.stringify({ name: 'vasya' }));
    res.end();
}).listen(8888);