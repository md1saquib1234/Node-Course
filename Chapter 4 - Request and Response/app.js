const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === '/') {
     res.setHeader('Content-Type', 'text/html');
     res.write('<html>');
     res.write('<head><tittle>Complete Coding</tittle></head>');
     res.write('<body><h1>Welcome to Home</h1></body>');
     res.write('</html>');
     return res.end();
  } else if (req.url === '/products') {
     res.setHeader('Content-Type', 'text/html');
     res.write('<html>');
     res.write('<head><tittle>Complete Coding</tittle></head>');
     res.write('<body><h1>Checkout our product</h1></body>');
     res.write('</html>');
     return res.end();

  } 
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><tittle>Complete Coding</tittle></head>');
  res.write('<body><h1>Like / Share / Subscribe</h1></body>');
  res.write('</html>');
  res.end();
});
const port = 3001;
server.listen(port, () => {
  console.log(`Server running on address http://localhost:${port}`);
});
