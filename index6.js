const http = require('http');

const handleServer = function (req, res) {
    res.writeHead(200, { 'Content-type':'text/html' }) // codigos de estado http Ok
    res.write('<h1>Hola Mundo desde Nodejs</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function () {
    console.log('Server on port 3000');
})

// manejando las funciones dentro de una constante
