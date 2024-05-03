const http = require('http');

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
    // Link Bootstrap CSS
    res.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">');
    res.write('</head>');
    res.write('<body>');

    // Barre de navigation Bootstrap
    res.write('<nav class="navbar navbar-expand-lg navbar-light bg-light">');
    res.write('<a class="navbar-brand" href="#">AWS Cloud</a>');
    res.write('<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">');
    res.write('<span class="navbar-toggler-icon"></span>');
    res.write('</button>');

    res.write('<div class="collapse navbar-collapse" id="navbarSupportedContent">');
    res.write('<ul class="navbar-nav mr-auto">');
    res.write('<li class="nav-item active">');
    res.write('<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>');
    res.write('</li>');
    res.write('<li class="nav-item">');
    res.write('<a class="nav-link" href="#">Link</a>');
    res.write('</li>');
    res.write('<li class="nav-item">');
    res.write('<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>');
    res.write('</li>');
    res.write('</ul>');
    res.write('<form class="form-inline my-2 my-lg-0">');
    res.write('<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">');
    res.write('<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>');
    res.write('</form>');
    res.write('</div>');
    res.write('</nav>');

    // Contenu de la page
    res.write('<div class="container">');
    res.write('<h1>Welcome to the AWS Cloud!</h1>');
    res.write('<p>This is a test of CI/CD. Subscribe and like my videos!</p>');
    res.write('<img src="https://via.placeholder.com/300" alt="AWS Cloud Image">');
    res.write('<br>');
    res.write('<a href="https://example.com" class="btn btn-primary">Subscribe</a>'); // Bouton Bootstrap
    res.write('<a href="https://example.com" class="btn btn-secondary">Like</a>'); // Bouton Bootstrap
    res.write('</div>');

    // Fin de la réponse HTML
    res.write('</body>');
    res.write('</html>');

    // Fin de la réponse HTTP
    res.end();
}).listen(4000); // The server object listens on port 4000

