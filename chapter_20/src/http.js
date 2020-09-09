const http = require('http');

const server = http.createServer(function(req, res) {
  console.log(`${req.method}: ${req.url}`);
  if (req.method === 'GET' && req.url === '/favicon.ico') {
    const fs = require('fs');
    fs.createReadStream('favicon.ico')
      .pipe(res);
  }
  else {
    res.end('Hello, world!');
  }
});

const port = 8080;

server.listen(port, function () {
  console.log(`server started on port ${port}`);
});