var http = require('http');

// Create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'}); // Set the response header

  // Début de la réponse HTML
  res.write('<!DOCTYPE html>');
  res.write('<html lang="en">');
  res.write('<head>');
  res.write('<meta charset="UTF-8">');
  res.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
  res.write('<title>Welcome to the AWS Cloud!</title>');
  res.write('<style>');
  res.write('body { font-family: Arial, sans-serif; text-align: center; background-color: #f8f9fa; }');
  res.write('h1 { color: #007bff; }');
  res.write('p { color: #6c757d; }');
  res.write('.container { margin-top: 50px; }');
  res.write('.button { background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-right: 10px; }');
  res.write('</style>');
  res.write('</head>');
  res.write('<body>');

  // Contenu de la page
  res.write('<div class="container">');
  res.write('<h1>Welcome to the AWS Cloud!</h1>');
  res.write('<p>This is a test of CI/CD. Subscribe and like my videos!</p>');
  res.write('<img src="https://via.placeholder.com/300" alt="AWS Cloud Image">');
  res.write('<br><a href="https://example.com" class="button">Subscribe</a>');
  res.write('<a href="https://example.com" class="button">Like</a>');
  res.write('</div>');

  // Fin de la réponse HTML
  res.write('</body>');
  res.write('</html>');

  // Fin de la réponse HTTP
  res.end();
}).listen(4000); // The server object listens on port 4000
