const http = require('http');
const express = require('express');
const productos = require('./routes/productos');
const app = express();
app.use(express.json());
app.use('/productos', productos);
app.use('/', function (req, res) {
    res.send('Está funcionando');
});
const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Aplicación funcionando en ' + port);