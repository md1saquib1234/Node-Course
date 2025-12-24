const http = require('http');
const RequestHandler = require('./user');
const server = http.createServer(RequestHandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on address hhtp://localhost:${PORT}`);
});