const http = require('http');

// Créer le serveur:
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); // Définir l'en-tête de la réponse

    // Commencer la réponse HTML
    res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to the AWS Cloud!</title>
        <!-- Lien vers le fichier CSS Bootstrap -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <!-- Lien vers le fichier CSS personnalisé -->
        <style>
            body { background-color: #f8f9fa; }
            .container { margin-top: 50px; text-align: center; }
            .navbar { background-color: #333; } /* Nouvelle couleur de fond de la barre de navigation */
            .navbar-brand, .nav-link { color: white; }
            h1 { color: #333; } /* Nouvelle couleur du titre */
            .navbar-toggler-icon { background-color: white; } /* Couleur de l'icône du bouton de navigation */
            .nav-link { color: white !important; } /* Couleur du texte des liens de navigation */
        </style>
    </head>
    <body>

        <!-- Barre de navigation Bootstrap -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://example.com">AWS Cloud</a> <!-- Lien modifié pour rediriger vers une autre page -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Accueil <span class="sr-only">(current)</span></a> <!-- Changement de texte pour "Accueil" -->
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">À propos</a> <!-- Changement de texte pour "À propos" -->
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

        <!-- Contenu de la page -->
        <div class="container">
            <h1 style="color: #333;">Welcome to the AWS Cloud!</h1> <!-- Ajout du style directement dans la balise h1 -->
            <p>This is a test of CI/CD. Subscribe and like my videos!</p>
            <a href="https://example.com" class="btn btn-primary">Subscribe</a> <!-- Bouton Bootstrap -->
            <a href="https://example.com" class="btn btn-secondary">Like</a> <!-- Bouton Bootstrap -->
        </div>

        <!-- Scripts JavaScript Bootstrap -->
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </body>
    </html>`);

    // Fin de la réponse HTTP
    res.end();
}).listen(4000); // Le serveur écoute sur le port 4000
