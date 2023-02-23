const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-type':'text/html' }) // codigos de estado http Ok
    res.write('<h1>Hola Mundo desde Nodejs</h1>');
    res.end();
}).listen(3000);

/* ahora puedo acceder desde el navegador a la direccion
http://localhost:3000 y poder visualizar mi h1 con el mensaje
Hola Mundo desde Nodejs*/