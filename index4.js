const fs = require('fs');

fs.readFile('./texto.txt', function (err, data) { //trata de leer un archivo
    if (err){
        console.log(err);
    }
    console.log(data.toString());
})