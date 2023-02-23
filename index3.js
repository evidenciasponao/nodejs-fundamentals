const fs = require('fs'); //modulo file system

fs.writeFile('./texto.txt', 'linea uno', function(err) {
    if (err) {
        console.log(err);
    }
    console.log('Archivo creado');
});

console.log('ultima linea de codigo');

/*Codigo asyncrono de nodejs, permite dar la orden al so
de crear un archivo, mientras tanto seguir ejecutando codigo
por esta razon en consola veremos primero 
ultima linea de codigo
Archivo creado*/