const express = require('express'); // requerimos el modulo express
const colors = require('colors'); // requerimos el modulo colors

const server = express(); // creamos el servidor

server.get('/', function(req, res){ // al hacer una peticion al servidor responde con un h1
    res.send('<h1>Hola Mundo con Express y Node</h1>');
    res.end();
})

server.listen(3000, function() { // servidor escuchando en el puerto 3000
    console.log('Server on port 3000'.red);
});

// haciendo uso del modulo express para crear nuestro servidor
