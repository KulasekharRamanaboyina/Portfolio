const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/home.html') {
    fs.readFile('home.html', (err, data) => {
      if (err) return res.end('Error loading HTML');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else if (req.url === '/homestyle.css') {
    fs.readFile('homestyle.css', (err, data) => {
      if (err) return res.end('Error loading CSS');
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end('404 Not Found');
  }
});

server.listen(3000, () => console.log('Server running at http://localhost:3000'));
