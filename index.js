var http = require('http');
var fs = require('fs');
var path = require('path');

// Un tableau pour stocker les produits
var products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 }
];

// Fonction pour générer une liste HTML des produits
function generateProductList() {
    var productList = '<ul>';
    products.forEach(function(product) {
        productList += '<li>' + product.name + ' - $' + product.price + ' <button class="add-to-cart" data-id="' + product.id + '">Add to Cart</button></li>';
    });
    productList += '</ul>';
    return productList;
}

// Créer un serveur HTTP
http.createServer(function (req, res) {
    // Route pour servir les fichiers statiques
    var filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html';
    }

    var extname = String(path.extname(filePath)).toLowerCase();
    var contentType = 'text/html';
    var mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript'
    };

    contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function(error, content) {
        if (error) {
            if (error.code == 'ENOENT'){
                res.writeHead(404);
                res.end('404 Not Found');
            } else {
                res.writeHead(500);
                res.end('500 Internal Server Error');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
}).listen(4000); // Le serveur écoute sur le port 4000
