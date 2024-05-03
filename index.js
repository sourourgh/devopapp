var http = require('http');

// Create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'}); // Set the response header
  res.write('<h1>Welcome to the AWS Cloud!</h1>'); // Write a response to the client
  res.write('<p>This is a test of CI/CD. Subscribe and like my videos!</p>'); // Add additional content
  res.end(); // End the response
}).listen(4000); // The server object listens on port 4000

