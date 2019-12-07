var products = require('./../controllers/products.js');
var path = require('path');

module.exports = function(app){
    app.get('/api/products', products.index);
    app.post('/api/products/new', products.create);
    app.get('/api/products/:id', products.show);
    app.put('/api/products/:id/edit', products.update);
    app.delete('/api/products/:id', products.delete);
    app.all('*', (req, res, next) =>{
        res.sendFile(path.resolve('./public/dist/public/index.html'))
    });
}