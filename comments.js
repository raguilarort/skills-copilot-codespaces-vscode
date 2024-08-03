// Create web server and listen on port 3000
// Use the comments module to handle requests
const http = require('http');
const comments = require('./comments');

const server = http.createServer(comments.handle);

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});